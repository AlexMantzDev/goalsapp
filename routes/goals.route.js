const router = require("express").Router();
const {
	getAllGoals,
	createGoal,
	getGoalById,
	updateGoalById,
	deleteGoalById,
} = require("../controllers/goals.controller");

router.route("/").get(getAllGoals).post(createGoal);
router
	.route("/:id")
	.get(getGoalById)
	.patch(updateGoalById)
	.delete(deleteGoalById);

module.exports = router;
