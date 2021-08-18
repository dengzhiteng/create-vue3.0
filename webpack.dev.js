const { merge } = require("webpack-merge");
const base = require("./webpack.base");
const path = require("path");

module.exports = merge(base, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    port: 8888, // 第三部分会使用 portfinder 自动获取可用端口号
    hot: true,
    hotOnly: true,
    compress: false, // 对打包进行压缩，默认为false，记录了以后可能会用到
    publicPath: "/",
  },
});
