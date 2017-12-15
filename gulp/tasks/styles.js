var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require("postcss-import"),
mixins = require("postcss-mixins");

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport,mixins,cssvars, nested, autoprefixer])) //import NA POZATKU !!!
    .on('error', function(errorInfo){
      console.log("\n\tERROR:\n");
      console.log(errorInfo.toString());
      console.log("/n");
      this.emit('end');//gulp will see that task has ended, not that it returned an error
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
