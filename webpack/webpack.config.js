require('babel-polyfill').default;
const path = require('path');
const webpack = require('webpack');

const common = {
  devtool: 'cheap-module-eval-source-map',
  entry: [path.join(__dirname, '../src/index.js'),
  'webpack-hot-middleware/client?path=http://127.0.0.1:8005/__webpack_hmr&reload=true'],
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'
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
     loader: ['babel-loader'],
     exclude: /node_modules/,
   },
   {
    test:/\.scss$/,
    use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: { modules: true }
    },
    {

    //for adding differet fiatures before compile into css
    loader: 'postcss-loader',
    options: {
      plugins: function () {
        return [

        // for adding mixins variables ....
        require('precss'),

        //autoprefixer
        require('autoprefixer')
        ];
      }
    }
  },
  'sass-loader'
    ]
   },
   {
    test:/\.css$/,
    loader: 'style-loader!css-loader'
   },
   {
    test: /bootstrap-sass\/assets\/javascripts\//,
    loader: 'imports?jQuery=jquery',
  },
  {
    test: /\.js$/,
    enforce: 'pre',
    loader: 'eslint-loader',
    options: {
      emitWarning: true,
    }
  },
  {
    test: /\.png$/,
    loader: 'file-loader?name=img/[name].[ext]',
  },
  {
    test: /\.jpg$/,
    loader: 'file-loader?name=img/[name].[ext]',
  },
  {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/font-woff!font/[name].[ext]',
  },
  {
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/font-woff2!font/[name].[ext]',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream!font/[name].[ext]',
  },
  {
    test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/font-otf!font/[name].[ext]',
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file',
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml',
  }]
},

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    //not to add file if compile failed
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

// console.log(__dirname + '/../src/index.js');
module.exports = common;