(function() {
  module.exports = function() {
    /*
     * wiredep and bower settings
     */
   var urlPath = 'http://angular-2-node.io:81/';
   var bower = {
     json : require('./bower.json'),
     ignorePath : '',
     directory  : 'app/bower',
     exclude    : [],
     fileTypes : {
        html: {
          replace: {
            js  : '<script src="{{filePath}}"></script>',
            css : '<link rel="stylesheet" href="{{filePath}}"/>'
          }
        }
      }
   };

   var config = {
     index  : 'app/index.html',
     js     : [
       'node_modules/es6-shim/es6-shim.min.js',
       'node_modules/systemjs/dist/system-polyfills.js',
       'node_modules/angular2/bundles/angular2-polyfills.js',
       'node_modules/systemjs/dist/system.src.js',
       'node_modules/rxjs/bundles/Rx.js',
       'node_modules/angular2/bundles/angular2.dev.js',
       'node_modules/angular2/bundles/router.dev.js',
       'node_modules/typescript/lib/typescript.js',
       'node_modules/angular2/bundles/http.dev.js',
       'node_modules//a2-in-memory-web-api/web-api.js'
     ],
     css    : [
       'assets/material.deep_orange-pink.min.css',
       'assets/sprite-av-white.css',
       'assets/animate.css',
       'assets/app.css'
     ],
     less   : [
       'less/**/*.less'
     ],
     lessFolder: 'assets/css',
     client : 'app/'
   };

   config.getWireDepDefaultOptions = function() {
     var options = {
       bowerJson : bower.json,
       directory : bower.directory,
       exclude   : bower.exclude,
       ignorePath: bower.ignorePath,
       fileTypes : bower.fileTypes
     };
     return options;
   };

   return config;
 }
}());
