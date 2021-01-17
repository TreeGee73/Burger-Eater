const express = require("express");
const burgers = require("../models/burgersModel.js");

// Create the router for the app
const router = express.Router();

// Create routes

router.get("/", function (req, res) {
  return burgers.selectAllBurgers(function (data) {
    return res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function (req, res) {
  return burgers.insertBurger(req.body.burger_name, function (result) {
    return res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  return burgers.updateBurger(req.params.id, 1, function (result) {
    return result.changedRows ? res.status(200).end() : res.status(404).end();
  });
});

module.exports = router;
