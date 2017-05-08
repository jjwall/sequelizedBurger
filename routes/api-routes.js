var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/burgers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the todos as an argument inside of the callback function
      var hbsObject = {
        dbBurger: dbBurger
      }
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // POST route for saving a new todo
  app.post("/", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
      res.redirect("/burgers");
      // We have access to the new todo as an argument inside of the callback function
      //res.json(dbBurger);
      //res.render("index", dbBurger);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  /*app.delete("/api/burgers/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });

  });*/

  // PUT route for updating todos. We can get the updated todo data from req.body
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

