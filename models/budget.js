var orm = require("../config/orm.js");

var expense = {
  all: function(cb) {
    orm.all("expense", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("expense", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    orm.update("expense", objColVals, condition, function(res) {
      cb(res);
    });
  },

  delete: function(condition, cb) {
    orm.delete("expense", condition, function(res) {
      cb(res);
    });
  },

  expenseByCategory: function(condition, cb) {
    orm.expenseByCategory(condition, function(res) {
      cb(res);
    });
  },

  expenseByMonth: function(condition, cb) {
    orm.expenseByMonth(condition, function(res) {
      cb(res);
    });
  }
};

module.export = expense;

var income = {
  all: function(cb) {
    orm.all("income", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("income", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    orm.update("income", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.export = income;
