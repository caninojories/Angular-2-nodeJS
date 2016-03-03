(function() {
  'use strict';

  let app = io.express();

  app.route('/survey')
    .get(function(req, res, next) {
      let User = new io.USER(req, res, next);

      User
        .results()
        .then(function(data) {
          res.json({
            message : 'Survey Results',
            status  : 200,
            data    : data.data,
            count   : data.count
          });
        })
        .catch(function(error) {
          res.status(406).send(error);
        });
    })
    .post(function(req, res, next) {
      let User = new io.USER(req, res, next);

      User
        .survey()
        .then(function(data) {
          res.json({
            message : 'Survey',
            status  : 200
          });
        })
        .catch(function(error) {
          res.status(406).send(error);
        });
    });

  app.route('/survey/summary')
    .get(function(req, res, next) {

      let User = new io.USER(req, res, next);

      User
        .summary()
        .then(function(data) {
          res.json({
            message : 'Summary',
            status  : 200,
            data    : data
          });
        })
        .catch(function(error) {
          res.status(406).send(error);
        });
    });

  module.exports = app;
}());
