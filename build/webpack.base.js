const path = require("path");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../", "./dist"),
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpg|png|jpeg|gif|bmp)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024,
            fallback: {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
              },
            },
          },
        },
      },
      {
        test: /\.(mp4|ogg|mp3|wav)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024,
            fallback: {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
              },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "Vue3 + TS -> Web App",
    }),
    new CleanWebpackPlugin(),
  ],
};
