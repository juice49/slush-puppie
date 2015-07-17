'use strict';



var gulp = require('gulp');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var liquid = require('gulp-liquify');
var server = require('../lib/server');
var errorHandler = require('../lib/errorHandler');
var config = require('../config');



function views() {
	return gulp.src(config.paths.viewsEntryFile)
		.on('data', server.reload)
		.pipe(errorHandler('Liquid'))
		.pipe(liquid())
		.pipe(rename({ extname: '.html' }))
		.pipe(gulp.dest(config.paths.public));
}



gulp.task('views', views.bind(null, false));



gulp.task('views:watch', function() {
	watch(config.paths.viewsWatch, views.bind(null, true));
});