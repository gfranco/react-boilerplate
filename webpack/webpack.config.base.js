const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(path.join(__dirname, '..'));

const GLOBALS = {
  ENV: JSON.stringify(process.env.NODE_ENV),
  PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production')
};

const srcDir = path.join(ROOT, 'src');
const dstDir = path.join(ROOT, 'public');

module.exports = {

  context: srcDir,

  entry: {
    index: ['./client.js']
  },

  output: {
    filename: '[name].min.js',
    publicPath: '/',
    path: dstDir
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: [
          'react-hot-loader/webpack',
          'babel-loader'
        ],
        include: srcDir
      }
    ]
  },

  resolve: {
    modules: [
      path.join(ROOT, 'node_modules'),
      srcDir
    ],
    extensions: ['.js', '.css']
  },

  plugins: [
    new webpack.DefinePlugin(GLOBALS)
  ]

};

