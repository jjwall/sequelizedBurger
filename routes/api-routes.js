var db = require("../models");

module.exports = function(app) {

  app.get("/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
      var hbsObject = {
        dbBurger: dbBurger
      }
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
      res.redirect("/burgers");
    });
  });

  app.delete("/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.redirect("/burgers");
    });
  });

  app.put("/:id", function(req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.redirect("/burgers");
    });
  });

};

