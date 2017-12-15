var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require("browser-sync");
var styles = require("./styles");




gulp.task('watch', function() {

  browserSync.init({
    server :{
      baseDir :  "./app"
    }
  })
  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

});




gulp.task("cssInject", ['styles'] ,() => {
  return gulp.src("./app/temp/styles/styles.css")
      .pipe(browserSync.stream());
})
