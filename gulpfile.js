var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    cleanCSS = require("gulp-clean-css"),
    imagemin = require("gulp-imagemin"),
    inline = require("gulp-inline"),
    htmlmin = require("gulp-htmlmin");

gulp.task("disthtml", function(){
    gulp.src("src/*.html")
        .pipe(inline({
            base: "src/css", 
            css: cleanCSS,
            disabledTypes: ["svg", "img", "js"]
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist/"));
    gulp.src("src/views/*.html")
        .pipe(inline({
            base: "src/views/css", 
            css: cleanCSS,
            disabledTypes: ["svg", "img", "js"]
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist/views"));
});

gulp.task("scripts", function(){
    gulp.src("src/js/*.js")
       .pipe(uglify())
       .pipe(gulp.dest("dist/js"));
    gulp.src("src/views/js/*.js")
       .pipe(uglify())
       .pipe(gulp.dest("dist/views/js"));
});

gulp.task("imagemin", function(){
    gulp.src("src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
    gulp.src("src/views/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/views/images"));
});

gulp.task("default", ["disthtml", "scripts"]);