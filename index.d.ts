declare module 'storyblok-design-system/src/lib/internal-icons' {
    type IconDef = {
        viewBox: string
        path: string
    }
    const icons: Record<string, IconDef | undefined>
    export = icons
}