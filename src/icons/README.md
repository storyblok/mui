# Generating icons

The icons in `storyblok/` and `two-tone/` are generated from the `storyblok-design-system`. Here's how to re-generate them.

1. Open the broswer console.
2. Copy the icon export from the (Vue) [storyblok-design-system package](https://github.com/storyblok/storyblok-design-system) into a variable `icons` in the browser console.
3. Copy the content of `src/components/icons/sb-design-systems-icons-to-jsx.js` into the browser console.
4. Copy the console output into `src/components/icons/storyblok-icons.tsx`
5. Fix all syntax errors. Some svg tags contain invild jsx, due to repeated id attributes.
6. Change the fill colors of the following icons to `currentColor`:
    * SquareErrorIcon
    * SquareInfoIcon
    * SquareWarningIcon
    * SquareSuccessIcon
    * LinkIcon
7. Change the fill colors of `MyAppsIcon` to `currentColor`, and set the attribute `opacity=".57"` for the top-right and bottom-left circles.
8. Delete
    * DeletePictogram2Icon