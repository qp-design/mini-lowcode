const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { dependencies: deps, name } = require("./package.json");
module.exports = (_, argv) => ({
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      '@': path.resolve('./src'),
    },
  },
  devServer: {
    port: 8123,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    client: {
      overlay: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 11118
    }),
    new ModuleFederationPlugin({
      name: "login_mf",
      filename: "remoteEntry.js",

      // url: `http://localhost:8181/remoteEntry.js?id=${new Date().valueOf()}`,
      // scope: 'low_code_platform',
      // module: './low-code-web'
      remotes: {
        // 'low-code-platform': 'low_code_platform@http://localhost:8181/remoteEntry.js',
      },
      exposes: {

      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_BASE_URL': `"https://b2bopte59063d8bf45406b8e0b088d3a9b1633.saas.qjclouds.com/"` //构建时定义process.env值为window._env_的值
    }),
  ],
  output: {
    publicPath: "http://localhost:8123/",
    // 把子应用打包成 umd 库格式
    library: `${name}-[name]`,
    libraryTarget: 'umd',
    chunkLoadingGlobal: `webpackJsonp_${name}`,
  }
});
