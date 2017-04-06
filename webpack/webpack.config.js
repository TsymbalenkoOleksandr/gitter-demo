require('babel-polyfill').default;
const path = require('path');
const webpack = require('webpack');

const common = {
  devtool: 'cheap-module-eval-source-map',
  entry: [path.join(__dirname, '../src/index.js'),
  'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=true'],
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/',
    library: "home"
  },
  watch: true,
  watchOptions:{
    aggregateTimeout: 100
  },
  resolve: {
    extensions: ['.es6', '.jsx', '.js', '.json', '.scss'],
  },
  module: {
    rules:[{
     test: /\.js$/,
     loaders: ['babel-loader'],
     exclude: /node_modules/,
   },
   {
    test: /\.js$/,
    enforce: 'pre',
    loader: 'eslint-loader',
    options: {
      emitWarning: true,
    },
  }]
},
plugins: [
new webpack.optimize.OccurrenceOrderPlugin(),
new webpack.HotModuleReplacementPlugin(),
new webpack.NoEmitOnErrorsPlugin(),
],
};

// console.log(__dirname + '/../src/index.js');
module.exports = common;