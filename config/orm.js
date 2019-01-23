var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = " '" + value + "' ";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  all: function(input, cb) {
    var queryString = "SELECT * FROM " + input + ";";
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
        
      }
      // console.log("orm.js " + queryString)
      cb(res);
    });
  },

  selectPassword: function(table, col, val, cb) {
    var queryString = 
    "SELECT password, userName FROM " + table + " WHERE " + col + " = '" + val + "';";
    // console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(table, col, val, cb) {
    var queryString =
      "INSERT INTO " +
      table +
      " (" +
      col.toString() +
      ") VALUES (" +
      printQuestionMarks(val.length) +
      ") ";

    // console.log(queryString);

    connection.query(queryString, val, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  update: function(table, objValues, condition, cb) {
    var queryString =
      "UPDATE " + table + " SET " + objToSql(objValues) + " WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  expenseByCategory: function(condition, cb) {
    var queryString = "SELECT  distinct(C.name), SUM(E.amount) AS total from expense E";
    queryString += " inner join category C on E.category_name = C.name";
    queryString += " inner join users U on E.users_id = U.id where U.userName = '";
    queryString += condition;
    queryString += "' group by C.name";
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  expenseByMonth: function(condition, cb) {
    var queryString;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
  
};

module.exports = orm;
