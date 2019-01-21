var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
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
      console.log("orm.js " + queryString)
      cb(res);
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

    console.log(queryString);

    connection.query(queryString, val, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  password: function(table, condition, cb) {
    var queryString = "Select Password from Users WHERE ";
    queryString += condition;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  expenseByCategory: function(condition, cb) {
    var queryString = "SELECT  distinct(B.name), SUM(A.amount) from expense A ";
    queryString += " inner join category B on A.category_id = B.id";
    queryString += " inner join users C on A.users_id = C.id where C.id = ";
    queryString += condition;
    queryString += "group by B.name";
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
  },
    login : function (condition,cb) {
      var queryString = "SELECT  password  from users where UserName = '" ;
        queryString += condition;
        queryString += "'"
        console.log("orm.js" + queryString);
        connection.query(queryString, function(err,result){
          if (err) {
            throw err;
          }
          cb(result);
        })
    }
};

module.exports = orm;
