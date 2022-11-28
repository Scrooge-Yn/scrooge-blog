const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "development" ? "/" : "./",
  devServer: {
    disableHostCheck: true,
    host: "0.0.0.0",
    port: 4040,
  },
});
