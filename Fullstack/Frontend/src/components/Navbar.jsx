import React, { useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, LogOut, UserRound } from "lucide-react";
import { MOBILE_MENU, routeFor } from "./NavbarItem/navRoutes";
import { useMe, useSignOut } from "../account/useAccount";
import logo from "../assets/TechTorchLogo.png";
import { NavMenuProvider, useNavMenu } from "./NavbarItem/NavMenuContext";
import NavAboutUs from "./NavbarItem/NavAboutUs";
import NavCapabilities from "./NavbarItem/NavCapabilities";
import NavIndustries from "./NavbarItem/NavIndustries";
import NavInsights from "./NavbarItem/NavInsights";
import NavCareers from "./NavbarItem/NavCareers";

function SearchIcon() {
  return (
    <svg
      width="20"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#222"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return open ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#222"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#222"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function AccountButton({ onNavigate }) {
  const navigate = useNavigate();
  const { data: me } = useMe();
  const signOut = useSignOut();
  const [open, setOpen] = useState(false);

  if (!me) {
    return (
      <Link
        to="/signin"
        onClick={onNavigate}
        className="rounded-full bg-[#780042] px-5 py-2 text-[15px] font-medium text-white no-underline transition hover:opacity-90"
      >
        Sign in
      </Link>
    );
  }

  const dashboard = me.accountType === "admin" ? "/admin-dashboard" : "/candidate";
  const logout = async () => {
    setOpen(false);
    try { await signOut.mutateAsync(); } catch { /* already signed out */ }
    onNavigate?.();
    navigate("/", { replace: true });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 text-[15px] text-gray-900 hover:bg-gray-50"
      >
        <UserRound size={17} />
        <span className="max-w-[110px] truncate">{me.name?.split(" ")[0]}</span>
        <ChevronDown size={15} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-[1001]" onClick={() => setOpen(false)} />
          <div role="menu" className="absolute right-0 top-full z-[1002] mt-2 w-52 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-xl">
            <div className="border-b border-gray-100 px-4 py-2">
              <p className="truncate text-sm font-medium text-gray-900">{me.name}</p>
              <p className="truncate text-xs text-gray-500">{me.accountType === "admin" ? "Admin" : "Candidate"}</p>
            </div>
            <Link role="menuitem" to={dashboard} onClick={() => { setOpen(false); onNavigate?.(); }} className="block px-4 py-2.5 text-sm text-gray-800 no-underline hover:bg-gray-50">
              {me.accountType === "admin" ? "Admin dashboard" : "My dashboard"}
            </Link>
            {me.accountType === "candidate" && (
              <Link role="menuitem" to="/careers" onClick={() => { setOpen(false); onNavigate?.(); }} className="block px-4 py-2.5 text-sm text-gray-800 no-underline hover:bg-gray-50">
                Browse jobs
              </Link>
            )}
            <button role="menuitem" onClick={logout} className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50">
              <LogOut size={15} /> Sign out
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function MobileMenu({ navHeight, close }) {
  const [openKey, setOpenKey] = useState(null);
  return (
    <div
      style={{ top: navHeight }}
      className="lg:hidden fixed left-0 right-0 w-full bg-white shadow-2xl z-[999] max-h-[80vh] overflow-y-auto border-t border-gray-100"
    >
      <ul className="flex flex-col divide-y divide-gray-100">
        {MOBILE_MENU.map((item) => (
          <li key={item.label}>
            {item.to ? (
              <Link to={item.to} onClick={close} className="block px-6 py-4 text-[17px] text-gray-900 no-underline hover:bg-gray-50 hover:text-[#8a1538]">
                {item.label}
              </Link>
            ) : (
              <>
                <button
                  type="button"
                  aria-expanded={openKey === item.label}
                  onClick={() => setOpenKey(openKey === item.label ? null : item.label)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-[17px] text-gray-900 hover:bg-gray-50"
                >
                  {item.label}
                  <ChevronDown size={18} className={`transition-transform ${openKey === item.label ? "rotate-180" : ""}`} />
                </button>
                {openKey === item.label && (
                  <ul className="bg-gray-50 pb-2">
                    {item.children.map((c) => (
                      <li key={c}>
                        <Link to={routeFor(c)} onClick={close} className="block px-10 py-2.5 text-[15px] text-gray-700 no-underline hover:text-[#8a1538]">
                          {c}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
        <li className="px-6 py-4"><AccountButton onNavigate={close} /></li>
      </ul>
    </div>
  );
}

function NavbarInner() {
  const { setActiveMenu, navHeight, setNavHeight } = useNavMenu();
  const navRef = useRef(null);
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.getBoundingClientRect().height);
      }
    };

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, [setNavHeight]);

  // Menu links are plain <a href="/path">. Handle them with the router so the
  // page changes instantly without a full reload (keeps the signed-in state too).
  const handleNavClick = (e) => {
    const a = e.target.closest?.("a[href^='/']");
    if (!a || a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate(a.getAttribute("href"));
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const topLink = "text-[17px] text-gray-900 no-underline transition-colors duration-200 hover:text-[#8a1538]";

  return (
    <>
      <nav
        ref={navRef}
        onClick={handleNavClick}
        style={{ fontFamily: "Plus Jakarta Sans, 'Times New Roman', serif" }}
        className="fixed top-0 left-0 w-full z-[1000] flex items-center justify-between px-4 sm:px-6 lg:px-10 py-2.5 lg:py-3 border-b border-gray-200 bg-white"
      >
        {/* Logo */}
        <Link to="/" aria-label="TechTorch Solutions home" className="flex items-center gap-2.5">
          <img src={logo} alt="TechTorch Solutions" className="h-12 sm:h-13 lg:h-13 w-auto" />
        </Link>

        {/* Desktop Links */}
        <ul
          onMouseLeave={() => setActiveMenu(null)}
          className="hidden lg:flex items-center gap-8 xl:gap-12 list-none ml-auto mr-6 xl:mr-10"
        >
          <li><NavAboutUs /></li>
          <li><NavCapabilities /></li>
          <li><NavIndustries /></li>
          <li><NavInsights /></li>
          <li><NavCareers /></li>
          <li><Link to="/start-conversation" className={topLink}>Contact Us</Link></li>
        </ul>

        {/* Search + account */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
          >
            <SearchIcon />
          </button>
          <AccountButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center bg-transparent border-none cursor-pointer p-1"
        >
          <MenuIcon open={mobileOpen} />
        </button>

        {mobileOpen && <MobileMenu navHeight={navHeight} close={() => setMobileOpen(false)} />}
      </nav>

      {/* Spacer */}
      <div style={{ height: navHeight }} />
    </>
  );
}

export default function Navbar() {
  return (
    <NavMenuProvider>
      <NavbarInner />
    </NavMenuProvider>
  );
}