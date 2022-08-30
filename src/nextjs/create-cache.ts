import createCache from "@emotion/cache";

const createEmotionCache = () =>  (
    createCache({ key: 'css' })
)

export {createEmotionCache}