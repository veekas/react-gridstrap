const { createConfig, babel, postcss } = require('webpack-blocks');
const { version } = require('./package.json');

module.exports = {
  title: `React Gridstrap (v${version})`,
  sections: [
    {
      name: '',
      components: './src/**/*.jsx',
      content: './docs.md'
    },
  ],
  serverPort: 3210,
  styleguideDir: './docs',
  exampleMode: 'expand',
  usageMode: 'expand',
  webpackConfig: createConfig([
    babel(),
    postcss()
  ])
};
