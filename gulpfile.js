var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');

gulp.task('scripts', function () {
    gulp.src('./js/**/*.js')
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('html', function () {
    var opts = {
        conditionals: true,
        spare: true
    };

    gulp.src('./html/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(concat('index.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/'))
});


gulp.task('browserify', function () {
    gulp.start('scripts').start('html').start('css');
});


gulp.task('default', function () {
    return gulp.start('browserify');
});
