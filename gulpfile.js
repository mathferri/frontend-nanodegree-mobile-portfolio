var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    cleanCSS = require("gulp-clean-css"),
    imagemin = require("gulp-imagemin"),
    inline = require("gulp-inline"),
    concat = require("gulp-concat"),
    htmlmin = require("gulp-htmlmin"),
    rename = require("gulp-rename");

gulp.task("disthtml", function(){
    gulp.src("dev/*.html")
        .pipe(inline({
            base: "dev/css", 
            css: cleanCSS,
            disabledTypes: ['svg', 'img', 'js']
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'));
    gulp.src("dev/views/*.html")
        .pipe(inline({
            base: "dev/views/css", 
            css: cleanCSS,
            disabledTypes: ['svg', 'img', 'js']
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/views'));
});

gulp.task("scripts", function(){
    gulp.src("dev/js/*.js")
       .pipe(uglify())
       .pipe(gulp.dest("dist/js"));
    gulp.src("dev/views/js/*.js")
       .pipe(uglify())
       .pipe(gulp.dest("dist/views/js"));
});

gulp.task("imagemin", function(){
    gulp.src('dev/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
    gulp.src("dev/views/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/views/images"));
});
