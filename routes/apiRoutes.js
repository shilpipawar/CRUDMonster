var db = require("../models");
var budget = require("../models/budget.js");
var path = require("path");
var connection = require("../config/connection");
module.exports = function(app) {
  // Get all examples

  /* ------------income---------------*/
  app.get("/api/income/all", function(req, res) {
    var req = req.body;
    budget.income.all(function(result) {
      console.log(result);
      var income = result[0].amount;
      console.log(income)
      res.json(result);
    });
  });

  app.post("/api/income", function(req, res) {
    var req = req.body;
    console.log(req);
    budget.income.create(
      ["amount", "users_id", "category_id", "notes", "date"],
      [req.amount, req.users_id, req.category_id, req.notes, req.date],
      function(result) {
        console.log("API routes and " + result);
        res.json(result);
      }
    );
  });
  /* --------------end income-----------------*/

  /* -------------expense---------------*/
  app.get("/api/expense/all", function(req, res) {
    var req = req.body;
    budget.expense.all(function(result) {
      console.log("Api routes " + result);
      res.json(result);
    });
  });

  app.post("/api/expense", function(req, res) {
    var amount = req.body.amount;
    var userName = req.body.username; //2
    //select id from users where userName = 'shilpa-pawar'
    var category = req.body.category;
    //var categoryID = 2;//call select * from category where name = 'Food';
    var notes = req.body.notes;
    var date = req.body.date;
    //console.log("categoryid" + categoryID);
    //budget.expense.create
    var usersID = 3; // setting defult as value cannot be null
    budget.users.selectUserId(["userName"], [userName], function(result) {
      console.log("Line 53 " + result[0]);

      //userID = result[0].id;
    });
    budget.expense.create(
      ["amount", "users_id", "category_name", "notes", "date"],
      [amount, usersID, category, notes, date],
      function(result) {
        console.log(result);
        res.json(result);
      }
    );
  });
  app.get("/", function(req, res) {
    var sqlQuery = "SELECT  distinct(C.name), SUM(E.amount) AS total from expense E inner join category C on E.category_name = C.name inner join users U on E.users_id = U.id where U.userName = 'johnny-D' group by C.name";
    connection.query(sqlQuery, function(error, results, fields) {
      if (error) throw error;
      console.log("newRoutes!!!!!!!!!!!")
      console.log(results);
      var totalsum = 0;
      for (i = 0; i < results.length; i ++) {
      console.log(results[i].total);
      totalsum = totalsum += results[i].total;
      }
      console.log(totalsum)
      res.render("hdb", { expense: results, totalsum })
    });
  })
  /* --------------end expense-----------------*/

      //Category Data Pull
      app.get("/category", function(req, res) {
        budget.category.all(function(result) {
          res.render("hdb", { category: result });
        })
      });
  /* --------------users-------------------*/
  app.get("/api/users/all", function(req, res) {
    var req = req.body;
    budget.users.all(function(result) {
      console.log("Api routes " + result);
      res.json(result);
    });
  });

  app.post("/api/users", function(req, res) {
    var req = req.body;
    console.log(req);
    budget.users.create(
      ["userName", "password"],
      [req.userName, req.password],
      function(result) {
        console.log("API routes and " + result);
        res.json(result);
      }
    );
  });

  app.post("/api/user-expenses", function(req, res) {
    console.log("apiRoutes 79 + ");
    console.log(req.body.name);
    var condition = req.body.name;
    console.log("line 79: " + condition);
    budget.expense.expenseByCategory(condition, function(expense) {
      // console.log("name " + name)
      //console.log("callback: " + JSON.stringify(result));
      res.render("hdb", { expense: expense });
      // res.render("hdb", {categoryList: sum});
    });
  });

  // app.get("/api/user-expenses", function(req, res) {
  //   var condition = req.body.name;
  //   budget.expense.expenseByCategory(condition, function(expense) {
  //     console.log("expense stuffffff");
  //     console.log(condition);
  //     res.render("maintable", {expense: expense});

  //   })

  // })

  /*-------------end users----------------*/
  //Login Controler Code
  app.post("/login-username", function(req, res) {
    console.log(req.body);
    var userName = req.body.name;
    var password = req.body.password;
    console.log("INSIDE API ROUTE" + userName, password);

    budget.users.selectPassword(["userName"], [userName], function(result) {
      console.log("Line 99: " + result[0].password);
      if (password === result[0].password) {
        budget.category.all(function(category) {
          var test = JSON.stringify(category);
          console.log(test);
          var testjson = JSON.parse(test);
          console.log(testjson);
          res.render("hdb", { category: testjson });
        });
        //res.render("hdb", { username: result[0].userName });
      } else {
        console.log("ERROR");
      }
    });
  });
  //Register Controler Code
  app.post("/register-username", function(req, res) {
    console.log(req.body);
    var window = top.location;//Shilpa
    var userName = req.body.name;
    var password = req.body.password;
    console.log(userName, password);
    budget.users.create(
      ["userName", "password"],
      [userName, password],
      function(result) {
        console.log("API routes and " + result);
        window.top.location.reload();
      }
    );
  });

    //Category Data Pull
    app.get("/category", function(req, res) {
      budget.category.all(function(result) {
        res.render("hdb", { category: result });
      })
    });
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
};

/***************************************************************************************************** */
