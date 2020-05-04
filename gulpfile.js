

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');


gulp.task('minify-css', function() {
    return gulp.src('./src/css/*.css')
      .pipe(rename('style.min.css'))
      .pipe(cleanCSS())
      .pipe(gulp.dest('main'));
  });