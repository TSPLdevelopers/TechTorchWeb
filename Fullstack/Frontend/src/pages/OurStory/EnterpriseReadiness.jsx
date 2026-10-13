import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const BG_IMAGE = "/Enterprise.png";

export default function EnterpriseHero() {
  const [showOptions, setShowOptions] = useState(false);
  const contactRef = useRef(null);
  const hideTimeout = useRef(null);

  // Show icons and cancel pending hide
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
    }, 400);
  };

  // Close options on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
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

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);

      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []);

  const contactOptions = [
    {
      label: "Call Us",
      Icon: Phone,
      href: "tel:+915813500381",
    },
    {
      label: "WhatsApp",
      Icon: MessageCircle,
      href: "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20enterprise%20technology%20solutions.",
      external: true,
    },
    {
      label: "Email Us",
      Icon: Mail,
      href: "mailto:contact@techtorch.solutions",
    },
  ];

  return (
    <section
      className="w-full bg-black font-inter"
      style={{ minHeight: "420px" }}
    >
      <div
        className="
          relative
          w-full
          min-h-[420px]
          sm:min-h-[460px]
          md:min-h-[500px]
          flex
          items-center
          overflow-hidden
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(10,10,20,0.98) 0%,
              rgba(10,10,20,0.90) 35%,
              rgba(10,10,20,0.55) 65%,
              rgba(10,10,20,0.20) 100%
            ),
            url(${BG_IMAGE})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="
            w-full
            max-w-3xl
            px-6
            sm:px-10
            md:px-14
            lg:px-20
            py-14
            sm:py-16
            md:py-20
          "
        >
          {/* Small Heading */}
          <p className="text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.14em] font-semibold text-white mb-4 sm:mb-5 -mt-1 sm:-mt-3">
            Enterprise Readiness
          </p>

          {/* Main Heading */}
          <h1
            className="
              font-plus-jakarta
              text-white
              font-bold
              leading-[1.08]
              text-[30px]
              sm:text-[38px]
              md:text-[42px]
              lg:text-[46px]
              mb-4
              sm:mb-5
              md:mb-6
            "
          >
            Architecting the Future of
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Enterprise Technology
          </h1>

          {/* Description */}
          <p
            className="
              text-white/80
              text-[13px]
              sm:text-sm
              md:text-base
              leading-relaxed
              max-w-xl
              mb-6
              sm:mb-8
              font-inter
            "
          >
            We build digital foundations engineered for scale at speed.
            Bridging deep technical infrastructure with strategic executive
            clarity to deliver unshakeable performance.
          </p>

          {/* Button + Contact Icons */}
          <div
            ref={contactRef}
            className="relative inline-block mt-2 sm:mt-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Talk To Experts Button */}
            <Link
              to="/talk-to-expert"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                sm:px-6
                py-3
                text-[13px]
                sm:text-sm
                font-semibold
                text-white
                rounded-sm
                border
                border-[#730042]
                bg-[#730042]
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#730042]
                hover:border-white
                hover:scale-[1.02]
                whitespace-nowrap
              "
            >
              Talk To Experts

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

            {/* Contact Icons — button position remains unchanged */}
            <div
              className={`
                absolute
                left-full
                top-1/2
                ml-2
                flex
                -translate-y-1/2
                items-center
                gap-2
                transition-all
                duration-300
                ${
                  showOptions
                    ? "visible opacity-100"
                    : "invisible opacity-0 pointer-events-none"
                }
              `}
              aria-hidden={!showOptions}
            >
              {contactOptions.map(
                ({ label, Icon, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    title={label}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={
                      external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    tabIndex={showOptions ? 0 : -1}
                    onClick={() => setShowOptions(false)}
                    className="
                      flex
                      h-10
                      w-10
                      sm:h-11
                      sm:w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/50
                      bg-black/80
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:border-[#730042]
                      hover:bg-[#730042]
                    "
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}