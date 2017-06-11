const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.base');

module.exports = merge(config, {

  devtool: 'source-map',

  entry: {
    index: [
      'webpack-hot-middleware/client',
      './client'
    ]
  },

  module: {
    loaders: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]

});

