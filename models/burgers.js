var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables name's are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.update("burgers", id, cb, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};



// Export to controller
module.exports = burger;