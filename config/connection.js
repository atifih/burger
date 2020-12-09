// Set up MySQL connection.
const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL{
	onst connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Rayyan02",
	database: "burgers_db",
});
})

connection.connect();
module.exports = connection;
