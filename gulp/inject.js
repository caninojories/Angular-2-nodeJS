(function() {
  'use strict';

  module.exports = function(require) {
    require.gulp.task('inject', ['wiredep'], function() {
      require.logger(require.$.util, 'Wire up the app.css into the html, then call wiredep');
      return require.gulp
        .src(require.config.index)
        .pipe(require.$.inject(require.gulp.src(require.config.css), {
          // ignorePath: '../'
        }))
        .pipe(require.gulp.dest(require.config.client));
    });
  };
}());
