'use strict';



var gulp = require('gulp');
var server = require('../lib/server');
var config = require('../config');



gulp.task('serve', function() {
	server.init({
		server: {
			baseDir: config.paths.public
		}
	});
});