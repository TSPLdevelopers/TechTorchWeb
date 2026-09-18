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

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
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
          relative
          inline-flex
          items-center
          h-full
          cursor-pointer
          text-[17px]
          text-gray-900
          hover:text-[#8a1538]
          transition-colors
          duration-200
          after:absolute
          after:left-0
          after:bottom-0
          after:h-[2px]
          after:w-0
          after:bg-[#8a1538]
          after:transition-all
          after:duration-200
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
            max-h-[calc(100vh-70px)]
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
              opacity-30
              object-cover
            "
          />

          {/* ================= MENU CONTENT ================= */}

          <div
            className="
              relative
              z-10
              px-[11%]
              pt-7
              pb-10
              md:pt-9
              md:pb-14
            "
          >
            {/* ================= MAIN HEADINGS ================= */}

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
                md:gap-20
                mb-6
              "
            >
              {/* IT CAPABILITIES */}

              <h2
                className="
                  text-[22px]
                  md:text-[25px]
                  font-bold
                  text-gray-900
                  font-plus-jakarta
                  text-left
                  m-0
                  leading-[1.2]
                "
              >
                IT Capabilities
              </h2>

              {/* AI CAPABILITIES */}

              <h2
                className="
                  text-[22px]
                  md:text-[25px]
                  font-bold
                  text-gray-900
                  font-plus-jakarta
                  text-right
                  md:text-right
                  m-0
                  leading-[1.2]
                "
              >
                AI Capabilities
              </h2>
            </div>

            {/* ================= CAPABILITIES CONTENT ================= */}

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-10
                md:gap-20
              "
            >
              {/* ================= IT CAPABILITIES ================= */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-8
                  items-start
                "
              >
                {/* ================= DIGITAL SOLUTIONS ================= */}

                <div className="flex flex-col gap-3">
                  <h3
                    className="
                      text-[20px]
                      md:text-[20px]
                      font-semibold
                      text-gray-900
                      font-plus-jakarta
                      mb-2
                      leading-[1.25]
                    "
                  >
                    Digital Solutions
                  </h3>

                  {columns[0].items.map((title) => (
                    <a
                      key={title}
                      href="#"
                      className="
                        text-[15px]
                        md:text-[15px]
                        text-gray-800
                        font-inter
                        leading-[1.35]
                        hover:text-[#8a1538]
                        transition-colors
                        duration-200
                      "
                    >
                      {title}
                    </a>
                  ))}
                </div>

                {/* ================= IT AUGMENTATION ================= */}

                <div
                  className="
                    flex
                    flex-col
                    gap-3
                    ml-2
                    md:ml-4
                  "
                >
                  <h3
                    className="
                      text-[20px]
                      md:text-[20px]
                      font-semibold
                      text-gray-900
                      font-plus-jakarta
                      mb-2
                      leading-[1.25]
                    "
                  >
                    IT Augmentation Service
                  </h3>

                  {columns[1].sections.map((section, idx) => (
                    <div
                      key={section.subheading}
                      className={`
                        flex
                        flex-col
                        gap-3
                        ${idx > 0 ? "mt-3" : ""}
                      `}
                    >
                      {/* SUB HEADING */}

                      <h4
                        className="
                          text-[16px]
                          md:text-[18px]
                          font-semibold
                          text-gray-900
                          font-plus-jakarta
                          leading-[1.3]
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
                            text-[15px]
                            md:text-[15px]
                            text-gray-800
                            font-inter
                            leading-[1.35]
                            hover:text-[#8a1538]
                            transition-colors
                            duration-200
                          "
                        >
                          {title}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= AI CAPABILITIES ================= */}

              <div
                className="
                  flex
                  flex-col
                  items-end
                  text-right
                  min-h-[200px]
                "
              >
                {/* AI CAPABILITIES CONTENT CAN BE ADDED HERE */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavCapabilities;