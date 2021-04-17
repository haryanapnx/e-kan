// const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    // alias: {
    //   ...config.alias,
    //   'pages': path.resolve(__dirname, 'src/pages'),
    //   'libs': path.resolve(__dirname, 'src/libs'),
    //   'context': path.resolve(__dirname, 'src/context')
    // },
  };

  return config;
};