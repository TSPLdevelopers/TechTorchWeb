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
  registerCandidate: async (body) => (await request("/api/auth/register-candidate", { method: "POST", body })).data,
  me: async () => {
    const r = await request("/api/auth/me");
    return { ...r.data, accountType: r.accountType };
  },
  // one login for admins and candidates – the response says which one signed in
  login: async (body) => {
    const r = await request("/api/auth/login", { method: "POST", body });
    return { ...r.data, accountType: r.accountType };
  },
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

/* ---------- blogs (public + candidate + admin) ---------- */
export const blogApi = {
  published: async () => (await request("/api/blogs")).data || [],
  one: async (id) => (await request(`/api/blogs/${id}`)).data,
  mine: async () => (await request("/api/blogs/mine")).data || [],
  create: async (body) => (await request("/api/blogs", { method: "POST", body })).data,
  update: async (id, body) => (await request(`/api/blogs/mine/${id}`, { method: "PUT", body })).data,
  remove: (id) => request(`/api/blogs/mine/${id}`, { method: "DELETE" }),
  // admin
  adminAll: async () => (await request("/api/blogs/admin/all")).data || [],
  adminCreate: async (body) => (await request("/api/blogs/admin", { method: "POST", body })).data,
  adminUpdate: async (id, body) => (await request(`/api/blogs/admin/${id}`, { method: "PUT", body })).data,
  adminRemove: (id) => request(`/api/blogs/admin/${id}`, { method: "DELETE" }),
};

/* ---------- candidate interests ---------- */
export const interestApi = {
  create: async (body) => (await request("/api/interests", { method: "POST", body })).data,
  mine: async () => (await request("/api/interests/mine")).data || [],
  withdraw: (id) => request(`/api/interests/mine/${id}`, { method: "DELETE" }),
  // admin
  adminAll: async () => (await request("/api/interests")).data || [],
  adminStatus: async (id, status) => (await request(`/api/interests/${id}/status`, { method: "PATCH", body: { status } })).data,
  adminRemove: (id) => request(`/api/interests/${id}`, { method: "DELETE" }),
};

/* ---------- public enquiry form ---------- */
export const enquiryApi = {
  general: (body) => request("/api/general-enquiries", { method: "POST", body }),
};