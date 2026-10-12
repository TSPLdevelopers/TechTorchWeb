import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
  X,
} from "lucide-react";

export default function TechHero() {
  const [showOptions, setShowOptions] = useState(false);
  const contactRef = useRef(null);

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
    };
  }, []);

  return (
    <div className="relative w-full min-h-[550px] overflow-hidden bg-[#0a1128] font-['Plus_Jakarta_Sans']">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/slide1.1.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,20,0.85) 0%, rgba(10,10,20,0.55) 42%, rgba(10,10,20,0.15) 65%, rgba(10,10,20,0) 100%)",
        }}
      />

      {/* HERO CONTENT */}
      <div
        className="
          relative z-10
          flex min-h-[450px]
          flex-col justify-center
          max-w-2xl
          px-4 sm:px-6 md:px-10 lg:px-[100px]
        "
      >
        {/* HEADING */}
        <h1
          className="
            text-white
            font-['Plus_Jakarta_Sans']
            font-semibold
            leading-[1.09]
            text-[34px] sm:text-[34px] md:text-[36px]
            tracking-tight
            translate-y-8
            whitespace-nowrap
          "
        >
          Technology Solutions Built
          <br />
          Around Your Business
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-20
            text-white/85
            font-['Inter']
            text-[15px] sm:text-[16px]
            leading-relaxed
            max-w-md
          "
        >
          Every business has its own challenges, priorities and goals. We
          bring together technology, expertise and practical thinking to
          create solutions that fit the way your business works.
        </p>

        {/* BUTTON AND SIDE OPTIONS */}
        <div
          ref={contactRef}
          className="relative mt-20 flex w-fit items-center gap-3"
        >
          {/* TALK TO OUR EXPERTS BUTTON */}
          <button
            type="button"
            onClick={() => setShowOptions((prev) => !prev)}
            aria-expanded={showOptions}
            aria-haspopup="dialog"
            className="
              group flex shrink-0 items-center gap-3
              border border-white/70
              px-4 py-2
              text-[14px] font-medium tracking-wide text-white
              transition-all duration-300
              hover:border-[#730042]
              hover:bg-[#730042]
            "
          >
            Talk to Our Experts

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              {showOptions ? <X size={16} /> : <ArrowUpRight size={16} />}
            </span>
          </button>

          {/* CONTACT OPTIONS BESIDE BUTTON */}
          {showOptions && (
            <div
              role="dialog"
              aria-label="Contact options"
              className="
                flex items-center gap-2
                animate-[contactReveal_250ms_ease-out]
              "
            >
              {/* CALL */}
              <a
                href="tel:+915813500381"
                aria-label="Call us"
                title="Call Us"
                onClick={() => setShowOptions(false)}
                className="
                  group flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-full border border-white/30
                  bg-[#0a1128]/80 text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-[#730042]
                  hover:bg-[#730042]
                  hover:scale-110
                "
              >
                <Phone size={18} />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20technology%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                title="WhatsApp"
                onClick={() => setShowOptions(false)}
                className="
                  group flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-full border border-white/30
                  bg-[#0a1128]/80 text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-[#730042]
                  hover:bg-[#730042]
                  hover:scale-110
                "
              >
                <MessageCircle size={19} />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:contact@techtorch.solutions"
                aria-label="Email us"
                title="Email Us"
                onClick={() => setShowOptions(false)}
                className="
                  group flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-full border border-white/30
                  bg-[#0a1128]/80 text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-[#730042]
                  hover:bg-[#730042]
                  hover:scale-110
                "
              >
                <Mail size={19} />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes contactReveal {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[contactReveal_250ms_ease-out\\] {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}