import React from "react";
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

export default function Navbar() {
  return (
    <nav
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      className="w-full flex items-center justify-between px-10 py-3 border-b border-gray-200 bg-white"
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="TechTorch Solutions" className="h-11 w-auto flex-shrink-0" />
      </div>

      {/* Links */}
      <ul className="flex items-center gap-12 list-none ml-auto mr-10">
        {navLinks.map((label) => (
          <li key={label}>
            <a
              href="#"
              className="text-[17px] text-gray-900 no-underline transition-colors duration-200 hover:text-[#8a1538]"
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
    </nav>
  );
}