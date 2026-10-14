import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
  Component,
  Building2,
  Monitor,
  Smartphone,
  Box,
  Share2,
  ChevronLeft,
  ChevronRight,
  Search,
  ClipboardList,
  UserCog,
  Code2,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =====================================================================
   1) SOFTWARE DEVELOPMENT HERO
===================================================================== */

export function SoftwareDevelopmentHero() {
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


/* =====================================================================
   2) SOFTWARE THAT WORKS
===================================================================== */

export function SoftwareThatWorks() {
  return (
    <section
      className="software-works-section"
      style={{
        background: "#f7f4ef",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        overflow: "hidden",
      }}
    >
      <div className="software-works-container">
        <div className="software-works-grid">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="software-works-content">

            {/* HEADING */}

            <h1 className="software-works-heading">
              Software That Works
              <br />
              For <span>Your Business</span>
            </h1>

            {/* FIRST PARAGRAPH */}

            <p>
              Every organization has different processes, priorities and
              challenges. Yet many businesses still rely on software that
              doesn't fully fit the way their teams work. We take a different
              approach.
            </p>

            {/* SECOND PARAGRAPH */}

            <p>
              At TechTorch, we start by understanding your business and the
              problem you want to solve. We look at your existing processes,
              systems and user needs before defining the right solution.
            </p>

            {/* THIRD PARAGRAPH */}

            <p>
              That could mean building a new application, connecting systems
              that currently operate separately, or modernizing an existing
              platform.
            </p>

            {/* FOURTH PARAGRAPH */}

            <p>
              The technology is important, but the business outcome comes
              first.
            </p>
          </div>

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}

          <div className="software-works-right">

            {/* IMAGE */}

            <div className="software-works-image">
              <img
                src="/Slide3.2.png"
                alt="Business team working together"
              />
            </div>

            {/* HIGHLIGHT TEXT */}

            <p className="software-works-highlight">
              We build software to make your business
              <br className="desktop-break" />
              work better—not simply to add another
              <br className="desktop-break" />
              system.
            </p>

          </div>
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE CSS
      ====================================================== */}

      <style>{`

        /* =====================================================
           SECTION
        ====================================================== */

        .software-works-section {
          width: 100%;
          box-sizing: border-box;
        }


        /* =====================================================
           CONTAINER

           SAME ALIGNMENT AS FOOTER

           Mobile  = 16px
           Small   = 24px
           Tablet  = 40px
           Desktop = 100px
        ====================================================== */

        .software-works-container {
          width: 100%;
          margin: 0;

          padding: 45px 100px;

          box-sizing: border-box;
        }


        /* =====================================================
           GRID
        ====================================================== */

        .software-works-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1.15fr)
            minmax(0, 0.85fr);

          gap: 70px;

          align-items: start;
        }


        /* =====================================================
           LEFT CONTENT
        ====================================================== */

        .software-works-content {
          min-width: 0;

          padding-top: 10px;

          /*
            No horizontal transform.
            Text starts exactly with Footer alignment.
          */

          transform: none;
        }


        /* =====================================================
           HEADING
        ====================================================== */

        .software-works-heading {
          margin: 0;

          max-width: 700px;

          font-size: 38px;
          font-weight: 600;
          line-height: 1.1;

          letter-spacing: -1.8px;

          color: #111111;
        }


        .software-works-heading span {
          color: #730042;
        }


        /* =====================================================
           PARAGRAPHS
        ====================================================== */

        .software-works-content > p {
          max-width: 680px;

          margin: 0;
          margin-top: 28px;

          font-family: "Inter", sans-serif;

          font-size: 16px;
          font-weight: 400;

          line-height: 1.65;

          color: #292929;
        }


        .software-works-content > p:first-of-type {
          margin-top: 40px;
        }


        /* =====================================================
           RIGHT CONTENT

           IMAGE IS SHIFTED TOWARDS RIGHT
           TO MATCH FOOTER'S RIGHT SIDE.
        ====================================================== */

        .software-works-right {
          min-width: 0;

          display: flex;
          flex-direction: column;

          align-items: flex-start;

          padding-top: 0;

          /*
            Desktop right-side shift.
            This moves the image closer to the
            right Footer alignment.
          */

          transform: translateX(45px);
        }


        /* =====================================================
           IMAGE
        ====================================================== */

        .software-works-image {
          width: 100%;

          max-width: 400px;

          border-radius: 20px;

          overflow: hidden;
        }


        .software-works-image img {
          width: 100%;
          height: auto;

          display: block;

          object-fit: contain;
        }


        /* =====================================================
           HIGHLIGHT TEXT
        ====================================================== */

        .software-works-highlight {
          width: 100%;

          max-width: 520px;

          margin: 38px 0 0;

          font-size: 18px;
          font-weight: 700;

          line-height: 1.3;

          letter-spacing: -0.4px;

          color: #730042;
        }


        /* =====================================================
           LARGE LAPTOP
        ====================================================== */

        @media (max-width: 1200px) {

          .software-works-container {
            padding-left: 70px;
            padding-right: 70px;
          }


          .software-works-grid {
            gap: 50px;
          }


          .software-works-right {
            transform: translateX(25px);
          }


          .software-works-heading {
            font-size: 42px;
          }


          .software-works-image {
            max-width: 480px;
          }


          .software-works-highlight {
            font-size: 20px;
          }
        }


        /* =====================================================
           TABLET / SMALL LAPTOP
        ====================================================== */

        @media (max-width: 1000px) {

          .software-works-container {
            padding-left: 40px;
            padding-right: 40px;
          }


          .software-works-grid {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 0.9fr);

            gap: 35px;
          }


          .software-works-right {
            transform: translateX(15px);
          }


          .software-works-heading {
            font-size: 38px;
          }


          .software-works-content > p {
            font-size: 15.5px;
            line-height: 1.6;
          }


          .software-works-image {
            max-width: 100%;
          }


          .software-works-highlight {
            margin-top: 28px;
            font-size: 18px;
          }
        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 768px) {

          .software-works-container {
            padding-left: 20px;
            padding-right: 20px;

            padding-top: 45px;
            padding-bottom: 45px;
          }


          .software-works-grid {
            grid-template-columns: 1fr;

            gap: 45px;
          }


          .software-works-content {
            transform: none;

            padding-top: 0;
          }


          .software-works-heading {
            font-size: 36px;

            line-height: 1.12;
          }


          .software-works-content > p {
            max-width: 100%;

            font-size: 16px;
          }


          /*
            On tablet the image becomes centered
            so it never gets cut off.
          */

          .software-works-right {
            align-items: center;

            width: 100%;

            transform: none;
          }


          .software-works-image {
            width: 100%;

            max-width: 600px;
          }


          .software-works-highlight {
            max-width: 600px;

            font-size: 20px;

            margin-top: 28px;
          }
        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 600px) {

          /*
            EXACT FOOTER MOBILE ALIGNMENT

            Footer = px-4 = 16px
          */

          .software-works-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 40px;
            padding-bottom: 40px;
          }


          .software-works-grid {
            gap: 38px;
          }


          .software-works-heading {
            font-size: 30px;

            line-height: 1.15;

            letter-spacing: -1px;
          }


          .software-works-content > p {
            margin-top: 20px;

            font-size: 15px;

            line-height: 1.6;
          }


          .software-works-content > p:first-of-type {
            margin-top: 28px;
          }


          /*
            Keep image centered on mobile.
          */

          .software-works-right {
            width: 100%;

            align-items: center;

            transform: none;
          }


          .software-works-image {
            width: 100%;

            max-width: 100%;

            border-radius: 14px;
          }


          .software-works-highlight {
            margin-top: 24px;

            font-size: 17px;

            line-height: 1.4;
          }


          .desktop-break {
            display: none;
          }
        }


        /* =====================================================
           VERY SMALL MOBILE
        ====================================================== */

        @media (max-width: 380px) {

          .software-works-container {
            padding-left: 14px;
            padding-right: 14px;

            padding-top: 35px;
            padding-bottom: 35px;
          }


          .software-works-heading {
            font-size: 27px;
          }


          .software-works-content > p {
            font-size: 14px;
          }


          .software-works-highlight {
            font-size: 16px;
          }
        }

      `}</style>
    </section>
  );
}


/* =====================================================================
   3) WHAT WE BUILD
   (MAROON below is also used by section 4 — both files declared the
   identical value "#7a1338", so it is declared once here.)
===================================================================== */

const MAROON = "#7a1338";

const cards = [
  {
    id: "custom",
    icon: Component,
    title: "Custom Business Applications",
    description:
      "Purpose-built applications designed around your processes, workflows and operational requirements.",
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise Applications",
    description:
      "Scalable solutions that bring together people, processes and information across your organization.",
  },
  {
    id: "web",
    icon: Monitor,
    title: "Web Applications",
    description:
      "Reliable and intuitive web applications for employees, customers and business users.",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Mobile experiences that give teams and customers convenient access to the services and information they need.",
  },
  {
    id: "modernization",
    icon: Box,
    title: "Application Modernization",
    description:
      "Modernize existing applications, improve performance and maintainability, and create a stronger foundation for the future.",
  },
  {
    id: "integration",
    icon: Share2,
    title: "API & System Integration",
    description:
      "Connect applications, platforms and data sources to create smoother workflows and a more connected technology environment.",
  },
];

export function WhatWeBuildSection() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 600) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1000) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();

    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const maxIndex = Math.max(0, cards.length - cardsPerView);

  useEffect(() => {
    setIndex((currentIndex) =>
      Math.min(currentIndex, maxIndex)
    );
  }, [maxIndex]);

  const goPrev = () => {
    setIndex((currentIndex) =>
      Math.max(0, currentIndex - 1)
    );
  };

  const goNext = () => {
    setIndex((currentIndex) =>
      Math.min(maxIndex, currentIndex + 1)
    );
  };

  return (
    <section className="what-we-build-section">
      <div className="build-content-wrapper">
        {/* ================= HEADING ================= */}

        <div className="build-heading">
          <div className="build-heading-left">
            <p className="build-label">
              WHAT WE BUILD
            </p>

            <h2>
              Software Designed for Real Business Needs
            </h2>
          </div>

          <p className="build-heading-description">
            We develop software across a range of business requirements,
            from focused applications to connected enterprise systems.
          </p>
        </div>

        {/* ================= CARD SLIDER ================= */}

        <div className="cards-viewport">
          <div
            className="cards-track"
            style={{
              transform: `translateX(-${
                index * (100 / cardsPerView)
              }%)`,
            }}
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  className="card-slide"
                  style={{
                    flex: `0 0 ${100 / cardsPerView}%`,
                  }}
                >
                  <div className="build-card">
                    {/* ICON */}

                    <div className="build-icon">
                      <Icon
                        size={21}
                        color="#ffffff"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* TITLE */}

                    <h3>{card.title}</h3>

                    {/* DESCRIPTION */}

                    <p>{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BUTTONS ================= */}

        <div className="slider-buttons">
          <button
            onClick={goPrev}
            disabled={index === 0}
            className="slider-button"
            aria-label="Previous cards"
          >
            <ChevronLeft size={19} />
          </button>

          <button
            onClick={goNext}
            disabled={index === maxIndex}
            className="slider-button"
            aria-label="Next cards"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      <style>{`
        /* ================= SECTION ================= */

        .what-we-build-section {
          position: relative;
          width: 100%;
          padding: 60px 80px;
          box-sizing: border-box;

          background: ${MAROON};

          background-image:
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.045) 0px,
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px,
              transparent 90px
            );

          font-family: "Plus Jakarta Sans", sans-serif;
          overflow: hidden;
        }

        /* ================= CONTENT ================= */

        .build-content-wrapper {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          box-sizing: border-box;

          transform: translateX(15px);
        }

        /* ================= HEADING ================= */

        .build-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;

          width: 100%;

          gap: 40px;
          margin-bottom: 40px;
        }

        .build-heading-left {
          flex: 1;
          min-width: 0;
        }

        .build-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;

          color: #f0c9d8;

          margin: 0 0 10px;
        }

        .build-heading h2 {
          max-width: 430px;

          font-size: 28px;
          font-weight: 700;
          line-height: 1.3;

          color: #ffffff;
          margin: 0;
        }

        .build-heading-description {
          width: 100%;
          max-width: 400px;

          font-size: 15px;
          line-height: 1.7;

          color: #e9d3dd;
          margin: 0;
        }

        /* ================= SLIDER ================= */

        .cards-viewport {
          width: 100%;
          overflow: hidden;
        }

        .cards-track {
          display: flex;
          width: 100%;

          transition: transform 0.5s ease;
          will-change: transform;
        }

        /* ================= CARD SLIDE ================= */

        .card-slide {
          flex-shrink: 0;
          box-sizing: border-box;

          /* Cards ke beech gap */
          padding-right: 75px;

          /* Halka right shift */
          transform: translateX(12px);
        }

        /* ================= CARD ================= */

        .build-card {
          width: 100%;
          min-height: 285px;

          padding: 25px 22px;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;

          background: #ffffff;
          border-radius: 14px;
        }

        /* ================= ICON ================= */

        .build-icon {
          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: ${MAROON};

          margin-bottom: 16px;
          flex-shrink: 0;
        }

        /* ================= TITLE ================= */

        .build-card h3 {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.3;

          color: #1a1a1a;

          margin: 0 0 11px;
        }

        /* ================= DESCRIPTION ================= */

        .build-card p {
          font-size: 13px;
          line-height: 1.6;

          color: #555555;
          margin: 0;
        }

        /* ================= BUTTONS ================= */

        .slider-buttons {
          display: flex;
          justify-content: center;
          align-items: center;

          gap: 14px;
          margin-top: 34px;
        }

        .slider-button {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.5);

          background: transparent;
          color: #ffffff;

          cursor: pointer;

          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .slider-button:hover:not(:disabled) {
          background: #ffffff;
          color: ${MAROON};

          transform: translateY(-2px);
        }

        .slider-button:disabled {
          opacity: 0.4;
          cursor: default;
        }

        /* ================= LARGE LAPTOP ================= */

        @media (max-width: 1200px) {
          .what-we-build-section {
            padding: 55px 55px;
          }

          .build-content-wrapper {
            transform: translateX(12px);
          }

          .card-slide {
            padding-right: 65px;
            transform: translateX(10px);
          }

          .build-card {
            min-height: 280px;
            padding: 24px 21px;
          }
        }

        /* ================= TABLET ================= */

        @media (max-width: 1000px) {
          .what-we-build-section {
            padding: 50px 40px;
          }

          .build-content-wrapper {
            transform: translateX(8px);
          }

          .build-heading {
            gap: 30px;
            margin-bottom: 35px;
          }

          .card-slide {
            padding-right: 50px;
            transform: translateX(8px);
          }

          .build-card {
            min-height: 275px;
            padding: 24px 21px;
          }
        }

        /* ================= TABLET / SMALL ================= */

        @media (max-width: 768px) {
          .what-we-build-section {
            padding: 48px 25px;
          }

          .build-content-wrapper {
            transform: translateX(0);
          }

          .build-heading {
            flex-direction: column;

            align-items: flex-start;

            gap: 18px;
            margin-bottom: 32px;
          }

          .build-heading h2 {
            max-width: 100%;
            font-size: 26px;
          }

          .build-heading-description {
            max-width: 550px;
            font-size: 15px;
          }

          .card-slide {
            padding-right: 35px;
            transform: translateX(5px);
          }

          .build-card {
            min-height: 270px;
            padding: 23px 20px;
          }

          .slider-buttons {
            margin-top: 30px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .what-we-build-section {
            padding: 42px 20px;
          }

          .build-content-wrapper {
            transform: none;
          }

          .build-heading {
            gap: 16px;
            margin-bottom: 28px;
          }

          .build-label {
            font-size: 12px;
          }

          .build-heading h2 {
            font-size: 24px;
            line-height: 1.35;
          }

          .build-heading-description {
            max-width: 100%;

            font-size: 14px;
            line-height: 1.65;
          }

          /* Mobile: single card full width */

          .card-slide {
            padding-right: 0;
            transform: none;
          }

          .build-card {
            min-height: 265px;

            padding: 22px 20px;

            border-radius: 12px;
          }

          .build-icon {
            width: 44px;
            height: 44px;

            margin-bottom: 15px;
          }

          .build-card h3 {
            font-size: 16px;
            margin-bottom: 10px;
          }

          .build-card p {
            font-size: 13px;
            line-height: 1.55;
          }

          .slider-buttons {
            margin-top: 26px;
            gap: 12px;
          }

          .slider-button {
            width: 38px;
            height: 38px;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 480px) {
          .what-we-build-section {
            padding: 38px 18px;
          }

          .build-heading h2 {
            font-size: 23px;
          }

          .build-heading-description {
            font-size: 13.5px;
          }

          .build-card {
            min-height: 255px;
            padding: 21px 18px;
          }
        }

        /* ================= VERY SMALL MOBILE ================= */

        @media (max-width: 380px) {
          .what-we-build-section {
            padding: 35px 15px;
          }

          .build-heading h2 {
            font-size: 21px;
          }

          .build-card {
            min-height: 250px;
            padding: 20px 17px;
          }

          .build-card h3 {
            font-size: 15px;
          }

          .build-card p {
            font-size: 12.5px;
          }

          .slider-button {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
}


/* =====================================================================
   4) STRUCTURED APPROACH
===================================================================== */

const steps = [
  {
    id: "understand",
    icon: Search,
    title: "Understand",
    description:
      "We learn how your business works, understand your users and review the systems and processes already in place.",
  },
  {
    id: "define",
    icon: ClipboardList,
    title: "Define",
    description:
      "We translate business requirements into clear priorities, functionality and a practical technical direction.",
  },
  {
    id: "design",
    icon: UserCog,
    title: "Design",
    description:
      "We design user journeys, interfaces and workflows around the people who will use the solution.",
  },
  {
    id: "develop",
    icon: Code2,
    title: "Develop",
    description:
      "Our engineering team builds the solution with a focus on quality, reliability, performance and maintainability.",
  },
  {
    id: "validate",
    icon: CheckCircle2,
    title: "Validate",
    description:
      "We test the software against business requirements to make sure it works as intended and is ready for real users.",
  },
  {
    id: "launch",
    icon: Rocket,
    title: "Launch & Evolve",
    description:
      "Going live is only the beginning. We support improvements, enhancements and changes as your business continues to develop.",
  },
];

export function StructuredApproachSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardRefs = useRef({});

  const [linePath, setLinePath] = useState("");
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  const [iconsVisible, setIconsVisible] = useState(false);

  // =========================================================
  // ICON ANIMATION
  // =========================================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIconsVisible(false);

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setIconsVisible(true);
              });
            });
          } else {
            setIconsVisible(false);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // =========================================================
  // CONNECTOR LINE
  // =========================================================

  useLayoutEffect(() => {
    const computePath = () => {
      const container = containerRef.current;

      if (!container) return;

      const containerRect = container.getBoundingClientRect();

      setContainerSize({
        width: containerRect.width,
        height: containerRect.height,
      });

      const ICON_SIZE = 48;
      const RADIUS = ICON_SIZE / 2;

      // Get icon position from card.
      // This ignores icon translateY animation.
      const getIconPosition = (id) => {
        const card = cardRefs.current[id];

        if (!card) return null;

        const cardRect = card.getBoundingClientRect();

        return {
          x:
            cardRect.left +
            RADIUS -
            containerRect.left,

          y:
            cardRect.top +
            RADIUS -
            containerRect.top,

          left:
            cardRect.left -
            containerRect.left,

          right:
            cardRect.left +
            ICON_SIZE -
            containerRect.left,

          top:
            cardRect.top -
            containerRect.top,

          bottom:
            cardRect.top +
            ICON_SIZE -
            containerRect.top,
        };
      };

      const understand = getIconPosition("understand");
      const define = getIconPosition("define");
      const design = getIconPosition("design");

      const develop = getIconPosition("develop");
      const validate = getIconPosition("validate");
      const launch = getIconPosition("launch");

      if (
        !understand ||
        !define ||
        !design ||
        !develop ||
        !validate ||
        !launch
      ) {
        return;
      }

      // =====================================================
      // CONTINUOUS CONNECTION
      //
      // Understand ─── Define ─── Design
      //                              │
      //                              │
      // Develop ─── Validate ─── Launch & Evolve
      //
      // The line connects directly to icon borders.
      // =====================================================

      const path = `
        <!-- Understand -> Define -->
        M ${understand.right} ${understand.y}
        H ${define.left}

        <!-- Define -> Design -->
        M ${define.right} ${define.y}
        H ${design.left}

        <!-- Design -> Develop -->
        M ${design.x} ${design.bottom}
        V ${develop.y}

        <!-- Develop -> Validate -->
        M ${develop.right} ${develop.y}
        H ${validate.left}

        <!-- Validate -> Launch -->
        M ${validate.right} ${validate.y}
        H ${launch.left}
      `;

      setLinePath(path);
    };

    // Initial calculation
    computePath();

    // Recalculate after layout settles
    const firstTimer = setTimeout(() => {
      computePath();
    }, 100);

    const secondTimer = setTimeout(() => {
      computePath();
    }, 500);

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        computePath();
      });
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Window resize
    window.addEventListener("resize", computePath);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", computePath);

      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="structured-approach-section"
    >
      <div className="structured-container">

        {/* =================================================
            HEADING
        ================================================= */}

        <h1>
          A Structured Approach to{" "}
          <span>Software Development</span>
        </h1>

        {/* =================================================
            INTRO
        ================================================= */}

        <p className="intro-text">
          Successful software starts with a clear understanding
          of the problem.
        </p>

        <p className="intro-text intro-bottom">
          Our development approach brings business requirements,
          user needs and technology together at every stage.
        </p>

        {/* =================================================
            STEPS
        ================================================= */}

        <div
          ref={containerRef}
          className="structured-grid"
        >
          {/* =================================================
              CONNECTOR LINE
          ================================================= */}

          {containerSize.width > 0 && linePath && (
            <svg
              className="connector-svg"
              viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d={linePath}
                fill="none"
                stroke={MAROON}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />
            </svg>
          )}

          {/* =================================================
              STEP CARDS
          ================================================= */}

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                ref={(element) => {
                  cardRefs.current[step.id] = element;
                }}
                className={`step-card ${
                  iconsVisible
                    ? "step-card-visible"
                    : ""
                }`}
              >
                <div
                  className="step-icon"
                  style={{
                    "--icon-delay": `${index * 0.16}s`,
                  }}
                >
                  <Icon
                    size={20}
                    color={MAROON}
                    strokeWidth={2}
                  />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`
        /* =====================================================
          MAIN SECTION
        ===================================================== */

        .structured-approach-section {
          padding: 70px 40px;

          background-color: #ffffff;

          background-image:
            repeating-linear-gradient(
              -45deg,
              rgba(122, 19, 56, 0.06) 0px,
              rgba(122, 19, 56, 0.06) 1px,
              transparent 1px,
              transparent 50px
            );

          font-family: "Segoe UI", Arial, sans-serif;

          box-sizing: border-box;

          overflow: hidden;
        }

        /* =====================================================
          CONTAINER
        ===================================================== */

        .structured-container {
          width: 100%;
          max-width: 1200px;

          margin: 0 auto;
        }

        /* =====================================================
          HEADING
        ===================================================== */

        .structured-container > h1 {
          font-size: 28px;

          font-weight: 700;

          text-align: center;

          color: #1a1a1a;

          margin: 0 0 12px;

          line-height: 1.3;
        }

        .structured-container > h1 span {
          color: ${MAROON};
        }

        /* =====================================================
          INTRO
        ===================================================== */

        .intro-text {
          font-size: 15px;

          text-align: center;

          color: #333;

          margin: 0 auto 6px;

          max-width: 700px;

          line-height: 1.6;
        }

        .intro-bottom {
          margin-bottom: 60px;
        }

        /* =====================================================
          GRID
        ===================================================== */

        .structured-grid {
          position: relative;

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          column-gap: 40px;

          row-gap: 70px;

          transform: translateX(35px);

          width: calc(100% - 35px);

          box-sizing: border-box;
        }

        /* =====================================================
          CONNECTOR SVG
        ===================================================== */

        .connector-svg {
          position: absolute;

          inset: 0;

          width: 100%;

          height: 100%;

          pointer-events: none;

          z-index: 0;

          overflow: visible;
        }

        /* =====================================================
          STEP CARD
        ===================================================== */

        .step-card {
          position: relative;

          z-index: 1;

          width: 100%;

          max-width: 340px;
        }

        /* =====================================================
          ICON
        ===================================================== */

        .step-icon {
          width: 48px;

          height: 48px;

          border-radius: 50%;

          border: 1.5px solid ${MAROON};

          background: #ffffff;

          display: flex;

          align-items: center;

          justify-content: center;

          margin-bottom: 18px;

          position: relative;

          z-index: 2;

          flex-shrink: 0;

          opacity: 0;

          transform: translateY(25px);

          transition:
            opacity 0.55s ease,
            transform 0.7s cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );

          transition-delay: var(--icon-delay);

          will-change: opacity, transform;
        }

        /* =====================================================
          ICON VISIBLE
        ===================================================== */

        .step-card-visible .step-icon {
          opacity: 1;

          transform: translateY(0);
        }

        /* =====================================================
          CARD HEADING
        ===================================================== */

        .step-card h3 {
          font-size: 17px;

          font-weight: 700;

          color: #1a1a1a;

          margin: 0 0 10px;

          line-height: 1.35;
        }

        /* =====================================================
          CARD TEXT
        ===================================================== */

        .step-card p {
          font-size: 14px;

          line-height: 1.6;

          color: #555;

          margin: 0;
        }

        /* =====================================================
          TABLET
        ===================================================== */

        @media (max-width: 1200px) {
          .structured-approach-section {
            padding: 65px 35px;
          }

          .structured-grid {
            column-gap: 35px;

            row-gap: 65px;

            transform: translateX(25px);

            width: calc(100% - 25px);
          }
        }

        /* =====================================================
          SMALL TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .structured-approach-section {
            padding: 60px 30px;
          }

          .structured-container > h1 {
            font-size: 27px;
          }

          .intro-bottom {
            margin-bottom: 50px;
          }

          .structured-grid {
            column-gap: 28px;

            row-gap: 60px;

            transform: translateX(15px);

            width: calc(100% - 15px);
          }

          .step-card {
            max-width: 100%;
          }

          .step-card h3 {
            font-size: 16px;
          }

          .step-card p {
            font-size: 14px;
          }
        }

        /* =====================================================
          MOBILE
        ===================================================== */

        @media (max-width: 768px) {
          .structured-approach-section {
            padding: 55px 25px;
          }

          .structured-container > h1 {
            font-size: 26px;
          }

          .intro-text {
            font-size: 14px;
          }

          .intro-bottom {
            margin-bottom: 45px;
          }

          .structured-grid {
            grid-template-columns: 1fr;

            row-gap: 42px;

            transform: translateX(0);

            width: 100%;
          }

          /* Connector hidden on mobile */
          .connector-svg {
            display: none;
          }

          .step-card {
            max-width: 100%;
          }

          .step-icon {
            margin-bottom: 14px;
          }
        }

        /* =====================================================
          SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .structured-approach-section {
            padding: 45px 20px;
          }

          .structured-container > h1 {
            font-size: 24px;

            line-height: 1.3;
          }

          .intro-text {
            font-size: 14px;

            line-height: 1.55;
          }

          .intro-bottom {
            margin-bottom: 40px;
          }

          .structured-grid {
            row-gap: 38px;
          }

          .step-icon {
            width: 45px;

            height: 45px;
          }

          .step-card h3 {
            font-size: 16px;

            margin-bottom: 8px;
          }

          .step-card p {
            font-size: 14px;

            line-height: 1.55;
          }
        }

        /* =====================================================
          EXTRA SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {
          .structured-approach-section {
            padding: 40px 16px;
          }

          .structured-container > h1 {
            font-size: 22px;
          }

          .structured-grid {
            row-gap: 35px;
          }

          .step-icon {
            width: 44px;

            height: 44px;
          }
        }

        /* =====================================================
          REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .step-icon {
            opacity: 1;

            transform: none;

            transition: none;
          }
        }
      `}</style>
    </section>
  );
}


/* =====================================================================
   5) SOFTWARE GROWTH
===================================================================== */

// Public folder image
const apartmentImage = "/Apartment2.png";

export function SoftwareGrowthSection() {
  return (
    <section className="software-growth-section">
      <div className="software-growth-container">
        {/* ================= TEXT ================= */}
        <div className="software-growth-text">
          <h1>
            Software That Can Grow
            <br />
            With <span>Your Business</span>
          </h1>

          <p>
            Business requirements don't stay the same.
          </p>

          <p>
            Teams change. Customers grow. Processes evolve. New systems are
            introduced and existing ones need to connect.
          </p>

          <p>
            That's why we consider the future from the beginning.
          </p>

          <p>
            We build with scalability, maintainability, integration and
            long-term requirements in mind, so your software can continue to
            support the business as it evolves.
          </p>

          <p>
            We don't believe good software needs to be unnecessarily
            complicated.
          </p>

          {/* Highlight Text */}
          <p className="software-growth-highlight">
            It needs to be right for the business today—and ready for
            tomorrow.
          </p>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="apartment-image-wrapper">
          <img
            src={apartmentImage}
            alt="Residential apartment towers"
          />
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        .software-growth-section {
          width: 100%;
          padding: 0 80px;
          background: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          overflow: hidden;
          box-sizing: border-box;
        }

        .software-growth-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 60px;
          box-sizing: border-box;
        }

        /* ================= TEXT ================= */

        .software-growth-text {
          width: 100%;
          max-width: 500px;
          flex: 1 1 380px;

          padding: 60px 0;

          transform: translateX(35px);
          box-sizing: border-box;
        }

        .software-growth-text h1 {
          font-size: 36px;
          line-height: 1.25;
          font-weight: 700;
          color: #1a1a1a;

          margin: 0 0 32px 0;
        }

        .software-growth-text h1 span {
          color: #7a1338;
        }

        .software-growth-text p {
          font-size: 16px;
          line-height: 1.7;
          color: #4a4a4a;

          margin: 0 0 28px 0;
        }

        .software-growth-text .software-growth-highlight {
          font-size: 17px;
          line-height: 1.6;
          font-weight: 700;
          color: #7a1338;

          margin: 0;
        }

        /* ================= IMAGE ================= */

        .apartment-image-wrapper {
          width: 100%;
          max-width: 600px;
          flex: 1 1 340px;

          display: flex;
          align-items: center;
          justify-content: center;

          transform: translateX(80px);
          box-sizing: border-box;
        }

        .apartment-image-wrapper img {
          width: 100%;
          height: 660px;

          display: block;

          object-fit: contain;

          margin: 0;
          padding: 0;
        }


        /* =====================================================
           LARGE LAPTOP
        ===================================================== */

        @media (max-width: 1300px) {
          .software-growth-section {
            padding: 0 60px;
          }

          .software-growth-container {
            gap: 50px;
          }

          .software-growth-text {
            transform: translateX(28px);
          }

          .apartment-image-wrapper {
            transform: translateX(60px);
          }

          .apartment-image-wrapper img {
            height: 620px;
          }
        }


        /* =====================================================
           LAPTOP
        ===================================================== */

        @media (max-width: 1100px) {
          .software-growth-section {
            padding: 0 50px;
          }

          .software-growth-container {
            gap: 40px;
          }

          .software-growth-text {
            max-width: 470px;
            transform: translateX(20px);
          }

          .software-growth-text h1 {
            font-size: 34px;
          }

          .apartment-image-wrapper {
            max-width: 540px;
            transform: translateX(35px);
          }

          .apartment-image-wrapper img {
            height: 570px;
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .software-growth-section {
            padding: 0 40px;
          }

          .software-growth-container {
            gap: 30px;
          }

          .software-growth-text {
            flex: 1 1 320px;
            max-width: 440px;

            transform: translateX(10px);
          }

          .software-growth-text h1 {
            font-size: 32px;
          }

          .software-growth-text p {
            font-size: 15px;
          }

          .software-growth-highlight {
            font-size: 16px !important;
          }

          .apartment-image-wrapper {
            flex: 1 1 300px;
            max-width: 450px;

            transform: translateX(15px);
          }

          .apartment-image-wrapper img {
            height: 500px;
          }
        }


        /* =====================================================
           SMALL TABLET / MOBILE
        ===================================================== */

        @media (max-width: 768px) {
          .software-growth-section {
            padding: 0;
          }

          .software-growth-container {
            flex-direction: column;

            align-items: stretch;

            gap: 0;
          }

          .software-growth-text {
            width: 100%;
            max-width: none;

            flex: none;

            padding: 55px 30px;

            transform: translateX(0);
          }

          .software-growth-text h1 {
            font-size: 32px;
            margin-bottom: 28px;
          }

          .software-growth-text p {
            font-size: 16px;
            margin-bottom: 24px;
          }

          .software-growth-text .software-growth-highlight {
            font-size: 17px;
            margin-bottom: 0;
          }

          .apartment-image-wrapper {
            width: 100%;
            max-width: none;

            flex: none;

            transform: translateX(0);

            padding: 0;
          }

          .apartment-image-wrapper img {
            width: 100%;
            height: auto;

            max-height: none;

            object-fit: contain;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .software-growth-text {
            padding: 45px 20px;
          }

          .software-growth-text h1 {
            font-size: 28px;
            line-height: 1.25;

            margin-bottom: 25px;
          }

          .software-growth-text p {
            font-size: 15px;
            line-height: 1.65;

            margin-bottom: 22px;
          }

          .software-growth-text .software-growth-highlight {
            font-size: 16px;
            line-height: 1.55;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {
          .software-growth-text {
            padding: 40px 16px;
          }

          .software-growth-text h1 {
            font-size: 25px;
          }

          .software-growth-text p {
            font-size: 14px;
          }

          .software-growth-text .software-growth-highlight {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}


/* =====================================================================
   6) TECHNOLOGY BUSINESS VALUE
===================================================================== */

export function TechnologyBusinessValue() {
  return (
    <section className="w-full overflow-hidden bg-[#faf9f4]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]

          px-5
          py-10

          sm:px-7
          sm:py-12

          md:px-10
          md:py-14

          lg:px-12
          lg:py-16

          xl:px-14
          xl:py-16
        "
      >
        {/* ================= HEADING ================= */}
        <h2
          className="
            font-['Inter']
            text-[30px]
            font-semibold
            leading-[1.1]
            tracking-[-1.2px]
            text-[#111111]

            min-[400px]:text-[32px]

            sm:text-[36px]
            sm:tracking-[-1.5px]

            md:relative
            md:left-4
            md:text-[40px]

            lg:left-6
            lg:text-[42px]

            xl:left-8
            xl:text-[38px]
          "
        >
          Technology That
          <br />
          Delivers{" "}
          <span className="text-[#850052]">
            Business Value
          </span>
        </h2>

        {/* ================= CONTENT ================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-10

            sm:mt-10
            sm:gap-12

            md:mt-12
            md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]
            md:gap-x-12
            md:gap-y-10

            lg:gap-x-20

            xl:gap-x-24
          "
        >
          {/* ================= LEFT COLUMN ================= */}
          <div
            className="
              min-w-0

              md:relative
              md:left-4

              lg:left-6

              xl:left-8
            "
          >
            <p
              className="
                max-w-[650px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#5c5c5c]

                sm:text-[16px]

                md:text-[16px]

                lg:text-[16px]
              "
            >
              Good software should do more than introduce new technology. It
              should make the business work better.
            </p>

            <p
              className="
                mt-5
                max-w-[650px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#5c5c5c]

                sm:mt-6
                sm:text-[16px]

                md:mt-7

                lg:mt-8
              "
            >
              At TechTorch, we focus on building solutions that improve
              everyday operations, connect information and make work easier
              for the people who use them. Whether the goal is to reduce
              repetitive tasks, bring disconnected systems together or give
              teams better access to information, we look at the business
              outcome behind the technology.
            </p>

            <p
              className="
                mt-5
                max-w-[650px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#5c5c5c]

                sm:mt-6
                sm:text-[16px]

                md:mt-7

                lg:mt-8
              "
            >
              As businesses grow, their requirements change. Teams expand,
              processes evolve and new systems need to work alongside
              existing ones. That's why we consider scalability,
              maintainability and integration from the beginning. We build
              software that can adapt to changing requirements without adding
              unnecessary complexity.
            </p>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div
            className="
              min-w-0

              md:relative
              md:-top-2
              md:left-2

              lg:-top-4
              lg:left-4

              xl:-top-5
              xl:left-6
            "
          >
            <p
              className="
                max-w-full
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#5c5c5c]

                sm:max-w-[580px]
                sm:text-[16px]

                md:max-w-[480px]

                lg:max-w-[500px]

                xl:max-w-[500px]
              "
            >
              The right technology should also be practical. Not every
              business needs a large or complex system, and custom software
              isn't always the answer. But when standard solutions cannot
              support an important process or provide the flexibility a
              business needs, a tailored solution can make a meaningful
              difference.
            </p>

            <p
              className="
                mt-5
                max-w-full
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#5c5c5c]

                sm:mt-6
                sm:max-w-[580px]
                sm:text-[16px]

                md:mt-7
                md:max-w-[480px]

                lg:mt-8
                lg:max-w-[500px]

                xl:max-w-[500px]
              "
            >
              Our approach is simple: understand the problem, choose the
              right technology and build a solution that creates lasting
              value.
            </p>

            <p
              className="
                mt-5
                max-w-full
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#5c5c5c]

                sm:mt-6
                sm:max-w-[580px]
                sm:text-[16px]

                md:mt-7
                md:max-w-[480px]

                lg:mt-8
                lg:max-w-[500px]

                xl:max-w-[500px]
              "
            >
              Software should simplify work, connect people and information,
              support better decisions and give businesses room to grow.
            </p>

            {/* ================= HIGHLIGHT ================= */}
            <p
              className="
                mt-7
                max-w-full
                font-['Plus_Jakarta_Sans']
                text-[17px]
                font-medium
                leading-[1.35]
                tracking-[-0.3px]
                text-[#850052]

                sm:mt-8
                sm:max-w-[580px]
                sm:text-[18px]

                md:mt-9
                md:max-w-[480px]
                md:text-[19px]

                lg:max-w-[500px]
                lg:text-[20px]

                xl:max-w-[500px]
                xl:text-[18px]
              "
            >
              The goal isn't to build more technology. It's to build the
              right technology for the business—and make sure it continues to
              deliver value over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


/* =====================================================================
   7) BUSINESS CHALLENGE
===================================================================== */

const bgImage = "/bgslide07.png";
const photoImage = "/hero03slide07.png";

export function BusinessChallengeSection() {
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

  // Close icons on outside click or Escape
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
      href: "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20discuss%20my%20business%20challenge.",
      external: true,
    },
    {
      label: "Email Us",
      Icon: Mail,
      href: "mailto:contact@techtorch.solutions",
    },
  ];

  return (
    <section className="business-challenge-section">
      <div className="business-challenge-container">

        {/* ================= TEXT CONTENT ================= */}
        <div className="business-challenge-content">
          <h1 className="business-challenge-heading">
            Have a Business
            <br />
            Challenge to Solve
          </h1>

          <p className="business-challenge-paragraph">
            Whether you're planning a new application, modernizing an existing
            system or looking for a better way to manage a business process,
            the right place to start is with the problem.
          </p>

          <p className="business-challenge-paragraph">
            We'll work with you to understand the opportunity, define a
            practical solution and build software that fits the way your
            business works.
          </p>

          {/* ================= BUTTON + CONTACT ICONS ================= */}
          <div
            ref={contactRef}
            className="business-challenge-contact-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* TALK TO EXPERTS BUTTON */}
            <Link
              to="/talk-to-expert"
              className="business-challenge-button"
            >
              <span>Talk to Experts</span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className="business-challenge-arrow"
              />
            </Link>

            {/* CONTACT ICONS */}
            <div
              className={`business-challenge-contact-options ${
                showOptions ? "show" : ""
              }`}
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
                    className="business-challenge-contact-icon"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="business-challenge-image-wrapper">
          <img
            className="business-challenge-image"
            src={photoImage}
            alt="Team discussing business challenge"
          />
        </div>
      </div>

      <style>{`
        /* ================= MAIN SECTION ================= */

        .business-challenge-section {
          position: relative;
          width: 100%;
          overflow: hidden;

          padding: 55px 80px;

          background-color: #ffffff;
          background-image: url(${bgImage});
          background-repeat: no-repeat;
          background-position: right bottom;
          background-size: 55% auto;

          font-family: "Plus Jakarta Sans", sans-serif;
          box-sizing: border-box;
        }

        /* ================= CONTAINER ================= */

        .business-challenge-container {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1300px;

          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 60px;
        }

        /* ================= LEFT CONTENT ================= */

        .business-challenge-content {
          flex: 1 1 420px;

          width: 100%;
          max-width: 500px;

          transform: translateX(15px);
        }

        /* ================= HEADING ================= */

        .business-challenge-heading {
          margin: 0 0 30px;

          font-size: 40px;
          font-weight: 700;
          line-height: 1.2;

          color: #1a1a1a;
        }

        /* ================= PARAGRAPH ================= */

        .business-challenge-paragraph {
          max-width: 420px;

          margin: 0 0 20px;

          font-size: 16px;
          line-height: 1.7;

          color: #4a4a4a;
        }

        /* ================= BUTTON WRAPPER ================= */

        .business-challenge-contact-wrapper {
          position: relative;
          display: inline-block;
          margin-top: 25px;
        }

        /* ================= BUTTON ================= */

        .business-challenge-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 14px 30px;

          background: #7a1338;
          color: #ffffff;

          font-size: 16px;
          font-weight: 600;

          text-decoration: none;

          border-radius: 6px;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;

          white-space: nowrap;
        }

        .business-challenge-button:hover {
          background: #5c0e2a;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ================= ARROW ================= */

        .business-challenge-arrow {
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .business-challenge-button:hover
        .business-challenge-arrow {
          transform: translate(3px, -3px);
        }

        /* ================= CONTACT ICONS ================= */

        .business-challenge-contact-options {
          position: absolute;
          left: 100%;
          top: 50%;

          display: flex;
          align-items: center;
          gap: 8px;

          margin-left: 10px;

          transform: translateY(-50%);

          visibility: hidden;
          opacity: 0;
          pointer-events: none;

          transition:
            opacity 0.3s ease,
            visibility 0.3s ease;

          z-index: 5;
        }

        .business-challenge-contact-options.show {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
        }

        .business-challenge-contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;
          flex-shrink: 0;

          border: 1px solid rgba(122, 19, 56, 0.35);
          border-radius: 50%;

          background: #ffffff;
          color: #7a1338;

          text-decoration: none;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .business-challenge-contact-icon:hover {
          background: #730042;
          color: #ffffff;
          border-color: #730042;
          transform: scale(1.08);
        }

        /* ================= IMAGE WRAPPER ================= */

        .business-challenge-image-wrapper {
          flex: 1 1 420px;

          width: 100%;
          max-width: 620px;

          transform: translateX(40px);
        }

        /* ================= IMAGE ================= */

        .business-challenge-image {
          display: block;

          width: 100%;
          height: auto;

          min-height: 420px;
          max-height: 520px;

          object-fit: cover;

          border-radius: 18px;

          box-shadow:
            0 25px 50px rgba(122, 19, 56, 0.15);
        }

        /* =====================================================
           LARGE LAPTOP
        ====================================================== */

        @media (max-width: 1200px) {
          .business-challenge-section {
            padding: 55px 50px;
            background-size: 60% auto;
          }

          .business-challenge-container {
            gap: 45px;
          }

          .business-challenge-content {
            max-width: 460px;
            transform: translateX(10px);
          }

          .business-challenge-image-wrapper {
            max-width: 540px;
            transform: translateX(20px);
          }

          .business-challenge-heading {
            font-size: 38px;
          }

          .business-challenge-image {
            min-height: 400px;
            max-height: 480px;
          }
        }

        /* =====================================================
           TABLET / SMALL LAPTOP
        ====================================================== */

        @media (max-width: 950px) {
          .business-challenge-section {
            padding: 50px 35px;
            background-size: 65% auto;
          }

          .business-challenge-container {
            gap: 35px;
          }

          .business-challenge-content {
            flex: 1 1 330px;
            max-width: 430px;

            transform: translateX(5px);
          }

          .business-challenge-image-wrapper {
            flex: 1 1 330px;
            max-width: 470px;

            transform: translateX(0);
          }

          .business-challenge-heading {
            font-size: 34px;
          }

          .business-challenge-paragraph {
            font-size: 15px;
          }

          .business-challenge-image {
            min-height: 380px;
            max-height: 430px;
          }

          .business-challenge-contact-options {
            gap: 6px;
            margin-left: 8px;
          }

          .business-challenge-contact-icon {
            width: 38px;
            height: 38px;
          }
        }

        /* =====================================================
           MOBILE / TABLET PORTRAIT
        ====================================================== */

        @media (max-width: 700px) {
          .business-challenge-section {
            padding: 50px 25px;

            background-size: 100% auto;
            background-position: right bottom;
          }

          .business-challenge-container {
            flex-direction: column;

            align-items: flex-start;

            gap: 40px;
          }

          .business-challenge-content {
            flex: none;

            width: 100%;
            max-width: 100%;

            transform: translateX(0);
          }

          .business-challenge-heading {
            font-size: 32px;
            line-height: 1.22;

            margin-bottom: 25px;
          }

          .business-challenge-paragraph {
            width: 100%;
            max-width: 100%;

            font-size: 15px;
            line-height: 1.7;

            margin-bottom: 18px;
          }

          .business-challenge-contact-wrapper {
            margin-top: 20px;
          }

          .business-challenge-button {
            margin-top: 0;

            padding: 13px 26px;

            font-size: 15px;
          }

          .business-challenge-image-wrapper {
            flex: none;

            width: 100%;
            max-width: 100%;

            transform: translateX(0);
          }

          .business-challenge-image {
            width: 100%;

            min-height: unset;
            max-height: unset;

            aspect-ratio: 4 / 3;

            object-fit: cover;
          }

          .business-challenge-contact-options {
            gap: 6px;
            margin-left: 7px;
          }

          .business-challenge-contact-icon {
            width: 34px;
            height: 34px;
          }

          .business-challenge-contact-icon svg {
            width: 16px;
            height: 16px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 480px) {
          .business-challenge-section {
            padding: 40px 20px;
          }

          .business-challenge-container {
            gap: 32px;
          }

          .business-challenge-heading {
            font-size: 28px;
            line-height: 1.25;

            margin-bottom: 22px;
          }

          .business-challenge-paragraph {
            font-size: 14px;
            line-height: 1.65;

            margin-bottom: 16px;
          }

          .business-challenge-button {
            width: auto;

            padding: 12px 23px;

            font-size: 14px;
          }

          .business-challenge-image {
            aspect-ratio: 1 / 1;

            border-radius: 14px;
          }

          .business-challenge-contact-options {
            gap: 5px;
            margin-left: 6px;
          }

          .business-challenge-contact-icon {
            width: 31px;
            height: 31px;
          }

          .business-challenge-contact-icon svg {
            width: 15px;
            height: 15px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ====================================================== */

        @media (max-width: 360px) {
          .business-challenge-section {
            padding: 35px 16px;
          }

          .business-challenge-heading {
            font-size: 25px;
          }

          .business-challenge-paragraph {
            font-size: 13.5px;
          }

          .business-challenge-contact-options {
            gap: 4px;
            margin-left: 5px;
          }

          .business-challenge-contact-icon {
            width: 28px;
            height: 28px;
          }

          .business-challenge-contact-icon svg {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
    </section>
  );
}


/* =====================================================================
   MERGED PAGE — renders all seven sections one after another
===================================================================== */

export default function MergedSoftwareSections() {
  return (
    <>
      <SoftwareDevelopmentHero />
      <SoftwareThatWorks />
      <WhatWeBuildSection />
      <StructuredApproachSection />
      <SoftwareGrowthSection />
      <TechnologyBusinessValue />
      <BusinessChallengeSection />
    </>
  );
}