import { useState } from "react";
import {
  LayoutGrid,
  FileText,
  Briefcase,
  Calendar,
  FolderKanban,
  Settings,
  Search,
  ChevronDown,
  Eye,
  Save,
  Play,
  MapPin,
  Radio,
  Star,
  ImagePlus,
  Bold,
  Italic,
  Link2,
  Quote,
  Code2,
  List,
  ListOrdered,
  Image as ImageIcon,
  Plus,
  Pencil,
  Copy,
  ExternalLink,
  Trash2,
  Rss,
  Megaphone,
  Newspaper,
  Lightbulb,
  X,
} from "lucide-react";

const TAGS = [
  "Enterprise AI",
  "Cloud Architecture",
  "Autonomous Systems",
];

const DISPATCH_FILTERS = [
  "All Releases",
  "Product Announcements (5)",
  "Company Milestones (4)",
  "Executive Press (3)",
];

const DISPATCHES = [
  {
    icon: Megaphone,
    title: "TechTorch Announces Strategic Multi-Cloud AI Partnership",
    badge: "BREAKING",
    dateline: "SAN FRANCISCO",
    slug: "/press/strategic-multi-cloud-ai-partnership-2024",
    category: "Product Announcement",
    wire: "Global AP/TechWire",
    status: "Dispatched",
    statusDate: "Today, 08:00 EST",
    reach: "48.2k syndications",
    outlets: "140 Outlets",
  },
  {
    icon: Newspaper,
    title: "TechTorch Q3 Enterprise Innovation Brief Released",
    dateline: "NEW YORK",
    slug: "/press/q3-enterprise-innovation-brief",
    category: "Executive Press",
    wire: "Financial News Wire",
    status: "Dispatched",
    statusDate: "Oct 10, 2024",
    reach: "31.5k syndications",
    outlets: "92 Outlets",
  },
  {
    icon: Settings,
    title: "New European Security Center of Excellence Operational in Zurich",
    dateline: "ZURICH",
    slug: "/press/security-coe-operational-zurich",
    category: "Company Milestone",
    wire: "EMEA Wire Distribution",
    status: "Dispatched",
    statusDate: "Oct 03, 2024",
    reach: "19.1k syndications",
    outlets: "65 Outlets",
  },
];

const ARTICLES = [
  {
    title: "Distributed Event Fabric at Scale: 100M Msg/Sec Architecture",
    slug: "/insights/distributed-event-fabric-scale",
    category: "Cloud Infrastructure",
    author: "Elena Vance",
    status: "Published",
    date: "Oct 12, 2024",
    metric: "18.4k views",
    read: "7m read",
  },
  {
    title: "Zero-Trust Multi-Tenant Orchestration for Cloud Kubernetes",
    slug: "/insights/zero-trust-multi-tenant-kubernetes",
    category: "Product & Engineering",
    author: "Marcus Sterling",
    status: "Published",
    date: "Sep 28, 2024",
    metric: "9.2k views",
    read: "4m read",
  },
  {
    title: "Next-Gen Vector Database Benchmarks & RAG Performance",
    slug: "/insights/vector-db-benchmarks-rag",
    category: "AI & Workflows",
    author: "Dr. Aris Thorne",
    status: "Draft",
    date: "Yesterday at 18:20",
    metric: "Unpublished",
    read: "~6m read",
  },
];

function StatusDot({ status }) {
  const color =
    status === "Published" || status === "Dispatched"
      ? "bg-emerald-500"
      : "bg-amber-500";

  return (
    <span
      className={`inline-block w-1.5 h-1.5 rounded-full ${color} mr-1.5`}
    />
  );
}
function FieldBlock({ icon: Icon, label, children }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-stone-500 mb-1.5">
        {Icon && <Icon size={12} />}
        {label}
      </div>

      {children}
    </div>
  );
}

function TagChip({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1 bg-stone-100 border border-stone-200 rounded-md px-2 py-1 text-xs text-stone-700 mr-1.5 mb-1.5">
      {label}

      <X
        size={12}
        className="cursor-pointer text-stone-400 hover:text-stone-600"
        onClick={onRemove}
      />
    </span>
  );
}

export default function TechTorchCMS() {
  const [tags, setTags] = useState(TAGS);
  const [format, setFormat] = useState("News & Press Release");
  const [publishTiming, setPublishTiming] = useState("immediate");
  const [dispatchFilter, setDispatchFilter] = useState("All Releases");

  return (
    <div
  className="min-h-screen bg-stone-50 text-stone-900"
  style={{ fontFamily: "Inter, sans-serif" }}
>

      {/* Main Content */}
      <div className="min-h-screen">

        {/* Top bar */}
        <header className="flex items-center gap-4 px-4 sm:px-6 py-3 border-b border-stone-200 bg-white flex-wrap">



          <div className="flex-1 max-w-xl relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
            />

            <input
              placeholder="Search records, nodes, taxonomy..."
              className="w-full pl-9 pr-3 py-2 rounded-md bg-stone-50 border border-stone-200 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#6d1b3f]/30"
            />
          </div>

          <div className="ml-auto flex items-center gap-2 text-sm text-right">
  <div>
    <div className="font-medium leading-tight">Admin</div>
    <div className="text-xs text-stone-400 leading-tight">
      Editor
    </div>
  </div>

  <div className="w-8 h-8 rounded-full bg-[#6d1b3f] text-white text-xs flex items-center justify-center font-semibold">
    AD
  </div>
</div>
        </header>

        {/* Main */}
        <main className="p-4 sm:p-6 space-y-6">

          {/* Breadcrumb + actions */}
          <div className="bg-white rounded-lg border border-stone-200 p-4 flex items-center justify-between flex-wrap gap-3">

            <div className="flex items-center gap-2 text-sm text-stone-500">
              <span>TechTorch CMS</span>
              <span>/</span>
              <span>News &amp; Articles</span>
              <span>/</span>

              <span className="text-[#6d1b3f] font-medium">
                Create Article
              </span>

              <span className="inline-flex items-center gap-1 bg-stone-100 text-stone-500 text-xs px-2 py-0.5 rounded-full ml-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Draft Auto-Saved
              </span>
            </div>

            <div className="flex items-center gap-2">

              <button className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50">
                <Eye size={14} />
                Preview
              </button>

              <button className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50">
                <Save size={14} />
                Save Draft
              </button>

              <button className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-[#6d1b3f] text-white hover:bg-[#5c1735]">
                <Play size={14} />
                Publish Article
              </button>

            </div>
          </div>

          {/* Editor + Right Rail */}
          {/* Editor + Right Rail */}
<div className="lg:flex gap-6 items-start lg:flex-row">

            {/* Editor column */}
            <div className="flex-1 min-w-0 bg-white rounded-lg border border-stone-200 p-6 space-y-5">

              {/* Publication format */}
              <FieldBlock label="PUBLICATION FORMAT — Select schema archetype">

                <div className="flex gap-2">

                  <button
                    onClick={() => setFormat("Technical Article")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm border ${
                      format === "Technical Article"
                        ? "bg-[#6d1b3f] text-white border-[#6d1b3f]"
                        : "border-stone-200 text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    <FileText size={14} />
                    Technical Article
                  </button>

                  <button
                    onClick={() => setFormat("News & Press Release")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm border ${
                      format === "News & Press Release"
                        ? "bg-[#6d1b3f] text-white border-[#6d1b3f]"
                        : "border-stone-200 text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    <Radio size={14} />

                    News &amp; Press Release

                    {format === "News & Press Release" && (
                      <span className="bg-white/20 text-[10px] px-1.5 py-0.5 rounded">
                        ACTIVE
                      </span>
                    )}
                  </button>

                </div>
              </FieldBlock>

              {/* Three meta fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <FieldBlock icon={MapPin} label="DATELINE / LOCATION">
                  <div className="border border-stone-200 rounded-md px-3 py-2 text-sm bg-stone-50">
                    SAN FRANCISCO, CA &amp; LONDON
                  </div>
                </FieldBlock>

                <FieldBlock icon={Radio} label="WIRE DISTRIBUTION">
                  <div className="border border-stone-200 rounded-md px-3 py-2 text-sm bg-stone-50">
                    Global Tech Wire + Investor Feed
                  </div>
                </FieldBlock>

                <FieldBlock icon={Star} label="PRESS BADGE & URGENCY">
                  <div className="space-y-1.5 text-sm">

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="accent-[#6d1b3f]"
                      />
                      Breaking Spotlight
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="accent-[#6d1b3f]"
                      />
                      Media Kit Ready
                    </label>

                  </div>
                </FieldBlock>

              </div>

              {/* Category */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm">

                <span className="text-[11px] font-semibold text-stone-500 tracking-wide">
                  CATEGORY
                </span>

                <button className="flex items-center gap-1.5 border border-stone-200 rounded-md px-3 py-1.5 text-stone-700">
                  Artificial Intelligence &amp; Workflows
                  <ChevronDown size={14} />
                </button>

                <span className="text-stone-400 flex items-center gap-1">
                  ~5 min read
                </span>

                <span className="text-stone-400">·</span>

                <span className="flex items-center gap-1 text-stone-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Draft Mode
                </span>

              </div>

              {/* Title */}
              <div>

                <h1 className="text-3xl font-semibold leading-tight text-stone-900">
                  Engineering Autonomous Enterprise Workflows: The Shift to Intent
                </h1>

                <p className="mt-3 text-stone-500 text-sm leading-relaxed">
                  How modern engineering platforms are transitioning from
                  procedural microservice choreographies to self-optimizing,
                  policy-constrained autonomous systems.
                </p>

              </div>

              {/* Image drop zone */}
              <div className="border-2 border-dashed border-stone-200 rounded-lg py-10 flex flex-col items-center justify-center text-center bg-stone-50/50">

                <div className="w-11 h-11 rounded-lg bg-white border border-stone-200 flex items-center justify-center mb-3 text-stone-400">
                  <ImagePlus size={20} />
                </div>

                <div className="text-sm font-medium text-stone-700">
                  Drag and drop high-resolution cover image
                </div>

                <div className="text-xs text-stone-400 mt-1">
                  Recommended 1920×1080px (PNG, JPG, or WebP up to 10MB)
                </div>

                <button className="mt-4 flex items-center gap-1.5 border border-stone-200 rounded-md px-3 py-1.5 text-sm bg-white hover:bg-stone-50">
                  Browse Library
                </button>

                <span className="text-xs text-stone-400 mt-1">
                  or drop file anywhere
                </span>

              </div>

              {/* Rich text toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">

                <div className="flex items-center gap-1 text-stone-500 overflow-x-auto">

                  <span className="text-sm font-medium px-2 shrink-0">H1</span>
                  <span className="text-sm font-medium px-2 shrink-0">H2</span>

                  <span className="w-px h-4 bg-stone-200 mx-1 shrink-0" />

                  <Bold size={15} className="mx-1.5 shrink-0" />
                  <Italic size={15} className="mx-1.5 shrink-0" />
                  <Link2 size={15} className="mx-1.5 shrink-0" />
                  <Quote size={15} className="mx-1.5 shrink-0" />
                  <Code2 size={15} className="mx-1.5 shrink-0" />
                  <List size={15} className="mx-1.5 shrink-0" />
                  <ListOrdered size={15} className="mx-1.5 shrink-0" />
                  <ImageIcon size={15} className="mx-1.5 shrink-0" />

                </div>

                <span className="text-xs text-emerald-600 flex items-center gap-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Auto-saved
                </span>

              </div>

              {/* Body content */}
              <div className="text-sm leading-relaxed text-stone-700 space-y-3">

                <p>
                  <span className="font-semibold text-stone-900">
                    [SAN FRANCISCO, CA • October 14, 2024]
                  </span>{" "}
                  —
                  TechTorch, the enterprise platform for autonomous workflow
                  orchestration, today detailed key architectural breakthroughs{" "}
                  <span className="font-semibold text-stone-900">
                    accelerating the migration from static, procedural
                    microservice designs to intent-driven autonomous systems.
                  </span>
                </p>

                <p>
                  Modern distributed architectures require verifiable
                  guardrails, real-time observability fabrics, and declarative
                  governance policies. Through its new enterprise
                  capabilities, organizations can operationalize multi-agent
                  consensus while maintaining SOC2 and zero-trust perimeter
                  conformance across hybrid infrastructure.
                </p>

              </div>

              <div className="flex items-center justify-between text-xs text-stone-400 border-t border-stone-100 pt-3">

                <span>
                  Cursor positioned at paragraph 2 • Press '/' for smart
                  components
                </span>

                <span className="border border-stone-200 rounded-md px-2 py-1">
                  248 words • 1,640 characters
                </span>

              </div>

            </div>

            {/* Right rail */}
            <div className="w-full lg:w-80 shrink-0 space-y-4">

              {/* Article Settings */}
              <div className="bg-white rounded-lg border border-stone-200 p-4">

                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-2 font-medium text-sm">
                    <LayoutGrid size={15} />
                    Article Settings
                  </div>

                  <span className="text-[10px] bg-rose-50 text-[#6d1b3f] px-2 py-0.5 rounded-full font-medium">
                    CORE METAS
                  </span>

                </div>

                <div className="space-y-4">

                  <FieldBlock label="AUTHOR">

                    <button className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm text-left">

                      <span>
                        Dr. Aris Thorne

                        <span className="block text-xs text-stone-400">
                          (Chief AI Architect)
                        </span>
                      </span>

                      <ChevronDown
                        size={14}
                        className="text-stone-400 shrink-0"
                      />

                    </button>

                  </FieldBlock>

                  <FieldBlock label="PUBLISH DATE">

                    <div className="space-y-2 text-sm">

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="publish-timing"
                          checked={publishTiming === "immediate"}
                          onChange={() => setPublishTiming("immediate")}
                          className="accent-[#6d1b3f]"
                        />
                        Publish Immediately
                      </label>

                      <label className="flex items-center gap-2 text-stone-500">
                        <input
                          type="radio"
                          name="publish-timing"
                          checked={publishTiming === "scheduled"}
                          onChange={() => setPublishTiming("scheduled")}
                          className="accent-[#6d1b3f]"
                        />
                        Schedule for later release
                      </label>

                    </div>

                  </FieldBlock>

                  <FieldBlock label="TAGS & TAXONOMY">

                    <div className="flex items-center justify-between mb-1.5">
                      <span />

                      <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">
                        {tags.length} added
                      </span>
                    </div>

                    <div className="flex flex-wrap">

                      {tags.map((t) => (
                        <TagChip
                          key={t}
                          label={t}
                          onRemove={() =>
                            setTags(tags.filter((x) => x !== t))
                          }
                        />
                      ))}

                    </div>

                    <button className="w-full flex items-center justify-center gap-1 border border-stone-200 rounded-md py-1.5 text-xs text-stone-500 hover:bg-stone-50 mt-1">
                      <Plus size={12} />
                      Add tag
                    </button>

                  </FieldBlock>

                </div>
              </div>

              {/* News & Media */}
              <div className="bg-white rounded-lg border border-stone-200 p-4">

                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-2 font-medium text-sm">
                    <Megaphone size={15} />
                    News &amp; Media Channel
                  </div>

                  <span className="text-[10px] bg-rose-50 text-[#6d1b3f] px-2 py-0.5 rounded-full font-medium">
                    PRESS WIRE
                  </span>

                </div>

                <FieldBlock label="PRESS OFFICER LIAISON">

                  <div className="flex items-center gap-2 border border-stone-200 rounded-md px-3 py-2">

                    <div className="w-8 h-8 rounded-full bg-rose-100 text-[#6d1b3f] text-xs flex items-center justify-center font-semibold">
                      PR
                    </div>

                    <div className="text-sm">

                      <div className="font-medium">
                        Claire Montrose
                      </div>

                      <div className="text-xs text-stone-400">
                        press@techtorch.solutions
                      </div>

                    </div>

                  </div>

                </FieldBlock>

                <div className="mt-4">

                  <FieldBlock label="EMBARGO DATE & TIME">

                    <div className="flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm">

                      <span>
                        Immediate Release (No Embargo)
                      </span>

                      <span className="text-emerald-500">
                        ✓
                      </span>

                    </div>

                  </FieldBlock>

                </div>

                <label className="flex items-center justify-between mt-4 text-sm">

                  <span className="flex items-center gap-1.5 text-stone-600">
                    <Rss size={13} />
                    Syndicate to Newsroom RSS
                  </span>

                  <input
                    type="checkbox"
                    defaultChecked
                    className="accent-[#6d1b3f]"
                  />

                </label>

              </div>

              {/* Writing Tip */}
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">

                <div className="flex items-center gap-1.5 text-sm font-medium text-amber-800 mb-1.5">
                  <Lightbulb size={14} />
                  Writing Tip
                </div>

                <p className="text-xs text-amber-700 leading-relaxed">
                  Highlight any text block to access quick styling, or paste
                  markdown directly into the editor canvas.
                </p>

              </div>

            </div>
          </div>

          {/* Press dispatches table */}
          <div className="bg-white rounded-lg border border-stone-200 p-5">

            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">

              <div className="flex items-center gap-3">

                <div className="w-9 h-9 rounded-md bg-rose-50 text-[#6d1b3f] flex items-center justify-center">
                  <Megaphone size={16} />
                </div>

                <div>

                  <div className="flex items-center gap-2 font-medium text-sm">
                    Company News &amp; Press Dispatches

                    <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">
                      12 Published News Items
                    </span>
                  </div>

                  <div className="text-xs text-stone-400">
                    Corporate announcements, strategic media dispatches, and
                    public earnings briefings
                  </div>

                </div>
              </div>

              <button className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-[#6d1b3f] text-white hover:bg-[#5c1735]">
                <Plus size={14} />
                New Press Release
              </button>

            </div>

            <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-center">

              <div className="relative w-full sm:flex-1 sm:max-w-xs">

                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
                />

                <input
                  placeholder="Filter dispatches & wire..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-md border border-stone-200 text-sm placeholder:text-stone-400"
                />

              </div>

              <div className="flex items-center gap-2 text-xs overflow-x-auto -mx-1 px-1 sm:mx-0 sm:px-0">

                {DISPATCH_FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setDispatchFilter(f)}
                    className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-md border ${
                      dispatchFilter === f
                        ? "bg-[#6d1b3f] text-white border-[#6d1b3f]"
                        : "border-stone-200 text-stone-500 hover:bg-stone-50"
                    }`}
                  >
                    {f}
                  </button>
                ))}

              </div>

              <span className="sm:ml-auto text-xs text-stone-400 flex items-center gap-1 shrink-0">
                <Rss size={12} className="text-[#6d1b3f]" />
                Global Press RSS Active
              </span>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full text-sm">

                <thead>

                  <tr className="text-left text-[11px] text-stone-400 tracking-wide border-b border-stone-100">

                    <th className="pb-2 font-semibold">
                      DISPATCH TITLE &amp; DATELINE
                    </th>

                    <th className="pb-2 font-semibold">
                      NEWS CATEGORY
                    </th>

                    <th className="pb-2 font-semibold">
                      DISTRIBUTION WIRE
                    </th>

                    <th className="pb-2 font-semibold">
                      RELEASE STATUS
                    </th>

                    <th className="pb-2 font-semibold text-right">
                      MEDIA REACH
                    </th>

                    <th className="pb-2 font-semibold text-right">
                      ACTIONS
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {DISPATCHES.map((d) => {
                    const Icon = d.icon;

                    return (
                      <tr
                        key={d.title}
                        className="border-b border-stone-50 align-top"
                      >

                        <td className="py-3 pr-4 max-w-sm">

                          <div className="flex gap-2">

                            <Icon
                              size={15}
                              className="text-stone-400 mt-0.5 shrink-0"
                            />

                            <div>

                              <div className="flex items-center gap-2 font-medium">

                                {d.title}

                                {d.badge && (
                                  <span className="text-[10px] bg-[#6d1b3f] text-white px-1.5 py-0.5 rounded font-semibold">
                                    {d.badge}
                                  </span>
                                )}

                              </div>

                              <div className="text-xs text-stone-400 mt-0.5">
                                {d.dateline} •{" "}
                                <span className="font-mono">
                                  {d.slug}
                                </span>
                              </div>

                            </div>

                          </div>

                        </td>

                        <td className="py-3 pr-4 text-stone-600">
                          {d.category}
                        </td>

                        <td className="py-3 pr-4 text-stone-600">
                          {d.wire}
                        </td>

                        <td className="py-3 pr-4">

                          <div className="flex items-center text-stone-700">
                            <StatusDot status={d.status} />
                            {d.status}
                          </div>

                          <div className="text-xs text-stone-400">
                            {d.statusDate}
                          </div>

                        </td>

                        <td className="py-3 pr-4 text-right">

                          <div className="text-stone-700">
                            {d.reach}
                          </div>

                          <div className="text-xs text-emerald-600">
                            {d.outlets}
                          </div>

                        </td>

                        <td className="py-3 text-right">

                          <div className="flex items-center justify-end gap-2 text-stone-400">

                            <Pencil
                              size={14}
                              className="cursor-pointer hover:text-stone-600"
                            />

                            <Copy
                              size={14}
                              className="cursor-pointer hover:text-stone-600"
                            />

                            <ExternalLink
                              size={14}
                              className="cursor-pointer hover:text-stone-600"
                            />

                          </div>

                        </td>

                      </tr>
                    );
                  })}

                </tbody>

              </table>

            </div>
          </div>

          {/* Recent articles table */}
          <div className="bg-white rounded-lg border border-stone-200 p-5">

            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">

              <div className="flex items-center gap-3">

                <div className="w-9 h-9 rounded-md bg-rose-50 text-[#6d1b3f] flex items-center justify-center">
                  <FileText size={16} />
                </div>

                <div>

                  <div className="flex items-center gap-2 font-medium text-sm">

                    Recent &amp; Published Articles

                    <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">
                      24 Total
                    </span>

                  </div>

                  <div className="text-xs text-stone-400">
                    Manage previous publications, drafts, and enterprise
                    content archives
                  </div>

                </div>

              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">

                <div className="relative w-full sm:w-auto">

                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
                  />

                  <input
                    placeholder="Filter recent articles..."
                    className="w-full sm:w-auto pl-8 pr-3 py-1.5 rounded-md border border-stone-200 text-sm placeholder:text-stone-400"
                  />

                </div>

                <button className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50">
                  <Settings size={14} />
                  Manage All
                </button>

              </div>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full text-sm">

                <thead>

                  <tr className="text-left text-[11px] text-stone-400 tracking-wide border-b border-stone-100">

                    <th className="pb-2 font-semibold">
                      ARTICLE TITLE &amp; SLUG
                    </th>

                    <th className="pb-2 font-semibold">
                      CATEGORY
                    </th>

                    <th className="pb-2 font-semibold">
                      AUTHOR
                    </th>

                    <th className="pb-2 font-semibold">
                      STATUS &amp; DATE
                    </th>

                    <th className="pb-2 font-semibold text-right">
                      METRICS
                    </th>

                    <th className="pb-2 font-semibold text-right">
                      ACTIONS
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {ARTICLES.map((a) => (

                    <tr
                      key={a.title}
                      className="border-b border-stone-50 align-top"
                    >

                      <td className="py-3 pr-4 max-w-sm">

                        <div className="flex gap-2">

                          <FileText
                            size={15}
                            className="text-stone-400 mt-0.5 shrink-0"
                          />

                          <div>

                            <div className="font-medium">
                              {a.title}
                            </div>

                            <div className="text-xs text-stone-400 mt-0.5 font-mono">
                              {a.slug}
                            </div>

                          </div>

                        </div>

                      </td>

                      <td className="py-3 pr-4 text-stone-600">
                        {a.category}
                      </td>

                      <td className="py-3 pr-4 text-stone-600">
                        {a.author}
                      </td>

                      <td className="py-3 pr-4">

                        <div className="flex items-center text-stone-700">
                          <StatusDot status={a.status} />
                          {a.status}
                        </div>

                        <div className="text-xs text-stone-400">
                          {a.date}
                        </div>

                      </td>

                      <td className="py-3 pr-4 text-right">

                        <div className="text-stone-700">
                          {a.metric}
                        </div>

                        <div className="text-xs text-stone-400">
                          {a.read}
                        </div>

                      </td>

                      <td className="py-3 text-right">

                        <div className="flex items-center justify-end gap-2 text-stone-400">

                          <Pencil
                            size={14}
                            className="cursor-pointer hover:text-stone-600"
                          />

                          <Copy
                            size={14}
                            className="cursor-pointer hover:text-stone-600"
                          />

                          {a.status === "Draft" ? (
                            <Trash2
                              size={14}
                              className="cursor-pointer hover:text-rose-500"
                            />
                          ) : (
                            <ExternalLink
                              size={14}
                              className="cursor-pointer hover:text-stone-600"
                            />
                          )}

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}