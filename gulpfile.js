const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');

const pug = require('gulp-pug');
const htmlmin = require('gulp-htmlmin');

const sass = require('gulp-sass');
const csso = require('gulp-csso');

const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');

const tsProject = ts.createProject({
    declaration: true
});

gulp.task('pages', () => {
    return gulp.src('src/*.pug')
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
    return gulp.src('./src/css/styles.scss')
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function () {
    var tsResult = gulp.src([
        './src/js/*.ts'
    ])
    .pipe(tsProject(), undefined, ts.reporter.fullReporter());

    return tsResult.js
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('clean', () => del(['dist']));

gulp.task('default', ['clean'], function () {
    runSequence('pages',
        'styles',
        'scripts'
    );
});

gulp.task('watch', function () {
    gulp.watch('./src/*.pug', ['pages']);
    gulp.watch('./src/css/styles.scss', ['styles']);
    gulp.watch('./src/js/*ts', ['scripts']);
})