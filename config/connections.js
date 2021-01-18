// Dependancies
const mysql = require('mysql');

// MySQL connection details/setup
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db',
});

// Initiate MySQL connection
connection.connect(function (err) {
    if (err) {
        console.error(`Error connection: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadID}`);
});

module.exports = connection;