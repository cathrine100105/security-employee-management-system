import api from "../services/axiosInstance";

export const getEmployees = async () => {
  const response = await api.get("/api/security", {
    params: {
      page: 0,
      size: 100,
    },
  });

  console.log("GET Response:", response.data);

  return response.data;
};
export const createEmployee = async (employee) => {
  const response = await api.post("/api/security", employee);

  console.log("POST Response:", response.data);

  return response.data;
};
export const deleteEmployee = async (guardId) => {
  const response = await api.delete(`/api/security/${guardId}`);
  return response.data;
};
export const searchEmployees = async (keyword) => {
  const response = await api.get("/api/security/search", {
    params: {
      keyword,
    },
  });

  return response.data;
};

export const updateEmployee = async ({ guardId, employee }) => {
  const response = await api.put(`/api/security/${guardId}`, employee);

  return response.data;
};

export const getEmployeeById = async (guardId) => {
  const response = await api.get(`/api/security/${guardId}`);
  return response.data;
};
