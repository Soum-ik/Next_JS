/** @type {import('next').NextConfig} */
const config = require("./config.js");
const nextConfig = {
  env: {
    DB_URL: config.DB_URL,
    API: config.API,
  },
};

module.exports = nextConfig;
