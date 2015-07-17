'use strict';

var path = require('path');
var config = module.exports = {};

config.paths = {};
config.paths.src = path.join(__dirname, '../');

config.paths.css = path.join(config.paths.src, 'css');
config.paths.cssEntryFile = path.join(config.paths.css, '*.scss');

config.paths.js = path.join(config.paths.src, 'js');

config.paths.views = path.join(config.paths.src, 'views');
config.paths.viewsEntryFile = path.join(config.paths.views, '*.liquid');
config.paths.viewsWatch = path.join(config.paths.views, '**/*.liquid');

config.paths.public = path.join(__dirname, '../public');
config.paths.dist = path.join(config.paths.public, 'dist');