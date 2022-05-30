var gulp = require('gulp'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin'),
    watch = require('gulp-watch');

// css task
gulp.task('css-task', function () {
    return gulp.src(['src/css/**/*.css','src/css/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle : 'compressed'}))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});

// js task
gulp.task('js-task', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});

// image task
gulp.task('img-task', function () {
    return gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'))
        .pipe(livereload());
});


// watch task
gulp.task('watch-task', function () {
    require('./server');
    livereload.listen();
    gulp.watch(['src/css/**/*.css' , 'src/css/**/*.scss'], { ignoreInitial: false }, gulp.series('css-task')),
    gulp.watch('src/js/*.js', { ignoreInitial: false }, gulp.series('js-task'));
    gulp.watch('src/imgs/*', { ignoreInitial: false }, gulp.series('img-task'));
});
