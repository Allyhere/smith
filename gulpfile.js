let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
  })

  gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.series(['sass'])); 
    // Other watchers
  })