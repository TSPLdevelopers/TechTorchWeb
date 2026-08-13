import React, { useState } from "react";
import logo from "../assets/TechTorchLogo.png";

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
  return (
    <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
      <span
        className={`block h-0.5 w-6 bg-gray-900 transition-all ${
          open ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-gray-900 transition-all ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-gray-900 transition-all ${
          open ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      className="w-full bg-white border-b border-gray-200"
    >
      {/* Main Navbar */}
      <div className="w-full flex items-center justify-between px-5 sm:px-8 lg:px-10 py-3">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="TechTorch Solutions"
            className="h-9 sm:h-10 lg:h-11 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-8 xl:gap-12 list-none mr-10">
            {navLinks.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="text-[16px] xl:text-[17px] text-gray-900 no-underline transition-colors duration-200 hover:text-[#8a1538]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
          >
            <SearchIcon />
          </button>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden bg-transparent border-none cursor-pointer p-1"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-5 sm:px-8 pb-4 pt-2">
          {navLinks.map((label) => (
            <li key={label} className="border-b border-gray-100">
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-[16px] text-gray-900 no-underline hover:text-[#8a1538] transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}

          {/* Mobile Search */}
          <li className="pt-4">
            <button
              type="button"
              aria-label="Search"
              className="flex items-center gap-2 bg-transparent border-none cursor-pointer p-0 text-gray-900"
            >
              <SearchIcon />
              <span>Search</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}