import api from "./axiosInstance";

export const loginUser = async (loginData) => {
  console.log("Sending:", loginData);

  const response = await api.post("/auth/login", loginData);

  console.log("Response:", response);

  return response.data;
};

export const registerUser = async (registerData) => {
  const response = await api.post("/auth/register", registerData);
  console.log("Response:", response);
  return response.data;
};