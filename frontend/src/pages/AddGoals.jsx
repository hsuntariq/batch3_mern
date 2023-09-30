import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addGoals } from "../features/goals/goalSlice";

const AddGoals = () => {
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message, goals } = useSelector(
    (state) => state.goals
  );
  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
  }, [navigate, user]);

  const handleClick = (e) => {
    e.preventDefault();
    if (isError) {
      console.log(message);
    } else {
      dispatch(addGoals({ goal }));
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Form className="col-lg-5 m-auto border mt-4 rounded p-4">
        <h1 className="text-center display-1">Add Your Goal</h1>
        <Form.Group>
          <Form.Label>Add your Goal</Form.Label>
          <Form.Control
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Goal..."></Form.Control>
          <Button onClick={handleClick} variant="dark my-3 w-100">
            Add
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddGoals;
