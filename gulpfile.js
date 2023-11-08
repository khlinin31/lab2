const gulp = require('gulp');
const browserSync = require('browser-sync').create() // подключаем browser-sync

gulp.task("task", function (callback) {
    console.log("Hello World!")
    callback()
})

// создаем задачу для старта сервера
gulp.task('server_start', function() {
    browserSync.init({ // инициализируем browserSync
        server: {
            baseDir: './app/', // указывваем корневую директорию проекта
        },
    });

    gulp.watch('./app/**/*.*').on('change', browserSync.reload); // мониторим изменения файлов и если что обновляем страничку браузера
});