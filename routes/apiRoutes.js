var db = require("../models");
var budget = require("../models/budget.js");
var path = require("path");
var connection = require("../config/connection")
module.exports = function(app) {
  // Get all examples



  /* ------------income---------------*/
  app.get("/api/income/all", function(req, res) {
    var req = req.body;
    budget.income.all(function(result) {
      console.log("Api routes " + result);
      res.json(result);
    })
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
    })
  });

  app.post("/api/expense", function(req, res) {
    var amount = req.body.amount;
    var usersID = 2;
    var categoryID = req.body.category;
    var notes = req.body.notes;
    var date = req.body.date;
    console.log(categoryID);
    budget.expense.create(
      ["amount", "users_id", "category_name", "notes", "date"],
      [amount, usersID, categoryID, notes, date],
      function(result) {
        console.log(result);
        res.json(result);
      }
    );
  });
  app.get(["/"], function(req, res) {
    var sqlQuery = "SELECT  distinct(C.name), SUM(E.amount) AS total from expense E inner join category C on E.category_name = C.name inner join users U on E.users_id = U.id where U.userName = 'johnD' group by C.name";
    connection.query(sqlQuery, function(error, results, fields) {
      if (error) throw error;
      console.log("newRoutes!!!!!!!!!!!")
      console.log(results);

      res.render("hdb", { expense: results })
    })
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
    })
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
    console.log("apiRoutes 79 + ")
    console.log(req.body.name);
    var condition = req.body.name;
    console.log("line 79: " + condition);
    budget.expense.expenseByCategory(
      condition, function(expense) {
        // console.log("name " + name)
        //console.log("callback: " + JSON.stringify(result));
        res.render("hdb", { expense: expense });
        // res.render("hdb", {categoryList: sum});
      }
    );
  })

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
    console.log(userName, password);

    budget.users.selectPassword(
      ["userName"],
      [userName],
      function(result) {
        console.log("Line 99: " + result[0].password);
        if (password === result[0].password) {
          //res.render(path.join(__dirname, "../views/hdb.handlebars"));//username
          budget.category.all(function(category) {
            console.log(category)
            // res.render("hdb", {category:category});
            res.render("hdb", { username: result[0].userName });
          });
          // res.render("hdb", {username:result[0].userName});
          // res.json(result[0].userName);

        } else {
          console.log("ERROR");
        }
        //res.json(result[0].password);
      })
  });
  //Register Controler Code
  app.post("/register-username", function(req, res) {
    console.log(req.body);
    var userName = req.body.name;
    var password = req.body.password;
    console.log(userName, password);
    budget.users.create(
      ["userName", "password"],
      [userName, password],
      function(result) {
        console.log("API routes and " + result);
        res.json(result);
      });
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
