/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');
const twTypography = require('@tailwindcss/typography');
const daisyuiThemes = require('daisyui/src/theming/themes');

module.exports = {
  plugins: [twTypography, daisyui],
  content: ['./src/**/*.{html,js,njk,liquid}'],
  daisyui: {
    themes: [
      {
        'nelle-light': {
          ...daisyuiThemes['[data-theme=fantasy]'],
          primary: '#1e2e3e',
        },
      },
      {
        'nelle-dark': {
          ...daisyuiThemes['[data-theme=dracula]'],
          primary: '#1e2e3d',
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
};
