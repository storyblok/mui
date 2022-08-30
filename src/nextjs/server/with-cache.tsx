import {createEmotionCache} from "@src/nextjs/create-cache"; // TODO do not depend on browser
import React from "react";

// createEmotionServer is from "@emotion/server/create-instance" and has a different target.
// if we want to remove the argument, we need to distribute this file in a separate export
type WithEmotionCache = <D extends Function, >(DocumentComponent: D, createEmotionServer: Function) => D


/**
 * In nextjs, wrap your default export in _document.tsx within this function
 */
const withServerSideEmotionCache: WithEmotionCache = (DocumentComponent, createEmotionServer) => {
    // @ts-ignore
    const getInitialProps: Function | undefined = 'getInitialProps' in DocumentComponent ? DocumentComponent.getInitialProps : undefined
    if(!getInitialProps){
        throw new TypeError('getInitialProps is not a function. Document component must be a class')
    }
    // @ts-ignore
    DocumentComponent.getInitialProps = async (ctx) => {
        // Resolution order
        //
        // On the server:
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. document.getInitialProps
        // 4. app.render
        // 5. page.render
        // 6. document.render
        //
        // On the server with error:
        // 1. document.getInitialProps
        // 2. app.render
        // 3. page.render
        // 4. document.render
        //
        // On the client
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. app.render
        // 4. page.render

        const initialProps = await getInitialProps(ctx);
        const originalRenderPage = ctx.renderPage;

        // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
        // However, be aware that it can have global side effects.
        const cache = createEmotionCache();
        const {extractCriticalToChunks} = createEmotionServer(cache);

        ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App: any) => function Enhance(props: JSX.IntrinsicAttributes) {
                    return <App emotionCache={cache} {...props} />
                },
            });

        // This is important. It prevents emotion to render invalid HTML.
        // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
        const emotionStyles = extractCriticalToChunks(initialProps.html);
        const emotionStyleTags = emotionStyles.styles.map((style: {key: string, ids: string[], css: string}) => (
            <style
                data-emotion={`${style.key} ${style.ids.join(' ')}`}
                key={style.key}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{__html: style.css}}
            />
        ));

        // Styles fragment is rendered after the app and page rendering finish.
        const styles = [
            ...React.Children.toArray(initialProps.styles),
            ...emotionStyleTags
        ]

        return {
            ...initialProps,
            styles,
        };
    };

    return DocumentComponent
}

export {withServerSideEmotionCache}