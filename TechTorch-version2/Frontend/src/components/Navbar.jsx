import React from "react";
import { Search } from "lucide-react";

/**
 * Navbar
 * Standalone navigation bar component matching the TechTorch Solutions site header.
 * Usage: import Navbar from "./Navbar"; then render <Navbar />
 */
export default function Navbar() {
  const navLinks = [
    "About Us",
    "Capabilities",
    "Industries",
    "Insights",
    "Careers",
    "Contact Us",
  ];

  return (
    <header className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="21" stroke="#9B1B4A" strokeWidth="1.5" fill="white" />
            <path
              d="M14 15h16M22 15v14M22 24c3 0 5-1.8 5-4.2S25 15.6 22 15.6"
              stroke="#9B1B4A"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <div className="leading-tight">
            <div className="flex items-baseline gap-1">
              <span className="text-[22px] font-semibold text-[#7a1740]">TechTorch</span>
            </div>
            <div className="text-[11px] font-bold tracking-wide text-[#9B1B4A] -mt-1">
              SOLUTIONS
            </div>
            <div className="text-[9px] italic text-gray-500 -mt-0.5">Lighting Future</div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[15px] text-gray-800 hover:text-[#9B1B4A] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Search icon */}
        <button
          aria-label="Search"
          className="text-gray-800 hover:text-[#9B1B4A] transition-colors"
        >
          <Search size={20} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}