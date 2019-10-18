const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');

const pug = require('gulp-pug');
const htmlmin = require('gulp-htmlmin');

const sass = require('gulp-sass');
const csso = require('gulp-csso');

const tsify = require('tsify');
const uglify = require('gulp-uglify');

const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

gulp.task('pages', function () {
    return gulp.src('src/html/pages/**/*.pug')
        .pipe(pug({}))
        .pipe(htmlmin({
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            sortAttributes: true,
            sortClassName: true
        }))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
    return gulp.src('src/css/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
            }))
            .pipe(csso())
        .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/js/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('clean',  function () {
    del(['dist'])
});

gulp.task('default', ['clean'], function () {
    runSequence('pages',
        'styles',
        'scripts'
    );
});

gulp.task('watch', function () {
    gulp.watch('src/html/**/*.pug', ['pages']);
    gulp.watch('src/css/**/*.scss', ['styles']);
    gulp.watch('src/js/**/*.ts', ['scripts']);
});