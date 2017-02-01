var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   concat = require("gulp-concat");

gulp.task('default', function () {
   gulp.src('*.js')
   	  .pipe(concat("aimfireapp.js"))
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});
