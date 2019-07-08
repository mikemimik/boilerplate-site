'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
// const CircularDependencyPlugin = require('circular-dependency-plugin');
const path = require('path');

module.exports = require('./webpack.base.babel')({
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/app.js'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html',
    }),

    // TODO: determine if this is necessary
    // new CircularDependencyPlugin({
    //   exclude: /a\.js|node_modules/, // exclude node_modules
    //   failOnError: false, // show a warning when there is a circular dependency
    // }),
  ],

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'eval-source-map',

  // TODO: document what this does
  performance: {
    hints: false,
  },
});
