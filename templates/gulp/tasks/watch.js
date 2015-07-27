'use strict';

var gulp = require('gulp');

gulp.task('watch', [
	'serve',
	'css',
	'css:watch',
	'views',
	'views:watch'
]);