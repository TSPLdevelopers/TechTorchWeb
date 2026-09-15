import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
export const registerAdmin = (data) => {
  return api.post("/auth/register", data);
};
export const loginAdmin = (data) => {
  return api.post("/auth/login", data);
};
export const logoutAdmin = () => {
  return api.post("/auth/logout");
};
export const getAdminProfile = () => {
  return api.get("/auth/profile");
};
export const getAdminById = (id) => {
  return api.get(`/auth/${id}`);
};
export const updateAdmin = (id, data) => {
  return api.put(`/auth/${id}`, data);
};
export const updateAdminPassword = (id, data) => {
  return api.put(`/auth/${id}/password`, data);
};
export const toggleAdminStatus = (id, data) => {
  return api.patch(`/auth/${id}/status`, data);
};
export const deleteAdmin = (id) => {
  return api.delete(`/auth/${id}`);
};

export default api;