import { useCallback, useEffect, useState } from "react";

import {
  getAdminDashboardData,
} from "../api/adminDashboardApi";

function normalizeNews(items) {
  return items.map((item, index) => ({
    id: item._id || item.id || `news-${index}`,
    status: item.status || "Draft",
    title: item.title || "—",
    domain: item.category || "—",
    author: item.author || "—",
    description: item.description || "",
    image: item.image || "",
  }));
}

function normalizeJobs(items) {
  return items.map((item, index) => ({
    id: item._id || item.id || `job-${index}`,
    status: item.status || "Active",
    title: item.title || "—",
    department: item.department || "—",
    location: item.location || "—",
    applicants: item.applicants ?? 0,
    description: item.description || "",
    expiryDate: item.expiryDate || "",
    links: item.links || [],
  }));
}

function normalizeEvents(items) {
  return items.map((item, index) => ({
    id: item._id || item.id || `event-${index}`,
    status: item.activeCount > 0 ? "Upcoming" : "Draft",
    name: item.title || "—",
    date: item.date || "—",
    location: item.location || "—",
    registrants: item.activeCount ?? 0,
    description: item.description || "",
    image: item.image || "",
  }));
}

function normalizeWhitepapers(items) {
  return items.map((item, index) => ({
    id: item._id || item.id || `wp-${index}`,
    status: "Published",
    title: item.title || "—",
    category: item.category || "—",
    downloads: item.downloads ?? 0,
    author: item.author || "—",
    description: item.description || "",
    publishDate: item.publishDate || "",
  }));
}

export default function useAdminDashboard() {
  const [news, setNews] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [events, setEvents] = useState([]);
  const [whitepapers, setWhitepapers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboardData = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getAdminDashboardData();

      setNews(normalizeNews(data.news));
      setJobs(normalizeJobs(data.jobs));
      setEvents(normalizeEvents(data.events));
      setWhitepapers(normalizeWhitepapers(data.whitepapers));
    } catch (err) {
      console.error("Admin Dashboard API Error:", err);

      setError(
        err.message || "Failed to load dashboard data."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return {
    news,
    jobs,
    events,
    whitepapers,
    loading,
    error,
    refetch: fetchDashboardData,
  };
}