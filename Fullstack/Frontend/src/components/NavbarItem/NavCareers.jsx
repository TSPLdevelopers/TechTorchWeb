import { useState, useRef, useEffect, useCallback } from "react";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";

const links = ["The TechTorch Way", "Culture & Inclusion", "Join Us"];

const CLOSE_DELAY = 150;

function NavCareers() {
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
      {/* NAV LABEL */}
      <span
        className={`relative inline-flex items-center h-full cursor-pointer text-[17px]
          transition-colors duration-200
          ${isOpen ? "text-[#8a1538]" : "text-gray-900"}
          after:absolute after:left-0 after:bottom-0 after:h-[2px]
          after:bg-[#8a1538] after:transition-all after:duration-200
          ${isOpen ? "after:w-full" : "after:w-0"}`}
      >
        Careers
      </span>

      {/* CAREERS MEGA MENU */}
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

          {/* CONTENT */}
          <div className="px-[11%] pt-[65px] flex gap-[120px]">
            {/* CAREERS HEADING */}
            <h3 className="text-[30px] font-bold font-plus-jakarta text-gray-900">
              Careers
            </h3>

            {/* SUBHEADINGS */}
            <div className="flex flex-col gap-[22px] pt-2">
              {links.map((title) => (
                <a
                  key={title}
                  href="#"
                  className="text-[20px] text-gray-800 font-inter
                    hover:text-[#8a1538]
                    transition-colors duration-200"
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
                src={image4}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 p-5 flex flex-col text-white">
                <span className="text-[16px] font-plus-jakarta">
                  Featured Story
                </span>

                <div className="mt-[65px]">
                  <h2 className="text-[18px] font-medium font-plus-jakarta">
                    Life & Culture at TechTorch
                  </h2>

                  <p className="text-[16px] font-inter mt-[20px] max-w-[330px]">
                    Discover our people, culture and the
                    <br />
                    values that shape the way we work
                    <br />
                    and grow together.
                  </p>
                </div>

                <a
                  href="#"
                  className="mt-[10px] text-[16px] font-bold font-inter text-white hover:text-gray-300 transition-colors"
                >
                  READ MORE
                </a>
              </div>
            </div>

            {/* BOTTOM IMAGE */}
            <div className="relative w-full h-1/2 overflow-hidden">
              <img
                src={image5}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 p-5 flex flex-col text-white">
                <span className="text-[16px] font-plus-jakarta">
                  Featured Story
                </span>

                <div className="mt-[65px]">
                  <h2 className="text-[18px] font-medium font-plus-jakarta">
                    Opportunities at TechTorch
                  </h2>

                  <p className="text-[16px] font-inter mt-[20px] max-w-[330px]">
                    Explore opportunities to learn, contribute
                    <br />
                    and build your career with a growing
                    <br />
                    technology company.
                  </p>
                </div>

                <a
                  href="#"
                  className="mt-[10px] text-[16px] font-bold font-inter text-white hover:text-gray-300 transition-colors"
                >
                  READ MORE
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default NavCareers;