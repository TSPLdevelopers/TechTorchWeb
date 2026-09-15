import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search, ChevronDown, Eye, Save, TriangleAlert, Bell, Bold, Italic,
  Link2, AlignLeft, ChevronRight, Code2, Plus, Pencil, Copy, ExternalLink,
  Trash2, Users, Shield, ShieldCheck, Cloud, PenTool, Zap,FileText,
Briefcase, Radio,} from "lucide-react";

const ACCENT = "#780042";


const REQ_FORMATS = [
  { label: "Full-Time Enterprise Requisition", icon: Briefcase },
  { label: "Contract / Advisory Specialist", icon: FileText },
  { label: "Campus & Leadership Fellow", icon: Users },
];

const SKILL_TAGS = ["Agentic AI", "Distributed Systems", "Kubernetes", "Vector Architecture"];

const SCREENING_FILTERS = [
  { title: "Require 5+ Yrs Cloud Architecture", desc: "Auto-reject applicants below experience threshold." },
  { title: "Standard Enterprise Clearance", desc: "Requires clean background verification check for client environments." },
  { title: "Work Authorization Verified", desc: "US Citizen / Green Card / Authorized to work without sponsor." },
];

const SYNDICATION = [
  { label: "LinkedIn Recruiter Sync", color: "bg-blue-500" },
  { label: "TechTorch Careers Portal", color: "bg-[#780042]" },
  { label: "Glassdoor & Indeed Enterprise", color: "bg-emerald-500" },
];

const DEPT_FILTERS = ["All Positions", "Engineering (6)", "AI & Research (3)", "Cyber Defense (3)", "Product & Design (2)"];

const REQUISITIONS = [
  {
    icon: PenTool,
    title: "Principal Enterprise AI Solutions Architect",
    hot: true,
    slug: "/careers/requisition-ai09-sf",
    department: "AI & Workflows",
    location: "San Francisco, CA (Hybrid)",
    applicants: "42 Applicants",
    sub: "6 in Technical Review",
    subColor: "text-blue-500",
    status: "Active / Open",
    statusStyle: "bg-emerald-50 text-emerald-600",
    posted: "Oct 12, 2024",
  },
  {
    icon: ShieldCheck,
    title: "Senior Zero-Trust Security Engineer",
    slug: "/careers/requisition-sec04-zh",
    department: "Cyber Defense",
    location: "Zurich / Remote (EMEA)",
    applicants: "28 Applicants",
    sub: "4 Interviewing",
    subColor: "text-blue-500",
    status: "Active / Open",
    statusStyle: "bg-emerald-50 text-emerald-600",
    posted: "Oct 08, 2024",
  },
  {
    icon: Cloud,
    title: "Staff Cloud Infrastructure Architect (Kubernetes)",
    slug: "/careers/requisition-cld01-ny",
    department: "Cloud Systems",
    location: "New York, NY (Hybrid)",
    applicants: "64 Applicants",
    sub: "8 in Final Round",
    subColor: "text-amber-600",
    status: "Closing Soon",
    statusStyle: "bg-amber-50 text-amber-600",
    posted: "Sep 28, 2024",
  },
  {
    icon: PenTool,
    title: "Lead Product Designer - Enterprise Consoles",
    slug: "/careers/requisition-des02-sf",
    department: "Product Experience",
    location: "San Francisco, CA",
    applicants: "19 Applicants",
    sub: "Draft Review",
    subColor: "text-stone-400",
    status: "Draft / Unlisted",
    statusStyle: "bg-stone-100 text-stone-500",
    posted: "Yesterday",
    draft: true,
  },
];
function SidebarLink({ item, onNavigate }) {
  const Icon = item.icon;
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => { navigate(item.path); if (onNavigate) onNavigate(); }}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-left transition-colors ${
        item.active
          ? "bg-[#6d1b3f] text-white font-medium"
          : "text-stone-600 hover:bg-stone-100"
      }`}
    >
      <Icon size={17} strokeWidth={2} />
      <span className="whitespace-nowrap">
  {item.label}
</span>
     
    </button>
  );
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

export default function JobOpeningsCMS() {
  const [format, setFormat] = useState("Full-Time Enterprise Requisition");
  const [urgency, setUrgency] = useState("immediate");
  const [tags, setTags] = useState(SKILL_TAGS);
  const [checks, setChecks] = useState([true, true, true]);
  const [syndication, setSyndication] = useState([true, true, true]);
  const [deptFilter, setDeptFilter] = useState("All Positions");

  return (
    <div
  className="min-h-screen bg-stone-50 text-stone-900"
  style={{ fontFamily: "Inter, sans-serif" }}
>
      <div className="flex">

      {/* Main column */}
        <div className="flex-1 min-w-0">
          {/* Top bar */}
          <header className="flex items-center gap-3 px-4 sm:px-6 py-3 border-b border-stone-200 bg-white flex-wrap">
            <div className="flex-1 min-w-[160px] max-w-xl relative order-3 sm:order-none basis-full sm:basis-auto">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                placeholder="Search requisitions, candidate pools, skill taxonomies..."
                className="w-full pl-9 pr-3 py-2 rounded-md bg-stone-50 border border-stone-200 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2"
              />
            </div>
        <div className="ml-auto flex items-center gap-4">

  {/* Green Status - RIGHT */}
  <span className="hidden md:flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full whitespace-nowrap">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
    Talent Pipeline Gateway Live
  </span>

  {/* Notification Icon - RIGHT */}
  <button
    type="button"
    aria-label="Notifications"
    className="relative text-stone-400 hover:text-stone-600"
  >
    <Bell size={18} />
    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-rose-500" />
  </button>

  {/* Admin - RIGHT CORNER */}
  <div className="hidden sm:flex items-center gap-2 text-sm text-right">
    <div>
      <div className="font-medium leading-tight">
        Admin / Recruiter
      </div>
      <div className="text-xs text-stone-400 leading-tight">
        Editorial &amp; Talent Lead
      </div>
    </div>

    <div
      className="w-8 h-8 rounded-full text-white text-xs flex items-center justify-center font-semibold"
      style={{ backgroundColor: ACCENT }}
    >
      AD
    </div>
  </div>

</div>
          </header>

          <main className="p-4 sm:p-6 space-y-6">
            {/* Breadcrumb + actions */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <span>TechTorch Talent</span>
                <span>/</span>
                <span>Job Openings</span>
                <span>/</span>
                <span className="font-medium" style={{ color: ACCENT }}>
                  Post New Job
                </span>
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs px-2 py-0.5 rounded-full ml-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Draft Auto-Saved
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 bg-white">
                  <Eye size={14} /> Preview Requisition
                </button>
                <button className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 bg-white">
                  <Save size={14} /> Save as Draft
                </button>
                <button
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
                {/* Format */}
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-semibold tracking-wide text-stone-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                    REQUISITION FORMAT — SELECT SCHEMA ARCHETYPE
                  </div>
                  <span className="text-xs text-stone-400 font-mono">ID: REQ-2026-AI09</span>
                </div>
                <div className="flex gap-2 flex-wrap -mt-3">
                  {REQ_FORMATS.map((f) => {
                    const Icon = f.icon;
                    const isActive = format === f.label;
                    return (
                      <button
                        key={f.label}
                        onClick={() => setFormat(f.label)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm border ${
                          isActive ? "text-white border-transparent" : "border-stone-200 text-stone-600 hover:bg-stone-50"
                        }`}
                        style={isActive ? { backgroundColor: ACCENT } : {}}
                      >
                        <Icon size={14} /> {f.label}
                        {isActive && (
                          <span className="bg-white/20 text-[10px] px-1.5 py-0.5 rounded font-semibold">ACTIVE</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Three meta fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <FieldLabel>DEPARTMENT</FieldLabel>
                    <div className="border border-stone-200 rounded-md px-3 py-2 text-sm bg-stone-50">
                      Cloud &amp; AI Engineering
                    </div>
                  </div>
                  <div>
                    <FieldLabel>LOCATION &amp; ARRANGEMENT</FieldLabel>
                    <button className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm bg-stone-50 text-left">
                      San Francisco, CA (Hybrid) <ChevronDown size={14} className="text-stone-400" />
                    </button>
                  </div>
                  <div>
                    <FieldLabel>SENIORITY LEVEL</FieldLabel>
                    <button className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm bg-stone-50 text-left">
                      Principal / Staff (8+ Yrs) <ChevronDown size={14} className="text-stone-400" />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <FieldLabel>OFFICIAL REQUISITION TITLE</FieldLabel>
                  <h1 className="text-2xl font-semibold leading-tight text-stone-900 border border-stone-200 rounded-md px-4 py-3">
                    Principal Enterprise AI Solutions Architect
                  </h1>
                </div>

                {/* Pitch */}
                <div>
                  <FieldLabel>EXECUTIVE VALUE PROPOSITION &amp; PITCH</FieldLabel>
                  <div className="border border-stone-200 rounded-md px-4 py-3 text-sm text-stone-600 leading-relaxed bg-stone-50">
                    Lead multi-agent orchestration, autonomic enterprise platform integrations, and scalable
                    foundation model deployments for Global 2000 clients across hybrid cloud envelopes.
                  </div>
                </div>

                {/* Rich text toolbar */}
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-1 text-stone-500">
                    <span className="text-sm font-medium px-2">H1</span>
                    <span className="text-sm font-medium px-2">H2</span>
                    <span className="w-px h-4 bg-stone-200 mx-1" />
                    <Bold size={15} className="mx-1.5" />
                    <Italic size={15} className="mx-1.5" />
                    <Link2 size={15} className="mx-1.5" />
                    <AlignLeft size={15} className="mx-1.5" />
                    <ChevronRight size={15} className="mx-1.5" />
                    <Code2 size={15} className="mx-1.5" />
                  </div>
                  <span className="text-xs text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live Spellcheck &amp; Policy Guard Active
                  </span>
                </div>

                {/* Body content */}
                <div className="text-sm leading-relaxed text-stone-700 space-y-5">
                  <div>
                    <h3 className="font-semibold text-stone-900 flex items-center gap-2 mb-2">
                      <span className="w-1 h-4 rounded-sm" style={{ backgroundColor: ACCENT }} />
                      About the Role &amp; Strategic Impact
                    </h3>
                    <p className="mb-3">
                      As a <span className="font-semibold text-stone-900">Principal Enterprise AI Solutions Architect</span> at
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
                      <li>
                        Architect and deliver end-to-end multi-agent orchestration fabrics across hybrid Kubernetes
                        clusters (AWS EKS, Azure AKS, GCP GKE).
                      </li>
                      <li>
                        Spearhead client reference implementations incorporating semantic routing, high-throughput
                        vector databases, and real-time state synchronizers.
                      </li>
                      <li>
                        Partner with internal Security Officers to enforce SOC2 Type II, FedRAMP, and HIPAA guardrails
                        across dynamic inference pipelines.
                      </li>
                      <li>
                        Act as the primary technical authority in executive architecture reviews, post-mortems, and
                        high-stakes production go-lives.
                      </li>
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

                  <div className="rounded-lg border p-4" style={{ backgroundColor: `${ACCENT}0d`, borderColor: `${ACCENT}33` }}>
                    <div className="text-[11px] font-semibold tracking-wide mb-1" style={{ color: ACCENT }}>
                      ENTERPRISE COMPENSATION BAND
                    </div>
                    <div className="text-2xl font-semibold text-stone-900">
                      $210,000 — $265,000{" "}
                      <span className="text-sm font-normal text-stone-500">USD / Year Base</span>
                    </div>
                    <p className="text-sm text-stone-600 mt-1.5">
                      Plus top-tier equity package (ISO/NSO), comprehensive 401(k) matching, complete family
                      healthcare benefits, and annual executive continuous education allowances.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-400 border-t border-stone-100 pt-3">
                  <span>Cursor positioned in section 4 · Markdown &amp; LaTeX support enabled</span>
                  <span className="font-mono">412 words · 2,890 characters · 3 min read</span>
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
                    <div>
                      <FieldLabel>HIRING MANAGER</FieldLabel>
                      <button className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm text-left">
                        <span className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-stone-900 text-white text-[10px] flex items-center justify-center font-semibold">
                            ML
                          </span>
                          <span>
                            Marcus Liu
                            <span className="block text-xs text-stone-400">VP, Enterprise Engineering</span>
                          </span>
                        </span>
                        <ChevronDown size={14} className="text-stone-400 shrink-0" />
                      </button>
                    </div>

                    <div>
                      <FieldLabel>LEAD TECHNICAL RECRUITER</FieldLabel>
                      <button className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm text-left">
                        <span className="flex items-center gap-2">
                          <span
                            className="w-7 h-7 rounded-full text-white text-[10px] flex items-center justify-center font-semibold"
                            style={{ backgroundColor: ACCENT }}
                          >
                            EV
                          </span>
                          <span>
                            Elena Vance
                            <span className="block text-xs text-stone-400">Senior Staff Talent Partner</span>
                          </span>
                        </span>
                        <ChevronDown size={14} className="text-stone-400 shrink-0" />
                      </button>
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
                              checked={urgency === opt.key}
                              onChange={() => setUrgency(opt.key)}
                              style={{ accentColor: ACCENT }}
                            />
                            <span className={urgency === opt.key ? "font-medium" : "text-stone-500"}>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <FieldLabel>SKILL TAXONOMY TAGS</FieldLabel>
                        <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full -mt-3">
                          {tags.length} Assigned
                        </span>
                      </div>
                      <div className="flex flex-wrap">
                        {tags.map((t) => (
                          <TagChip key={t} label={t} onRemove={() => setTags(tags.filter((x) => x !== t))} />
                        ))}
                      </div>
                      <button className="w-full flex items-center justify-center gap-1 border border-stone-200 rounded-md py-1.5 text-xs text-stone-500 hover:bg-stone-50 mt-1">
                        <Plus size={12} /> Add Skill Tag
                      </button>
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
                          checked={checks[i]}
                          onChange={() =>
                            setChecks((prev) => prev.map((c, idx) => (idx === i ? !c : c)))
                          }
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
                    {SYNDICATION.map((s, i) => (
                      <label key={s.label} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-stone-700">
                          <span className={`w-2 h-2 rounded-full ${s.color}`} /> {s.label}
                        </span>
                        <input
                          type="checkbox"
                          checked={syndication[i]}
                          onChange={() =>
                            setSyndication((prev) => prev.map((c, idx) => (idx === i ? !c : c)))
                          }
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
                        14 Active Openings
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
                    placeholder="Filter jobs by title, department, location..."
                    className="w-full pl-8 pr-3 py-1.5 rounded-md border border-stone-200 text-sm placeholder:text-stone-400"
                  />
                </div>
                <button
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
                    {REQUISITIONS.map((r) => {
                      const Icon = r.icon;
                      return (
                        <tr key={r.title} className="border-b border-stone-50 align-top">
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
                                  {r.hot && (
                                    <span className="text-[10px] text-rose-500 font-semibold">HOT</span>
                                  )}
                                </div>
                                <div className="text-xs text-stone-400 mt-0.5 font-mono">{r.slug}</div>
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
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${r.statusStyle}`}>
                              {r.status}
                            </span>
                          </td>
                          <td className="py-3 pr-4 text-stone-500">{r.posted}</td>
                          <td className="py-3 text-right">
                            <div className="flex items-center justify-end gap-2 text-stone-400">
                              <Pencil size={14} className="cursor-pointer hover:text-stone-600" />
                              <Copy size={14} className="cursor-pointer hover:text-stone-600" />
                              {r.draft ? (
                                <Trash2 size={14} className="cursor-pointer hover:text-rose-500" />
                              ) : (
                                <ExternalLink size={14} className="cursor-pointer hover:text-stone-600" />
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
                <span className="text-stone-400 text-xs">Showing 1 to 4 of 14 requisitions</span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button className="px-3 py-1.5 rounded-md border border-stone-200 text-stone-500 text-xs hover:bg-stone-50">
                    Previous
                  </button>
                  {[1, 2, 3].map((p) => (
                    <button
                      key={p}
                      className={`w-7 h-7 rounded-md text-xs ${
                        p === 1 ? "text-white" : "border border-stone-200 text-stone-500 hover:bg-stone-50"
                      }`}
                      style={p === 1 ? { backgroundColor: ACCENT } : {}}
                    >
                      {p}
                    </button>
                  ))}
                  <button className="px-3 py-1.5 rounded-md border border-stone-200 text-stone-500 text-xs hover:bg-stone-50">
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
