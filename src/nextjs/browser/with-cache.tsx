import {CacheProvider, EmotionCache} from "@emotion/react";
import {FunctionComponent} from "react";
import {createEmotionCache} from "../create-cache";

/**
 * In nextjs, wrap your default export in _app.tsx within this function
 */
type WithEmotionCache = <Props, >(AppComponent: FunctionComponent<Props>) => FunctionComponent<Props & {emotionCache?: EmotionCache}>

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const withClientSideEmotionCache: WithEmotionCache = (Component) => {
    const NewComponent = (props: any) => {
        const {emotionCache = clientSideEmotionCache, ...appProps} = props;

        return (
            <CacheProvider value={emotionCache}>
                <Component {...appProps} />
            </CacheProvider>
        )
    }
    NewComponent.displayName = Component.displayName
    return NewComponent
}

export {withClientSideEmotionCache}