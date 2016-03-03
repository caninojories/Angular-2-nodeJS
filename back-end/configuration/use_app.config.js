(function() {
  'use strict';

  module.exports = function(app, io) {
    var clientRoutes    = io.rootPath + 'back-end/html_routes/client/',
        use_app_client  = {
          main     : require(clientRoutes + 'main'),
          survey   : require(clientRoutes + 'survey')
        };

    return useApp([
      use_app_client.main,
      use_app_client.survey
    ]);

    function useApp(param) {
      param.forEach(function(name) {
        app.use('/', name);
      });
    }
  };
}());
