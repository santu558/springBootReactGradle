var gulp = require('gulp');
var webpack_config = require('./webpack.config.js');
var webpack_stream = require('webpack-stream');
var webpack = require('webpack');
const srcStaticDir    = 'build/resources/main/static/';
gulp.task('default', function(done) {
  return webpack_stream(webpack_config, webpack)
          .pipe(gulp.dest(srcStaticDir));
});
