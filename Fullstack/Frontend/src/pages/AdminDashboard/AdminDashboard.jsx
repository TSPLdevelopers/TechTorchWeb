import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Newspaper,
  Briefcase,
  CalendarDays,
  FolderOpen,
  SlidersHorizontal,
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
   LayoutDashboard,
  
  BriefcaseBusiness,
  

  
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Static / mock data                                                          */
/* -------------------------------------------------------------------------- */

const NAV_ITEMS = [
  { key: "overview", label: "Dashboard Overview", icon: LayoutGrid },
  { key: "news", label: "News & Insights", icon: Newspaper, count: 28 },
  { key: "jobs", label: "Job Openings", icon: Briefcase, count: 14 },
  { key: "events", label: "Enterprise Events", icon: CalendarDays, count: 6 },
  { key: "cases", label: "Case Studies", icon: FolderOpen, count: 9 },
  { key: "settings", label: "System Settings", icon: SlidersHorizontal },
];

const HERO_METRICS = [
  { icon: Newspaper, value: "28", label: "Insights & News" },
  { icon: Briefcase, value: "14", label: "Active Jobs" },
  { icon: CalendarDays, value: "6", label: "Events" },
  { icon: FolderOpen, value: "9", label: "Whitepapers" },
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

const ARTICLES = [
  {
    status: "Published",
    title: "Engineering the Shift to Autonomous Enterprise Architecture",
    domain: "Cloud Platform",
    author: "Dr. Aris Thorne",
  },
  {
    status: "Published",
    title: "Securing Hybrid Cloud Workloads with Multi-Layer Telemetry",
    domain: "Cyber Defense",
    author: "Evelyn Vance",
  },
  {
    status: "Scheduled",
    title: "Predictive Workforce Analytics: Optimizing Enterprise Hiring",
    domain: "Enterprise HCM",
    author: "Marcus Liu",
  },
  {
    status: "Draft",
    title: "Legacy Core Modernization: Decoupled API-First Migration",
    domain: "Systems Arch",
    author: "Sarah Jenkins",
  },
];

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

  const [activeNav, setActiveNav] = useState("overview");
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [domain, setDomain] = useState("All Domains");
  const [domainOpen, setDomainOpen] = useState(false);

  const domains = ["All Domains", "Cloud Platform", "Cyber Defense", "Enterprise HCM", "Systems Arch"];

  return (
    <div className="ttad-root">
      <StyleBlock />

      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="ttad-main">
        <TopNavbar search={search} setSearch={setSearch} />

        <div className="ttad-content">
          <Hero />

          <div className="ttad-stats-grid">
            {STAT_CARDS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          <div className="ttad-body-grid">
            <div className="ttad-left-col">
              <PublishingDirectory
               activeNav={activeNav}
  setActiveNav={setActiveNav}
                page={page}
                setPage={setPage}
                filter={filter}
                setFilter={setFilter}
                domain={domain}
                setDomain={setDomain}
                domainOpen={domainOpen}
                setDomainOpen={setDomainOpen}
                domains={domains}
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
/* Sidebar                                                                    */
/* -------------------------------------------------------------------------- */

function Sidebar({ activeNav, setActiveNav }) {

  const navigate = useNavigate();
  return (
    <aside className="ttad-sidebar">

      <div className="ttad-brand">
        <div className="ttad-brand-mark">
          <img
            src="/Tech-Torch2.png"
            alt="TechTorch"
            className="ttad-brand-logo"
          />
        </div>

        <div className="ttad-brand-text">
          <div className="ttad-brand-name">TechTorch</div>
          <div className="ttad-brand-sub">ENTERPRISE CORE</div>
        </div>
      </div>

      <div className="ttad-nav-label">NAVIGATION</div>

      <nav className="ttad-nav">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = activeNav === item.key;

          return (
            <button
  key={item.key}
  type="button"
  className={
    "ttad-nav-item" + (active ? " active" : "")
  }
  onClick={() => {
    setActiveNav(item.key);

    if (item.key === "news") {
      navigate("/News-Insights");
    }
  }}
>
              <Icon size={17} strokeWidth={2} />

              <span className="ttad-nav-item-label">
                {item.label}
              </span>

              {typeof item.count === "number" && (
                <span
                  className={
                    "ttad-nav-count" +
                    (active ? " active" : "")
                  }
                >
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>

    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/* Top navbar                                                                  */
/* -------------------------------------------------------------------------- */

function TopNavbar({ search, setSearch }) {
  return (
    <header className="ttad-topbar">

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
        <button
          className="ttad-icon-btn"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="ttad-icon-dot" />
        </button>

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
function Hero() {
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
        <button className="ttad-hero-btn primary">
          <Plus size={15} /> Publish Article
        </button>

        <button className="ttad-hero-btn">
          <Plus size={15} /> Post Job
        </button>

        <button className="ttad-hero-btn">
          <Plus size={15} /> Add Event
        </button>

        <button className="ttad-hero-btn">
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
          {HERO_METRICS.map((m) => {
            const Icon = m.icon;

            return (
              <div className="ttad-hero-metric" key={m.label}>
                <div className="ttad-hero-metric-icon">
                  <Icon size={16} />
                </div>

                <div>
                  <div className="ttad-hero-metric-value">
                    {m.value}
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

function PublishingDirectory({
  activeTab,
  setActiveTab,
  page,
  setPage,
  filter,
  setFilter,
  domain,
  setDomain,
  domainOpen,
  setDomainOpen,
  domains,
}) {
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
              {domains.map((d) => (
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

        <button className="ttad-new-entry">
          <Plus size={15} />
          New Entry
        </button>
      </div>

      {/* TABLE */}
      <div className="ttad-table-wrap">
        <table className="ttad-table">
          <thead>
            <tr>
              <th>STATUS</th>
              <th>ARTICLE TITLE</th>
              <th>DOMAIN</th>
              <th>AUTHOR</th>
            </tr>
          </thead>

          <tbody>
            {ARTICLES.map((a) => (
              <tr key={a.title}>
                <td>
                  <span
                    className={"ttad-badge " + a.status.toLowerCase()}
                  >
                    {a.status}
                  </span>
                </td>

                <td className="ttad-table-title">
                  {a.title}
                </td>

                <td className="ttad-table-muted">
                  {a.domain}
                </td>

                <td className="ttad-table-author">
                  {a.author}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="ttad-pagination">
        <span className="ttad-pagination-info">
          Showing 1 to 4 of 28 articles
        </span>

        <div className="ttad-pagination-controls">

          <button
            className="ttad-page-btn"
            onClick={() =>
              setPage((p) => Math.max(1, p - 1))
            }
          >
            <ChevronLeft size={14} />
            Previous
          </button>

          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={
                "ttad-page-num" +
                (page === n ? " active" : "")
              }
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}

          <button
            className="ttad-page-btn"
            onClick={() =>
              setPage((p) => Math.min(3, p + 1))
            }
          >
            Next
            <ChevronRight size={14} />
          </button>

        </div>
      </div>

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
        --ttad-sidebar-w: 256px;
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
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 14px;
      }

      /* ========================================================= */
/* SIDEBAR                                                   */
/* ========================================================= */

.ttad-sidebar {
  width: 250px;
  min-width: 250px;
  min-height: 100vh;
  background: var(--ttad-card);
  border-right: 1px solid var(--ttad-border);
  display: flex;
  flex-direction: column;
  padding: 20px 14px;
}

/* Brand */

.ttad-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 8px 24px;
}

.ttad-brand-mark {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ttad-brand-logo {
  width: 42px;
  height: 42px;
  object-fit: contain;
  display: block;
}

.ttad-brand-text {
  min-width: 0;
}

.ttad-brand-name {
  font-size: 16px;
  font-weight: 800;
  line-height: 1.2;
  color: var(--ttad-text);
}

.ttad-brand-sub {
  margin-top: 3px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--ttad-text-faint);
}

/* Navigation heading */

.ttad-nav-label {
  padding: 8px 12px 9px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--ttad-text-faint);
}

/* Navigation */

.ttad-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Navigation button */

.ttad-nav-item {
  width: 100%;
  min-height: 44px;
  display: flex;
  align-items: center;
  gap: 11px;

  padding: 10px 12px;

  border: none;
  border-radius: 10px;

  background: transparent;
  color: var(--ttad-text);

  font-family: inherit;
  font-size: 13px;
  font-weight: 500;

  text-align: left;
  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.ttad-nav-item:hover {
  background: #f7f1f5;
}

.ttad-nav-item.active {
  background: var(--ttad-primary);
  color: #ffffff;
}

.ttad-nav-item-label {
  flex: 1;
  white-space: nowrap;
}

/* Count */

.ttad-nav-count {
  min-width: 25px;
  height: 22px;

  padding: 0 7px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  background: #f0edf1;
  color: var(--ttad-text-muted);

  font-size: 10.5px;
  font-weight: 700;
}

.ttad-nav-count.active {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

/* Mobile */

@media (max-width: 780px) {
  .ttad-sidebar {
    width: 250px;
    min-width: 250px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 20;
  }
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

      @media (max-width: 780px) {
        .ttad-sidebar {
          position: fixed; z-index: 20; transform: translateX(-100%);
          transition: transform 0.2s ease; box-shadow: 0 0 0 rgba(0,0,0,0);
        }
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
      }
    `}</style>
  );
}
