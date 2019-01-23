var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/hdb.handlebars"));
  });

  //income request and post starts
  app.get("/api/income/all", function(req, res) {
    res.render("202");
  });

  app.post("api/income", function(req, res) {
    res.render("202");
  })
  // income request and posts ends

  //expense request and post starts
  app.get("/api/expense/all", function(req, res) {
    res.render("202");
  });

  app.post("api/expense", function(req, res) {
    res.render("202");
  })
  // expense request and posts ends

  /*-----------users-----------*/
  app.get("/api/users/all", function(req, res) {
    res.render("202");
  });

 // app.post("/register-username", function(req, res) {
  //  res.render("202");
 // })
  app.get("/main-page", function(req, res) {
    res.redirect(path.join(__dirname, "../views/hdb.handlebars"));
  });

  /*------------end users--------*/


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
