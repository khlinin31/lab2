const gulp = require('gulp');
const browserSync = require('browser-sync').create()

gulp.task("task", function (callback) {
    console.log("Hello World!")
    callback()
})

gulp.task('server_start', function() {
    browserSync.init({
        server: {
            baseDir: './app/',
        },
    });

    gulp.watch('./app/**/*.*').on('change', browserSync.reload);
});