import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SoftwareDevelopmentHero() {
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
      href: "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20software%20development%20solutions.",
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
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0b0b0b]
        min-h-[560px]
        sm:min-h-[580px]
        md:min-h-[540px]
        lg:h-[500px]
        lg:min-h-0
      "
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/Slide3.1.png"
        alt="Software Development"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[65%_center]
          sm:object-[60%_center]
          md:object-[55%_center]
          lg:object-[52%_center]
          xl:object-center
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/95
          via-black/80
          to-black/35
          sm:from-black/95
          sm:via-black/75
          sm:to-black/20
          md:from-black/95
          md:via-black/70
          md:to-transparent
          lg:from-black/95
          lg:via-black/70
          lg:to-transparent
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          items-center
          min-h-[560px]
          px-4
          py-14
          sm:min-h-[580px]
          sm:px-6
          sm:py-16
          md:min-h-[540px]
          md:px-10
          md:py-14
          lg:h-full
          lg:min-h-0
          lg:px-[100px]
          lg:py-10
        "
      >
        <div
          className="
            w-full
            max-w-[560px]
            text-white
            sm:max-w-[580px]
            md:max-w-[540px]
            lg:max-w-[520px]
          "
        >
          {/* EYEBROW */}
          <p
            className="
              mb-4
              font-['Plus_Jakarta_Sans']
              text-[11px]
              font-semibold
              tracking-[0.7px]
              min-[400px]:text-[12px]
              sm:mb-5
              sm:text-[13px]
              md:text-[14px]
              lg:mb-5
              lg:text-[13px]
            "
          >
            SOFTWARE DEVELOPMENT
          </p>

          {/* HEADING */}
          <h1
            className="
              mb-5
              font-['Plus_Jakarta_Sans']
              text-[34px]
              font-medium
              leading-[1.08]
              tracking-[-0.8px]
              min-[400px]:text-[34px]
              sm:text-[34px]
              sm:tracking-[-1px]
              md:text-[36px]
              lg:mb-6
              lg:text-[38px]
              xl:text-[38px]
            "
          >
            Software Built
            <br />
            Around Your Business
          </h1>

          {/* DESCRIPTION */}
          <div
            className="
              max-w-[520px]
              font-['Inter']
              text-[14px]
              font-normal
              leading-[1.6]
              text-white/95
              sm:text-[15px]
              sm:leading-[1.65]
              md:max-w-[500px]
              md:text-[16px]
              lg:text-[15px]
              lg:leading-[1.5]
            "
          >
            <p>
              Your business has its own way of working. Your software should
              support that—not force you to work around it.
            </p>

            <p
              className="
                mt-4
                sm:mt-5
                md:mt-5
                lg:mt-5
              "
            >
              At TechTorch, we build software around your processes, your
              people and your business goals. From new applications to
              modernizing existing systems, we create practical digital
              solutions that solve real business needs and are built to grow
              with you.
            </p>
          </div>

          {/* BUTTON + CONTACT ICONS */}
          <div className="mt-7 sm:mt-8 md:mt-8 lg:mt-8">
            <div
              ref={contactRef}
              className="relative inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* TALK TO EXPERTS BUTTON */}
              <Link
                to="/talk-to-expert"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[3px]
                  bg-[#730042]
                  px-5
                  py-[10px]
                  font-['Inter']
                  text-[13px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-[#730042]
                  sm:px-6
                  sm:py-[11px]
                  sm:text-[15px]
                  lg:px-5
                  lg:py-[10px]
                "
              >
                <span>Talk To Experts</span>

                <ArrowUpRight
                  size={17}
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

              {/* CONTACT ICONS */}
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
      </div>
    </section>
  );
}