var gulp = require("gulp");
var ts = require("gulp-typescript");

gulp.task("typescript", function () {
    var tsResult = gulp.src("src/**/*.ts")
        .pipe(ts({
              target: "es5",
              module: "commonjs",
              strict: true,
              esModuleInterop: true
        }));
    return tsResult.js.pipe(gulp.dest("dist"));
});

gulp.task("html", function () {
    return gulp.src(["src/**/*.html", "src/**/*.ico"])
        .pipe(gulp.dest("dist"));
});

gulp.task("vendorjs", function () {
    return gulp.src("src/client/vendor/**")
        .pipe(gulp.dest("dist/client/vendor"));
});

gulp.task("default", ["typescript", "html", "vendorjs"])