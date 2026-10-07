import React, {
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/TechTorchLogo.png";
import {
  NavMenuProvider,
  useNavMenu,
} from "./NavbarItem/NavMenuContext";

import NavAboutUs from "./NavbarItem/NavAboutUs";
import NavCapabilities from "./NavbarItem/NavCapabilities";
import NavIndustries from "./NavbarItem/NavIndustries";
import NavInsights from "./NavbarItem/NavInsights";
import NavCareers from "./NavbarItem/NavCareers";

const navLinks = [
  "About Us",
  "Capabilities",
  "Industries",
  "Insights",
  "Careers",
  "Contact Us",
];

/* =========================================================
   SEARCH ICON
========================================================= */

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
      <line
        x1="21"
        y1="21"
        x2="16.65"
        y2="16.65"
      />
    </svg>
  );
}

/* =========================================================
   MOBILE MENU ICON
========================================================= */

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

/* =========================================================
   MOBILE ARROW
========================================================= */

function MobileArrow({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${
        open
          ? "rotate-90 text-[#730042]"
          : "text-gray-900"
      }`}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* =========================================================
   NAVBAR INNER
========================================================= */

function NavbarInner() {
  const {
    activeMenu,
    setActiveMenu,
    navHeight,
    setNavHeight,
  } = useNavMenu();

  const navRef = useRef(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [mobileExpanded, setMobileExpanded] =
    useState(null);

  /* 
    IMPORTANT:
    This timer gives enough time to move from one nav item
    to the next without the mega menu disappearing.
  */

  const closeTimerRef = useRef(null);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleNavLeave = () => {
    cancelClose();

    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
      closeTimerRef.current = null;
    }, 350);
  };

  const handleNavEnter = () => {
    cancelClose();
  };

  useLayoutEffect(() => {
    const measure = () => {
      if (navRef.current) {
        setNavHeight(
          navRef.current.getBoundingClientRect().height
        );
      }
    };

    measure();

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
      cancelClose();
    };
  }, [setNavHeight]);

  /* =========================================================
     MOBILE ACCORDION HANDLER
  ========================================================= */

  const handleMobileToggle = (label) => {
    setMobileExpanded((current) =>
      current === label ? null : label
    );
  };

  return (
    <>
      <nav
        ref={navRef}
        onMouseEnter={handleNavEnter}
        onMouseLeave={handleNavLeave}
        style={{
          fontFamily:
            "Plus Jakarta Sans, 'Times New Roman', serif",
        }}
        className="fixed top-0 left-0 w-full z-[1000] flex items-center justify-between px-4 sm:px-6 lg:px-10 py-2.5 lg:py-3 border-b border-gray-200 bg-white"
      >

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          className="flex items-center gap-2.5 cursor-pointer"
          aria-label="TechTorch Solutions Home"
        >
          <img
            src={logo}
            alt="TechTorch Solutions"
            className="h-12 sm:h-13 lg:h-13 w-auto"
          />
        </Link>

        {/* =====================================================
            DESKTOP LINKS
        ===================================================== */}

        <ul className="hidden lg:flex items-center gap-8 xl:gap-12 list-none ml-auto mr-6 xl:mr-10">

          {navLinks.map((label) => {

            if (label === "About Us") {
              return (
                <li key={label}>
                  <NavAboutUs />
                </li>
              );
            }

            if (label === "Capabilities") {
              return (
                <li key={label}>
                  <NavCapabilities />
                </li>
              );
            }

            if (label === "Industries") {
              return (
                <li key={label}>
                  <NavIndustries />
                </li>
              );
            }

            if (label === "Insights") {
              return (
                <li key={label}>
                  <NavInsights />
                </li>
              );
            }

            if (label === "Careers") {
              return (
                <li key={label}>
                  <NavCareers />
                </li>
              );
            }

            return (
              <li key={label}>
                <a
                  href="#"
                  className={`relative text-[17px] text-gray-900 no-underline transition-colors duration-300 ${
                    activeMenu === label
                      ? "text-[#730042]"
                      : ""
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}

        </ul>

        {/* =====================================================
            SEARCH
        ===================================================== */}

        <div className="hidden lg:flex items-center">
          <button
            type="button"
            aria-label="Search"
            className="flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
          >
            <SearchIcon />
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          aria-label={
            mobileOpen
              ? "Close menu"
              : "Open menu"
          }
          onClick={() => {
            setMobileOpen((v) => !v);

            if (mobileOpen) {
              setMobileExpanded(null);
            }
          }}
          className="lg:hidden flex items-center justify-center bg-transparent border-none cursor-pointer p-1"
        >
          <MenuIcon open={mobileOpen} />
        </button>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {mobileOpen && (
          <div
            style={{ top: navHeight }}
            className="lg:hidden fixed left-0 right-0 w-full bg-white shadow-2xl z-[999] max-h-[80vh] overflow-y-auto border-t border-gray-100"
          >

            <ul className="flex flex-col divide-y divide-gray-100">

              {navLinks.map((label) => {

                const isExpanded =
                  mobileExpanded === label;

                if (label === "About Us") {
                  return (
                    <li key={label}>
                      <NavAboutUs
                        mobile
                        isOpen={isExpanded}
                        onToggle={() =>
                          handleMobileToggle(label)
                        }
                      />
                    </li>
                  );
                }

                if (label === "Capabilities") {
                  return (
                    <li key={label}>
                      <NavCapabilities
                        mobile
                        isOpen={isExpanded}
                        onToggle={() =>
                          handleMobileToggle(label)
                        }
                      />
                    </li>
                  );
                }

                return (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() =>
                        handleMobileToggle(label)
                      }
                      className="w-full flex items-center justify-between px-6 py-4 bg-white border-none text-left text-[15px] font-semibold text-gray-900"
                    >
                      <span>{label}</span>

                      {label !== "Contact Us" && (
                        <MobileArrow
                          open={isExpanded}
                        />
                      )}
                    </button>
                  </li>
                );
              })}

            </ul>

          </div>
        )}

      </nav>

      {/* =========================================================
          SPACER
      ========================================================= */}

      <div style={{ height: navHeight }} />

    </>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  return (
    <NavMenuProvider>
      <NavbarInner />
    </NavMenuProvider>
  );
}