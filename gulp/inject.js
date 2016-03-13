(function() {
  'use strict';

  var runSequence = require('run-sequence');

  module.exports = function(require) {
    require.logger(require.$.util, 'Wire up .css and .js into the html');
    require.gulp.task('inject', function() {
      runSequence(
        'js',
        'css', function() {
          require.logger(require.$.util, 'Finished...');
      });
    });

    require.gulp.task('js', function() {
      require.logger(require.$.util, 'Injecting js into our html');
      return require.gulp
        .src(require.config.index)
        .pipe(require.$.inject(require.gulp.src(require.config.js, {read: false}), {
          /*ignorePath: '../',*/
          addPrefix: 'http://angular-2-node.io:81',
          addRootSlash: false
        }))
        /*inject it to our client view*/
        .pipe(require.gulp.dest(require.config.client));
    });

    require.gulp.task('css', function() {
      require.logger(require.$.util, 'Injecting css into our html');
      return require.gulp
        .src(require.config.index)
        .pipe(require.$.inject(require.gulp.src(require.config.css, {read: false}), {
          // ignorePath: '..
          addPrefix: 'http://angular-2-node.io:81',
          addRootSlash: false
        }))
        .pipe(require.gulp.dest(require.config.client));
    });
  };
}());
