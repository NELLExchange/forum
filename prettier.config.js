const tailwindPlugin = require('prettier-plugin-tailwindcss');

module.exports = {
  trailingComma: 'es5',
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  plugins: [tailwindPlugin],
};
