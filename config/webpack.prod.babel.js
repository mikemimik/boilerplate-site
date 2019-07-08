'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = require('./webpack.base.babel')({
  mode: 'production',
  entry: [
    // In production, we skip all hot-reloading stuff
    path.join(process.cwd(), 'app/app.js'),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],
  // TODO: document what this does
  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
});
