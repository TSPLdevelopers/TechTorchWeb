import { useState, useRef, useEffect, useMemo } from "react";
import {
  Plus, Calendar, Clock, MapPin, CircleCheck, Share2, Rocket, Sparkles,
  ClipboardList, Eye, Pencil, SlidersHorizontal, MonitorPlay, FileText,
  X, Check, ChevronDown, Trash2, ArrowDownToLine, ArchiveRestore,
} from "lucide-react";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent as deleteEventApi,
} from "../api/adminDashboardApi";

const ACCENT = "#780042";
const FONT = "Inter,sans-serif";

const FORMATS = ["Hybrid", "In-Person", "Virtual"];

const TIMEZONES = [
  "PST (UTC-8)",
  "MST (UTC-7)",
  "CST (UTC-6)",
  "EST (UTC-5)",
  "GMT (UTC+0)",
  "CET (UTC+1)",
  "IST (UTC+5:30)",
  "SGT (UTC+8)",
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function parseLocalDate(str) {
  // "YYYY-MM-DD" -> Date, avoiding UTC off-by-one
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatDateRange(startStr, endStr) {
  if (!startStr) return "";
  const start = parseLocalDate(startStr);
  if (!endStr || endStr === startStr) {
    return `${MONTH_NAMES[start.getMonth()]} ${start.getDate()}, ${start.getFullYear()}`;
  }
  const end = parseLocalDate(endStr);
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${MONTH_NAMES[start.getMonth()]} ${start.getDate()} – ${end.getDate()}, ${end.getFullYear()}`;
  }
  return `${MONTH_NAMES[start.getMonth()]} ${start.getDate()} – ${MONTH_NAMES[end.getMonth()]} ${end.getDate()}, ${end.getFullYear()}`;
}

function formatTime12(t) {
  if (!t) return "";
  let [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")} ${suffix}`;
}

function formatTimeRange(startStr, endStr, tz) {
  if (!startStr && !endStr) return "";
  const parts = [];
  if (startStr) parts.push(formatTime12(startStr));
  if (endStr) parts.push(formatTime12(endStr));
  return `${parts.join(" – ")}${tz ? ` ${tz}` : ""}`;
}

function makeId(list) {
  return list.reduce((m, e) => Math.max(m, e.id), 0) + 1;
}

const INITIAL_EVENTS = [
  {
    id: 1,
    status: "upcoming",
    tag: "FLAGSHIP PLENARY",
    title: "Global Enterprise AI & Autonomous Systems Summit 2026",
    summary:
      "Pioneering autonomous data fabrics, quantum vector algorithms, and institutional algorithmic governance with 500+ C-suite leaders.",
    dateRange: "Nov 14 – 16, 2026",
    timing: "09:00 AM – 05:30 PM PST (UTC-8)",
    venue: "TechTorch Center, San Francisco",
    format: "Hybrid",
    tiers: [150, 350, 250],
    registered: 578,
  },
  {
    id: 2,
    status: "past",
    tag: "EXECUTIVE SUMMIT",
    title: "European Enterprise Cyber Sovereignty Summit 2025",
    summary:
      "Three days of closed-door executive workshops in London on decentralized data sovereignty and NIS2 compliance frameworks.",
    dateRange: "Oct 08 – 10, 2025",
    timing: "09:00 AM – 05:00 PM GMT",
    venue: "London, UK (Chatham House)",
    format: "In-Person",
    tiers: [140, 140, 140],
    registered: 420,
  },
];

function emptyForm() {
  return {
    id: null,
    tag: "FLAGSHIP PLENARY",
    title: "",
    dateRange: "",
    timing: "",
    venue: "",
    format: "Hybrid",
    tiers: [150, 350, 250],
    summary: "",
    registered: 0,
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
      className={`absolute z-30 mt-1 min-w-[200px] bg-white border border-stone-200 rounded-lg shadow-lg py-1 text-sm ${
        align === "right" ? "right-0" : "left-0"
      }`}
    >
      {children}
    </div>
  );
}

export default function AddEventStudio() {
const [events, setEvents] = useState([]);
const [eventsLoading, setEventsLoading] = useState(true);
  const [form, setForm] = useState(emptyForm());
  const [editingId, setEditingId] = useState(null);
  const [toast, setToast] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewEvent, setPreviewEvent] = useState(null); // when set, modal shows this event instead of the live form
  const [manageOpenId, setManageOpenId] = useState(null);
  const [compareOn, setCompareOn] = useState(false);
 useEffect(() => {
  loadEvents();
}, []);

async function loadEvents() {
  try {
    setEventsLoading(true);

    const data = await getEvents();

    setEvents(Array.isArray(data) ? data : []);
  } catch (error) {
    console.error("Failed to load events:", error);
    flashToast(error.message || "Failed to load events");
  } finally {
    setEventsLoading(false);
  }
}
  const [dateOpen, setDateOpen] = useState(false);
  const [dateDraft, setDateDraft] = useState({ start: "", end: "" });
  const [timeOpen, setTimeOpen] = useState(false);
  const [timeDraft, setTimeDraft] = useState({ start: "09:00", end: "17:30", tz: "PST (UTC-8)" });

  function openDatePicker() {
    setDateDraft((d) => ({ ...d }));
    setDateOpen(true);
  }
  function applyDate() {
    if (!dateDraft.start) {
      setDateOpen(false);
      return;
    }
    updateForm({ dateRange: formatDateRange(dateDraft.start, dateDraft.end || dateDraft.start) });
    setDateOpen(false);
  }
  function openTimePicker() {
    setTimeDraft((t) => ({ ...t }));
    setTimeOpen(true);
  }
  function applyTime() {
    updateForm({ timing: formatTimeRange(timeDraft.start, timeDraft.end, timeDraft.tz) });
    setTimeOpen(false);
  }

  function flashToast(msg) {
    setToast(msg);
    window.clearTimeout(flashToast._t);
    flashToast._t = window.setTimeout(() => setToast(null), 2200);
  }

  function updateForm(patch) {
    setForm((f) => ({ ...f, ...patch }));
  }
  function updateTier(idx, value) {
    setForm((f) => ({ ...f, tiers: f.tiers.map((t, i) => (i === idx ? Math.max(0, value) : t)) }));
  }
  const totalCapacity = form.tiers.reduce((a, b) => a + Number(b || 0), 0);

  function resetToNew() {
    setForm(emptyForm());
    setEditingId(null);
    flashToast("Started a new event draft");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function loadIntoEditor(ev) {
    setForm({
      id: ev.id,
      tag: ev.tag,
      title: ev.title,
      dateRange: ev.dateRange,
      timing: ev.timing,
      venue: ev.venue,
      format: ev.format,
      tiers: [...ev.tiers],
      summary: ev.summary,
      registered: ev.registered,
    });
    setEditingId(ev.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  eAs(status) {
    if (!form.title.trim()) {
      flashToast("Add an event title before saving");
      return;
    }
    setEvents((list) => {
      const base = {
        id: editingId ?? makeId(list),
        status,
        tag: form.tag,
        title: form.title,
        summary: form.summary,
        dateRange: form.dateRange || "Date TBD",
        timing: form.timing || "Time TBD",
        venue: form.venue || "Venue TBD",
        format: form.format,
        tiers: form.tiers,
        registered: form.registered,
      };
      if (editingId) {
        return list.map((e) => (e.id === editingId ? base : e));
      }
      setEditingId(base.id);
      return [base, ...list];
    });
    flashToast(status === "draft" ? "Saved as draft" : "Event created & published");
  }

  function deleteEvent(id) {
    const ev = events.find((e) => e.id === id);
    if (!ev) return;
    if (!window.confirm(`Delete "${ev.title}"? This cannot be undone.`)) return;
    setEvents((list) => list.filter((e) => e.id !== id));
    if (editingId === id) resetToNew();
    setManageOpenId(null);
    flashToast("Event deleted");
  }

  function setStatus(id, status) {
    setEvents((list) => list.map((e) => (e.id === id ? { ...e, status } : e)));
    setManageOpenId(null);
    flashToast(
      status === "upcoming" ? "Event published" : status === "draft" ? "Moved to draft" : "Event archived"
    );
  }

  function openPreviewFor(ev) {
    setPreviewEvent(ev);
    setShowPreview(true);
  }
  function openPreviewLive() {
    setPreviewEvent(null);
    setShowPreview(true);
  }

  async function shareLink(id) {
    const url = `https://events.techtorch.io/e/${id ?? "draft"}`;
    try {
      await navigator.clipboard.writeText(url);
      flashToast("Event link copied to clipboard");
    } catch {
      flashToast(url);
    }
  }

  const activeCount = events.filter((e) => e.status !== "past").length;
  const pastCount = events.filter((e) => e.status === "past").length;

  const pv = previewEvent || {
    title: form.title || "Untitled Event",
    dateRange: form.dateRange || "Date TBD",
    venue: form.venue || "Venue TBD",
    format: form.format,
    summary: form.summary,
    tiers: form.tiers,
    registered: form.registered,
  };
  const pvTotal = pv.tiers.reduce((a, b) => a + Number(b || 0), 0) || 1;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{ fontFamily: FONT }}>
      <Toast toast={toast} />

      {showPreview && (
        <div className="fixed inset-0 z-40 bg-black/40 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 relative my-8">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600"
              aria-label="Close preview"
            >
              <X size={18} />
            </button>
            <div className="text-[10px] font-semibold tracking-wide mb-2" style={{ color: ACCENT }}>
              {previewEvent ? "EVENT DETAILS" : "LIVE PREVIEW"}
            </div>
            <h3 className="text-xl font-semibold text-stone-900 mb-2">{pv.title}</h3>
            <div className="flex items-center gap-4 text-sm text-stone-600 mb-3">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-stone-400" /> {pv.dateRange}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-stone-400" /> {pv.venue}
              </span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed mb-4">{pv.summary || "No summary written yet."}</p>
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                <span>Capacity Registered</span>
                <span className="font-medium text-stone-700">
                  {pv.registered} / {pvTotal} ({Math.round((pv.registered / pvTotal) * 100)}%)
                </span>
              </div>
              <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${Math.min(100, (pv.registered / pvTotal) * 100)}%`, backgroundColor: ACCENT }} />
              </div>
            </div>
            <button
              onClick={() => setShowPreview(false)}
              className="mt-5 w-full py-2.5 rounded-lg text-white text-sm font-medium"
              style={{ backgroundColor: ACCENT }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="min-h-screen">
        {/* Top bar */}
        <div className="bg-white border-b border-stone-200 px-4 sm:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs text-stone-400 tracking-wide mb-2 flex items-center gap-1.5 flex-wrap">
                <span>ENTERPRISE PORTAL</span>
                <span>/</span>
                <span>EVENTS MANAGEMENT</span>
                <span>/</span>
                <span className="font-semibold text-stone-500">CORPORATE EVENT MANAGEMENT &amp; PUBLISHING</span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-semibold leading-tight text-stone-900">
                  Corporate Event Management &amp; Publishing Studio
                </h1>
                <div className="ml-auto">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Console Active
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={resetToNew}
              className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg text-white shrink-0"
              style={{ backgroundColor: ACCENT }}
            >
              <Plus size={16} /> New Event Draft
            </button>
          </div>
        </div>

        <main className="px-4 sm:px-8 py-6 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Form column */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-stone-200 p-6 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-semibold shrink-0"
                    style={{ backgroundColor: ACCENT }}
                  >
                    01
                  </span>
                  <div>
                    <div className="font-semibold text-stone-900">Corporate Event Details</div>
                    <div className="text-sm text-stone-400 mt-0.5">
                      Configure IT summits, hackathons, client briefings, and team attendance
                    </div>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full whitespace-nowrap">
                  <CircleCheck size={13} /> {form.title.trim() ? "VALIDATED MODE" : "AWAITING TITLE"}
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-stone-700">Event Title &amp; Primary Anchor</label>
                  <span className="text-xs text-stone-400">Required</span>
               </div>
                <input
                  value={form.title}
                  onChange={(e) => updateForm({ title: e.target.value })}
                  placeholder="Global Enterprise AI & Autonomous Systems Summit 2026"
                  className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm bg-stone-50 focus:outline-none focus:ring-2"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">Date Timeline</label>
                  <button
                    type="button"
                    onClick={openDatePicker}
                    className="w-full flex items-center gap-2 border border-stone-200 rounded-lg px-4 py-3 text-sm bg-stone-50 text-left"
                  >
                    <Calendar size={15} className="text-stone-400 shrink-0" />
                    <span className={form.dateRange ? "text-stone-800" : "text-stone-400"}>
                      {form.dateRange || "Select date range"}
                    </span>
                    <ChevronDown size={14} className="text-stone-400 ml-auto shrink-0" />
                  </button>
                  <Dropdown open={dateOpen} onClose={() => setDateOpen(false)}>
                    <div className="p-3 space-y-3 w-72">
                      <div>
                        <div className="text-xs font-medium text-stone-500 mb-1">Start date</div>
                        <input
                          type="date"
                          value={dateDraft.start}
                          onChange={(e) => setDateDraft((d) => ({ ...d, start: e.target.value }))}
                          className="w-full border border-stone-200 rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-stone-500 mb-1">End date</div>
                        <input
                          type="date"
                          value={dateDraft.end}
                          onChange={(e) => setDateDraft((d) => ({ ...d, end: e.target.value }))}
                          className="w-full border border-stone-200 rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2"
                        />
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => setDateOpen(false)}
                          className="flex-1 py-1.5 rounded-md border border-stone-200 text-sm text-stone-600 hover:bg-stone-50"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={applyDate}
                          className="flex-1 py-1.5 rounded-md text-sm text-white"
                          style={{ backgroundColor: ACCENT }}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </Dropdown>
                </div>
                <div className="relative">
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">Session Timing &amp; Timezone</label>
                  <button
                    type="button"
                    onClick={openTimePicker}
                    className="w-full flex items-center gap-2 border border-stone-200 rounded-lg px-4 py-3 text-sm bg-stone-50 text-left"
                  >
                    <Clock size={15} className="text-stone-400 shrink-0" />
                    <span className={form.timing ? "text-stone-800" : "text-stone-400"}>
                      {form.timing || "Select session time"}
                    </span>
                    <ChevronDown size={14} className="text-stone-400 ml-auto shrink-0" />
                  </button>
                  <Dropdown open={timeOpen} onClose={() => setTimeOpen(false)}>
                    <div className="p-3 space-y-3 w-72">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <div className="text-xs font-medium text-stone-500 mb-1">Start time</div>
                          <input
                            type="time"
                            value={timeDraft.start}
                            onChange={(e) => setTimeDraft((t) => ({ ...t, start: e.target.value }))}
                            className="w-full border border-stone-200 rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-stone-500 mb-1">End time</div>
                          <input
                            type="time"
                            value={timeDraft.end}
                            onChange={(e) => setTimeDraft((t) => ({ ...t, end: e.target.value }))}
                            className="w-full border border-stone-200 rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-stone-500 mb-1">Timezone</div>
                        <select
                          value={timeDraft.tz}
                          onChange={(e) => setTimeDraft((t) => ({ ...t, tz: e.target.value }))}
                          className="w-full border border-stone-200 rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2 bg-white"
                        >
                          {TIMEZONES.map((tz) => (
                            <option key={tz} value={tz}>
                              {tz}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => setTimeOpen(false)}
                          className="flex-1 py-1.5 rounded-md border border-stone-200 text-sm text-stone-600 hover:bg-stone-50"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={applyTime}
                          className="flex-1 py-1.5 rounded-md text-sm text-white"
                          style={{ backgroundColor: ACCENT }}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </Dropdown>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">Physical Venue / Campus</label>
                  <div className="flex items-center gap-2 border border-stone-200 rounded-lg px-4 py-3 text-sm bg-stone-50">
                    <MapPin size={15} className="text-stone-400 shrink-0" />
                    <input
                      value={form.venue}
                      onChange={(e) => updateForm({ venue: e.target.value })}
                      placeholder="TechTorch Innovation Center, San Francisco, CA"
                      className="w-full bg-transparent focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">Event Format &amp; Delivery</label>
                  <div className="flex gap-2">
                    {FORMATS.map((f) => {
                      const active = form.format === f;
                      return (
                        <button
                          key={f}
                          onClick={() => updateForm({ format: f })}
                          className={`flex-1 px-3 py-2.5 rounded-lg text-sm border ${
                            active ? "text-white border-transparent font-medium" : "border-stone-200 text-stone-500 hover:bg-stone-50"
                          }`}
                          style={active ? { backgroundColor: ACCENT } : {}}
                        >
                          {f}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-stone-700">Max Capacity &amp; Tier Allocations</label>
                  <span className="text-xs bg-stone-100 text-stone-500 px-2.5 py-1 rounded-md font-medium">
                    Total: {totalCapacity} Passes
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Internal Teams / Engineers", tag: "Staff", tagStyle: "bg-rose-50 text-rose-500", note: "Invited Quota • Internal" },
                    { label: "Enterprise Clients", tag: "Executive", tagStyle: "bg-stone-100 text-stone-500", note: "Invited Quota • Partner Tier" },
                    { label: "Virtual Broadcasters", tag: "Remote", tagStyle: "bg-emerald-50 text-emerald-600", note: "Global Streaming Seats" },
                  ].map((t, i) => (
                    <div key={t.label} className="border border-stone-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-stone-700">{t.label}</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${t.tagStyle}`}>{t.tag}</span>
                      </div>
                      <input
                        type="number"
                        min={0}
                        value={form.tiers[i]}
                        onChange={(e) => updateTier(i, Number(e.target.value))}
                        className="text-2xl font-semibold text-stone-900 w-full bg-transparent border-b border-transparent hover:border-stone-200 focus:outline-none focus:border-stone-400"
                      />
                      <div className="text-xs text-stone-400 mt-1">{t.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-stone-700 mb-1.5 block">Short Summary &amp; Briefing Synopsis</label>
                <textarea
                  value={form.summary}
                  onChange={(e) => updateForm({ summary: e.target.value })}
                  rows={3}
                  placeholder="Convening 500+ Fortune 500 CIOs, enterprise architects, and engineering leaders..."
                  className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-600 leading-relaxed bg-stone-50 focus:outline-none focus:ring-2 resize-y"
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-stone-100 flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-emerald-600">
                  <span className="text-emerald-500">☁</span> Autosaved just now to cloud directory
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => saveAs("draft")}
                    className="px-4 py-2.5 rounded-lg text-sm font-medium bg-stone-100 text-stone-600 hover:bg-stone-200"
                  >
                    Save Draft
                  </button>
                  <button
                    onClick={() => saveAs("upcoming")}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <Rocket size={15} /> Create &amp; Publish Event
                  </button>
                </div>
              </div>
            </div>

            {/* Preview column */}
            <div className="rounded-lg overflow-hidden border border-stone-200">
              <div className="h-40 overflow-hidden bg-stone-100">
                <img
                  src="/event-hall-image.png"
                  alt="TechTorch Enterprise Event"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold" style={{ color: ACCENT }}>
                    FLAGSHIP {form.format.toUpperCase()} PLENARY
                  </span>
                  <span className="text-stone-400 text-xs">3 Days</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-stone-500">{form.dateRange || "Date TBD"}</span>
                  <span className="text-white text-[10px] font-medium px-2.5 py-1 rounded" style={{ backgroundColor: ACCENT }}>
                    {form.venue ? form.venue.split(",").slice(-2).join(",").trim() || form.venue : "Venue TBD"}
                  </span>
                </div>

                <h3 className="font-semibold text-stone-900 leading-snug">{form.title || "Untitled Event"}</h3>

                <p className="text-sm text-stone-500 leading-relaxed">
                  {form.summary ? form.summary.slice(0, 90) + (form.summary.length > 90 ? "…" : "") : "Write a summary to see it here..."}
                </p>

                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                    <span>Capacity Registered</span>
                    <span className="font-medium text-stone-700">
                      {form.registered} / {totalCapacity || 1} ({Math.round((form.registered / (totalCapacity || 1)) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.min(100, (form.registered / (totalCapacity || 1)) * 100)}%`,
                        backgroundColor: ACCENT,
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={openPreviewLive}
                    className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium text-white py-2.5 rounded-lg"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <Sparkles size={14} />
                    Launch Event Hub
                  </button>

                  <button
                    onClick={() => shareLink(form.id)}
                    className="w-10 h-10 flex items-center justify-center border border-stone-200 rounded-lg text-stone-500 hover:bg-stone-50"
                    aria-label="Share"
                  >
                    <Share2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Events Schedule */}
          <div>
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide mb-2" style={{ color: ACCENT }}>
                  <ClipboardList size={13} /> GLOBAL PORTFOLIO DIRECTORY
                </div>
                <h2 className="text-2xl font-semibold text-stone-900">Enterprise Events Schedule</h2>
                <p className="text-sm text-stone-500 mt-1 max-w-lg">
                  Monitor registration velocity, booking allocations, and historical archives across all
                  institutional regions.
                </p>
              </div>
              <button
                onClick={() => setCompareOn((v) => !v)}
                className={`flex items-center gap-3 border rounded-lg px-4 py-2.5 transition-colors ${
                  compareOn ? "bg-stone-900 border-stone-900" : "bg-white border-stone-200"
                }`}
              >
                <SlidersHorizontal size={15} style={{ color: compareOn ? "white" : ACCENT }} />
                <span className={`text-sm font-medium ${compareOn ? "text-white" : "text-stone-700"}`}>
                  Side-by-Side Comparison
                </span>
                <span className={`text-xs border-l pl-3 ${compareOn ? "text-stone-300 border-stone-600" : "text-stone-400 border-stone-200"}`}>
                  {activeCount} Active · {pastCount} Past Archive
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((ev) => {
                const total = ev.tiers.reduce((a, b) => a + b, 0) || 1;
                const pct = Math.round((ev.registered / total) * 100);
                const isPast = ev.status === "past";
                const isDraft = ev.status === "draft";
                return (
                  <div
                    key={ev.id}
                    className={`bg-white rounded-xl border p-6 space-y-4 ${
                      compareOn ? "border-stone-300 ring-1 ring-stone-200" : "border-stone-200"
                    }`}
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      {isPast ? (
                        <span className="text-[10px] font-semibold bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full">
                          RECENT &amp; PAST
                        </span>
                      ) : isDraft ? (
                        <span className="text-[10px] font-semibold bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full">
                          DRAFT
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: ACCENT }}>
                          UPCOMING &amp; ACTIVE
                        </span>
                      )}
                      <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${isPast ? "bg-stone-100 text-stone-500" : "bg-rose-50 text-rose-500"}`}>
                        {ev.tag}
                      </span>
                      {!isPast && (
                        <span className="flex items-center gap-1 text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {ev.format} Mode
                        </span>
                      )}
                      {isPast && pct >= 100 && (
                        <span className="ml-auto text-[10px] font-semibold bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full">
                          🔒 100% Sold Out
                        </span>
                      )}
                      {!isPast && (
                        <span className="flex items-center gap-1 text-[10px] font-semibold border border-stone-200 text-stone-500 px-2.5 py-1 rounded-full">
                          <CircleCheck size={11} /> {isDraft ? "Unpublished" : "Confirmed"}
                        </span>
                      )}
                    </div>
                    {isPast && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold border border-stone-200 text-stone-500 px-2.5 py-1 rounded-full">
                        <CircleCheck size={11} /> Concluded · Completed
                      </span>
                    )}

                    <h3 className="text-xl font-semibold text-stone-900">{ev.title}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{ev.summary}</p>

                    <div className="flex items-center gap-6 text-sm text-stone-600 flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-stone-400" /> {ev.dateRange}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-stone-400" /> {ev.venue}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                        <span>{isPast ? "Final Attendance (Verified Quota)" : "Allocated Capacity (Tier Quotas)"}</span>
                        <span className="font-medium text-stone-700">
                          {ev.registered} / {total} {isPast ? "Attendees" : `(${pct}%)`}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${Math.min(100, pct)}%`, backgroundColor: isPast ? "#a8a29e" : ACCENT }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2 flex-wrap relative">
                      {isPast ? (
                        <>
                          <button
                            onClick={() => flashToast("Playing keynote VOD…")}
                            className="flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-lg px-3.5 py-2 text-stone-600 hover:bg-stone-50"
                          >
                            <MonitorPlay size={14} /> Watch Keynote VOD
                          </button>
                          <button
                            onClick={() => flashToast("Downloading briefing report…")}
                            className="flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-lg px-3.5 py-2 text-stone-600 hover:bg-stone-50"
                          >
                            <FileText size={14} /> Briefing Report
                          </button>
                          <span className="ml-auto text-xs font-semibold bg-stone-100 text-stone-400 px-3 py-2 rounded-lg">
                            ARCHIVED
                          </span>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => openPreviewFor(ev)}
                            className="flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-lg px-3.5 py-2 text-stone-600 hover:bg-stone-50"
                          >
                            <Eye size={14} /> View Details
                          </button>
                          <button
                            onClick={() => loadIntoEditor(ev)}
                            className="flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-lg px-3.5 py-2 text-stone-600 hover:bg-stone-50"
                          >
                            <Pencil size={14} /> Edit
                          </button>
                          <div className="relative ml-auto">
                            <button
                              onClick={() => setManageOpenId(manageOpenId === ev.id ? null : ev.id)}
                              className="flex items-center gap-1.5 text-sm font-medium rounded-lg px-3.5 py-2 text-white"
                              style={{ backgroundColor: ACCENT }}
                            >
                              <SlidersHorizontal size={14} /> Manage Event <ChevronDown size={13} />
                            </button>
                            <Dropdown open={manageOpenId === ev.id} onClose={() => setManageOpenId(null)} align="right">
                              {isDraft && (
                                <button
                                  onClick={() => setStatus(ev.id, "upcoming")}
                                  className="w-full flex items-center gap-2 text-left px-3 py-2 hover:bg-stone-50 text-stone-700"
                                >
                                  <Rocket size={13} /> Publish Now
                                </button>
                              )}
                              {!isDraft && (
                                <button
                                  onClick={() => setStatus(ev.id, "draft")}
                                  className="w-full flex items-center gap-2 text-left px-3 py-2 hover:bg-stone-50 text-stone-700"
                                >
                                  <ArrowDownToLine size={13} /> Move to Draft
                                </button>
                              )}
                              <button
                                onClick={() => setStatus(ev.id, "past")}
                                className="w-full flex items-center gap-2 text-left px-3 py-2 hover:bg-stone-50 text-stone-700"
                              >
                                <ArchiveRestore size={13} /> Mark as Past / Archive
                              </button>
                              <button
                                onClick={() => shareLink(ev.id)}
                                className="w-full flex items-center gap-2 text-left px-3 py-2 hover:bg-stone-50 text-stone-700"
                              >
                                <Share2 size={13} /> Copy Share Link
                              </button>
                              <button
                                onClick={() => deleteEvent(ev.id)}
                                className="w-full flex items-center gap-2 text-left px-3 py-2 hover:bg-rose-50 text-rose-500"
                              >
                                <Trash2 size={13} /> Delete Event
                              </button>
                            </Dropdown>
                          </div>
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
