const mongoose = require("mongoose");
const schema = mongoose.Schema;

const GoalSchema = new schema({
	action: {
		type: String,
		required: true,
	},
	isComplete: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("Goal", GoalSchema);
