(function() {
  module.exports = function() {
    /*
     * wiredep and bower settings
     */
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
     js     : [],
     css    : '',
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
