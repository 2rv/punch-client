require('dotenv').config();

const config = {
  env: {
    API: process.env.API,
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };
    return config;
  },
};

module.exports = config;
