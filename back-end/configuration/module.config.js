(function() {
  'use strict';

  var service = '../services/';

  module.exports = {
    config            : require('./settings.config'),
    mongoDB           : require('../configuration/mongodb'),
    use_app           : require('./use_app.config'),
    use_api           : require('./use_api.config'),

    args              : require('yargs').argv,
    bodyParser        : require('body-parser'),
    chalk             : require('chalk'),
    cluster           : require('cluster'),
    compression       : require('compression'),
    express           : require('express'),
    favicon           : require('serve-favicon'),
    morgan            : require('morgan'),
    methodOverride    : require('method-override'),
    mongoose          : require('mongoose'),
    numCPUs           : require('os').cpus().length,
    path              : require('path'),
    serveStatic       : require('serve-static'),
    url               : require('url'),

    port              : process.env.PORT || 3001,
    environment       : process.env.NODE_ENV || 'development',
    // faviconPath       : rootPath + 'front-end/resources/favicon.ico',

    /*Services*/
    xPoweredBy        : require(service + 'xPoweredBy'),
    clusterService    : require(service + './cluster'),
    /* Models */
    User              : require('../model/User'),
    /* Classes */
    USER              : require('../classes/user.js'),
  };
}());
