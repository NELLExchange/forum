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
          '--rounded-badge': '0.5rem',
        },
      },
      {
        'nelle-dark': {
          ...daisyuiThemes['[data-theme=dracula]'],
          primary: '#1e2e3d',
          '--rounded-badge': '0.5rem',
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        'discord-purple': '#5865f2',
        'discord-purple-content': '#ffffff',
      },
    },
  },
};
