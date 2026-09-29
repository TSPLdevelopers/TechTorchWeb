import AdminSidebar from "../components/AdminSidebar.jsx";
import {
  createNews,
  createJobOpening,
  createEvent,
  createWhitepaper,
} from "../api/adminDashboardApi";
import { useEffect, useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";
import {  Newspaper,
  Briefcase,
  CalendarDays,
  FolderOpen,
  Search,
  Bell,
  ShieldCheck,
  Plus,
  TrendingUp,
  Users,
  Ticket,
  Gauge,
  Filter,
  ChevronDown,
  FileEdit,
  Trash2,
  Video,
  FileArchive,
  ChevronLeft,
  ChevronRight,
  Shield,
  Network,
  Timer,
  X,
  Menu,
} from "lucide-react";
import {
  getNews,
  getJobs,
  getEvents,
  getWhitepapers,
} from "../api/adminDashboardApi";

/* -------------------------------------------------------------------------- */
/* Static / mock data                                                          */
/* -------------------------------------------------------------------------- */


const HERO_METRICS = [
  { icon: Newspaper, value: "28", label: "Insights & News", path: "/News-Insights" },
  { icon: Briefcase, value: "14", label: "Active Jobs", path: "/job-openings" },
  { icon: CalendarDays, value: "6", label: "Events", path: "/events" },
  { icon: FolderOpen, value: "9", label: "Whitepapers", path: "/latest-updates" },
];

const STAT_CARDS = [
  {
    icon: TrendingUp,
    label: "TOTAL ENGAGEMENT",
    value: "4.2K",
    deltaValue: "+14.8%",
    deltaPositive: true,
    footNote: "vs. prior cycle",
    dot: false,
  },
  {
    icon: Users,
    label: "ACTIVE APPLICANTS",
    value: "642",
    deltaValue: "+22.4%",
    deltaPositive: true,
    footNote: "Across 14 positions",
    dot: false,
  },
  {
    icon: Ticket,
    label: "EVENT REGISTRANTS",
    value: "1,890",
    deltaValue: "89%",
    deltaPositive: true,
    footNote: "3 summits filling",
    dot: true,
    deltaLabel: "Capacity",
  },
  {
    icon: Gauge,
    label: "ASSET CDN LATENCY",
    value: "19ms",
    deltaValue: "99.98%",
    deltaPositive: true,
    footNote: "14 Edge Nodes",
    dot: true,
    deltaLabel: "Uptime",
  },
];

const TABS = ["News & Insights", "Job Openings", "Enterprise Events", "Whitepapers"];



/* -------------------------------------------------------------------------- */
/* Publishing Directory — data layer                                          */
/*                                                                            */
/* API-backed dashboard data is loaded in AdminDashboard below.                */
/* The localStorage helpers remain only for legacy UI compatibility.           */
/* -------------------------------------------------------------------------- */

const STORAGE_KEYS = {
  news: "ttad_news_records",
  jobs: "ttad_job_records",
  events: "ttad_event_records",
  whitepapers: "ttad_whitepaper_records",
};



const JOBS_SEED = [
  { id: "job-1", status: "Active", title: "Senior DevOps Engineer", department: "Cloud Platform", location: "Remote", applicants: 84 },
  { id: "job-2", status: "Active", title: "Enterprise Account Executive", department: "Sales", location: "New York, NY", applicants: 47 },
  { id: "job-3", status: "Closed", title: "Cyber Defense Analyst", department: "Cyber Defense", location: "Austin, TX", applicants: 112 },
  { id: "job-4", status: "Draft", title: "Staff Data Platform Engineer", department: "Systems Arch", location: "Remote", applicants: 0 },
];

const EVENTS_SEED = [
  { id: "event-1", status: "Upcoming", name: "Cloud Resilience Summit", date: "Nov 14, 2024", location: "San Francisco, CA", registrants: 420 },
  { id: "event-2", status: "Upcoming", name: "Zero-Trust Security Forum", date: "Dec 02, 2024", location: "Virtual", registrants: 890 },
  { id: "event-3", status: "Completed", name: "Enterprise HCM Roadshow", date: "Sep 18, 2024", location: "Chicago, IL", registrants: 310 },
  { id: "event-4", status: "Draft", name: "Systems Architecture Deep Dive", date: "TBD", location: "Virtual", registrants: 0 },
];

const WHITEPAPERS_SEED = [
  { id: "wp-1", status: "Published", title: "The Enterprise Guide to Zero-Trust Kubernetes", category: "Cyber Defense", downloads: 1240, author: "Evelyn Vance" },
  { id: "wp-2", status: "Published", title: "Scaling Vector Search for RAG Pipelines", category: "Cloud Platform", downloads: 980, author: "Dr. Aris Thorne" },
  { id: "wp-3", status: "Draft", title: "Workforce Analytics Benchmark Report 2024", category: "Enterprise HCM", downloads: 0, author: "Marcus Liu" },
  { id: "wp-4", status: "Scheduled", title: "Legacy Modernization Case Study: FinServ", category: "Systems Arch", downloads: 0, author: "Sarah Jenkins" },
];

const TAB_CONFIG = [
  {
    key: "news",
    storageKey: STORAGE_KEYS.news,
    seed: [],
    titleField: "title",
    domainField: "domain",
    fixedDomainOptions: ["All Domains", "Cloud Platform", "Cyber Defense", "Enterprise HCM", "Systems Arch"],
    newEntryPath: "/News-Insights",
    entryLabel: "News & Insights Article",
    draftStatus: "Draft",
    publishStatus: "Published",
    publishLabel: "Publish Article",
    columns: [
      { key: "status", label: "STATUS" },
      { key: "title", label: "ARTICLE TITLE" },
      { key: "domain", label: "DOMAIN" },
      { key: "author", label: "AUTHOR" },
    ],
    // Fields mirror the real "Publish Article / News & Insights" page
    // (Publication Format, Author, Publish Date, Tags & Taxonomy, etc.)
    formFields: [
      {
        key: "format",
        label: "Publication Format",
        type: "select",
        required: true,
        options: ["Technical Article", "News & Press Release"],
        default: "News & Press Release",
      },
      {
        key: "title",
        label: "Headline / Title",
        type: "text",
        required: true,
        placeholder: "e.g. Engineering the Shift to Autonomous Enterprise Architecture",
      },
      {
        key: "dek",
        label: "Subtitle / Dek",
        type: "textarea",
        rows: 2,
        placeholder: "One-sentence summary shown under the headline",
      },
      {
        key: "domain",
        label: "Category / Domain",
        type: "select",
        required: true,
        options: ["Cloud Platform", "Cyber Defense", "Enterprise HCM", "Systems Arch"],
      },
      {
        key: "author",
        label: "Author",
        type: "text",
        required: true,
        placeholder: "e.g. Dr. Aris Thorne",
      },
      {
        key: "dateline",
        label: "Dateline / Location",
        type: "text",
        placeholder: "e.g. SAN FRANCISCO, CA",
      },
      {
        key: "wire",
        label: "Wire Distribution",
        type: "text",
        placeholder: "e.g. Global Tech Wire + Investor Feed",
      },
      {
        key: "tags",
        label: "Tags & Taxonomy",
        type: "tags",
        placeholder: "Comma-separated, e.g. Enterprise AI, Cloud Architecture",
      },
      { key: "breakingSpotlight", label: "Breaking Spotlight", type: "checkbox", default: true },
      { key: "mediaKitReady", label: "Media Kit Ready", type: "checkbox", default: true },
      {
        key: "body",
        label: "Article Body",
        type: "textarea",
        rows: 5,
        required: true,
        placeholder: "Full article content...",
      },
      {
        key: "publishTiming",
        label: "Publish Date",
        type: "radio",
        required: true,
        options: ["Publish Immediately", "Schedule for later release"],
        default: "Publish Immediately",
      },
      {
        key: "scheduledDate",
        label: "Scheduled Date",
        type: "date",
        showIf: (v) => v.publishTiming === "Schedule for later release",
      },
    ],
    buildRecord: (v, status) => ({
      id: `news-${Date.now()}`,
      status,
      title: v.title.trim(),
      domain: v.domain,
      author: v.author.trim(),
      format: v.format,
      dek: v.dek,
      dateline: v.dateline,
      wire: v.wire,
      tags: v.tags,
      breakingSpotlight: v.breakingSpotlight,
      mediaKitReady: v.mediaKitReady,
      body: v.body,
      publishTiming: v.publishTiming,
      scheduledDate: v.scheduledDate || "",
    }),
  },
  {
    key: "jobs",
    storageKey: STORAGE_KEYS.jobs,
    seed: JOBS_SEED,
    titleField: "title",
    domainField: "department",
    fixedDomainOptions: null,
    newEntryPath: "/job-openings",
    entryLabel: "Job Opening",
    draftStatus: "Draft",
    publishStatus: "Active",
    publishLabel: "Publish Job Opening",
    columns: [
      { key: "status", label: "STATUS" },
      { key: "title", label: "JOB TITLE" },
      { key: "department", label: "DEPARTMENT" },
      { key: "location", label: "LOCATION" },
      { key: "applicants", label: "APPLICANTS" },
    ],
    // Fields mirror the real "Post Job / Job Openings" page
    // (Requisition Format, Department, Location, Compensation Band, etc.)
    formFields: [
      {
        key: "format",
        label: "Requisition Format",
        type: "select",
        required: true,
        options: ["Full-Time Enterprise Requisition", "Contract / Advisory Specialist", "Campus & Leadership Fellow"],
        default: "Full-Time Enterprise Requisition",
      },
      {
        key: "title",
        label: "Official Requisition Title",
        type: "text",
        required: true,
        placeholder: "e.g. Principal Enterprise AI Solutions Architect",
      },
      { key: "department", label: "Department", type: "text", required: true, placeholder: "e.g. Cloud & AI Engineering" },
      { key: "location", label: "Location & Arrangement", type: "text", required: true, placeholder: "e.g. San Francisco, CA (Hybrid)" },
      { key: "seniority", label: "Seniority Level", type: "text", placeholder: "e.g. Principal / Staff (8+ Yrs)" },
      {
        key: "pitch",
        label: "Executive Value Proposition & Pitch",
        type: "textarea",
        rows: 2,
        required: true,
        placeholder: "Short pitch for the role",
      },
      {
        key: "description",
        label: "Role, Responsibilities & Qualifications",
        type: "textarea",
        rows: 5,
        required: true,
        placeholder: "About the role, key responsibilities, required qualifications...",
      },
      { key: "compMin", label: "Compensation Band — Min (USD)", type: "number", placeholder: "e.g. 210000" },
      { key: "compMax", label: "Compensation Band — Max (USD)", type: "number", placeholder: "e.g. 265000" },
      { key: "hiringManager", label: "Hiring Manager", type: "text", placeholder: "e.g. Marcus Liu" },
      { key: "recruiter", label: "Lead Technical Recruiter", type: "text", placeholder: "e.g. Elena Vance" },
      { key: "costCenter", label: "Cost Center & Entity", type: "text", placeholder: "e.g. Engineering Services" },
      {
        key: "urgency",
        label: "Hiring Urgency",
        type: "radio",
        required: true,
        options: ["Immediate Priority (30 Days)", "Next Fiscal Quarter (Q1 2025)", "Continuous Talent Pool / Evergreen"],
        default: "Immediate Priority (30 Days)",
      },
      { key: "tags", label: "Skill Tags", type: "tags", placeholder: "Comma-separated, e.g. Agentic AI, Kubernetes" },
      {
        key: "screening",
        label: "Screening Filters",
        type: "checkbox-group",
        options: [
          "Require 5+ Yrs Cloud Architecture",
          "Standard Enterprise Clearance",
          "Work Authorization Verified",
        ],
        default: true,
      },
      {
        key: "syndication",
        label: "Syndication Channels",
        type: "checkbox-group",
        options: ["LinkedIn Recruiter Sync", "TechTorch Careers Portal", "Glassdoor & Indeed Enterprise"],
        default: true,
      },
    ],
    buildRecord: (v, status) => ({
      id: `job-${Date.now()}`,
      status,
      title: v.title.trim(),
      department: v.department.trim(),
      location: v.location.trim(),
      applicants: 0,
      format: v.format,
      seniority: v.seniority,
      pitch: v.pitch,
      description: v.description,
      compMin: v.compMin,
      compMax: v.compMax,
      hiringManager: v.hiringManager,
      recruiter: v.recruiter,
      costCenter: v.costCenter,
      urgency: v.urgency,
      tags: v.tags,
      screening: v.screening,
      syndication: v.syndication,
    }),
  },
  {
    key: "events",
    storageKey: STORAGE_KEYS.events,
    seed: EVENTS_SEED,
    titleField: "name",
    domainField: "location",
    fixedDomainOptions: null,
    newEntryPath: "/events",
    entryLabel: "Enterprise Event",
    draftStatus: "Draft",
    publishStatus: "Upcoming",
    publishLabel: "Launch Event Hub",
    columns: [
      { key: "status", label: "STATUS" },
      { key: "name", label: "EVENT NAME" },
      { key: "date", label: "DATE" },
      { key: "location", label: "LOCATION" },
      { key: "registrants", label: "REGISTRANTS" },
    ],
    // Fields mirror the real "Enterprise Events / Add Event" page
    // (Event Title, Date Timeline, Venue, Format, Capacity Tiers, etc.)
    formFields: [
      {
        key: "name",
        label: "Event Title & Primary Anchor",
        type: "text",
        required: true,
        placeholder: "e.g. Global Enterprise AI & Autonomous Systems Summit",
      },
      { key: "date", label: "Date Timeline", type: "text", required: true, placeholder: "e.g. November 14 – 16, 2026" },
      { key: "sessionTiming", label: "Session Timing & Timezone", type: "text", placeholder: "e.g. 09:00 AM – 05:30 PM PST (UTC-8)" },
      { key: "location", label: "Physical Venue / Campus", type: "text", required: true, placeholder: "e.g. TechTorch Innovation Center, San Francisco, CA" },
      {
        key: "formatType",
        label: "Event Format & Delivery",
        type: "select",
        required: true,
        options: ["Hybrid", "In-Person", "Virtual"],
        default: "Hybrid",
      },
      { key: "capacityInternal", label: "Capacity — Internal Teams / Engineers", type: "number", placeholder: "e.g. 150" },
      { key: "capacityEnterprise", label: "Capacity — Enterprise Clients", type: "number", placeholder: "e.g. 350" },
      { key: "capacityVirtual", label: "Capacity — Virtual Broadcasters", type: "number", placeholder: "e.g. 250" },
      {
        key: "description",
        label: "Event Description",
        type: "textarea",
        rows: 4,
        required: true,
        placeholder: "What the event covers, who it's for...",
      },
    ],
    buildRecord: (v, status) => ({
      id: `event-${Date.now()}`,
      status,
      name: v.name.trim(),
      date: v.date.trim(),
      location: v.location.trim(),
      registrants: 0,
      sessionTiming: v.sessionTiming,
      formatType: v.formatType,
      capacityInternal: v.capacityInternal,
      capacityEnterprise: v.capacityEnterprise,
      capacityVirtual: v.capacityVirtual,
      description: v.description,
    }),
  },
  {
    key: "whitepapers",
    storageKey: STORAGE_KEYS.whitepapers,
    seed: WHITEPAPERS_SEED,
    titleField: "title",
    domainField: "category",
    fixedDomainOptions: null,
    newEntryPath: "/latest-updates",
    entryLabel: "Whitepaper / Case Study",
    draftStatus: "Draft",
    publishStatus: "Published",
    publishLabel: "Publish Latest Update",
    columns: [
      { key: "status", label: "STATUS" },
      { key: "title", label: "TITLE" },
      { key: "category", label: "CATEGORY" },
      { key: "downloads", label: "DOWNLOADS" },
      { key: "author", label: "AUTHOR" },
    ],
    // Fields mirror the real "Whitepapers / Latest Update" page
    // (Document Title, Domain/Technology Pillar, Research Architect(s), Gating, etc.)
    formFields: [
      {
        key: "title",
        label: "Document Title",
        type: "text",
        required: true,
        placeholder: "e.g. Q2 2026 Strategic Advisory: Autonomous Systems & Next-Gen Enterprise AI Fabric",
        hint: "Max 120 characters",
      },
      {
        key: "category",
        label: "Domain / Technology Pillar",
        type: "text",
        required: true,
        placeholder: "e.g. Autonomous Intelligence & Cloud Modernization",
      },
      {
        key: "author",
        label: "Primary Research Architect(s)",
        type: "text",
        required: true,
        placeholder: "e.g. Dr. Aris Thorne & TechTorch Enterprise Architecture Group",
      },
      {
        key: "abstract",
        label: "Executive Summary / Abstract",
        type: "textarea",
        rows: 4,
        required: true,
        placeholder: "Editorial abstract for executive syndication",
      },
      {
        key: "takeaways",
        label: "Key Takeaways & Executive Highlights",
        type: "textarea",
        rows: 3,
        placeholder: "One takeaway per line",
      },
      {
        key: "gating",
        label: "Access & Lead Generation Gating",
        type: "radio",
        required: true,
        options: ["Gated Release", "Open Access (Public)"],
        default: "Gated Release",
      },
    ],
    buildRecord: (v, status) => ({
      id: `wp-${Date.now()}`,
      status,
      title: v.title.trim(),
      category: v.category.trim(),
      downloads: 0,
      author: v.author.trim(),
      abstract: v.abstract,
      takeaways: v.takeaways,
      gating: v.gating,
    }),
  },
];

const ROWS_PER_PAGE = 2;

function loadTabRecords(config) {
  if (typeof window === "undefined") return config.seed;
  try {
    const raw = window.localStorage.getItem(config.storageKey);
    if (!raw) {
      window.localStorage.setItem(config.storageKey, JSON.stringify(config.seed));
      return config.seed;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : config.seed;
  } catch {
    return config.seed;
  }
}

function useTabRecords(activeTab) {
  const config = TAB_CONFIG[activeTab];
  const [records, setRecords] = useState(() => loadTabRecords(config));

  useEffect(() => {
    setRecords(loadTabRecords(config));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  useEffect(() => {
    const refresh = () => setRecords(loadTabRecords(config));
    const onStorage = (e) => {
      if (!e.key || e.key === config.storageKey) refresh();
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("ttad:data-updated", refresh);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("ttad:data-updated", refresh);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return records;
}

function saveNewRecord(config, record) {
  const existing = loadTabRecords(config);
  const updated = [record, ...existing];
  window.localStorage.setItem(config.storageKey, JSON.stringify(updated));
  window.dispatchEvent(new Event("ttad:data-updated"));
}

function getDefaultFormValues(config) {
  const values = {};
  config.formFields.forEach((f) => {
    if (f.type === "checkbox") {
      values[f.key] = f.default ?? false;
    } else if (f.type === "checkbox-group") {
      const group = {};
      f.options.forEach((opt) => {
        group[opt] = f.default ?? false;
      });
      values[f.key] = group;
    } else if (f.type === "tags") {
      values[f.key] = [];
    } else if (f.type === "select" && f.default === undefined) {
      // Keep initial state in sync with what the browser visually shows
      // (the first <option>) so an untouched select never reads as "empty".
      values[f.key] = f.options && f.options.length ? f.options[0] : "";
    } else {
      values[f.key] = f.default ?? "";
    }
  });
  return values;
}

const ACTIVITY = [
  {
    icon: FileEdit,
    tone: "pink",
    title: "Sarah Jenkins published article",
    meta: "Editorial Desk · 14m ago",
  },
  {
    icon: Trash2,
    tone: "red",
    title: "Admin deleted Senior DevOps position",
    meta: "Recruitment Ops · 1h ago",
  },
  {
    icon: Video,
    tone: "blue",
    title: "Webinar registered: Cyber Resilience",
    meta: "Events Team · 3h ago",
  },
  {
    icon: FileArchive,
    tone: "purple",
    title: "Whitepaper CDN Cache Invalidated",
    meta: "Edge Cluster · 5h ago",
  },
];

const EDGE_NODES = [
  { name: "Frankfurt (eu-central-1)", value: "99.99%" },
  { name: "Virginia (us-east-1)", value: "99.98%" },
  { name: "Singapore (ap-southeast-1)", value: "100.0%" },
];

const TREND_WEEKS = [
  { label: "Week 1", value: 32 },
  { label: "Week 2", value: 46 },
  { label: "Week 3", value: 40 },
  { label: "Week 4 (Peak)", value: 100 },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [news, setNews] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [events, setEvents] = useState([]);
  const [whitepapers, setWhitepapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [domain, setDomain] = useState("All Domains");
  const [domainOpen, setDomainOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    loadAllDashboardData();
  }, []);

  // Drawer khula ho to page scroll lock, desktop par aate hi drawer band
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => {
      if (e.matches) setSidebarOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = "";
      mq.removeEventListener("change", onChange);
    };
  }, [sidebarOpen]);

  async function loadAllDashboardData() {
    try {
      setLoading(true);
      setError(null);

      const [newsData, jobsData, eventsData, whitepaperData] = await Promise.all([
        getNews(),
        getJobs(),
        getEvents(),
        getWhitepapers(),
      ]);

      const mappedNews = (Array.isArray(newsData) ? newsData : []).map((item) => ({
        ...item,
        id: item._id || item.id,
        status: item.status
          ? String(item.status).charAt(0).toUpperCase() + String(item.status).slice(1)
          : "Published",
        title: item.title || item.headline || "",
        domain: item.domain || item.category || "",
        author: item.author || "",
      }));

      const mappedJobs = (Array.isArray(jobsData) ? jobsData : []).map((item) => ({
        ...item,
        id: item._id || item.id,
        status: item.status
          ? String(item.status).charAt(0).toUpperCase() + String(item.status).slice(1)
          : "Active",
        title: item.title || item.jobTitle || item.name || "",
        department: item.department || item.category || "",
        location: item.location || item.venue || "",
        applicants: Number(item.applicants || item.applicationCount || 0),
      }));

      const mappedEvents = (Array.isArray(eventsData) ? eventsData : []).map((item) => ({
        ...item,
        id: item._id || item.id,
        status:
          item.status === "upcoming"
            ? "Upcoming"
            : item.status === "past"
              ? "Completed"
              : item.status
                ? String(item.status).charAt(0).toUpperCase() + String(item.status).slice(1)
                : "Upcoming",
        name: item.name || item.title || "",
        date: item.date || item.dateRange || "TBD",
        location: item.location || item.venue || "TBD",
        registrants: Number(item.registered || item.registrants || 0),
      }));

      const mappedWhitepapers = (Array.isArray(whitepaperData) ? whitepaperData : []).map((item) => ({
        ...item,
        id: item._id || item.id,
        status:
          item.status === "draft"
            ? "Draft"
            : item.status === "published"
              ? "Published"
              : item.status
                ? String(item.status).charAt(0).toUpperCase() + String(item.status).slice(1)
                : "Published",
        title: item.title || "",
        category: item.category || item.domain || "",
        downloads: Number(item.downloads || 0),
        author: item.author || item.architects || "",
      }));

      setNews(mappedNews);
      setJobs(mappedJobs);
      setEvents(mappedEvents);
      setWhitepapers(mappedWhitepapers);
    } catch (err) {
      console.error("Dashboard APIs Error:", err);
      setError(err.message || "Failed to load dashboard data");
      setNews([]);
      setJobs([]);
      setEvents([]);
      setWhitepapers([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="ttad-root">
      <StyleBlock />

      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Tablet / mobile overlay */}
      {sidebarOpen && (
        <div
          className="ttad-sb-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="ttad-main">
        <TopNavbar
          search={search}
          setSearch={setSearch}
          onMenu={() => setSidebarOpen(true)}
        />

        <div className="ttad-content">
          <Hero
  navigate={navigate}
  newsCount={news.length}
  jobsCount={jobs.length}
  eventsCount={events.length}
  whitepapersCount={whitepapers.length}
/>

          <div className="ttad-stats-grid">
            {STAT_CARDS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          <div className="ttad-body-grid">
            <div className="ttad-left-col">
              <PublishingDirectory
                activeTab={activeTab}
                  recordsByTab={[news, jobs, events, whitepapers]}
                setActiveTab={setActiveTab}
                page={page}
                setPage={setPage}
                search={search}
                filter={filter}
                setFilter={setFilter}
                domain={domain}
                setDomain={setDomain}
                domainOpen={domainOpen}
                setDomainOpen={setDomainOpen}
                navigate={navigate}
              />

              <div className="ttad-bottom-grid">
                <EditorialTrend />
                <FrankfurtCore />
              </div>
            </div>

            <div className="ttad-right-col">
              <AuditOperations />
              <SecurityProtocol />
              <EdgeClusterHealth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Top navbar                                                                  */
/* -------------------------------------------------------------------------- */

function TopNavbar({ search, setSearch, onMenu }) {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="ttad-topbar">

      {/* MOBILE / TABLET — SIDEBAR MENU BUTTON */}
      <button
        type="button"
        className="ttad-menu-btn"
        onClick={onMenu}
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {/* LEFT — SEARCH */}
      <div className="ttad-search">
        <Search size={16} className="ttad-search-icon" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search records, editorial articles, applicants, telemetry..."
        />
      </div>

      {/* RIGHT */}
      <div className="ttad-topbar-right">

        {/* Production Status */}
        <div className="ttad-status-pill">
          <span className="ttad-status-dot" />
          Production Gateway Live
        </div>

        {/* Notification */}
        <div className="ttad-notif-wrap">
          <button
            className="ttad-icon-btn"
            aria-label="Notifications"
            onClick={() => setNotifOpen((o) => !o)}
          >
            <Bell size={18} />
            <span className="ttad-icon-dot" />
          </button>

          {notifOpen && (
            <div className="ttad-notif-panel">
              <div className="ttad-notif-panel-head">Notifications</div>
              <div className="ttad-notif-panel-list">
                {ACTIVITY.map((a) => {
                  const Icon = a.icon;
                  return (
                    <div className="ttad-notif-panel-item" key={a.title}>
                      <span className={"ttad-activity-icon " + a.tone}>
                        <Icon size={13} />
                      </span>
                      <div>
                        <div className="ttad-notif-panel-item-title">{a.title}</div>
                        <div className="ttad-notif-panel-item-meta">{a.meta}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="ttad-profile">

          <div className="ttad-profile-text">
            <div className="ttad-profile-name">
              Super Admin
            </div>

            <div className="ttad-profile-role">
              Editorial Lead
            </div>
          </div>

          {/* TechTorch Favicon */}
          <div className="ttad-avatar">
  <img
    src="/Tech-Torch2.png"
    alt="TechTorch"
    className="techtorch-avatar"
  />
</div>
        </div>

      </div>

    </header>
  );
}
/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */
function Hero({ navigate,newsCount,jobsCount,eventsCount,whitepapersCount   }) {
  return (
    <section className="ttad-hero">
      <div className="ttad-hero-glow" />

      <div className="ttad-hero-top">
        <div className="ttad-hero-badge">
          <span className="ttad-hero-badge-dot" />
          TECHTORCH ENTERPRISE CORE V4.2
        </div>

        <div className="ttad-hero-meta">
          <ShieldCheck size={14} />
          Cluster: US-East-01 &nbsp;•&nbsp; Zero Anomalies &nbsp;•&nbsp; 99.99% CDN Sync
        </div>
      </div>

      {/* BUTTONS */}
      <div className="ttad-hero-actions">
        <button className="ttad-hero-btn primary" onClick={() => navigate("/News-Insights")}>
          <Plus size={15} /> Publish Article
        </button>

        <button className="ttad-hero-btn" onClick={() => navigate("/job-openings")}>
          <Plus size={15} /> Post Job
        </button>

        <button className="ttad-hero-btn" onClick={() => navigate("/events")}>
          <Plus size={15} /> Add Event
        </button>

        <button className="ttad-hero-btn" onClick={() => navigate("/latest-updates")}>
          <Plus size={15} /> Upload Whitepaper
        </button>
      </div>

      {/* LINE DIRECTLY BELOW BUTTONS */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "rgba(255,255,255,0.16)",
          marginTop: "0px",
          marginBottom: "18px",
        }}
      />

      {/* MAIN HERO */}
      <div className="ttad-hero-main">

        {/* LEFT CONTENT */}
        <div className="ttad-hero-copy">
          <h1>
            Welcome back,
            <br />
            Super Admin
          </h1>

          <p>
            Unified multi-tenant orchestration engine. Publish editorial insights,
            manage global talent openings, and monitor cloud edge nodes in real time.
          </p>
        </div>

        {/* RIGHT 4 METRICS */}
        <div
          className="ttad-hero-metrics"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: "10px",
            padding: "7px",
            boxSizing: "border-box",
          }}
        >
     
      
         {HERO_METRICS.map((m, i) => {
  const Icon = m.icon;

  const value = [
    newsCount,
    jobsCount,
    eventsCount,
    whitepapersCount,
  ][i];
            return (
              <div
                className="ttad-hero-metric"
                key={m.label}
                role="button"
                tabIndex={0}
                onClick={() => navigate(m.path)}
                onKeyDown={(e) => { if (e.key === "Enter") navigate(m.path); }}
                style={{ cursor: "pointer" }}
              >
                <div className="ttad-hero-metric-icon">
                  <Icon size={16} />
                </div>

                <div>
                  <div className="ttad-hero-metric-value">
                    {value}
                  </div>

                  <div className="ttad-hero-metric-label">
                    {m.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
} 

/* -------------------------------------------------------------------------- */
/* Stat cards                                                                  */
/* -------------------------------------------------------------------------- */

function StatCard({ icon: Icon, label, value, deltaValue, footNote, dot, deltaLabel }) {
  return (
    <div className="ttad-stat-card">
      <div className="ttad-stat-top">
        <span className="ttad-stat-label">{label}</span>
        <span className="ttad-stat-icon">
          <Icon size={16} />
        </span>
      </div>
      <div className="ttad-stat-value">{value}</div>
      <div className="ttad-stat-foot">
        <span className="ttad-stat-delta">
          {dot && <span className="ttad-stat-delta-dot" />}
          {!dot && <TrendingUp size={12} />}
          {deltaValue}
          {deltaLabel ? <span className="ttad-stat-delta-label"> {deltaLabel}</span> : null}
        </span>
        <span className="ttad-stat-footnote">{footNote}</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Publishing directory                                                       */
/* -------------------------------------------------------------------------- */

function getPageNumbers(totalPages, current) {
  const maxButtons = 5;
  if (totalPages <= maxButtons) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  let start = Math.max(1, current - 2);
  let end = start + maxButtons - 1;
  if (end > totalPages) {
    end = totalPages;
    start = end - maxButtons + 1;
  }
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

/* -------------------------------------------------------------------------- */
/* New Entry form — field renderer + modal                                    */
/* -------------------------------------------------------------------------- */

function FormField({ field, value, onChange }) {
  const { key, label, type, required, options, placeholder, hint, rows } = field;

  return (
    <div className="ttad-form-field">
      <div className="ttad-form-field-head">
        <label className="ttad-form-label">
          {label}
          {required && <span className="ttad-form-required">*</span>}
        </label>
        {hint && <span className="ttad-form-hint">{hint}</span>}
      </div>

      {type === "text" && (
        <input
          className="ttad-form-input"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(key, e.target.value)}
        />
      )}

      {type === "number" && (
        <input
          className="ttad-form-input"
          type="number"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(key, e.target.value)}
        />
      )}

      {type === "date" && (
        <input
          className="ttad-form-input"
          type="date"
          value={value}
          onChange={(e) => onChange(key, e.target.value)}
        />
      )}

      {type === "textarea" && (
        <textarea
          className="ttad-form-input ttad-form-textarea"
          rows={rows || 3}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(key, e.target.value)}
        />
      )}

      {type === "select" && (
        <select
          className="ttad-form-input"
          value={value}
          onChange={(e) => onChange(key, e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {type === "radio" && (
        <div className="ttad-form-radio-group">
          {options.map((opt) => (
            <label key={opt} className="ttad-form-radio">
              <input
                type="radio"
                name={key}
                checked={value === opt}
                onChange={() => onChange(key, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      )}

      {type === "checkbox" && (
        <label className="ttad-form-checkbox">
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => onChange(key, e.target.checked)}
          />
          {label}
        </label>
      )}

      {type === "checkbox-group" && (
        <div className="ttad-form-checkbox-group">
          {options.map((opt) => (
            <label key={opt} className="ttad-form-checkbox">
              <input
                type="checkbox"
                checked={!!value[opt]}
                onChange={(e) =>
                  onChange(key, { ...value, [opt]: e.target.checked })
                }
              />
              {opt}
            </label>
          ))}
        </div>
      )}

      {type === "tags" && (
        <input
          className="ttad-form-input"
          type="text"
          value={Array.isArray(value) ? value.join(", ") : ""}
          placeholder={placeholder}
          onChange={(e) =>
            onChange(
              key,
              e.target.value
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean)
            )
          }
        />
      )}
    </div>
  );
}

function NewEntryModal({ config, onClose, onSaved }) {
  const [values, setValues] = useState(() => getDefaultFormValues(config));
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(key, val) {
    setValues((prev) => ({ ...prev, [key]: val }));
  }

  function getMissingRequiredLabels() {
    return config.formFields
      .filter((f) => f.required && (!f.showIf || f.showIf(values)))
      .filter((f) => {
        const v = values[f.key];
        if (Array.isArray(v)) return v.length === 0;
        return v === undefined || v === null || String(v).trim() === "";
      })
      .map((f) => f.label);
  }

 async function handleSubmit(status) {
  const missing = getMissingRequiredLabels();

  if (missing.length > 0) {
    setErrorMsg(`Please fill in: ${missing.join(", ")}`);
    return;
  }

  try {
    if (config.key === "news") {
      await createNews({
        title: values.title || "",
        description: values.body || values.dek || "",
        image: "",
        category: values.domain || "",
        author: values.author || "",
        status,
      });
    } else if (config.key === "jobs") {
      await createJobOpening({
        title: values.title || "",
        department: values.department || "",
        location: values.location || "",
        seniority: values.seniority || "",
        pitch: values.pitch || "",
        description: values.description || "",
        compMin: values.compMin || "",
        compMax: values.compMax || "",
        hiringManager: values.hiringManager || "",
        recruiter: values.recruiter || "",
        costCenter: values.costCenter || "",
        urgency: values.urgency || "",
        tags: values.tags || [],
        screening: values.screening || {},
        syndication: values.syndication || {},
        status,
      });
    } else if (config.key === "events") {
      await createEvent({
        title: values.name || "",
        name: values.name || "",
        date: values.date || "",
        dateRange: values.date || "",
        sessionTiming: values.sessionTiming || "",
        location: values.location || "",
        venue: values.location || "",
        formatType: values.formatType || "Hybrid",
        capacityInternal: Number(values.capacityInternal || 0),
        capacityEnterprise: Number(values.capacityEnterprise || 0),
        capacityVirtual: Number(values.capacityVirtual || 0),
        description: values.description || "",
        status: String(status).toLowerCase(),
      });
    } else if (config.key === "whitepapers") {
      await createWhitepaper({
        title: values.title || "",
        domain: values.category || "",
        category: values.category || "",
        architects: values.author || "",
        author: values.author || "",
        abstract: values.abstract || "",
        bullets: values.takeaways || "",
        gating: values.gating || "",
        status: String(status).toLowerCase(),
      });
    }

    onSaved();
  } catch (error) {
    console.error(`Create ${config.key} Error:`, error);
    setErrorMsg(error.message || `Failed to create ${config.entryLabel}.`);
  }
}

  return (
    <div className="ttad-modal-overlay" onClick={onClose}>
      <div className="ttad-modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="ttad-modal-head">
          <div>
            <div className="ttad-eyebrow">NEW ENTRY</div>
            <h3>{config.entryLabel}</h3>
          </div>
          <button className="ttad-modal-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="ttad-modal-body">
          {errorMsg && <div className="ttad-form-error">{errorMsg}</div>}

          {config.formFields.map((f) => {
            if (f.showIf && !f.showIf(values)) return null;
            if (f.type === "checkbox") return null; // rendered inline below with its pair, handled generically anyway
            return (
              <FormField
                key={f.key}
                field={f}
                value={values[f.key]}
                onChange={handleChange}
              />
            );
          })}

          {/* standalone checkboxes (breakingSpotlight / mediaKitReady etc.) render fine via FormField too */}
          {config.formFields
            .filter((f) => f.type === "checkbox")
            .map((f) => (
              <FormField key={f.key} field={f} value={values[f.key]} onChange={handleChange} />
            ))}
        </div>

        <div className="ttad-modal-footer">
          <button className="ttad-modal-btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button
            className="ttad-modal-btn-secondary"
            onClick={() => handleSubmit(config.draftStatus)}
          >
            Save as Draft
          </button>
          <button
            className="ttad-modal-btn-primary"
            onClick={() => handleSubmit(config.publishStatus)}
          >
            {config.publishLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

function PublishingDirectory({
  activeTab,
  setActiveTab,
  page,
  setPage,
  search,
  filter,
  setFilter,
  domain,
  setDomain,
  domainOpen,
  setDomainOpen,
  navigate,
   recordsByTab,
}) {
  const config = TAB_CONFIG[activeTab];
  const records = recordsByTab[activeTab] || [];

  const [showEntryModal, setShowEntryModal] = useState(false);

  // Close the New Entry modal automatically if the tab changes underneath it.
  useEffect(() => {
    setShowEntryModal(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const domainOptions = useMemo(() => {
    if (config.fixedDomainOptions) return config.fixedDomainOptions;
    const values = Array.from(
      new Set(
        records
          .map((r) => r[config.domainField])
          .filter((v) => v !== undefined && v !== null && v !== "")
      )
    );
    return ["All Domains", ...values];
  }, [records, config]);

  // Reset domain + page whenever the active tab changes (each tab has its own domain values).
  useEffect(() => {
    setDomain("All Domains");
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  // Reset to page 1 whenever search/filter/domain change.
  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filter, domain]);

  const filteredRecords = useMemo(() => {
    const searchTerm = (search || "").trim().toLowerCase();
    const filterTerm = (filter || "").trim().toLowerCase();

    return records.filter((r) => {
      if (domain && domain !== "All Domains" && r[config.domainField] !== domain) {
        return false;
      }

      if (filterTerm) {
        const titleValue = String(r[config.titleField] ?? "").toLowerCase();
        if (!titleValue.includes(filterTerm)) return false;
      }

      if (searchTerm) {
        const haystack = Object.values(r)
          .map((v) => String(v ?? ""))
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(searchTerm)) return false;
      }

      return true;
    });
  }, [records, domain, filter, search, config]);

  const totalRecords = filteredRecords.length;
  const totalPages = Math.max(1, Math.ceil(totalRecords / ROWS_PER_PAGE));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const startIdx = (safePage - 1) * ROWS_PER_PAGE;
  const endIdx = Math.min(startIdx + ROWS_PER_PAGE, totalRecords);
  const pageRecords = filteredRecords.slice(startIdx, startIdx + ROWS_PER_PAGE);

  const pageNumbers = getPageNumbers(totalPages, safePage);

  function cellClassName(colKey) {
    if (colKey === config.titleField) return "ttad-table-title";
    if (colKey === "author") return "ttad-table-author";
    if (colKey === "status") return undefined;
    return "ttad-table-muted";
  }

  return (
    <div className="ttad-card ttad-directory">

      {/* HEADER */}
      <div className="ttad-directory-head">
        <div>
          <div className="ttad-eyebrow">CATALOGUE WORKSPACE</div>
          <h2>Publishing 
            <br/>
            Directory</h2>
        </div>

        {/* TABS - heading ke right */}
        <div className="ttad-tabs">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={"ttad-tab" + (activeTab === i ? " active" : "")}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* TOOLBAR */}
      <div className="ttad-toolbar">
        <div className="ttad-filter-input">
          <Filter size={14} />

          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter articles by title or keyword..."
          />
        </div>

        <div className="ttad-domain-select">
          <button
            className="ttad-domain-btn"
            onClick={() => setDomainOpen((o) => !o)}
          >
            {domain}
            <ChevronDown size={14} />
          </button>

          {domainOpen && (
            <div className="ttad-domain-menu">
              {domainOptions.map((d) => (
                <div
                  key={d}
                  className="ttad-domain-menu-item"
                  onClick={() => {
                    setDomain(d);
                    setDomainOpen(false);
                  }}
                >
                  {d}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          className="ttad-new-entry"
          onClick={() => setShowEntryModal(true)}
        >
          <Plus size={15} />
          New Entry
        </button>
      </div>

      {/* TABLE */}
      <div className="ttad-table-wrap">
        <table className="ttad-table">
          <thead>
            <tr>
              {config.columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {pageRecords.length === 0 ? (
              <tr>
                <td
                  className="ttad-table-muted"
                  colSpan={config.columns.length}
                  style={{ textAlign: "center", padding: "28px 12px" }}
                >
                  No matching records found
                </td>
              </tr>
            ) : (
              pageRecords.map((r, idx) => (
                <tr key={r.id ?? `${config.key}-${startIdx + idx}`}>
                  {config.columns.map((col) => {
                    if (col.key === "status") {
                      const statusValue = r.status ?? "";
                      return (
                        <td key={col.key}>
                          <span
                            className={"ttad-badge " + statusValue.toLowerCase()}
                          >
                            {statusValue || "—"}
                          </span>
                        </td>
                      );
                    }

                    const value = r[col.key];
                    return (
                      <td key={col.key} className={cellClassName(col.key)}>
                        {value === undefined || value === null || value === ""
                          ? "—"
                          : value}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="ttad-pagination">
        <span className="ttad-pagination-info">
          {totalRecords === 0
            ? "Showing 0 of 0 records"
            : `Showing ${startIdx + 1} to ${endIdx} of ${totalRecords} records`}
        </span>

        <div className="ttad-pagination-controls">

          <button
            className="ttad-page-btn"
            onClick={() =>
              setPage((p) => Math.max(1, Math.min(totalPages, p) - 1))
            }
          >
            <ChevronLeft size={14} />
            Previous
          </button>

          {pageNumbers.map((n) => (
            <button
              key={n}
              className={
                "ttad-page-num" +
                (safePage === n ? " active" : "")
              }
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}

          <button
            className="ttad-page-btn"
            onClick={() =>
              setPage((p) => Math.min(totalPages, Math.min(totalPages, p) + 1))
            }
          >
            Next
            <ChevronRight size={14} />
          </button>

        </div>
      </div>

      {showEntryModal && (
        <NewEntryModal
          config={config}
          onClose={() => setShowEntryModal(false)}
          onSaved={() => {
            setShowEntryModal(false);
            setPage(1);
            window.location.reload();
          }}
        />
      )}

    </div>
  );
}
/* -------------------------------------------------------------------------- */
/* Right column panels                                                        */
/* -------------------------------------------------------------------------- */

function AuditOperations() {
  return (
    <div className="ttad-card ttad-panel">
  <div className="ttad-panel-head">
    <h3>
      <Timer size={16} />
      Audit &amp; Operations
    </h3>

    <span className="ttad-realtime-badge">REAL-TIME</span>
  </div>
      <div className="ttad-activity-list">
        {ACTIVITY.map((a) => {
          const Icon = a.icon;
          return (
            <div className="ttad-activity-item" key={a.title}>
              <span className={"ttad-activity-icon " + a.tone}>
                <Icon size={14} />
              </span>
              <div>
                <div className="ttad-activity-title">{a.title}</div>
                <div className="ttad-activity-meta">{a.meta}</div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="ttad-view-log-btn">View Complete System Log</button>
    </div>
  );
}

function SecurityProtocol() {
  return (
    <div className="ttad-card ttad-panel">
      <div className="ttad-security-head">
        <span className="ttad-security-icon">
          <Shield size={16} />
        </span>
        <div>
          <h3>Security Protocol</h3>
          <div className="ttad-security-sub">MFA Enforced Enterprise Session</div>
        </div>
      </div>

      <p className="ttad-security-desc">
        AES-256 encrypted session. Your credentials possess unconditional bypass for publishing
        rules. All draft revisions require cryptographic sign-offs.
      </p>

      <div className="ttad-security-footer">
        <span className="ttad-security-footer-label">Sign-off Status:</span>
        <span className="ttad-security-key">VALIDATED_KEY_448</span>
      </div>
    </div>
  );
}

function EdgeClusterHealth() {
  return (
    <div className="ttad-card ttad-panel">
      <div className="ttad-panel-head">
        <h3>Edge Cluster Health</h3>
        <span className="ttad-active-badge">3 Active</span>
      </div>

      <div className="ttad-edge-list">
        {EDGE_NODES.map((n) => (
          <div className="ttad-edge-row" key={n.name}>
            <span className="ttad-edge-name">
              <Network size={13} className="ttad-edge-icon" />
              {n.name}
            </span>
            <span className="ttad-edge-value">
              <span className="ttad-edge-dot" />
              {n.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Bottom section                                                             */
/* -------------------------------------------------------------------------- */

function EditorialTrend() {
  const max = Math.max(...TREND_WEEKS.map((w) => w.value));
  return (
    <div className="ttad-card ttad-trend-card">
      <div className="ttad-trend-head">
        <div>
          <div className="ttad-eyebrow">PUBLISHING VELOCITY</div>
          <h3>30-Day Editorial Trend</h3>
        </div>
        <span className="ttad-pace-badge">+28% pace</span>
      </div>

      <div className="ttad-trend-bars">
        {TREND_WEEKS.map((w, i) => (
          <div className="ttad-trend-bar-col" key={w.label}>
            <div
              className={"ttad-trend-bar" + (i === TREND_WEEKS.length - 1 ? " peak" : "")}
              style={{ height: `${(w.value / max) * 100}%` }}
            />
          </div>
        ))}
      </div>
      <div className="ttad-trend-labels">
        {TREND_WEEKS.map((w, i) => (
          <span key={w.label} className={i === TREND_WEEKS.length - 1 ? "peak" : ""}>
            {w.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function FrankfurtCore() {
  return (
    <div className="ttad-card ttad-cdn-card">
      <div className="ttad-cdn-visual">
        <img
          src="/frankfurt-core.png"
          alt="Frankfurt Core data center"
          className="ttad-cdn-image"
        />
      </div>

      <div className="ttad-cdn-body">
        <div className="ttad-cdn-status">
          <span className="ttad-cdn-dot" />
          PRIMARY CDN CLUSTER
        </div>

        <h3>Frankfurt Core-01</h3>

        <p>
          Main dynamic CDN endpoint operational at 0% packet loss across
          European zones.
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Styles                                                                      */
/* -------------------------------------------------------------------------- */

function StyleBlock() {
  return (
    <style>{`
      :root {
        --ttad-bg: #f7f8fb;
        --ttad-card: #ffffff;
        --ttad-border: #e7e7ee;
        --ttad-text: #1c1a24;
        --ttad-text-muted: #7a7787;
        --ttad-text-faint: #9c98a8;
        --ttad-primary: #780042;
        --ttad-primary-dark: #780042;
        --ttad-primary-light: #fbeaf4;
        --ttad-radius-lg: 16px;
        --ttad-radius-md: 12px;
        --ttad-radius-sm: 8px;
        --ttad-shadow: 0 1px 2px rgba(20, 15, 25, 0.04), 0 1px 1px rgba(20, 15, 25, 0.03);
      }

      .ttad-root, .ttad-root * { box-sizing: border-box; }

      .ttad-root {
        display: flex;
        min-height: 100vh;
        background: var(--ttad-bg);
        color: var(--ttad-text);
        font-family: "Inter", sans-serif;
        font-size: 14px;
      }
      /* ================= TOP NAVBAR ================= */

.ttad-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 28px;
  min-height: 64px;
  background: var(--ttad-card);
  border-bottom: 1px solid var(--ttad-border);
  position: sticky;
  top: 0;
  z-index: 5;
}

/* ================= SEARCH ================= */

.ttad-search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f6f6f9;
  border: 1px solid var(--ttad-border);
  border-radius: 10px;
  padding: 9px 14px;
  width: 100%;
  max-width: 460px;
}

.ttad-search-icon {
  color: var(--ttad-text-faint);
  flex-shrink: 0;
}

.ttad-search input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 13.5px;
  color: var(--ttad-text);
}

.ttad-search input::placeholder {
  color: var(--ttad-text-faint);
}

/* ================= RIGHT SIDE ================= */

.ttad-topbar-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

/* ================= PRODUCTION STATUS ================= */

.ttad-status-pill {
  display: flex;
  align-items: center;
  gap: 7px;
  background: #eafaf1;
  color: #1f8a4c;
  font-weight: 600;
  font-size: 12.5px;
  padding: 7px 13px;
  border-radius: 999px;
  white-space: nowrap;
}

.ttad-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22b25c;
}

/* ================= NOTIFICATION ================= */

.ttad-icon-btn {
  position: relative;
  border: 1px solid var(--ttad-border);
  background: #fff;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--ttad-text);
}

.ttad-icon-dot {
  position: absolute;
  top: 7px;
  right: 8px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--ttad-primary);
  border: 2px solid #fff;
}

.ttad-notif-wrap { position: relative; }

.ttad-notif-panel {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  z-index: 20;
  width: 300px;
  max-width: 80vw;
  background: #fff;
  border: 1px solid var(--ttad-border);
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(20,15,25,0.14);
  overflow: hidden;
}

.ttad-notif-panel-head {
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 700;
  border-bottom: 1px solid var(--ttad-border);
}

.ttad-notif-panel-list {
  max-height: 320px;
  overflow-y: auto;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ttad-notif-panel-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.ttad-notif-panel-item-title {
  font-size: 12.5px;
  font-weight: 600;
  line-height: 1.35;
}

.ttad-notif-panel-item-meta {
  font-size: 11px;
  color: var(--ttad-text-faint);
  margin-top: 2px;
}

/* ================= PROFILE ================= */
/* Profile */
.ttad-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ttad-profile-text {
  text-align: right;
  line-height: 1.25;
}

.ttad-profile-name {
  font-weight: 700;
  font-size: 13.5px;
}

.ttad-profile-role {
  font-size: 11.5px;
  color: var(--ttad-text-muted);
}

/* TechTorch Avatar */
.ttad-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid var(--ttad-border);

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
  overflow: hidden;
}

.techtorch-avatar {
  width: 30px;
  height: 30px;
  object-fit: contain;
  display: block;
}

/* Responsive */

@media (max-width: 780px) {

  .ttad-topbar {
    padding: 12px 16px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .ttad-search {
    order: 3;
    max-width: 100%;
  }

  .ttad-profile-text {
    display: none;
  }

}

@media (max-width: 520px) {

  .ttad-status-pill span {
    display: none;
  }

}
      /* ---------- Content ---------- */
      .ttad-content { padding: 24px 28px 40px; display: flex; flex-direction: column; gap: 20px; }

      /* ---------- Hero ---------- */
      .ttad-hero {
        position: relative; overflow: hidden;
        border-radius: 22px;
        background:
          radial-gradient(720px 420px at 78% 12%, rgba(255,255,255,0.10), transparent 60%),
          linear-gradient(135deg, #780042 0%, #4a0028 55%, #190019 100%);
        padding: 28px 32px 32px;
        color: #fff;
      }
      .ttad-hero-glow {
        position: absolute; right: 10%; top: 30%;
        width: 260px; height: 180px; border-radius: 50%;
        background: radial-gradient(closest-side, rgba(255,255,255,0.07), transparent);
        filter: blur(10px); pointer-events: none;
      }

      .ttad-hero-top { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
      .ttad-hero-badge {
        display: flex; align-items: center; gap: 8px;
        font-size: 11.5px; font-weight: 700; letter-spacing: 0.05em;
        background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14);
        padding: 6px 13px; border-radius: 999px;
      }
      .ttad-hero-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #35d47a; }
      .ttad-hero-meta {
        display: flex; align-items: center; gap: 6px;
        font-size: 12px; color: rgba(255,255,255,0.65); font-family: "SFMono-Regular", Menlo, monospace;
      }

      .ttad-hero-actions { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 24px; }
      .ttad-hero-btn {
        display: flex; align-items: center; gap: 7px;
        border: 1px solid rgba(255,255,255,0.28); background: rgba(255,255,255,0.06);
        color: #fff; font-size: 13px; font-weight: 600;
        padding: 9px 16px; border-radius: 10px; cursor: pointer;
        transition: background 0.15s ease;
      }
      .ttad-hero-btn:hover { background: rgba(255,255,255,0.14); }
      .ttad-hero-btn.primary {
        background: #fff; color: var(--ttad-primary); border-color: #fff;
      }
      .ttad-hero-btn.primary:hover { background: #f3e9ef; }

      .ttad-hero-divider {
        height: 1px;
        background: rgba(255,255,255,0.16);
        margin: 0 0 26px;
      }

      .ttad-hero-main { display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; flex-wrap: wrap; }
      .ttad-hero-copy h1 { font-size: 34px; line-height: 1.15; font-weight: 700; margin: 0 0 14px; }
      .ttad-hero-copy p { max-width: 420px; font-size: 13.5px; line-height: 1.6; color: rgba(255,255,255,0.68); margin: 0; }

      .ttad-hero-metrics { display: flex; gap: 10px; flex-wrap: wrap; }
      .ttad-hero-metric {
        display: flex; align-items: center; gap: 10px;
        background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
        border-radius: 12px; padding: 10px 16px;
      }
      .ttad-hero-metric-icon {
        width: 30px; height: 30px; border-radius: 8px;
        background: rgba(255,255,255,0.12);
        display: flex; align-items: center; justify-content: center;
      }
      .ttad-hero-metric-value { font-size: 16px; font-weight: 700; line-height: 1.2; }
      .ttad-hero-metric-label { font-size: 11px; color: rgba(255,255,255,0.62); white-space: nowrap; }

      /* ---------- Stat cards ---------- */
      .ttad-stats-grid {
        display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
      }
      .ttad-stat-card {
        background: var(--ttad-card); border: 1px solid var(--ttad-border);
        border-radius: var(--ttad-radius-lg); padding: 18px 20px; box-shadow: var(--ttad-shadow);
      }
      .ttad-stat-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
      .ttad-stat-label { font-size: 11px; font-weight: 700; letter-spacing: 0.05em; color: var(--ttad-text-faint); }
      .ttad-stat-icon {
        width: 32px; height: 32px; border-radius: 9px; background: var(--ttad-primary-light);
        color: var(--ttad-primary); display: flex; align-items: center; justify-content: center;
      }
      .ttad-stat-value { font-size: 26px; font-weight: 700; margin-bottom: 12px; }
      .ttad-stat-foot { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
      .ttad-stat-delta {
        display: flex; align-items: center; gap: 4px;
        font-size: 12px; font-weight: 700; color: #1f8a4c;
        background: #eafaf1; padding: 3px 8px; border-radius: 6px;
      }
      .ttad-stat-delta-dot { width: 6px; height: 6px; border-radius: 50%; background: #1f8a4c; }
      .ttad-stat-delta-label { font-weight: 500; }
      .ttad-stat-footnote { font-size: 12px; color: var(--ttad-text-muted); }

      /* ---------- Body grid ---------- */
      .ttad-body-grid { display: grid; grid-template-columns: 1fr 320px; gap: 20px; align-items: start; }
      .ttad-left-col { display: flex; flex-direction: column; gap: 20px; min-width: 0; }
      .ttad-right-col { display: flex; flex-direction: column; gap: 20px; min-width: 0; }

      .ttad-card {
        background: var(--ttad-card); border: 1px solid var(--ttad-border);
        border-radius: var(--ttad-radius-lg); box-shadow: var(--ttad-shadow);
      }

      .ttad-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; color: var(--ttad-primary); margin-bottom: 4px; }

      /* ---------- Publishing directory ---------- */
      .ttad-directory { padding: 22px 24px 10px; }
      .ttad-directory-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
      .ttad-directory-head h2 { font-size: 19px; margin: 0; font-weight: 700; }

      .ttad-tabs {
        display: flex; gap: 4px; background: #f2f1f5; padding: 4px;
        border-radius: 11px; margin-bottom: 16px; overflow-x: auto;
      }
      .ttad-tab {
        border: none; background: transparent; padding: 9px 16px; border-radius: 8px;
        font-size: 13px; font-weight: 600; color: var(--ttad-text-muted); cursor: pointer;
        white-space: nowrap;
      }
      .ttad-tab.active { background: var(--ttad-primary); color: #fff; }

/* AUTHOR NAME */
.ttad-table-author {
  color: #334155;
  font-weight: 500;
}

      .ttad-toolbar { display: flex; gap: 10px; margin-bottom: 16px; flex-wrap: wrap; }
      .ttad-filter-input {
        flex: 1; min-width: 200px; display: flex; align-items: center; gap: 8px;
        border: 1px solid var(--ttad-border); border-radius: 10px; padding: 9px 13px;
        color: var(--ttad-text-faint); background: #fbfbfd;
      }
      .ttad-filter-input input { border: none; outline: none; background: transparent; width: 100%; font-size: 13px; color: var(--ttad-text); }

      .ttad-domain-select { position: relative; }
      .ttad-domain-btn {
        display: flex; align-items: center; gap: 8px;
        border: 1px solid var(--ttad-border); background: #fbfbfd; border-radius: 10px;
        padding: 9px 13px; font-size: 13px; font-weight: 500; color: var(--ttad-text); cursor: pointer;
        white-space: nowrap;
      }
      .ttad-domain-menu {
        position: absolute; top: calc(100% + 6px); right: 0; z-index: 10;
        background: #fff; border: 1px solid var(--ttad-border); border-radius: 10px;
        box-shadow: 0 8px 24px rgba(20,15,25,0.12); min-width: 180px; overflow: hidden;
      }
      .ttad-domain-menu-item { padding: 9px 14px; font-size: 13px; cursor: pointer; }
      .ttad-domain-menu-item:hover { background: var(--ttad-primary-light); }

      .ttad-new-entry {
        display: flex; align-items: center; gap: 7px;
        background: var(--ttad-primary); color: #fff; border: none;
        border-radius: 10px; padding: 9px 16px; font-size: 13px; font-weight: 600; cursor: pointer;
        white-space: nowrap;
      }
      .ttad-new-entry:hover { filter: brightness(0.9); }

      /* ---------- New Entry modal ---------- */
      .ttad-modal-overlay {
        position: fixed; inset: 0; z-index: 100;
        background: rgba(20,15,25,0.45);
        display: flex; align-items: flex-start; justify-content: center;
        padding: 40px 16px;
        overflow-y: auto;
      }
      .ttad-modal-panel {
        background: #fff; border-radius: var(--ttad-radius-lg);
        width: 100%; max-width: 640px;
        box-shadow: 0 24px 64px rgba(20,15,25,0.28);
        display: flex; flex-direction: column;
        max-height: calc(100vh - 80px);
      }
      .ttad-modal-head {
        display: flex; align-items: flex-start; justify-content: space-between;
        padding: 20px 22px; border-bottom: 1px solid var(--ttad-border);
      }
      .ttad-modal-head h3 { margin: 2px 0 0; font-size: 18px; font-weight: 700; }
      .ttad-modal-close {
        border: none; background: #f2f1f5; width: 32px; height: 32px; border-radius: 8px;
        display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--ttad-text);
        flex-shrink: 0;
      }
      .ttad-modal-close:hover { background: #e7e7ee; }
      .ttad-modal-body {
        padding: 20px 22px; overflow-y: auto; display: flex; flex-direction: column; gap: 16px;
      }
      .ttad-modal-footer {
        display: flex; align-items: center; justify-content: flex-end; gap: 10px;
        padding: 16px 22px; border-top: 1px solid var(--ttad-border);
      }
      .ttad-modal-btn-secondary {
        border: 1px solid var(--ttad-border); background: #fff; color: var(--ttad-text);
        font-size: 13px; font-weight: 600; padding: 9px 16px; border-radius: 10px; cursor: pointer;
      }
      .ttad-modal-btn-secondary:hover { background: #f6f6f9; }
      .ttad-modal-btn-primary {
        border: none; background: var(--ttad-primary); color: #fff;
        font-size: 13px; font-weight: 600; padding: 9px 16px; border-radius: 10px; cursor: pointer;
      }
      .ttad-modal-btn-primary:hover { filter: brightness(0.9); }

      .ttad-form-error {
        background: #fdeaea; color: #c93b3b; font-size: 12.5px; font-weight: 600;
        padding: 10px 14px; border-radius: 8px;
      }
      .ttad-form-field { display: flex; flex-direction: column; gap: 6px; }
      .ttad-form-field-head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; }
      .ttad-form-label { font-size: 12.5px; font-weight: 700; color: var(--ttad-text); }
      .ttad-form-required { color: var(--ttad-primary); margin-left: 2px; }
      .ttad-form-hint { font-size: 11px; color: var(--ttad-text-faint); white-space: nowrap; }
      .ttad-form-input {
        border: 1px solid var(--ttad-border); border-radius: 9px; padding: 9px 12px;
        font-size: 13px; font-family: inherit; color: var(--ttad-text); background: #fbfbfd;
        width: 100%;
      }
      .ttad-form-input:focus { outline: none; border-color: var(--ttad-primary); background: #fff; }
      .ttad-form-textarea { resize: vertical; }
      .ttad-form-radio-group, .ttad-form-checkbox-group { display: flex; flex-direction: column; gap: 8px; }
      .ttad-form-radio, .ttad-form-checkbox {
        display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--ttad-text); cursor: pointer;
      }

      .ttad-table-wrap { overflow-x: auto; margin: 0 -4px; }
      .ttad-table { width: 100%; border-collapse: collapse; min-width: 600px; }
      .ttad-table thead th {
        text-align: left; font-size: 11px; font-weight: 700; letter-spacing: 0.05em;
        color: var(--ttad-text-faint); padding: 0 12px 10px; border-bottom: 1px solid var(--ttad-border);
      }
      .ttad-table tbody td { padding: 14px 12px; border-bottom: 1px solid var(--ttad-border); vertical-align: top; font-size: 13px; }
      .ttad-table tbody tr:last-child td { border-bottom: none; }
      .ttad-table-title { font-weight: 600; max-width: 320px; }
      .ttad-table-muted { color: var(--ttad-text-muted); white-space: nowrap; }

      .ttad-badge {
        display: inline-block; font-size: 11.5px; font-weight: 700; padding: 4px 11px; border-radius: 999px;
      }
      .ttad-badge.published { background: #eafaf1; color: #1f8a4c; }
      .ttad-badge.scheduled { background: #fff6e3; color: #a5720d; }
      .ttad-badge.draft { background: #f0eef1; color: #726f7c; }

      .ttad-pagination {
        display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;
        padding: 16px 4px;
      }
      .ttad-pagination-info { font-size: 12.5px; color: var(--ttad-text-muted); }
      .ttad-pagination-controls { display: flex; align-items: center; gap: 6px; }
      .ttad-page-btn {
        display: flex; align-items: center; gap: 6px;
        border: 1px solid var(--ttad-border); background: #fff; border-radius: 8px;
        padding: 7px 12px; font-size: 12.5px; font-weight: 600; color: var(--ttad-text); cursor: pointer;
      }
      .ttad-page-btn:hover { background: #f6f6f9; }
      .ttad-page-num {
        width: 30px; height: 30px; border-radius: 8px; border: 1px solid var(--ttad-border); background: #fff;
        font-size: 12.5px; font-weight: 600; color: var(--ttad-text); cursor: pointer;
      }
      .ttad-page-num.active { background: var(--ttad-primary); border-color: var(--ttad-primary); color: #fff; }

      /* ---------- Bottom grid ---------- */
      .ttad-bottom-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

      .ttad-trend-card { padding: 20px 22px; }
      .ttad-trend-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 18px; }
      .ttad-trend-head h3 { font-size: 15px; margin: 0; font-weight: 700; }
      .ttad-pace-badge { background: #eafaf1; color: #1f8a4c; font-size: 11.5px; font-weight: 700; padding: 4px 10px; border-radius: 999px; white-space: nowrap; }

      .ttad-trend-bars { display: flex; align-items: flex-end; gap: 14px; height: 110px; margin-bottom: 10px; }
      .ttad-trend-bar-col { flex: 1; display: flex; align-items: flex-end; height: 100%; }
      .ttad-trend-bar { width: 100%; border-radius: 8px 8px 3px 3px; background: #f6d3e6; min-height: 6px; }
      .ttad-trend-bar.peak { background: var(--ttad-primary); }
      .ttad-trend-labels { display: flex; gap: 14px; }
      .ttad-trend-labels span { flex: 1; text-align: center; font-size: 11.5px; color: var(--ttad-text-muted); }
      .ttad-trend-labels span.peak { color: var(--ttad-text); font-weight: 700; }

      .ttad-cdn-card {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  padding: 12px;
}

.ttad-cdn-visual {
  width: 105px;
  height: 90px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #f3f3f6;
}

.ttad-cdn-visual-glow {
  display: none;
}

.ttad-cdn-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
}

.ttad-cdn-body {
  flex: 1;
  min-width: 0;
  padding: 0;
}

.ttad-cdn-status {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--ttad-primary);
  margin-bottom: 8px;
}

.ttad-cdn-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22b25c;
}

.ttad-cdn-card h3 {
  font-size: 16px;
  margin: 0 0 8px;
  font-weight: 700;
}

.ttad-cdn-card p {
  font-size: 12.5px;
  color: var(--ttad-text-muted);
  line-height: 1.55;
  margin: 0;
}

      /* ---------- Right panels ---------- */
      .ttad-panel { padding: 20px 20px; }
      .ttad-panel-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
      .ttad-panel-head h3 { display:flex;align-Items:center;gap:7px;}

      .ttad-realtime-badge {
        background: #eafaf1; color: #1f8a4c; font-size: 10.5px; font-weight: 700;
        letter-spacing: 0.04em; padding: 4px 9px; border-radius: 999px;
      }
      .ttad-active-badge {
        background: var(--ttad-primary-light); color: var(--ttad-primary); font-size: 10.5px; font-weight: 700;
        padding: 4px 9px; border-radius: 999px;
      }

      .ttad-activity-list { display: flex; flex-direction: column; gap: 14px; margin-bottom: 16px; }
      .ttad-activity-item { display: flex; align-items: flex-start; gap: 11px; }
      .ttad-activity-icon {
        width: 30px; height: 30px; border-radius: 9px; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center;
      }
      .ttad-activity-icon.pink { background: #fbeaf4; color: var(--ttad-primary); }
      .ttad-activity-icon.red { background: #fdeaea; color: #c93b3b; }
      .ttad-activity-icon.blue { background: #e9f1fd; color: #2a6fd8; }
      .ttad-activity-icon.purple { background: #efeafd; color: #7145d1; }
      .ttad-activity-title { font-size: 13px; font-weight: 600; line-height: 1.35; }
      .ttad-activity-meta { font-size: 11.5px; color: var(--ttad-text-faint); margin-top: 2px; }

      .ttad-view-log-btn {
        width: 100%; border: 1px solid var(--ttad-border); background: #fbfbfd;
        padding: 10px; border-radius: 10px; font-size: 12.5px; font-weight: 600;
        color: var(--ttad-text); cursor: pointer;
      }
      .ttad-view-log-btn:hover { background: #f2f1f5; }

      .ttad-security-head { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px; }
      .ttad-security-icon {
        width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0;
        background: var(--ttad-primary-light); color: var(--ttad-primary);
        display: flex; align-items: center; justify-content: center;
      }
      .ttad-security-head h3 { font-size: 14.5px; margin: 0 0 3px; font-weight: 700; }
      .ttad-security-sub { font-size: 11.5px; color: #1f8a4c; font-weight: 600; }
      .ttad-security-desc { font-size: 12.5px; color: var(--ttad-text-muted); line-height: 1.6; margin: 0 0 16px; }
      .ttad-security-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px; border-top: 1px solid var(--ttad-border); padding-top: 12px; }
      .ttad-security-footer-label { font-size: 11.5px; color: var(--ttad-text-faint); }
      .ttad-security-key { font-size: 11.5px; font-weight: 700; color: var(--ttad-primary); font-family: "SFMono-Regular", Menlo, monospace; }

      .ttad-edge-list { display: flex; flex-direction: column; gap: 14px; }
      .ttad-edge-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
      .ttad-edge-name { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 500; }
      .ttad-edge-icon { color: var(--ttad-text-faint); flex-shrink: 0; }
      .ttad-edge-value { display: flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 700; color: #1f8a4c; white-space: nowrap; }
      .ttad-edge-dot { width: 6px; height: 6px; border-radius: 50%; background: #22b25c; }

      /* ---------- Responsive ---------- */
      @media (max-width: 1180px) {
        .ttad-body-grid { grid-template-columns: 1fr; }
        .ttad-stats-grid { grid-template-columns: repeat(2, 1fr); }
      }

      @media (max-width: 900px) {
        .ttad-bottom-grid { grid-template-columns: 1fr; }
        .ttad-hero-main { flex-direction: column; align-items: flex-start; }
      }

      .ttad-main {
        width: 100%;
        margin-left: 0;
        min-width: 0;
      }

      @media (max-width: 780px) {
        .ttad-content { padding: 18px 16px 32px; }
        .ttad-topbar { padding: 12px 16px; flex-wrap: wrap; gap: 12px; }
        .ttad-search { order: 3; max-width: 100%; }
        .ttad-stats-grid { grid-template-columns: 1fr; }
        .ttad-profile-text { display: none; }
      }

      @media (max-width: 520px) {
        .ttad-hero { padding: 22px 18px 24px; }
        .ttad-hero-copy h1 { font-size: 26px; }
        .ttad-hero-metrics { width: 100%; }
        .ttad-hero-metric { flex: 1; min-width: 130px; }
        .ttad-status-pill span { display: none; }
        .ttad-hero-actions { flex-wrap: wrap; }
        .ttad-hero-actions .ttad-hero-btn { flex: 1 1 calc(50% - 8px); justify-content: center; }
      }

      /* ================================================================
         FULL RESPONSIVE OVERRIDE
         Existing layout/design/functionality is preserved.
         These rules only improve sizing, wrapping and overflow.
         ================================================================ */

      *, *::before, *::after {
        box-sizing: border-box;
      }

      html, body {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
      }

      .ttad-root,
      .ttad-main,
      .ttad-content {
        width: 100%;
        max-width: 100%;
        min-width: 0;
      }

      .ttad-content > *,
      .ttad-body-grid > *,
      .ttad-left-col > *,
      .ttad-right-col > *,
      .ttad-bottom-grid > * {
        min-width: 0;
        max-width: 100%;
      }

      /* Large desktop */
      @media (min-width: 1441px) {
        .ttad-content {
          padding-left: clamp(24px, 2.5vw, 48px);
          padding-right: clamp(24px, 2.5vw, 48px);
        }

        .ttad-body-grid {
          grid-template-columns: minmax(0, 1fr) minmax(280px, 340px);
        }
      }

      /* Desktop / laptop */
      @media (max-width: 1180px) {
        .ttad-body-grid {
          grid-template-columns: 1fr;
        }

        .ttad-right-col {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .ttad-stats-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ttad-hero-main {
          gap: 24px;
        }

        .ttad-hero-copy,
        .ttad-hero-metrics {
          min-width: 0;
        }
      }

      /* Tablet landscape / tablet */
      @media (max-width: 900px) {
        .ttad-topbar {
          gap: 12px;
        }

        .ttad-search {
          min-width: 0;
        }

        .ttad-topbar-right {
          min-width: 0;
          flex-wrap: wrap;
        }

        .ttad-hero-top {
          flex-wrap: wrap;
          gap: 12px;
        }

        .ttad-hero-meta {
          max-width: 100%;
          white-space: normal;
          text-align: right;
        }

        .ttad-hero-main {
          flex-direction: column;
          align-items: stretch;
        }

        .ttad-hero-copy {
          width: 100%;
        }

        .ttad-hero-metrics {
          width: 100%;
        }

        .ttad-bottom-grid {
          grid-template-columns: 1fr;
        }

        .ttad-right-col {
          grid-template-columns: 1fr;
        }

        .ttad-directory-head {
          gap: 16px;
        }

        .ttad-tabs {
          max-width: 100%;
          overflow-x: auto;
          scrollbar-width: thin;
          flex-wrap: nowrap;
        }

        .ttad-tab {
          flex: 0 0 auto;
          white-space: nowrap;
        }

        .ttad-toolbar {
          flex-wrap: wrap;
        }

        .ttad-filter-input {
          flex: 1 1 260px;
          min-width: 0;
        }

        .ttad-domain-select,
        .ttad-new-entry {
          flex: 0 1 auto;
        }
      }

      /* Tablet portrait / large mobile */
      @media (max-width: 780px) {
        .ttad-content {
          padding: 18px 16px 32px;
        }

        .ttad-topbar {
          padding: 12px 16px;
          flex-wrap: wrap;
          align-items: center;
        }

        .ttad-search {
          order: 3;
          flex: 1 1 100%;
          width: 100%;
          max-width: none;
        }

        .ttad-topbar-right {
          margin-left: auto;
          flex: 0 1 auto;
        }

        .ttad-status-pill {
          white-space: nowrap;
        }

        .ttad-stats-grid {
          grid-template-columns: 1fr;
        }

        .ttad-profile-text {
          display: none;
        }

        .ttad-hero {
          padding: 22px 18px 24px;
        }

        .ttad-hero-top {
          align-items: flex-start;
        }

        .ttad-hero-meta {
          width: 100%;
          text-align: left;
        }

        .ttad-hero-actions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .ttad-hero-actions .ttad-hero-btn {
          width: 100%;
          min-width: 0;
          justify-content: center;
        }

        .ttad-hero-metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          width: 100%;
        }

        .ttad-hero-metric {
          min-width: 0;
        }

        .ttad-directory-head {
          flex-direction: column;
          align-items: stretch;
        }

        .ttad-tabs {
          width: 100%;
          padding-bottom: 3px;
        }

        .ttad-toolbar {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 10px;
        }

        .ttad-filter-input,
        .ttad-domain-select,
        .ttad-new-entry {
          width: 100%;
          min-width: 0;
        }

        .ttad-filter-input {
          grid-column: 1 / -1;
        }

        .ttad-domain-btn,
        .ttad-new-entry {
          width: 100%;
        }

        .ttad-table-wrap {
          width: 100%;
          max-width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .ttad-table {
          min-width: 620px;
        }

        .ttad-pagination {
          align-items: stretch;
        }

        .ttad-pagination-info {
          width: 100%;
        }

        .ttad-pagination-controls {
          width: 100%;
          justify-content: flex-start;
          flex-wrap: wrap;
        }

        .ttad-modal-overlay {
          padding: 12px;
          align-items: flex-start;
        }

        .ttad-modal-panel {
          width: 100%;
          max-width: 100%;
          max-height: calc(100vh - 24px);
        }

        .ttad-modal-head,
        .ttad-modal-body,
        .ttad-modal-footer {
          padding-left: 16px;
          padding-right: 16px;
        }

        .ttad-modal-footer {
          flex-wrap: wrap;
        }

        .ttad-modal-footer button {
          flex: 1 1 150px;
          min-width: 0;
        }
      }

      /* Mobile */
      @media (max-width: 520px) {
        .ttad-content {
          padding: 12px 10px 24px;
        }

        .ttad-topbar {
          padding: 10px;
          gap: 10px;
        }

        .ttad-topbar-right {
          width: 100%;
          justify-content: flex-end;
        }

        .ttad-status-pill {
          font-size: 10px;
          padding: 7px 9px;
        }

        .ttad-profile {
          flex-shrink: 0;
        }

        .ttad-avatar,
        .techtorch-avatar {
          width: 34px;
          height: 34px;
        }

        .ttad-notif-panel {
          position: fixed;
          top: 58px;
          right: 10px;
          left: 10px;
          width: auto;
          max-width: none;
          z-index: 9999;
        }

        .ttad-hero {
          padding: 18px 14px 20px;
          border-radius: 14px;
        }

        .ttad-hero-badge {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ttad-hero-copy h1 {
          font-size: clamp(24px, 8vw, 30px);
          line-height: 1.08;
        }

        .ttad-hero-copy p {
          font-size: 12.5px;
          line-height: 1.55;
        }

        .ttad-hero-actions {
          grid-template-columns: 1fr;
        }

        .ttad-hero-actions .ttad-hero-btn {
          min-height: 40px;
        }

        .ttad-hero-metrics {
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          padding: 5px !important;
        }

        .ttad-hero-metric {
          padding: 9px 7px;
          gap: 7px;
        }

        .ttad-hero-metric-value {
          font-size: 16px;
        }

        .ttad-hero-metric-label {
          font-size: 9.5px;
          line-height: 1.25;
          overflow-wrap: anywhere;
        }

        .ttad-stat-card {
          padding: 16px;
        }

        .ttad-stat-value {
          font-size: 24px;
        }

        .ttad-card {
          border-radius: 12px;
        }

        .ttad-directory {
          overflow: visible;
        }

        .ttad-directory-head {
          padding: 16px;
        }

        .ttad-directory-head h2 {
          font-size: 22px;
        }

        .ttad-tabs {
          margin-right: -16px;
          padding-right: 16px;
        }

        .ttad-tab {
          font-size: 11px;
          padding: 8px 10px;
        }

        .ttad-toolbar {
          grid-template-columns: 1fr;
          padding: 12px 16px;
        }

        .ttad-filter-input {
          grid-column: auto;
        }

        .ttad-table-wrap {
          margin: 0;
        }

        .ttad-table {
          min-width: 600px;
        }

        .ttad-pagination {
          padding: 12px 16px;
        }

        .ttad-pagination-controls {
          gap: 5px;
        }

        .ttad-page-btn {
          padding: 7px 9px;
        }

        .ttad-page-num {
          width: 28px;
          height: 28px;
        }

        .ttad-trend-card,
        .ttad-panel {
          padding: 16px;
        }

        .ttad-trend-bars {
          gap: 8px;
          height: 90px;
        }

        .ttad-trend-labels {
          gap: 8px;
        }

        .ttad-trend-labels span {
          font-size: 10px;
        }

        .ttad-cdn-card {
          flex-direction: column;
          align-items: stretch;
        }

        .ttad-cdn-visual {
          width: 100%;
          height: 150px;
        }

        .ttad-cdn-body {
          width: 100%;
        }

        .ttad-edge-row {
          align-items: flex-start;
        }

        .ttad-edge-name {
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .ttad-edge-value {
          flex-shrink: 0;
        }

        .ttad-modal-overlay {
          padding: 8px;
        }

        .ttad-modal-panel {
          max-height: calc(100vh - 16px);
          border-radius: 12px;
        }

        .ttad-modal-head {
          padding: 14px;
        }

        .ttad-modal-body {
          padding: 14px;
          gap: 14px;
        }

        .ttad-modal-footer {
          padding: 12px 14px;
          flex-direction: column;
        }

        .ttad-modal-footer button {
          width: 100%;
          flex: none;
        }

        .ttad-form-field-head {
          align-items: flex-start;
          flex-direction: column;
          gap: 3px;
        }

        .ttad-form-hint {
          white-space: normal;
        }

        .ttad-form-input {
          min-width: 0;
          font-size: 16px;
        }

        .ttad-form-radio,
        .ttad-form-checkbox {
          align-items: flex-start;
          line-height: 1.4;
        }
      }

      /* Very small phones */
      @media (max-width: 360px) {
        .ttad-content {
          padding-left: 7px;
          padding-right: 7px;
        }

        .ttad-topbar {
          padding-left: 7px;
          padding-right: 7px;
        }

        .ttad-hero {
          padding-left: 11px;
          padding-right: 11px;
        }

        .ttad-hero-metrics {
          grid-template-columns: 1fr;
        }

        .ttad-hero-metric {
          display: flex;
          justify-content: flex-start;
        }

        .ttad-status-pill {
          display: none;
        }

        .ttad-page-btn {
          font-size: 11px;
        }

        .ttad-page-btn svg {
          width: 12px;
          height: 12px;
        }
      }


      /* ================================================================
         SAFE FULL-DEVICE RESPONSIVE LAYER
         UI/branding/layout hierarchy preserved.
         CSS-only: no component/API/functionality changes.
         ================================================================ */

      html, body, #root {
        width: 100%;
        max-width: 100%;
        min-height: 100%;
        margin: 0;
      }

      .ttad-root {
        width: 100%;
        max-width: 100%;
        min-width: 0;
        overflow-x: hidden;
      }

      .ttad-main {
        width: 100%;
        max-width: 100%;
        min-width: 0;
      }

      .ttad-content {
        width: 100%;
        max-width: 100%;
        min-width: 0;
      }

      .ttad-topbar,
      .ttad-content,
      .ttad-hero,
      .ttad-card,
      .ttad-stat-card,
      .ttad-body-grid,
      .ttad-left-col,
      .ttad-right-col,
      .ttad-bottom-grid {
        min-width: 0;
      }

      .ttad-hero-copy,
      .ttad-hero-metrics,
      .ttad-hero-metric,
      .ttad-topbar-right,
      .ttad-profile,
      .ttad-directory,
      .ttad-directory-head,
      .ttad-toolbar,
      .ttad-filter-input,
      .ttad-cdn-body {
        min-width: 0;
      }

      .ttad-hero-copy h1,
      .ttad-hero-copy p,
      .ttad-directory-head h2,
      .ttad-activity-title,
      .ttad-activity-meta,
      .ttad-security-desc,
      .ttad-edge-name,
      .ttad-table-title,
      .ttad-table-author {
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      .ttad-table-wrap {
        width: 100%;
        max-width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
      }

      .ttad-table {
        width: 100%;
      }

      .ttad-modal-overlay {
        width: 100%;
        max-width: 100%;
        min-height: 100dvh;
      }

      .ttad-modal-panel {
        width: min(640px, 100%);
        min-width: 0;
      }

      .ttad-modal-body {
        min-height: 0;
        overscroll-behavior: contain;
      }

      /* ---------- Wide desktop ---------- */
      @media (min-width: 1441px) {
        .ttad-content {
          padding-left: clamp(24px, 2.5vw, 48px);
          padding-right: clamp(24px, 2.5vw, 48px);
        }
      }

      /* ---------- Laptop / smaller desktop ---------- */
      @media (max-width: 1180px) {
        .ttad-body-grid {
          grid-template-columns: minmax(0, 1fr);
        }

        .ttad-right-col {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .ttad-stats-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      /* ---------- Tablet ---------- */
      @media (max-width: 900px) {
        .ttad-topbar {
          flex-wrap: wrap;
          gap: 12px;
        }

        .ttad-search {
          flex: 1 1 260px;
          min-width: 0;
          max-width: none;
        }

        .ttad-topbar-right {
          flex: 0 1 auto;
          min-width: 0;
          flex-wrap: wrap;
        }

        .ttad-hero-top {
          flex-wrap: wrap;
        }

        .ttad-hero-meta {
          max-width: 100%;
          white-space: normal;
        }

        .ttad-hero-main {
          flex-direction: column;
          align-items: stretch;
        }

        .ttad-hero-copy,
        .ttad-hero-metrics {
          width: 100%;
        }

        .ttad-bottom-grid,
        .ttad-right-col {
          grid-template-columns: 1fr;
        }

        .ttad-directory-head {
          gap: 14px;
        }

        .ttad-tabs {
          max-width: 100%;
          overflow-x: auto;
          flex-wrap: nowrap;
          scrollbar-width: thin;
        }

        .ttad-tab {
          flex: 0 0 auto;
          white-space: nowrap;
        }

        .ttad-toolbar {
          flex-wrap: wrap;
        }

        .ttad-filter-input {
          flex: 1 1 240px;
          min-width: 0;
        }
      }

      /* ---------- Tablet portrait ---------- */
      @media (max-width: 780px) {
        .ttad-content {
          padding: 18px 16px 32px;
        }

        .ttad-topbar {
          padding: 12px 16px;
        }

        .ttad-search {
          order: 3;
          flex: 1 1 100%;
          width: 100%;
        }

        .ttad-topbar-right {
          margin-left: auto;
        }

        .ttad-stats-grid {
          grid-template-columns: 1fr;
        }

        .ttad-profile-text {
          display: none;
        }

        .ttad-hero {
          padding: 22px 18px 24px;
        }

        .ttad-hero-top {
          align-items: flex-start;
        }

        .ttad-hero-meta {
          width: 100%;
          text-align: left;
        }

        .ttad-hero-actions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .ttad-hero-actions .ttad-hero-btn {
          width: 100%;
          min-width: 0;
          justify-content: center;
        }

        .ttad-hero-metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          width: 100%;
        }

        .ttad-hero-metric {
          min-width: 0;
        }

        .ttad-directory-head {
          flex-direction: column;
          align-items: stretch;
        }

        .ttad-tabs {
          width: 100%;
        }

        .ttad-toolbar {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 10px;
        }

        .ttad-filter-input {
          grid-column: 1 / -1;
          width: 100%;
        }

        .ttad-domain-select,
        .ttad-new-entry,
        .ttad-domain-btn {
          width: 100%;
          min-width: 0;
        }

        .ttad-table {
          min-width: 620px;
        }

        .ttad-pagination {
          align-items: stretch;
        }

        .ttad-pagination-info,
        .ttad-pagination-controls {
          width: 100%;
        }

        .ttad-pagination-controls {
          justify-content: flex-start;
          flex-wrap: wrap;
        }

        .ttad-modal-overlay {
          padding: 12px;
          align-items: flex-start;
        }

        .ttad-modal-panel {
          width: 100%;
          max-width: 100%;
          max-height: calc(100dvh - 24px);
        }

        .ttad-modal-head,
        .ttad-modal-body,
        .ttad-modal-footer {
          padding-left: 16px;
          padding-right: 16px;
        }

        .ttad-modal-footer {
          flex-wrap: wrap;
        }

        .ttad-modal-footer button {
          flex: 1 1 150px;
          min-width: 0;
        }
      }

      /* ---------- Mobile ---------- */
      @media (max-width: 520px) {
        .ttad-content {
          padding: 12px 10px 24px;
        }

        .ttad-topbar {
          padding: 10px;
          gap: 10px;
        }

        .ttad-topbar-right {
          width: 100%;
          justify-content: flex-end;
        }

        .ttad-status-pill {
          font-size: 10px;
          padding: 7px 9px;
        }

        .ttad-avatar,
        .techtorch-avatar {
          width: 34px;
          height: 34px;
        }

        .ttad-notif-panel {
          position: fixed;
          top: 58px;
          left: 10px;
          right: 10px;
          width: auto;
          max-width: none;
          z-index: 9999;
        }

        .ttad-hero {
          padding: 18px 14px 20px;
          border-radius: 14px;
        }

        .ttad-hero-badge {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ttad-hero-copy h1 {
          font-size: clamp(24px, 8vw, 30px);
          line-height: 1.08;
        }

        .ttad-hero-copy p {
          font-size: 12.5px;
          line-height: 1.55;
        }

        .ttad-hero-actions {
          grid-template-columns: 1fr;
        }

        .ttad-hero-actions .ttad-hero-btn {
          min-height: 40px;
        }

        .ttad-hero-metrics {
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          padding: 5px !important;
        }

        .ttad-hero-metric {
          padding: 9px 7px;
          gap: 7px;
        }

        .ttad-hero-metric-value {
          font-size: 16px;
        }

        .ttad-hero-metric-label {
          font-size: 9.5px;
          line-height: 1.25;
          overflow-wrap: anywhere;
        }

        .ttad-stat-card {
          padding: 16px;
        }

        .ttad-stat-value {
          font-size: 24px;
        }

        .ttad-directory {
          overflow: visible;
        }

        .ttad-directory-head {
          padding: 16px;
        }

        .ttad-directory-head h2 {
          font-size: 22px;
        }

        .ttad-tabs {
          margin-right: -16px;
          padding-right: 16px;
        }

        .ttad-tab {
          font-size: 11px;
          padding: 8px 10px;
        }

        .ttad-toolbar {
          grid-template-columns: 1fr;
          padding: 12px 16px;
        }

        .ttad-filter-input {
          grid-column: auto;
        }

        .ttad-table-wrap {
          margin: 0;
        }

        .ttad-table {
          min-width: 600px;
        }

        .ttad-pagination {
          padding: 12px 16px;
        }

        .ttad-pagination-controls {
          gap: 5px;
        }

        .ttad-page-btn {
          padding: 7px 9px;
        }

        .ttad-page-num {
          width: 28px;
          height: 28px;
        }

        .ttad-trend-card,
        .ttad-panel {
          padding: 16px;
        }

        .ttad-cdn-card {
          flex-direction: column;
          align-items: stretch;
        }

        .ttad-cdn-visual,
        .ttad-cdn-body {
          width: 100%;
        }

        .ttad-cdn-visual {
          height: 150px;
        }

        .ttad-edge-row {
          align-items: flex-start;
        }

        .ttad-edge-name {
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .ttad-edge-value {
          flex-shrink: 0;
        }

        .ttad-modal-overlay {
          padding: 8px;
        }

        .ttad-modal-panel {
          max-height: calc(100dvh - 16px);
          border-radius: 12px;
        }

        .ttad-modal-head {
          padding: 14px;
        }

        .ttad-modal-body {
          padding: 14px;
          gap: 14px;
        }

        .ttad-modal-footer {
          padding: 12px 14px;
          flex-direction: column;
        }

        .ttad-modal-footer button {
          width: 100%;
          flex: none;
        }

        .ttad-form-field-head {
          align-items: flex-start;
          flex-direction: column;
          gap: 3px;
        }

        .ttad-form-hint {
          white-space: normal;
        }

        .ttad-form-input {
          min-width: 0;
          font-size: 16px;
        }

        .ttad-form-radio,
        .ttad-form-checkbox {
          align-items: flex-start;
          line-height: 1.4;
        }
      }

      /* ---------- Very small phones ---------- */
      @media (max-width: 360px) {
        .ttad-content {
          padding-left: 7px;
          padding-right: 7px;
        }

        .ttad-topbar {
          padding-left: 7px;
          padding-right: 7px;
        }

        .ttad-hero {
          padding-left: 11px;
          padding-right: 11px;
        }

        .ttad-hero-metrics {
          grid-template-columns: 1fr;
        }

        .ttad-hero-metric {
          display: flex;
          justify-content: flex-start;
        }

        .ttad-status-pill {
          display: none;
        }
      }


      /* ================================================================
         SIDEBAR + FINAL RESPONSIVE FIXES
         (ye block hamesha sabse neeche rahe, taaki upar ke rules override ho)
         ================================================================ */

      /* sticky topbar tootne se bachane ke liye: hidden ki jagah clip */
      html, body { overflow-x: clip; }
      .ttad-root { overflow-x: clip; }

      .ttad-menu-btn {
        display: none;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        flex-shrink: 0;
        border: 1px solid var(--ttad-border);
        background: #fff;
        border-radius: 10px;
        cursor: pointer;
        color: var(--ttad-text);
      }

      .ttad-sb-overlay {
        position: fixed;
        inset: 0;
        z-index: 40;
        background: rgba(20, 15, 25, 0.5);
      }

      /* ---------- Desktop: sidebar 256px (Tailwind w-64) fixed ---------- */
      @media (min-width: 1024px) {
        .ttad-root .ttad-main {
          margin-left: 0px;
          width:100%;
          max-width: 100%;
        }
        .ttad-sb-overlay { display: none; }
      }

      /* Sidebar ki wajah se content 256px chhota hua, isliye breakpoints aage */
      @media (min-width: 1024px) and (max-width: 1279px) {
        .ttad-body-grid { grid-template-columns: minmax(0, 1fr); }
        .ttad-right-col {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
      @media (min-width: 1181px) and (max-width: 1279px) {
        .ttad-stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }

      /* ---------- Tablet + Mobile: hamburger dikhao ---------- */
      @media (max-width: 1023px) {
        .ttad-menu-btn { display: flex; }
      }

      /* Topbar: pehli line = hamburger + right side, doosri line = search */
      @media (max-width: 900px) {
        .ttad-root .ttad-topbar { flex-wrap: wrap; }
        .ttad-root .ttad-search { order: 3; flex: 1 1 100%; width: 100%; max-width: none; }
        .ttad-root .ttad-topbar-right { width: auto; margin-left: auto; flex-wrap: nowrap; }
      }

      /* Phone: "Production Gateway Live" sirf green dot bane, taaki topbar ek line mein aaye */
      @media (max-width: 520px) {
        .ttad-root .ttad-status-pill {
          font-size: 0;
          gap: 0;
          padding: 0;
          width: 36px;
          height: 36px;
          justify-content: center;
        }
        .ttad-root .ttad-status-pill span { display: block; }
        .ttad-root .ttad-status-dot { width: 9px; height: 9px; }
      }
      @media (max-width: 360px) {
        .ttad-root .ttad-status-pill { display: flex; }
      }

    `}</style>
  );
}