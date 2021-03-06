// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
	selectAll: (cb) => {
		orm.selectAll("burgers", (res) => {
			cb(res);
		});
	},
	// The variables cols and vals are arrays.
	insertOne: (cols, vals, cb) => {
		orm.insertOne("burgers", cols, vals, (res) => {
			cb(res);
		});
	},

	updateOne: (cols, vals, cb) => {
		orm.updateOne("burgers", cols, vals, (res) => {
			cb(res);
		});
	},

	delete: (condition, cb) => {
		orm.delete("burgers", condition, (res) => {
			cb(res);
		});
	},
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
