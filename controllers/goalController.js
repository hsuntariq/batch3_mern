const AsyncHandler = require("express-async-handler");
const Goal = require("../models/GoalModel");

// add the goals
const addGoals = AsyncHandler(async (req, res) => {
  const goal = req.body.goal;
  //   console.log(goal);

  if (!goal) {
    res.status(400);
    throw new Error("Please enter the desired field!");
  }

  const myGoal = await Goal.create({
    goal,
    user: req.user.id,
  });
  res.status(200).send(myGoal);
});

// get the goals

const getGoals = AsyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).send(goals);
});

const getUsers = (req, res) => {
  res.status(200).json({
    data: "Users retrieved",
  });
};

// update the goals

const updateGoals = AsyncHandler(async (req, res) => {
  const id = req.params.id;

  const findGoal = await Goal.findById(id);
  if (!findGoal) {
    res.status(404);
    throw new Error("Goal is not found");
  } else {
    const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).send(updatedGoal);
  }

  res.status(200).json({
    data: `goal updated on id ${id}`,
  });
});

// delete the goal
const deleteGoals = AsyncHandler(async (req, res) => {
  const id = req.params.id;

  const findGoal = await Goal.findById(id);
  if (!findGoal) {
    res.status(404);
    throw new Error("Goal is not found");
  } else {
    await findGoal.deleteOne();
  }

  res.json({ id: findGoal._id });
});

module.exports = {
  addGoals,
  updateGoals,
  getGoals,
  getUsers,
  deleteGoals,
};
