(function() {
  'use strict';

  var util    = require('util');
  var data    = [];
  var length  = [];
  var time    = 0
  var counter = 4000;

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

        data.push(files);

        counter += time;
        time    += 4000;
        var interval = setInterval(function() {
          counter -= 300;
          time    -= 300;
          if (counter <= 0) {
            clearInterval(interval);
            counter = 4000;
            time    = 0;
          }
        }, 300);

        setTimeout(function() {
          console.log('Cleaning...')
          require.clean(require, files, done);
        }, time);
      });
    });
  };
}());
