import { useState, useRef, useEffect, useCallback } from "react";
import {
  LayoutGrid,
  FileText,
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

/* ---------------- STATIC DATA ---------------- */

const CATEGORIES = [
  "Artificial Intelligence & Workflows",
  "Cloud Infrastructure",
  "Product & Engineering",
  "Executive Press",
  "Company Milestone",
];

const AUTHORS = [
  { name: "Dr. Aris Thorne", title: "Chief AI Architect" },
  { name: "Elena Vance", title: "Principal Engineer" },
  { name: "Marcus Sterling", title: "Staff Engineer" },
  { name: "Claire Montrose", title: "Press Officer" },
];

const STOCK_LIBRARY = [
  { label: "Cloud Infra 01", bg: "linear-gradient(135deg,#6d1b3f,#b0466f)" },
  { label: "AI Workflow", bg: "linear-gradient(135deg,#1e3a5f,#3b6ea5)" },
  { label: "Data Center", bg: "linear-gradient(135deg,#2d3436,#636e72)" },
  { label: "City Skyline", bg: "linear-gradient(135deg,#0f2027,#2c5364)" },
  { label: "Abstract Mesh", bg: "linear-gradient(135deg,#654ea3,#eaafc8)" },
  { label: "Server Racks", bg: "linear-gradient(135deg,#134e5e,#71b280)" },
  { label: "Team Handshake", bg: "linear-gradient(135deg,#bc4e9c,#f80759)" },
  { label: "Network Grid", bg: "linear-gradient(135deg,#232526,#414345)" },
];

const DISPATCH_FILTERS = [
  "All Releases",
  "Product Announcements (5)",
  "Company Milestones (4)",
  "Executive Press (3)",
];

const INITIAL_DISPATCHES = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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

const INITIAL_ARTICLES = [
  {
    id: 101,
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
    id: 102,
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
    id: 103,
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

/* ---------------- HELPERS ---------------- */

function slugify(prefix, str) {
  return (
    prefix +
    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .slice(0, 60)
  );
}

/* ---------------- SMALL PRESENTATIONAL PIECES ---------------- */

function StatusDot({ status }) {
  const color =
    status === "Published" || status === "Dispatched"
      ? "bg-emerald-500"
      : "bg-amber-500";
  return (
    <span className={`inline-block w-1.5 h-1.5 rounded-full ${color} mr-1.5`} />
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

function Toasts({ toasts }) {
  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="bg-stone-900 text-white text-sm px-4 py-2 rounded-md shadow-lg animate-[fadeIn_.2s_ease-out]"
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function TechTorchCMS() {
  const [tags, setTags] = useState([
    "Enterprise AI",
    "Cloud Architecture",
    "Autonomous Systems",
  ]);
  const [format, setFormat] = useState("News & Press Release");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [author, setAuthor] = useState(AUTHORS[0]);
  const [authorOpen, setAuthorOpen] = useState(false);
  const [publishTiming, setPublishTiming] = useState("immediate");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [embargoed, setEmbargoed] = useState(false);
  const [embargoDate, setEmbargoDate] = useState("");
  const [embargoTime, setEmbargoTime] = useState("");
  const [badgeBreaking, setBadgeBreaking] = useState(true);
  const [badgeMediaKit, setBadgeMediaKit] = useState(true);
  const [syndicate, setSyndicate] = useState(true);

  const [coverImage, setCoverImage] = useState(null); // css background string
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [libraryTab, setLibraryTab] = useState("upload");

  const [wordCount, setWordCount] = useState(248);
  const [charCount, setCharCount] = useState(1640);

  const [dispatches, setDispatches] = useState(INITIAL_DISPATCHES);
  const [articles, setArticles] = useState(INITIAL_ARTICLES);
  const [dispatchFilter, setDispatchFilter] = useState("All Releases");
  const [dispatchSearch, setDispatchSearch] = useState("");
  const [articleSearch, setArticleSearch] = useState("");

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewData, setPreviewData] = useState(null);
  const [draftStatus, setDraftStatus] = useState("Draft Auto-Saved");

  const [toasts, setToasts] = useState([]);
  const nextId = useRef(1000);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const datelineRef = useRef(null);
  const wireRef = useRef(null);
  const bodyRef = useRef(null);
  const coverFileInputRef = useRef(null);
  const modalFileInputRef = useRef(null);

  const showToast = useCallback((message) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2200);
  }, []);

  /* ----- cover image ----- */
  const readFileAsCover = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setCoverImage(`url(${e.target.result})`);
      setLibraryOpen(false);
      showToast("Cover image uploaded");
    };
    reader.readAsDataURL(file);
  };

  const onDropCover = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) readFileAsCover(e.dataTransfer.files[0]);
  };

  /* ----- rich text toolbar ----- */
  const applyCommand = (cmd, val = null) => {
    bodyRef.current?.focus();
    document.execCommand(cmd, false, val);
    updateWordCount();
  };

  const insertImageInBody = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      bodyRef.current?.focus();
      document.execCommand(
        "insertHTML",
        false,
        `<img src="${e.target.result}" style="max-width:100%;border-radius:6px;margin:8px 0;" />`
      );
      updateWordCount();
    };
    reader.readAsDataURL(file);
  };

  const updateWordCount = () => {
    const text = bodyRef.current?.innerText.trim() || "";
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
    setWordCount(words);
    setCharCount(text.length);
  };

  const readMinutes = Math.max(1, Math.round(wordCount / 200));

  /* ----- tags ----- */
  const addTag = () => {
    const t = window.prompt("New tag name:");
    if (t && t.trim() && !tags.includes(t.trim())) {
      setTags((prev) => [...prev, t.trim()]);
    }
  };
  const removeTag = (t) => setTags((prev) => prev.filter((x) => x !== t));

  /* ----- top actions ----- */
  const saveDraft = () => {
    setDraftStatus("Draft Saved just now");
    showToast("Draft saved");
  };

  const openPreview = () => {
    setPreviewData({
      title: titleRef.current?.innerText || "",
      subtitle: subtitleRef.current?.innerText || "",
      bodyHtml: bodyRef.current?.innerHTML || "",
      cover: coverImage,
      meta: `${category} · ${author.name} · ${wordCount} words • ${charCount} characters`,
      tags,
    });
    setPreviewOpen(true);
  };

  const publish = () => {
    const title = titleRef.current?.innerText.trim();
    if (!title) {
      showToast("Add a title before publishing");
      return;
    }
    const id = nextId.current++;
    if (format === "News & Press Release") {
      setDispatches((prev) => [
        {
          id,
          icon: Megaphone,
          title,
          badge: badgeBreaking ? "BREAKING" : null,
          dateline: datelineRef.current?.innerText.trim() || "",
          slug: slugify("/press/", title),
          category,
          wire: wireRef.current?.innerText.trim() || "",
          status: "Dispatched",
          statusDate: "Just now",
          reach: "0 syndications",
          outlets: "0 Outlets",
        },
        ...prev,
      ]);
      showToast("Press release dispatched");
    } else {
      setArticles((prev) => [
        {
          id,
          title,
          slug: slugify("/insights/", title),
          category,
          author: author.name,
          status: "Published",
          date: "Just now",
          metric: "0 views",
          read: `${readMinutes}m read`,
        },
        ...prev,
      ]);
      showToast("Article published");
    }
    setDraftStatus("Published");
  };

  const startNewPressRelease = () => {
    setFormat("News & Press Release");
    if (titleRef.current) titleRef.current.innerText = "Untitled Press Release";
    if (subtitleRef.current)
      subtitleRef.current.innerText = "Add a one-line summary for this release.";
    if (bodyRef.current)
      bodyRef.current.innerHTML = "<p>Start writing the press release body here.</p>";
    updateWordCount();
    setCoverImage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
    titleRef.current?.focus();
    showToast("New press release draft started");
  };

  /* ----- dispatch table ----- */
  const matchesDispatchFilter = (d) => {
    if (dispatchFilter === "All Releases") return true;
    if (dispatchFilter.startsWith("Product")) return d.category === "Product Announcement";
    if (dispatchFilter.startsWith("Company")) return d.category === "Company Milestone";
    if (dispatchFilter.startsWith("Executive")) return d.category === "Executive Press";
    return true;
  };

  const visibleDispatches = dispatches.filter(
    (d) =>
      matchesDispatchFilter(d) &&
      (d.title.toLowerCase().includes(dispatchSearch.toLowerCase()) ||
        d.wire.toLowerCase().includes(dispatchSearch.toLowerCase()))
  );

  const editDispatch = (d) => {
    if (titleRef.current) titleRef.current.innerText = d.title;
    if (datelineRef.current) datelineRef.current.innerText = d.dateline;
    if (wireRef.current) wireRef.current.innerText = d.wire;
    setFormat("News & Press Release");
    window.scrollTo({ top: 0, behavior: "smooth" });
    showToast("Loaded into editor");
  };

  const copyLink = (slug) => {
    navigator.clipboard?.writeText(window.location.origin + slug).catch(() => {});
    showToast("Link copied to clipboard");
  };

  const viewDispatch = (d) => {
    setPreviewData({
      title: d.title,
      subtitle: `${d.category} · ${d.wire} · ${d.dateline}`,
      bodyHtml: `<p>Status: ${d.status} (${d.statusDate})</p><p>Reach: ${d.reach} across ${d.outlets}</p>`,
      cover: null,
      meta: "",
      tags: [],
    });
    setPreviewOpen(true);
  };

  /* ----- articles table ----- */
  const visibleArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(articleSearch.toLowerCase()) ||
      a.author.toLowerCase().includes(articleSearch.toLowerCase())
  );

  const editArticle = (a) => {
    if (titleRef.current) titleRef.current.innerText = a.title;
    setFormat("Technical Article");
    window.scrollTo({ top: 0, behavior: "smooth" });
    showToast("Loaded into editor");
  };

  const viewArticle = (a) => {
    setPreviewData({
      title: a.title,
      subtitle: `${a.category} · ${a.author} · ${a.read}`,
      bodyHtml: `<p>Status: ${a.status} (${a.date})</p><p>${a.metric}</p>`,
      cover: null,
      meta: "",
      tags: [],
    });
    setPreviewOpen(true);
  };

  const deleteArticle = (a) => {
    if (window.confirm(`Delete draft "${a.title}"?`)) {
      setArticles((prev) => prev.filter((x) => x.id !== a.id));
      showToast("Draft deleted");
    }
  };

  /* close dropdowns on outside click */
  useEffect(() => {
    const close = () => {
      setCategoryOpen(false);
      setAuthorOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="min-h-screen">
        {/* Top bar */}
        <header className="flex items-center gap-4 px-4 sm:px-6 py-3 border-b border-stone-200 bg-white flex-wrap">
          <div className="flex-1 max-w-xl relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              placeholder="Search records, nodes, taxonomy..."
              className="w-full pl-9 pr-3 py-2 rounded-md bg-stone-50 border border-stone-200 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#6d1b3f]/30"
            />
          </div>
          <div className="ml-auto flex items-center gap-2 text-sm text-right">
            <div>
              <div className="font-medium leading-tight">Admin</div>
              <div className="text-xs text-stone-400 leading-tight">Editor</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#6d1b3f] text-white text-xs flex items-center justify-center font-semibold">
              AD
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 space-y-6">
          {/* Breadcrumb + actions */}
          <div className="bg-white rounded-lg border border-stone-200 p-4 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 text-sm text-stone-500 flex-wrap">
              <span>TechTorch CMS</span>
              <span>/</span>
              <span>News &amp; Articles</span>
              <span>/</span>
              <span className="text-[#6d1b3f] font-medium">Create Article</span>
              <span className="inline-flex items-center gap-1 bg-stone-100 text-stone-500 text-xs px-2 py-0.5 rounded-full ml-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {draftStatus}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={openPreview}
                className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50"
              >
                <Eye size={14} />
                Preview
              </button>
              <button
                onClick={saveDraft}
                className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50"
              >
                <Save size={14} />
                Save Draft
              </button>
              <button
                onClick={publish}
                className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-[#6d1b3f] text-white hover:bg-[#5c1735]"
              >
                <Play size={14} />
                Publish Article
              </button>
            </div>
          </div>

          {/* Editor + Right Rail */}
          <div className="lg:flex gap-6 items-start lg:flex-row">
            {/* Editor column */}
            <div className="flex-1 min-w-0 bg-white rounded-lg border border-stone-200 p-6 space-y-5">
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
                      <span className="bg-white/20 text-[10px] px-1.5 py-0.5 rounded">ACTIVE</span>
                    )}
                  </button>
                </div>
              </FieldBlock>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FieldBlock icon={MapPin} label="DATELINE / LOCATION">
                  <div
                    ref={datelineRef}
                    contentEditable
                    suppressContentEditableWarning
                    spellCheck={false}
                    className="border border-stone-200 rounded-md px-3 py-2 text-sm bg-stone-50"
                  >
                    SAN FRANCISCO, CA &amp; LONDON
                  </div>
                </FieldBlock>

                <FieldBlock icon={Radio} label="WIRE DISTRIBUTION">
                  <div
                    ref={wireRef}
                    contentEditable
                    suppressContentEditableWarning
                    spellCheck={false}
                    className="border border-stone-200 rounded-md px-3 py-2 text-sm bg-stone-50"
                  >
                    Global Tech Wire + Investor Feed
                  </div>
                </FieldBlock>

                <FieldBlock icon={Star} label="PRESS BADGE & URGENCY">
                  <div className="space-y-1.5 text-sm">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={badgeBreaking}
                        onChange={(e) => setBadgeBreaking(e.target.checked)}
                        className="accent-[#6d1b3f]"
                      />
                      Breaking Spotlight
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={badgeMediaKit}
                        onChange={(e) => setBadgeMediaKit(e.target.checked)}
                        className="accent-[#6d1b3f]"
                      />
                      Media Kit Ready
                    </label>
                  </div>
                </FieldBlock>
              </div>

              {/* Category */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm relative">
                <span className="text-[11px] font-semibold text-stone-500 tracking-wide">CATEGORY</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCategoryOpen((v) => !v);
                    setAuthorOpen(false);
                  }}
                  className="flex items-center gap-1.5 border border-stone-200 rounded-md px-3 py-1.5 text-stone-700"
                >
                  {category}
                  <ChevronDown size={14} />
                </button>
                {categoryOpen && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-full left-0 mt-1 z-20 bg-white border border-stone-200 rounded-md shadow-lg py-1 w-64 text-sm"
                  >
                    {CATEGORIES.map((c) => (
                      <div
                        key={c}
                        onClick={() => {
                          setCategory(c);
                          setCategoryOpen(false);
                        }}
                        className="px-3 py-2 hover:bg-stone-50 cursor-pointer"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                )}
                <span className="text-stone-400 flex items-center gap-1">~{readMinutes} min read</span>
                <span className="text-stone-400">·</span>
                <span className="flex items-center gap-1 text-stone-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Draft Mode
                </span>
              </div>

              {/* Title */}
              <div>
                <h1
                  ref={titleRef}
                  contentEditable
                  suppressContentEditableWarning
                  spellCheck={false}
                  className="text-3xl font-semibold leading-tight text-stone-900 outline-none"
                >
                  Engineering Autonomous Enterprise Workflows: The Shift to Intent
                </h1>
                <p
                  ref={subtitleRef}
                  contentEditable
                  suppressContentEditableWarning
                  spellCheck={false}
                  className="mt-3 text-stone-500 text-sm leading-relaxed outline-none"
                >
                  How modern engineering platforms are transitioning from procedural
                  microservice choreographies to self-optimizing, policy-constrained
                  autonomous systems.
                </p>
              </div>

              {/* Image drop zone */}
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDropCover}
                className="relative border-2 border-dashed border-stone-200 rounded-lg py-10 flex flex-col items-center justify-center text-center bg-stone-50/50 overflow-hidden min-h-[200px]"
              >
                {!coverImage ? (
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-lg bg-white border border-stone-200 flex items-center justify-center mb-3 text-stone-400">
                      <ImagePlus size={20} />
                    </div>
                    <div className="text-sm font-medium text-stone-700">
                      Drag and drop high-resolution cover image
                    </div>
                    <div className="text-xs text-stone-400 mt-1">
                      Recommended 1920×1080px (PNG, JPG, or WebP up to 10MB)
                    </div>
                    <button
                      onClick={() => setLibraryOpen(true)}
                      className="mt-4 flex items-center gap-1.5 border border-stone-200 rounded-md px-3 py-1.5 text-sm bg-white hover:bg-stone-50"
                    >
                      Browse Library
                    </button>
                    <span className="text-xs text-stone-400 mt-1">or drop file anywhere</span>
                  </div>
                ) : (
                  <div className="w-full h-full absolute inset-0">
                    <div
                      className="w-full h-full"
                      style={{
                        background: coverImage.startsWith("url(")
                          ? `${coverImage} center/cover no-repeat`
                          : coverImage,
                      }}
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={() => setLibraryOpen(true)}
                        className="text-xs bg-white/90 border border-stone-200 rounded-md px-2 py-1 hover:bg-white"
                      >
                        Change
                      </button>
                      <button
                        onClick={() => setCoverImage(null)}
                        className="text-xs bg-white/90 border border-stone-200 rounded-md px-2 py-1 hover:bg-white text-rose-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
                <input
                  ref={coverFileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => readFileAsCover(e.target.files[0])}
                />
              </div>

              {/* Rich text toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                <div className="flex items-center gap-1 text-stone-500 overflow-x-auto">
                  <span
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => applyCommand("formatBlock", "H1")}
                    className="text-sm font-medium px-2 shrink-0 cursor-pointer hover:bg-stone-100 rounded"
                  >
                    H1
                  </span>
                  <span
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => applyCommand("formatBlock", "H2")}
                    className="text-sm font-medium px-2 shrink-0 cursor-pointer hover:bg-stone-100 rounded"
                  >
                    H2
                  </span>
                  <span className="w-px h-4 bg-stone-200 mx-1 shrink-0" />
                  <Bold
                    size={15}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => applyCommand("bold")}
                    className="mx-1.5 shrink-0 cursor-pointer hover:opacity-70"
                  />
                  <Italic
                    size={15}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => applyCommand("italic")}
                    className="mx-1.5 shrink-0 cursor-pointer hover:opacity-70"
                  />
                  <Link2
                    size={15}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      const url = window.prompt("Link URL:");
                      if (url) applyCommand("createLink", url);
                    }}
                    className="mx-1.5 shrink-0 cursor-pointer hover:opacity-70"
                  />
                  <Quote
                    size={15}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => applyCommand("formatBlock", "BLOCKQUOTE")}
                    className="mx-1.5 shrink-0 cursor-pointer hover:opacity-70"
                  />
                  <Code2
                    size={15}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => applyCommand("formatBlock", "PRE")}
                    className="mx-1.5 shrink-0 cursor-pointer hover:opacity-70"
                  />
                  <List
                    size={15}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => applyCommand("insertUnorderedList")}
                    className="mx-1.5 shrink-0 cursor-pointer hover:opacity-70"
                  />
                  <ListOrdered
                    size={15}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => applyCommand("insertOrderedList")}
                    className="mx-1.5 shrink-0 cursor-pointer hover:opacity-70"
                  />
                  <ImageIcon
                    size={15}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => modalFileInputRef.current?.click()}
                    className="mx-1.5 shrink-0 cursor-pointer hover:opacity-70"
                  />
                  <input
                    ref={modalFileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => insertImageInBody(e.target.files[0])}
                  />
                </div>
                <span className="text-xs text-emerald-600 flex items-center gap-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Auto-saved
                </span>
              </div>

              {/* Body content */}
              <div
                ref={bodyRef}
                contentEditable
                suppressContentEditableWarning
                spellCheck={false}
                onInput={updateWordCount}
                className="text-sm leading-relaxed text-stone-700 space-y-3 outline-none min-h-[120px]"
              >
                <p>
                  <span className="font-semibold text-stone-900">
                    [SAN FRANCISCO, CA • October 14, 2024]
                  </span>{" "}
                  — TechTorch, the enterprise platform for autonomous workflow
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
                <span>Cursor positioned in body • Use toolbar icons to format</span>
                <span className="border border-stone-200 rounded-md px-2 py-1">
                  {wordCount} words • {charCount} characters
                </span>
              </div>
            </div>

            {/* Right rail */}
            <div className="w-full lg:w-80 shrink-0 space-y-4">
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
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setAuthorOpen((v) => !v);
                          setCategoryOpen(false);
                        }}
                        className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm text-left"
                      >
                        <span>
                          {author.name}
                          <span className="block text-xs text-stone-400">
                            ({author.title})
                          </span>
                        </span>
                        <ChevronDown size={14} className="text-stone-400 shrink-0" />
                      </button>
                      {authorOpen && (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="absolute top-full left-0 mt-1 z-20 bg-white border border-stone-200 rounded-md shadow-lg py-1 w-full text-sm"
                        >
                          {AUTHORS.map((a) => (
                            <div
                              key={a.name}
                              onClick={() => {
                                setAuthor(a);
                                setAuthorOpen(false);
                              }}
                              className="px-3 py-2 hover:bg-stone-50 cursor-pointer"
                            >
                              {a.name}
                              <span className="block text-xs text-stone-400">({a.title})</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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
                      {publishTiming === "scheduled" && (
                        <div className="pt-1 pl-6 flex gap-2">
                          <input
                            type="date"
                            value={scheduleDate}
                            onChange={(e) => setScheduleDate(e.target.value)}
                            className="border border-stone-200 rounded-md px-2 py-1 text-xs"
                          />
                          <input
                            type="time"
                            value={scheduleTime}
                            onChange={(e) => setScheduleTime(e.target.value)}
                            className="border border-stone-200 rounded-md px-2 py-1 text-xs"
                          />
                        </div>
                      )}
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
                        <TagChip key={t} label={t} onRemove={() => removeTag(t)} />
                      ))}
                    </div>
                    <button
                      onClick={addTag}
                      className="w-full flex items-center justify-center gap-1 border border-stone-200 rounded-md py-1.5 text-xs text-stone-500 hover:bg-stone-50 mt-1"
                    >
                      <Plus size={12} />
                      Add tag
                    </button>
                  </FieldBlock>
                </div>
              </div>

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
                      <div className="font-medium">Claire Montrose</div>
                      <div className="text-xs text-stone-400">press@techtorch.solutions</div>
                    </div>
                  </div>
                </FieldBlock>

                <div className="mt-4">
                  <FieldBlock label="EMBARGO DATE & TIME">
                    <button
                      onClick={() => setEmbargoed((v) => !v)}
                      className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3 py-2 text-sm"
                    >
                      <span>{embargoed ? "Embargoed until:" : "Immediate Release (No Embargo)"}</span>
                      {!embargoed && <span className="text-emerald-500">✓</span>}
                    </button>
                    {embargoed && (
                      <div className="pt-2 flex gap-2">
                        <input
                          type="date"
                          value={embargoDate}
                          onChange={(e) => setEmbargoDate(e.target.value)}
                          className="border border-stone-200 rounded-md px-2 py-1 text-xs"
                        />
                        <input
                          type="time"
                          value={embargoTime}
                          onChange={(e) => setEmbargoTime(e.target.value)}
                          className="border border-stone-200 rounded-md px-2 py-1 text-xs"
                        />
                      </div>
                    )}
                  </FieldBlock>
                </div>

                <label className="flex items-center justify-between mt-4 text-sm">
                  <span className="flex items-center gap-1.5 text-stone-600">
                    <Rss size={13} />
                    Syndicate to Newsroom RSS
                  </span>
                  <input
                    type="checkbox"
                    checked={syndicate}
                    onChange={(e) => setSyndicate(e.target.checked)}
                    className="accent-[#6d1b3f]"
                  />
                </label>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                <div className="flex items-center gap-1.5 text-sm font-medium text-amber-800 mb-1.5">
                  <Lightbulb size={14} />
                  Writing Tip
                </div>
                <p className="text-xs text-amber-700 leading-relaxed">
                  Highlight any text block to access quick styling, or use the
                  toolbar icons above the body to format your text.
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
                      {dispatches.length} Published News Items
                    </span>
                  </div>
                  <div className="text-xs text-stone-400">
                    Corporate announcements, strategic media dispatches, and public
                    earnings briefings
                  </div>
                </div>
              </div>
              <button
                onClick={startNewPressRelease}
                className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-[#6d1b3f] text-white hover:bg-[#5c1735]"
              >
                <Plus size={14} />
                New Press Release
              </button>
            </div>

            <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-center">
              <div className="relative w-full sm:flex-1 sm:max-w-xs">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  value={dispatchSearch}
                  onChange={(e) => setDispatchSearch(e.target.value)}
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
                    <th className="pb-2 font-semibold">DISPATCH TITLE &amp; DATELINE</th>
                    <th className="pb-2 font-semibold">NEWS CATEGORY</th>
                    <th className="pb-2 font-semibold">DISTRIBUTION WIRE</th>
                    <th className="pb-2 font-semibold">RELEASE STATUS</th>
                    <th className="pb-2 font-semibold text-right">MEDIA REACH</th>
                    <th className="pb-2 font-semibold text-right">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleDispatches.map((d) => {
                    const Icon = d.icon;
                    return (
                      <tr key={d.id} className="border-b border-stone-50 align-top">
                        <td className="py-3 pr-4 max-w-sm">
                          <div className="flex gap-2">
                            <Icon size={15} className="text-stone-400 mt-0.5 shrink-0" />
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
                                {d.dateline} • <span className="font-mono">{d.slug}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 pr-4 text-stone-600">{d.category}</td>
                        <td className="py-3 pr-4 text-stone-600">{d.wire}</td>
                        <td className="py-3 pr-4">
                          <div className="flex items-center text-stone-700">
                            <StatusDot status={d.status} />
                            {d.status}
                          </div>
                          <div className="text-xs text-stone-400">{d.statusDate}</div>
                        </td>
                        <td className="py-3 pr-4 text-right">
                          <div className="text-stone-700">{d.reach}</div>
                          <div className="text-xs text-emerald-600">{d.outlets}</div>
                        </td>
                        <td className="py-3 text-right">
                          <div className="flex items-center justify-end gap-2 text-stone-400">
                            <Pencil
                              size={14}
                              className="cursor-pointer hover:text-stone-600"
                              onClick={() => editDispatch(d)}
                            />
                            <Copy
                              size={14}
                              className="cursor-pointer hover:text-stone-600"
                              onClick={() => copyLink(d.slug)}
                            />
                            <ExternalLink
                              size={14}
                              className="cursor-pointer hover:text-stone-600"
                              onClick={() => viewDispatch(d)}
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
                      {articles.length} Total
                    </span>
                  </div>
                  <div className="text-xs text-stone-400">
                    Manage previous publications, drafts, and enterprise content
                    archives
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-auto">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    value={articleSearch}
                    onChange={(e) => setArticleSearch(e.target.value)}
                    placeholder="Filter recent articles..."
                    className="w-full sm:w-auto pl-8 pr-3 py-1.5 rounded-md border border-stone-200 text-sm placeholder:text-stone-400"
                  />
                </div>
                <button
                  onClick={() => setArticleSearch("")}
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50"
                >
                  <Settings size={14} />
                  Manage All
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[11px] text-stone-400 tracking-wide border-b border-stone-100">
                    <th className="pb-2 font-semibold">ARTICLE TITLE &amp; SLUG</th>
                    <th className="pb-2 font-semibold">CATEGORY</th>
                    <th className="pb-2 font-semibold">AUTHOR</th>
                    <th className="pb-2 font-semibold">STATUS &amp; DATE</th>
                    <th className="pb-2 font-semibold text-right">METRICS</th>
                    <th className="pb-2 font-semibold text-right">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleArticles.map((a) => (
                    <tr key={a.id} className="border-b border-stone-50 align-top">
                      <td className="py-3 pr-4 max-w-sm">
                        <div className="flex gap-2">
                          <FileText size={15} className="text-stone-400 mt-0.5 shrink-0" />
                          <div>
                            <div className="font-medium">{a.title}</div>
                            <div className="text-xs text-stone-400 mt-0.5 font-mono">{a.slug}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 pr-4 text-stone-600">{a.category}</td>
                      <td className="py-3 pr-4 text-stone-600">{a.author}</td>
                      <td className="py-3 pr-4">
                        <div className="flex items-center text-stone-700">
                          <StatusDot status={a.status} />
                          {a.status}
                        </div>
                        <div className="text-xs text-stone-400">{a.date}</div>
                      </td>
                      <td className="py-3 pr-4 text-right">
                        <div className="text-stone-700">{a.metric}</div>
                        <div className="text-xs text-stone-400">{a.read}</div>
                      </td>
                      <td className="py-3 text-right">
                        <div className="flex items-center justify-end gap-2 text-stone-400">
                          <Pencil
                            size={14}
                            className="cursor-pointer hover:text-stone-600"
                            onClick={() => editArticle(a)}
                          />
                          <Copy
                            size={14}
                            className="cursor-pointer hover:text-stone-600"
                            onClick={() => copyLink(a.slug)}
                          />
                          {a.status === "Draft" ? (
                            <Trash2
                              size={14}
                              className="cursor-pointer hover:text-rose-500"
                              onClick={() => deleteArticle(a)}
                            />
                          ) : (
                            <ExternalLink
                              size={14}
                              className="cursor-pointer hover:text-stone-600"
                              onClick={() => viewArticle(a)}
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

      {/* Library / Upload Modal */}
      {libraryOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setLibraryOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg border border-stone-200 w-full max-w-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b border-stone-100">
              <div className="font-medium text-sm">Select cover image</div>
              <X
                size={18}
                className="cursor-pointer text-stone-400 hover:text-stone-600"
                onClick={() => setLibraryOpen(false)}
              />
            </div>
            <div className="flex gap-2 px-4 pt-3">
              <button
                onClick={() => setLibraryTab("upload")}
                className={`text-sm px-3 py-1.5 rounded-md ${
                  libraryTab === "upload"
                    ? "bg-[#6d1b3f] text-white"
                    : "border border-stone-200 text-stone-600"
                }`}
              >
                Upload
              </button>
              <button
                onClick={() => setLibraryTab("library")}
                className={`text-sm px-3 py-1.5 rounded-md ${
                  libraryTab === "library"
                    ? "bg-[#6d1b3f] text-white"
                    : "border border-stone-200 text-stone-600"
                }`}
              >
                Stock Library
              </button>
            </div>

            {libraryTab === "upload" ? (
              <div className="p-4">
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={onDropCover}
                  className="border-2 border-dashed border-stone-200 rounded-lg py-10 flex flex-col items-center justify-center text-center"
                >
                  <ImagePlus size={22} className="text-stone-400 mb-2" />
                  <div className="text-sm text-stone-700">Drop an image here</div>
                  <button
                    onClick={() => coverFileInputRef.current?.click()}
                    className="mt-3 border border-stone-200 rounded-md px-3 py-1.5 text-sm bg-white hover:bg-stone-50"
                  >
                    Choose file
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {STOCK_LIBRARY.map((img) => (
                  <div
                    key={img.label}
                    onClick={() => {
                      setCoverImage(img.bg);
                      setLibraryOpen(false);
                      showToast(`Selected "${img.label}" from library`);
                    }}
                    className="cursor-pointer rounded-md overflow-hidden border border-stone-200 hover:-translate-y-0.5 hover:shadow-md transition"
                  >
                    <div
                      style={{
                        height: 90,
                        background: img.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: 11,
                        fontWeight: 600,
                        textAlign: "center",
                        padding: 6,
                      }}
                    >
                      {img.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {previewOpen && previewData && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setPreviewOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg border border-stone-200 w-full max-w-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b border-stone-100">
              <div className="font-medium text-sm">Article preview</div>
              <X
                size={18}
                className="cursor-pointer text-stone-400 hover:text-stone-600"
                onClick={() => setPreviewOpen(false)}
              />
            </div>
            <div className="p-6">
              {previewData.cover && (
                <div
                  className="rounded-lg mb-4"
                  style={{
                    height: 220,
                    background: previewData.cover.startsWith("url(")
                      ? `${previewData.cover} center/cover no-repeat`
                      : previewData.cover,
                  }}
                />
              )}
              {previewData.meta && (
                <div className="text-xs text-stone-400 mb-2">{previewData.meta}</div>
              )}
              <h1 className="text-2xl font-semibold mb-2 text-stone-900">{previewData.title}</h1>
              {previewData.subtitle && (
                <p className="text-stone-500 text-sm mb-4">{previewData.subtitle}</p>
              )}
              <div
                className="text-sm leading-relaxed text-stone-700 space-y-3"
                dangerouslySetInnerHTML={{ __html: previewData.bodyHtml }}
              />
              {previewData.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {previewData.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-stone-100 border border-stone-200 rounded-md px-2 py-1 text-xs text-stone-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Toasts toasts={toasts} />
    </div>
  );
}
