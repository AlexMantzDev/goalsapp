const mongoose = require("mongoose");

function connectToDB(uri) {
	console.log("connecting to db...");
	const connection = mongoose.connect(uri);
	if (connection) {
		console.log("connected to mongodb");
	}
	return connection;
}

module.exports = connectToDB;
