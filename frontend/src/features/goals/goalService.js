import axios from "axios";
const base_url = "http://localhost:3001/api/goals";

const addGoals = async (goal, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(base_url, goal, config);
  return response.data;
};

const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(base_url, config);
  return response.data;
};

const deleteGoals = async (id) => {
  const response = await axios.delete(`${base_url}/${id}`);
  return response.data;
};

const goalService = {
  addGoals,
  getGoals,
  deleteGoals,
};

export default goalService;
