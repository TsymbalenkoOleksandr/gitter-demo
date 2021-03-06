const express = require('express');
const app = express();
const http = require('http');
const webpack = require('webpack');
const webpackConfig = require('./webpack/webpack.config');
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false, publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.use(express.static(__dirname + '/'));

app.use(function(res, req, next) {
  const err = new Error('You have 404 error!');
  err.status = 404;
});

app.get('*', function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});

let server = http.createServer(app);
server.listen(8005, function onListening() {
  const address = server.address();
  console.log('This is port ' + address.port);
});
