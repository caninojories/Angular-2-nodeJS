(function() {
  'use strict';

  var router = io.express.Router();

  router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

  router.get('/dashboard', io.xPoweredBy, function(req, res, next) {
    res.render('app/dashboard/dashboard.component.html');
    next();
  });

  module.exports = router;
})();
