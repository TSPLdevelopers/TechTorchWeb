import React, { useLayoutEffect, useRef, useState } from "react";
import logo from "../assets/TechTorchLogo.png";
import { NavMenuProvider, useNavMenu } from "./NavbarItem/NavMenuContext";
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

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
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

function NavbarInner() {
  const { setActiveMenu, navHeight, setNavHeight } = useNavMenu();
  const navRef = useRef(null);
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

  return (
    <>
      <nav
        ref={navRef}
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        className="fixed top-0 left-0 w-full z-[1000] flex items-center justify-between px-4 sm:px-6 lg:px-10 py-2.5 lg:py-3 border-b border-gray-200 bg-white"
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="TechTorch Solutions"
            className="h-9 md:h-10 lg:h-11 w-auto flex-shrink-0"
          />
        </div>

        {/* Desktop Links */}
        <ul
          onMouseLeave={() => setActiveMenu(null)}
          className="hidden lg:flex items-center gap-8 xl:gap-12 list-none ml-auto mr-6 xl:mr-10"
        >
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
                  className="text-[17px] text-gray-900 no-underline transition-colors duration-200 hover:text-[#8a1538]"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Search */}
        <div className="hidden lg:flex items-center">
          <button
            type="button"
            aria-label="Search"
            className="flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
          >
            <SearchIcon />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center bg-transparent border-none cursor-pointer p-1"
        >
          <MenuIcon open={mobileOpen} />
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{ top: navHeight }}
            className="lg:hidden fixed left-0 right-0 w-full bg-white shadow-2xl z-[999] max-h-[80vh] overflow-y-auto border-t border-gray-100"
          >
            <ul className="flex flex-col divide-y divide-gray-100">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-4 text-[17px] text-gray-900 hover:text-[#8a1538] hover:bg-gray-50 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
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