import axios from "axios";

const api = axios.create({
  baseURL: "https://security-employee-management-system-2.onrender.com/api",
});

export default api;
