const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.tsx"],
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
    publicPath: "/",
  },
  mode,
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components/"),
      "@/assets": path.resolve(__dirname, "src/assets/"),
      "@/pages": path.resolve(__dirname, "src/pages/"),
      "@/utils": path.resolve(__dirname, "src/utils/"),
      "@/hooks": path.resolve(__dirname, "src/hooks/"),
      "@/constant": path.resolve(__dirname, "src/constant/"),
      "@/services": path.resolve(__dirname, "src/services/"),
      "@/context": path.resolve(__dirname, "src/context/"),
      "@/layout": path.resolve(__dirname, "src/store/"),
      "@/routers": path.resolve(__dirname, "src/routers/"),
      "@/types": path.resolve(__dirname, "src/types/"),
      "@/type": path.resolve(__dirname, "src/type/"),
      "@/redux": path.resolve(__dirname, "src/redux/"),
    },

    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      os: false,
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      assert: false,
      util: false,
      crypto: require.resolve("crypto-browserify"),
      buffer: require.resolve("buffer"),
    },
  },
  devServer: {
    static: path.join(__dirname, "public"),
    hot: true,
    port: process.env.PORT || 3000,
    historyApiFallback: true,
    allowedHosts: "all",
  },
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules|\.d\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmit: false, // this option will solve the issue
            },
          },
        },
      },
      {
        test: /\.css$/i,
        // include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|pdf|mp4)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"), // `./public/index.html` is default value
      favicon: path.join(__dirname, "public/favicon.ico"), // `./public/favicon.png` is default value
      filename: "index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new Dotenv({
      path: `./.env`,
    }),
  ],
};
