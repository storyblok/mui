// import {muiTheme} from 'storybook-addon-material-ui'

import {ThemeDecorator} from "./theme-decorator";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Overview',
        'Design',
        'Icons',
        [
          'Overview',
          'Storyblok',
          'TwoTone',
          'Pictograms',
          '*',
          'Other',
        ],
        'Components',
        'Layout',
        'Pages',
        '*',
        'Mui Components',
        [
          'Overview',
          '*',
        ],
      ],
    },
  }
}

export const decorators = [
  ThemeDecorator,
];

// export const decorators = [
//     muiTheme()
// ]