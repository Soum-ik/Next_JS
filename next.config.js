/** @type {import('next').NextConfig} */
const config = require("../my-app/config");

const nextConfig = {
  env: {
    db_URL: config.db_URL,
  },
};

module.exports = nextConfig;
