

const {src, dest, watch , series} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

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


  function serveSass() {
    return src("./src/sass/**/*.sass", "./src/sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 1 versions'],
            cascade: false
        }))
        .pipe(dest("./src/css/"))
        .pipe(browserSync.stream());
}


function buildCss(done) {
    src(['./src/css/**.css', '!./src/css/**.min.css'])
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(dest('./dist/css/'));
    src('./src/css/**.min.css').pipe(dest('./dist/css/'));    
     done();
  }

function buildJs(done) {
    src(['./src/js/*.js', '!./src/js/**.min.js'])
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
        .pipe(dest('./dist/js/'));
    src('./src/js/**.min.js')
        .pipe(dest('./dist/js/'));
    done();
    
}  

function html(done) {
    src('./src/**.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('./dist/'));
    done();
}

function php(done) {
    src('./src/**.php')
        .pipe(dest('./dist/'));
    src('./src/phpmailer/**/**.php') 
        .pipe(dest('./dist/phpmailer/'));   
    done();
}

function fonts(done) {
    src('./src/fonts/**/**')
        .pipe(dest('./dist/fonts/'));
    done();
}

function imageMin(done) {
    src('./src/image/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({key: 'sxGrcrPytDsVyXM1JPzVl0yk2HF6KsfS',}))
        .pipe(dest('./dist/image/'));
    src('./src/image/**/*.webp')
        .pipe(dest('./dist/image/'));
    src('./src/image/**/*.svg')
        .pipe(dest('./dist/image/'));
    done();
}

exports.serve = bs;
exports.build = series(buildCss, buildJs, html, php, fonts, imageMin);

//, buildCss, buildJs, html, php, fonts, imageMin
