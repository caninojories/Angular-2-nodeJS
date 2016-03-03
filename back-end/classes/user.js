(function() {
  'use strict';

  class USER {
    constructor(req, res, next) {
      this.req  = req;
      this.res  = res;
      this.next = next;
    }

    results() {
      let self  = this;
      let query = io.url.parse(self.req.url, true).query;

      return new Promise(function(resolve, reject) {
        io.User
          .find({})
          .skip(query.skip)
          .limit(query.limit)
          .exec()
          .then(function(data) {

            USER
              .resultsCount()
              .then(function(count) {
                resolve({
                  data  : data,
                  count : count
                });
              });
          });
      });
    }

    static resultsCount() {
      return new Promise(function(resolve, reject) {
        io.User
          .count()
          .exec()
          .then(function(count) {
            resolve(count);
          });
      });
    }

    summary() {
      let self  = this;
      let query = io.url.parse(self.req.url, true).query;

      return new Promise(function(resolve, reject) {
        io.User.aggregate([{
          $group: {
            _id: '$color',
            count: {$sum: 1}
          }
        }], function (error, result) {
          if (error) {
            return reject(error);
          }

          resolve(result);
        });
      });
    }

    survey() {
      let self  = this;
      let query = self.req.body;

      return new Promise(function(resolve, reject) {
        var user = io.User({
          name  : query.name,
          email : query.email,
          gender: query.gender,
          color : query.color
        });

        user.save(function(error) {
          if (error) {
            return reject(error);
          }

          resolve('success');
        });
      });
    }
  }

  module.exports = USER;
}());
