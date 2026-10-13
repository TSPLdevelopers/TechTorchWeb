
import { request } from "./client";

/* ---------- Generic CRUD for every content module ---------- */

const crud = (base) => ({
  list: async () => {
    const response = await request(base);
    return response.data || [];
  },

  create: async (body) =>
    (await request(base, {
      method: "POST",
      body,
    })).data,

  update: async (id, body) =>
    (await request(`${base}/${id}`, {
      method: "PUT",
      body,
    })).data,

  remove: (id) =>
    request(`${base}/${id}`, {
      method: "DELETE",
    }),
});

/* ---------- Content APIs ---------- */

export const api = {
  news: crud("/api/news"),
  jobs: crud("/api/job-openings"),
  events: crud("/api/events"),
  whitepapers: crud("/api/whitepapers"),
  updates: crud("/api/latest-updates"),
};

/* ---------- Authentication ---------- */

// Normalize the response from the backend.
// Backend responses have the shape:
// { success: true, accountType: "...", data: { ...user } }

const normalizeUser = (response, fallbackAccountType) => {
  const user = response?.data || {};

  const accountType =
    response?.accountType ||
    user?.accountType ||
    (user?.role === "candidate" ? "candidate" : null) ||
    fallbackAccountType;

  return {
    ...user,
    accountType,
  };
};

export const authApi = {
  register: (body) =>
    request("/api/auth/register", {
      method: "POST",
      body,
    }),

  registerCandidate: async (body) => {
    const response = await request(
      "/api/auth/register-candidate",
      {
        method: "POST",
        body,
      }
    );

    return normalizeUser(response, "candidate");
  },

  me: async () => {
    const response = await request("/api/auth/me");

    return normalizeUser(response, null);
  },

  login: async (body) => {
    const response = await request("/api/auth/login", {
      method: "POST",
      body,
    });

    return normalizeUser(response, null);
  },

  logout: () =>
    request("/api/auth/logout", {
      method: "POST",
    }),

  forgot: (email) =>
    request("/api/auth/forgot-password", {
      method: "POST",
      body: { email },
    }),

  verifyOtp: (email, otp) =>
    request("/api/auth/verify-otp", {
      method: "POST",
      body: { email, otp },
    }),

  reset: (body) =>
    request("/api/auth/reset-password", {
      method: "POST",
      body,
    }),
};

/* ---------- Admin accounts ---------- */

export const adminApi = {
  profile: async () =>
    (await request("/api/admin/profile")).data,

  list: async () =>
    (await request("/api/admin")).data || [],

  update: async (id, body) =>
    (await request(`/api/admin/${id}`, {
      method: "PUT",
      body,
    })).data,

  changePassword: (id, body) =>
    request(`/api/admin/${id}/password`, {
      method: "PUT",
      body,
    }),

  toggleStatus: async (id) =>
    (await request(`/api/admin/${id}/status`, {
      method: "PATCH",
    })).data,

  remove: (id) =>
    request(`/api/admin/${id}`, {
      method: "DELETE",
    }),
};

/* ---------- Blogs: public, candidate and admin ---------- */

export const blogApi = {
  published: async () =>
    (await request("/api/blogs")).data || [],

  one: async (id) =>
    (await request(`/api/blogs/${id}`)).data,

  mine: async () =>
    (await request("/api/blogs/mine")).data || [],

  create: async (body) =>
    (await request("/api/blogs", {
      method: "POST",
      body,
    })).data,

  update: async (id, body) =>
    (await request(`/api/blogs/mine/${id}`, {
      method: "PUT",
      body,
    })).data,

  remove: (id) =>
    request(`/api/blogs/mine/${id}`, {
      method: "DELETE",
    }),

  // Admin blog operations
  adminAll: async () =>
    (await request("/api/blogs/admin/all")).data || [],

  adminCreate: async (body) =>
    (await request("/api/blogs/admin", {
      method: "POST",
      body,
    })).data,

  adminUpdate: async (id, body) =>
    (await request(`/api/blogs/admin/${id}`, {
      method: "PUT",
      body,
    })).data,

  adminRemove: (id) =>
    request(`/api/blogs/admin/${id}`, {
      method: "DELETE",
    }),
};

/* ---------- Candidate interests ---------- */

export const interestApi = {
  create: async (body) =>
    (await request("/api/interests", {
      method: "POST",
      body,
    })).data,

  mine: async () =>
    (await request("/api/interests/mine")).data || [],

  withdraw: (id) =>
    request(`/api/interests/mine/${id}`, {
      method: "DELETE",
    }),

  // Admin operations
  adminAll: async () =>
    (await request("/api/interests")).data || [],

  adminStatus: async (id, status) =>
    (await request(`/api/interests/${id}/status`, {
      method: "PATCH",
      body: { status },
    })).data,

  adminRemove: (id) =>
    request(`/api/interests/${id}`, {
      method: "DELETE",
    }),
};

/* ---------- Public enquiry form ---------- */

export const enquiryApi = {
  general: (body) =>
    request("/api/general-enquiries", {
      method: "POST",
      body,
    }),
};

/* ---------- Queries: public enquiry submissions ---------- */

export const queryApi = {
  list: (params = {}) => {
    const queryString = new URLSearchParams(
      Object.entries(params).filter(
        ([, value]) => value !== "" && value != null
      )
    ).toString();

    return request(
      `/api/queries${queryString ? `?${queryString}` : ""}`
    );
  },

  meta: async () =>
    (await request("/api/queries/meta")).data,

  stats: async () =>
    (await request("/api/queries/stats")).data,

  one: async (type, id) =>
    (await request(`/api/queries/${type}/${id}`)).data,

  setStatus: async (type, id, status) =>
    (await request(`/api/queries/${type}/${id}/status`, {
      method: "PATCH",
      body: { status },
    })).data,

  remove: (type, id) =>
    request(`/api/queries/${type}/${id}`, {
      method: "DELETE",
    }),
};
