const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();

gulp.task("autoprefixer", function () {
  return gulp
    .src("app/css/*.css")
    .pipe(autoprefixer("last 2 versions"))
    .pipe(gulp.dest("app/css/"));
});

gulp.task("scss", function () {
  return gulp
    .src("app/scss/style.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(gulp.dest("app/css/"))
    .pipe(browserSync.stream());
});

gulp.task("html", function () {
  return gulp.src("app/*.html").pipe(browserSync.stream());
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
});

gulp.task("watch", function () {
  gulp.watch("app/scss/**/*.scss", gulp.parallel("scss"));
  gulp.watch("app/*.html", gulp.parallel("html"));
});

gulp.task("default", gulp.parallel("browser-sync", "watch"));