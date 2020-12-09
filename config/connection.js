// Set up MySQL connection.
const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "Rayyan02",
		database: "burgers_db",
	});
}

connection.connect();
module.exports = connection;
