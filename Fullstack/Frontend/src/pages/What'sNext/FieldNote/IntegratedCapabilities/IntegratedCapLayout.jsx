import { NavLink, Outlet } from "react-router-dom";

const menuItems = [
{
name: "ERP Integration",
path: "erp-integration",
icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"> <circle cx="12" cy="12" r="3" /> <circle cx="5" cy="7" r="1.5" /> <circle cx="19" cy="7" r="1.5" /> <circle cx="5" cy="17" r="1.5" /> <circle cx="19" cy="17" r="1.5" /> <path d="M9.5 10 6.2 8" /> <path d="M14.5 10 17.8 8" /> <path d="M9.5 14 6.2 16" /> <path d="M14.5 14 17.8 16" /> </svg>
),
},
{
name: "Operations",
path: "operations-management",
icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"> <path d="M4 20h16" /> <path d="M6 17h12" /> <path d="M7 17V9h10v8" /> <path d="M5 9h14" /> <path d="m8 6 4-3 4 3" /> </svg>
),
},
{
name: "Data Orchestration",
path: "data-orchestration",
icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"> <rect x="5" y="4" width="14" height="16" rx="1.5" /> <path d="M8 8h8" /> <path d="M8 12h8" /> <path d="M8 16h5" /> </svg>
),
},
{
name: "Legacy Modernization",
path: "legacy-modernization",
icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"> <path d="M4 7h7l3 3h6v8H4z" /> <path d="M8 14h7" /> <path d="M12 11v6" /> </svg>
),
},
];

export default function IntegratedCapLayout() {
return ( <div className="integrated-cap-layout">


  <aside className="integrated-cap-sidebar">

    <div className="integrated-cap-brand">
      TechTorch
    </div>

    <nav className="integrated-cap-nav">
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end
          className={({ isActive }) =>
            `integrated-cap-nav-item ${
              isActive ? "integrated-cap-nav-item-active" : ""
            }`
          }
        >
          <span className="integrated-cap-nav-icon">
            {item.icon}
          </span>

          <span className="integrated-cap-nav-text">
            {item.name}
          </span>
        </NavLink>
      ))}
    </nav>

  </aside>

  <main className="integrated-cap-main">
    <Outlet />
  </main>

  <style>{`

    .integrated-cap-layout {
      width: 100%;
      min-height: 100vh;
      display: flex;
      background: #f7f8fa;
      color: #171717;
      font-family: "Inter", sans-serif;
    }

    .integrated-cap-sidebar {
      position: sticky;
      top: 0;
      width: 180px;
      height: 520px;
      flex: 0 0 180px;
      background: #ffffff;
      border-right: 1px solid #eeeeee;
      padding: 28px 24px;
      z-index: 50;
      overflow-y: auto;
    }

    .integrated-cap-brand {
      margin-bottom: 26px;
      color: #641033;
      font-family: "Plus Jakarta Sans", sans-serif;
      font-size: 16px;
      line-height: 1;
      font-weight: 700;
      letter-spacing: -0.4px;
    }

    .integrated-cap-nav {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .integrated-cap-nav-item {
      width: 100%;
      min-height: 38px;
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 8px 10px;
      border-radius: 3px;
      color: #51494d;
      text-decoration: none;
      font-size: 10px;
      font-weight: 600;
      line-height: 1.15;
      transition:
        background 0.2s ease,
        color 0.2s ease;
    }

    .integrated-cap-nav-item:hover {
      background: #880047;
      color: #ffffff;
    }

    .integrated-cap-nav-item-active {
      background: #880047;
      color: #ffffff;
    }

    .integrated-cap-nav-item-active:hover {
      background: #880047;
      color: #ffffff;
    }

    .integrated-cap-nav-icon {
      width: 15px;
      height: 15px;
      flex: 0 0 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .integrated-cap-nav-icon svg {
      width: 15px;
      height: 15px;
    }

    .integrated-cap-nav-text {
      display: block;
      max-width: 105px;
    }

    .integrated-cap-main {
      width: calc(100% - 180px);
      min-width: 0;
      flex: 1;
      overflow: hidden;
    }

    @media (max-width: 900px) {

      .integrated-cap-sidebar {
        width: 165px;
        flex-basis: 165px;
        padding: 24px 17px;
        height: 480px;
      }

      .integrated-cap-main {
        width: calc(100% - 165px);
      }

      .integrated-cap-nav-item {
        padding-left: 8px;
        padding-right: 8px;
        font-size: 9px;
      }
    }

    @media (max-width: 650px) {

      .integrated-cap-layout {
        display: block;
      }

      .integrated-cap-sidebar {
        position: sticky;
        top: 0;
        width: 100%;
        height: auto;
        padding: 14px 16px 11px;
        border-right: none;
        border-bottom: 1px solid #eeeeee;
        overflow: hidden;
      }

      .integrated-cap-brand {
        margin-bottom: 11px;
        font-size: 15px;
      }

      .integrated-cap-nav {
        flex-direction: row;
        gap: 5px;
        overflow-x: auto;
        scrollbar-width: none;
      }

      .integrated-cap-nav::-webkit-scrollbar {
        display: none;
      }

      .integrated-cap-nav-item {
        width: auto;
        min-width: max-content;
        min-height: 34px;
        padding: 7px 9px;
        font-size: 9px;
      }

      .integrated-cap-nav-icon {
        width: 13px;
        height: 13px;
        flex-basis: 13px;
      }

      .integrated-cap-nav-icon svg {
        width: 13px;
        height: 13px;
      }

      .integrated-cap-main {
        width: 100%;
      }
    }

    @media (max-width: 420px) {

      .integrated-cap-sidebar {
        padding-left: 12px;
        padding-right: 12px;
      }

      .integrated-cap-brand {
        font-size: 14px;
      }

      .integrated-cap-nav-item {
        font-size: 8px;
        padding: 6px 8px;
      }
    }

  `}</style>
</div>


);
}
