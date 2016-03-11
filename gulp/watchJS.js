(function() {
  'use strict';

  var util = require('util');

  module.exports = function(require) {
    require.gulp.task('watchJS', function(done) {
      require.logger(require.$.util, 'Listening for changes for TS');
      require.$.watch('app/**/*.ts', function(buffer) {
        /**
         * Produce .js and .map extention
         */
        var js  = buffer['history'][0].replace('.ts', '.js');
        var map = buffer['history'][0].replace('.ts', '.js.map');

        require.logger(require.$.util, 'Cleaning ---> TYPESCRIPT');
        var files = [].concat(
          js,
          map
        );

        require.clean(require, files, done);
      });
    });
  };
}());
