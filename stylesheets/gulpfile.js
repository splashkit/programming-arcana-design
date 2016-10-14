var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var src = {
  html: 'index.html',
  scss: 'scss/**/*.scss'
}

gulp.task('sass', function () {
  return gulp.src(src.scss)
    .pipe(concat('style.scss'))
    .pipe(sass())
    .pipe(gulp.dest('build'))
    .pipe(reload({stream: true}));
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
      server: '.'
    });
    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.html).on('change', reload);
});

gulp.task('build', ['sass']);
gulp.task('default', ['serve']);
