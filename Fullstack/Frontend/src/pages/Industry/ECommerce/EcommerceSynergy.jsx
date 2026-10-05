import React, { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  Truck,
  Landmark,
  Users,
  RefreshCw,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: ClipboardList,
    title: "ERP",
    body: "Connect e-commerce requirements with broader business processes.",
    footer: "SYNCHRONIZED DATA",
  },
  {
    icon: Truck,
    title: "Inventory & Supply Chain",
    body: "Bring product and inventory information closer to your wider business operations.",
    footer: "UNIFIED INVENTORY",
  },
  {
    icon: Landmark,
    title: "Financial Management",
    body: "Support financial processes related to business activities.",
    footer: "LEDGER ALIGNMENT",
  },
  {
    icon: Users,
    title: "CRM",
    body: "Manage customer information and relationships through connected systems.",
    footer: "CUSTOMER INSIGHTS",
  },
];

export default function EnterpriseSynergySection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#f7f5f2",
        color: INK,
      }}
      className="w-full overflow-hidden"
    >
      <div
        className="
          w-full
          max-w-[1320px]
          mx-auto
          px-4
          sm:px-6
          md:px-10
          lg:px-[100px]
          py-12
          sm:py-14
          md:py-16
          lg:py-20
        "
      >
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-10 md:mb-12">
          {/* Sub Heading */}
          <p
            className="
              text-[10px]
              sm:text-[11px]
              md:text-xs
              font-semibold
              tracking-[0.08em]
              mb-3
              font-['Plus_Jakarta_Sans']
            "
            style={{ color: WINE }}
          >
            ENTERPRISE SYNERGY
          </p>

          {/* Main Heading */}
          <h2
            className="
              font-['Plus_Jakarta_Sans']
              text-2xl
              sm:text-[1.65rem]
              md:text-[1.8rem]
              lg:text-[2rem]
              leading-[1.25]
              font-bold
              tracking-tight
              mb-4
            "
          >
            Connect E-Commerce With Your Business
          </h2>

          {/* Description */}
          <p
            className="
              text-sm
              sm:text-[14px]
              leading-7
              font-['Inter']
            "
            style={{ color: MUTED }}
          >
            E-commerce can work alongside other business functions such as
            inventory, finance, CRM and supply chain management. TechTorch's
            wider Digital Solutions portfolio includes ERP, Supply Chain
            Management, Financial Management, Payment Management, CRM, Web
            Portals and Project Management, providing a broader technology
            environment around online business requirements.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-5
            lg:gap-6
          "
        >
          {cards.map(({ icon: Icon, title, body, footer }, index) => (
            <div
              key={title}
              className={`
                group
                relative
                w-full
                min-h-[220px]
                bg-white
                rounded-xl
                p-5
                sm:p-6
                flex
                flex-col
                border
                border-transparent
                transition-all
                duration-500
                ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-90"
                }
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:shadow-[0_18px_35px_rgba(122,31,61,0.12)]
                hover:border-[#7A1F3D]/15
              `}
              style={{
                boxShadow: isVisible
                  ? "0 1px 3px rgba(0,0,0,0.05)"
                  : "none",
                transitionDelay: isVisible
                  ? `${index * 180}ms`
                  : "0ms",
              }}
            >
              {/* Icon */}
              <span
                className="
                  w-9
                  h-9
                  sm:w-10
                  sm:h-10
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  mb-4
                  shrink-0
                "
                style={{
                  background: "#fbeef1",
                  color: WINE,
                }}
              >
                <Icon size={16} strokeWidth={1.8} />
              </span>

              {/* Card Heading */}
              <h3
                className="
                  text-sm
                  sm:text-[14px]
                  font-semibold
                  mb-1.5
                  leading-snug
                  font-['Plus_Jakarta_Sans']
                "
              >
                {title}
              </h3>

              {/* Card Body */}
              <p
                className="
                  text-xs
                  sm:text-[13px]
                  leading-relaxed
                  mb-6
                  font-['Inter']
                "
                style={{ color: MUTED }}
              >
                {body}
              </p>

              {/* Footer */}
              <div className="mt-auto flex items-center gap-1.5">
                <span
                  className="
                    text-[9px]
                    sm:text-[10px]
                    font-semibold
                    tracking-wide
                    font-['Inter']
                  "
                  style={{ color: WINE }}
                >
                  {footer}
                </span>

                <RefreshCw
                  size={11}
                  strokeWidth={2}
                  style={{ color: WINE }}
                />
              </div>

              {/* Bottom Hover Line */}
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-full
                  origin-left
                  scale-x-0
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                "
                style={{ background: WINE }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reduced Motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        @media (hover: none) {
          .group:hover {
            transform: none;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          }
        }
      `}</style>
    </section>
  );
}