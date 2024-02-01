require("dotenv").config();
const express = require("express");
const app = express();
const { PORT, SERVER } = require("./lib/constants");
const connectToDB = require("./lib/mongoose");

app.use(express.json());
app.use("/api/v1/goals", require("./routes/goals.route"));

(async function () {
	try {
		await connectToDB(process.env.MONGO_URL);
		app.listen(PORT, () => {
			console.log(SERVER);
		});
	} catch (err) {
		console.log(err);
	}
})();
