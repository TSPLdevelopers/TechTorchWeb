import { useState } from "react";

const primaryLinks = ["Company Overview"];
const secondaryLinks = ["Leadership", "Idea", "Investors", "Partners Ecosystem"];
const boldLinks = ["News", "Customer Centricity"];

function NavbarItem({ label, links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Nav label */}
      <span className="text-[17px] text-gray-900 cursor-pointer py-3 inline-block">
        {label}
      </span>

      {/* Mega menu */}
      {isOpen && (
        <div
          className="
            absolute left-1/2 -translate-x-1/2 top-full mt-0
            w-[92vw] max-w-[900px]
            bg-white shadow-2xl
            grid grid-cols-1 md:grid-cols-2
            z-50 overflow-hidden
          "
        >
          {/* Left: links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-8 py-10 md:px-12 md:py-14">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 shrink-0">
              {label}
            </h3>

            <div className="flex flex-col gap-4">
              {primaryLinks.map((title) => (
                <a
                  key={title}
                  href="#"
                  className="text-lg md:text-xl text-gray-900 hover:text-[#8a1538] transition-colors"
                >
                  {title}
                </a>
              ))}

              {secondaryLinks.map((title) => (
                <a
                  key={title}
                  href="#"
                  className="text-lg md:text-xl text-gray-500 hover:text-[#8a1538] transition-colors"
                >
                  {title}
                </a>
              ))}

              <div className="flex flex-col gap-4 mt-4">
                {boldLinks.map((title) => (
                  <a
                    key={title}
                    href="#"
                    className="text-lg md:text-xl text-gray-900 hover:text-[#8a1538] transition-colors"
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: promo panel */}
          <div
            className="
              relative min-h-[260px] md:min-h-[340px]
              flex flex-col justify-between
              p-6 md:p-8
              bg-gradient-to-br from-[#3a0a12] via-[#7a1a26] to-[#1a1015]
            "
          >
            <div>
              <h4 className="text-white text-xl md:text-2xl font-semibold leading-snug pb-3 border-b border-white/70 inline-block">
                AI That Works for Your Business
              </h4>
            </div>

            <a
              href="#"
              className="text-white font-semibold text-base md:text-lg self-start hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarItem;