require('dotenv').config();
let process = require('process');
const { EleventyRenderPlugin } = require('@11ty/eleventy');
const readDirRecursively = require('./utils/readDirRecursively');
const fallbackAvatarUrl = require('./src/shortcodes/fallbackAvatarUrl');

const mockDataDirectory = '_mockData/';

module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css', '_mockData/**/*.json'],
  });

  eleventyConfig.addPlugin(EleventyRenderPlugin);

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
