require('dotenv').config();
let process = require('process');
const fs = require('fs/promises');
const path = require('path');
const mockDataDirectory = '_mockData/';

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/**/*');

  eleventyConfig.setLiquidOptions({
    jsTruthy: true,
  });

  if (process.env.environment === 'Development') {
    eleventyConfig.addGlobalData('mockData', async () => {
      const mockFiles = (await fs.readdir(mockDataDirectory)).filter((file) => path.extname(file) === '.json');

      const mockData = {};

      for (let i = 0; i < mockFiles.length; i++) {
        const file = mockFiles[i];

        const fileData = await fs.readFile(path.join(mockDataDirectory, file));

        var fileName = path.basename(file, path.extname(file));

        const json = JSON.parse(fileData.toString());

        mockData[fileName] = json;
      }

      return mockData;
    });
  }

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
