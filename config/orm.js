// Import MySQL connection.
var connection = require("./connections.js");

// Object for all our SQL statement functions.
const orm = {
  // Pulls all bugers from the table
  selectAllBurgers: function (table, cb) {
    const query = `SELECT * FROM ??`;
    connection.query(query, [table], function (err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },

  // Adds a new burger to the table
  insertBurger: function (table, columnName, burger_name, cb) {
    const query = `INSERT INTO ?? (??) VALUES (?)`;
    connection.query(
      query,
      [table, columnName, burger_name],
      function (err, data) {
        if (err) {
          throw err;
        }
        cb(data);
      }
    );
  },

  // Updates the selected table data (burger_name) to a new state (devoured = true)
  updateBurger: function (table, condition, id, cb) {
    const query = `UPDATE ?? SET devoured = ? WHERE id = ?`;
    connection.query(query, [table, condition, id], function (err, data) {
      if (err) {
        throw err;
      }

      cb(data);
    });
  },

  // Deletes the selected item from the table
  deleteBurger: function (table, id, cb) {
    const query = `DELETE FROM ?? WHERE id = ?`;
    connection.query(query, [table, id], cb);
  },
};

module.exports = orm;
