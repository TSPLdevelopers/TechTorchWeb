const API_BASE_URL = "http://localhost:5000";

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  console.log("API REQUEST:", url);

  try {
    const response = await fetch(url, {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });

    const text = await response.text();

    let result = {};

    try {
      result = text ? JSON.parse(text) : {};
    } catch {
      result = {
        message: text || "Invalid server response",
      };
    }

    console.log("API RESPONSE:", response.status, result);

    if (!response.ok) {
      throw new Error(
        result.message ||
          result.error ||
          `Server error: ${response.status}`
      );
    }

    return result;
  } catch (error) {
    console.error("API ERROR:", error);

    // Browser/backend connection problem
    if (error instanceof TypeError) {
      throw new Error(
        "Backend server se connection nahi ho raha. " +
        "Please check that backend is running on http://localhost:5000"
      );
    }

    throw error;
  }
}

/* =========================
   NEWS
========================= */

export async function getNews() {
  const result = await request("/api/news");

  if (Array.isArray(result)) {
    return result;
  }

  if (Array.isArray(result?.data)) {
    return result.data;
  }

  return [];
}

export async function createNews(newsData) {
  return await request("/api/news", {
    method: "POST",
    body: JSON.stringify(newsData),
  });
}

export async function updateNews(id, newsData) {
  return await request(`/api/news/${id}`, {
    method: "PUT",
    body: JSON.stringify(newsData),
  });
}

export async function deleteNews(id) {
  return await request(`/api/news/${id}`, {
    method: "DELETE",
  });
}

/* =========================
   JOBS
========================= */

export async function getJobs() {
  const result = await request("/api/job-openings");

  if (Array.isArray(result)) {
    return result;
  }

  if (Array.isArray(result?.data)) {
    return result.data;
  }

  return [];
}

export async function createJobOpening(jobData) {
  return await request("/api/job-openings", {
    method: "POST",
    body: JSON.stringify(jobData),
  });
}

export async function updateJobOpening(id, jobData) {
  return await request(`/api/job-openings/${id}`, {
    method: "PUT",
    body: JSON.stringify(jobData),
  });
}

export async function deleteJobOpening(id) {
  return await request(`/api/job-openings/${id}`, {
    method: "DELETE",
  });
}

/* =========================
   EVENTS
========================= */

export async function getEvents() {
  const result = await request("/api/events");

  if (Array.isArray(result)) {
    return result;
  }

  if (Array.isArray(result?.data)) {
    return result.data;
  }

  return [];
}

export async function createEvent(eventData) {
  return await request("/api/events", {
    method: "POST",
    body: JSON.stringify(eventData),
  });
}

export async function updateEvent(id, eventData) {
  return await request(`/api/events/${id}`, {
    method: "PUT",
    body: JSON.stringify(eventData),
  });
}

export async function deleteEvent(id) {
  return await request(`/api/events/${id}`, {
    method: "DELETE",
  });
}

/* =========================
   WHITEPAPERS
========================= */

export async function getWhitepapers() {
  const result = await request("/api/whitepapers");

  if (Array.isArray(result)) {
    return result;
  }

  if (Array.isArray(result?.data)) {
    return result.data;
  }

  return [];
}

export async function createWhitepaper(whitepaperData) {
  return await request("/api/whitepapers", {
    method: "POST",
    body: JSON.stringify(whitepaperData),
  });
}

export async function updateWhitepaper(id, whitepaperData) {
  return await request(`/api/whitepapers/${id}`, {
    method: "PUT",
    body: JSON.stringify(whitepaperData),
  });
}

export async function deleteWhitepaper(id) {
  return await request(`/api/whitepapers/${id}`, {
    method: "DELETE",
  });
}