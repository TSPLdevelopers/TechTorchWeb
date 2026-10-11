import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  FileText,
  Briefcase,
  Calendar,
  FolderOpen,
  X,
} from "lucide-react";
import logo from "../../public/logo.png?url";
import {
  getNews,
  getJobs,
  getEvents,
  getWhitepapers,
} from "../api/adminDashboardApi";

const ACCENT = "#780042";

const NAV_ITEMS = [
  {
    key: "dashboard",
    label: "Dashboard Overview",
    icon: LayoutGrid,
    path: "/admin-dashboard",
  },
  {
    key: "news",
    label: "News & Insights",
    icon: FileText,
    path: "/News-Insights",
  },
  {
    key: "jobs",
    label: "Job Openings",
    icon: Briefcase,
    path: "/job-openings",
  },
  {
    key: "events",
    label: "Enterprise Events",
    icon: Calendar,
    path: "/events",
  },
  {
    key: "whitepapers",
    label: "Whitepapers / Case Studies",
    icon: FolderOpen,
    path: "/latest-updates",
  },
];

/* -------------------------------------------------------------------------- */
/* Sidebar Styles                                                             */
/* -------------------------------------------------------------------------- */

const SIDEBAR_CSS = `
.ttsb {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 256px;
  max-width: 85vw;
  height: 100vh;
  height: 100dvh;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: #fff;
  border-right: 1px solid #e7e5e4;
  padding: 16px 12px;
  transform: translateX(-100%);
  transition: transform .2s ease;
  font-family: "Inter", sans-serif;
  box-sizing: border-box;
}

.ttsb *,
.ttsb *::before,
.ttsb *::after {
  box-sizing: border-box;
}

.ttsb.open {
  transform: translateX(0);
}

@media (min-width: 1024px) {
  .ttsb {
    transform: translateX(0);
  }
}

/* -------------------------------------------------------------------------- */
/* LOGO                                                                       */
/* -------------------------------------------------------------------------- */

.ttsb-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px 20px;
  margin-bottom: 8px;
  border-bottom: 1px solid #f5f5f4;
  min-height: 56px;
}

.ttsb-logo-img {
  height: 40px;
  width: auto;
  max-width: 170px;
  object-fit: contain;
  display: block;
}

/* -------------------------------------------------------------------------- */
/* MOBILE CLOSE BUTTON                                                        */
/* -------------------------------------------------------------------------- */

.ttsb-close {
  margin-left: auto;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: 6px;
  color: #78716c;
  cursor: pointer;
  flex-shrink: 0;
}

.ttsb-close:hover {
  background: #f5f5f4;
}

@media (min-width: 1024px) {
  .ttsb-close {
    display: none;
  }
}

/* -------------------------------------------------------------------------- */
/* SIDEBAR TITLE                                                              */
/* -------------------------------------------------------------------------- */

.ttsb-title {
  font-size: 10px;
  font-weight: 600;
  color: #a8a29e;
  letter-spacing: .025em;
  padding: 0 12px;
  margin: 12px 0 8px;
}

/* -------------------------------------------------------------------------- */
/* NAVIGATION                                                                 */
/* -------------------------------------------------------------------------- */

.ttsb-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ttsb-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border: none;
  background: transparent;
  border-radius: 6px;
  font-family: inherit;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: #57534e;
  cursor: pointer;
  transition: background-color .15s ease;
}

.ttsb-item:hover {
  background: #f5f5f4;
}

.ttsb-item.active,
.ttsb-item.active:hover {
  color: #fff;
  font-weight: 500;
  background: ${ACCENT};
}

.ttsb-item svg {
  flex-shrink: 0;
}

.ttsb-label {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ttsb-badge {
  min-width: 24px;
  text-align: center;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 999px;
  font-weight: 600;
  background: #f5f5f4;
  color: #78716c;
  flex-shrink: 0;
}

.ttsb-item.active .ttsb-badge {
  background: rgba(255, 255, 255, .2);
  color: #fff;
}

/* -------------------------------------------------------------------------- */
/* SCROLLBAR                                                                  */
/* -------------------------------------------------------------------------- */

.ttsb::-webkit-scrollbar {
  width: 5px;
}

.ttsb::-webkit-scrollbar-track {
  background: transparent;
}

.ttsb::-webkit-scrollbar-thumb {
  background: #d6d3d1;
  border-radius: 999px;
}
`;

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

export default function AdminSidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  /* ------------------------------------------------------------------------ */
  /* LIVE COUNTS                                                              */
  /* ------------------------------------------------------------------------ */

  const [counts, setCounts] = useState({
    news: 0,
    jobs: 0,
    events: 0,
    whitepapers: 0,
  });

  const [countsLoading, setCountsLoading] = useState(true);

  /* ------------------------------------------------------------------------ */
  /* LOAD LIVE COUNTS                                                         */
  /* ------------------------------------------------------------------------ */

  const loadCounts = async () => {
    try {
      setCountsLoading(true);

      const [
        newsData,
        jobsData,
        eventsData,
        whitepaperData,
      ] = await Promise.all([
        getNews(),
        getJobs(),
        getEvents(),
        getWhitepapers(),
      ]);

      setCounts({
        news: Array.isArray(newsData)
          ? newsData.length
          : 0,

        jobs: Array.isArray(jobsData)
          ? jobsData.length
          : 0,

        events: Array.isArray(eventsData)
          ? eventsData.length
          : 0,

        whitepapers: Array.isArray(whitepaperData)
          ? whitepaperData.length
          : 0,
      });
    } catch (error) {
      console.error(
        "Sidebar live count error:",
        error
      );

      // API fail hone par previous count preserve hoga.
    } finally {
      setCountsLoading(false);
    }
  };

  /* ------------------------------------------------------------------------ */
  /* INITIAL LOAD + AUTO REFRESH                                              */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    loadCounts();

    const handleDataUpdate = () => {
      loadCounts();
    };

    window.addEventListener(
      "ttad:data-updated",
      handleDataUpdate
    );

    // Har 10 seconds mein latest count refresh hoga.
    const interval = setInterval(() => {
      loadCounts();
    }, 10000);

    return () => {
      window.removeEventListener(
        "ttad:data-updated",
        handleDataUpdate
      );

      clearInterval(interval);
    };
  }, []);

  /* ------------------------------------------------------------------------ */
  /* GET BADGE COUNT                                                          */
  /* ------------------------------------------------------------------------ */

  const getBadgeCount = (key) => {
    switch (key) {
      case "news":
        return counts.news;

      case "jobs":
        return counts.jobs;

      case "events":
        return counts.events;

      case "whitepapers":
        return counts.whitepapers;

      default:
        return null;
    }
  };

  /* ------------------------------------------------------------------------ */
  /* NAVIGATION                                                                */
  /* ------------------------------------------------------------------------ */

  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  /* ------------------------------------------------------------------------ */
  /* RENDER                                                                    */
  /* ------------------------------------------------------------------------ */

  return (
    <>
      <style>{SIDEBAR_CSS}</style>

      <aside
        className={
          "ttsb" +
          (sidebarOpen ? " open" : "")
        }
        aria-label="Main navigation"
      >

        {/* ================================================================ */}
        {/* LOGO                                                              */}
        {/* ================================================================ */}

        <div className="ttsb-logo">

          <img
            src={logo}
            alt="TechTorch"
            className="ttsb-logo-img"
          />

          {/* MOBILE CLOSE */}

          <button
            type="button"
            aria-label="Close menu"
            className="ttsb-close"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <X size={18} />
          </button>

        </div>

        {/* ================================================================ */}
        {/* SIDEBAR TITLE                                                    */}
        {/* ================================================================ */}

        <div className="ttsb-title">
          CORE ARCHITECTURE
        </div>

        {/* ================================================================ */}
        {/* NAVIGATION                                                       */}
        {/* ================================================================ */}

        <nav className="ttsb-nav">

          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;

            const active =
              location.pathname === item.path;

            const badgeCount =
              getBadgeCount(item.key);

            return (
              <button
                key={item.path}
                type="button"
                className={
                  "ttsb-item" +
                  (active
                    ? " active"
                    : "")
                }
                onClick={() =>
                  handleNavigation(
                    item.path
                  )
                }
              >

                <Icon
                  size={17}
                  strokeWidth={2}
                />

                <span className="ttsb-label">
                  {item.label}
                </span>

                {/* LIVE BADGE */}

                {item.key !== "dashboard" && (
                  <span className="ttsb-badge">
                    {countsLoading
                      ? "..."
                      : badgeCount}
                  </span>
                )}

              </button>
            );
          })}

        </nav>

      </aside>
    </>
  );
}