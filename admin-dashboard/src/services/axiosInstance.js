import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8057/api",
});

export default api;
