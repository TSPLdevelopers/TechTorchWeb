import { useState, useRef, useEffect, useCallback } from "react";

const industries = [
  "Finance",
  "Education",
  "Healthcare",
  "Manufacturing",
  "Information Technology",
  "Insurance",
  "Energy",
  "FMCG",
  "Transportation",
  "Telecommunications",
];

const CLOSE_DELAY = 150;

function NavIndustries() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBottom, setNavBottom] = useState(0);

  const ref = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;

      const nav =
        ref.current.closest("header, nav") || ref.current;

      setNavBottom(nav.getBoundingClientRect().bottom);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
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
      ref={ref}
      className="relative h-full"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <span
        className={`relative inline-flex items-center h-full cursor-pointer
          text-[17px] transition-colors
          ${isOpen ? "text-[#8a1538]" : "text-gray-900"}
          after:absolute after:left-0 after:bottom-0 after:h-[2px]
          after:bg-[#8a1538] after:transition-all
          ${isOpen ? "after:w-full" : "after:w-0"}`}
      >
        Industries
      </span>

      {isOpen && (
        <div
          style={{ top: navBottom - 1 }}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          className="fixed left-0 w-full h-[78vh] min-h-[420px] max-h-[620px]
            bg-white shadow-2xl z-[9999] overflow-y-auto"
        >
          <div className="h-px bg-gray-200" />

          <div className="px-[11%] pt-[65px]">
            <h3 className="text-[30px] font-bold font-plus-jakarta mb-10">
              Industries
            </h3>

            <div className="grid grid-cols-2 gap-x-[120px] gap-y-[22px] max-w-[700px]">
              {industries.map((industry) => (
                <a
                  key={industry}
                  href="#"
                  className="text-[20px] text-gray-800 font-inter
                    hover:text-[#8a1538] transition-colors"
                >
                  {industry}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavIndustries;