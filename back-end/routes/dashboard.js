(function() {
  'use strict';

  var router = io.express.Router();

  router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

  router.get('/', io.xPoweredBy, function(req, res) {
    res.render('app/dashboard/dashboard.component.html');
  });

  module.exports = router;
})();