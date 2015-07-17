'use strict';

var gulp = require('gulp');

gulp.task('watch', [
	'serve',
	'css:watch',
	'views:watch'
]);