(function() {
  'use strict';

  var LessPluginAutoPrefix  = require('less-plugin-autoprefix'),
      autoprefix            = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

  module.exports = function(require) {
    require.gulp.task('less-watch', function () {
      require.gulp.watch(require.config.less, ['less'] );
    });

    require.gulp.task('less', function() {
      require.logger(require.$.util, 'Compiling Less ---> Css');
      return require.gulp.src(require.config.less)
        .pipe(require.$.less({
          plugins: [autoprefix]
        }))
        .on('error', require.handleErrors)
        .pipe(require.$.autoprefixer({browsers:['last 2 versions', '> 5%']}))
        .on('error', require.handleErrors )
        .pipe(require.gulp.dest(require.config.lessFolder))
        .pipe(require.$.csslint({
        'font-sizes': false,
        'gradients': false,
        'important': false,
        'compatible-vendor-prefixes': false,
        'unqualified-attributes': false,
        'box-model': false,
        'display-property-grouping': false,
        'adjoining-classes': false
        }))
        .pipe(require.$.csslint.reporter());
    });
  };
}());
