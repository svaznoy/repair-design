

const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Static servern
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    watch("./src/*.html").on('change', browserSync.reload);
    watch("./src/sass/**/*.sass" , serveSass);
    watch("./src/sass/**/*.scss" , serveSass);
    watch("./src/js/*.js").on('change', browserSync.reload);
}


function miniCss() {
    return src('./css/*.css')
      .pipe(rename('style.min.css'))
      .pipe(cleanCSS())
      .pipe(dest('main'));
  }


  function serveSass() {
    return src("./src/sass/**/*.sass", "./src/sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest("./src/css"))
        .pipe(browserSync.stream());
}

exports.serve = bs;
