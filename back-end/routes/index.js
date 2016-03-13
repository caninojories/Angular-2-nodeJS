(function() {
  'use strict';

  var router = io.express.Router();

  router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

  router.get('/', io.xPoweredBy, function(req, res) {
    console.log(req.headers);
    res.render('index.html', {
      ip : 'http://' + req.headers.host.replace(":3001", '')
    });
  });

  module.exports = router;
})();
