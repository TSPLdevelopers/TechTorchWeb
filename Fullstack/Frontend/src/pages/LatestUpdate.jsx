import { useState, useRef, useEffect, useMemo } from "react";
import {
  Search, Bell, History, ChevronDown, ChevronRight, Save, ArrowRight, CircleCheck,
  UploadCloud, FileType2, Download, Trash2, GripVertical, Plus,
  BarChart3, PenSquare, Archive, ClipboardList, RefreshCw, X, Check, PencilLine, Send,
} from "lucide-react";
import {
  getWhitepapers,
  createWhitepaper,
  updateWhitepaper,
  deleteWhitepaper,
} from "../api/adminDashboardApi";
 
const ACCENT = "#780042";
const FONT = "Inter, sans-serif";
 
const DOMAINS = [
  "Autonomous Intelligence & Cloud Modernization",
  "Zero-Trust Security & Compliance",
  "Data Fabric & Vector Architecture",
  "Enterprise Platform Engineering",
];
 
const CHANGELOG = [
  { version: "V2026.4", note: "Published Q2 2026 Strategic Advisory whitepaper.", time: "2 days ago" },
  { version: "V2026.3", note: "Updated lead-gen gating rules for tier-1 accounts.", time: "3 weeks ago" },
  { version: "V2026.2", note: "Archived Legacy Core Modernization roadmap.", time: "1 month ago" },
];
 
const NOTIFICATIONS = [
  { title: "New download spike on Autonomous Fabric paper", time: "12m ago" },
  { title: "Peer review requested on draft TT-812", time: "3h ago" },
  { title: "Citation index updated for TT-740", time: "1d ago" },
];
 
function makeId(list) {
  return list.reduce((m, r) => Math.max(m, r.id), 0) + 1;
}
 
const INITIAL_RELEASES = [
  {
    id: 1,
    status: "published",
    tag: "Latest Published Update • May 2026",
    tagStyle: "bg-rose-50 text-rose-500",
    published: "Published: May 2026",
    title: "Autonomous Architecture & Quantum-Safe AI Fabric (2026 Update)",
    architects: "Dr. Aris Thorne & TechTorch Enterprise Architecture Group",
    domain: DOMAINS[0],
    abstract:
      "This latest edition provides real-world benchmarks, operational blueprints, and risk-mitigation frameworks for migrating mission-critical workloads to autonomous agentic architectures in 2026.",
    meta: "Series TT-802 • Primary Architect: Dr. Aris Thorne",
    stats: [
      { label: "DOWNLOADS", value: "4,180", sub: "+38% WoW", subColor: "text-emerald-600" },
      { label: "LEAD CONVERSION", value: "46.2%", sub: "Verified CXOs", subColor: "text-stone-400" },
      { label: "AVG. READ TIME", value: "18.2m", sub: "82% Complete", subColor: "text-stone-400" },
    ],
    download: true,
  },
  {
    id: 2,
    status: "published",
    tag: "Previous Release • Feb 2026",
    tagStyle: "bg-stone-100 text-stone-500",
    published: "Published: Feb 2026",
    title: "Legacy Core Modernization: Event-Driven Migration Roadmap",
    architects: "Kunal Purohit",
    domain: DOMAINS[3],
    abstract: "A benchmark study of event-driven migration patterns for legacy monoliths moving to composable services.",
    meta: "Series TT-740 • Primary Architect: Kunal Purohit",
    stats: [
      { label: "DOWNLOADS", value: "6,840", sub: "Cumulative", subColor: "text-stone-400" },
      { label: "LIFECYCLE", value: "Active Reference", sub: "Historical Benchmark", subColor: "text-stone-400", isText: true },
      { label: "CITATION INDEX", value: "99.1", sub: "Top Tier", subColor: "text-stone-400" },
    ],
    revise: true,
  },
  {
    id: 3,
    status: "draft",
    tag: "Under Peer Review • Draft",
    tagStyle: "bg-amber-50 text-amber-600",
    published: "Last edited: 2 days ago",
    title: "Vector Database Consolidation for Regulated Industries",
    architects: "Priya Nair",
    domain: DOMAINS[2],
    abstract: "A working draft assessing consolidation strategies for regulated-industry vector data stores ahead of tier-1 review.",
    meta: "Series TT-812 • Primary Architect: Priya Nair",
    stats: [
      { label: "WORD COUNT", value: "3,420", sub: "Draft", subColor: "text-stone-400", isText: true },
      { label: "REVIEWERS", value: "2 / 4", sub: "Awaiting sign-off", subColor: "text-amber-600", isText: true },
      { label: "TARGET", value: "Q3 2026", sub: "Publish window", subColor: "text-stone-400", isText: true },
    ],
    draft: true,
  },
];
 
function emptyForm() {
  return {
    id: null,
    title: "",
    domain: DOMAINS[0],
    architects: "",
    abstract: "",
    bullets: [
      "Immediate 40% reduction in workflow latency via Autonomous Mesh integration.",
      "Zero-Trust Protocol 2.0 governance requirements for tier-1 enterprises.",
      "Cost-to-scale analysis comparing traditional SaaS vs Agentic Orchestration.",
    ],
    gating: "gated",
    fileName: "techtorch_q2_2026_latest_research_update.pdf",
    fileSize: "18.2 MB",
    fileObj: null,
  };
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
      className={`absolute z-30 mt-1 min-w-[240px] bg-white border border-stone-200 rounded-md shadow-lg py-1 text-sm ${
        align === "right" ? "right-0" : "left-0"
      }`}
    >
      {children}
    </div>
  );
}
 
function SectionHeader({ number, title, badge }) {
  return (
    <div className="flex items-center justify-between mb-5 pb-4 border-b border-stone-100">
      <div className="flex items-center gap-2 text-lg font-semibold text-stone-900">
        <span style={{ color: ACCENT }}>{number}</span> {title}
      </div>
      {badge}
    </div>
  );
}
 
export default function LatestUpdateConsole() {
  const [releases, setReleases] = useState([]);
  const [form, setForm] = useState(emptyForm());
  const [editingId, setEditingId] = useState(null);
  useEffect(() => {
  loadWhitepapers();
}, []);

function mapWhitepaperToRelease(item) {
  const status =
    item?.status === "draft" || item?.status === "published"
      ? item.status
      : "published";

  const isDraft = status === "draft";

  return {
    ...item,
    id: item?._id || item?.id || `whitepaper-${Date.now()}`,
    status,

    tag: isDraft
      ? "Under Peer Review • Draft"
      : "Latest Published Update",

    tagStyle: isDraft
      ? "bg-amber-50 text-amber-600"
      : "bg-rose-50 text-rose-500",

    published:
      item?.published ||
      (isDraft ? "Last edited: just now" : "Published"),

    meta: `Series TT-NEW • Primary Architect: ${
      item?.architects || "Unassigned"
    }`,

    stats: isDraft
      ? [
          {
            label: "WORD COUNT",
            value: String(
              (item?.abstract || "")
                .split(/\s+/)
                .filter(Boolean).length
            ),
            sub: "Draft",
            subColor: "text-stone-400",
            isText: true,
          },
          {
            label: "REVIEWERS",
            value: "0 / 4",
            sub: "Awaiting sign-off",
            subColor: "text-amber-600",
            isText: true,
          },
          {
            label: "TARGET",
            value: "TBD",
            sub: "Publish window",
            subColor: "text-stone-400",
            isText: true,
          },
        ]
      : [
          {
            label: "DOWNLOADS",
            value: String(item?.downloads ?? 0),
            sub: "Published",
            subColor: "text-stone-400",
          },
          {
            label: "LEAD CONVERSION",
            value: item?.leadConversion || "0%",
            sub: "Collecting data",
            subColor: "text-stone-400",
          },
          {
            label: "AVG. READ TIME",
            value: item?.avgReadTime || "0m",
            sub: "Collecting data",
            subColor: "text-stone-400",
          },
        ],

    bullets: Array.isArray(item?.bullets) ? item.bullets : [],
    draft: isDraft,
  };
}

async function loadWhitepapers() {
  try {
    const response = await getWhitepapers();

    // Support both:
    // 1. API helper returning an array
    // 2. API helper returning { success: true, data: [...] }
    const data = Array.isArray(response)
      ? response
      : Array.isArray(response?.data)
      ? response.data
      : [];

    console.log("WHITEPAPERS LOADED:", data);

    setReleases(data.map(mapWhitepaperToRelease));
  } catch (error) {
    console.error("Load Whitepapers Error:", error);
    flashToast(error.message || "Failed to load whitepapers");
  }
}
 
  const [tab, setTab] = useState("published");
  const [search, setSearch] = useState("");
  const [domainOpen, setDomainOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [changelogOpen, setChangelogOpen] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [toast, setToast] = useState(null);
 
  const fileInputRef = useRef(null);
  const dragIndex = useRef(null);
 
  function flashToast(msg) {
    setToast(msg);
    window.clearTimeout(flashToast._t);
    flashToast._t = window.setTimeout(() => setToast(null), 2200);
  }
 
  function updateForm(patch) {
    setForm((f) => ({ ...f, ...patch }));
  }
 
  function resetToNew() {
    setForm(emptyForm());
    setEditingId(null);
  }
 
  function loadIntoEditor(r) {
    setForm({
      id: r.id,
      title: r.title,
      domain: r.domain || DOMAINS[0],
      architects: r.architects || "",
      abstract: r.abstract || "",
      bullets: r.bullets || emptyForm().bullets,
      gating: r.gating || "gated",
      fileName: r.fileName || emptyForm().fileName,
      fileSize: r.fileSize || emptyForm().fileSize,
      fileObj: null,
    });
    setEditingId(r.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
    flashToast(`Loaded "${r.title}" into the editor`);
  }
 
  async function saveAs(status) {
  if (!form.title.trim()) {
    flashToast("Add a document title before saving");
    return;
  }

  const whitepaperData = {
    title: form.title,
    domain: form.domain,
    architects: form.architects,
    abstract: form.abstract,
    bullets: form.bullets,
    gating: form.gating,
    fileName: form.fileName,
    fileSize: form.fileSize,
    status,
    published:
      status === "published"
        ? `Published: ${new Date().toLocaleString("en-US", {
            month: "short",
            year: "numeric",
          })}`
        : "Draft",
  };

  try {
    if (editingId) {
      const result = await updateWhitepaper(editingId, whitepaperData);
      const updated = result?.data || result;

      setReleases((list) =>
        list.map((r) =>
          r._id === editingId || r.id === editingId
            ? {
                ...r,
                ...updated,
                id: updated._id || editingId,
              }
            : r
        )
      );

      setTab(status);

      flashToast(
        status === "draft"
          ? "Whitepaper updated as draft"
          : "Whitepaper updated & published"
      );
    } else {
      const result = await createWhitepaper(whitepaperData);
      const created = result?.data || result;

      const newRelease = mapWhitepaperToRelease(created);

      setReleases((list) => [
        newRelease,
        ...list,
      ]);

      setEditingId(created?._id || created?.id || null);
      setTab(status);

      flashToast(
        status === "draft"
          ? "Whitepaper saved as draft"
          : "Whitepaper published successfully"
      );
    }
  } catch (error) {
    console.error("Whitepaper Save Error:", error);
    flashToast(error.message || "Failed to save whitepaper");
  }
}
  // ---- bullets ----
  function updateBullet(i, text) {
    setForm((f) => ({ ...f, bullets: f.bullets.map((b, idx) => (idx === i ? text : b)) }));
  }
  function removeBulletIfEmpty(i, text) {
    if (!text.trim()) {
      setForm((f) => ({ ...f, bullets: f.bullets.filter((_, idx) => idx !== i) }));
    }
  }
  function addBullet() {
    setForm((f) => ({ ...f, bullets: [...f.bullets, "New key takeaway"] }));
  }
  function onBulletDragStart(i) {
    dragIndex.current = i;
  }
  function onBulletDrop(i) {
    const from = dragIndex.current;
    if (from === null || from === i) return;
    setForm((f) => {
      const next = [...f.bullets];
      const [moved] = next.splice(from, 1);
      next.splice(i, 0, moved);
      return { ...f, bullets: next };
    });
    dragIndex.current = null;
  }
 
  // ---- file ----
  function handleFiles(fileList) {
    const file = fileList && fileList[0];
    if (!file) return;
    const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
    updateForm({ fileName: file.name, fileSize: `${sizeMb} MB`, fileObj: file });
    flashToast(`Attached ${file.name}`);
  }
  function onDrop(e) {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  }
  function downloadFile() {
    if (form.fileObj) {
      const url = URL.createObjectURL(form.fileObj);
      const a = document.createElement("a");
      a.href = url;
      a.download = form.fileName;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      flashToast("No local file to download for this sample document");
    }
  }
  function removeFile() {
    updateForm({ fileName: "", fileSize: "", fileObj: null });
    flashToast("Attachment removed");
  }
 
  const filteredReleases = useMemo(() => {
    const q = search.trim().toLowerCase();
    return releases.filter((r) => {
      const normalizedStatus =
        r.status === "draft" ? "draft" : "published";

      const inTab = normalizedStatus === tab;

      const inSearch =
        !q ||
        (r.title || "").toLowerCase().includes(q) ||
        (r.architects || "").toLowerCase().includes(q);

      return inTab && inSearch;
    });
  }, [releases, tab, search]);
 
  const publishedCount = releases.filter(
    (r) => r.status !== "draft"
  ).length;

  const draftCount = releases.filter(
    (r) => r.status === "draft"
  ).length;
 
  function performAction(release, label) {
    switch (label) {
      case "Edit Metadata":
      case "Continue Editing":
      case "Revise Paper":
        loadIntoEditor(release);
        break;
      case "Submit for Review":
        (async () => {
          try {
            const result = await updateWhitepaper(release.id, {
              status: "published",
              published: `Published: ${new Date().toLocaleString("en-US", {
                month: "short",
                year: "numeric",
              })}`,
            });

            const updated = result?.data || result;

            setReleases((list) =>
              list.map((r) =>
                r.id === release.id
                  ? mapWhitepaperToRelease({
                      ...r,
                      ...updated,
                      _id: updated?._id || r.id,
                    })
                  : r
              )
            );

            setTab("published");
            flashToast("Whitepaper published successfully");
          } catch (error) {
            console.error("Submit Whitepaper Error:", error);
            flashToast(error.message || "Failed to publish whitepaper");
          }
        })();
        break;
      case "View Analytics":
        flashToast(`Opening analytics for "${release.title}"`);
        break;
      case "View Archive":
        flashToast(`Opening archive view for "${release.title}"`);
        break;
      case "Executive Brief":
        flashToast("Generating executive brief…");
        break;
      default:
        flashToast(`${label} triggered`);
    }
  }
 
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{ fontFamily: FONT }}>
      <Toast toast={toast} />
 
      {changelogOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative my-8">
            <button
              onClick={() => setChangelogOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600"
              aria-label="Close changelog"
            >
              <X size={18} />
            </button>
            <div className="text-[11px] font-semibold tracking-wide text-stone-400 mb-3">CHANGELOG &amp; UPDATE HISTORY</div>
            <div className="space-y-4">
              {CHANGELOG.map((c) => (
                <div key={c.version} className="border-l-2 pl-3" style={{ borderColor: ACCENT }}>
                  <div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
                    {c.version} <span className="text-xs font-normal text-stone-400">{c.time}</span>
                  </div>
                  <div className="text-sm text-stone-500 mt-0.5">{c.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
 
      <div className="min-h-screen">
        <header className="flex items-center gap-4 px-4 sm:px-6 py-3 border-b border-stone-200 bg-white flex-wrap">
          <div className="flex-1 max-w-xl relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search CMS documents, telemetry, entries..."
              className="w-full pl-9 pr-3 py-2 rounded-md bg-stone-50 border border-stone-200 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2"
            />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <span className="hidden md:flex items-center gap-1.5 text-xs font-medium text-emerald-600 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              US-EAST PRIMARY
            </span>
 
            <div className="relative">
              <button
                type="button"
                aria-label="Notifications"
                onClick={() => setNotifOpen((s) => !s)}
                className="relative text-stone-400 hover:text-stone-600"
              >
                <Bell size={18} />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-rose-500" />
              </button>
              <Dropdown open={notifOpen} onClose={() => setNotifOpen(false)} align="right">
                <div className="px-3 py-2 text-xs font-semibold text-stone-400 border-b border-stone-100">NOTIFICATIONS</div>
                {NOTIFICATIONS.map((n) => (
                  <div key={n.title} className="px-3 py-2 hover:bg-stone-50">
                    <div className="text-stone-700">{n.title}</div>
                    <div className="text-xs text-stone-400">{n.time}</div>
                  </div>
                ))}
              </Dropdown>
            </div>
 
            <button type="button" aria-label="History" onClick={() => setChangelogOpen(true)} className="text-stone-400 hover:text-stone-600">
              <History size={18} />
            </button>
 
            <div className="hidden sm:block text-sm text-right">
              <div className="font-medium leading-tight">Super Admin</div>
              <div className="text-xs text-stone-400 leading-tight">admin@techtorch.io</div>
            </div>
          </div>
        </header>
 
        <main className="p-6 space-y-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-stone-400 mb-2">
                <span>ENTERPRISE CORE</span>
                <ChevronRight size={12} />
                <span>RESEARCH &amp; INTELLIGENCE</span>
                <ChevronRight size={12} />
                <span className="text-stone-500">LATEST RESEARCH UPDATES &amp; INGESTION</span>
              </div>
              <h1 className="text-2xl font-semibold leading-tight text-stone-900">
                Latest Enterprise Updates &amp; Whitepaper Release Console
              </h1>
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> LATEST RELEASE V2026.4 ACTIVE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setChangelogOpen(true)}
                className="flex flex-col items-center gap-1 text-xs px-3 py-2 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 bg-white w-24 text-center leading-tight"
              >
                <History size={15} />
                View Changelog / Update History
              </button>
              <button
                onClick={() => saveAs("draft")}
                className="flex items-center gap-1.5 text-sm px-3 py-2.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 bg-white"
              >
                <Save size={14} /> Save Draft
              </button>
              <button
                onClick={() => saveAs("published")}
                className="flex items-center gap-1.5 text-sm px-3 py-2.5 rounded-md text-white"
                style={{ backgroundColor: ACCENT }}
              >
                Publish Latest Update <ArrowRight size={14} />
              </button>
            </div>
          </div>
 
          {/* Section 01 */}
          <div className="bg-white rounded-xl border border-stone-200 p-6">
            <SectionHeader
              number="01"
              title="Latest Release Brief & Strategic Scope"
              badge={
                <span className="flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                  <CircleCheck size={13} /> {form.title.trim() ? "Scope Validated" : "Awaiting Title"}
                </span>
              }
            />
 
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-stone-700">Document Title</label>
                  <span className="text-xs text-stone-400">{form.title.length}/120</span>
                </div>
                <input
                  value={form.title}
                  maxLength={120}
                  onChange={(e) => updateForm({ title: e.target.value })}
                  placeholder="Q2 2026 Strategic Advisory: Autonomous Systems & Next-Gen Enterprise AI Fabric"
                  className="w-full border border-stone-200 rounded-md px-4 py-3 text-sm bg-stone-50 focus:outline-none focus:ring-2"
                />
              </div>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">Domain / Technology Pillar</label>
                  <button
                    onClick={() => setDomainOpen((s) => !s)}
                    className="w-full flex items-center justify-between border border-stone-200 rounded-md px-4 py-3 text-sm bg-stone-50 text-left"
                  >
                    {form.domain}
                    <ChevronDown size={14} className="text-stone-400 shrink-0 ml-2" />
                  </button>
                  <Dropdown open={domainOpen} onClose={() => setDomainOpen(false)}>
                    {DOMAINS.map((d) => (
                      <button
                        key={d}
                        onClick={() => {
                          updateForm({ domain: d });
                          setDomainOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-stone-50"
                      >
                        {d}
                      </button>
                    ))}
                  </Dropdown>
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">Primary Research Architect(s)</label>
                  <input
                    value={form.architects}
                    onChange={(e) => updateForm({ architects: e.target.value })}
                    placeholder="Dr. Aris Thorne & TechTorch Enterprise Architecture Group"
                    className="w-full border border-stone-200 rounded-md px-4 py-3 text-sm bg-stone-50 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
 
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-stone-700">Executive Summary / Abstract</label>
                  <span className="text-xs text-stone-400">Editorial abstract for executive syndication</span>
                </div>
                <textarea
                  value={form.abstract}
                  onChange={(e) => updateForm({ abstract: e.target.value })}
                  rows={3}
                  placeholder="This latest edition provides real-world benchmarks, operational blueprints..."
                  className="w-full border border-stone-200 rounded-md px-4 py-3 text-sm text-stone-600 leading-relaxed bg-stone-50 focus:outline-none focus:ring-2 resize-y"
                />
              </div>
            </div>
          </div>
 
          {/* Section 02 */}
          <div className="bg-white rounded-xl border border-stone-200 p-6">
            <SectionHeader
              number="02"
              title="Ingest Latest Artifacts & Release Package"
              badge={<span className="text-xs text-stone-400 font-medium tracking-wide">PDF • DOCX INGESTION ENGINE</span>}
            />
 
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx"
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
              className={`border-2 border-dashed rounded-lg py-10 flex flex-col items-center justify-center text-center mb-5 transition-colors ${
                dragOver ? "border-stone-400 bg-stone-100" : "border-stone-200 bg-stone-50/60"
              }`}
            >
              <div className="w-11 h-11 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-3 text-stone-400">
                <UploadCloud size={20} />
              </div>
              <div className="text-sm font-medium text-stone-700">
                Drag and drop your primary PDF/DOCX whitepaper here, or{" "}
                <button
                  type="button"
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  className="underline font-semibold"
                  style={{ color: ACCENT }}
                >
                  browse files
                </button>
              </div>
              <div className="text-xs text-stone-400 mt-1 tracking-wide">
                SUPPORTED FORMATS: PDF, DOCX UP TO 45MB • ENTERPRISE COMPLIANCE VERIFIED
              </div>
            </div>
 
            {form.fileName ? (
              <div className="flex items-center justify-between border border-stone-200 rounded-lg px-4 py-3 mb-6 bg-stone-50">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: ACCENT }}>
                    <FileType2 size={17} />
                  </span>
                  <div className="text-sm min-w-0">
                    <div className="font-medium text-stone-800 break-all">{form.fileName}</div>
                    <div className="text-xs text-stone-400">{form.fileSize} •</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-stone-400">
                  <button aria-label="Download" onClick={downloadFile}>
                    <Download size={16} className="cursor-pointer hover:text-stone-600" />
                  </button>
                  <button aria-label="Remove file" onClick={removeFile}>
                    <Trash2 size={16} className="cursor-pointer hover:text-rose-500" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center border border-dashed border-stone-200 rounded-lg px-4 py-4 mb-6 text-xs text-stone-400">
                No file attached yet — drop one above or browse.
              </div>
            )}
 
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-stone-700">
                Key Takeaways &amp; Executive Highlights (Download Page Preview)
              </label>
              <button onClick={addBullet} className="flex items-center gap-1 text-sm font-medium" style={{ color: ACCENT }}>
                <Plus size={14} /> Add Bullet
              </button>
            </div>
            <div className="space-y-2.5 mb-6">
              {form.bullets.map((b, i) => (
                <div
                  key={i}
                  draggable
                  onDragStart={() => onBulletDragStart(i)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => onBulletDrop(i)}
                  className="flex items-center gap-3 border border-stone-200 rounded-md px-4 py-3 bg-stone-50"
                >
                  <span className="text-sm font-semibold" style={{ color: ACCENT }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const text = e.currentTarget.innerText;
                      updateBullet(i, text);
                      removeBulletIfEmpty(i, text);
                    }}
                    className="text-sm text-stone-700 flex-1 outline-none"
                  >
                    {b}
                  </span>
                  <GripVertical size={15} className="text-stone-300 cursor-grab" />
                </div>
              ))}
              {form.bullets.length === 0 && (
                <div className="text-xs text-stone-400 px-1">No key takeaways yet — add one above.</div>
              )}
            </div>
 
            <label className="text-sm font-medium text-stone-700 mb-3 block">Access &amp; Lead Generation Gating</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => updateForm({ gating: "gated" })}
                className={`text-left rounded-lg border p-4 ${form.gating === "gated" ? "border-rose-200" : "border-stone-200"}`}
                style={form.gating === "gated" ? { backgroundColor: `${ACCENT}0d` } : {}}
              >
                <div className="flex items-center gap-2 font-medium text-stone-800 mb-1">
                  <span className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0" style={{ borderColor: ACCENT }}>
                    {form.gating === "gated" && <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />}
                  </span>
                  Gated Release
                </div>
                <p className="text-xs text-stone-500 leading-relaxed pl-6">
                  Requires Verified Enterprise Business Email, Job Title &amp; Organization size prior to
                  decrypting PDF download stream.
                </p>
              </button>
              <button
                onClick={() => updateForm({ gating: "open" })}
                className={`text-left rounded-lg border p-4 ${form.gating === "open" ? "border-stone-300" : "border-stone-200"} bg-stone-50`}
              >
                <div className="flex items-center gap-2 font-medium text-stone-800 mb-1">
                  <span className="w-4 h-4 rounded-full border-2 border-stone-300 flex items-center justify-center shrink-0">
                    {form.gating === "open" && <span className="w-2 h-2 rounded-full bg-stone-400" />}
                  </span>
                  Open Access (Public)
                </div>
                <p className="text-xs text-stone-500 leading-relaxed pl-6">
                  Instant friction-free download. Optimized for broad organic distribution, citations, and
                  rapid syndicate indexing.
                </p>
              </button>
            </div>
          </div>
 
          {/* Recent Releases */}
          <div>
            <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
              <div>
                <h2 className="text-2xl font-semibold text-stone-900">Recent Releases &amp; Update Velocity</h2>
                <p className="text-sm text-stone-500 mt-1 max-w-lg">
                  Track engagement velocity and download adoption across the latest research publications.
                </p>
              </div>
              <div className="flex items-center bg-white border border-stone-200 rounded-lg p-1">
                <button
                  onClick={() => setTab("published")}
                  className={`px-4 py-2 rounded-md text-sm font-medium text-center ${
                    tab === "published" ? "bg-stone-900 text-white" : "text-stone-500"
                  }`}
                >
                  Published &amp; Active ({publishedCount})
                </button>
                <button
                  onClick={() => setTab("draft")}
                  className={`px-4 py-2 rounded-md text-sm font-medium text-center ${
                    tab === "draft" ? "bg-stone-900 text-white" : "text-stone-500"
                  }`}
                >
                  Under Peer Review / Draft ({draftCount})
                </button>
              </div>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredReleases.length === 0 && (
                <div className="text-sm text-stone-400 col-span-full py-6 text-center">
                  No {tab === "draft" ? "drafts" : "published releases"} match your search.
                </div>
              )}
              {filteredReleases.map((r) => (
                <div key={r.id} className="bg-white rounded-xl border border-stone-200 p-5 space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${r.tagStyle}`}>{r.tag}</span>
                    <span className="text-xs text-stone-400">{r.published}</span>
                  </div>
 
                  <div>
                    <h3 className="font-semibold text-stone-900 leading-snug">{r.title}</h3>
                    <p className="text-xs text-stone-400 mt-1">{r.meta}</p>
                  </div>
 
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {(r.stats || []).map((s) => (
                      <div key={s.label}>
                        <div className="text-[10px] font-semibold tracking-wide text-stone-400 mb-1">{s.label}</div>
                        <div className={`font-semibold text-stone-900 ${s.isText ? "text-base" : "text-xl"}`}>{s.value}</div>
                        <div className={`text-xs mt-0.5 ${s.subColor}`}>{s.sub}</div>
                      </div>
                    ))}
                  </div>
 
                  <div className="flex items-center gap-2 pt-2 border-t border-stone-100 flex-wrap">
                    {r.status === "draft" ? (
                      <>
                        <button
                          onClick={() => performAction(r, "Continue Editing")}
                          className="flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-md px-3 py-2 text-stone-600 hover:bg-stone-50"
                        >
                          <PencilLine size={14} /> Continue Editing
                        </button>
                        <button
                          onClick={() => performAction(r, "Submit for Review")}
                          className="ml-auto flex items-center gap-1.5 text-sm font-medium rounded-md px-3 py-2 text-white"
                          style={{ backgroundColor: ACCENT }}
                        >
                          <Send size={14} /> Submit for Review
                        </button>
                      </>
                    ) : (
                      <>
                        {(r.actions || (r.revise ? [{ label: "View Archive", icon: Archive }, { label: "Executive Brief", icon: ClipboardList }] : [{ label: "View Analytics", icon: BarChart3 }, { label: "Edit Metadata", icon: PenSquare }])).map((a) => {
                          const Icon = a.icon;
                          return (
                            <button
                              key={a.label}
                              onClick={() => performAction(r, a.label)}
                              className="flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-md px-3 py-2 text-stone-600 hover:bg-stone-50"
                            >
                              <Icon size={14} /> {a.label}
                            </button>
                          );
                        })}
                        {r.download && (
                          <button
                            onClick={() => performAction(r, "Download")}
                            className="ml-auto w-9 h-9 flex items-center justify-center border border-stone-200 rounded-md text-stone-400 hover:bg-stone-50"
                            aria-label="Download"
                          >
                            <Download size={15} />
                          </button>
                        )}
                        {r.revise && (
                          <button
                            onClick={() => performAction(r, "Revise Paper")}
                            className="ml-auto flex items-center gap-1.5 text-sm font-medium rounded-md px-3 py-2 text-white"
                            style={{ backgroundColor: ACCENT }}
                          >
                            <RefreshCw size={14} /> Revise Paper
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
 