import { request } from "./client";

/* ---------- generic CRUD for every content module ---------- */
const crud = (base) => ({
  list: async () => (await request(base)).data || [],
  create: async (body) => (await request(base, { method: "POST", body })).data,
  update: async (id, body) => (await request(`${base}/${id}`, { method: "PUT", body })).data,
  remove: (id) => request(`${base}/${id}`, { method: "DELETE" }),
});

export const api = {
  news: crud("/api/news"),
  jobs: crud("/api/job-openings"),
  events: crud("/api/events"),
  whitepapers: crud("/api/whitepapers"),
  updates: crud("/api/latest-updates"),
};

/* ---------- auth ---------- */
export const authApi = {
  register: (body) => request("/api/auth/register", { method: "POST", body }),
  login: async (body) => (await request("/api/auth/login", { method: "POST", body })).data,
  logout: () => request("/api/auth/logout", { method: "POST" }),
  forgot: (email) => request("/api/auth/forgot-password", { method: "POST", body: { email } }),
  verifyOtp: (email, otp) => request("/api/auth/verify-otp", { method: "POST", body: { email, otp } }),
  reset: (body) => request("/api/auth/reset-password", { method: "POST", body }),
};

/* ---------- admin accounts ---------- */
export const adminApi = {
  profile: async () => (await request("/api/admin/profile")).data,
  list: async () => (await request("/api/admin")).data || [],
  update: async (id, body) => (await request(`/api/admin/${id}`, { method: "PUT", body })).data,
  changePassword: (id, body) => request(`/api/admin/${id}/password`, { method: "PUT", body }),
  toggleStatus: async (id) => (await request(`/api/admin/${id}/status`, { method: "PATCH" })).data,
  remove: (id) => request(`/api/admin/${id}`, { method: "DELETE" }),
};
