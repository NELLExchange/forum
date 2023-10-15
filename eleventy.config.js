require('dotenv').config();
let process = require('process');

const { EleventyRenderPlugin } = require('@11ty/eleventy');
const lucideIcons = require('@grimlink/eleventy-plugin-lucide-icons');

const readDirRecursively = require('./utils/readDirRecursively');
const fallbackAvatarUrl = require('./src/shortcodes/fallbackAvatarUrl');

const mockDataDirectory = '_mockData/';

module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(lucideIcons);

  eleventyConfig.addFilter('toObject', (str) => JSON.parse(str.replaceAll("'", '"')));

  eleventyConfig.addPassthroughCopy('src/assets');

  eleventyConfig.setLiquidOptions({
    jsTruthy: true,
  });

  eleventyConfig.addShortcode('fallbackAvatarUrl', fallbackAvatarUrl);

  if (process.env.environment === 'Development') {
    eleventyConfig.addWatchTarget('./_mockData/');

    eleventyConfig.addGlobalData('mockData', async () => {
      const data = await readDirRecursively(mockDataDirectory);

      return data;
    });
  }

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
