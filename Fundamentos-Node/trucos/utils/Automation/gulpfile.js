const gulp = require('gulp');
const server = require('gulp-server-livereload');

// crear una primera tarea | ('nombre-tarea', función de tarea)
gulp.task('build', function(callback) {
  console.log('contruyendo el sitio');
  callback();
});

gulp.task('serve', function(cb) {
  gulp.src('www')
    .pipe(server({
      livereload: true,
      open: true,
    }))
});

gulp.task('default', gulp.series('build', 'serve'));