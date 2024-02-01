const Goal = require("../models/goals.model");

async function getAllGoals(req, res) {
	try {
		const goals = await Goal.find({});
		res.status(200).json({ success: true, data: goals });
	} catch (err) {
		console.log(err);
	}
}
async function createGoal(req, res) {
	try {
		const goal = await Goal.create(req.body);
		res.status(200).json({ success: true, data: goal });
	} catch (err) {
		console.log(err);
	}
}
async function getGoalById(req, res) {
	try {
		const goal = await Goal.findById(req.params.id);
		res.status(200).json({ success: true, data: goal });
	} catch (err) {
		console.log(err);
	}
}
async function updateGoalById(req, res) {
	try {
		const goal = await Goal.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json({ success: true, data: goal });
	} catch (err) {
		console.log(err);
	}
}
async function deleteGoalById(req, res) {
	try {
		const goal = await Goal.findByIdAndDelete(req.params.id);
		res.status(200).json({ success: true, data: goal });
	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	getAllGoals,
	createGoal,
	getGoalById,
	updateGoalById,
	deleteGoalById,
};
