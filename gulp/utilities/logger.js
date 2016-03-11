(function() {
  'use strict';

  module.exports = function(util, msg ) {
    if(typeof(msg) === 'object') {
      for(var item in msg ) {
        if(msg.hasOwnProperty(item) ) {
          util.log(util.colors.blue(msg[item]));
        }
      }
    } else {
      util.log(util.colors.blue(msg));
    }
  };
}());
