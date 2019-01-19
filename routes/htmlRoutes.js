var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
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

  app.post("api/users", function(req, res) {
    res.render("202");
  })
  /*------------end users--------*/

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
