import { useState } from "react";

const primaryLinks = ["Company Overview"];
const secondaryLinks = ["Leadership", "Idea", "Investors", "Partners Ecosystem"];
const boldLinks = ["News", "Customer Centricity"];

function NavAboutUs({ label }) {
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
            w-[96vw] max-w-[1250px]
            bg-white shadow-2xl
            grid grid-cols-1 md:grid-cols-[2.2fr_1fr]
            z-50 overflow-hidden
          "
        >
          {/* Left: links */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 px-10 py-12 md:px-16 md:py-20">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 shrink-0">
              {label}
            </h3>

            <div className="flex flex-col gap-5">
              {primaryLinks.map((title) => (
                <a
                  key={title}
                  href="#"
                  className="text-xl md:text-2xl font-bold text-gray-900 hover:text-[#8a1538] transition-colors"
                >
                  {title}
                </a>
              ))}

              {secondaryLinks.map((title) => (
                <a
                  key={title}
                  href="#"
                  className="text-xl md:text-2xl text-gray-500 hover:text-[#8a1538] transition-colors"
                >
                  {title}
                </a>
              ))}

              <div className="flex flex-col gap-5 mt-4">
                {boldLinks.map((title) => (
                  <a
                    key={title}
                    href="#"
                    className="text-xl md:text-2xl font-bold text-gray-900 hover:text-[#8a1538] transition-colors"
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
              relative min-h-[320px] md:min-h-[420px]
              flex flex-col justify-between
              p-8 md:p-10
              bg-gradient-to-br from-[#3a0a12] via-[#7a1a26] to-[#1a1015]
            "
          >
            <h4 className="text-white text-2xl md:text-3xl font-semibold leading-snug pb-3 border-b border-white/70 inline-block self-start">
              AI That Works for Your Business
            </h4>

            <a
              href="#"
              className="text-white font-semibold text-lg md:text-xl self-start hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavAboutUs;