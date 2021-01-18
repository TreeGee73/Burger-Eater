const express = require("express");
const burgers = require("../models/burgersModel.js");

// Create the router for the app
const router = express.Router();

// Create routes

router.get("/", function (req, res) {
  burgers.selectAllBurgers(function (data) {
    const handlebarsObject = {
      burgers: data,
    };
    res.render("index", handlebarsObject);
  });
});

router.post("/api/add-burgers", function (req, res) {
  const burger_name = req.body.burger_name;
  burgers.insertBurger(burger_name, function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/eat-burgers/:id", function (req, res) {
  const id = req.params.id;
  burgers.updateBurger(true, id, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Route to delete data
router.delete("/api/delete-burgers/:id", function (req, res) {
  burgers.deleteBurger(req.params.id, function (err, data) {
    if (err) {
      res.status(500).end();
    } else if (data.affectedRows == 0) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
