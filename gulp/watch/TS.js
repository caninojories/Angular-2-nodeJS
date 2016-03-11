(function() {
  'use strict';

  module.exports = function (require) {
    require.gulp.task('typescript', function(done) {
      require.logger(require.$.util, 'Cleaning ---> TYPESCRIPT');
      var files = [].concat(
        'app/**/*.js',
        'app/**/*.map'
      );

      require.clean(require, files, done);
    });
  };
}());
