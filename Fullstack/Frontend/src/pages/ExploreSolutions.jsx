import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

/* =====================================================================
   1) TECH HERO
===================================================================== */

export function TechHero() {
  const [showOptions, setShowOptions] = useState(false);

  const contactRef = useRef(null);
  const hideTimeout = useRef(null);

  // Show icons and cancel pending hide timer
  const handleMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }

    setShowOptions(true);
  };

  // Hide icons after a short delay
  const handleMouseLeave = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }

    hideTimeout.current = setTimeout(() => {
      setShowOptions(false);
      hideTimeout.current = null;
    }, 500);
  };

  // Close options on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target)
      ) {
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
          hideTimeout.current = null;
        }

        setShowOptions(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
          hideTimeout.current = null;
        }

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

  // Contact options
  const contactOptions = [
    {
      label: "Call Us",
      Icon: Phone,
      href: "tel:+915813500381",
    },
    {
      label: "WhatsApp",
      Icon: MessageCircle,
      href: "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20technology%20solutions.",
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
        min-h-[550px]
        overflow-hidden
        bg-[#0a1128]
        font-['Plus_Jakarta_Sans']
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/slide1.1.png')",
        }}
      />

      {/* ================= DARK OVERLAY ================= */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,20,0.85) 0%, rgba(10,10,20,0.55) 42%, rgba(10,10,20,0.15) 65%, rgba(10,10,20,0) 100%)",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[450px]
          flex-col
          justify-center
          max-w-2xl
          px-4
          sm:px-6
          md:px-10
          lg:px-[100px]
        "
      >
        {/* ================= HEADING ================= */}

        <h1
          className="
            text-white
            font-['Plus_Jakarta_Sans']
            font-semibold
            leading-[1.09]
            text-[34px]
            sm:text-[34px]
            md:text-[36px]
            tracking-tight
            translate-y-8
            whitespace-nowrap
          "
        >
          Technology Solutions Built
          <br />
          Around Your Business
        </h1>

        {/* ================= DESCRIPTION ================= */}

        <p
          className="
            mt-20
            text-white/85
            font-['Inter']
            text-[15px]
            sm:text-[16px]
            leading-relaxed
            max-w-md
          "
        >
          Every business has its own challenges, priorities and goals. We
          bring together technology, expertise and practical thinking to
          create solutions that fit the way your business works.
        </p>

        {/* ================= BUTTON + CONTACT ICONS ================= */}

        <div
          ref={contactRef}
          className="relative mt-20 w-fit"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* TALK TO OUR EXPERTS BUTTON */}

          <Link
            to="/talk-to-expert"
            onMouseEnter={handleMouseEnter}
            className="
              group
              inline-flex
              items-center
              gap-3
              border
              border-white/70
              text-white
              text-[14px]
              font-medium
              tracking-wide
              px-4
              py-2
              whitespace-nowrap
              hover:bg-white
              hover:text-[#0a1128]
              transition-colors
              duration-300
            "
          >
            Talk to Our Experts

            <ArrowUpRight
              size={16}
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>

          {/* ================= CONTACT ICONS ================= */}

          <div
            className={`
              absolute
              left-full
              top-1/2
              ml-1
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
            aria-label="Contact options"
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
                  rel={external ? "noopener noreferrer" : undefined}
                  tabIndex={showOptions ? 0 : -1}
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/50
                    bg-[#0a1128]/80
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-[#730042]
                    hover:bg-[#730042]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#730042]
                  "
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


/* =====================================================================
   2) WITH PURPOSE
===================================================================== */

export function WithPurpose() {
  return (
    <section className="w-full overflow-hidden bg-[#F8F7F0] text-[#191919]">
      <div
        className="
          w-full
          px-4
          py-9

          sm:px-6
          sm:py-10

          md:px-10
          md:py-11

          lg:px-[100px]
          lg:py-11
        "
      >
        {/* ================= TOP LABEL ================= */}

        <p
          className="
            font-['Plus_Jakarta_Sans']
            !text-[14px]
            font-bold
            uppercase
            leading-none
            tracking-[0.01em]
            text-[#252525]

            sm:text-[12px]
          "
        >
          OUR PERSPECTIVE
        </p>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            mt-6
            grid
            w-full
            grid-cols-1
            gap-y-10

            sm:gap-y-12

            md:grid-cols-[minmax(0,1fr)_200px_minmax(0,1fr)]
            md:gap-x-6
            md:gap-y-0

            lg:grid-cols-[minmax(0,1fr)_215px_minmax(0,1fr)]
            lg:gap-x-7

            xl:grid-cols-[minmax(0,1fr)_225px_minmax(0,1fr)]
            xl:gap-x-8
          "
        >
          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}

          <div
            className="
              min-w-0
              max-w-full
            "
          >
            {/* HEADING */}

            <h1
              className="
                font-['Plus_Jakarta_Sans']
                text-[25px]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]

                sm:text-[26px]
                md:text-[26px]
                lg:text-[28px]
              "
            >
              Building Technology
              <br />
              With Purpose
            </h1>

            {/* LEFT TEXT */}

            <div
              className="
                mt-7
                max-w-full
                break-words
                font-['Inter']
                text-[14px]
                font-normal
                leading-[1.38]
                text-[#303030]

                sm:text-[15px]
                md:text-[15px]
                lg:text-[15px]
                lg:leading-[1.36]
              "
            >
              <p>
                Technology is now a fundamental part of how businesses
                operate, serve customers and respond to change. But
                successful transformation is not simply about adopting
                the latest tools or technologies. It is about understanding
                what the business needs and finding the right way to address it.
              </p>

              <p className="mt-6">
                At TechTorch, we take a practical approach to technology.
                We begin by understanding the challenge, the existing
                environment and the outcome the business wants to achieve.
                From there, we bring together the right capabilities,
                expertise and technology to create solutions that work in the
                real world.
              </p>

              <p className="mt-6">
                Sometimes, that means building a new digital experience.
                Sometimes, it means modernizing an existing system,
                automating a repetitive process or introducing AI where it can
                create genuine value. In other situations, businesses need
                additional technology expertise to move an important project
                forward. The right solution depends on the problem, not the
                technology trend.
              </p>
            </div>
          </div>

          {/* =====================================================
              CENTER QUOTE CARD
          ===================================================== */}

          <div
            className="
              flex
              w-full
              min-w-0
              items-start
              justify-center
              mt-10

              md:mt-[92px]
              lg:mt-[96px]
            "
          >
            <div
              className="
                w-full
                max-w-[205px]
                rounded-[7px]
                border
                border-[#C9C9C9]
                bg-[#FBFAF4]
                px-5
                py-7

                sm:px-6
                sm:py-6

                md:px-5
                md:py-5
              "
            >
              {/* QUOTE ICON */}

              <div
                className="
                  relative
                  top-5
                  font-serif
                  text-[40px]
                  font-bold
                  leading-[0.55]
                  text-[#730042]
                "
              >
                “
              </div>

              {/* QUOTE TEXT */}

              <p
                className="
                  mt-5
                  font-['Inter']
                  text-[20px]
                  font-medium
                  leading-[1.65]
                  tracking-[-0.025em]
                  text-[#111111]

                  sm:text-[20px]
                "
              >
                Transformation
                <br />
                should be
                <br />
                purposeful, not
                <br />
                complicated.
              </p>

              {/* PURPLE LINE */}

              <div
                className="
                  relative
                  -top-2
                  mt-5
                  h-[3px]
                  w-[58px]
                  bg-[#730042]
                "
              />
            </div>
          </div>

          {/* =====================================================
              RIGHT COLUMN
          ===================================================== */}

          <div
            className="
              min-w-0
              max-w-full
              break-words
              font-['Inter']
              text-[14px]
              leading-[1.38]
              text-[#303030]

              sm:text-[15px]
              md:text-[15px]
              lg:text-[16px]
              lg:leading-[1.36]

              md:mt-2
              lg:mt-2
            "
          >
            <p>
              Our capabilities across digital solutions, AI and automation,
              technology services, IT augmentation, B.P.O services and
              platforms allow us to address different business needs while
              keeping the focus on one thing — creating measurable and
              sustainable value.
            </p>

            <p className="mt-6">
              We also recognise that meaningful change happens over time.
              A successful technology journey may begin with a single process,
              application or business challenge and grow from there. By taking
              a focused approach, businesses can make improvements that are
              easier to adopt, easier to measure and easier to scale.
            </p>

            <p className="mt-6">
              For us, good technology is not defined by how complex it is.
              It is defined by how effectively it solves a problem, supports
              people and helps a business move forward.
            </p>

            <p className="mt-6">
              That is the role we aim to play — helping businesses turn
              technology into practical progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


/* =====================================================================
   3) HOW WE WORK
===================================================================== */

const MAROON = "#8f1046";
const LINE_COLOR = "#8f1046";

const icons = {
  search: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={MAROON}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),

  clipboard: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={MAROON}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  ),

  code: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={MAROON}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),

  send: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={MAROON}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
  ),

  trend: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={MAROON}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
};

const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "We start by understanding your business, your challenges and what you want to achieve.",
    icon: icons.search,
  },
  {
    num: "02",
    title: "Define",
    desc: "We identify the right priorities and shape an approach around your specific needs.",
    icon: icons.clipboard,
  },
  {
    num: "03",
    title: "Build",
    desc: "We bring together the right technology and expertise to develop a solution that works.",
    icon: icons.code,
  },
  {
    num: "04",
    title: "Deliver",
    desc: "We focus on a smooth implementation with minimal disruption to your business.",
    icon: icons.send,
  },
  {
    num: "05",
    title: "Evolve",
    desc: "We continue to improve and scale the solution as your business needs change.",
    icon: icons.trend,
  },
];

export function HowWeWork() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setIsVisible(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`how-work-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="how-work-container">

        {/* =========================
            HEADER
        ========================== */}

        <p className="how-work-label">
          HOW WE WORK
        </p>

        <h2 className="how-work-heading">
          From Business Challenge to{" "}
          <span>Practical Solutions</span>
        </h2>

        <p className="how-work-description">
          A clear, collaborative approach focused on delivering solutions that
          create real and lasting value.
        </p>


        {/* =========================
            PROCESS
        ========================== */}

        <div className="process-wrapper">

          {/* =========================
              CONNECTING LINE
          ========================== */}

          <svg
            className="process-line"
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
          >
            <path
  className="process-path"
  pathLength="1"
  d="
    M 35 35
    H 450
    H 875
    H 1000
    V 260
    H 20
    V 325
    H 390
  "
  fill="none"
  stroke={LINE_COLOR}
  strokeWidth="2.5"
  strokeLinecap="round"
  strokeLinejoin="round"
/>
          </svg>


          {/* =========================
              STEP 01
          ========================== */}

          <Step
            step={steps[0]}
            className="step-1"
            delay="0s"
          />


          {/* =========================
              STEP 02
          ========================== */}

          <Step
            step={steps[1]}
            className="step-2"
            delay="0.45s"
          />


          {/* =========================
              STEP 03
          ========================== */}

          <Step
            step={steps[2]}
            className="step-3"
            delay="0.90s"
          />


          {/* =========================
              STEP 04
          ========================== */}

          <Step
            step={steps[3]}
            className="step-4"
            delay="1.35s"
          />


          {/* =========================
              STEP 05
          ========================== */}

          <Step
            step={steps[4]}
            className="step-5"
            delay="1.80s"
          />

        </div>
      </div>


      {/* =========================
          STYLES
      ========================== */}

      <style>{`

        /* =========================================
           MAIN SECTION
        ========================================== */

        .how-work-section {
          width: 100%;
          background: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          overflow: hidden;
        }


        .how-work-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 32px 70px;
          box-sizing: border-box;
        }


        /* =========================================
           HEADER
        ========================================== */

        .how-work-label {
          text-align: center;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #141414;
          margin: -15px 0 16px;
        }


        .how-work-heading {
          text-align: center;
          font-size: 28px;
          font-weight: 700;
          line-height: 1.25;
          color: #141414;
          margin: 0 0 16px;
        }


        .how-work-heading span {
          color: ${MAROON};
        }


        .how-work-description {
          text-align: center;
          font-size: 15px;
          font-weight: 400;
          color: #444444;
          line-height: 1.5;
          margin: 0 auto 56px;
          max-width: 850px;
        }


        /* =========================================
           PROCESS WRAPPER
        ========================================== */

        .process-wrapper {
          position: relative;
          width: 100%;
          height: 520px;
        }


        /* =========================================
           CONNECTING LINE
        ========================================== */

        .process-line {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          pointer-events: none;

          z-index: 1;

          overflow: visible;
        }


        .process-path {
          /*
            Line completely hidden initially.
          */

          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;

          transition:
            stroke-dashoffset 2.5s
            cubic-bezier(0.65, 0, 0.35, 1);

          transition-delay: 0.05s;
        }


        /*
          Line draws completely
          when section enters viewport.
        */

        .how-work-section.is-visible .process-path {
          stroke-dashoffset: 0;
        }


        /* =========================================
           PROCESS STEP
        ========================================== */

        .process-step {
          position: absolute;

          transform: translate(-50%, -50%);

          width: 235px;

          z-index: 2;

          font-family: "Inter", sans-serif;
        }


        /* =========================================
           DESKTOP POSITIONS
        ========================================== */

        .step-1 {
          left: 10%;
          top: 100px;
        }


        .step-2 {
          left: 50%;
          top: 100px;
        }


        .step-3 {
          left: 91%;
          top: 100px;
        }


        .step-4 {
          left: 10%;
          top: 400px;
        }


        /*
          Evolve is positioned at 46%.
          SVG endpoint is also aligned to
          this position.
        */

        .step-5 {
          left: 46%;
          top: 400px;
        }


        /* =========================================
           ICON CIRCLE
        ========================================== */

        .step-icon {
          width: 62px;
          height: 62px;

          border-radius: 50%;

          border: 1.8px solid ${MAROON};

          background: #ffffff;

          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;

          z-index: 3;

          opacity: 0;

          transform:
            translateY(30px)
            scale(0.55);

          transition:
            opacity 0.55s ease,
            transform 0.8s
              cubic-bezier(0.16, 1, 0.3, 1);

          transition-delay: var(--step-delay);

          will-change:
            transform,
            opacity;
        }


        .how-work-section.is-visible .step-icon {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);
        }


        /* =========================================
           INNER ICON
        ========================================== */

        .step-icon svg {
          opacity: 0;

          transform:
            scale(0.4)
            rotate(-15deg);

          transition:
            opacity 0.45s ease,
            transform 0.7s
              cubic-bezier(0.16, 1, 0.3, 1);

          transition-delay:
            calc(var(--step-delay) + 0.15s);

          will-change:
            transform,
            opacity;
        }


        .how-work-section.is-visible .step-icon svg {
          opacity: 1;

          transform:
            scale(1)
            rotate(0deg);
        }


        /* =========================================
           CONTENT
        ========================================== */

        .step-content {
          margin-top: 20px;

          opacity: 0;

          transform: translateY(22px);

          transition:
            opacity 0.6s ease,
            transform 0.7s
              cubic-bezier(0.16, 1, 0.3, 1);

          transition-delay:
            calc(var(--step-delay) + 0.15s);

          will-change:
            transform,
            opacity;
        }


        .how-work-section.is-visible .step-content {
          opacity: 1;

          transform: translateY(0);
        }


        /* =========================================
           TEXT
        ========================================== */

        .step-number {
          font-size: 15px;
          font-weight: 600;
          color: #141414;
          margin: 0 0 4px;
        }


        .step-title {
          font-size: 18px;
          font-weight: 700;
          color: ${MAROON};
          margin: 0 0 10px;
        }


        .step-description {
          font-size: 14px;
          color: #3a3a3a;
          line-height: 1.55;
          margin: 0;
          max-width: 215px;
        }


        /* =========================================
           TABLET
        ========================================== */

        @media (max-width: 1100px) {

          .how-work-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .process-step {
            width: 210px;
          }

          .step-description {
            max-width: 195px;
            font-size: 13.5px;
          }

          .step-1 {
            left: 10%;
          }

          .step-2 {
            left: 50%;
          }

          .step-3 {
            left: 90%;
          }

          .step-4 {
            left: 11%;
          }

          .step-5 {
            left: 46%;
          }
        }


        /* =========================================
           SMALL TABLET
        ========================================== */

        @media (max-width: 850px) {

          .how-work-container {
            padding: 48px 22px 60px;
          }

          .how-work-heading {
            font-size: 28px;
          }

          .how-work-description {
            font-size: 16px;
            margin-bottom: 45px;
          }

          .process-wrapper {
            height: 560px;
          }

          .process-step {
            width: 190px;
          }

          .step-icon {
            width: 58px;
            height: 58px;
          }

          .step-title {
            font-size: 17px;
          }

          .step-description {
            font-size: 13px;
            max-width: 180px;
          }

          .step-1 {
            left: 12%;
            top: 100px;
          }

          .step-2 {
            left: 50%;
            top: 100px;
          }

          .step-3 {
            left: 88%;
            top: 100px;
          }

          .step-4 {
            left: 20%;
            top: 420px;
          }

          .step-5 {
            left: 55%;
            top: 420px;
          }
        }


        /* =========================================
           MOBILE
        ========================================== */

        @media (max-width: 600px) {

          .how-work-container {
            padding: 38px 18px 50px;
          }

          .how-work-label {
            font-size: 11px;
            margin: 0 0 12px;
          }

          .how-work-heading {
            font-size: 24px;
            line-height: 1.25;
            margin-bottom: 12px;
          }

          .how-work-description {
            font-size: 14px;
            line-height: 1.55;
            max-width: 340px;
            margin-bottom: 35px;
          }

          .process-wrapper {
            height: auto;

            display: flex;
            flex-direction: column;

            gap: 38px;

            padding: 5px 0 5px 8px;
          }


          /*
            No connecting line on mobile.
          */

          .process-line {
            display: none;
          }


          .process-step {
            position: relative;

            left: auto !important;
            top: auto !important;

            transform: none;

            width: 100%;
            max-width: 420px;

            display: grid;

            grid-template-columns: 62px 1fr;

            column-gap: 18px;

            align-items: start;
          }


          .step-icon {
            width: 58px;
            height: 58px;

            grid-row: span 2;
          }


          .step-content {
            margin-top: 0;
            padding-top: 1px;
          }


          .step-number {
            font-size: 13px;
            margin-bottom: 3px;
          }


          .step-title {
            font-size: 18px;
            margin-bottom: 7px;
          }


          .step-description {
            font-size: 13.5px;
            line-height: 1.55;
            max-width: 100%;
          }
        }


        /* =========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 400px) {

          .how-work-container {
            padding-left: 15px;
            padding-right: 15px;
          }

          .how-work-heading {
            font-size: 22px;
          }

          .how-work-description {
            font-size: 13.5px;
          }

          .process-wrapper {
            gap: 32px;
            padding-left: 4px;
          }

          .process-step {
            grid-template-columns: 54px 1fr;
            column-gap: 15px;
          }

          .step-icon {
            width: 52px;
            height: 52px;
          }

          .step-icon svg {
            width: 21px;
            height: 21px;
          }

          .step-number {
            font-size: 12px;
          }

          .step-title {
            font-size: 17px;
          }

          .step-description {
            font-size: 13px;
          }
        }


        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {

          .process-path,
          .step-icon,
          .step-icon svg,
          .step-content {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }

      `}</style>
    </section>
  );
}


/* =========================================
   STEP COMPONENT
========================================= */

function Step({ step, className, delay }) {
  return (
    <div
      className={`process-step ${className}`}
      style={{
        "--step-delay": delay,
      }}
    >

      {/* ICON */}

      <div className="step-icon">
        {step.icon}
      </div>


      {/* CONTENT */}

      <div className="step-content">

        <p className="step-number">
          {step.num}
        </p>

        <p className="step-title">
          {step.title}
        </p>

        <p className="step-description">
          {step.desc}
        </p>

      </div>

    </div>
  );
}


/* =====================================================================
   4) PURPLE HERO
===================================================================== */

export function PurpleHero() {
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


/* =====================================================================
   MERGED PAGE — renders all four sections one after another
===================================================================== */

export default function MergedSections() {
  return (
    <>
      <TechHero />
      <WithPurpose />
      <HowWeWork />
      <PurpleHero />
    </>
  );
}