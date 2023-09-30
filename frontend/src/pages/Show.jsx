import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGoals, getGoals, reset } from "../features/goals/goalSlice";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Show = () => {
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.goals
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      console.log(message);
    } else {
      dispatch(getGoals());
    }
    dispatch(reset());
  }, []);
  return (
    <Container>
      <Row>
        {goals?.map((goal) => {
          return (
            <Col className="my-3" lg={4}>
              <Card className="p-3">
                <h6>{goal?.goal}</h6>
                <h6 className="text-secondary">{goal?._id}</h6>
                <h6 className="text-secondary">{user?.name}</h6>
                <FaTrashAlt
                  onClick={() => dispatch(deleteGoals(goal?._id))}
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                />
                <Link to={`update/${goal?._id}`}>
                  <h6>update</h6>
                </Link>
                {/* {console.log(goal)} */}
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
    // console.log(goals)
  );
};

export default Show;
