// Dependancies
const mysql = require("mysql");

// MySQL connection details/setup
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db",
  });
}

// Initiate MySQL connection
connection.connect();

module.exports = connection;
