(function() {
  'use strict';

  /*Express Configuration*/
  module.exports = function(app) {
    let root = io.path.normalize(__dirname + '/../../');

    app.set('views', root + 'app');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);
    app.set('x-powered-by', false);
    app.set('port', io.port);
    app.use(io.compression());
    // app.use(io.favicon(io.faviconPath));
    app.use(io.morgan('dev'));
    app.use(io.bodyParser.urlencoded({
      extended: true
    }));
    app.use(io.bodyParser.json());
    app.use(io.methodOverride(function(req, res) {
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method;
      }
    }));

    if (process.env.NODE_ENV === 'production') {
      app.use('/app', io.serveStatic(root + '/app', {
        maxAge: '1y'
      }));
      app.use('/api', io.serveStatic(root + '/api', {
        maxAge: '1y'
      }));
    } else {
      app.use('/app', io.serveStatic(root + '/app', {
        maxAge: '0'
      }));
      app.use('/api', io.serveStatic(root + '/api', {
        maxAge: '0'
      }));
    }

    /*Setup for CORS*/
    app.use(function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
      next();
    });
  };
}());
