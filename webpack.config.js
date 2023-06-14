const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.[hash].js',
    clean: true
  },
  plugins:[
    new HTMLWebpackPlugin({
      template: './src/index.html',
      // filename: './index.html'
      minify: {
        collapseWhitespace: true, // Удаление пробелов
        removeComments: true, // Удаление комментариев
        removeAttributeQuotes: true // Удаление кавычек у атрибутов
        // Другие параметры минимизации HTML...
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].min.css?ver=[hash]',
    }),
  ],
  
  module: {
    rules:[
      {
        test: /\.s*css$/i,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          "postcss-loader",
          'sass-loader'
        ]
      }, 

      {
        test: /\.js%/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};