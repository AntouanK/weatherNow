
'use strict';

var gulp             = require('gulp'),
	//	plugins
    less             = require('gulp-less'),
    es               = require('event-stream'),
    concat           = require('gulp-concat'),
    rimraf           = require('gulp-rimraf'),
    eslint           = require('gulp-eslint'),
    gulpFilter       = require('gulp-filter'),
    uglify           = require('gulp-uglify'),
	wrapper          = require('gulp-wrapper'),
	replaceInFile    = require('./replaceInFile'),
	rimraf           = require('rimraf'),
    //    build target
    buildPath = './gh-pages/',
    //	files paths
    lessFilesPath     = ['dev/style/main.less'],
	fontFilesPath     = ['dev/style/quicksand*.*'],
	imgFilesPath      = ['dev/style/bg.png'],
	templateFilesPath = ['dev/templates/*.html'],
    jsFilesPaths      = [
		'dev/script/thirdParty/angular.js',
		'dev/script/thirdParty/angular-animate.js',
		'dev/script/thirdParty/angular-route.js',
		'dev/script/main.js',
		'dev/script/route.js',
		'dev/script/controllers/*.js',
		'dev/script/directives/*.js',
		'dev/script/services/*.js'
	],
    htmlFilesPath     = ['dev/index.html'],
	langFilesPath     = ['languages/*.json'];

/////////////////////////////////////////////////
var getFiles = function(filesPath){
    return gulp.src(filesPath);
};

gulp.task('copyStyleFiles', function(){

    getFiles(fontFilesPath)
    .pipe(gulp.dest(buildPath + 'style/'));

	getFiles(imgFilesPath)
	.pipe(gulp.dest(buildPath + 'img/'));
});

//    lint JS files
gulp.task('lint', function(){

    var filter = gulpFilter([
		'!angular*',
		'!querystring*'
    ]);

    getFiles(jsFilesPaths)
    .pipe(filter)
    .pipe(eslint({ config: 'dev/eslint.conf.json' }))
    .pipe(eslint.format());
});

gulp.task('copyJsFiles', ['lint'], function(){

    getFiles(jsFilesPaths)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(buildPath + 'script/'));
});

gulp.task('copyHtmlFiles', function(){

	getFiles(templateFilesPath)
	.pipe(wrapper({
		header: '<script type="text/ng-template" id="${filename}">\n',
		footer: '</script>\n'
	}))
	.pipe(concat('templates.html'))
	.pipe(gulp.dest(buildPath));

	//	merge the HTML and the CSS
	es.merge(
		getFiles(htmlFilesPath),

		getFiles(lessFilesPath)
		.pipe(less({ compress: true }))
	)
	.pipe(replaceInFile('main.css', 'index.html', '/*main.css*/'))
	.pipe(gulp.dest(buildPath));
});

// gulp.task('copyResourceFiles', function(){
//
//     getFiles(langFilesPath)
//     .pipe(gulp.dest(buildPath + 'languages/'));
// });

gulp.task('watcher', function(){

	var pathsToWatch = lessFilesPath
	                   .concat(jsFilesPaths)
	                   .concat(htmlFilesPath)
	                   .concat(templateFilesPath),
	    onWatch = function(event) {
			console.log('File '+event.path+' was '+event.type+', running tasks...');
		}

	console.log('watching : '+pathsToWatch.join('\n'));

	gulp
	.watch(['dev/style/*.less'], ['copyStyleFiles'])
	.on('change', onWatch);

	gulp
	.watch(jsFilesPaths, ['copyJsFiles'])
	.on('change', onWatch);

	gulp
	.watch(templateFilesPath.concat(htmlFilesPath), ['copyHtmlFiles'])
	.on('change', onWatch);


});

gulp.task('cleanTargetFolder', function(done){
	rimraf(buildPath, function(){
		done();
	})
});

gulp.task('build', ['copyStyleFiles', 'copyJsFiles', 'copyHtmlFiles'], function(){
	//	just ... build
});

gulp.task('buildDev', ['build', 'watcher'], function(){

});

gulp.task('test', function(){
	console.log('test missing!');

	return true;
});
