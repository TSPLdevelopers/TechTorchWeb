import React, { useState, useRef, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PurpleHero() {
  const [showOptions, setShowOptions] = useState(false);
  const contactRef = useRef(null);
  const hideTimeout = useRef(null);

  const navigate = useNavigate();

  // Show contact icons and cancel pending hide
  const handleMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }

    setShowOptions(true);
  };

  // Hide icons after a short delay
  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowOptions(false);
    }, 500);
  };

  // Close icons on outside click or Escape
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);

      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []);

  // Navigate to Talk to Expert page
  const handleTalkToExpert = () => {
    navigate("/talk-to-expert");
  };

  return (
    <section className="relative w-full h-[535px] overflow-hidden bg-[#18001f]">
      <img
        src="/slide1.2.png"
        alt="Technology future"
        className="absolute inset-0 w-full h-full object-fill"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(24,0,31,0.82) 0%, rgba(24,0,31,0.60) 38%, rgba(24,0,31,0.20) 68%, rgba(24,0,31,0.05) 100%)",
        }}
      />

      <div className="relative z-10 min-h-[600px] w-full flex items-center">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[100px]">
          <div className="max-w-[600px] text-white">
            <h1 className="font-['Plus_Jakarta_Sans'] font-semibold text-[30px] sm:text-[34px] md:text-[34px] lg:text-[36px] leading-[1.08] tracking-tight -translate-y-10">
              Let’s Turn Your Next
              <br />
              Challenge Into an
              <br />
              Opportunity
            </h1>

            <p className="relative -top-4 mt-7 max-w-[540px] font-['Inter'] text-[15px] sm:text-[16px] md:text-[16px] lg:text-[16px] leading-[1.4] text-white/85">
              Whether you're looking to modernize,
              <br />
              automate, build or scale, let's explore what the right technology
              <br />
              approach could look like for your business.
            </p>

            {/* Talk to Our Experts Button + Contact Icons */}
            <div
              ref={contactRef}
              className="relative -top-6 mt-24 inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={handleTalkToExpert}
                className="group inline-flex items-center gap-2 border border-white/80 px-4 py-2 text-[14px] font-medium text-white transition duration-300 hover:bg-white hover:text-[#18001f]"
                aria-label="Talk to Our Experts"
              >
                Talk to Our Experts

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              {/* Contact Icons */}
              {showOptions && (
                <div
                  className="absolute left-full top-1/2 ml-2 flex -translate-y-1/2 items-center gap-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Call */}
                  <a
                    href="tel:+915813500381"
                    aria-label="Call us"
                    title="Call us"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-[#18001f] text-white transition duration-300 hover:border-[#730042] hover:bg-[#730042]"
                  >
                    <Phone size={18} />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20technology%20solutions."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    title="WhatsApp"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-[#18001f] text-white transition duration-300 hover:border-[#730042] hover:bg-[#730042]"
                  >
                    <MessageCircle size={18} />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:contact@techtorch.solutions"
                    aria-label="Email us"
                    title="Email us"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-[#18001f] text-white transition duration-300 hover:border-[#730042] hover:bg-[#730042]"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}