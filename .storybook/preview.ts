import type { Preview } from '@storybook/react'

import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { lightTheme } from '../src';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
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
  },

  decorators: [withThemeFromJSXProvider({
    GlobalStyles: CssBaseline,
    Provider: ThemeProvider,
    themes: {
      light: lightTheme,
    },
    defaultTheme: 'light',
  })]
}

export default preview
