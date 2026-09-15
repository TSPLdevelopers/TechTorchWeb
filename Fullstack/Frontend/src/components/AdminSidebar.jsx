import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  FileText,
  Briefcase,
  Calendar,
  FolderOpen,
  SlidersHorizontal,
  X,
} from "lucide-react";

const ACCENT = "#780042";

const NAV_ITEMS = [
  {
    label: "Dashboard Overview",
    icon: LayoutGrid,
    path: "/admin-dashboard",
  },
  {
    label: "News & Insights",
    icon: FileText,
    path: "/News-Insights",
    badge: "28",
  },
  {
    label: "Job Openings",
    icon: Briefcase,
    path: "/job-openings",
    badge: "14",
  },
  {
    label: "Enterprise Events",
    icon: Calendar,
    path: "/events",
    badge: "6",
  },
  {
    label: "Whitepapers / Case Studies",
    icon: FolderOpen,
    path: "/latest-updates",
    badge: "9",
  },
  {
    label: "System Settings",
    icon: SlidersHorizontal,
    path: "/system-settings",
  },
];

export default function AdminSidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-screen w-64 bg-white border-r border-stone-200 px-3 py-4
      transition-transform duration-200
      ${
        sidebarOpen
          ? "translate-x-0"
          : "-translate-x-full"
      }
      lg:translate-x-0`}
    >
      {/* LOGO */}
      <div className="flex items-center gap-2 px-2 pb-5 mb-2 border-b border-stone-100">
        <div
          className="w-9 h-9 rounded-md flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: ACCENT }}
        >
          T
        </div>

        <div>
          <div className="font-semibold text-sm leading-tight">
            TechTorch
          </div>

          <div className="text-[10px] text-stone-400 tracking-wide leading-tight">
            ENTERPRISE CORE
          </div>
        </div>

        {/* MOBILE CLOSE */}
        <button
          type="button"
          aria-label="Close menu"
          className="ml-auto w-8 h-8 flex items-center justify-center rounded-md text-stone-500 hover:bg-stone-100 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={18} />
        </button>
      </div>

      {/* NAVIGATION TITLE */}
      <div className="text-[10px] font-semibold text-stone-400 tracking-wide px-3 mb-2 mt-3">
        CORE ARCHITECTURE
      </div>

      {/* NAVIGATION */}
      <nav className="space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;

          const active =
            location.pathname === item.path;

          return (
            <button
              key={item.path}
              type="button"
              onClick={() => {
                navigate(item.path);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-left transition-colors ${
                active
                  ? "text-white font-medium"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
              style={
                active
                  ? { backgroundColor: ACCENT }
                  : {}
              }
            >
              <Icon
                size={17}
                strokeWidth={2}
                className="shrink-0"
              />

              <span className="flex-1 whitespace-nowrap">
                {item.label}
              </span>

              {item.badge && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                    active
                      ? "bg-white/20 text-white"
                      : "bg-stone-100 text-stone-500"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}