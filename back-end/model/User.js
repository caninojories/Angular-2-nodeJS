(function() {
  'use strict';

  var mongoose    = require('mongoose'),
      timestamps  = require('mongoose-timestamp');

  var UserSchema = new mongoose.Schema({
    email : {
      type    : String,
      required: true,
      unique  : true
    },
    name  : String,
    gender: String,
    color : String
  });

  UserSchema.plugin(timestamps);

  module.exports = mongoose.model('User', UserSchema);
}());
