(function() {
  'use strict';

  module.exports = function(require, path, done) {
    require.logger(require.$.util, 'Cleaning: ' + require.$.util.colors.blue(path));
    require.del(path, done);
  }
}());
