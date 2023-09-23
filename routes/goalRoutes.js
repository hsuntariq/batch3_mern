const express = require("express");
const {
  addGoals,
  getGoals,
  getUsers,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");
const AuthMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
router.route("/").get(AuthMiddleware, getGoals).post(AuthMiddleware, addGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals);
router.get("/get-users", getUsers);

module.exports = router;
