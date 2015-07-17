'use strict';



var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var notifier = require('node-notifier');



module.exports = function errorHandler(taskName) {

	return plumber({

		errorHandler: function(err) {

			notifier.notify({
				title: 'Gulp ' + taskName + ' error',
				message: err.message
			});

			gutil.beep();
			gutil.log(gutil.colors.red(err));

		}

	});

};