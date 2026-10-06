import { useState, useRef, useEffect, useMemo } from "react";
import {
  Search, Bell, History, ChevronDown, ChevronRight, Save, ArrowRight, CircleCheck,
  PenSquare, ExternalLink, X, Check, PencilLine, Send,
} from "lucide-react";
 
const ACCENT = "#780042";
const FONT = "Inter, sans-serif";
 
// Values match LatestUpdate.model.js -> category enum
const CATEGORIES = [
  { value: "update", label: "Update", style: "bg-rose-50 text-rose-500" },
  { value: "news", label: "News", style: "bg-stone-100 text-stone-500" },
  { value: "announcement", label: "Announcement", style: "bg-amber-50 text-amber-600" },
  { value: "whitepaper", label: "Whitepaper", style: "bg-emerald-50 text-emerald-600" },
];
const categoryMeta = (v) => CATEGORIES.find((c) => c.value === v) || CATEGORIES[0];
 
const todayISO = () => new Date().toISOString().slice(0, 10);
 
function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
 
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
    category: "update",
    title: "Autonomous Architecture & Quantum-Safe AI Fabric (2026 Update)",
    description:
      "This latest edition provides real-world benchmarks, operational blueprints, and risk-mitigation frameworks for migrating mission-critical workloads to autonomous agentic architectures in 2026.",
    author: "Dr. Aris Thorne",
    image: "",
    link: "",
    publishedAt: "2026-05-12",
  },
  {
    id: 2,
    status: "published",
    category: "whitepaper",
    title: "Legacy Core Modernization: Event-Driven Migration Roadmap",
    description: "A benchmark study of event-driven migration patterns for legacy monoliths moving to composable services.",
    author: "Kunal Purohit",
    image: "",
    link: "",
    publishedAt: "2026-02-20",
  },
  {
    id: 3,
    status: "draft",
    category: "announcement",
    title: "Vector Database Consolidation for Regulated Industries",
    description: "A working draft assessing consolidation strategies for regulated-industry vector data stores ahead of tier-1 review.",
    author: "Priya Nair",
    image: "",
    link: "",
    publishedAt: "2026-09-27",
  },
];
 
// Mirrors LatestUpdate.model.js (author defaults to "TechTorch", publishedAt defaults to now)
function emptyForm() {
  return {
    id: null,
    title: "",
    description: "",
    category: "update",
    image: "",
    link: "",
    author: "TechTorch",
    publishedAt: todayISO(),
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
  const [releases, setReleases] = useState(INITIAL_RELEASES);
  const [form, setForm] = useState(emptyForm());
  const [editingId, setEditingId] = useState(null);
 
  const [tab, setTab] = useState("published");
  const [search, setSearch] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [changelogOpen, setChangelogOpen] = useState(false);
  const [imgBroken, setImgBroken] = useState(false);
  const [toast, setToast] = useState(null);
 
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
      description: r.description || "",
      category: r.category || "update",
      image: r.image || "",
      link: r.link || "",
      author: r.author || "TechTorch",
      publishedAt: r.publishedAt ? String(r.publishedAt).slice(0, 10) : todayISO(),
    });
    setEditingId(r.id);
    setImgBroken(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    flashToast(`Loaded "${r.title}" into the editor`);
  }
 
  function saveAs(status) {
    // title and description are required in LatestUpdate.model.js
    if (!form.title.trim()) {
      flashToast("Add a title before saving");
      return;
    }
    if (!form.description.trim()) {
      flashToast("Add a description before saving");
      return;
    }
    setReleases((list) => {
      const base = {
        id: editingId ?? makeId(list),
        status,
        title: form.title.trim(),
        description: form.description.trim(),
        category: form.category,
        image: form.image.trim(),
        link: form.link.trim(),
        author: form.author.trim() || "TechTorch",
        publishedAt: form.publishedAt || todayISO(),
      };
      if (editingId) {
        return list.map((r) => (r.id === editingId ? base : r));
      }
      setEditingId(base.id);
      return [base, ...list];
    });
    setTab(status);
    flashToast(status === "draft" ? "Saved as draft" : "Latest update published");
  }
 
  const filteredReleases = useMemo(() => {
    const q = search.trim().toLowerCase();
    return releases.filter((r) => {
      const inTab = r.status === tab;
      const inSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        (r.author || "").toLowerCase().includes(q) ||
        (r.description || "").toLowerCase().includes(q);
      return inTab && inSearch;
    });
  }, [releases, tab, search]);
 
  const publishedCount = releases.filter((r) => r.status === "published").length;
  const draftCount = releases.filter((r) => r.status === "draft").length;
 
  function performAction(release, label) {
    switch (label) {
      case "Edit Details":
      case "Continue Editing":
        loadIntoEditor(release);
        break;
      case "Publish":
        setReleases((list) =>
          list.map((r) => (r.id === release.id ? { ...r, status: "published", publishedAt: todayISO() } : r))
        );
        flashToast("Latest update published");
        break;
      case "Open Link":
        if (release.link) window.open(release.link, "_blank", "noopener,noreferrer");
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
              placeholder="Search by title, author or description..."
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
                Latest Enterprise Updates Release Console
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
              title="Latest Update Brief & Content"
              badge={
                <span className="flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                  <CircleCheck size={13} /> {form.title.trim() && form.description.trim() ? "Scope Validated" : "Awaiting Title & Description"}
                </span>
              }
            />
 
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-stone-700">Title</label>
                  <span className="text-xs text-stone-400">Required</span>
                </div>
                <input
                  value={form.title}
                  onChange={(e) => updateForm({ title: e.target.value })}
                  placeholder="Q2 2026 Strategic Advisory: Autonomous Systems & Next-Gen Enterprise AI Fabric"
                  className="w-full border border-stone-200 rounded-md px-4 py-3 text-sm bg-stone-50 focus:outline-none focus:ring-2"
                />
              </div>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">Category</label>
                  <button
                    onClick={() => setCategoryOpen((s) => !s)}
                    className="w-full flex items-center justify-between border border-stone-200 rounded-md px-4 py-3 text-sm bg-stone-50 text-left"
                  >
                    {categoryMeta(form.category).label}
                    <ChevronDown size={14} className="text-stone-400 shrink-0 ml-2" />
                  </button>
                  <Dropdown open={categoryOpen} onClose={() => setCategoryOpen(false)}>
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => {
                          updateForm({ category: c.value });
                          setCategoryOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-stone-50"
                      >
                        {c.label}
                      </button>
                    ))}
                  </Dropdown>
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">Author</label>
                  <input
                    value={form.author}
                    onChange={(e) => updateForm({ author: e.target.value })}
                    placeholder="TechTorch"
                    className="w-full border border-stone-200 rounded-md px-4 py-3 text-sm bg-stone-50 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
 
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-stone-700">Description</label>
                  <span className="text-xs text-stone-400">Required</span>
                </div>
                <textarea
                  value={form.description}
                  onChange={(e) => updateForm({ description: e.target.value })}
                  rows={4}
                  placeholder="This latest edition provides real-world benchmarks, operational blueprints..."
                  className="w-full border border-stone-200 rounded-md px-4 py-3 text-sm text-stone-600 leading-relaxed bg-stone-50 focus:outline-none focus:ring-2 resize-y"
                />
              </div>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">Published Date</label>
                  <input
                    type="date"
                    value={form.publishedAt}
                    onChange={(e) => updateForm({ publishedAt: e.target.value })}
                    className="w-full border border-stone-200 rounded-md px-4 py-3 text-sm bg-stone-50 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
            </div>
          </div>
 
          {/* Section 02 */}
          <div className="bg-white rounded-xl border border-stone-200 p-6">
            <SectionHeader
              number="02"
              title="Cover Image & Reference Link"
              badge={<span className="text-xs text-stone-400 font-medium tracking-wide">OPTIONAL</span>}
            />
 
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">Image URL</label>
                  <input
                    value={form.image}
                    onChange={(e) => {
                      setImgBroken(false);
                      updateForm({ image: e.target.value });
                    }}
                    placeholder="https://..."
                    className="w-full border border-stone-200 rounded-md px-4 py-3 text-sm bg-stone-50 focus:outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">Link</label>
                  <input
                    value={form.link}
                    onChange={(e) => updateForm({ link: e.target.value })}
                    placeholder="https://..."
                    className="w-full border border-stone-200 rounded-md px-4 py-3 text-sm bg-stone-50 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
 
              {form.image.trim() && !imgBroken ? (
                <div className="border border-stone-200 rounded-lg overflow-hidden bg-stone-50 h-40">
                  <img
                    src={form.image}
                    alt="Cover preview"
                    onError={() => setImgBroken(true)}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center border border-dashed border-stone-200 rounded-lg px-4 py-4 text-xs text-stone-400">
                  {imgBroken ? "Image could not be loaded — check the URL." : "No image added yet — paste an image URL above."}
                </div>
              )}
            </div>
          </div>
 
          {/* Recent Releases */}
          <div>
            <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
              <div>
                <h2 className="text-2xl font-semibold text-stone-900">Recent Releases &amp; Update Velocity</h2>
                <p className="text-sm text-stone-500 mt-1 max-w-lg">
                  Review published updates and drafts across all categories.
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
                  Drafts ({draftCount})
                </button>
              </div>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredReleases.length === 0 && (
                <div className="text-sm text-stone-400 col-span-full py-6 text-center">
                  No {tab === "draft" ? "drafts" : "published releases"} match your search.
                </div>
              )}
              {filteredReleases.map((r) => {
                const cat = categoryMeta(r.category);
                return (
                  <div key={r.id} className="bg-white rounded-xl border border-stone-200 p-5 space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${cat.style}`}>{cat.label}</span>
                      <span className="text-xs text-stone-400">
                        {r.status === "draft" ? "Draft • " : "Published: "}
                        {formatDate(r.publishedAt)}
                      </span>
                    </div>
 
                    {r.image ? (
                      <div className="h-32 rounded-lg overflow-hidden bg-stone-100">
                        <img src={r.image} alt="" className="w-full h-full object-cover" />
                      </div>
                    ) : null}
 
                    <div>
                      <h3 className="font-semibold text-stone-900 leading-snug">{r.title}</h3>
                      <p className="text-xs text-stone-400 mt-1">By {r.author || "TechTorch"}</p>
                      <p className="text-sm text-stone-500 leading-relaxed mt-2">{r.description}</p>
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
                            onClick={() => performAction(r, "Publish")}
                            className="ml-auto flex items-center gap-1.5 text-sm font-medium rounded-md px-3 py-2 text-white"
                            style={{ backgroundColor: ACCENT }}
                          >
                            <Send size={14} /> Publish
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => performAction(r, "Edit Details")}
                            className="flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-md px-3 py-2 text-stone-600 hover:bg-stone-50"
                          >
                            <PenSquare size={14} /> Edit Details
                          </button>
                          {r.link && (
                            <button
                              onClick={() => performAction(r, "Open Link")}
                              className="ml-auto flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-md px-3 py-2 text-stone-600 hover:bg-stone-50"
                            >
                              <ExternalLink size={14} /> Open Link
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
 