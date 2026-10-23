// Single place that decides where the API lives.
//
// Production (Vercel): always call the SAME origin ("/api/..."). vercel.json rewrites
// /api/* to the Render backend, so the login cookie becomes first-party and browsers
// (Edge/Safari/Brave Tracking Prevention) no longer block it.
// Development: VITE_API_URL, else http://localhost:5000.
const fromEnv = (import.meta.env.VITE_API_URL || "")
  .replace(/\/api\/?$/, "")
  .replace(/\/$/, "");

export const API_BASE = import.meta.env.PROD
  ? window.location.origin
  : fromEnv || "http://localhost:5000";
