// reference the required packages to make task running work
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

gulp.task('serve',function(){
    browserSync.init({
server: {
    baseDir:'./',
    index: 'index.html'
}
    });
});

gulp.task('sass', function(){
    return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function (){
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('images', function(){
    return gulp.src('./images/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('./images'))
  });