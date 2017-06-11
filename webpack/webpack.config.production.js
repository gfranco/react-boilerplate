const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./webpack.config.base');

module.exports = merge(config, {

  module: {
    loaders: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader']
        })
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new ExtractTextPlugin('style.min.css')
  ]

});
