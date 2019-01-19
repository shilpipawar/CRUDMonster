var db = require("../models");
var budget = require("../models/budget.js");

module.exports = function(app) {
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
    console.log(userName, password);
    budget.users.create(
      ["userName", "password"],
      [userName, password],
      function(result) {
        console.log("API routes and " + result);
        res.json(result);
      }
    );
  }); //End user-reg
  /////////////////////User Logout//////////////////////////////////////////////////////////////////////////
};
/***************************************************************************************************** */
