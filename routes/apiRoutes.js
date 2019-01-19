var db = require("../models");
var budget = require("../models/budget.js");

module.exports = function(app) {
<<<<<<< HEAD
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
        console.log("API routes and " +  result);
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
        console.log("API routes and " +  result);
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
        console.log("API routes and " +  result);
        res.json(result);
      }
    );
  });

  /*-------------end users----------------*/

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

=======
>>>>>>> logout function
  /////////////////////////Login Controler Code/////////////////////////////////////////////////////////////
  app.get("/login-username", function(req, res) {
    console.log(req.body);
    var userName = req.body.username;
    var password = req.body.password;

    if (userName.search(/^[A-Za-z0-9]+$/) === -1) {
      res.render(404);
      return;
    }
    db.Example.find({}).then(function(passwordDB) {
      if (password === passwordDB) {
        res.render(404); //success
      } else {
        res.render(404); //Error
      }
    });
    //get password from DB based on matching username
    // select passwordDB from table where usesrNameDB = userName
    // var passwordDB = SHA512(passwordDB);
    //   if(password === passwordDB)
    //   {
    //     res.render(202);//success
    //   }else{
    //     res.render(404); //Error
    //   }
  }); //End user-login
  ////////////////////////Register Controler Code////////////////////////////////////////////////////////////
  app.post("/register-username", function(req, res) {
    console.log("body " + req.body);
    var userName = req.body.name;
    var password = req.body.password;
   /* if (userName.search(/^[A-Za-z0-9]+$/) === -1) {
      res.redirect(303, "./views/registration-failure.html");
      return;
    } */
  /*  var input = {
      name: userName,
      passSHA: password
<<<<<<< HEAD
    }; */
    console.log(userName, password);
    budget.users.create(
      ["userName", "password"],
      [userName, password],
      function(result) {
        console.log("API routes and " +  result);
        res.json(result);
      }
    );

  //  db.Example.create(input).then(function(dbExample) {
      // res.json(dbExample);
      //res.render(202);
<<<<<<< HEAD
  //  });
  });
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
=======
    });
  }); //End user-reg
  /////////////////////User Logout//////////////////////////////////////////////////////////////////////////
>>>>>>> api comments
=======
    };
    db.Example.create(input).then(function(dbExample) {
      //res.json(dbExample);
      console.log(dbExample);
      res.render("202");
    });
  }); //End user-reg
  /////////////////////User Logout//////////////////////////////////////////////////////////////////////////  
>>>>>>> logout function
};
/***************************************************************************************************** */
