import { useState, useRef, useEffect, useCallback } from "react";
import Navbarcap from "../../assets/Navbarcap.png";

const columns = [
  {
    heading: "Digital Solutions",
    items: [
      "ERP",
      "Operations Management",
      "Supply Chain Management",
      "Aviation Management",
      "People Management",
      "Web Portals",
      "Financial Management",
      "Payment Management",
      "Healthcare & Hospital Management",
      "CRM",
      "Ecommerce",
      "Project Management",
    ],
  },
  {
    heading: "IT Augmentation Service",
    sections: [
      {
        subheading: "Our Services",
        items: [
          "IT Consultancy",
          "Artificial Intelligence (AaaS)",
          "Cloud Infrastructure Services (IaaS)",
          "Cyber Security",
          "Software Engineering Outsourcing",
          "Business process Outsourcing",
          "Software Development & Support",
          "Resource and Staffing",
        ],
      },
      {
        subheading: "Platforms",
        items: ["TorchX Suite", "TorchX Campus"],
      },
    ],
  },
];

const CLOSE_DELAY = 150;

function NavCapabilities() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBottom, setNavBottom] = useState(0);

  const wrapperRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (!wrapperRef.current) return;

      const navEl =
        wrapperRef.current.closest("header, nav") || wrapperRef.current;

      setNavBottom(navEl.getBoundingClientRect().bottom);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, [isOpen]);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    cancelClose();
    setIsOpen(true);
  }, [cancelClose]);

  const closeMenu = useCallback(() => {
    cancelClose();

    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      closeTimeoutRef.current = null;
    }, CLOSE_DELAY);
  }, [cancelClose]);

  useEffect(() => {
    return () => cancelClose();
  }, [cancelClose]);

  return (
    <div
      ref={wrapperRef}
      className="relative h-full"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      {/* ================= NAV LINK ================= */}
      <span
        className="
          relative inline-flex items-center h-full cursor-pointer
          text-[17px] text-gray-900
          hover:text-[#8a1538]
          transition-colors duration-200
          after:absolute after:left-0 after:bottom-0
          after:h-[2px] after:w-0
          after:bg-[#8a1538]
          after:transition-all after:duration-200
          hover:after:w-full
        "
      >
        Capabilities
      </span>

      {/* ================= MEGA MENU ================= */}
      {isOpen && (
        <div
          style={{
            top: navBottom,
          }}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          className="
            fixed
            left-0
            right-0
            w-full
            bg-white
            shadow-2xl
            z-[9999]
            overflow-y-auto
          "
        >
          {/* ================= BACKGROUND IMAGE ================= */}
          <img
            src={Navbarcap}
            alt=""
            className="
              absolute
              top-0
              left-0
              w-full
             h-[650px]
              pointer-events-none
              select-none
               opacity-35
            "
          />

          {/* ================= MENU CONTENT ================= */}
          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              md:grid-cols-2
              gap-10
              md:gap-20
              px-[11%]
              py-10
              md:py-14
            "
          >
            {columns.map((col) => (
              <div
                key={col.heading}
                className="flex flex-col gap-3"
              >
                {/* MAIN HEADING */}
                <h3
                  className="
                    text-xl
                    md:text-2xl
                    font-bold
                    text-gray-900
                    font-plus-jakarta
                    mb-2
                  "
                >
                  {col.heading}
                </h3>

                {/* NORMAL ITEMS */}
                {col.items &&
                  col.items.map((title) => (
                    <a
                      key={title}
                      href="#"
                      className="
                        text-base
                        md:text-lg
                        text-gray-800
                        font-inter
                        hover:text-[#8a1538]
                        transition-colors
                      "
                    >
                      {title}
                    </a>
                  ))}

                {/* SECTIONS */}
                {col.sections &&
                  col.sections.map((section, idx) => (
                    <div
                      key={section.subheading}
                      className={`flex flex-col gap-3 ${
                        idx > 0 ? "mt-4" : ""
                      }`}
                    >
                      {/* SUB HEADING */}
                      <h4
                        className="
                          text-lg
                          md:text-xl
                          font-bold
                          text-gray-900
                          font-plus-jakarta
                        "
                      >
                        {section.subheading}
                      </h4>

                      {/* SECTION ITEMS */}
                      {section.items.map((title) => (
                        <a
                          key={title}
                          href="#"
                          className="
                            text-base
                            md:text-lg
                            text-gray-800
                            font-inter
                            hover:text-[#8a1538]
                            transition-colors
                          "
                        >
                          {title}
                        </a>
                      ))}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavCapabilities;