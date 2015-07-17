'use strict';



var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var config = require('../config');
var server = require('../lib/server');
var errorHandler = require('../lib/errorHandler');



function css(watchFiles) {

	var src = gulp.src(config.paths.cssEntryFile);

	if(watchFiles) {
		src = src.pipe(watch(config.paths.cssEntryFile));
	}

	return src
		.pipe(errorHandler('CSS'))
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', '> 1%'))
		.pipe(csso())
		.pipe(gulp.dest(config.paths.dist))
		.pipe(server.stream());

}



gulp.task('css', css.bind(null, false));
gulp.task('css:watch', css.bind(null, true));