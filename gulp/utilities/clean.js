(function() {
  'use strict';

  module.exports = function(require, path, done) {
    require.logger(require.$.util, 'Cleaning: ' + require.$.util.colors.blue(path));
    setTimeout(function() {
      require.del(path, done);
    }, 500);
  }
}());
