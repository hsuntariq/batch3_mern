const express = require("express");
const {
  addGoals,
  getGoals,
  getUsers,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");
const router = express.Router();
router.route("/").get(getGoals).post(addGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals);
router.get("/get-users", getUsers);

module.exports = router;
