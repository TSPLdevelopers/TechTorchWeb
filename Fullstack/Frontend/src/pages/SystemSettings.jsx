import { useState, useRef, useMemo, useEffect } from "react";
import {
  Search, Bell, RotateCcw, ClipboardList, X, ChevronDown, ChevronRight, Check,
  Plus, UploadCloud, Trash2, Database, Zap, RefreshCw,
} from "lucide-react";

const ACCENT = "#780042";
const FONT = "Inter,sans-serif";

const TABS = ["General & Profile", "Security & 2FA", "Notifications & Alerts", "Database & Maintenance", "Webhooks & Audit Logs"];

/* ---------------- option lists for the dropdowns ---------------- */
const TIMEZONES = [
  "(GMT+05:30) Asia/Kolkata (IST)",
  "(GMT+00:00) UTC (Coordinated Universal Time)",
  "(GMT+04:00) Asia/Dubai (GST)",
  "(GMT-05:00) America/New_York (EST)",
  "(GMT+08:00) Asia/Singapore (SGT)",
];
const SESSION_TIMEOUTS = [
  "5 Minutes (Maximum Lockdown)",
  "15 Minutes (Strict Enterprise Compliance)",
  "30 Minutes (Balanced)",
  "60 Minutes (Relaxed)",
];
const MAX_SESSIONS = [
  "1 Concurrent Active Session (Highest Security)",
  "3 Concurrent Active Sessions (Recommended)",
  "5 Concurrent Active Sessions",
  "Unlimited Sessions (Not Advised)",
];
const PASSWORD_EXPIRY = [
  "Every 30 Days (High Security Rotation)",
  "Every 60 Days",
  "Every 90 Days (ISO/IEC 27001 Recommended)",
  "Every 180 Days",
  "Never Expire (Not Advised)",
];
const LOCKOUT_RULES = [
  "3 Failed Attempts (15-Minute Cooldown & Alert)",
  "5 Failed Attempts (30-Minute Cooldown & Alert)",
  "10 Failed Attempts (60-Minute Cooldown & Alert)",
  "Disabled (No Automatic Lockout)",
];

const NOTIFICATIONS = [
  {
    key: "email",
    title: "Immediate Security Email Alerts",
    desc: "Instant dispatch on failed administrative login spikes, MFA bypass attempts, or unauthorized privilege escalation.",
  },
  {
    key: "changelog",
    title: "System Changelog & Mutation Tracking",
    desc: "Maintains an immutable tamper-evident record of all security policies, API keys, and console configuration mutations.",
  },
  {
    key: "digest",
    title: "Daily Operational Digest & Health Report",
    desc: "Aggregated platform overview covering active sessions, DB latency, backup statuses, and cache statistics every morning.",
  },
  {
    key: "sms",
    title: "Critical Outage SMS Alerts (Super Admin)",
    desc: "Immediate SMS gateway notification sent when database cluster failover occurs or node CPU exceeds 95% threshold.",
  },
];

const INITIAL_AUDIT_ROWS = [
  { id: "a1", time: "Today, 11:24:08", actor: "admin@techtorch.solutions", action: "Update Policy (2FA enforcement: Strict)", target: "/api/v1/auth/policy", ip: "103.21.144.18", status: "200" },
  { id: "a2", time: "Today, 09:12:44", actor: "sec-ops@techtorch.solutions", action: "Add CIDR Whitelist (Corporate VPN)", target: "/network/firewall/rules", ip: "10.14.0.2", status: "201" },
  { id: "a3", time: "Today, 04:00:00", actor: "system.automation@internal", action: "Automated Vacuum (Database indexes)", target: "pg_cluster_primary", ip: "127.0.0.1 (Loopback)", status: "200" },
  { id: "a4", time: "Today, 02:00:14", actor: "backup.daemon@aws", action: "S3 Snapshot Created (Full backup)", target: "s3://techtorch-backups", ip: "172.31.22.90", status: "200" },
];

const DEFAULT_SETTINGS = {
  orgName: "TechTorch Solutions Private Limited",
  orgId: "TTS-GLOBAL-01",
  adminEmail: "admin@techtorch.solutions",
  hq: "Sector 62, Noida, Delhi NCR • India (Pin: 201309)",
  domain: "https://techtorch.solutions",
  helpline: "+91 99102 44778",
  timezone: TIMEZONES[0],
  sessionTimeout: SESSION_TIMEOUTS[1],
  maxSessions: MAX_SESSIONS[1],
  maintenance: false,
  tfaPolicy: "strict",
  passwordExpiry: PASSWORD_EXPIRY[2],
  lockout: LOCKOUT_RULES[1],
  cidrs: [
    "103.21.144.0/22 (Noida HQ Corporate Fiber)",
    "10.14.0.0/16 (Global Corporate WireGuard VPN)",
  ],
  notif: { email: true, changelog: true, digest: true, sms: true },
  webhookUrl: "https://api.techtorch.solutions/v1/audit/stream",
  webhookSecret: "tts_sec_991823abf10928cd981",
  subscribed: { auth: true, settings: true, deployment: true, cluster: true },
};

/* ---------------- helpers ---------------- */
const clock = () =>
  new Date().toLocaleTimeString("en-GB", { hour12: false, timeZone: "Asia/Kolkata" });

const stamp = () => `Today, ${clock()}`;

const randomSecret = () =>
  "tts_sec_" +
  Array.from({ length: 21 }, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("");

const CIDR_RE = /^(\d{1,3}\.){3}\d{1,3}\/\d{1,2}$/;

/* ---------------- small UI pieces (visuals unchanged) ---------------- */
function SectionHeader({ number, title, desc, badge }) {
  return (
    <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
      <div className="flex items-start gap-3">
        <span
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold shrink-0"
          style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
        >
          {number}
        </span>
        <div>
          <h2 className="font-semibold text-stone-900">{title}</h2>
          <p className="text-sm text-stone-400 mt-0.5">{desc}</p>
        </div>
      </div>
      {badge}
    </div>
  );
}

function Toggle({ on, onClick, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onClick}
      className="w-10 h-5.5 h-6 rounded-full px-0.5 flex items-center transition-colors shrink-0"
      style={{ backgroundColor: on ? ACCENT : "#d6d3d1" }}
    >
      <span
        className={`w-5 h-5 rounded-full bg-white shadow transform transition-transform ${on ? "translate-x-4" : "translate-x-0"}`}
      />
    </button>
  );
}

function FieldLabel({ children }) {
  return <label className="text-sm font-medium text-stone-700 mb-1.5 block">{children}</label>;
}

function InputBox({ value, onChange, mono, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full min-w-0 border border-stone-200 rounded-md px-3.5 py-2.5 text-sm bg-white text-stone-900 focus:outline-none focus:border-stone-400 ${mono ? "font-mono" : ""}`}
    />
  );
}

function SelectBox({ value, options, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-2 border border-stone-200 rounded-md px-3.5 py-2.5 text-sm bg-white text-left"
      >
        <span className="truncate">{value}</span>
        <ChevronDown size={14} className={`text-stone-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute z-20 mt-1 w-full bg-white border border-stone-200 rounded-md shadow-lg overflow-hidden">
            {options.map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => { onChange(o); setOpen(false); }}
                className="w-full text-left px-3.5 py-2 text-sm hover:bg-stone-50 flex items-center justify-between gap-2"
                style={{ color: o === value ? ACCENT : "#44403c" }}
              >
                <span className="truncate">{o}</span>
                {o === value && <Check size={13} className="shrink-0" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ---------------- main ---------------- */
export default function SystemSettingsConsole() {
  const [tab, setTab] = useState("General & Profile");
  const [query, setQuery] = useState("");

  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [saved, setSaved] = useState(DEFAULT_SETTINGS);

  const [cidrDraft, setCidrDraft] = useState("");
  const [auditRows, setAuditRows] = useState(INITIAL_AUDIT_ROWS);
  const [totalEvents, setTotalEvents] = useState(4821);

  const [lastSnapshot, setLastSnapshot] = useState("Today, 02:00:14 IST");
  const [cacheMb, setCacheMb] = useState(248);
  const [dbUsedGb, setDbUsedGb] = useState(42.8);
  const [busy, setBusy] = useState({ backup: false, cache: false, vacuum: false, ping: false, refresh: false });

  const [bellOpen, setBellOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [toasts, setToasts] = useState([]);

  const refs = {
    "General & Profile": useRef(null),
    "Security & 2FA": useRef(null),
    "Notifications & Alerts": useRef(null),
    "Database & Maintenance": useRef(null),
    "Webhooks & Audit Logs": useRef(null),
  };

  const dirty = useMemo(
    () => JSON.stringify(settings) !== JSON.stringify(saved),
    [settings, saved]
  );

  useEffect(() => {
    const warn = (e) => { if (dirty) { e.preventDefault(); e.returnValue = ""; } };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  const set = (key, value) => setSettings((s) => ({ ...s, [key]: value }));

  const toast = (msg, tone = "ok") => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg, tone }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  };

  const logEvent = (action, target, ip = "103.21.144.18", status = "200") => {
    setAuditRows((rows) => [
      { id: String(Date.now() + Math.random()), time: stamp(), actor: settings.adminEmail, action, target, ip, status },
      ...rows,
    ].slice(0, 12));
    setTotalEvents((n) => n + 1);
    setUnread(true);
  };

  /* ----- actions ----- */
  const saveAll = () => {
    if (!dirty) { toast("No changes to save."); return; }
    setSaved(settings);
    logEvent("Update Settings (console configuration saved)", "/api/v1/settings/bulk", "103.21.144.18", "200");
    toast("All settings saved.");
  };

  const discard = () => {
    if (!dirty) { toast("Nothing to discard."); return; }
    setSettings(saved);
    setCidrDraft("");
    toast("Changes discarded.");
  };

  const addCidr = () => {
    const raw = cidrDraft.trim();
    if (!raw) { toast("Enter a CIDR subnet first.", "warn"); return; }
    const base = raw.split(" ")[0];
    if (!CIDR_RE.test(base)) { toast("Use the format 192.168.1.0/24.", "warn"); return; }
    const [ip, bits] = base.split("/");
    const octetsOk = ip.split(".").every((o) => Number(o) >= 0 && Number(o) <= 255);
    if (!octetsOk || Number(bits) < 0 || Number(bits) > 32) { toast("That IP range is not valid.", "warn"); return; }
    if (settings.cidrs.some((c) => c.split(" ")[0] === base)) { toast("That subnet is already whitelisted.", "warn"); return; }
    set("cidrs", [...settings.cidrs, raw]);
    setCidrDraft("");
    logEvent(`Add CIDR Whitelist (${base})`, "/network/firewall/rules", "103.21.144.18", "201");
    toast(`${base} added to the whitelist.`);
  };

  const removeCidr = (c) => {
    if (settings.cidrs.length === 1) { toast("Keep at least one subnet, or you will lock yourself out.", "warn"); return; }
    set("cidrs", settings.cidrs.filter((x) => x !== c));
    logEvent(`Remove CIDR Whitelist (${c.split(" ")[0]})`, "/network/firewall/rules", "103.21.144.18", "200");
    toast(`${c.split(" ")[0]} removed.`);
  };

  const runBackup = () => {
    if (busy.backup) return;
    setBusy((b) => ({ ...b, backup: true }));
    setTimeout(() => {
      setLastSnapshot(`${stamp()} IST`);
      setBusy((b) => ({ ...b, backup: false }));
      logEvent("S3 Snapshot Created (Manual backup)", "s3://techtorch-backups", "172.31.22.90", "201");
      toast("Manual backup completed.");
    }, 1400);
  };

  const purgeCache = () => {
    if (busy.cache) return;
    setBusy((b) => ({ ...b, cache: true }));
    setTimeout(() => {
      setCacheMb(14);
      setBusy((b) => ({ ...b, cache: false }));
      logEvent("Purge Cache (Redis edge + system keys)", "redis_cluster_primary", "10.14.0.2", "200");
      toast("Edge and system cache purged.");
    }, 1100);
  };

  const vacuumDb = () => {
    if (busy.vacuum) return;
    setBusy((b) => ({ ...b, vacuum: true }));
    setTimeout(() => {
      setDbUsedGb((g) => Math.max(20, +(g - 3.6).toFixed(1)));
      setBusy((b) => ({ ...b, vacuum: false }));
      logEvent("Analyze & Vacuum (Database indexes)", "pg_cluster_primary", "127.0.0.1 (Loopback)", "200");
      toast("Vacuum finished, indexes reclaimed.");
    }, 1600);
  };

  const rotateSecret = () => {
    set("webhookSecret", randomSecret());
    logEvent("Rotate Webhook Secret (HMAC-SHA256)", "/v1/audit/stream", "103.21.144.18", "200");
    toast("New signing secret generated. Save to apply.");
  };

  const sendPing = () => {
    if (busy.ping) return;
    const events = Object.keys(settings.subscribed).filter((k) => settings.subscribed[k]);
    if (!events.length) { toast("Subscribe to at least one event first.", "warn"); return; }
    if (!/^https:\/\/.+/.test(settings.webhookUrl.trim())) { toast("Webhook endpoint must be a https:// URL.", "warn"); return; }
    setBusy((b) => ({ ...b, ping: true }));
    setTimeout(() => {
      setBusy((b) => ({ ...b, ping: false }));
      logEvent(`Send Test Ping (${events.length} event groups)`, settings.webhookUrl, "103.21.144.18", "202");
      toast("Test payload delivered — endpoint responded 202.");
    }, 1200);
  };

  const refreshConsole = () => {
    if (busy.refresh) return;
    setBusy((b) => ({ ...b, refresh: true }));
    setTimeout(() => {
      setBusy((b) => ({ ...b, refresh: false }));
      toast(`Console synced at ${clock()} IST.`);
    }, 900);
  };

  const goTo = (t) => {
    setTab(t);
    refs[t]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ----- search filter ----- */
  const SECTION_TERMS = {
    "General & Profile": "01 general platform organization profile legal name org id email headquarters noida domain helpline timezone session timeout concurrent sessions maintenance mode",
    "Security & 2FA": "02 security two factor authentication 2fa fido2 webauthn yubikey totp password expiration lockout cidr ip whitelist subnet perimeter firewall",
    "Notifications & Alerts": "03 notifications alerts email sms digest changelog incident dispatch health report audit alerts",
    "Database & Maintenance": "04 database cluster cache storage maintenance postgresql backup s3 snapshot redis vacuum retention",
    "Webhooks & Audit Logs": "05 webhooks audit logs stream hmac secret rotate test ping events compliance trail",
  };
  const q = query.trim().toLowerCase();
  const show = (name) => !q || SECTION_TERMS[name].includes(q) || name.toLowerCase().includes(q);
  const noResults = q && !TABS.some(show);

  const dbPct = +((dbUsedGb / 250) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{ fontFamily: FONT }}>

        {/* Main column */}
        <div className="min-h-screen">
          {/* Top bar */}
          <header className="flex items-center gap-4 px-4 sm:px-6 py-3 border-b border-stone-200 bg-white flex-wrap">
            <div className="flex-1 max-w-xl relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search system settings, keys, audit policies, telemetry..."
                className="w-full pl-9 pr-8 py-2 rounded-md bg-stone-50 border border-stone-200 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2"
              />
              {query && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <div className="ml-auto flex items-center gap-4">

  {/* Green Active Status */}
  <span className="hidden md:flex items-center gap-1.5 text-xs font-medium text-emerald-600 whitespace-nowrap">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
    AP-SOUTH-1 (MUMBAI) • ACTIVE
  </span>

  {/* Notification */}
  <div className="relative">
    <button
      type="button"
      aria-label="Notifications"
      onClick={() => { setBellOpen((o) => !o); setUnread(false); }}
      className="relative text-stone-400 hover:text-stone-600"
    >
      <Bell size={18} />
      {unread && <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-rose-500" />}
    </button>
    {bellOpen && (
      <>
        <div className="fixed inset-0 z-10" onClick={() => setBellOpen(false)} />
        <div className="absolute right-0 mt-2 w-80 max-w-[85vw] bg-white border border-stone-200 rounded-lg shadow-lg z-20 overflow-hidden">
          <div className="px-4 py-2.5 border-b border-stone-100 text-xs font-semibold text-stone-500">
            RECENT ACTIVITY
          </div>
          <div className="max-h-72 overflow-y-auto">
            {auditRows.slice(0, 6).map((r) => (
              <div key={r.id} className="px-4 py-2.5 border-b border-stone-50 last:border-0">
                <div className="text-xs font-medium text-stone-700">{r.action}</div>
                <div className="text-[11px] text-stone-400 font-mono mt-0.5">{r.time} • {r.ip}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => { setBellOpen(false); goTo("Webhooks & Audit Logs"); }}
            className="w-full text-xs font-medium py-2.5 hover:bg-stone-50"
            style={{ color: ACCENT }}
          >
            View full audit trail
          </button>
        </div>
      </>
    )}
  </div>

  {/* Refresh */}
  <button
    type="button"
    aria-label="Refresh"
    onClick={refreshConsole}
    className="text-stone-400 hover:text-stone-600"
  >
    <RotateCcw size={17} className={busy.refresh ? "animate-spin" : ""} />
  </button>

  {/* Admin */}
  <div className="hidden sm:block text-sm text-right">
    <div className="font-medium leading-tight">
      Super Admin (Noida HQ)
    </div>
    <div className="text-xs text-stone-400 leading-tight">
      info@techtorch.solutions
    </div>
  </div>

  {/* Admin Avatar */}
  <div
    className="w-8 h-8 rounded-full text-white text-xs flex items-center justify-center font-semibold shrink-0"
    style={{ backgroundColor: ACCENT }}
  >
    SA
  </div>

</div>
          </header>

          <main className="p-4 sm:p-6 space-y-6">
            {/* Breadcrumb + title */}
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-stone-400 mb-2">
                  <span>ENTERPRISE CORE</span>
                  <ChevronRight size={12} />
                  <span>GOVERNANCE &amp; ARCHITECTURE</span>
                  <ChevronRight size={12} />
                  <span style={{ color: ACCENT }}>SYSTEM SETTINGS</span>
                </div>
                <h1 className="text-2xl font-semibold leading-tight text-stone-900">
                  Enterprise System Settings &amp; Platform Governance Console
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goTo("Webhooks & Audit Logs")}
                  className="flex items-center gap-1.5 text-sm px-3 py-2.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 bg-white"
                >
                  <ClipboardList size={14} /> Audit Logs
                </button>
                <button
                  onClick={discard}
                  className="flex items-center gap-1.5 text-sm px-3 py-2.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 bg-white"
                >
                  <X size={14} /> Discard Changes
                </button>
                <button
                  onClick={saveAll}
                  className="flex items-center gap-1.5 text-sm px-3 py-2.5 rounded-md text-white"
                  style={{ backgroundColor: ACCENT, opacity: dirty ? 1 : 0.75 }}
                >
                  <Check size={14} /> Save All Settings
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-stone-200 overflow-x-auto">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => goTo(t)}
                  className="flex items-center gap-1.5 pb-3 text-sm font-medium whitespace-nowrap border-b-2 -mb-px"
                  style={{
                    color: tab === t ? ACCENT : "#78716c",
                    borderColor: tab === t ? ACCENT : "transparent",
                  }}
                >
                  {tab === t && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />}
                  {t}
                </button>
              ))}
            </div>

            {noResults && (
              <div className="bg-white rounded-xl border border-stone-200 p-6 text-sm text-stone-500">
                No settings match “{query}”. Try a term like 2FA, backup, webhook or timezone.
              </div>
            )}

            {/* Section 01 */}
            {show("General & Profile") && (
            <div ref={refs["General & Profile"]} className="bg-white rounded-xl border border-stone-200 p-6 scroll-mt-4">
              <SectionHeader
                number="01"
                title="General Platform & Organization Profile"
                desc="Corporate identifiers, headquarters contacts, active timezone, and console session parameters"
                badge={
                  settings.maintenance ? (
                    <span className="flex items-center gap-1.5 bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Maintenance
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Operational
                    </span>
                  )
                }
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                <div>
                  <FieldLabel>Platform / Organization Legal Name</FieldLabel>
                  <InputBox value={settings.orgName} onChange={(v) => set("orgName", v)} />
                </div>
                <div>
                  <FieldLabel>Enterprise Organization ID</FieldLabel>
                  <InputBox value={settings.orgId} onChange={(v) => set("orgId", v)} mono />
                </div>
                <div>
                  <FieldLabel>Primary Super Admin Email</FieldLabel>
                  <InputBox value={settings.adminEmail} onChange={(v) => set("adminEmail", v)} type="email" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                <div>
                  <FieldLabel>Corporate Headquarters</FieldLabel>
                  <InputBox value={settings.hq} onChange={(v) => set("hq", v)} />
                </div>
                <div>
                  <FieldLabel>Canonical Domain URL</FieldLabel>
                  <InputBox value={settings.domain} onChange={(v) => set("domain", v)} mono />
                </div>
                <div>
                  <FieldLabel>Priority Support Helpline</FieldLabel>
                  <InputBox value={settings.helpline} onChange={(v) => set("helpline", v)} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                <div>
                  <FieldLabel>Default System Timezone</FieldLabel>
                  <SelectBox value={settings.timezone} options={TIMEZONES} onChange={(v) => set("timezone", v)} />
                </div>
                <div>
                  <FieldLabel>Session Inactivity Timeout</FieldLabel>
                  <SelectBox value={settings.sessionTimeout} options={SESSION_TIMEOUTS} onChange={(v) => set("sessionTimeout", v)} />
                </div>
                <div>
                  <FieldLabel>Max Concurrent Sessions per Admin</FieldLabel>
                  <SelectBox value={settings.maxSessions} options={MAX_SESSIONS} onChange={(v) => set("maxSessions", v)} />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border border-stone-200 rounded-lg px-5 py-4 bg-stone-50">
                <div>
                  <div className="flex items-center gap-2 font-medium text-stone-800">
                    Global Maintenance Mode
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${settings.maintenance ? "bg-amber-100 text-amber-700" : "bg-stone-200 text-stone-600"}`}>
                      {settings.maintenance ? "Enabled (Console Locked)" : "Disabled (Production Active)"}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1 max-w-xl">
                    When enabled, platform console and external API endpoints reject traffic, locking access
                    strictly to verified Super Admins.
                  </p>
                </div>
                <Toggle
                  label="Global maintenance mode"
                  on={settings.maintenance}
                  onClick={() => {
                    const next = !settings.maintenance;
                    set("maintenance", next);
                    toast(next ? "Maintenance mode armed. Save to apply." : "Maintenance mode disarmed.");
                  }}
                />
              </div>
            </div>
            )}

            {/* Section 02 */}
            {show("Security & 2FA") && (
            <div ref={refs["Security & 2FA"]} className="bg-white rounded-xl border border-stone-200 p-6 scroll-mt-4">
              <SectionHeader
                number="02"
                title="Security, Two-Factor Authentication & Perimeter Control"
                desc="FIDO2/WebAuthn policies, password expiration intervals, and CIDR IP subnet whitelisting"
                badge={
                  <span className="text-xs font-semibold bg-rose-50 px-3 py-1 rounded-full whitespace-nowrap" style={{ color: ACCENT }}>
                    {settings.tfaPolicy === "strict" ? "2FA Enforced" : "2FA Role-Based"}
                  </span>
                }
              />

              <FieldLabel>Two-Factor Authentication (2FA) Platform Policy</FieldLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <button
                  onClick={() => set("tfaPolicy", "strict")}
                  className="text-left rounded-lg border-2 p-4"
                  style={{ borderColor: settings.tfaPolicy === "strict" ? ACCENT : "#e7e5e4" }}
                >
                  <div className="flex items-center gap-2 font-medium text-stone-800 mb-1">
                    <span className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0" style={{ borderColor: settings.tfaPolicy === "strict" ? ACCENT : "#d6d3d1" }}>
                      {settings.tfaPolicy === "strict" && <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />}
                    </span>
                    Strict Enterprise (Mandatory for All Administrators)
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed pl-6">
                    Mandates hardware security keys (FIDO2 / WebAuthn, YubiKey) or TOTP authenticator (Google
                    Authenticator, Microsoft Authenticator) for every console login attempt.
                  </p>
                </button>
                <button
                  onClick={() => set("tfaPolicy", "optional")}
                  className="text-left rounded-lg border-2 p-4"
                  style={{ borderColor: settings.tfaPolicy === "optional" ? ACCENT : "#e7e5e4" }}
                >
                  <div className="flex items-center gap-2 font-medium text-stone-800 mb-1">
                    <span className="w-4 h-4 rounded-full border-2 border-stone-300 flex items-center justify-center shrink-0">
                      {settings.tfaPolicy === "optional" && <span className="w-2 h-2 rounded-full bg-stone-400" />}
                    </span>
                    Optional (Role-Based Tiering)
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed pl-6">
                    Required strictly for Super Admins and Billing Directors; optional for read-only telemetry
                    viewers and auditor accounts.
                  </p>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <FieldLabel>Credential &amp; Password Expiration Interval</FieldLabel>
                  <SelectBox value={settings.passwordExpiry} options={PASSWORD_EXPIRY} onChange={(v) => set("passwordExpiry", v)} />
                  <p className="text-xs text-stone-400 mt-1.5">Enforces previous 5 passwords reuse prevention history.</p>
                </div>
                <div>
                  <FieldLabel>Account Lockout Threshold &amp; Duration</FieldLabel>
                  <SelectBox value={settings.lockout} options={LOCKOUT_RULES} onChange={(v) => set("lockout", v)} />
                  <p className="text-xs text-stone-400 mt-1.5">Triggers automated notification to super admins upon threshold breach.</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-1.5">
                <FieldLabel>Authorized IP CIDR Subnets &amp; Gateway Whitelist</FieldLabel>
                <span className="text-xs font-medium bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {settings.cidrs.length} Active Subnet{settings.cidrs.length === 1 ? "" : "s"}
                </span>
              </div>
              <p className="text-xs text-stone-400 mb-3 -mt-1">
                Only incoming connections originating from these verified IP ranges are permitted into the
                TechTorch platform console.
              </p>
              <div className="border border-stone-200 rounded-lg p-4 bg-stone-50">
                <div className="flex flex-wrap gap-2 mb-3">
                  {settings.cidrs.map((c) => (
                    <span key={c} className="flex items-center gap-2 bg-white border border-stone-200 rounded-md px-3 py-1.5 text-xs font-mono text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {c}
                      <button type="button" aria-label={`Remove ${c}`} onClick={() => removeCidr(c)}>
                        <X size={12} className="text-stone-400 cursor-pointer hover:text-stone-600" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <input
                    value={cidrDraft}
                    onChange={(e) => setCidrDraft(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addCidr()}
                    placeholder="+ Add CIDR subnet (e.g. 192.168.1.0/24 or 49.36.0.0/16)"
                    className="flex-1 min-w-0 bg-transparent text-xs text-stone-600 font-mono placeholder:text-stone-400 focus:outline-none"
                  />
                  <button
                    onClick={addCidr}
                    className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-md whitespace-nowrap"
                    style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
                  >
                    <Plus size={12} /> Add CIDR
                  </button>
                </div>
              </div>
            </div>
            )}

            {/* Section 03 */}
            {show("Notifications & Alerts") && (
            <div ref={refs["Notifications & Alerts"]} className="bg-white rounded-xl border border-stone-200 p-6 scroll-mt-4">
              <SectionHeader
                number="03"
                title="Notifications, Audit Alerts & Incident Dispatch"
                desc="Configure instant alerts, automated SMS triggers, and daily platform health digests"
                badge={
                  Object.values(settings.notif).some(Boolean) ? (
                    <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full whitespace-nowrap">
                      LIVE CHANNELS ACTIVE
                    </span>
                  ) : (
                    <span className="text-xs font-semibold bg-stone-100 text-stone-500 px-3 py-1 rounded-full whitespace-nowrap">
                      ALL CHANNELS MUTED
                    </span>
                  )
                }
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {NOTIFICATIONS.map((n) => {
                  const on = settings.notif[n.key];
                  const footers = {
                    email: <>Dispatches to: <span className="font-medium text-stone-700">{settings.adminEmail}</span></>,
                    changelog: (
                      <span className={`flex items-center gap-1.5 font-medium ${on ? "text-emerald-600" : "text-stone-400"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${on ? "bg-emerald-500" : "bg-stone-300"}`} /> Retention: 365 Days Rolling
                      </span>
                    ),
                    digest: <>Scheduled time: <span className="font-medium text-stone-700">08:00 IST (Daily)</span></>,
                    sms: <>Recipient: <span className="font-medium text-stone-700">{settings.helpline} (Verified)</span></>,
                  };
                  return (
                    <div key={n.key} className="border border-stone-200 rounded-lg p-4">
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <div className="font-medium text-stone-800">{n.title}</div>
                        <Toggle
                          label={n.title}
                          on={on}
                          onClick={() => {
                            setSettings((s) => ({ ...s, notif: { ...s.notif, [n.key]: !s.notif[n.key] } }));
                            toast(`${n.title} ${on ? "turned off" : "turned on"}.`);
                          }}
                        />
                      </div>
                      <p className="text-xs text-stone-500 leading-relaxed mb-2">{n.desc}</p>
                      <div className="text-xs text-stone-400 font-mono">{footers[n.key]}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            )}

            {/* Section 04 */}
            {show("Database & Maintenance") && (
            <div ref={refs["Database & Maintenance"]} className="bg-white rounded-xl border border-stone-200 p-6 scroll-mt-4">
              <SectionHeader
                number="04"
                title="Database Cluster, Cache & Storage Maintenance"
                desc="PostgreSQL storage metrics, automated AWS S3 snapshots, and Redis cache purging"
                badge={
                  <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full whitespace-nowrap">
                    CLUSTER 100% HEALTHY
                  </span>
                }
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-stone-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wide text-stone-500">AUTOMATED BACKUP VAULT</span>
                    <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">ACTIVE</span>
                  </div>
                  <div className="space-y-2 text-xs text-stone-500 mb-4">
                    <div className="flex justify-between gap-2"><span>Last Automated Snapshot</span><span className="font-medium text-stone-800 text-right">{lastSnapshot}</span></div>
                    <div className="flex justify-between gap-2"><span>Cloud Vault Bucket</span><span className="font-medium text-stone-800 text-right font-mono">s3://techtorch-backups-ap-south-1</span></div>
                    <div className="flex justify-between gap-2"><span>Retention Policy</span><span className="font-medium text-stone-800 text-right">30 Days Rolling (Daily)</span></div>
                  </div>
                  <button
                    onClick={runBackup}
                    disabled={busy.backup}
                    className="w-full flex items-center justify-center gap-1.5 text-sm font-medium text-white py-2.5 rounded-md disabled:opacity-70"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <UploadCloud size={14} className={busy.backup ? "animate-pulse" : ""} />
                    {busy.backup ? "Backing up…" : "Initiate Manual Backup Now"}
                  </button>
                </div>

                <div className="border border-stone-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wide text-stone-500">REDIS CACHE SUBSYSTEM</span>
                    <span className="text-xs font-semibold text-emerald-600 font-mono">99.9% Hit Rate</span>
                  </div>
                  <div className="space-y-2 text-xs text-stone-500 mb-4">
                    <div className="flex justify-between gap-2"><span>Cluster Nodes</span><span className="font-medium text-stone-800 text-right">3 Primaries + 3 Replicas</span></div>
                    <div className="flex justify-between gap-2"><span>Memory Allocation</span><span className="font-medium text-stone-800 text-right">{cacheMb} MB / 2,048 MB ({((cacheMb / 2048) * 100).toFixed(1)}%)</span></div>
                    <div className="flex justify-between gap-2"><span>Connected Admin Clients</span><span className="font-medium text-stone-800 text-right">18 Connected</span></div>
                  </div>
                  <button
                    onClick={purgeCache}
                    disabled={busy.cache}
                    className="w-full flex items-center justify-center gap-1.5 text-sm font-medium border rounded-md py-2.5 disabled:opacity-70"
                    style={{ color: ACCENT, borderColor: `${ACCENT}55` }}
                  >
                    <Trash2 size={14} /> {busy.cache ? "Purging…" : "Purge Edge & System Cache"}
                  </button>
                </div>

                <div className="border border-stone-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wide text-stone-500">POSTGRESQL 16.2 ENTERPRISE</span>
                    <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">ap-south-1a</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                    <span>Storage Capacity</span>
                    <span className="font-semibold text-stone-800">{dbUsedGb} GB / 250 GB</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden mb-2">
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${dbPct}%`, backgroundColor: ACCENT }} />
                  </div>
                  <div className="flex justify-between text-xs text-stone-400 mb-4">
                    <span>{dbPct}% Utilized</span>
                    <span>{(250 - dbUsedGb).toFixed(1)} GB Available</span>
                  </div>
                  <button
                    onClick={vacuumDb}
                    disabled={busy.vacuum}
                    className="w-full flex items-center justify-center gap-1.5 text-sm font-medium border border-stone-200 rounded-md py-2.5 text-stone-600 hover:bg-stone-50 disabled:opacity-70"
                  >
                    <Database size={14} /> {busy.vacuum ? "Vacuuming…" : "Analyze & Vacuum Database"}
                  </button>
                </div>
              </div>
            </div>
            )}

            {/* Section 05 */}
            {show("Webhooks & Audit Logs") && (
            <div ref={refs["Webhooks & Audit Logs"]} className="bg-white rounded-xl border border-stone-200 p-6 scroll-mt-4">
              <SectionHeader
                number="05"
                title="Webhooks & Real-Time Audit Log Console"
                desc="Outbound event streaming and immutable audit trail logs for compliance review"
                badge={
                  <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full whitespace-nowrap">
                    Stream Active
                  </span>
                }
              />

              <div className="border border-stone-200 rounded-lg p-4 mb-6 bg-stone-50">
                <div className="font-medium text-stone-800 text-sm mb-1">OUTBOUND AUDIT STREAM WEBHOOK</div>
                <p className="text-xs text-stone-500 mb-4">
                  Every administrative event is encrypted with HMAC-SHA256 and pushed to your security SIEM endpoint.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="min-w-0">
                    <FieldLabel>Destination Webhook Endpoint URL</FieldLabel>
                    <InputBox value={settings.webhookUrl} onChange={(v) => set("webhookUrl", v)} mono />
                  </div>
                  <div className="min-w-0">
                    <FieldLabel>Webhook HMAC Secret Signature</FieldLabel>
                    <div className="flex gap-2">
                      <div className="flex-1 min-w-0 border border-stone-200 rounded-md px-3.5 py-2.5 text-sm bg-white font-mono truncate">
                        {settings.webhookSecret}
                      </div>
                      <button
                        onClick={rotateSecret}
                        className="flex items-center gap-1 text-sm font-medium border border-stone-200 rounded-md px-3 whitespace-nowrap text-stone-600 hover:bg-stone-50 shrink-0"
                      >
                        <RefreshCw size={13} /> Rotate
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm">
                    <span className="font-medium text-stone-700">Subscribed Events:</span>
                    {Object.keys(settings.subscribed).map((k) => (
                      <label key={k} className="flex items-center gap-1.5 text-stone-600 font-mono text-xs cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.subscribed[k]}
                          onChange={() =>
                            setSettings((s) => ({ ...s, subscribed: { ...s.subscribed, [k]: !s.subscribed[k] } }))
                          }
                          style={{ accentColor: ACCENT }}
                        />
                        {k}.*
                      </label>
                    ))}
                  </div>
                  <button
                    onClick={sendPing}
                    disabled={busy.ping}
                    className="flex items-center justify-center gap-1.5 text-sm font-medium px-3 py-2 rounded-md whitespace-nowrap w-full sm:w-auto disabled:opacity-70"
                    style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
                  >
                    <Zap size={14} /> {busy.ping ? "Sending…" : "Send Test Ping Payload"}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-medium text-stone-800 text-sm">LIVE SYSTEM AUDIT TRAIL (LAST 24 HOURS)</div>
                  <p className="text-xs text-stone-400">Chronological feed of administrative governance modifications</p>
                </div>
                <span className="text-xs text-stone-400 font-mono">Total recorded events: {totalEvents.toLocaleString("en-IN")}</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[720px]">
                  <thead>
                    <tr className="text-left text-[11px] text-stone-400 tracking-wide border-b border-stone-100">
                      <th className="pb-2 font-semibold">TIMESTAMP (IST)</th>
                      <th className="pb-2 font-semibold">ACTOR / ADMIN</th>
                      <th className="pb-2 font-semibold">ACTION PERFORMED</th>
                      <th className="pb-2 font-semibold">TARGET RESOURCE</th>
                      <th className="pb-2 font-semibold">ORIGIN IP</th>
                      <th className="pb-2 font-semibold text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditRows.map((r) => (
                      <tr key={r.id} className="border-b border-stone-50 align-top">
                        <td className="py-3 pr-4 font-mono text-xs text-stone-500 whitespace-nowrap">{r.time}</td>
                        <td className="py-3 pr-4 font-mono text-xs text-stone-700">{r.actor}</td>
                        <td className="py-3 pr-4 text-stone-700 font-medium">{r.action}</td>
                        <td className="py-3 pr-4 font-mono text-xs text-stone-500">{r.target}</td>
                        <td className="py-3 pr-4 font-mono text-xs text-stone-500">{r.ip}</td>
                        <td className="py-3 text-right">
                          <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full">
                            SUCCESS {r.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            )}
          </main>
        </div>

        {/* Toasts */}
        <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 items-end">
          {toasts.map((t) => (
            <div
              key={t.id}
              className={`flex items-center gap-2 text-sm px-4 py-2.5 rounded-md shadow-lg border bg-white max-w-xs ${
                t.tone === "warn" ? "border-amber-200 text-amber-700" : "border-stone-200 text-stone-700"
              }`}
            >
              {t.tone === "warn" ? <X size={14} className="shrink-0" /> : <Check size={14} className="shrink-0" style={{ color: ACCENT }} />}
              {t.msg}
            </div>
          ))}
        </div>
    </div>
  );
}
