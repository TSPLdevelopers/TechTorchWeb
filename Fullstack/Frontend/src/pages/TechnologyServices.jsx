import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
  Target,
  BrainCircuit,
  Cloud,
  IdCard,
  Repeat2,
  FolderKanban,
  Settings2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =====================================================================
   1) TECHNOLOGY MOVES FORWARD
===================================================================== */

export function TechnologyMovesForward() {
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
    <section className="relative w-full overflow-hidden">
      {/* HERO BACKGROUND */}
      <div
        className="
          relative
          h-[330px]
          w-full
          sm:h-[360px]
          md:h-[390px]
          lg:h-[450px]
          xl:h-[480px]
        "
      >
        <img
          src="/Slide4.1.png"
          alt="Technology moving business forward"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/10" />

        {/* CONTENT */}
        <div
          className="
            absolute inset-0 w-full
            px-4 sm:px-6 md:px-10 lg:px-[100px]
          "
        >
          <div
            className="
              flex h-full max-w-[590px]
              flex-col justify-center
              -translate-y-3
              sm:-translate-y-4
              md:-translate-y-5
            "
          >
            {/* HEADING */}
            <h1
              className="
                font-['Plus_Jakarta_Sans']
                text-[22px] font-medium
                leading-[1.08] tracking-[-0.7px] text-white
                min-[400px]:text-[24px]
                sm:text-[27px]
                md:text-[30px]
                lg:text-[34px]
                xl:text-[35px]
              "
            >
              Technology That Moves Your
              <br className="hidden sm:block" />
              Business Forward
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-2 max-w-[560px]
                font-['Inter'] text-[11px]
                font-light leading-[1.4] text-white
                sm:mt-3 sm:text-[12px]
                md:text-[13px] lg:text-[14px]
              "
            >
              We help businesses use technology to work smarter, solve
              complex challenges and prepare for what comes next. From
              software and cloud to AI and cybersecurity, our solutions are
              built around your business needs.
            </p>

            {/* BUTTON + CONTACT ICONS */}
            <div className="mt-5 sm:mt-6 md:mt-7 translate-y-2">
              <div
                ref={contactRef}
                className="relative inline-block"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* TALK TO OUR EXPERTS BUTTON */}
                <Link
                  to="/talk-to-expert"
                  className="
                    group inline-flex items-center gap-2
                    rounded-[5px] border border-white
                    bg-transparent
                    !px-[12px] !py-[8px]
                    font-['Inter'] text-[12px]
                    font-medium leading-none text-white
                    transition-all duration-300
                    hover:bg-white hover:text-[#22091f]
                    sm:text-[13px]
                    md:!px-[14px] md:!py-[9px] md:text-[14px]
                  "
                >
                  <span>Talk to Our Experts</span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="
                      shrink-0
                      transition-transform duration-300
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
                          h-10 w-10
                          sm:h-11 sm:w-11
                          shrink-0
                          items-center justify-center
                          rounded-full
                          border border-white/50
                          bg-black/80
                          text-white
                          backdrop-blur-md
                          transition-all duration-300
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
      </div>
    </section>
  );
}


/* =====================================================================
   2) TECHNOLOGY THAT WORKS
===================================================================== */

export function TechnologyThatWorks() {
  return (
    <section className="w-full bg-[#faf9f4]">
      {/* Left/right padding same as Hero: 16 / 24 / 40 / 100 */}
      <div
        className="
          w-full

          px-4
          py-8

          sm:px-6
          sm:py-9

          md:px-10
          md:py-10

          lg:px-[100px]
          lg:py-11

          xl:py-12
        "
      >
        {/* =====================================================
            HEADING
        ====================================================== */}
        <h2
          className="
            max-w-[650px]
            font-['Plus_Jakarta_Sans']
            text-[28px]
            font-medium
            leading-[1.08]
            tracking-[-1.2px]
            text-[#111111]

            min-[400px]:text-[30px]

            sm:text-[34px]
            sm:tracking-[-1.3px]

            md:text-[38px]
            md:tracking-[-1.5px]

            lg:text-[42px]
            lg:tracking-[-1.7px]

            xl:text-[34px]
          "
        >
          <span className="text-[#730042]">Technology</span>{" "}
          That Works
          <br />
          for Your Business
        </h2>

        {/* =====================================================
            TWO COLUMN CONTENT
        ====================================================== */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-x-12
            gap-y-7

            min-[400px]:gap-y-8

            sm:mt-9
            sm:gap-y-8

            md:mt-10
            md:gap-y-9

            lg:grid-cols-2
            lg:gap-x-16
            lg:gap-y-10

            xl:gap-x-20
          "
        >
          {/* =================================================
              LEFT COLUMN
          ================================================== */}
          <div
            className="
              w-full
              max-w-[610px]
              font-['Inter']
              text-[15px]
              font-normal
              leading-[1.5]
              text-[#333333]

              sm:text-[15px]

              md:text-[16px]

              lg:text-[15px]
              lg:leading-[1.5]
            "
          >
            <p>
              Technology is most effective when it solves a real business
              need.
            </p>

            <p className="mt-6 sm:mt-7 lg:mt-8">
              At TechTorch Solutions, we bring together technology expertise,
              engineering capabilities and business understanding to help
              organizations improve the way they operate, modernize their
              systems and respond to changing business needs.
            </p>

            <p className="mt-6 sm:mt-7 lg:mt-8">
              Our technology services cover the areas businesses rely on to
              build and maintain a modern digital environment—from IT
              consulting and AI to cloud infrastructure, cybersecurity and
              software engineering. We also provide software development and
              support, business process outsourcing, and skilled technology
              resources to help businesses strengthen both their technology
              and their teams.
            </p>
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================== */}
          <div
            className="
              w-full
              max-w-[560px]

              lg:translate-x-12
              xl:translate-x-16

              font-['Inter']
              text-[14px]
              font-normal
              leading-[1.5]
              text-[#333333]

              sm:text-[15px]

              md:text-[16px]

              lg:text-[15px]
              lg:leading-[1.5]
            "
          >
            <p>
              Whether you are looking to improve an existing system, develop a
              new solution, move to the cloud or bring additional technical
              expertise into your organization, we focus on understanding your
              requirements first and then building a solution that is
              practical, reliable and ready to grow with your business.
            </p>

            <p className="mt-10 sm:mt-11 lg:mt-12">
              Our approach is simple: understand the challenge, find the right
              technology and build a solution that delivers lasting value.
              With the right combination of people, expertise and technology,
              we help businesses move forward with greater confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


/* =====================================================================
   3) TECHNOLOGY SERVICES
===================================================================== */

const MAROON = "#7a1338";
const CREAM = "#f7f4ef";

const cards = [
  {
    id: "it-consultancy",
    icon: Target,
    title: "IT Consultancy",
    description:
      "We help you assess your technology, identify opportunities and create a clear direction aligned with your business goals.",
    cta: "Explore IT Consultancy",
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "We help businesses apply AI to automate processes, improve insights and create smarter ways of working.",
    cta: "Explore AI Services",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "We build and modernize cloud environments that improve flexibility, reliability, performance and scalability.",
    cta: "Explore Cloud Services",
  },
  {
    id: "staffing",
    icon: IdCard,
    title: "Resource & Staffing",
    description:
      "We provide skilled technology professionals and flexible resources to support projects and evolving business requirements.",
    cta: "Explore Staffing Services",
  },
  {
    id: "bpo",
    icon: Repeat2,
    title: "Business Process Outsourcing",
    description:
      "We support essential business processes so your teams can focus on strategic priorities and growth.",
    cta: "Explore BPO Services",
  },
  {
    id: "software-dev-support",
    icon: FolderKanban,
    title: "Software Development & Support",
    description:
      "We develop, maintain and improve software to keep your systems reliable and ready for changing needs.",
    cta: "Explore Software Development",
  },
  {
    id: "software-engineering",
    icon: Settings2,
    title: "Software Engineering",
    description:
      "We design and develop reliable software solutions around your business requirements.",
    cta: "Explore Software Engineering",
  },
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "We help businesses strengthen security, reduce risk and protect critical systems and information.",
    cta: "Explore Cybersecurity",
  },
];

const VISIBLE_CARDS = 3;
const CARD_WIDTH = 280;
const CARD_GAP = 37;

const totalPages = Math.ceil(cards.length / VISIBLE_CARDS);

export function TechnologyServicesSection() {
  const [page, setPage] = useState(0);

  const goPrev = () => {
    setPage((p) => Math.max(0, p - 1));
  };

  const goNext = () => {
    setPage((p) => Math.min(totalPages - 1, p + 1));
  };

  return (
    <section className="technology-services-section">
      <div className="technology-services-container">
        {/* ================= HEADING ================= */}

        <div className="services-header">
          <div className="services-header-content">
            <h2>OUR TECHNOLOGY SERVICES</h2>

            <p>
              We provide practical technology services that help businesses
              modernize, improve efficiency and solve complex challenges. From
              software and cloud to AI, cybersecurity and technical expertise,
              our solutions are built around your business needs.
            </p>
          </div>

          {/* ================= BUTTONS ================= */}

          <div className="slider-controls">
            <button
              onClick={goPrev}
              disabled={page === 0}
              className="slider-control"
              aria-label="Previous cards"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              onClick={goNext}
              disabled={page === totalPages - 1}
              className="slider-control"
              aria-label="Next cards"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>

        {/* ================= SLIDER ================= */}

        <div className="cards-viewport">
          <div
            className="cards-track"
            style={{
              transform: `translateX(-${
                page * VISIBLE_CARDS * (CARD_WIDTH + CARD_GAP)
              }px)`,
            }}
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  className="service-card"
                  style={{
                    flex: `0 0 ${CARD_WIDTH}px`,
                  }}
                >
                  {/* ================= ICON ================= */}

                  <div className="service-icon">
                    <Icon
                      size={23}
                      color="#ffffff"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* ================= TITLE ================= */}

                  <h3>{card.title}</h3>

                  {/* ================= DESCRIPTION ================= */}

                  <p>{card.description}</p>

                  {/* ================= CTA ================= */}

                  <a href="#">
                    {card.cta}
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* ================= SECTION ================= */

        .technology-services-section {
          position: relative;

          /* Vertical padding */
          padding-top: 60px;
          padding-bottom: 60px;

          /* Left/right padding same as Hero: 16 / 24 / 40 / 100 */
          padding-left: 16px;
          padding-right: 16px;

          background: ${MAROON};

          background-image:
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.08) 0px,
              rgba(255,255,255,0.08) 1px,
              transparent 1px,
              transparent 90px
            );

          font-family: "Plus Jakarta Sans", sans-serif;

          overflow: hidden;
          box-sizing: border-box;
        }

        @media (min-width: 640px) {
          .technology-services-section {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        @media (min-width: 768px) {
          .technology-services-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (min-width: 1024px) {
          .technology-services-section {
            padding-left: 100px;
            padding-right: 100px;
          }
        }

        /* ================= CONTAINER ================= */

        .technology-services-container {
          width: 100%;
        }

        /* ================= HEADER ================= */

        .services-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;

          gap: 30px;

          margin-bottom: 40px;
        }

        .services-header-content {
          max-width: 640px;
        }

        .services-header h2 {
          font-size: 24px;
          font-weight: 700;

          letter-spacing: 0.5px;

          color: #ffffff;

          margin: 0 0 16px;
        }

        .services-header p {
          font-size: 15px;
          line-height: 1.7;

          color: #e9d3dd;

          margin: 0;
        }

        /* ================= CONTROLS ================= */

        .slider-controls {
          display: flex;
          gap: 12px;

          flex-shrink: 0;
        }

        .slider-control {
          width: 40px;
          height: 40px;

          border-radius: 50%;
          border: none;

          background: #ffffff;
          color: ${MAROON};

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .slider-control:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        .slider-control:disabled {
          opacity: 0.5;
          cursor: default;
        }

        /* ================= VIEWPORT ================= */

        .cards-viewport {
          width: 100%;
          overflow: hidden;
        }

        /* ================= TRACK ================= */

        .cards-track {
          display: flex;

          gap: ${CARD_GAP}px;

          /* No left padding, so first card aligns with heading */
          padding-left: 0;

          box-sizing: border-box;

          transition: transform 0.45s ease;

          will-change: transform;
        }

        /* ================= CARD ================= */

        .service-card {
          background: ${CREAM};

          border: 1px solid #e6b8cf;
          border-radius: 14px;

          min-height: 330px;

          padding: 30px 28px;

          box-sizing: border-box;

          display: flex;
          flex-direction: column;

          flex-shrink: 0;
        }

        /* ================= ICON ================= */

        .service-icon {
          width: 50px;
          height: 50px;

          border-radius: 50%;

          background: ${MAROON};

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 22px;
        }

        /* ================= TITLE ================= */

        .service-card h3 {
          font-size: 18px;
          font-weight: 700;

          line-height: 1.3;

          color: #1a1a1a;

          margin: 0 0 13px;
        }

        /* ================= DESCRIPTION ================= */

        .service-card p {
          font-size: 14px;
          line-height: 1.65;

          color: #555555;

          margin: 0 0 22px;

          flex-grow: 1;
        }

        /* ================= LINK ================= */

        .service-card a {
          display: inline-flex;
          align-items: center;

          gap: 7px;

          font-size: 14px;
          font-weight: 700;

          color: #1a1a1a;

          text-decoration: none;

          transition: gap 0.2s ease;
        }

        .service-card a:hover {
          gap: 11px;
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .technology-services-section {
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .services-header {
            gap: 25px;
          }

          .service-card {
            min-height: 320px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 768px) {
          .technology-services-section {
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .services-header {
            flex-direction: column;
          }

          .services-header-content {
            max-width: 100%;
          }

          .slider-controls {
            align-self: flex-start;
          }

          .services-header h2 {
            font-size: 22px;
          }

          .service-card {
            min-height: 310px;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 480px) {
          .technology-services-section {
            padding-top: 42px;
            padding-bottom: 42px;
          }

          .services-header {
            margin-bottom: 30px;
          }

          .services-header h2 {
            font-size: 20px;
          }

          .services-header p {
            font-size: 14px;
          }

          .service-card {
            min-height: 300px;
            padding: 26px 22px;
          }
        }
      `}</style>
    </section>
  );
}


/* =====================================================================
   4) HOW WE WORK
===================================================================== */

export function HowWeWork() {
  return (
    <section className="relative block w-full bg-[#faf9f4] px-0">

      {/* OUTER CONTAINER */}
      <div
        className="
          mx-auto
          w-full
          overflow-hidden
          bg-[#faf9f4]
        "
      >

        {/* CONTENT + IMAGE */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-[57%_43%]
            lg:h-[600px]
            xl:grid-cols-[57%_43%]
            xl:h-[570px]
          "
        >

          {/* ================= LEFT ================= */}
          {/* Left padding same as Hero: 16 / 24 / 40 / 100 */}
          <div
            className="
              flex
              flex-col
              justify-center

              pl-4
              pr-4
              py-10

              sm:pl-6
              sm:pr-6
              sm:py-12

              md:pl-10
              md:pr-8
              md:py-10

              lg:pl-[100px]
              lg:pr-8
              lg:py-6

              xl:py-6
            "
          >
            <p className="mb-3 text-[16px] font-medium tracking-wide text-[#333]">
              HOW WE WORK
            </p>

            <h2
              className="
                text-[24px]
                font-['Plus_Jakarta_Sans']
                font-medium
                leading-[1.05]
                tracking-[-1px]
                text-[#111]

                sm:text-[30px]
                md:text-[32px]

                lg:text-[34px]
                xl:text-[34px]
              "
            >
              A Clear Approach to
              <br />
              <span className="text-[#8b0750]">
                Better Technology
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[600px]
                text-[14px]
                text-['Inter']
                leading-[1.55]
                sm:text-[15px]
                md:text-[14px]
                lg:text-[15px]
                xl:text-[15px]
              "
            >
              Every business has its own goals, challenges and way of
              working. We believe technology should be built around those
              needs rather than forcing businesses to adapt to a fixed
              solution. That is why we take a clear and collaborative
              approach, starting with understanding your business and
              ending with solutions that can continue to evolve with it.
              We work closely with our clients throughout the process to
              understand what matters most, define the right direction and
              deliver technology that is practical, reliable and built for
              long-term use.
            </p>

            <h3
              className="
                mt-5
                text-[16px]
                text-['Inter']
                font-semibold

                sm:text-[17px]
                md:text-[17px]

                lg:text-[18px]
              "
            >
              From Understanding to Execution
            </h3>

            {/* STEPS */}
            <div className="mt-4 flex flex-col gap-3">

              {/* Understand */}
              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#8b0750]
                  "
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>
                </div>

                <span
                  className="
                    text-[16px]
                    text-['Inter']
                    font-medium

                    sm:text-[17px]

                    md:text-[17px]

                    lg:text-[17px]
                  "
                >
                  Understand
                </span>
              </div>

              {/* Build */}
              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#8b0750]
                  "
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m8 9-3 3 3 3" />
                    <path d="m16 9 3 3-3 3" />
                    <path d="m14 5-4 14" />
                  </svg>
                </div>

                <span
                  className="
                    text-[16px]
                    font-medium
                    text-['Inter']

                    sm:text-[17px]

                    md:text-[17px]

                    lg:text-[17px]
                  "
                >
                  Build
                </span>
              </div>

              {/* Grow */}
              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#8b0750]
                  "
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m7 15 4-4 3 3 6-7" />
                    <path d="M16 7h4v4" />
                  </svg>
                </div>

                <span
                  className="
                    text-[16px]
                    font-medium
                    text-['Inter']

                    sm:text-[17px]

                    md:text-[17px]

                    lg:text-[17px]
                  "
                >
                  Grow
                </span>
              </div>

            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div
            className="
              relative
              flex
              h-auto
              w-full
              items-center
              justify-center
              overflow-hidden
              py-8

              sm:py-10

              md:h-full
              md:items-center
              md:justify-end
              md:py-0

              lg:h-full
              lg:items-start
              lg:justify-end
              lg:py-0

              xl:h-full
              xl:items-start
              xl:justify-end
              xl:py-0
            "
          >
            <img
              src="/Slide4.2.png"
              alt="How we work"
              className="
                block
                h-auto
                w-[82%]
                max-w-[500px]
                object-contain

                sm:w-[80%]

                md:h-full
                md:w-auto
                md:max-w-none
                md:object-contain

                lg:h-full
                lg:w-auto
                lg:max-w-none
                lg:object-cover

                xl:absolute
                xl:top-0
                xl:right-0
                xl:h-full
                xl:w-[80%]
                xl:max-w-none
                xl:object-cover
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}


/* =====================================================================
   5) LET'S CONNECT
===================================================================== */

export function LetsConnect() {
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
        overflow-hidden
        bg-[#170b17]
        h-[430px]
        sm:h-[460px]
        md:h-[500px]
        lg:h-[540px]
        xl:h-[570px]
      "
    >
      {/* IMAGE */}
      <img
        src="/Slide4.3.png"
        alt="Let's Connect"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-fill
        "
      />

      {/* CONTENT WRAPPER */}
      <div
        className="
          absolute
          inset-0
          z-10
          flex
          items-center
        "
      >
        <div
          className="
            w-[62%]
            pl-4
            pr-3
            sm:w-[61%]
            sm:pl-6
            sm:pr-4
            md:w-[60%]
            md:pl-10
            md:pr-5
            lg:w-[59%]
            lg:pl-[100px]
            lg:pr-6
            xl:w-[58%]
            xl:pr-8
          "
        >
          {/* SMALL HEADING */}
          <p
            className="
              -translate-y-8
              mb-5
              text-[13px]
              font-medium
              uppercase
              tracking-[0.01em]
              text-white
              sm:-translate-y-9
              sm:mb-6
              sm:text-[15px]
              md:-translate-y-10
              md:mb-7
              md:text-[17px]
              lg:-translate-y-11
              lg:mb-8
              lg:text-[18px]
              xl:-translate-y-[60px]
              xl:mb-9
              xl:text-[19px]
            "
          >
            LET’S CONNECT
          </p>

          {/* MAIN HEADING */}
          <h1
            className="
              -translate-y-6
              text-[25px]
              font-semibold
              font-['Plus_Jakarta_Sans']
              leading-[1.08]
              tracking-[-0.02em]
              text-white
              sm:-translate-y-7
              sm:text-[32px]
              md:-translate-y-8
              md:text-[34px]
              lg:-translate-y-9
              lg:text-[36px]
              xl:-translate-y-10
              xl:text-[36px]
            "
          >
            LET'S BUILD WHAT'S NEXT
          </h1>

          {/* QUESTION */}
          <h2
            className="
              -translate-y-5
              mt-4
              whitespace-nowrap
              text-[18px]
              font-medium
              font-['Inter']
              leading-[1.2]
              text-white
              sm:-translate-y-6
              sm:mt-5
              sm:text-[20px]
              md:-translate-y-7
              md:mt-6
              md:text-[24px]
              lg:-translate-y-8
              lg:mt-7
              lg:text-[26px]
              xl:-translate-y-9
              xl:mt-8
              xl:text-[26px]
            "
          >
            Have a Technology Challenge?
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              -translate-y-5
              mt-2
              max-w-[480px]
              text-[13px]
              font-['Inter']
              font-normal
              leading-[1.4]
              text-white
              sm:-translate-y-6
              sm:mt-3
              sm:text-[15px]
              md:-translate-y-7
              md:mt-3
              md:text-[16px]
              lg:-translate-y-8
              lg:mt-4
              lg:text-[17px]
              xl:-translate-y-9
              xl:mt-4
              xl:text-[17px]
            "
          >
            Let's understand your requirements and
            <br className="hidden sm:block" />
            find a practical way forward.
          </p>

          {/* BUTTON + CONTACT ICONS */}
          <div
            className="
              mt-6
              translate-y-5
              sm:mt-7
              sm:translate-y-6
              md:mt-8
              md:translate-y-7
              lg:mt-9
              lg:translate-y-8
            "
          >
            <div
              ref={contactRef}
              className="relative inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* TALK TO OUR EXPERTS BUTTON */}
              <Link
                to="/talk-to-expert"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-2
                  rounded-[5px]
                  border
                  border-white
                  bg-transparent
                  !px-[10px]
                  !py-[8px]
                  text-[13px]
                  font-medium
                  leading-none
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-[#22091f]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[17px]
                "
              >
                <span>Talk to Our Experts</span>

                <ArrowUpRight
                  size={18}
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

              {/* CONTACT ICONS — BUTTON POSITION DOES NOT CHANGE */}
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
                        bg-[#170b17]/90
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
   MERGED PAGE — renders all five sections one after another
===================================================================== */

export default function MergedTechnologySections() {
  return (
    <>
      <TechnologyMovesForward />
      <TechnologyThatWorks />
      <TechnologyServicesSection />
      <HowWeWork />
      <LetsConnect />
    </>
  );
}