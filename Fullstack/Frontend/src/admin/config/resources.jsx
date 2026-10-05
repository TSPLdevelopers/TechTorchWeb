// One entry per backend schema. Every schema field is represented here.
import { DEPARTMENTS, INDIAN_CITIES, SENIORITIES, formatDate, formatLPA, initialsOf, toDateInput, formatNumber } from "../utils/india";

const cityOptions = INDIAN_CITIES;

/* ======================= NEWS ======================= */
export const newsConfig = {
  key: "news",
  title: "News & Insights",
  singular: "article",
  searchKeys: ["title", "category", "author", "dek"],
  statusKey: "status",
  statusOptions: ["Published", "Draft"],
  columns: [
    { label: "Title", render: (r) => <div><div className="font-medium text-stone-900">{r.title}</div><div className="text-xs text-stone-400">{r.format}</div></div> },
    { label: "Category", key: "category" },
    { label: "Author", key: "author" },
    { label: "Status", status: "status" },
    { label: "Wire", key: "wireStatus" },
    { label: "Created", render: (r) => formatDate(r.createdAt) },
  ],
  defaults: {
    title: "", format: "News & Press Release", category: "", author: "", status: "Draft",
    dek: "", dateline: "", wire: "", image: "", tags: [], description: "", body: "",
    breakingSpotlight: false, mediaKitReady: false, publishTiming: "immediate", scheduledDate: "",
  },
  fields: [
    { name: "title", label: "Title", required: true, full: true },
    { name: "format", label: "Format", type: "select", required: true, options: ["News & Press Release", "Technical Article"] },
    { name: "status", label: "Status", type: "select", required: true, options: ["Draft", "Published"] },
    { name: "category", label: "Category", placeholder: "e.g. Cloud, AI, Cybersecurity" },
    { name: "author", label: "Author" },
    { name: "dek", label: "Dek (short standfirst)", full: true },
    { name: "dateline", label: "Dateline", placeholder: "e.g. Bengaluru, India" },
    { name: "wire", label: "Wire / Source" },
    { name: "image", label: "Image URL", type: "url", full: true },
    { name: "tags", label: "Tags", type: "tags", full: true },
    { name: "description", label: "Description", type: "textarea", full: true, rows: 2 },
    { name: "body", label: "Body", type: "textarea", full: true, rows: 6 },
    { name: "publishTiming", label: "Publish timing", type: "select", required: true, options: [{ value: "immediate", label: "Immediately" }, { value: "scheduled", label: "Scheduled" }] },
    { name: "scheduledDate", label: "Scheduled date", type: "date", help: "Used when timing is Scheduled (IST)" },
    { name: "breakingSpotlight", label: "Breaking spotlight", type: "checkbox" },
    { name: "mediaKitReady", label: "Media kit ready", type: "checkbox" },
  ],
  toForm: (r) => ({ ...r, scheduledDate: toDateInput(r.scheduledDate) }),
  toPayload: (f) => ({ ...f, tags: clean(f.tags) }),
};

/* ======================= JOBS ======================= */
export const jobsConfig = {
  key: "jobs",
  title: "Job Openings",
  singular: "job opening",
  searchKeys: ["title", "department", "location", "seniority"],
  statusKey: "status",
  statusOptions: ["Active / Open", "Closing Soon", "Draft / Unlisted"],
  columns: [
    { label: "Role", render: (r) => <div><div className="font-medium text-stone-900">{r.title}</div><div className="text-xs text-stone-400">{r.seniority}</div></div> },
    { label: "Department", key: "department" },
    { label: "Location", key: "location" },
    { label: "CTC", render: (r) => formatLPA(r.compMin, r.compMax) },
    { label: "Applicants", render: (r) => formatNumber(r.applicants) },
    { label: "Status", status: "status" },
    { label: "Posted", render: (r) => formatDate(r.posted) },
  ],
  defaults: {
    title: "", format: "Full-Time Enterprise Requisition", department: DEPARTMENTS[0], location: cityOptions[0],
    seniority: SENIORITIES[3], pitch: "", compMin: 0, compMax: 0,
    hiringManager: { name: "", title: "", initials: "" }, recruiter: { name: "", title: "", initials: "" },
    urgency: "immediate", tags: [], checks: [true, true, true], syndication: [true, true, true],
    status: "Draft / Unlisted", applicants: 0, sub: "Awaiting Review", posted: "", draft: true, costCenter: "",
  },
  fields: [
    { name: "title", label: "Job title", required: true, full: true },
    { name: "format", label: "Employment format", type: "select", required: true, options: ["Full-Time Enterprise Requisition", "Contract", "Internship", "Part-Time"] },
    { name: "status", label: "Status", type: "select", required: true, options: ["Draft / Unlisted", "Active / Open", "Closing Soon"] },
    { name: "department", label: "Department", type: "select", required: true, options: DEPARTMENTS },
    { name: "location", label: "Location", type: "select", required: true, options: cityOptions },
    { name: "seniority", label: "Seniority", type: "select", required: true, options: SENIORITIES },
    { name: "urgency", label: "Hiring urgency", type: "select", required: true, options: [{ value: "immediate", label: "Immediate" }, { value: "next-q", label: "Next quarter" }, { value: "evergreen", label: "Evergreen" }] },
    { name: "compMin", label: "Minimum CTC (₹ LPA)", type: "number" },
    { name: "compMax", label: "Maximum CTC (₹ LPA)", type: "number" },
    { name: "costCenter", label: "Cost centre" },
    { name: "applicants", label: "Applicants", type: "number" },
    { name: "sub", label: "Review note", placeholder: "e.g. Awaiting Review" },
    { name: "posted", label: "Posted date", type: "date" },
    { name: "draft", label: "Keep as draft", type: "checkbox" },
    { name: "pitch", label: "Role pitch / description", type: "textarea", full: true, rows: 5 },
    { name: "tags", label: "Skill tags", type: "tags", full: true },
    { name: "hiringManager.name", label: "Hiring manager" },
    { name: "hiringManager.title", label: "Hiring manager title" },
    { name: "recruiter.name", label: "Recruiter" },
    { name: "recruiter.title", label: "Recruiter title" },
    { name: "checks", label: "Screening filters", type: "boolArray", labels: ["Minimum experience met", "Background verification (BGV) cleared", "Notice period within 60 days"] },
    { name: "syndication", label: "Syndication channels", type: "boolArray", labels: ["LinkedIn Recruiter", "TechTorch Careers Portal", "Naukri & Indeed India"] },
  ],
  toForm: (r) => ({
    ...r,
    posted: toDateInput(r.posted),
    hiringManager: { name: "", title: "", initials: "", ...(r.hiringManager || {}) },
    recruiter: { name: "", title: "", initials: "", ...(r.recruiter || {}) },
  }),
  toPayload: (f) => ({
    ...f,
    tags: clean(f.tags),
    compMin: Number(f.compMin) || 0,
    compMax: Number(f.compMax) || 0,
    applicants: Number(f.applicants) || 0,
    posted: f.posted || undefined,
    hiringManager: { ...f.hiringManager, initials: initialsOf(f.hiringManager?.name) },
    recruiter: { ...f.recruiter, initials: initialsOf(f.recruiter?.name) },
  }),
};

/* ======================= EVENTS ======================= */
export const eventsConfig = {
  key: "events",
  title: "Enterprise Events",
  singular: "event",
  searchKeys: ["title", "summary", "location", "tag"],
  statusKey: "status",
  statusOptions: ["upcoming", "past", "draft"],
  columns: [
    { label: "Event", render: (r) => <div><div className="font-medium text-stone-900">{r.title}</div><div className="text-xs text-stone-400">{r.summary}</div></div> },
    { label: "Tag", key: "tag" },
    { label: "Date", render: (r) => <>{formatDate(r.date)}{r.time ? <div className="text-xs text-stone-400">{r.time} IST</div> : null}</> },
    { label: "Location", key: "location" },
    { label: "Status", status: "status" },
  ],
  defaults: { title: "", summary: "", description: "", tag: "", status: "draft", image: "", date: "", time: "", location: "", link: "" },
  fields: [
    { name: "title", label: "Event title", required: true, full: true },
    { name: "summary", label: "Summary", full: true },
    { name: "tag", label: "Tag", placeholder: "e.g. Summit, Webinar" },
    { name: "status", label: "Status", type: "select", required: true, options: ["draft", "upcoming", "past"] },
    { name: "date", label: "Date", type: "date" },
    { name: "time", label: "Time (IST)", type: "time" },
    { name: "location", label: "Location", placeholder: "e.g. Bengaluru International Centre / Online", full: true },
    { name: "link", label: "Registration link", type: "url", full: true },
    { name: "image", label: "Image URL", type: "url", full: true },
    { name: "description", label: "Description", type: "textarea", full: true, rows: 5 },
  ],
  toForm: (r) => ({ ...r, date: toDateInput(r.date) }),
  toPayload: (f) => f,
};

/* ======================= WHITEPAPERS ======================= */
export const whitepapersConfig = {
  key: "whitepapers",
  title: "Whitepapers & Case Studies",
  singular: "whitepaper",
  searchKeys: ["title", "domain", "architects", "abstract"],
  statusKey: "status",
  statusOptions: ["published", "draft"],
  columns: [
    { label: "Title", render: (r) => <div><div className="font-medium text-stone-900">{r.title}</div><div className="text-xs text-stone-400">{r.architects}</div></div> },
    { label: "Domain", key: "domain" },
    { label: "Access", key: "gating" },
    { label: "Downloads", render: (r) => formatNumber(r.downloads) },
    { label: "Lead conv.", key: "leadConversion" },
    { label: "Status", status: "status" },
  ],
  defaults: {
    title: "", domain: "", architects: "", abstract: "", bullets: [], gating: "gated", fileName: "", fileSize: "",
    fileUrl: "", status: "draft", published: "", downloads: 0, leadConversion: "0%", avgReadTime: "0m",
  },
  fields: [
    { name: "title", label: "Title", required: true, full: true },
    { name: "domain", label: "Domain", required: true, placeholder: "e.g. Cloud Security" },
    { name: "architects", label: "Authors / Architects", required: true },
    { name: "abstract", label: "Abstract", required: true, type: "textarea", full: true, rows: 4 },
    { name: "bullets", label: "Key takeaways (one per line)", type: "lines", full: true, rows: 4 },
    { name: "gating", label: "Access", type: "select", required: true, options: [{ value: "gated", label: "Gated (lead form)" }, { value: "open", label: "Open" }] },
    { name: "status", label: "Status", type: "select", required: true, options: ["draft", "published"] },
    { name: "fileName", label: "File name" },
    { name: "fileSize", label: "File size", placeholder: "e.g. 2.4 MB" },
    { name: "fileUrl", label: "File URL", type: "url", full: true },
    { name: "published", label: "Published date", type: "date" },
    { name: "downloads", label: "Downloads", type: "number" },
    { name: "leadConversion", label: "Lead conversion", placeholder: "e.g. 12%" },
    { name: "avgReadTime", label: "Avg. read time", placeholder: "e.g. 8m" },
  ],
  toForm: (r) => ({ ...r, published: toDateInput(r.published) }),
  toPayload: (f) => ({ ...f, bullets: (f.bullets || []).map((s) => s.trim()).filter(Boolean), downloads: Number(f.downloads) || 0 }),
};

/* ======================= LATEST UPDATES ======================= */
export const updatesConfig = {
  key: "updates",
  title: "Latest Updates",
  singular: "update",
  searchKeys: ["title", "description", "author", "category"],
  statusKey: "status",
  statusOptions: ["published", "draft"],
  columns: [
    { label: "Title", render: (r) => <div><div className="font-medium text-stone-900">{r.title}</div><div className="line-clamp-1 text-xs text-stone-400">{r.description}</div></div> },
    { label: "Category", key: "category" },
    { label: "Author", key: "author" },
    { label: "Status", status: "status" },
    { label: "Published", render: (r) => formatDate(r.publishedAt) },
  ],
  defaults: { title: "", description: "", category: "update", image: "", link: "", author: "TechTorch", status: "published", publishedAt: "" },
  fields: [
    { name: "title", label: "Title", required: true, full: true },
    { name: "description", label: "Description", required: true, type: "textarea", full: true, rows: 4 },
    { name: "category", label: "Category", type: "select", required: true, options: ["update", "news", "announcement", "whitepaper"] },
    { name: "status", label: "Status", type: "select", required: true, options: ["published", "draft"] },
    { name: "author", label: "Author" },
    { name: "publishedAt", label: "Publish date", type: "date" },
    { name: "link", label: "Link", type: "url", full: true },
    { name: "image", label: "Image URL", type: "url", full: true },
  ],
  toForm: (r) => ({ ...r, publishedAt: toDateInput(r.publishedAt) }),
  toPayload: (f) => ({ ...f, publishedAt: f.publishedAt || undefined }),
};

function clean(arr) {
  return (arr || []).map((s) => s.trim()).filter(Boolean);
}

export const RESOURCES = [newsConfig, jobsConfig, eventsConfig, whitepapersConfig, updatesConfig];
