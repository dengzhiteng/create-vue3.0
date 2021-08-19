const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.ts"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../", "./dist"),
  },
  resolve: {
    extensions: [".js", ".vue", ".ts", "json"],
    modules: ["src", "node_modules"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "#": path.resolve(__dirname, "src/assets"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      { test: /\.vue$/, loader: "vue-loader" },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./index.html"),
      filename: "index.html",
      title: "简单版 Vue3 开发环境",
    }),
  ],
};
