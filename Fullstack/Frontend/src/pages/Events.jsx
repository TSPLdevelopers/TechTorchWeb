import { useState } from "react";

import {
  Plus, Calendar, Clock, MapPin, CircleCheck, Share2, Rocket, Sparkles,
  ClipboardList, Eye, Pencil, SlidersHorizontal, MonitorPlay, FileText,
} from "lucide-react";


const ACCENT = "#780042";
const FONT = "Inter,sans-serif";




const FORMATS = ["Hybrid", "In-Person", "Virtual"];

const CAPACITY_TIERS = [
  { label: "Internal Teams / Engineers", tag: "Staff", tagStyle: "bg-rose-50 text-rose-500", value: 150, note: "Invited Quota • Internal" },
  { label: "Enterprise Clients", tag: "Executive", tagStyle: "bg-stone-100 text-stone-500", value: 350, note: "Invited Quota • Partner Tier" },
  { label: "Virtual Broadcasters", tag: "Remote", tagStyle: "bg-emerald-50 text-emerald-600", value: 250, note: "Global Streaming Seats" },
];

export default function AddEventStudio() {
  const [format, setFormat] = useState("Hybrid");

  return (
    <div
      className="min-h-screen bg-stone-50 text-stone-900"
      style={{ fontFamily: FONT }}
    >
      {/* Main Content */}
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
                <CircleCheck size={13} /> VALIDATED MODE
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-stone-700">Event Title &amp; Primary Anchor</label>
                <span className="text-xs text-stone-400">Required</span>
              </div>
              <div className="border border-stone-200 rounded-lg px-4 py-3 text-sm bg-stone-50">
                Global Enterprise AI &amp; Autonomous Systems Summit 2026
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-stone-700 mb-1.5 block">Date Timeline</label>
                <div className="flex items-center gap-2 border border-stone-200 rounded-lg px-4 py-3 text-sm bg-stone-50">
                  <Calendar size={15} className="text-stone-400" /> November 14 – 16, 2026
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-stone-700 mb-1.5 block">Session Timing &amp; Timezone</label>
                <div className="flex items-center gap-2 border border-stone-200 rounded-lg px-4 py-3 text-sm bg-stone-50">
                  <Clock size={15} className="text-stone-400" /> 09:00 AM – 05:30 PM PST (UTC-8)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-stone-700 mb-1.5 block">Physical Venue / Campus</label>
                <div className="flex items-center gap-2 border border-stone-200 rounded-lg px-4 py-3 text-sm bg-stone-50">
                  <MapPin size={15} className="text-stone-400" /> TechTorch Innovation Center, San Francisco, CA
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-stone-700 mb-1.5 block">Event Format &amp; Delivery</label>
                <div className="flex gap-2">
                  {FORMATS.map((f) => {
                    const active = format === f;
                    return (
                      <button
                        key={f}
                        onClick={() => setFormat(f)}
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
                <span className="text-xs bg-stone-100 text-stone-500 px-2.5 py-1 rounded-md font-medium">Total: 750 Passes</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CAPACITY_TIERS.map((t) => (
                  <div key={t.label} className="border border-stone-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-stone-700">{t.label}</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${t.tagStyle}`}>{t.tag}</span>
                    </div>
                    <div className="text-2xl font-semibold text-stone-900">{t.value}</div>
                    <div className="text-xs text-stone-400 mt-1">{t.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-stone-700 mb-1.5 block">Short Summary &amp; Briefing Synopsis</label>
              <div className="border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-600 leading-relaxed bg-stone-50">
                Convening 500+ Fortune 500 CIOs, enterprise architects, and engineering leaders to explore
                agentic workflows, autonomous data fabrics, and institutional algorithmic governance.
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-100 flex-wrap gap-3">
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <span className="text-emerald-500">☁</span> Autosaved 2 minutes ago to cloud directory
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2.5 rounded-lg text-sm font-medium bg-stone-100 text-stone-600 hover:bg-stone-200">
                  Save Draft
                </button>
                <button
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
  {/* Image */}
  <div className="h-40 overflow-hidden">
    <img
      src="/event-hall-image.png"
      alt="TechTorch Enterprise Event"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Event Info */}
  <div className="p-4 space-y-3">
    <div className="flex items-center justify-between gap-2">
      <span
        className="text-[10px] font-semibold"
        style={{ color: ACCENT }}
      >
        FLAGSHIP HYBRID PLENARY
      </span>

      <span className="text-stone-400 text-xs">
        3 Days
      </span>
    </div>

    <div className="flex items-center justify-between gap-2">
      <span className="text-xs text-stone-500">
        Nov 14-16, 2026
      </span>

      <span
        className="text-white text-[10px] font-medium px-2.5 py-1 rounded"
        style={{ backgroundColor: ACCENT }}
      >
        San Francisco, CA
      </span>
    </div>

    <h3 className="font-semibold text-stone-900 leading-snug">
      Global Enterprise AI & Autonomous Systems Summit 2026
    </h3>

    <p className="text-sm text-stone-500 leading-relaxed">
      Convening 500+ Fortune 500 CIOs and enterprise architects to explore...
    </p>

    <div>
      <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
        <span>Capacity Registered</span>
        <span className="font-medium text-stone-700">
          92 / 750 (12%)
        </span>
      </div>

      <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: "12%",
            backgroundColor: ACCENT,
          }}
        />
      </div>
    </div>

    <div className="flex items-center gap-2 pt-1">
      <button
        className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium text-white py-2.5 rounded-lg"
        style={{ backgroundColor: ACCENT }}
      >
        <Sparkles size={14} />
        Launch Event Hub
      </button>

      <button className="w-10 h-10 flex items-center justify-center border border-stone-200 rounded-lg text-stone-500 hover:bg-stone-50">
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
            <div className="flex items-center gap-3 bg-white border border-stone-200 rounded-lg px-4 py-2.5">
              <SlidersHorizontal size={15} style={{ color: ACCENT }} />
              <span className="text-sm font-medium text-stone-700">Side-by-Side Comparison</span>
              <span className="text-xs text-stone-400 border-l border-stone-200 pl-3">1 Active · 1 Past Archive</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upcoming event */}
            <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-semibold text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: ACCENT }}>
                  UPCOMING &amp; ACTIVE
                </span>
                <span className="text-[10px] font-semibold bg-rose-50 text-rose-500 px-2.5 py-1 rounded-full">
                  FLAGSHIP PLENARY
                </span>
                <span className="flex items-center gap-1 text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Hybrid Mode
                </span>
                <span className="flex items-center gap-1 text-[10px] font-semibold border border-stone-200 text-stone-500 px-2.5 py-1 rounded-full">
                  <CircleCheck size={11} /> Confirmed
                </span>
              </div>

              <h3 className="text-xl font-semibold text-stone-900">Global Enterprise AI &amp; Autonomous Systems Summit 2026</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Pioneering autonomous data fabrics, quantum vector algorithms, and institutional algorithmic
                governance with 500+ C-suite leaders.
              </p>

              <div className="flex items-center gap-6 text-sm text-stone-600">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-stone-400" /> Nov 14 – 16, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-stone-400" /> TechTorch Center, San Francisco
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                  <span>Allocated Capacity (Tier Quotas)</span>
                  <span className="font-medium text-stone-700">578 / 750 (77%)</span>
                </div>
                <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "77%", backgroundColor: ACCENT }} />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button className="flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-lg px-3.5 py-2 text-stone-600 hover:bg-stone-50">
                  <Eye size={14} /> View Details
                </button>
                <button className="flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-lg px-3.5 py-2 text-stone-600 hover:bg-stone-50">
                  <Pencil size={14} /> Edit
                </button>
                <button
                  className="flex items-center gap-1.5 text-sm font-medium rounded-lg px-3.5 py-2 text-white ml-auto"
                  style={{ backgroundColor: ACCENT }}
                >
                  <SlidersHorizontal size={14} /> Manage Event
                </button>
              </div>
            </div>

            {/* Past event */}
            <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-semibold bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full">
                  RECENT &amp; PAST
                </span>
                <span className="text-[10px] font-semibold bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full">
                  EXECUTIVE SUMMIT
                </span>
                <span className="ml-auto text-[10px] font-semibold bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full">
                  🔒 100% Sold Out
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold border border-stone-200 text-stone-500 px-2.5 py-1 rounded-full">
                <CircleCheck size={11} /> Concluded · Completed
              </span>

              <h3 className="text-xl font-semibold text-stone-900">European Enterprise Cyber Sovereignty Summit 2025</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Three days of closed-door executive workshops in London on decentralized data sovereignty and
                NIS2 compliance frameworks.
              </p>

              <div className="flex items-center gap-6 text-sm text-stone-600">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-stone-400" /> Oct 08 – 10, 2025
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-stone-400" /> London, UK (Chatham House)
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                  <span>Final Attendance (Verified Quota)</span>
                  <span className="font-medium text-stone-700">420 / 420 Attendees</span>
                </div>
                <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-stone-400" style={{ width: "100%" }} />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button className="flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-lg px-3.5 py-2 text-stone-600 hover:bg-stone-50">
                  <MonitorPlay size={14} /> Watch Keynote VOD
                </button>
                <button className="flex items-center gap-1.5 text-sm font-medium border border-stone-200 rounded-lg px-3.5 py-2 text-stone-600 hover:bg-stone-50">
                  <FileText size={14} /> Briefing Report
                </button>
                <span className="ml-auto text-xs font-semibold bg-stone-100 text-stone-400 px-3 py-2 rounded-lg">
                  ARCHIVED
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Close the main 3-column grid */}
        
      </main>
      </div>
    </div>
  );
}

