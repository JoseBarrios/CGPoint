var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task("default", function () {
    return gulp.src("src/*.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('index.js'))
    .pipe(gulp.dest(__dirname));
});
