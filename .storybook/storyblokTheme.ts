import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Storyblok React Design System',
  brandUrl: 'https://storyblok.com',
  brandImage: '/blok-ink-logo.svg',
  brandTarget: '_self',

  colorPrimary: '#1b243f',
  colorSecondary: '#00b3b0',
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#dfe3e8',
  appBorderRadius: 5,

  // Typography
  fontBase: 'Roboto, "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#1b243f',
  textInverseColor: 'white',

  textMutedColor: '#8d919f',
  barBg: 'white',
  inputBorderRadius: 5,
  inputBg: 'white',
});
