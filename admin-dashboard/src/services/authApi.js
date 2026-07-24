import api from "./axiosInstance";

export const loginUser = async (loginData) => {
  console.log("Sending:", loginData);

  const response = await api.post("/auth/login", loginData);

  console.log("Response:", response);

  return response.data;
};

export const registerUser = async (registerData) => {
  console.log("Sending:", registerData);

  const response = await api.post("/auth/register", registerData);

  console.log("Response:", response);

  return response.data;
};

export const forgotPassword = async (emailData) => {
  console.log("Sending:", emailData);

  const response = await api.post("/auth/forgot-password", emailData);

  console.log("Response:", response);

  return response.data;
};

export const resetPassword = async (resetData) => {
  console.log("Sending:", resetData);

  const response = await api.post("/auth/reset-password", resetData);

  console.log("Response:", response);

  return response.data;
};
