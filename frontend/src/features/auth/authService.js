import axios from "axios";
const base_url = "http://localhost:3001/api/user";

const registerUser = async (userData) => {
  const response = await axios.post(`${base_url}/register`);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
