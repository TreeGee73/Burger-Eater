const orm = require("../config/orm.js");

const burgersModel = {
  selectAllBurgers: function (cb) {
    orm.selectAllBurgers("burgers", function (res) {
      cb(res);
    });
  },

  // Function to add to the table
  insertBurger: function (burger_name, cb) {
    orm.insertBurger("burgers", "burger_name", burger_name, function (res) {
      cb(res);
    });
  },

  // Function to update status of elements on the table
  updateBurger: function (condition, id, cb) {
    orm.updateBurger("burgers", condition, id, function (res) {
      cb(res);
    });
    },
  
  // Function to delete elements from the table
  deleteBurger: function (id, cb) {
    orm.deleteBurger("burgers", id, cb);
  },
};

module.exports = burgersModel;
