import { useState } from "react";
import {
  Search, Bell, History, ChevronDown, ChevronRight, Save, ArrowRight, CircleCheck,
  UploadCloud, FileType2, Download, Trash2, GripVertical, Plus,
  BarChart3, PenSquare, Archive, ClipboardList, RefreshCw,
} from "lucide-react";

const ACCENT = "#780042";
const FONT = "Inter, sans-serif";


const BULLETS = [
  "Immediate 40% reduction in workflow latency via Autonomous Mesh integration.",
  "Zero-Trust Protocol 2.0 governance requirements for tier-1 enterprises.",
  "Cost-to-scale analysis comparing traditional SaaS vs Agentic Orchestration.",
];

const RELEASES = [
  {
    tag: "Latest Published Update • May 2026",
    tagStyle: "bg-rose-50 text-rose-500",
    published: "Published: May 2026",
    title: "Autonomous Architecture & Quantum-Safe AI Fabric (2026 Update)",
    meta: "Series TT-802 • Primary Architect: Dr. Aris Thorne",
    stats: [
      { label: "DOWNLOADS", value: "4,180", sub: "+38% WoW", subColor: "text-emerald-600" },
      { label: "LEAD CONVERSION", value: "46.2%", sub: "Verified CXOs", subColor: "text-stone-400" },
      { label: "AVG. READ TIME", value: "18.2m", sub: "82% Complete", subColor: "text-stone-400" },
    ],
    actions: [
      { label: "View Analytics", icon: BarChart3 },
      { label: "Edit Metadata", icon: PenSquare },
    ],
    download: true,
  },
  {
    tag: "Previous Release • Feb 2026",
    tagStyle: "bg-stone-100 text-stone-500",
    published: "Published: Feb 2026",
    title: "Legacy Core Modernization: Event-Driven Migration Roadmap",
    meta: "Series TT-740 • Primary Architect: Kunal Purohit",
    stats: [
      { label: "DOWNLOADS", value: "6,840", sub: "Cumulative", subColor: "text-stone-400" },
      { label: "LIFECYCLE", value: "Active Reference", sub: "Historical Benchmark", subColor: "text-stone-400", big: false, isText: true },
      { label: "CITATION INDEX", value: "99.1", sub: "Top Tier", subColor: "text-stone-400" },
    ],
    actions: [
      { label: "View Archive", icon: Archive },
      { label: "Executive Brief", icon: ClipboardList },
    ],
    revise: true,
  },
];


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
  const [gating, setGating] = useState("gated");
  const [tab, setTab] = useState("published");

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{ fontFamily: FONT }}>

        {/* Main column */}
        <div className="min-h-screen">
          {/* Top bar */}
          <header className="flex items-center gap-4 px-4 sm:px-6 py-3 border-b border-stone-200 bg-white flex-wrap">
            <div className="flex-1 max-w-xl relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                placeholder="Search CMS documents, telemetry, entries..."
                className="w-full pl-9 pr-3 py-2 rounded-md bg-stone-50 border border-stone-200 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2"
              />
            </div><div className="ml-auto flex items-center gap-4">

  {/* Green Status */}
  <span className="hidden md:flex items-center gap-1.5 text-xs font-medium text-emerald-600 whitespace-nowrap">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
    US-EAST PRIMARY
  </span>

  {/* Notification */}
  <button
    type="button"
    aria-label="Notifications"
    className="relative text-stone-400 hover:text-stone-600"
  >
    <Bell size={18} />
    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-rose-500" />
  </button>

  {/* History */}
  <button
    type="button"
    aria-label="History"
    className="text-stone-400 hover:text-stone-600"
  >
    <History size={18} />
  </button>

  {/* Admin - Right Corner */}
  <div className="hidden sm:block text-sm text-right">
    <div className="font-medium leading-tight">
      Super Admin
    </div>
    <div className="text-xs text-stone-400 leading-tight">
      admin@techtorch.io
    </div>
  </div>

</div>
          </header>

          <main className="p-6 space-y-6">
            {/* Breadcrumb + title */}
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
                <button className="flex flex-col items-center gap-1 text-xs px-3 py-2 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 bg-white w-24 text-center leading-tight">
                  <History size={15} />
                  View Changelog / Update History
                </button>
                <button className="flex items-center gap-1.5 text-sm px-3 py-2.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 bg-white">
                  <Save size={14} /> Save Draft
                </button>
                <button
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
                    <CircleCheck size={13} /> Scope Validated
                  </span>
                }
              />

              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm font-medium text-stone-700">Document Title</label>
                    <span className="text-xs text-stone-400">Max 120 Characters</span>
                  </div>
                  <div className="border border-stone-200 rounded-md px-4 py-3 text-sm bg-stone-50">
                    Q2 2026 Strategic Advisory: Autonomous Systems &amp; Next-Gen Enterprise AI Fabric
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-stone-700 mb-1.5 block">
                      Domain / Technology Pillar
                    </label>
                    <button className="w-full flex items-center justify-between border border-stone-200 rounded-md px-4 py-3 text-sm bg-stone-50 text-left">
                      Autonomous Intelligence &amp; Cloud Modernization
                      <ChevronDown size={14} className="text-stone-400" />
                    </button>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-stone-700 mb-1.5 block">
                      Primary Research Architect(s)
                    </label>
                    <div className="border border-stone-200 rounded-md px-4 py-3 text-sm bg-stone-50">
                      Dr. Aris Thorne &amp; TechTorch Enterprise Architecture Group
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm font-medium text-stone-700">Executive Summary / Abstract</label>
                    <span className="text-xs text-stone-400">Editorial abstract for executive syndication</span>
                  </div>
                  <div className="border border-stone-200 rounded-md px-4 py-3 text-sm text-stone-600 leading-relaxed bg-stone-50">
                    This latest edition provides real-world benchmarks, operational blueprints, and
                    risk-mitigation frameworks for migrating mission-critical workloads to autonomous
                    agentic architectures in 2026.
                  </div>
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

              <div className="border-2 border-dashed border-stone-200 rounded-lg py-10 flex flex-col items-center justify-center text-center bg-stone-50/60 mb-5">
                <div className="w-11 h-11 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-3 text-stone-400">
                  <UploadCloud size={20} />
                </div>
                <div className="text-sm font-medium text-stone-700">
                  Drag and drop your primary PDF/DOCX whitepaper here, or{" "}
                  <span className="underline font-semibold" style={{ color: ACCENT }}>
                    browse files
                  </span>
                </div>
                <div className="text-xs text-stone-400 mt-1 tracking-wide">
                  SUPPORTED FORMATS: PDF, DOCX UP TO 45MB • ENTERPRISE COMPLIANCE VERIFIED
                </div>
              </div>

              <div className="flex items-center justify-between border border-stone-200 rounded-lg px-4 py-3 mb-6 bg-stone-50">
                <div className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-md flex items-center justify-center text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <FileType2 size={17} />
                  </span>
                  <div className="text-sm min-w-0">
  <div className="font-medium text-stone-800 break-all">
    techtorch_q2_2026_latest_research_update.pdf
  </div>
  <div className="text-xs text-stone-400">18.2 MB •</div>
</div>
                </div>
                <div className="flex items-center gap-3 text-stone-400">
                  <Download size={16} className="cursor-pointer hover:text-stone-600" />
                  <Trash2 size={16} className="cursor-pointer hover:text-rose-500" />
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-stone-700">
                  Key Takeaways &amp; Executive Highlights (Download Page Preview)
                </label>
                <button className="flex items-center gap-1 text-sm font-medium" style={{ color: ACCENT }}>
                  <Plus size={14} /> Add Bullet
                </button>
              </div>
              <div className="space-y-2.5 mb-6">
                {BULLETS.map((b, i) => (
                  <div
                    key={b}
                    className="flex items-center gap-3 border border-stone-200 rounded-md px-4 py-3 bg-stone-50"
                  >
                    <span className="text-sm font-semibold" style={{ color: ACCENT }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-stone-700 flex-1">{b}</span>
                    <GripVertical size={15} className="text-stone-300 cursor-grab" />
                  </div>
                ))}
              </div>

              <label className="text-sm font-medium text-stone-700 mb-3 block">Access &amp; Lead Generation Gating</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setGating("gated")}
                  className={`text-left rounded-lg border p-4 ${
                    gating === "gated" ? "border-rose-200" : "border-stone-200"
                  }`}
                  style={gating === "gated" ? { backgroundColor: `${ACCENT}0d` } : {}}
                >
                  <div className="flex items-center gap-2 font-medium text-stone-800 mb-1">
                    <span
                      className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
                      style={{ borderColor: ACCENT }}
                    >
                      {gating === "gated" && <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />}
                    </span>
                    Gated Release
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed pl-6">
                    Requires Verified Enterprise Business Email, Job Title &amp; Organization size prior to
                    decrypting PDF download stream.
                  </p>
                </button>
                <button
                  onClick={() => setGating("open")}
                  className={`text-left rounded-lg border p-4 ${
                    gating === "open" ? "border-stone-300" : "border-stone-200"
                  } bg-stone-50`}
                >
                  <div className="flex items-center gap-2 font-medium text-stone-800 mb-1">
                    <span className="w-4 h-4 rounded-full border-2 border-stone-300 flex items-center justify-center shrink-0">
                      {gating === "open" && <span className="w-2 h-2 rounded-full bg-stone-400" />}
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
                    Published &amp; Active (9)
                  </button>
                  <button
                    onClick={() => setTab("draft")}
                    className={`px-4 py-2 rounded-md text-sm font-medium text-center ${
                      tab === "draft" ? "bg-stone-900 text-white" : "text-stone-500"
                    }`}
                  >
                    Under Peer Review / Draft (3)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RELEASES.map((r) => (
                  <div key={r.title} className="bg-white rounded-xl border border-stone-200 p-5 space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${r.tagStyle}`}>{r.tag}</span>
                      <span className="text-xs text-stone-400">{r.published}</span>
                    </div>

                    <div>
                      <h3 className="font-semibold text-stone-900 leading-snug">{r.title}</h3>
                      <p className="text-xs text-stone-400 mt-1">{r.meta}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      {r.stats.map((s) => (
                        <div key={s.label}>
                          <div className="text-[10px] font-semibold tracking-wide text-stone-400 mb-1">
                            {s.label}
                          </div>
                          <div className={`font-semibold text-stone-900 ${s.isText ? "text-base" : "text-xl"}`}>
                            {s.value}
                          </div>
                          <div className={`text-xs mt-0.5 ${s.subColor}`}>{s.sub}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-stone-100">
                      {r.actions.map((a) => {
                        const Icon = a.icon;
                        return (
                          <button
                            key={a.label}
                            className="flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-md px-3 py-2 text-stone-600 hover:bg-stone-50"
                          >
                            <Icon size={14} /> {a.label}
                          </button>
                        );
                      })}
                      {r.download && (
                        <button className="ml-auto w-9 h-9 flex items-center justify-center border border-stone-200 rounded-md text-stone-400 hover:bg-stone-50">
                          <Download size={15} />
                        </button>
                      )}
                      {r.revise && (
                        <button
                          className="ml-auto flex items-center gap-1.5 text-sm font-medium rounded-md px-3 py-2 text-white"
                          style={{ backgroundColor: ACCENT }}
                        >
                          <RefreshCw size={14} /> Revise Paper
                        </button>
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
