

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    gulp.watch("./src/*.html").on('change', browserSync.reload);
});


gulp.task('minify-css', function() {
    return gulp.src('./src/css/*.css')
      .pipe(rename('style.min.css'))
      .pipe(cleanCSS())
      .pipe(gulp.dest('main'));
  });