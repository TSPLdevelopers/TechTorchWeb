import React, { useState } from "react";
import {
  LayoutDashboard,
  Newspaper,
  BriefcaseBusiness,
  CalendarDays,
  FolderOpen,
  SlidersHorizontal,
  Search,
  Eye,
  Save,
  Send,
  Plus,
  Image as ImageIcon,
  Link as LinkIcon,
  Bold,
  Code2,
  List,
  ListOrdered,
  FileText,
  Radio,
  ShieldCheck,
  ChevronDown,
  X,
  Pencil,
  Copy,
  ExternalLink,
  MoreHorizontal,
} from "lucide-react";

function NewsInsights() {
  const [search, setSearch] = useState("");
  const [activeNav, setActiveNav] = useState("News & Articles");

  const navItems = [
    {
      label: "Dashboard Overview",
      icon: LayoutDashboard,
      path: "/admin-dashboard",
    },
    {
      label: "News & Articles",
      icon: Newspaper,
      path: "/news-insights",
      count: 28,
    },
    {
      label: "Job Openings",
      icon: BriefcaseBusiness,
      path: "/job-openings",
      count: 14,
    },
    {
      label: "Events",
      icon: CalendarDays,
      path: "/enterprise-events",
      count: 6,
    },
    {
      label: "Case Studies",
      icon: FolderOpen,
      path: "/case-studies",
      count: 9,
    },
    {
      label: "System Settings",
      icon: SlidersHorizontal,
      path: "/system-settings",
    },
  ];

  const pressReleases = [
    {
      title: "TechTorch Announces Strategic Multi-Cloud AI Partnership",
      location: "SAN FRANCISCO",
      date: "Oct 14, 2024",
      category: "Product Announcement",
      distribution: "Global AP/TechWire",
      status: "Dispatched",
      reach: "48.2k",
      outlets: "140 Outlets",
      breaking: true,
    },
    {
      title: "TechTorch Q3 Enterprise Innovation Brief Released",
      location: "NEW YORK",
      date: "Oct 10, 2024",
      category: "Executive Press",
      distribution: "Financial News Wire",
      status: "Dispatched",
      reach: "31.5k",
      outlets: "92 Outlets",
    },
    {
      title: "New European Security Center of Excellence Operational",
      location: "ZURICH",
      date: "Oct 03, 2024",
      category: "Company Milestone",
      distribution: "EMEA Wire Distribution",
      status: "Dispatched",
      reach: "19.1k",
      outlets: "65 Outlets",
    },
  ];

  const recentArticles = [
    {
      title: "Distributed Event Fabric at Scale: 100M Msg/Sec Architecture",
      slug: "/insights/distributed-event-fabric-scale",
      category: "Cloud Infrastructure",
      author: "Elena Vance",
      status: "Published",
      date: "Oct 12, 2024",
      metrics: "18.4k views",
      read: "7m read",
    },
    {
      title: "Zero-Trust Multi-Tenant Orchestration for Cloud Kubernetes",
      slug: "/insights/zero-trust-multi-tenant-kubernetes",
      category: "Product & Engineering",
      author: "Marcus Sterling",
      status: "Published",
      date: "Sep 28, 2024",
      metrics: "9.2k views",
      read: "4m read",
    },
    {
      title: "Next-Gen Vector Database Benchmarks & RAG Performance",
      slug: "/insights/vector-db-benchmarks-rag",
      category: "AI & Workflows",
      author: "Dr. Aris Thorne",
      status: "Draft",
      date: "Yesterday at 18:20",
      metrics: "Unpublished",
      read: "~6m read",
    },
  ];

  return (
    <div className="news-page">

      {/* ================= SIDEBAR ================= */}
      <aside className="news-sidebar">

        <div className="news-brand">
          <div className="news-brand-logo">
            <img
              src="/Tech-Torch2.png"
              alt="TechTorch"
            />
          </div>

          <div>
            <div className="news-brand-name">TechTorch</div>
            <div className="news-brand-sub">CMS ENTERPRISE</div>
          </div>
        </div>

        <div className="news-section-title">
          CORE ARCHITECTURE
        </div>

        <nav className="news-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeNav === item.label;

            return (
              <button
                key={item.label}
                className={`news-nav-item ${active ? "active" : ""}`}
                onClick={() => {
                  setActiveNav(item.label);
                  if (item.path) {
                    window.location.href = item.path;
                  }
                }}
              >
                <Icon size={16} />

                <span>{item.label}</span>

                {item.count && (
                  <span className="news-nav-count">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="news-main">

        {/* TOP NAVBAR */}
        <header className="news-topbar">

          <div className="news-search">
            <Search size={15} />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search records, nodes, taxonomy..."
            />
          </div>

          <div className="news-top-right">

            <div className="news-admin">
              <strong>Admin</strong>
              <span>Editor</span>
            </div>

            <div className="news-avatar">
              <img
                src="/Tech-Torch2.png"
                alt="Admin"
              />
            </div>

          </div>
        </header>

        {/* ================= CONTENT ================= */}
        <div className="news-content">

          {/* BREADCRUMB */}
          <div className="news-breadcrumb-card">

            <div className="news-breadcrumb">

              <span>
                <Newspaper size={13} />
                TechTorch CMS
              </span>

              <b>/</b>

              <span>News & Articles</span>

              <b>/</b>

              <strong>Create Article</strong>

              <span className="draft-badge">
                <span />
                Draft Auto-Saved
              </span>

            </div>

            <div className="news-action-row">

              <button className="secondary-btn">
                <Eye size={14} />
                Preview
              </button>

              <button className="secondary-btn">
                <Save size={14} />
                Save Draft
              </button>

              <button className="publish-btn">
                <Send size={14} />
                Publish Article
              </button>

            </div>

          </div>

          {/* ================= EDITOR GRID ================= */}
          <div className="news-editor-grid">

            {/* LEFT / MAIN EDITOR */}
            <section className="article-editor">

              {/* PUBLICATION FORMAT */}
              <div className="format-box">

                <div className="format-title">
                  <span />
                  PUBLICATION FORMAT
                  <small>— Select schema archetype</small>
                </div>

                <div className="format-buttons">

                  <button>
                    <FileText size={13} />
                    Technical Article
                  </button>

                  <button className="selected-format">
                    <Radio size={13} />
                    News & Press Release
                    <span>ACTIVE</span>
                  </button>

                </div>

                <div className="article-meta-grid">

                  <div>
                    <label>◉ DATELINE / LOCATION</label>
                    <div className="input-box">
                      SAN FRANCISCO, CA &amp;
                      <br />
                      LONDON
                    </div>
                  </div>

                  <div>
                    <label>◉ WIRE DISTRIBUTION</label>
                    <div className="input-box">
                      Global Tech Wire +
                      <br />
                      Investor Feed
                    </div>
                  </div>

                  <div>
                    <label>☆ PRESS BADGE &amp; URGENCY</label>

                    <div className="check-row">
                      <span className="check active" />
                      Breaking Spotlight
                    </div>

                    <div className="check-row">
                      <span className="check active" />
                      Media Kit Ready
                    </div>
                  </div>

                </div>
              </div>

              {/* CATEGORY ROW */}
              <div className="category-row">

                <div className="category-select">
                  <span>CATEGORY</span>

                  <button>
                    Artificial Intelligence &amp; Workflows
                    <ChevronDown size={13} />
                  </button>
                </div>

                <div className="read-time">
                  ◷ ~5 min read
                </div>

                <div className="draft-mode">
                  ● Draft Mode
                </div>

              </div>

              {/* ARTICLE TITLE */}
              <div className="article-heading">

                <h1>
                  Engineering Autonomous Enterprise
                  <br />
                  Workflows: The Shift to Intent
                </h1>

                <p>
                  How modern engineering platforms are transitioning from
                  procedural microservice choreographies to self-optimizing,
                  policy-constrained autonomous
                </p>

              </div>

              {/* COVER IMAGE */}
              <div className="cover-upload">

                <div className="upload-icon">
                  <ImageIcon size={17} />
                </div>

                <strong>
                  Drag and drop high-resolution cover image
                </strong>

                <small>
                  Recommended 1920×1080px (PNG, JPG, or WebP up to 10MB)
                </small>

                <button>
                  <FolderOpen size={13} />
                  Browse Library
                </button>

                <span>or drop file anywhere</span>

              </div>

              {/* TOOLBAR */}
              <div className="editor-toolbar">

                <button>H1</button>
                <button>H2</button>
                <button>
                  <Bold size={14} />
                </button>
                <button>
                  <ItalicIcon />
                </button>
                <button>
                  <LinkIcon size={14} />
                </button>
                <button>99</button>
                <button>
                  <Code2 size={14} />
                </button>
                <button>
                  <List size={14} />
                </button>
                <button>
                  <ListOrdered size={14} />
                </button>
                <button>
                  <ImageIcon size={14} />
                </button>

                <div className="toolbar-auto">
                  <span />
                  Auto-saved
                </div>

              </div>

              {/* ARTICLE BODY */}
              <div className="article-body">

                <p>
                  <strong>
                    [SAN FRANCISCO, CA • October 14, 2024] —
                    TechTorch
                  </strong>
                  , the enterprise platform for autonomous workflow
                  orchestration, today detailed key architectural
                  breakthroughs accelerating the migration from static,
                  procedural microservice designs to intent-driven
                  autonomous systems.
                </p>

                <p>
                  Modern distributed architectures require verifiable
                  guardrails, real-time observability fabrics, and declarative
                  governance policies. Through its new enterprise
                  capabilities, organizations can operationalize
                  multi-agent systems while maintaining SOC2 and zero-trust
                  perimeter conformance across hybrid infrastructure.
                </p>

                <div className="body-footer">

                  <span>
                    ◉ Cursor positioned at paragraph 2 • Press '/' for smart
                    components
                  </span>

                  <span>
                    248 words • 1,640 characters
                  </span>

                </div>

              </div>

            </section>

            {/* ================= RIGHT PANEL ================= */}
            <aside className="article-right">

              {/* ARTICLE SETTINGS */}
              <div className="right-card">

                <div className="right-card-title">
                  <div>
                    <SlidersHorizontal size={14} />
                    <strong>Article Settings</strong>
                  </div>

                  <span>CORE<br />METAS</span>
                </div>

                <div className="setting-block">

                  <label>AUTHOR</label>

                  <button className="author-select">
                    <span>
                      Dr. Aris Thorne
                      <small>
                        (Chief of AI Architect)
                      </small>
                    </span>

                    <ChevronDown size={13} />
                  </button>

                </div>

                <div className="setting-block">

                  <label>PUBLISH DATE</label>

                  <div className="radio-option active">
                    <span />
                    Publish immediately
                  </div>

                  <div className="radio-option">
                    <span />
                    Schedule for later release
                  </div>

                </div>

                <div className="setting-block">

                  <label>
                    TAGS &amp; TAXONOMY
                    <small>3 added</small>
                  </label>

                  <div className="tag">
                    Enterprise AI
                    <X size={11} />
                  </div>

                  <div className="tag">
                    Cloud Architecture
                    <X size={11} />
                  </div>

                  <div className="tag">
                    Autonomous Systems
                    <X size={11} />
                  </div>

                  <button className="add-tag">
                    + Add tag
                  </button>

                </div>

              </div>

              {/* MEDIA CHANNEL */}
              <div className="right-card">

                <div className="right-card-title">

                  <div>
                    <Radio size={14} />
                    <strong>News &amp; Media Channel</strong>
                  </div>

                  <span>PRESS<br />WIRE</span>

                </div>

                <div className="setting-block">

                  <label>PRESS OFFICER LIAISON</label>

                  <div className="person-row">

                    <div className="person-avatar">
                      PR
                    </div>

                    <div>
                      <strong>Claire Montrose</strong>
                      <small>
                        press@techtorch.solutions
                      </small>
                    </div>

                  </div>

                </div>

                <div className="setting-block">

                  <label>EMBARGO DATE &amp; TIME</label>

                  <div className="embargo">
                    Immediate Release
                    <small>(No Embargo)</small>

                    <ShieldCheck size={14} />
                  </div>

                </div>

                <div className="syndicate-row">
                  Syndicate to Newsroom RSS
                  <span />
                </div>

              </div>

              {/* WRITING TIP */}
              <div className="writing-tip">

                <strong>♧ Writing Tip</strong>

                <p>
                  Highlight any text block to access quick styling, or paste
                  markdown directly into the editor canvas.
                </p>

              </div>

            </aside>

          </div>

          {/* ================= PRESS RELEASES ================= */}
          <section className="wide-card">

            <div className="wide-card-header">

              <div className="wide-title-icon">
                <Radio size={16} />
              </div>

              <div>
                <div className="wide-title">
                  Company News &amp; Press Dispatches
                  <span>12 Published News Items</span>
                </div>

                <p>
                  Corporate announcements, strategic media dispatches,
                  and public earnings briefings
                </p>
              </div>

            </div>

            <div className="wide-toolbar">

              <div className="small-search">
                <Search size={13} />
                Filter dispatches &amp; wire...
              </div>

              <button className="new-release-btn">
                <Plus size={14} />
                New Press Release
              </button>

            </div>

            <div className="release-tabs">

              <button className="active">All Releases</button>
              <button>Product Announcements (5)</button>
              <button>Company Milestones (4)</button>
              <button>Executive Press (3)</button>

              <span>◔ Global Press RSS Active</span>

            </div>

            <div className="table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>DISPATCH TITLE &amp; DATELINE</th>
                    <th>NEWS CATEGORY</th>
                    <th>DISTRIBUTION WIRE</th>
                    <th>RELEASE STATUS</th>
                    <th>MEDIA REACH</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>

                  {pressReleases.map((item, index) => (
                    <tr key={index}>

                      <td>
                        <div className="table-title">
                          <FileText size={14} />

                          <div>
                            <strong>
                              {item.title}
                              {item.breaking && (
                                <em>BREAKING</em>
                              )}
                            </strong>

                            <small>
                              {item.location} • {item.date}
                            </small>

                            <code>
                              /press/{index + 1}-corporate-release
                            </code>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className="category-badge">
                          {item.category}
                        </span>
                      </td>

                      <td>
                        <div className="wire">
                          ◉
                          <span>
                            {item.distribution}
                          </span>
                        </div>
                      </td>

                      <td>
                        <div className="status">
                          <span />
                          {item.status}
                          <small>
                            Today, 08:00 EST
                          </small>
                        </div>
                      </td>

                      <td>
                        <div className="reach">
                          {item.reach}
                          <small>syndications</small>
                          <strong>{item.outlets}</strong>
                        </div>
                      </td>

                      <td>
                        <div className="actions">
                          <Pencil size={13} />
                          <Copy size={13} />
                          <ExternalLink size={13} />
                        </div>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </section>

          {/* ================= RECENT ARTICLES ================= */}
          <section className="wide-card recent-card">

            <div className="wide-card-header">

              <div className="wide-title-icon">
                <FileText size={16} />
              </div>

              <div>
                <div className="wide-title">
                  Recent &amp; Published Articles
                  <span>24 Total</span>
                </div>

                <p>
                  Manage previous publications, drafts, and enterprise
                  content archives
                </p>
              </div>

              <div className="manage-all">
                <button>
                  <SlidersHorizontal size={12} />
                  Filter recent articles...
                </button>

                <button>
                  <FolderOpen size={12} />
                  Manage All
                </button>
              </div>

            </div>

            <div className="table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>ARTICLE TITLE &amp; SLUG</th>
                    <th>CATEGORY</th>
                    <th>AUTHOR</th>
                    <th>STATUS &amp; DATE</th>
                    <th>METRICS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>

                  {recentArticles.map((item, index) => (
                    <tr key={index}>

                      <td>
                        <div className="table-title">

                          <FileText size={14} />

                          <div>
                            <strong>{item.title}</strong>

                            <code>
                              {item.slug}
                            </code>
                          </div>

                        </div>
                      </td>

                      <td>
                        <span className="category-badge">
                          {item.category}
                        </span>
                      </td>

                      <td>
                        {item.author}
                      </td>

                      <td>

                        <div
                          className={`article-status ${
                            item.status === "Draft"
                              ? "draft"
                              : ""
                          }`}
                        >
                          <span />
                          {item.status}

                          <small>
                            {item.date}
                          </small>
                        </div>

                      </td>

                      <td>
                        <div className="metrics">
                          {item.metrics}
                          <small>{item.read}</small>
                        </div>
                      </td>

                      <td>
                        <div className="actions">
                          <Pencil size={13} />
                          <Copy size={13} />
                          <ExternalLink size={13} />
                        </div>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </section>

        </div>
      </main>

      {/* ================= CSS ================= */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .news-page {
          min-height: 100vh;
          background: #f7f7f8;
          color: #252128;
          display: flex;
          font-family: Inter, Arial, sans-serif;
        }

        /* ================= SIDEBAR ================= */

        .news-sidebar {
          width: 198px;
          background: #fff;
          border-right: 1px solid #e7e3e7;
          flex-shrink: 0;
          min-height: 100vh;
        }

        .news-brand {
          height: 48px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 20px;
          border-bottom: 1px solid #f0edf0;
        }

        .news-brand-logo {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .news-brand-logo img {
          width: 25px;
          height: 25px;
          object-fit: contain;
        }

        .news-brand-name {
          font-size: 15px;
          font-weight: 800;
          line-height: 1;
        }

        .news-brand-sub {
          margin-top: 3px;
          font-size: 7.5px;
          letter-spacing: .16em;
          color: #8c818b;
        }

        .news-section-title {
          padding: 15px 25px 8px;
          color: #817681;
          font-size: 8.5px;
          letter-spacing: .17em;
          font-weight: 700;
        }

        .news-nav {
          padding: 0 7px;
        }

        .news-nav-item {
          width: 100%;
          height: 30px;
          border: 0;
          background: transparent;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 10px;
          border-radius: 7px;
          margin-bottom: 3px;
          cursor: pointer;
          color: #4e4650;
          font-size: 11px;
          text-align: left;
        }

        .news-nav-item svg {
          flex-shrink: 0;
        }

        .news-nav-item span:nth-child(2) {
          flex: 1;
        }

        .news-nav-item.active {
          background: #850044;
          color: white;
          font-weight: 700;
        }

        .news-nav-count {
          background: #f0eaf0;
          color: #817681;
          min-width: 25px;
          height: 20px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
        }

        .news-nav-item.active .news-nav-count {
          background: rgba(255,255,255,.18);
          color: white;
        }

        /* ================= MAIN ================= */

        .news-main {
          flex: 1;
          min-width: 0;
        }

        .news-topbar {
          height: 48px;
          background: #fff;
          border-bottom: 1px solid #e7e3e7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }

        .news-search {
          width: min(570px, 65%);
          height: 30px;
          border-radius: 7px;
          background: #f7f6f8;
          border: 1px solid #ece8ec;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 10px;
          color: #827782;
        }

        .news-search input {
          border: 0;
          outline: 0;
          background: transparent;
          width: 100%;
          font-size: 10px;
          color: #332d34;
        }

        .news-top-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .news-admin {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          line-height: 1.1;
          font-size: 10px;
        }

        .news-admin span {
          font-size: 8px;
          color: #877c86;
        }

        .news-avatar {
          width: 27px;
          height: 27px;
          border-radius: 50%;
          background: #850044;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .news-avatar img {
          width: 22px;
          height: 22px;
          object-fit: contain;
        }

        /* ================= CONTENT ================= */

        .news-content {
          padding: 12px 20px 35px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .news-breadcrumb-card {
          background: white;
          border: 1px solid #e8e3e8;
          border-radius: 10px;
          padding: 10px 14px;
          margin-bottom: 12px;
        }

        .news-breadcrumb {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 9px;
          color: #766b75;
          margin-bottom: 9px;
        }

        .news-breadcrumb span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .news-breadcrumb strong {
          color: #4b414a;
        }

        .draft-badge {
          margin-left: auto;
          background: #f3eff3;
          border-radius: 999px;
          padding: 4px 8px;
          font-size: 8px;
        }

        .draft-badge span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #8b0048;
        }

        .news-action-row {
          display: flex;
          gap: 7px;
        }

        button {
          font-family: inherit;
        }

        .secondary-btn,
        .publish-btn {
          height: 28px;
          padding: 0 12px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 9px;
          cursor: pointer;
        }

        .secondary-btn {
          border: 1px solid #e5dfe5;
          background: white;
          color: #504650;
        }

        .publish-btn {
          border: 0;
          background: #850044;
          color: white;
          font-weight: 700;
          box-shadow: 0 3px 8px rgba(133,0,68,.16);
        }

        /* ================= EDITOR ================= */

        .news-editor-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 165px;
          gap: 14px;
          align-items: start;
        }

        .article-editor {
          background: #fff;
          border: 1px solid #e8e3e8;
          border-radius: 10px;
          padding: 14px;
        }

        .format-box {
          border: 1px solid #e8e2e8;
          background: #fbfafb;
          border-radius: 8px;
          padding: 12px;
        }

        .format-title {
          font-size: 8px;
          color: #806f7b;
          font-weight: 700;
          letter-spacing: .08em;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .format-title > span {
          width: 5px;
          height: 5px;
          background: #850044;
          border-radius: 50%;
        }

        .format-title small {
          font-weight: 400;
          letter-spacing: 0;
        }

        .format-buttons {
          display: flex;
          gap: 6px;
          margin-top: 8px;
        }

        .format-buttons button {
          border: 1px solid #e4dfe4;
          background: white;
          border-radius: 6px;
          padding: 7px 10px;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 8px;
          color: #625861;
        }

        .format-buttons .selected-format {
          background: #850044;
          color: white;
          border-color: #850044;
        }

        .selected-format span {
          font-size: 6px;
          background: rgba(255,255,255,.15);
          border-radius: 999px;
          padding: 2px 5px;
        }

        .article-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
          margin-top: 12px;
        }

        .article-meta-grid label {
          display: block;
          color: #8b7d87;
          font-size: 7px;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .input-box {
          min-height: 38px;
          border: 1px solid #e4dfe4;
          background: white;
          border-radius: 6px;
          padding: 7px;
          font-size: 8px;
          color: #3d363d;
        }

        .check-row {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 8px;
          margin-bottom: 7px;
        }

        .check {
          width: 7px;
          height: 7px;
          border-radius: 2px;
          border: 1px solid #bcb1bb;
        }

        .check.active {
          background: #850044;
          border-color: #850044;
        }

        .category-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 11px 0;
        }

        .category-select {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
        }

        .category-select > span {
          font-size: 7px;
          color: #8b7d87;
          font-weight: 700;
        }

        .category-select button {
          border: 1px solid #e7e1e7;
          background: #faf9fa;
          border-radius: 999px;
          padding: 5px 8px;
          font-size: 8px;
          display: flex;
          align-items: center;
          gap: 5px;
          color: #544a53;
        }

        .read-time,
        .draft-mode {
          border-radius: 999px;
          background: #f5f1f4;
          padding: 5px 8px;
          font-size: 7px;
          white-space: nowrap;
          color: #695e67;
        }

        .draft-mode {
          color: #850044;
          font-weight: 700;
        }

        .article-heading {
          border-bottom: 1px solid #ece7ec;
          padding-bottom: 9px;
        }

        .article-heading h1 {
          margin: 0 0 8px;
          font-size: 22px;
          line-height: 1.15;
          font-weight: 600;
          letter-spacing: -.03em;
        }

        .article-heading p {
          margin: 0;
          font-size: 10px;
          line-height: 1.6;
          color: #6d626c;
        }

        .cover-upload {
          min-height: 120px;
          margin-top: 12px;
          border: 1px dashed #d9c9d3;
          border-radius: 9px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          color: #625861;
        }

        .upload-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: #f3edf2;
          color: #850044;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 3px;
        }

        .cover-upload strong {
          font-size: 9px;
        }

        .cover-upload small,
        .cover-upload > span {
          font-size: 7px;
          color: #8b7d87;
        }

        .cover-upload button {
          border: 1px solid #e2dce2;
          background: white;
          border-radius: 5px;
          padding: 5px 9px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 7px;
          font-weight: 600;
          color: #4e444d;
        }

        .editor-toolbar {
          height: 34px;
          margin-top: 12px;
          border: 1px solid #e7e1e7;
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: 0 7px;
          gap: 1px;
          box-shadow: 0 2px 6px rgba(0,0,0,.03);
        }

        .editor-toolbar button {
          width: 25px;
          height: 24px;
          border: 0;
          background: transparent;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          color: #4e444d;
        }

        .editor-toolbar button:hover {
          background: #f3edf2;
        }

        .toolbar-auto {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 7px;
          color: #4e444d;
        }

        .toolbar-auto span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #269557;
        }

        .article-body {
          border: 1px solid #ece7ec;
          border-radius: 8px;
          margin-top: 12px;
          padding: 13px;
        }

        .article-body p {
          font-size: 9px;
          line-height: 1.65;
          color: #514850;
          margin: 0 0 10px;
        }

        .article-body strong {
          color: #342b33;
        }

        .body-footer {
          border-top: 1px solid #eee9ee;
          padding-top: 9px;
          display: flex;
          justify-content: space-between;
          gap: 8px;
          color: #91858f;
          font-size: 7px;
        }

        /* ================= RIGHT ================= */

        .article-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .right-card {
          background: white;
          border: 1px solid #e8e3e8;
          border-radius: 9px;
          padding: 11px;
        }

        .right-card-title {
          display: flex;
          justify-content: space-between;
          gap: 6px;
          border-bottom: 1px solid #eee9ee;
          padding-bottom: 9px;
          margin-bottom: 11px;
        }

        .right-card-title > div {
          display: flex;
          gap: 5px;
          align-items: center;
          font-size: 10px;
        }

        .right-card-title > div svg {
          color: #850044;
        }

        .right-card-title > span {
          text-align: center;
          background: #f2e9ef;
          color: #850044;
          font-size: 6px;
          line-height: 1.2;
          font-weight: 800;
          padding: 4px 5px;
          border-radius: 5px;
        }

        .setting-block {
          margin-bottom: 13px;
        }

        .setting-block label {
          display: flex;
          justify-content: space-between;
          font-size: 7px;
          color: #94858f;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .setting-block label small {
          font-size: 6px;
          background: #f2edef;
          padding: 3px 4px;
          border-radius: 3px;
        }

        .author-select {
          width: 100%;
          min-height: 39px;
          border: 1px solid #e4dfe4;
          background: #faf9fa;
          border-radius: 6px;
          padding: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          font-size: 8px;
        }

        .author-select span {
          display: flex;
          flex-direction: column;
        }

        .author-select small {
          color: #857a84;
          font-size: 7px;
          margin-top: 2px;
        }

        .radio-option {
          display: flex;
          gap: 6px;
          align-items: center;
          font-size: 8px;
          margin: 7px 0;
        }

        .radio-option span {
          width: 9px;
          height: 9px;
          border: 1px solid #bcb2bb;
          border-radius: 50%;
        }

        .radio-option.active span {
          border: 3px solid #850044;
        }

        .tag {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f5f2f5;
          border-radius: 999px;
          padding: 5px 7px;
          margin-bottom: 5px;
          font-size: 7px;
        }

        .tag svg {
          color: #867985;
        }

        .add-tag {
          width: 100%;
          border: 1px dashed #dfd5de;
          background: white;
          border-radius: 999px;
          padding: 5px;
          font-size: 7px;
          color: #6e626b;
        }

        .person-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .person-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #850044;
          color: white;
          font-size: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .person-row strong,
        .person-row small {
          display: block;
        }

        .person-row strong {
          font-size: 7px;
        }

        .person-row small {
          font-size: 6px;
          color: #8b7e87;
          margin-top: 2px;
        }

        .embargo {
          position: relative;
          border: 1px solid #e5dfe5;
          background: #faf9fa;
          border-radius: 6px;
          padding: 7px;
          font-size: 8px;
        }

        .embargo small {
          display: block;
          color: #81757e;
          font-size: 6px;
          margin-top: 2px;
        }

        .embargo svg {
          position: absolute;
          right: 7px;
          top: 10px;
          color: #269557;
        }

        .syndicate-row {
          border-top: 1px solid #eee9ee;
          padding-top: 9px;
          font-size: 7px;
          display: flex;
          justify-content: space-between;
        }

        .syndicate-row span {
          width: 9px;
          height: 9px;
          background: #850044;
          border-radius: 2px;
        }

        .writing-tip {
          background: #f8f5f7;
          border: 1px solid #ebe4e9;
          border-radius: 9px;
          padding: 10px;
        }

        .writing-tip strong {
          font-size: 8px;
          color: #554951;
        }

        .writing-tip p {
          font-size: 7px;
          color: #887b85;
          line-height: 1.5;
          margin: 6px 0 0;
        }

        /* ================= WIDE CARDS ================= */

        .wide-card {
          margin-top: 14px;
          background: white;
          border: 1px solid #e8e3e8;
          border-radius: 9px;
          overflow: hidden;
        }

        .wide-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
        }

        .wide-title-icon {
          width: 27px;
          height: 27px;
          border-radius: 7px;
          background: #f1e9ef;
          color: #850044;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .wide-title {
          font-size: 10px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .wide-title span {
          font-size: 6px;
          background: #f1eaf0;
          color: #850044;
          padding: 3px 5px;
          border-radius: 999px;
        }

        .wide-card-header p {
          margin: 2px 0 0;
          color: #8c7f89;
          font-size: 7px;
        }

        .wide-toolbar {
          padding: 0 12px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .small-search {
          height: 25px;
          min-width: 220px;
          border: 1px solid #e8e2e8;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 0 8px;
          font-size: 7px;
          color: #92858f;
        }

        .new-release-btn {
          border: 0;
          background: #850044;
          color: white;
          border-radius: 6px;
          height: 25px;
          padding: 0 9px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 7px;
          font-weight: 700;
        }

        .release-tabs {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 0 12px 9px;
        }

        .release-tabs button {
          border: 1px solid #e7e1e7;
          background: white;
          border-radius: 999px;
          padding: 5px 8px;
          font-size: 6.5px;
          color: #685d66;
        }

        .release-tabs button.active {
          background: #850044;
          border-color: #850044;
          color: white;
        }

        .release-tabs > span {
          margin-left: auto;
          font-size: 7px;
          color: #4d8e62;
        }

        .table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 720px;
        }

        th {
          background: #fbfafb;
          border-top: 1px solid #eee9ee;
          border-bottom: 1px solid #eee9ee;
          padding: 8px 12px;
          text-align: left;
          font-size: 6.5px;
          color: #81747e;
          letter-spacing: .04em;
        }

        td {
          padding: 9px 12px;
          border-bottom: 1px solid #f0ebf0;
          vertical-align: middle;
          font-size: 7px;
          color: #615760;
        }

        .table-title {
          display: flex;
          gap: 7px;
          align-items: flex-start;
          min-width: 180px;
        }

        .table-title > svg {
          color: #850044;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .table-title strong {
          display: block;
          color: #413840;
          font-size: 8px;
          line-height: 1.3;
        }

        .table-title small,
        .table-title code {
          display: block;
          font-size: 6px;
          margin-top: 3px;
        }

        .table-title small {
          color: #8d818a;
        }

        .table-title code {
          color: #a08f9b;
        }

        .table-title em {
          font-style: normal;
          background: #f6e5e9;
          color: #a23545;
          border-radius: 3px;
          font-size: 5px;
          padding: 2px 4px;
          margin-left: 4px;
        }

        .category-badge {
          display: inline-block;
          background: #f3f1f3;
          border-radius: 4px;
          padding: 5px 6px;
          font-size: 6px;
          color: #6e636c;
        }

        .wire {
          display: flex;
          gap: 5px;
          align-items: center;
          color: #850044;
        }

        .wire span {
          color: #635861;
        }

        .status {
          color: #23834c;
          font-weight: 700;
        }

        .status > span,
        .article-status > span {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #2b995a;
          margin-right: 4px;
        }

        .status small,
        .article-status small {
          display: block;
          color: #8e818a;
          font-size: 6px;
          margin: 2px 0 0 9px;
          font-weight: 400;
        }

        .reach {
          color: #5d535b;
        }

        .reach small,
        .reach strong {
          display: block;
          font-size: 6px;
        }

        .reach strong {
          color: #2d8550;
          margin-top: 2px;
        }

        .actions {
          display: flex;
          gap: 9px;
          color: #756974;
        }

        .article-status {
          color: #25824b;
          font-weight: 700;
        }

        .article-status.draft {
          color: #850044;
        }

        .article-status.draft > span {
          background: #850044;
        }

        .metrics {
          font-weight: 700;
          color: #574d55;
        }

        .metrics small {
          display: block;
          color: #91848e;
          font-weight: 400;
          margin-top: 2px;
        }

        .manage-all {
          margin-left: auto;
          display: flex;
          gap: 5px;
        }

        .manage-all button {
          height: 24px;
          border: 1px solid #e7e1e7;
          background: white;
          border-radius: 5px;
          padding: 0 7px;
          font-size: 6.5px;
          display: flex;
          align-items: center;
          gap: 4px;
          color: #665a64;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1050px) {

          .news-sidebar {
            width: 175px;
          }

          .news-editor-grid {
            grid-template-columns: 1fr;
          }

          .article-right {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .writing-tip {
            grid-column: span 2;
          }

        }

        @media (max-width: 700px) {

          .news-sidebar {
            display: none;
          }

          .news-content {
            padding: 10px;
          }

          .news-topbar {
            padding: 0 10px;
          }

          .news-search {
            width: 70%;
          }

          .article-meta-grid {
            grid-template-columns: 1fr;
          }

          .article-heading h1 {
            font-size: 19px;
          }

          .article-right {
            grid-template-columns: 1fr;
          }

          .writing-tip {
            grid-column: auto;
          }

          .category-row {
            flex-wrap: wrap;
          }

          .category-select {
            width: 100%;
          }

          .manage-all {
            display: none;
          }

        }

      `}</style>
    </div>
  );
}


/* Small italic icon without another dependency */
function ItalicIcon() {
  return (
    <span
      style={{
        fontStyle: "italic",
        fontWeight: 700,
        fontSize: "12px",
      }}
    >
      I
    </span>
  );
}

export default NewsInsights;