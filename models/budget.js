var orm = require("../config/orm.js");

var budgets = {

  expense: {
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
  },

  income: {
    all: function(cb) {
      orm.all("income", function(res) {
        cb(res);
      });
    },

    create: function(cols, vals, cb) {
      orm.create("income", cols, vals, function(res) {
        cb(res);
      });
    }

  },

  users: {
    all: function(cb) {
      orm.all("users", function(res) {
        cb(res);
      });
    },

    selectPassword: function(col, val, cb) {
      orm.selectPassword("users", col, val, function(result) {
        cb(result);
      });
    },

    create: function(cols, vals, cb) {
      console.log("im here");
      orm.create("users", cols, vals, function(res) {
        cb(res);
      });
    },

    update: function(objColVals, condition, cb) {
      orm.update("users", objColVals, condition, function(res) {
        cb(res);
      });
    }

  },


  category: {
    all: function(cb) {
      orm.all("category", function(res) {
        cb(res);
      });
    }
  },


  months: {
    all: function(cols, vals, cb) {
      orm.all("months", cols, vals, function(res) {
        cb(res);
      });
    }
  }

};

module.exports = budgets;