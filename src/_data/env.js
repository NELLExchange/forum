require('dotenv').config();
let process = require('process');

module.exports = function () {
  return {
    environment: process.env.ENVIRONMENT || 'Development',
  };
};
