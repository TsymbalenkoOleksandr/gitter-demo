"use strict";

var fs = require('fs');
var fileSync = fs.readFileSync('./.babelrc');
var config;

try {
 config = JSON.parse(fileSync);
} catch(err) {
	console.error('Something wrong with your babelrc file');
	console.error(err);
};


require('babel-register')(config);
require('../server.js');
