// Dependancies
const mysql = require('mysql');

// MySQL connection details/setup
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
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