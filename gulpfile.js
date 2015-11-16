var gulp = require('gulp');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var msx = require('msx');
var through = require('through2');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var del = require('del');


function msxTransform(options) {
    return through.obj(function (file, enc, cb) {
        try {
            file.contents = new Buffer(msx.transform(file.contents.toString(), options))
            file.path = gutil.replaceExtension(file.path, '.js')
            this.push(file)
        }
        catch (err) {
            err.fileName = file.path
            this.emit('error', new gutil.PluginError('msx', err))
        }
        cb()
    })
}

gulp.task('msx', function () {
    gulp.src('./js/**/*.js')
        .pipe(plumber())
        .pipe(msxTransform({harmony: true}))
        .on('error', function (e) {
            console.error(e.message + '\n  in ' + e.fileName)
        })
        .pipe(gulp.dest('./temp/'))
});

gulp.task('scripts', function () {
    gulp.start('msx');

    gulp.src('./temp/**/*.js')
        .pipe(concat('index.js'))
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

//gulp.task('clean:temp', function () {
//    del(['./temp/**'], {force:true});
//
//});


gulp.task('browserify', function () {
    gulp.start('scripts').start('html').start('css');

});


gulp.task('default', function () {
    return gulp.start('browserify');
});
