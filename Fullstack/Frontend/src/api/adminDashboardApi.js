const API_BASE_URL = "http://localhost:5000";

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    credentials: "include",

    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },

    ...options,
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      result.message ||
        result.error ||
        `Request failed with status ${response.status}`
    );
  }

  return result;
}

function extractData(result) {
  if (Array.isArray(result)) {
    return result;
  }

  if (Array.isArray(result?.data)) {
    return result.data;
  }

  return [];
}


// =========================
// NEWS APIs
// =========================

// GET ALL NEWS
export async function getNews() {
  const result = await request("/api/news");

  return extractData(result);
}


// GET SINGLE NEWS
export async function getNewsById(id) {
  const result = await request(`/api/news/${id}`);

  return result?.data || null;
}


// CREATE NEWS
export async function createNews(newsData) {
  return await request("/api/news", {
    method: "POST",
    body: JSON.stringify(newsData),
  });
}


// UPDATE NEWS
export async function updateNews(id, newsData) {
  return await request(`/api/news/${id}`, {
    method: "PUT",
    body: JSON.stringify(newsData),
  });
}


// DELETE NEWS
export async function deleteNews(id) {
  return await request(`/api/news/${id}`, {
    method: "DELETE",
  });
}


// =========================
// JOB OPENING APIs
// =========================

// GET ALL JOB OPENINGS
export async function getJobs() {
  const result = await request("/api/job-openings");

  return extractData(result);
}


// GET SINGLE JOB OPENING
export async function getJobOpeningById(id) {
  const result = await request(`/api/job-openings/${id}`);

  return result?.data || null;
}


// CREATE JOB OPENING
export async function createJobOpening(jobData) {
  return await request("/api/job-openings", {
    method: "POST",
    body: JSON.stringify(jobData),
  });
}


// UPDATE JOB OPENING
export async function updateJobOpening(id, jobData) {
  return await request(`/api/job-openings/${id}`, {
    method: "PUT",
    body: JSON.stringify(jobData),
  });
}


// DELETE JOB OPENING
export async function deleteJobOpening(id) {
  return await request(`/api/job-openings/${id}`, {
    method: "DELETE",
  });
}


// =========================
// ADMIN DASHBOARD
// =========================

export async function getAdminDashboardData() {
  const news = await getNews();
  const jobs = await getJobs();
  const whitepapers = await getWhitepapers();

  return {
    news,
    jobs,
    events: [],
    whitepapers: whitepapers,
  };
}
// =========================
// EVENT APIs
// =========================

export async function getEvents() {
  const result = await request("/api/events");

  return extractData(result);
}

export async function getEventById(id) {
  const result = await request(`/api/events/${id}`);

  return result?.data || result;
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
// =========================
// WHITEPAPER APIs
// =========================

// GET ALL WHITEPAPERS
export async function getWhitepapers() {
  const result = await request("/api/whitepapers");

  console.log("========== WHITEPAPERS FROM MONGODB ==========");
  console.log(result);
  console.log("==============================================");

  return extractData(result);
}

// GET SINGLE WHITEPAPER
export async function getWhitepaperById(id) {
  const result = await request(`/api/whitepapers/${id}`);

  return result?.data || null;
}

// CREATE WHITEPAPER
export async function createWhitepaper(whitepaperData) {
  return await request("/api/whitepapers", {
    method: "POST",
    body: JSON.stringify(whitepaperData),
  });
}

// UPDATE WHITEPAPER
export async function updateWhitepaper(id, whitepaperData) {
  return await request(`/api/whitepapers/${id}`, {
    method: "PUT",
    body: JSON.stringify(whitepaperData),
  });
}

// DELETE WHITEPAPER
export async function deleteWhitepaper(id) {
  return await request(`/api/whitepapers/${id}`, {
    method: "DELETE",
  });
}