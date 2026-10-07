import React, { useEffect, useState } from "react";
import { NavLink, Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  BookOpen, Briefcase, Calendar, FileText, FolderOpen, HeartHandshake, LayoutGrid, LogOut, Megaphone, Menu, UserCog, Users, X,
} from "lucide-react";
import { useLogout, useProfile } from "../hooks/useAuth";
import { useList } from "../hooks/useResource";
import { ACCENT, PageLoader } from "../components/ui";

const NAV = [
  { label: "Dashboard Overview", to: "/admin-dashboard", icon: LayoutGrid },
  { label: "News & Insights", to: "/news-insights", icon: FileText, count: "news" },
  { label: "Job Openings", to: "/job-openings", icon: Briefcase, count: "jobs" },
  { label: "Enterprise Events", to: "/events", icon: Calendar, count: "events" },
  { label: "Whitepapers", to: "/whitepapers", icon: FolderOpen, count: "whitepapers" },
  { label: "Latest Updates", to: "/latest-updates", icon: Megaphone, count: "updates" },
];

const CANDIDATE_NAV = [
  { label: "Candidate Blogs", to: "/candidate-blogs", icon: BookOpen },
  { label: "Candidate Interests", to: "/candidate-interests", icon: HeartHandshake },
];

function Count({ resource }) {
  const { data } = useList(resource);
  if (!data) return null;
  return <span className="ml-auto rounded-full bg-stone-100 px-2 py-0.5 text-xs text-stone-500">{data.length}</span>;
}

export default function AdminLayout() {
  const { data: me, isLoading, isError } = useProfile();
  const logout = useLogout();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [location.pathname]);

  if (isLoading) return <PageLoader />;
  if (isError || !me) return <Navigate to="/signin" replace state={{ from: location.pathname }} />;

  const handleLogout = async () => {
    try {
      await logout.mutateAsync();
    } catch {
      /* cookie may already be expired – still leave */
    }
    navigate("/signin", { replace: true });
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive ? "text-white" : "text-stone-600 hover:bg-stone-100"
    }`;

  const item = (n) => (
    <NavLink key={n.to} to={n.to} className={linkClass} style={({ isActive }) => (isActive ? { backgroundColor: ACCENT } : undefined)}>
      <n.icon size={17} />
      <span>{n.label}</span>
      {n.count && <Count resource={n.count} />}
    </NavLink>
  );

  return (
    <div className="min-h-screen bg-stone-50">
      {/* mobile top bar */}
      <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-stone-200 bg-white px-4 py-3 lg:hidden">
        <button onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
        <span className="font-semibold">TechTorch Admin</span>
      </div>

      {open && <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setOpen(false)} />}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-dvh w-64 flex-col border-r border-stone-200 bg-white p-3 transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-4 flex items-center gap-2 border-b border-stone-100 px-2 pb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-md font-bold text-white" style={{ backgroundColor: ACCENT }}>T</div>
          <div>
            <div className="text-sm font-semibold leading-tight">TechTorch</div>
            <div className="text-[10px] tracking-wide text-stone-400">ADMIN · INDIA</div>
          </div>
          <button className="ml-auto lg:hidden" onClick={() => setOpen(false)} aria-label="Close menu"><X size={18} /></button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto">
          <div className="px-3 pb-1 text-[11px] font-semibold tracking-wider text-stone-400">CONTENT</div>
          {NAV.map(item)}

          <div className="px-3 pb-1 pt-4 text-[11px] font-semibold tracking-wider text-stone-400">CANDIDATES</div>
          {CANDIDATE_NAV.map(item)}

          <div className="px-3 pb-1 pt-4 text-[11px] font-semibold tracking-wider text-stone-400">ACCOUNT</div>
          {item({ label: "My Account", to: "/account", icon: UserCog })}
          {me.role === "superadmin" && item({ label: "Admin Accounts", to: "/admin-accounts", icon: Users })}
        </nav>

        {/* user + logout */}
        <div className="mt-3 border-t border-stone-100 pt-3">
          <div className="mb-2 px-2">
            <div className="truncate text-sm font-medium text-stone-800">{me.name}</div>
            <div className="truncate text-xs text-stone-400">{me.email}</div>
          </div>
          <button
            onClick={handleLogout}
            disabled={logout.isPending}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-60"
          >
            <LogOut size={17} /> {logout.isPending ? "Logging out…" : "Logout"}
          </button>
        </div>
      </aside>

      <main className="min-h-screen lg:ml-64">
        <Outlet />
      </main>
    </div>
  );
}