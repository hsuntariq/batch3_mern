import axios from "axios";
const base_url = "http://localhost:3001/api/user";

const registerUser = async (userData) => {
  const response = await axios.post(`${base_url}/register`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logoutUser = () => {
  return localStorage.removeItem("user");
};

const authService = {
  registerUser,
  logoutUser,
};

export default authService;
