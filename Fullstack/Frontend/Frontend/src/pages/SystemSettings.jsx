import { useState } from "react";
import {
  Search, Bell, RotateCcw, ClipboardList, X, ChevronDown, ChevronRight, Check,
  Plus, UploadCloud, Trash2, Database, Zap, RefreshCw,
} from "lucide-react";

const ACCENT = "#780042";
const FONT = "Inter,sans-serif";


const TABS = ["General & Profile", "Security & 2FA", "Notifications & Alerts", "Database & Maintenance", "Webhooks & Audit Logs"];

const CIDR_LIST = [
  "103.21.144.0/22 (Noida HQ Corporate Fiber)",
  "10.14.0.0/16 (Global Corporate WireGuard VPN)",
];

const NOTIFICATIONS = [
  {
    title: "Immediate Security Email Alerts",
    desc: "Instant dispatch on failed administrative login spikes, MFA bypass attempts, or unauthorized privilege escalation.",
    footer: <>Dispatches to: <span className="font-medium text-stone-700">admin@techtorch.solutions</span></>,
  },
  {
    title: "System Changelog & Mutation Tracking",
    desc: "Maintains an immutable tamper-evident record of all security policies, API keys, and console configuration mutations.",
    footer: <span className="flex items-center gap-1.5 text-emerald-600 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Retention: 365 Days Rolling</span>,
  },
  {
    title: "Daily Operational Digest & Health Report",
    desc: "Aggregated platform overview covering active sessions, DB latency, backup statuses, and cache statistics every morning.",
    footer: <>Scheduled time: <span className="font-medium text-stone-700">08:00 IST (Daily)</span></>,
  },
  {
    title: "Critical Outage SMS Alerts (Super Admin)",
    desc: "Immediate SMS gateway notification sent when database cluster failover occurs or node CPU exceeds 95% threshold.",
    footer: <>Recipient: <span className="font-medium text-stone-700">+91 99102 44778 (Verified)</span></>,
  },
];

const AUDIT_ROWS = [
  { time: "Today, 11:24:08", actor: "admin@techtorch.solutions", action: "Update Policy (2FA enforcement: Strict)", target: "/api/v1/auth/policy", ip: "103.21.144.18", status: "200" },
  { time: "Today, 09:12:44", actor: "sec-ops@techtorch.solutions", action: "Add CIDR Whitelist (Corporate VPN)", target: "/network/firewall/rules", ip: "10.14.0.2", status: "201" },
  { time: "Today, 04:00:00", actor: "system.automation@internal", action: "Automated Vacuum (Database indexes)", target: "pg_cluster_primary", ip: "127.0.0.1 (Loopback)", status: "200" },
  { time: "Today, 02:00:14", actor: "backup.daemon@aws", action: "S3 Snapshot Created (Full backup)", target: "s3://techtorch-backups", ip: "172.31.22.90", status: "200" },
];


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

function Toggle({ on, onClick }) {
  return (
    <button
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

function InputBox({ value, mono }) {
  return (
    <div className={`w-full min-w-0 break-all border border-stone-200 rounded-md px-3.5 py-2.5 text-sm bg-white ${mono ? "font-mono" : ""}`}>
      {value}
    </div>
  );
}

function SelectBox({ value }) {
  return (
    <button className="w-full flex items-center justify-between border border-stone-200 rounded-md px-3.5 py-2.5 text-sm bg-white text-left">
      {value} <ChevronDown size={14} className="text-stone-400 shrink-0" />
    </button>
  );
}

export default function SystemSettingsConsole() {
  const [tab, setTab] = useState("General & Profile");
  const [maintenance, setMaintenance] = useState(false);
  const [tfaPolicy, setTfaPolicy] = useState("strict");
  const [notifToggles, setNotifToggles] = useState([true, true, true, true]);
  const [subscribed, setSubscribed] = useState({ auth: true, settings: true, deployment: true, cluster: true });

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{ fontFamily: FONT }}>

        {/* Main column */}
        <div className="min-h-screen">
          {/* Top bar */}
          <header className="flex items-center gap-4 px-4 sm:px-6 py-3 border-b border-stone-200 bg-white flex-wrap">
            <div className="flex-1 max-w-xl relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                placeholder="Search system settings, keys, audit policies, telemetry..."
                className="w-full pl-9 pr-3 py-2 rounded-md bg-stone-50 border border-stone-200 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="ml-auto flex items-center gap-4">

  {/* Green Active Status */}
  <span className="hidden md:flex items-center gap-1.5 text-xs font-medium text-emerald-600 whitespace-nowrap">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
    AP-SOUTH-1 (MUMBAI) • ACTIVE
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

  {/* Refresh */}
  <button
    type="button"
    aria-label="Refresh"
    className="text-stone-400 hover:text-stone-600"
  >
    <RotateCcw size={17} />
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
                <button className="flex items-center gap-1.5 text-sm px-3 py-2.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 bg-white">
                  <ClipboardList size={14} /> Audit Logs
                </button>
                <button className="flex items-center gap-1.5 text-sm px-3 py-2.5 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50 bg-white">
                  <X size={14} /> Discard Changes
                </button>
                <button className="flex items-center gap-1.5 text-sm px-3 py-2.5 rounded-md text-white" style={{ backgroundColor: ACCENT }}>
                  <Check size={14} /> Save All Settings
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-stone-200 overflow-x-auto">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
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

            {/* Section 01 */}
            <div className="bg-white rounded-xl border border-stone-200 p-6">
              <SectionHeader
                number="01"
                title="General Platform & Organization Profile"
                desc="Corporate identifiers, headquarters contacts, active timezone, and console session parameters"
                badge={
                  <span className="flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Operational
                  </span>
                }
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                <div>
                  <FieldLabel>Platform / Organization Legal Name</FieldLabel>
                  <InputBox value="TechTorch Solutions Private Limited" />
                </div>
                <div>
                  <FieldLabel>Enterprise Organization ID</FieldLabel>
                  <InputBox value="TTS-GLOBAL-01" mono />
                </div>
                <div>
                  <FieldLabel>Primary Super Admin Email</FieldLabel>
                  <InputBox value="admin@techtorch.solutions" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                <div>
                  <FieldLabel>Corporate Headquarters</FieldLabel>
                  <InputBox value="Sector 62, Noida, Delhi NCR • India (Pin: 201309)" />
                </div>
                <div>
                  <FieldLabel>Canonical Domain URL</FieldLabel>
                  <InputBox value="https://techtorch.solutions" mono />
                </div>
                <div>
                  <FieldLabel>Priority Support Helpline</FieldLabel>
                  <InputBox value="+91 99102 44778" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                <div>
                  <FieldLabel>Default System Timezone</FieldLabel>
                  <SelectBox value="(GMT+05:30) Asia/Kolkata (IST)" />
                </div>
                <div>
                  <FieldLabel>Session Inactivity Timeout</FieldLabel>
                  <SelectBox value="15 Minutes (Strict Enterprise Compliance)" />
                </div>
                <div>
                  <FieldLabel>Max Concurrent Sessions per Admin</FieldLabel>
                  <SelectBox value="3 Concurrent Active Sessions (Recommended)" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border border-stone-200 rounded-lg px-5 py-4 bg-stone-50">
                <div>
                  <div className="flex items-center gap-2 font-medium text-stone-800">
                    Global Maintenance Mode
                    <span className="text-[10px] bg-stone-200 text-stone-600 px-2 py-0.5 rounded-full font-semibold">
                      Disabled (Production Active)
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1 max-w-xl">
                    When enabled, platform console and external API endpoints reject traffic, locking access
                    strictly to verified Super Admins.
                  </p>
                </div>
                <Toggle on={maintenance} onClick={() => setMaintenance(!maintenance)} />
              </div>
            </div>

            {/* Section 02 */}
            <div className="bg-white rounded-xl border border-stone-200 p-6">
              <SectionHeader
                number="02"
                title="Security, Two-Factor Authentication & Perimeter Control"
                desc="FIDO2/WebAuthn policies, password expiration intervals, and CIDR IP subnet whitelisting"
                badge={
                  <span className="text-xs font-semibold bg-rose-50 px-3 py-1 rounded-full whitespace-nowrap" style={{ color: ACCENT }}>
                    2FA Enforced
                  </span>
                }
              />

              <FieldLabel>Two-Factor Authentication (2FA) Platform Policy</FieldLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <button
                  onClick={() => setTfaPolicy("strict")}
                  className="text-left rounded-lg border-2 p-4"
                  style={{ borderColor: tfaPolicy === "strict" ? ACCENT : "#e7e5e4" }}
                >
                  <div className="flex items-center gap-2 font-medium text-stone-800 mb-1">
                    <span className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0" style={{ borderColor: ACCENT }}>
                      {tfaPolicy === "strict" && <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />}
                    </span>
                    Strict Enterprise (Mandatory for All Administrators)
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed pl-6">
                    Mandates hardware security keys (FIDO2 / WebAuthn, YubiKey) or TOTP authenticator (Google
                    Authenticator, Microsoft Authenticator) for every console login attempt.
                  </p>
                </button>
                <button
                  onClick={() => setTfaPolicy("optional")}
                  className="text-left rounded-lg border-2 p-4"
                  style={{ borderColor: tfaPolicy === "optional" ? ACCENT : "#e7e5e4" }}
                >
                  <div className="flex items-center gap-2 font-medium text-stone-800 mb-1">
                    <span className="w-4 h-4 rounded-full border-2 border-stone-300 flex items-center justify-center shrink-0">
                      {tfaPolicy === "optional" && <span className="w-2 h-2 rounded-full bg-stone-400" />}
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
                  <SelectBox value="Every 90 Days (ISO/IEC 27001 Recommended)" />
                  <p className="text-xs text-stone-400 mt-1.5">Enforces previous 5 passwords reuse prevention history.</p>
                </div>
                <div>
                  <FieldLabel>Account Lockout Threshold &amp; Duration</FieldLabel>
                  <SelectBox value="5 Failed Attempts (30-Minute Cooldown & Alert)" />
                  <p className="text-xs text-stone-400 mt-1.5">Triggers automated notification to super admins upon threshold breach.</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-1.5">
                <FieldLabel>Authorized IP CIDR Subnets &amp; Gateway Whitelist</FieldLabel>
                <span className="text-xs font-medium bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full whitespace-nowrap">
                  2 Active Subnets
                </span>
              </div>
              <p className="text-xs text-stone-400 mb-3 -mt-1">
                Only incoming connections originating from these verified IP ranges are permitted into the
                TechTorch platform console.
              </p>
              <div className="border border-stone-200 rounded-lg p-4 bg-stone-50">
                <div className="flex flex-wrap gap-2 mb-3">
                  {CIDR_LIST.map((c) => (
                    <span key={c} className="flex items-center gap-2 bg-white border border-stone-200 rounded-md px-3 py-1.5 text-xs font-mono text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {c}
                      <X size={12} className="text-stone-400 cursor-pointer hover:text-stone-600" />
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-stone-400 font-mono">+ Add CIDR subnet (e.g. 192.168.1.0/24 or 49.36.0.0/16)</span>
                  <button className="text-xs font-medium px-3 py-1.5 rounded-md whitespace-nowrap" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>
                    Add CIDR
                  </button>
                </div>
              </div>
            </div>

            {/* Section 03 */}
            <div className="bg-white rounded-xl border border-stone-200 p-6">
              <SectionHeader
                number="03"
                title="Notifications, Audit Alerts & Incident Dispatch"
                desc="Configure instant alerts, automated SMS triggers, and daily platform health digests"
                badge={
                  <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full whitespace-nowrap">
                    LIVE CHANNELS ACTIVE
                  </span>
                }
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {NOTIFICATIONS.map((n, i) => (
                  <div key={n.title} className="border border-stone-200 rounded-lg p-4">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="font-medium text-stone-800">{n.title}</div>
                      <Toggle
                        on={notifToggles[i]}
                        onClick={() => setNotifToggles((prev) => prev.map((v, idx) => (idx === i ? !v : v)))}
                      />
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed mb-2">{n.desc}</p>
                    <div className="text-xs text-stone-400 font-mono">{n.footer}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 04 */}
            <div className="bg-white rounded-xl border border-stone-200 p-6">
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
                    <div className="flex justify-between gap-2"><span>Last Automated Snapshot</span><span className="font-medium text-stone-800 text-right">Today, 02:00:14 IST</span></div>
                    <div className="flex justify-between gap-2"><span>Cloud Vault Bucket</span><span className="font-medium text-stone-800 text-right font-mono">s3://techtorch-backups-ap-south-1</span></div>
                    <div className="flex justify-between gap-2"><span>Retention Policy</span><span className="font-medium text-stone-800 text-right">30 Days Rolling (Daily)</span></div>
                  </div>
                  <button className="w-full flex items-center justify-center gap-1.5 text-sm font-medium text-white py-2.5 rounded-md" style={{ backgroundColor: ACCENT }}>
                    <UploadCloud size={14} /> Initiate Manual Backup Now
                  </button>
                </div>

                <div className="border border-stone-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wide text-stone-500">REDIS CACHE SUBSYSTEM</span>
                    <span className="text-xs font-semibold text-emerald-600 font-mono">99.9% Hit Rate</span>
                  </div>
                  <div className="space-y-2 text-xs text-stone-500 mb-4">
                    <div className="flex justify-between gap-2"><span>Cluster Nodes</span><span className="font-medium text-stone-800 text-right">3 Primaries + 3 Replicas</span></div>
                    <div className="flex justify-between gap-2"><span>Memory Allocation</span><span className="font-medium text-stone-800 text-right">248 MB / 2,048 MB (12.1%)</span></div>
                    <div className="flex justify-between gap-2"><span>Connected Admin Clients</span><span className="font-medium text-stone-800 text-right">18 Connected</span></div>
                  </div>
                  <button className="w-full flex items-center justify-center gap-1.5 text-sm font-medium border rounded-md py-2.5" style={{ color: ACCENT, borderColor: `${ACCENT}55` }}>
                    <Trash2 size={14} /> Purge Edge &amp; System Cache
                  </button>
                </div>

                <div className="border border-stone-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wide text-stone-500">POSTGRESQL 16.2 ENTERPRISE</span>
                    <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">ap-south-1a</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                    <span>Storage Capacity</span>
                    <span className="font-semibold text-stone-800">42.8 GB / 250 GB</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden mb-2">
                    <div className="h-full rounded-full" style={{ width: "17%", backgroundColor: ACCENT }} />
                  </div>
                  <div className="flex justify-between text-xs text-stone-400 mb-4">
                    <span>17.1% Utilized</span>
                    <span>207.2 GB Available</span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-1.5 text-sm font-medium border border-stone-200 rounded-md py-2.5 text-stone-600 hover:bg-stone-50">
                    <Database size={14} /> Analyze &amp; Vacuum Database
                  </button>
                </div>
              </div>
            </div>

            {/* Section 05 */}
            <div className="bg-white rounded-xl border border-stone-200 p-6">
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
                    <InputBox value="https://api.techtorch.solutions/v1/audit/stream" mono />
                  </div>
                  <div className="min-w-0">
                    <FieldLabel>Webhook HMAC Secret Signature</FieldLabel>
                    <div className="flex gap-2">
                      <div className="flex-1 min-w-0 border border-stone-200 rounded-md px-3.5 py-2.5 text-sm bg-white font-mono truncate">
                        tts_sec_991823abf10928cd981
                      </div>
                      <button className="flex items-center gap-1 text-sm font-medium border border-stone-200 rounded-md px-3 whitespace-nowrap text-stone-600 hover:bg-stone-50 shrink-0">
                        <RefreshCw size={13} /> Rotate
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm">
                    <span className="font-medium text-stone-700">Subscribed Events:</span>
                    {Object.keys(subscribed).map((k) => (
                      <label key={k} className="flex items-center gap-1.5 text-stone-600 font-mono text-xs">
                        <input
                          type="checkbox"
                          checked={subscribed[k]}
                          onChange={() => setSubscribed((s) => ({ ...s, [k]: !s[k] }))}
                          style={{ accentColor: ACCENT }}
                        />
                        {k}.*
                      </label>
                    ))}
                  </div>
                  <button className="flex items-center justify-center gap-1.5 text-sm font-medium px-3 py-2 rounded-md whitespace-nowrap w-full sm:w-auto" style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}>
                    <Zap size={14} /> Send Test Ping Payload
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-medium text-stone-800 text-sm">LIVE SYSTEM AUDIT TRAIL (LAST 24 HOURS)</div>
                  <p className="text-xs text-stone-400">Chronological feed of administrative governance modifications</p>
                </div>
                <span className="text-xs text-stone-400 font-mono">Total recorded events: 4,821</span>
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
                    {AUDIT_ROWS.map((r) => (
                      <tr key={r.time + r.actor} className="border-b border-stone-50 align-top">
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
          </main>
        </div>
    </div>
  );
}
