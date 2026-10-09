import React from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Calendar,
  FileText,
  FolderOpen,
  Megaphone,
  Download,
  Users,
} from "lucide-react";
import logo from "../../../public/logo.png";

import { useList } from "../hooks/useResource";
import { useProfile } from "../hooks/useAuth";
import { PageLoader, StatusBadge } from "../components/ui";
import { formatDate, formatNumber } from "../utils/india";

const isLive = (r) =>
  ["Published", "published", "Active / Open", "upcoming"].includes(r.status);

export default function Overview() {
  const { data: me } = useProfile();

  // Greeting according to current time
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const news = useList("news");
  const jobs = useList("jobs");
  const events = useList("events");
  const wps = useList("whitepapers");
  const updates = useList("updates");

  const all = [news, jobs, events, wps, updates];

  if (all.some((q) => q.isLoading)) {
    return <PageLoader />;
  }

  const n = news.data || [];
  const j = jobs.data || [];
  const e = events.data || [];
  const w = wps.data || [];
  const u = updates.data || [];

  const cards = [
    {
      label: "News & Insights",
      icon: FileText,
      to: "/news-insights",
      total: n.length,
      live: n.filter(isLive).length,
    },
    {
      label: "Job Openings",
      icon: Briefcase,
      to: "/job-openings",
      total: j.length,
      live: j.filter(isLive).length,
    },
    {
      label: "Events",
      icon: Calendar,
      to: "/events",
      total: e.length,
      live: e.filter(isLive).length,
    },
    {
      label: "Whitepapers",
      icon: FolderOpen,
      to: "/whitepapers",
      total: w.length,
      live: w.filter(isLive).length,
    },
    {
      label: "Latest Updates",
      icon: Megaphone,
      to: "/latest-updates",
      total: u.length,
      live: u.filter(isLive).length,
    },
  ];

  const applicants = j.reduce(
    (s, x) => s + (x.applicants || 0),
    0
  );

  const downloads = w.reduce(
    (s, x) => s + (x.downloads || 0),
    0
  );

  const recent = [
    ...n.map((x) => ({ ...x, type: "News" })),
    ...j.map((x) => ({ ...x, type: "Job" })),
    ...e.map((x) => ({ ...x, type: "Event" })),
    ...w.map((x) => ({ ...x, type: "Whitepaper" })),
    ...u.map((x) => ({ ...x, type: "Update" })),
  ]
    .sort(
      (a, b) =>
        new Date(b.updatedAt || b.createdAt) -
        new Date(a.updatedAt || a.createdAt)
    )
    .slice(0, 8);

  return (
    <div className="p-4 sm:p-8">

      {/* Greeting */}
      <h1 className="text-2xl font-semibold text-stone-900">
        {getGreeting()}, Super Admin
      </h1>

      <p className="mb-6 text-sm text-stone-500">
        Here is what is happening across TechTorch content today
      </p>

      {/* Dashboard Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map((c) => (
          <Link
            key={c.label}
            to={c.to}
            className="rounded-xl border border-stone-200 bg-white p-4 transition hover:border-[#780042]"
          >
            <c.icon size={20} className="text-[#780042]" />

            <div className="mt-3 text-3xl font-semibold text-stone-900">
              {formatNumber(c.total)}
            </div>

            <div className="text-sm text-stone-600">
              {c.label}
            </div>

            <div className="mt-1 text-xs text-stone-400">
              {c.live} live · {c.total - c.live} other
            </div>
          </Link>
        ))}
      </div>

      {/* Applicants & Downloads */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">

        {/* Total Applicants */}
        <div className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4">
          <Users className="text-[#780042]" />

          <div>
            <div className="text-2xl font-semibold">
              {formatNumber(applicants)}
            </div>

            <div className="text-sm text-stone-500">
              Total job applicants
            </div>
          </div>
        </div>

        {/* Whitepaper Downloads */}
        <div className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4">
          <Download className="text-[#780042]" />

          <div>
            <div className="text-2xl font-semibold">
              {formatNumber(downloads)}
            </div>

            <div className="text-sm text-stone-500">
              Whitepaper downloads
            </div>
          </div>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 bg-white">

        <div className="border-b border-stone-200 px-4 py-3 text-sm font-semibold text-stone-800">
          Recent activity
        </div>

        <table className="w-full text-left text-sm">
          <tbody className="divide-y divide-stone-100">

            {/* No Data */}
            {recent.length === 0 && (
              <tr>
                <td className="px-4 py-10 text-center text-stone-400">
                  Nothing yet — create your first item from the sidebar.
                </td>
              </tr>
            )}

            {/* Recent Data */}
            {recent.map((r) => (
              <tr key={r.type + r._id}>

                <td className="px-4 py-3 text-xs font-medium uppercase text-stone-400">
                  {r.type}
                </td>

                <td className="px-4 py-3 font-medium text-stone-800">
                  {r.title}
                </td>

                <td className="px-4 py-3">
                  <StatusBadge value={r.status} />
                </td>

                <td className="px-4 py-3 whitespace-nowrap text-stone-500">
                  {formatDate(
                    r.updatedAt || r.createdAt,
                    true
                  )}
                </td>

              </tr>
            ))}

          </tbody>
        </table>

      </div>

    </div>
  );
}