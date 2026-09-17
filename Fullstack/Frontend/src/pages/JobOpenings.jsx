import { useState, useRef, useEffect, useMemo } from "react";
import {
  Search, ChevronDown, Eye, Save, TriangleAlert, Bell, Bold, Italic,
  Link2, AlignLeft, ChevronRight, Code2, Plus, Pencil, Copy, ExternalLink,
  Trash2, Users, ShieldCheck, Cloud, PenTool, Zap, FileText,
  Briefcase, Radio, X, Check,
} from "lucide-react";

const ACCENT = "#780042";

const REQ_FORMATS = [
  { label: "Full-Time Enterprise Requisition", icon: Briefcase },
  { label: "Contract / Advisory Specialist", icon: FileText },
  { label: "Campus & Leadership Fellow", icon: Users },
];

const DEPARTMENTS = ["Cloud & AI Engineering", "AI & Research", "Cyber Defense", "Product Experience", "Engineering"];
const LOCATIONS = ["San Francisco, CA (Hybrid)", "Zurich / Remote (EMEA)", "New York, NY (Hybrid)", "Remote (Global)", "Austin, TX (On-site)"];
const SENIORITIES = ["Principal / Staff (8+ Yrs)", "Senior (5-8 Yrs)", "Mid-Level (3-5 Yrs)", "Entry Level (0-2 Yrs)"];

const MANAGERS = [
  { initials: "ML", name: "Marcus Liu", title: "VP, Enterprise Engineering" },
  { initials: "SK", name: "Sara Kim", title: "Director, AI Platform" },
  { initials: "JT", name: "James Torres", title: "VP, Cloud Infrastructure" },
];

const RECRUITERS = [
  { initials: "EV", name: "Elena Vance", title: "Senior Staff Talent Partner", color: ACCENT },
  { initials: "RP", name: "Raj Patel", title: "Technical Recruiter", color: "#0f766e" },
  { initials: "CM", name: "Chloe Martin", title: "Talent Partner, EMEA", color: "#1d4ed8" },
];

const SCREENING_FILTERS = [
  { title: "Require 5+ Yrs Cloud Architecture", desc: "Auto-reject applicants below experience threshold." },
  { title: "Standard Enterprise Clearance", desc: "Requires clean background verification check for client environments." },
  { title: "Work Authorization Verified", desc: "US Citizen / Green Card / Authorized to work without sponsor." },
];

const SYNDICATION_DEFS = [
  { label: "LinkedIn Recruiter Sync", color: "bg-blue-500" },
  { label: "TechTorch Careers Portal", color: "bg-[#780042]" },
  { label: "Glassdoor & Indeed Enterprise", color: "bg-emerald-500" },
];

const DEPT_FILTERS = ["All Positions", "Engineering (6)", "AI & Research (3)", "Cyber Defense (3)", "Product & Design (2)"];

const NOTIFICATIONS = [
  { title: "New applicant: Principal AI Architect", time: "2m ago" },
  { title: "Marcus Liu approved a requisition", time: "1h ago" },
  { title: "Zurich req closing in 3 days", time: "5h ago" },
];

const PAGE_SIZE = 4;

function makeId(list) {
  return list.reduce((m, r) => Math.max(m, r.id), 0) + 1;
}

const INITIAL_REQUISITIONS = [
  {
    id: 1,
    icon: PenTool,
    title: "Principal Enterprise AI Solutions Architect",
    hot: true,
    department: "AI & Workflows",
    location: "San Francisco, CA (Hybrid)",
    seniority: "Principal / Staff (8+ Yrs)",
    applicants: "42 Applicants",
    sub: "6 in Technical Review",
    subColor: "text-blue-500",
    status: "Active / Open",
    statusStyle: "bg-emerald-50 text-emerald-600",
    posted: "Oct 12, 2024",
    pitch: "Lead multi-agent orchestration, autonomic enterprise platform integrations, and scalable foundation model deployments for Global 2000 clients across hybrid cloud envelopes.",
    compMin: 210000,
    compMax: 265000,
    hiringManager: MANAGERS[0],
    recruiter: RECRUITERS[0],
    urgency: "immediate",
    tags: ["Agentic AI", "Distributed Systems", "Kubernetes", "Vector Architecture"],
    checks: [true, true, true],
    syndication: [true, true, true],
    format: "Full-Time Enterprise Requisition",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Senior Zero-Trust Security Engineer",
    department: "Cyber Defense",
    location: "Zurich / Remote (EMEA)",
    seniority: "Senior (5-8 Yrs)",
    applicants: "28 Applicants",
    sub: "4 Interviewing",
    subColor: "text-blue-500",
    status: "Active / Open",
    statusStyle: "bg-emerald-50 text-emerald-600",
    posted: "Oct 08, 2024",
    pitch: "Own zero-trust network design and enforcement across every client-facing production environment.",
    compMin: 175000,
    compMax: 215000,
    hiringManager: MANAGERS[1],
    recruiter: RECRUITERS[1],
    urgency: "next-q",
    tags: ["Zero Trust", "Istio", "SOC2"],
    checks: [true, true, true],
    syndication: [true, false, true],
    format: "Full-Time Enterprise Requisition",
  },
  {
    id: 3,
    icon: Cloud,
    title: "Staff Cloud Infrastructure Architect (Kubernetes)",
    department: "Cloud Systems",
    location: "New York, NY (Hybrid)",
    seniority: "Principal / Staff (8+ Yrs)",
    applicants: "64 Applicants",
    sub: "8 in Final Round",
    subColor: "text-amber-600",
    status: "Closing Soon",
    statusStyle: "bg-amber-50 text-amber-600",
    posted: "Sep 28, 2024",
    pitch: "Design and operate multi-region Kubernetes platforms serving Global 2000 production workloads.",
    compMin: 195000,
    compMax: 240000,
    hiringManager: MANAGERS[2],
    recruiter: RECRUITERS[2],
    urgency: "immediate",
    tags: ["Kubernetes", "AWS EKS", "Terraform"],
    checks: [true, false, true],
    syndication: [true, true, false],
    format: "Full-Time Enterprise Requisition",
  },
  {
    id: 4,
    icon: PenTool,
    title: "Lead Product Designer - Enterprise Consoles",
    department: "Product Experience",
    location: "San Francisco, CA",
    seniority: "Senior (5-8 Yrs)",
    applicants: "19 Applicants",
    sub: "Draft Review",
    subColor: "text-stone-400",
    status: "Draft / Unlisted",
    statusStyle: "bg-stone-100 text-stone-500",
    posted: "Yesterday",
    draft: true,
    pitch: "Shape the design language for every enterprise console our clients touch daily.",
    compMin: 160000,
    compMax: 200000,
    hiringManager: MANAGERS[0],
    recruiter: RECRUITERS[0],
    urgency: "evergreen",
    tags: ["Design Systems", "Figma"],
    checks: [true, true, false],
    syndication: [false, true, false],
    format: "Full-Time Enterprise Requisition",
  },
];

function emptyForm() {
  return {
    id: null,
    icon: PenTool,
    format: "Full-Time Enterprise Requisition",
    department: DEPARTMENTS[0],
    location: LOCATIONS[0],
    seniority: SENIORITIES[0],
    title: "Untitled Requisition",
    pitch: "",
    compMin: 150000,
    compMax: 190000,
    hiringManager: MANAGERS[0],
    recruiter: RECRUITERS[0],
    urgency: "immediate",
    tags: [],
    checks: [true, true, true],
    syndication: [true, true, true],
  };
}

function matchesDeptFilter(department, filterLabel) {
  if (filterLabel === "All Positions") return true;
  const key = filterLabel.split(" (")[0];
  const dep = department.toLowerCase();
  if (key === "Engineering") return dep.includes("cloud") || dep.includes("engineering") || dep.includes("workflows");
  if (key === "AI & Research") return dep.includes("ai");
  if (key === "Cyber Defense") return dep.includes("cyber");
  if (key === "Product & Design") return dep.includes("product");
  return true;
}

function FieldLabel({ children }) {
  return <div className="text-[11px] font-semibold tracking-wide text-stone-400 mb-1.5">{children}</div>;
}

function TagChip({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1 bg-stone-100 border border-stone-200 rounded-md px-2 py-1 text-xs text-stone-700 mr-1.5 mb-1.5">
      {label}
      <span className="cursor-pointer text-stone-400 hover:text-stone-600" onClick={onRemove}>
        ×
      </span>
    </span>
  );
}

/** Small generic dropdown used for Department / Location / Seniority / Manager / Recruiter pickers. */
function Dropdown({ open, onClose, children, align = "left" }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      ref={ref}
      className={`absolute z-30 mt-1 w-full min-w-[220px] bg-white border border-stone-200 rounded-md shadow-lg py-1 text-sm ${
        align === "right" ? "right-0" : "left-0"
      }`}
    >
      {children}
    </div>
  );
}

function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-stone-900 text-white text-sm px-4 py-2.5 rounded-md shadow-lg">
      <Check size={14} className="text-emerald-400" />
      {toast}
    </div>
  );
}

export default function JobOpeningsCMS() {
  const [requisitions, setRequisitions] = useState(INITIAL_REQUISITIONS);
  const [form, setForm] = useState(emptyForm());
  const [editingId, setEditingId] = useState(null);

  const [deptFilter, setDeptFilter] = useState("All Positions");
  const [tableSearch, setTableSearch] = useState("");
  const [page, setPage] = useState(1);

  const [openDrop, setOpenDrop] = useState(null); // 'department' | 'location' | 'seniority' | 'manager' | 'recruiter' | null
  const [showPreview, setShowPreview] = useState(false);
  const [showNotifs, setShowNotifs] = useState(false);
  const [toast, setToast] = useState(null);
  const [newTagInput, setNewTagInput] = useState(false);
  const [tagDraft, setTagDraft] = useState("");

  const bodyRef = useRef(null);
  const [wordCount, setWordCount] = useState(0);

  function flashToast(msg) {
    setToast(msg);
    window.clearTimeout(flashToast._t);
    flashToast._t = window.setTimeout(() => setToast(null), 2200);
  }

  function updateForm(patch) {
    setForm((f) => ({ ...f, ...patch }));
  }

  function toggleCheck(idx) {
    setForm((f) => ({ ...f, checks: f.checks.map((c, i) => (i === idx ? !c : c)) }));
  }
  function toggleSyn(idx) {
    setForm((f) => ({ ...f, syndication: f.syndication.map((c, i) => (i === idx ? !c : c)) }));
  }
  function removeTag(t) {
    setForm((f) => ({ ...f, tags: f.tags.filter((x) => x !== t) }));
  }
  function confirmAddTag() {
    const val = tagDraft.trim();
    if (val) setForm((f) => ({ ...f, tags: [...f.tags, val] }));
    setTagDraft("");
    setNewTagInput(false);
  }

  function resetToNew() {
    setForm(emptyForm());
    setEditingId(null);
    flashToast("Started a new requisition");
  }

  function loadIntoEditor(r) {
    setForm({
      id: r.id,
      icon: r.icon,
      format: r.format || "Full-Time Enterprise Requisition",
      department: r.department,
      location: r.location,
      seniority: r.seniority || SENIORITIES[0],
      title: r.title,
      pitch: r.pitch || "",
      compMin: r.compMin ?? 150000,
      compMax: r.compMax ?? 190000,
      hiringManager: r.hiringManager || MANAGERS[0],
      recruiter: r.recruiter || RECRUITERS[0],
      urgency: r.urgency || "immediate",
      tags: r.tags || [],
      checks: r.checks || [true, true, true],
      syndication: r.syndication || [true, true, true],
    });
    setEditingId(r.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function duplicateRow(r) {
    const id = makeId(requisitions);
    const copy = {
      ...r,
      id,
      title: r.title + " (Copy)",
      status: "Draft / Unlisted",
      statusStyle: "bg-stone-100 text-stone-500",
      draft: true,
      applicants: "0 Applicants",
      sub: "Draft Review",
      subColor: "text-stone-400",
      posted: "Today",
    };
    setRequisitions((list) => [copy, ...list]);
    flashToast("Requisition duplicated as draft");
  }

  function deleteRow(r) {
    if (!window.confirm(`Delete "${r.title}"? This cannot be undone.`)) return;
    setRequisitions((list) => list.filter((x) => x.id !== r.id));
    if (editingId === r.id) resetToNew();
    flashToast("Requisition deleted");
  }

  function saveAs(status) {
    if (!form.title.trim()) {
      flashToast("Add a title before saving");
      return;
    }
    const statusStyle =
      status === "Active / Open"
        ? "bg-emerald-50 text-emerald-600"
        : status === "Draft / Unlisted"
        ? "bg-stone-100 text-stone-500"
        : "bg-amber-50 text-amber-600";

    setRequisitions((list) => {
      if (editingId) {
        return list.map((r) =>
          r.id === editingId
            ? { ...r, ...form, status, statusStyle, draft: status === "Draft / Unlisted" }
            : r
        );
      }
      const id = makeId(list);
      const newRow = {
        ...form,
        id,
        status,
        statusStyle,
        draft: status === "Draft / Unlisted",
        applicants: "0 Applicants",
        sub: status === "Draft / Unlisted" ? "Draft Review" : "Awaiting Review",
        subColor: "text-stone-400",
        posted: "Today",
      };
      setEditingId(id);
      return [newRow, ...list];
    });
    flashToast(status === "Draft / Unlisted" ? "Saved as draft" : "Job opening published");
  }

  function exec(cmd) {
    document.execCommand(cmd, false, null);
    if (bodyRef.current) bodyRef.current.focus();
  }

  function recomputeWordCount() {
    const bodyText = bodyRef.current ? bodyRef.current.innerText : "";
    const full = `${form.title} ${form.pitch} ${bodyText}`;
    const words = full.trim().split(/\s+/).filter(Boolean).length;
    setWordCount(words);
  }
  useEffect(() => {
    recomputeWordCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.title, form.pitch]);

  const filtered = useMemo(() => {
    const q = tableSearch.trim().toLowerCase();
    return requisitions.filter((r) => {
      const inDept = matchesDeptFilter(r.department, deptFilter);
      const inSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.department.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q);
      return inDept && inSearch;
    });
  }, [requisitions, deptFilter, tableSearch]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const clampedPage = Math.min(page, totalPages);
  const pageRows = filtered.slice((clampedPage - 1) * PAGE_SIZE, clampedPage * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [deptFilter, tableSearch]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{ fontFamily: "Inter, sans-serif" }}>
      <Toast toast={toast} />

      {showPreview && (
        <div className="fixed inset-0 z-40 bg-black/40 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative my-8">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600"
              aria-label="Close preview"
            >
              <X size={18} />
            </button>
            <div className="text-[11px] font-semibold tracking-wide text-stone-400 mb-2">LIVE PREVIEW</div>
            <h1 className="text-2xl font-semibold text-stone-900 mb-1">{form.title || "Untitled Requisition"}</h1>
            <div className="text-sm text-stone-500 mb-4">
              {form.department} · {form.location} · {form.seniority}
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">{form.pitch || "No pitch written yet."}</p>
            <div className="rounded-lg border p-4 mb-4" style={{ backgroundColor: `${ACCENT}0d`, borderColor: `${ACCENT}33` }}>
              <div className="text-[11px] font-semibold tracking-wide mb-1" style={{ color: ACCENT }}>
                COMPENSATION BAND
              </div>
              <div className="text-xl font-semibold text-stone-900">
                ${Number(form.compMin).toLocaleString()} — ${Number(form.compMax).toLocaleString()}{" "}
                <span className="text-sm font-normal text-stone-500">USD / Year Base</span>
              </div>
            </div>
            <div className="flex flex-wrap">
              {form.tags.map((t) => (
                <span key={t} className="inline-flex items-center bg-stone-100 border border-stone-200 rounded-md px-2 py-1 text-xs text-stone-700 mr-1.5 mb-1.5">
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={() => setShowPreview(false)}
              className="mt-4 w-full py-2 rounded-md text-white text-sm"
              style={{ backgroundColor: ACCENT }}
            >
              Close Preview
            </button>
          </div>
        </div>
      )}

      <div className="flex">
        <div className="flex-1 min-w-0">
          <header className="flex items-center gap-3 px-4 sm:px-6 py-3 border-b border-stone-200 bg-white flex-wrap">
            <div className="flex-1 min-w-[160px] max-w-xl relative order-3 sm:order-none basis-full sm:basis-auto">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                placeholder="Search requisitions, candidate pools, skill taxonomies..."
                className="w-full pl-9 pr-3 py-2 rounded-md bg-stone-50 border border-stone-200 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="ml-auto flex items-center gap-4">
              <span className="hidden md:flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Talent Pipeline Gateway Live
              </span>

              <div className="relative">
                <button
                  type="button"
                  aria-label="Notifications"
                  onClick={() => setShowNotifs((s) => !s)}
                  className="relative text-stone-400 hover:text-stone-600"
                >
                  <Bell size={18} />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-rose-500" />
                </button>
                <Dropdown open={showNotifs} onClose={() => setShowNotifs(false)} align="right">
                  <div className="px-3 py-2 text-xs font-semibold text-stone-400 border-b border-stone-100">NOTIFICATIONS</div>
                  {NOTIFICATIONS.map((n) => (
                    <div key={n.title} className="px-3 py-2 hover:bg-stone-50 cursor-default">
                      <div className="text-stone-700">{n.title}</div>
                      <div className="text-xs text-stone-400">{n.time}</div>
                    </div>
                  ))}
                </Dropdown>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-sm text-right">
                <div>
                  <div className="font-medium leading-tight">Admin / Recruiter</div>
                  <div className="text-xs text-stone-400 leading-tight">Editorial &amp; Talent Lead</div>
                </div>
                <div className="w-8 h-8 rounded-full text-white text-xs flex items-center justify-center font-semibold" style={{ backgroundColor: ACCENT }}>
                  AD
                </div>
              </div>
            </div>
          </header>

          <main className="p-4 sm:p-6 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <span>TechTorch Talent</span>
                <span>/</span>
                <span>Job Openings</span>
                <span>/</span>
                <span className="font-medium" style={{ color: ACCENT }}>
                  {editingId ? "Edit Job" : "Post New Job"}
                </span>
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs px-2 py-0.5 rounded-full ml-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Draft Auto-Saved
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPreview(true)}
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 bg-white"
                >
                  <Eye size={14} /> Preview Requisition
                </button>
                <button
                  onClick={() => saveAs("Draft / Unlisted")}
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 bg-white"
                >
                  <Save size={14} /> Save as Draft
                </button>
                <button
                  onClick={() => saveAs("Active / Open")}
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  <TriangleAlert size={14} /> Publish Job Opening
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Editor column */}
              <div className="flex-1 min-w-0 bg-white rounded-lg border border-stone-200 p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-semibold tracking-wide text-stone-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                    REQUISITION FORMAT — SELECT SCHEMA ARCHETYPE
                  </div>
                  <span className="text-xs text-stone-400 font-mono">
                    ID: REQ-2026-{form.id ? String(form.id).padStart(2, "0") : "NEW"}
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap -mt-3">
                  {REQ_FORMATS.map((f) => {
                    const Icon = f.icon;
                    const isActive = form.format === f.label;
                    return (
                      <button
                        key={f.label}
                        onClick={() => updateForm({ format: f.label })}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm border ${
                          isActive ? "text-white border-transparent" : "border-stone-200 text-stone-600 hover:bg-stone-50"
                        }`}
                        style={isActive ? { backgroundColor: ACCENT } : {}}
                      >
                        <Icon size={14} /> {f.label}
                        {isActive && <span className="bg-white/20 text-[10px] px-1.5 py-0.5 rounded font-semibold">ACTIVE</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Three meta fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="relative">
                    <FieldLabel>DEPARTMENT</FieldLabel>
                    <button
                      onClick={() => setOpenDrop(openDrop === "department" ? null : "department")}
                      className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm bg-stone-50 text-left"
                    >
                      {form.department} <ChevronDown size={14} className="text-stone-400" />
                    </button>
                    <Dropdown open={openDrop === "department"} onClose={() => setOpenDrop(null)}>
                      {DEPARTMENTS.map((d) => (
                        <button
                          key={d}
                          onClick={() => {
                            updateForm({ department: d });
                            setOpenDrop(null);
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-stone-50"
                        >
                          {d}
                        </button>
                      ))}
                    </Dropdown>
                  </div>
                  <div className="relative">
                    <FieldLabel>LOCATION &amp; ARRANGEMENT</FieldLabel>
                    <button
                      onClick={() => setOpenDrop(openDrop === "location" ? null : "location")}
                      className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm bg-stone-50 text-left"
                    >
                      {form.location} <ChevronDown size={14} className="text-stone-400" />
                    </button>
                    <Dropdown open={openDrop === "location"} onClose={() => setOpenDrop(null)}>
                      {LOCATIONS.map((l) => (
                        <button
                          key={l}
                          onClick={() => {
                            updateForm({ location: l });
                            setOpenDrop(null);
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-stone-50"
                        >
                          {l}
                        </button>
                      ))}
                    </Dropdown>
                  </div>
                  <div className="relative">
                    <FieldLabel>SENIORITY LEVEL</FieldLabel>
                    <button
                      onClick={() => setOpenDrop(openDrop === "seniority" ? null : "seniority")}
                      className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm bg-stone-50 text-left"
                    >
                      {form.seniority} <ChevronDown size={14} className="text-stone-400" />
                    </button>
                    <Dropdown open={openDrop === "seniority"} onClose={() => setOpenDrop(null)}>
                      {SENIORITIES.map((s) => (
                        <button
                          key={s}
                          onClick={() => {
                            updateForm({ seniority: s });
                            setOpenDrop(null);
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-stone-50"
                        >
                          {s}
                        </button>
                      ))}
                    </Dropdown>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <FieldLabel>OFFICIAL REQUISITION TITLE</FieldLabel>
                  <input
                    value={form.title}
                    onChange={(e) => updateForm({ title: e.target.value })}
                    className="w-full text-2xl font-semibold leading-tight text-stone-900 border border-stone-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2"
                  />
                </div>

                {/* Pitch */}
                <div>
                  <FieldLabel>EXECUTIVE VALUE PROPOSITION &amp; PITCH</FieldLabel>
                  <textarea
                    value={form.pitch}
                    onChange={(e) => updateForm({ pitch: e.target.value })}
                    rows={3}
                    className="w-full border border-stone-200 rounded-md px-4 py-3 text-sm text-stone-600 leading-relaxed bg-stone-50 focus:outline-none focus:ring-2 resize-y"
                    placeholder="Lead multi-agent orchestration, autonomic enterprise platform integrations..."
                  />
                </div>

                {/* Rich text toolbar */}
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-1 text-stone-500">
                    <button type="button" onClick={() => exec("formatBlock")} className="text-sm font-medium px-2 hover:text-stone-800">H1</button>
                    <button type="button" onClick={() => exec("formatBlock")} className="text-sm font-medium px-2 hover:text-stone-800">H2</button>
                    <span className="w-px h-4 bg-stone-200 mx-1" />
                    <button type="button" onClick={() => exec("bold")} className="hover:text-stone-800"><Bold size={15} className="mx-1.5" /></button>
                    <button type="button" onClick={() => exec("italic")} className="hover:text-stone-800"><Italic size={15} className="mx-1.5" /></button>
                    <button type="button" onClick={() => exec("createLink")} className="hover:text-stone-800"><Link2 size={15} className="mx-1.5" /></button>
                    <button type="button" onClick={() => exec("justifyLeft")} className="hover:text-stone-800"><AlignLeft size={15} className="mx-1.5" /></button>
                    <button type="button" onClick={() => exec("indent")} className="hover:text-stone-800"><ChevronRight size={15} className="mx-1.5" /></button>
                    <button type="button" onClick={() => exec("formatBlock")} className="hover:text-stone-800"><Code2 size={15} className="mx-1.5" /></button>
                  </div>
                  <span className="text-xs text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live Spellcheck &amp; Policy Guard Active
                  </span>
                </div>

                {/* Body content - editable in place, click any paragraph or list to type */}
                <div
                  ref={bodyRef}
                  contentEditable
                  suppressContentEditableWarning
                  onInput={recomputeWordCount}
                  className="text-sm leading-relaxed text-stone-700 space-y-5 outline-none"
                >
                  <div>
                    <h3 className="font-semibold text-stone-900 flex items-center gap-2 mb-2">
                      <span className="w-1 h-4 rounded-sm" style={{ backgroundColor: ACCENT }} />
                      About the Role &amp; Strategic Impact
                    </h3>
                    <p className="mb-3">
                      As a <span className="font-semibold text-stone-900">{form.title || "this role"}</span> at
                      TechTorch, you will stand at the intersection of autonomic multi-agent design and mission-critical
                      cloud backbones. You will design, benchmark, and deploy self-optimizing distributed architectures
                      that convert ambiguous business requirements into deterministic, policy-constrained generative
                      agent ecosystems.
                    </p>
                    <p>
                      This role directly advises Global 2000 Chief Technology Officers and Engineering VPs, ensuring
                      enterprise AI workloads execute with verifiable zero-trust guarantees, sub-25ms vector retrieval
                      latencies, and rigorous regulatory compliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-stone-900 flex items-center gap-2 mb-2">
                      <span className="w-1 h-4 rounded-sm" style={{ backgroundColor: ACCENT }} />
                      Key Responsibilities &amp; Deliverables
                    </h3>
                    <ul className="space-y-2 list-disc list-outside ml-4">
                      <li>Architect and deliver end-to-end multi-agent orchestration fabrics across hybrid Kubernetes clusters (AWS EKS, Azure AKS, GCP GKE).</li>
                      <li>Spearhead client reference implementations incorporating semantic routing, high-throughput vector databases, and real-time state synchronizers.</li>
                      <li>Partner with internal Security Officers to enforce SOC2 Type II, FedRAMP, and HIPAA guardrails across dynamic inference pipelines.</li>
                      <li>Act as the primary technical authority in executive architecture reviews, post-mortems, and high-stakes production go-lives.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-stone-900 flex items-center gap-2 mb-2">
                      <span className="w-1 h-4 rounded-sm" style={{ backgroundColor: ACCENT }} />
                      Required Qualifications &amp; Technical Depth
                    </h3>
                    <ul className="space-y-2 list-disc list-outside ml-4">
                      <li>8+ years of production experience in distributed systems engineering (Go, Python, Rust, or modern C++).</li>
                      <li>Deep mastery of container orchestrators, service meshes (Istio/Envoy), and zero-trust perimeter network topologies.</li>
                      <li>Proven track record architecting LLM-driven autonomous systems, RAG pipelines, and high-concurrency vector indexes (Milvus, Pinecone, pgvector).</li>
                      <li>Exceptional client-facing technical communication skills; comfortable presenting before Board-level stakeholders.</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border p-4" style={{ backgroundColor: `${ACCENT}0d`, borderColor: `${ACCENT}33` }}>
                  <div className="text-[11px] font-semibold tracking-wide mb-1" style={{ color: ACCENT }}>
                    ENTERPRISE COMPENSATION BAND
                  </div>
                  <div className="text-2xl font-semibold text-stone-900 flex flex-wrap items-center gap-1">
                    $
                    <input
                      type="number"
                      value={form.compMin}
                      onChange={(e) => updateForm({ compMin: Number(e.target.value) })}
                      className="w-28 bg-transparent border-b border-stone-300 focus:outline-none focus:border-stone-500"
                    />
                    <span>—</span>
                    $
                    <input
                      type="number"
                      value={form.compMax}
                      onChange={(e) => updateForm({ compMax: Number(e.target.value) })}
                      className="w-28 bg-transparent border-b border-stone-300 focus:outline-none focus:border-stone-500"
                    />
                    <span className="text-sm font-normal text-stone-500">USD / Year Base</span>
                  </div>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-stone-600 mt-1.5 outline-none"
                  >
                    Plus top-tier equity package (ISO/NSO), comprehensive 401(k) matching, complete family
                    healthcare benefits, and annual executive continuous education allowances.
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-400 border-t border-stone-100 pt-3">
                  <span>Editable in place · Markdown &amp; LaTeX support enabled</span>
                  <span className="font-mono">
                    {wordCount} words · {(form.title.length + form.pitch.length)} characters · {Math.max(1, Math.round(wordCount / 200))} min read
                  </span>
                </div>
              </div>

              {/* Right rail */}
              <div className="w-full lg:w-80 shrink-0 space-y-4">
                <div className="bg-white rounded-lg border border-stone-200 p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-2">
                      <Users size={16} className="mt-0.5" style={{ color: ACCENT }} />
                      <div>
                        <div className="font-medium text-sm">Job Settings &amp; Pipeline</div>
                        <div className="text-xs text-stone-400">Ownership &amp; Routing</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-rose-50 px-2 py-0.5 rounded-full font-medium whitespace-nowrap" style={{ color: ACCENT }}>
                      PIPELINE CONFIG
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <FieldLabel>HIRING MANAGER</FieldLabel>
                      <button
                        onClick={() => setOpenDrop(openDrop === "manager" ? null : "manager")}
                        className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm text-left"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-stone-900 text-white text-[10px] flex items-center justify-center font-semibold">
                            {form.hiringManager.initials}
                          </span>
                          <span>
                            {form.hiringManager.name}
                            <span className="block text-xs text-stone-400">{form.hiringManager.title}</span>
                          </span>
                        </span>
                        <ChevronDown size={14} className="text-stone-400 shrink-0" />
                      </button>
                      <Dropdown open={openDrop === "manager"} onClose={() => setOpenDrop(null)}>
                        {MANAGERS.map((m) => (
                          <button
                            key={m.name}
                            onClick={() => {
                              updateForm({ hiringManager: m });
                              setOpenDrop(null);
                            }}
                            className="w-full flex items-center gap-2 text-left px-3 py-2 hover:bg-stone-50"
                          >
                            <span className="w-6 h-6 rounded-full bg-stone-900 text-white text-[9px] flex items-center justify-center font-semibold">
                              {m.initials}
                            </span>
                            <span>
                              {m.name}
                              <span className="block text-xs text-stone-400">{m.title}</span>
                            </span>
                          </button>
                        ))}
                      </Dropdown>
                    </div>

                    <div className="relative">
                      <FieldLabel>LEAD TECHNICAL RECRUITER</FieldLabel>
                      <button
                        onClick={() => setOpenDrop(openDrop === "recruiter" ? null : "recruiter")}
                        className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm text-left"
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className="w-7 h-7 rounded-full text-white text-[10px] flex items-center justify-center font-semibold"
                            style={{ backgroundColor: form.recruiter.color || ACCENT }}
                          >
                            {form.recruiter.initials}
                          </span>
                          <span>
                            {form.recruiter.name}
                            <span className="block text-xs text-stone-400">{form.recruiter.title}</span>
                          </span>
                        </span>
                        <ChevronDown size={14} className="text-stone-400 shrink-0" />
                      </button>
                      <Dropdown open={openDrop === "recruiter"} onClose={() => setOpenDrop(null)}>
                        {RECRUITERS.map((r) => (
                          <button
                            key={r.name}
                            onClick={() => {
                              updateForm({ recruiter: r });
                              setOpenDrop(null);
                            }}
                            className="w-full flex items-center gap-2 text-left px-3 py-2 hover:bg-stone-50"
                          >
                            <span
                              className="w-6 h-6 rounded-full text-white text-[9px] flex items-center justify-center font-semibold"
                              style={{ backgroundColor: r.color || ACCENT }}
                            >
                              {r.initials}
                            </span>
                            <span>
                              {r.name}
                              <span className="block text-xs text-stone-400">{r.title}</span>
                            </span>
                          </button>
                        ))}
                      </Dropdown>
                    </div>

                    <div>
                      <FieldLabel>COST CENTER &amp; ENTITY</FieldLabel>
                      <div className="border border-stone-200 rounded-md px-3 py-2 text-sm font-mono bg-stone-50">
                        Engineering Services / Cost Cen
                      </div>
                    </div>

                    <div>
                      <FieldLabel>HIRING URGENCY</FieldLabel>
                      <div className="space-y-2 text-sm">
                        {[
                          { key: "immediate", label: "Immediate Priority (30 Days)" },
                          { key: "next-q", label: "Next Fiscal Quarter (Q1 2025)" },
                          { key: "evergreen", label: "Continuous Talent Pool / Evergreen" },
                        ].map((opt) => (
                          <label key={opt.key} className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="urgency"
                              checked={form.urgency === opt.key}
                              onChange={() => updateForm({ urgency: opt.key })}
                              style={{ accentColor: ACCENT }}
                            />
                            <span className={form.urgency === opt.key ? "font-medium" : "text-stone-500"}>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <FieldLabel>SKILL TAXONOMY TAGS</FieldLabel>
                        <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full -mt-3">
                          {form.tags.length} Assigned
                        </span>
                      </div>
                      <div className="flex flex-wrap">
                        {form.tags.map((t) => (
                          <TagChip key={t} label={t} onRemove={() => removeTag(t)} />
                        ))}
                      </div>
                      {newTagInput ? (
                        <div className="flex gap-1.5 mt-1">
                          <input
                            autoFocus
                            value={tagDraft}
                            onChange={(e) => setTagDraft(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && confirmAddTag()}
                            placeholder="New skill tag"
                            className="flex-1 border border-stone-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-2"
                          />
                          <button
                            onClick={confirmAddTag}
                            className="px-2.5 rounded-md text-white text-xs"
                            style={{ backgroundColor: ACCENT }}
                          >
                            Add
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setNewTagInput(true)}
                          className="w-full flex items-center justify-center gap-1 border border-stone-200 rounded-md py-1.5 text-xs text-stone-500 hover:bg-stone-50 mt-1"
                        >
                          <Plus size={12} /> Add Skill Tag
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-stone-200 p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-2">
                      <ShieldCheck size={16} className="mt-0.5 text-emerald-500" />
                      <div>
                        <div className="font-medium text-sm">AI Screening &amp; Filters</div>
                        <div className="text-xs text-stone-400">Autonomous Evaluation</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                      AUTO-FILTER
                    </span>
                  </div>

                  <div className="space-y-3">
                    {SCREENING_FILTERS.map((f, i) => (
                      <label key={f.title} className="flex items-start gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={form.checks[i]}
                          onChange={() => toggleCheck(i)}
                          className="mt-0.5"
                          style={{ accentColor: ACCENT }}
                        />
                        <span>
                          <span className="font-medium text-stone-800">{f.title}</span>
                          <span className="block text-xs text-stone-400 leading-snug">{f.desc}</span>
                        </span>
                      </label>
                    ))}
                  </div>

                  <FieldLabel>
                    <span className="block mt-4">TALENT SYNDICATION CHANNELS</span>
                  </FieldLabel>
                  <div className="space-y-2.5">
                    {SYNDICATION_DEFS.map((s, i) => (
                      <label key={s.label} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-stone-700">
                          <span className={`w-2 h-2 rounded-full ${s.color}`} /> {s.label}
                        </span>
                        <input
                          type="checkbox"
                          checked={form.syndication[i]}
                          onChange={() => toggleSyn(i)}
                          style={{ accentColor: ACCENT }}
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-amber-800 mb-1.5">
                    <Zap size={14} /> Talent Advisory Note
                  </div>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    Requisitions featuring explicit compensation bands and structured qualifications receive an
                    average of 46% higher qualified applicant velocity within the first 72 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Active requisitions table */}
            <div className="bg-white rounded-lg border border-stone-200 p-5">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-rose-50 flex items-center justify-center" style={{ color: ACCENT }}>
                    <Briefcase size={16} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-medium text-sm">
                      Active Job Requisitions &amp; Pipeline
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}>
                        {requisitions.length} Total Openings
                      </span>
                    </div>
                    <div className="text-xs text-stone-400">
                      Corporate openings, candidate pipeline distribution, and syndication status.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-center">
                <div className="relative w-full sm:flex-1 sm:max-w-sm">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    value={tableSearch}
                    onChange={(e) => setTableSearch(e.target.value)}
                    placeholder="Filter jobs by title, department, location..."
                    className="w-full pl-8 pr-3 py-1.5 rounded-md border border-stone-200 text-sm placeholder:text-stone-400"
                  />
                </div>
                <button
                  onClick={resetToNew}
                  className="flex items-center justify-center gap-1.5 text-sm px-3 py-1.5 rounded-md text-white whitespace-nowrap w-full sm:w-auto"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Plus size={14} /> Post New Requisition
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs mb-4 overflow-x-auto -mx-1 px-1">
                {DEPT_FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setDeptFilter(f)}
                    className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full border ${
                      deptFilter === f ? "text-white border-transparent" : "border-stone-200 text-stone-500 hover:bg-stone-50"
                    }`}
                    style={deptFilter === f ? { backgroundColor: "#1c1917" } : {}}
                  >
                    {f}
                  </button>
                ))}
                <span className="ml-auto shrink-0 whitespace-nowrap text-stone-400 flex items-center gap-1">
                  <Radio size={12} style={{ color: ACCENT }} /> Global Talent Wire Active
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[720px]">
                  <thead>
                    <tr className="text-left text-[11px] text-stone-400 tracking-wide border-b border-stone-100">
                      <th className="pb-2 font-semibold">REQUISITION TITLE &amp; IDENTIFIER</th>
                      <th className="pb-2 font-semibold">DEPARTMENT</th>
                      <th className="pb-2 font-semibold">LOCATION</th>
                      <th className="pb-2 font-semibold">APPLICANT VELOCITY</th>
                      <th className="pb-2 font-semibold">STATUS</th>
                      <th className="pb-2 font-semibold">POSTED DATE</th>
                      <th className="pb-2 font-semibold text-right">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageRows.length === 0 && (
                      <tr>
                        <td colSpan={7} className="py-6 text-center text-stone-400 text-sm">
                          No requisitions match your filters.
                        </td>
                      </tr>
                    )}
                    {pageRows.map((r) => {
                      const Icon = r.icon;
                      return (
                        <tr key={r.id} className="border-b border-stone-50 align-top">
                          <td className="py-3 pr-4 max-w-xs">
                            <div className="flex gap-2">
                              <span
                                className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                                style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
                              >
                                <Icon size={14} />
                              </span>
                              <div>
                                <div className="flex items-center gap-2 font-medium">
                                  {r.title}
                                  {r.hot && <span className="text-[10px] text-rose-500 font-semibold">HOT</span>}
                                  {editingId === r.id && (
                                    <span className="text-[10px] text-stone-400 font-normal">(editing)</span>
                                  )}
                                </div>
                                <div className="text-xs text-stone-400 mt-0.5 font-mono">
                                  /careers/requisition-{r.id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 pr-4 text-stone-600">{r.department}</td>
                          <td className="py-3 pr-4 text-stone-600">{r.location}</td>
                          <td className="py-3 pr-4">
                            <div className="text-stone-700 font-medium">{r.applicants}</div>
                            <div className={`text-xs ${r.subColor}`}>{r.sub}</div>
                          </td>
                          <td className="py-3 pr-4">
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${r.statusStyle}`}>{r.status}</span>
                          </td>
                          <td className="py-3 pr-4 text-stone-500">{r.posted}</td>
                          <td className="py-3 text-right">
                            <div className="flex items-center justify-end gap-2 text-stone-400">
                              <button aria-label="Edit" onClick={() => loadIntoEditor(r)}>
                                <Pencil size={14} className="cursor-pointer hover:text-stone-600" />
                              </button>
                              <button aria-label="Duplicate" onClick={() => duplicateRow(r)}>
                                <Copy size={14} className="cursor-pointer hover:text-stone-600" />
                              </button>
                              {r.draft ? (
                                <button aria-label="Delete" onClick={() => deleteRow(r)}>
                                  <Trash2 size={14} className="cursor-pointer hover:text-rose-500" />
                                </button>
                              ) : (
                                <button
                                  aria-label="View listing"
                                  onClick={() => {
                                    loadIntoEditor(r);
                                    setShowPreview(true);
                                  }}
                                >
                                  <ExternalLink size={14} className="cursor-pointer hover:text-stone-600" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3 mt-4 text-sm">
                <span className="text-stone-400 text-xs">
                  Showing {filtered.length === 0 ? 0 : (clampedPage - 1) * PAGE_SIZE + 1} to{" "}
                  {Math.min(clampedPage * PAGE_SIZE, filtered.length)} of {filtered.length} requisitions
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={clampedPage === 1}
                    className="px-3 py-1.5 rounded-md border border-stone-200 text-stone-500 text-xs hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-7 h-7 rounded-md text-xs ${
                        p === clampedPage ? "text-white" : "border border-stone-200 text-stone-500 hover:bg-stone-50"
                      }`}
                      style={p === clampedPage ? { backgroundColor: ACCENT } : {}}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={clampedPage === totalPages}
                    className="px-3 py-1.5 rounded-md border border-stone-200 text-stone-500 text-xs hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
