/*
    This script is used to export the storyblok icons as tree shakeable react components.

    1. Clone the storyblok-design-system repository
    2. Open a browser console
    2. Store the default export of storyblok-design-system/src/lib/internal-icons.js in a variable 'icons'
    3. Paste the content of this file in the console
    4. Copy the console output into icons.tsx
    5. Fix any eventual errors that shows up in the IDE.
 */

const snakeToCamel = (str) =>
  str
    .toLowerCase()
    .replace(/((|-|_)[a-zA-Z1-9])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', ''),
    )

const snakeToPascal = (str) =>
  str
    .toLowerCase()
    .replace(/((^|-|_)[a-zA-Z1-9])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', ''),
    )

const getName = (name) => snakeToPascal(name.replaceAll('@', 'at'))

const html2Jsx = (str) =>
  str
    .replaceAll('class=', 'className=')
    .replaceAll('fill-opacity=', 'fillOpacity=')
    .replaceAll('fill-rule=', 'fillRule=')
    .replaceAll('stop-color=', 'stopColor=')
    .replaceAll('stroke-width=', 'strokeWidth=')
    .replaceAll('stroke-linecap=', 'strokeLinecap=')
    .replaceAll('stroke-linejoin=', 'strokeLinejoin=')
    .replaceAll('xlink:href=', 'href=')

console.log(
  Object.entries(icons)
    .map(
      ([name, value]) => `
export const ${getName(name)}Icon: IconComponent = (props) => (
    <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${value.viewBox}"
        {...props}
    >
        ${html2Jsx(value.path)}
    </SvgIcon>
)
`,
    )
    .join('\n'),
)
