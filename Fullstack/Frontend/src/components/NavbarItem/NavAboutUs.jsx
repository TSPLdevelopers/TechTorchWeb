
import { Link } from "react-router-dom";
import { routeFor } from "./navRoutes";
import { useState, useRef, useEffect, useCallback } from "react";
import megaMenuImage from "../../assets/image1.png";

const primaryLinks = ["Company Overview"];

const secondaryLinks = [
  "Leadership",
  "Idea",
  "Investors",
  "Partners Ecosystem",
];

const boldLinks = ["News"];

const CLOSE_DELAY = 150;

function NavAboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBottom, setNavBottom] = useState(0);

  const wrapperRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (!wrapperRef.current) return;

      const navEl =
        wrapperRef.current.closest("header, nav") ||
        wrapperRef.current;

      setNavBottom(navEl.getBoundingClientRect().bottom);
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [isOpen]);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();

    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      closeTimeoutRef.current = null;
    }, CLOSE_DELAY);
  }, [cancelClose]);

  const handleOpen = useCallback(() => {
    cancelClose();
    setIsOpen(true);
  }, [cancelClose]);

  const handleLinkClick = () => {
    cancelClose();
    setIsOpen(false);
  };

  const getLinkPath = (title) => {
    if (title === "Leadership") {
      return "/leadership";
    }

    return routeFor(title);
  };

  useEffect(() => {
    return () => cancelClose();
  }, [cancelClose]);

  return (
    <div
      ref={wrapperRef}
      className="relative h-full"
      onMouseEnter={handleOpen}
      onMouseLeave={scheduleClose}
    >
      {/* NAVIGATION TITLE */}
      <span
        className="relative inline-flex items-center h-full cursor-pointer text-[17px] text-gray-900 hover:text-[#8a1538] transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#8a1538] after:transition-all after:duration-200 hover:after:w-full"
      >
        About Us
      </span>

      {/* MEGA MENU */}
      {isOpen && (
        <div
          style={{ top: navBottom }}
          onMouseEnter={handleOpen}
          onMouseLeave={scheduleClose}
          className="fixed left-0 right-0 w-full h-[78vh] min-h-[420px] max-h-[620px] bg-white shadow-2xl z-[9999] overflow-y-auto"
        >
          <div className="h-px bg-gray-100 mx-[5px]" />

          <div className="px-[11%] pt-[65px] flex gap-[120px]">
            <h3 className="text-[25px] font-semibold text-gray-900 font-plus-jakarta whitespace-nowrap">
              About Us
            </h3>

            <div className="flex flex-col gap-[22px] pt-2">
              {/* PRIMARY LINKS */}
              {primaryLinks.map((title) => (
                <Link
                  key={title}
                  to={getLinkPath(title)}
                  onClick={handleLinkClick}
                  className="text-[16px] md:text-[18px] font-semibold hover:text-[#8a1538] text-gray-900 font-plus-jakarta leading-[1.3]"
                >
                  {title}
                </Link>
              ))}

              {/* SECONDARY LINKS */}
              {secondaryLinks.map((title) => (
                <Link
                  key={title}
                  to={getLinkPath(title)}
                  onClick={handleLinkClick}
                  className="text-[15px] md:text-[15px] text-gray-800 font-inter leading-[1.35] hover:text-[#8a1538] transition-colors duration-200"
                >
                  {title}
                </Link>
              ))}

              {/* BOLD LINKS */}
              <div className="flex flex-col gap-[22px] mt-[25px]">
                {boldLinks.map((title) => (
                  <Link
                    key={title}
                    to={getLinkPath(title)}
                    onClick={handleLinkClick}
                    className="text-[16px] md:text-[18px] font-semibold hover:text-[#8a1538] text-gray-900 font-plus-jakarta leading-[1.3]"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="absolute top-0 right-[20px] h-full w-[27%]">
            <img
              src={megaMenuImage}
              alt="Business technology"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div className="mt-8">
                <h2 className="text-[18px] font-bold font-plus-jakarta">
                  AI That Works for
                  <br />
                  Your Business
                </h2>

                <div className="w-[255px] h-[2px] bg-white mt-2" />
              </div>

              <Link
                to="/leadership"
                onClick={handleLinkClick}
                className="text-[16px] font-bold font-inter text-white mb-8"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavAboutUs;
