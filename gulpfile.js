/**
 * Created by Ìì on 2015/12/2.
 */
var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

gulp.task('js', function () {
    return gulp.src('js/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.uglify())
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest('build'));
});
gulp.task('css', function () {
    return gulp.src('css/*.styl')
        .pipe(plugins.stylus())
        .pipe(gulp.dest('build'));
});
gulp.task('greet',['greet2'],function () {
    console.log('Hello world!');
});
gulp.task('greet2', function () {
    console.log('22222!');
});
gulp.task('aaa',['greet','greet2']);