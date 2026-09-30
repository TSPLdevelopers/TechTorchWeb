// India-specific helpers: INR / LPA, IST dates, Indian lists.
const TZ = "Asia/Kolkata";

export const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Number(n) || 0);

export const formatNumber = (n) => new Intl.NumberFormat("en-IN").format(Number(n) || 0);

// Compensation is stored as plain numbers; we treat them as CTC in ₹ LPA
export const formatLPA = (min, max) => {
  const a = Number(min) || 0;
  const b = Number(max) || 0;
  if (!a && !b) return "—";
  if (a && b) return `₹${a} – ₹${b} LPA`;
  return `₹${a || b} LPA`;
};

export const formatDate = (v, withTime = false) => {
  if (!v) return "—";
  const d = new Date(v);
  if (isNaN(d.getTime())) return String(v); // free-text dates stay as they are
  return d.toLocaleString("en-IN", {
    timeZone: TZ,
    day: "2-digit",
    month: "short",
    year: "numeric",
    ...(withTime ? { hour: "2-digit", minute: "2-digit", hour12: true } : {}),
  }) + (withTime ? " IST" : "");
};

// yyyy-mm-dd for <input type="date"> (in IST)
export const toDateInput = (v) => {
  if (!v) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return v;
  const d = new Date(v);
  if (isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(d);
};

export const initialsOf = (name = "") =>
  name.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

export const INDIAN_CITIES = [
  "Bengaluru", "Hyderabad", "Pune", "Mumbai", "Delhi NCR", "Gurugram", "Noida",
  "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Kochi", "Chandigarh", "Indore", "Remote (India)",
];

export const DEPARTMENTS = [
  "Engineering", "AI & Research", "Cyber Defense", "Product & Design",
  "Data & Analytics", "Cloud & DevOps", "Sales & Marketing", "HR & Talent", "Finance & Operations",
];

export const SENIORITIES = [
  "Fresher (0-1 Yrs)", "Junior (1-3 Yrs)", "Mid-Level (3-5 Yrs)",
  "Senior (5-8 Yrs)", "Principal / Staff (8+ Yrs)", "Leadership / Director",
];
