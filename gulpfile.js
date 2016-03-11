(function() {
  'use strict';

  var gulp          = require('gulp'),
      $             = require('gulp-load-plugins')({lazy: true}),
      args          = require('yargs').argv,
      del           = require('del'),
      wiredep       = require('wiredep').stream,
      config        = require('./gulp.config')(),
      logger        = require('./gulp/utilities/logger'),
      clean         = require('./gulp/utilities/clean'),
      handleErrors  = require('./gulp/utilities/handlErrors');

  var module = {
    gulp        : gulp,
    $           : $,
    args        : args,
    clean       : clean,
    config      : config,
    del         : del,
    logger      : logger,
    handleErrors: handleErrors,
    wiredep     : wiredep
  };
  require('./gulp/watch/TS')(module);
  require('./gulp/wiredep')(module);
  require('./gulp/inject')(module);
  require('./gulp/watchJS')(module);
}());
