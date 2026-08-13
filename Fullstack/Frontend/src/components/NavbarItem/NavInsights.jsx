import { useState } from "react";

const links = ["Case Studies", "Media", "Company Profile", "Quick Brochure"];

const promoCards = [
  {
    label: "Latest Update",
    heading: "TorchX Suite: Bringing Business Operations Together",
    cta: "Read More",
  },
  {
    label: "Upcoming Event",
    heading: "",
    cta: "View Event",
  },
];

function NavInsights() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="text-[17px] text-gray-900 cursor-pointer py-3 inline-block">
        Insights
      </span>

      {isOpen && (
        <div
          className="
            fixed left-1/2 -translate-x-1/2 top-[70px] md:top-[76px]
            w-[90vw] max-w-[1150px]
            bg-white shadow-2xl z-50
            flex flex-col md:flex-row
            overflow-hidden
          "
        >
          {/* Left: links, much wider than the right column */}
          <div className="flex-1 px-10 py-12 md:px-20 md:py-16">
            <h3 className="text-2xl md:text-[32px] font-bold text-gray-900 mb-10">
              Insights
            </h3>

            <div className="flex flex-row flex-wrap gap-8">
              {links.map((title) => (
                <a
                  key={title}
                  href="#"
                  className="text-lg md:text-xl text-gray-500 hover:text-[#8a1538] transition-colors whitespace-nowrap"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* Right: narrow stacked promo cards with background images */}
          <div className="w-full md:w-[300px] flex flex-col shrink-0">
            {promoCards.map((card) => (
              <a
                key={card.label}
                href="#"
                className="relative h-[220px] md:h-[300px] overflow-hidden group bg-gradient-to-br from-[#0a0e14] via-[#141a24] to-[#1a1015]"
              >
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  <span className="text-white/80 text-[11px] font-semibold tracking-wider uppercase">
                    {card.label}
                  </span>

                  {card.heading && (
                    <h4 className="text-white text-base md:text-lg font-semibold leading-snug">
                      {card.heading}
                    </h4>
                  )}

                  <span className="text-white text-xs md:text-sm font-semibold tracking-wide uppercase inline-flex items-center gap-2">
                    {card.cta} <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavInsights;