require('dotenv').config();
let process = require('process');
const readDirRecursively = require('./utils/readDirRecursively');
const mockDataDirectory = '_mockData/';

module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

  eleventyConfig.addPassthroughCopy('src/assets');

  eleventyConfig.setLiquidOptions({
    jsTruthy: true,
  });

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
