module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ejs/,
      type: "asset/source",
    });
    return config;
  },
  target: "serverless",
};
