var db = require("../models");
var budget = require("../models/budget.js");
var path = require("path");

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
    var req = req.body;
    console.log(req);
    budget.expense.create(
      ["amount", "users_id", "category_id", "notes", "date"],
      [req.amount, req.users_id, req.category_id, req.notes, req.date],
      function(result) {
        console.log("API routes and " + result);
        res.json(result);
      }
    );
  });
  /* --------------end expense-----------------*/

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
    console.log(req.body.name);
    var condition = req.body.name;
    console.log("line 79: " + condition);
    budget.expense.expenseByCategory(
      condition, function(result) {
        //console.log("callback: " + JSON.stringify(result));
        // res.render("hdb", {categoryList: categoryName});
        // res.render("hdb", {categoryList: sum});
      }
    );
  })


  app.get("/", function(req, res) {
    //console.log(res, req);
    budget.category.all(function(category) {
      console.log(category)
      res.render("hdb", {category:category});
    })
  })



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
      if(password === result[0].password)
      {
        //res.render(path.join(__dirname, "../views/hdb.handlebars"));//username
        budget.category.all(function(category) {
          console.log(category)
          // res.render("hdb", {category:category});
          res.render("hdb", {username:result[0].userName});
        });
       // res.render("hdb", {username:result[0].userName});
        // res.json(result[0].userName);
      }else{
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

  // Showing all categories

  app.get("/", function(req, res) {
    //console.log(res, req);
    budget.category.all(function(category) {
      console.log(category)
      res.render("hdb", {category:category});
    })
  })
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
};
/***************************************************************************************************** */
