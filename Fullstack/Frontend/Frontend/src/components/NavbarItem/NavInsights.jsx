import { useState, useRef, useEffect, useCallback } from "react";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const links = [
  "Case Studies",
  "Media",
  "Company Profile",
  "Quick Brochure",
];

const CLOSE_DELAY = 150;

function NavInsights() {
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
      <span
        className="relative inline-flex items-center h-full cursor-pointer text-[17px] 
        text-gray-900 hover:text-[#8a1538] 
        transition-colors duration-200 
        after:absolute after:left-0 after:bottom-0 
        after:h-[2px] after:w-0 
        after:bg-[#8a1538] 
        after:transition-all after:duration-200 
        hover:after:w-full"
      >
        Insights
      </span>

      {isOpen && (
        <div
          style={{ top: navBottom }}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          className="fixed left-0 right-0 w-full 
          h-[78vh] min-h-[420px] max-h-[620px] 
          bg-white shadow-2xl z-[9999] overflow-y-auto"
        >
          <div className="h-px bg-gray-100 mx-[5px]" />

          {/* LEFT CONTENT */}
          <div className="px-[11%] pt-[65px]">
            <h3 className="text-[30px] font-bold text-gray-900 font-plus-jakarta mb-[32px]">
              Insights
            </h3>

            <div className="flex flex-col gap-[22px]">
              {links.map((title) => (
                <a
                  key={title}
                  href="#"
                  className="text-[20px] text-gray-800 font-inter hover:text-[#8a1538] transition-colors duration-200"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="absolute top-0 right-[20px] h-full w-[27%] flex flex-col">

            {/* TOP IMAGE */}
            <div className="relative w-full h-1/2 overflow-hidden">
              <img
                src={image3}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                <span className="text-[16px] font-plus-jakarta">
                  LATEST UPDATE
                </span>

                <div>
                  <p className="text-[16px] font-inter  ">
                    TorchX Suite: Bringing
                    <br />
                    Business Operations
                    <br />
                    Together
                  </p>

                  <a
                    href="#"
                    className="inline-block mt-[20px] text-[16px] font-bold font-inter text-white hover:text-gray-300 transition-colors"
                  >
                    READ MORE →
                  </a>
                </div>
              </div>
            </div>

            {/* BOTTOM IMAGE */}
            <div className="relative w-full h-1/2 overflow-hidden">
              <img
                src={image2}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                <span className="text-[16px] font-plus-jakarta">
                  UPCOMING EVENT
                </span>

                <a
                  href="#"
                  className="text-[16px] font-inter text-white hover:text-gray-300 transition-colors"
                >
                  VIEW EVENT →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavInsights;