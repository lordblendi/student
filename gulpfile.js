var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var msx = require('msx');
var through = require('through2');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');


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
        .pipe(msxTransform({precompile: false}))
        .on('error', function (e) {
            console.error(e.message + '\n  in ' + e.fileName)
        })
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
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

gulp.task('move-resources', function(){
    gulp.src('./resources/*.json')
        .pipe(gulp.dest('./dist/resources/'))
});


gulp.task('browserify', function () {
    gulp.start('msx').start('html').start('css').start('move-resources');

});


gulp.task('default', function () {
    gulp.start('browserify');
});
