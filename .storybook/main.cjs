const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // 'storybook-addon-material-ui',
  ],
  webpackFinal: async (config) => {
    [].push.apply(config.resolve.plugins, [
      new TsconfigPathsPlugin({extensions: config.resolve.extensions})
    ]);

    return config;
  },
  // Avoid storybook's emotion instance from colliding with MUI's
  features: { emotionAlias: false },
  "framework": "@storybook/react",
  staticDirs: ['./public'],
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin'
  },
}
