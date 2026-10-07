import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ShieldCheck,
  Link2,
  LockKeyhole,
  BookOpen,
  Users,
  GraduationCap,
  Laptop,
  UserRoundCheck,
  CreditCard,
  BarChart3,
  Database,
  Filter,
  Building2,
  Radio,
  TrendingUp,
  RefreshCw,
  Network,
  Scale,
  Clock3,
  Handshake,
} from "lucide-react";

/* =========================================================
   COLORS
========================================================= */

const MAROON = "#85004A";
const MAROON_DARK = "#70003F";
const MAROON_LIGHT = "#F5EAF0";
const TEXT = "#171719";
const MUTED = "#6F6368";
const BORDER = "#E8E1E5";
const CREAM = "#FBFAF5";

const HERO_IMAGE = "/EducationSolutions.png";

/* =========================================================
   FONT SYSTEM
   Heading / Subheading -> Plus Jakarta Sans
   Other text -> Inter
========================================================= */

const HEADING_FONT = "font-['Plus_Jakarta_Sans']";
const BODY_FONT = "font-['Inter']";

/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

function Eyebrow({ icon: Icon, children, light = false }) {
  return (
    <div
      className={`inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] ${BODY_FONT} ${
        light
          ? "border-white/25 bg-white/10 text-white"
          : "border-[#E4D2DC] bg-[#F8F0F4] text-[#741044]"
      }`}
    >
      {Icon && <Icon size={12} strokeWidth={2.2} />}
      <span>{children}</span>
    </div>
  );
}

function PrimaryButton({ children }) {
  return (
    <button
      className={`group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#85004A] px-6 py-3.5 sm:w-auto ${BODY_FONT} text-[12px] font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#70003F]`}
    >
      {children}

      <ArrowRight
        size={17}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </button>
  );
}

function SecondaryButton({ children }) {
  return (
    <button
      className={`inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#E2E6EA] bg-[#F8F9FA] px-6 py-3.5 sm:w-auto ${BODY_FONT} text-[12px] font-semibold uppercase tracking-[0.08em] text-[#302A2D] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm`}
    >
      {children}
    </button>
  );
}

function IconBox({ children, dark = false }) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
        dark
          ? "border border-white/15 bg-white/10 text-white"
          : "bg-[#F2E7ED] text-[#85004A]"
      }`}
    >
      {children}
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="education-section education-hero">
      <div className="education-container">
        <div className="hero-card">
          <div className="hero-grid">
            {/* LEFT CONTENT */}
            <div className="hero-content">
              <div
                className={`inline-flex w-fit items-center gap-1.5 rounded-full border border-[#E4D2DC] bg-[#F8F0F4] px-3 py-1.5 ${BODY_FONT} text-[9px] font-semibold uppercase tracking-[0.14em] text-[#741044]`}
              >
                <span className="h-[7px] w-[7px] rounded-full bg-[#730042]" />
                <span>TechTorch Solutions · Education Platform</span>
              </div>

              <h1
                className={`
                  mt-6
                  max-w-[650px]
                  ${HEADING_FONT}
                  text-[30px]
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.05em]
                  text-[#111113]
                  sm:mt-7
                  sm:text-[34px]
                  md:text-[38px]
                  lg:text-[42px]
                  xl:text-[44px]
                `}
              >
                <span className="block">Technology Solutions for</span>

                <span className="mt-1 block">Modern Education</span>
              </h1>

              <p
                className={`
                  mt-6
                  max-w-[650px]
                  ${BODY_FONT}
                  text-[14px]
                  leading-6
                  text-[#6C6065]
                  sm:mt-7
                  sm:text-[15px]
                  md:text-[16px]
                `}
              >
                Connected digital solutions for academic, administrative and
                institutional operations.
              </p>

              <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  onClick={() => navigate("/start-conversation")}
                  className={`
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    bg-[#730042]
                    px-5 py-2.5
                    sm:w-auto
                    ${BODY_FONT}
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.06em]
                    text-white
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#620038]
                  `}
                >
                  Talk to Our Experts

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>

                <button
                  onClick={() => navigate("/schedule-discovery")}
                  className={`
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    border
                    border-[#E2E6EA]
                    bg-[#F8F9FA]
                    px-5 py-2.5
                    sm:w-auto
                    ${BODY_FONT}
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.06em]
                    text-[#302A2D]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-white
                    hover:shadow-sm
                  `}
                >
                  <CalendarDays size={16} className="text-[#730042]" />
                  Schedule Discovery
                </button>
              </div>

              <div className="mt-8 border-t border-[#ECE8E9] pt-5">
                <div className="flex flex-col gap-3">
                  <FeatureLine
                    icon={<ShieldCheck size={16} />}
                    text="Institutional Standards Compliant"
                  />

                  <FeatureLine
                    icon={<Link2 size={16} />}
                    text="Interoperable Open Architecture"
                  />

                  <FeatureLine
                    icon={<LockKeyhole size={16} />}
                    text="Privacy-First Security Governance"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hero-image-column">
              <div className="relative h-full w-full max-w-[420px]">
                <div className="hero-image-wrapper">
                  <img
                    src={HERO_IMAGE}
                    alt="Modern university education environment"
                    className="hero-image"
                  />

                  {/* TOP BADGE */}
                  <div
                    className={`
                      absolute
                      left-3 top-3
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-white
                      px-3 py-1.5
                      ${BODY_FONT}
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.07em]
                      text-[#292326]
                      shadow-md
                      sm:left-4 sm:top-4
                    `}
                  >
                    <span className="h-[7px] w-[7px] rounded-full bg-[#1DBA82]" />
                    Smart Campus Hub
                  </div>

                  {/* BOTTOM CARD */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-[13px] border border-white/70 bg-white/95 p-2.5 shadow-lg backdrop-blur-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#730042] text-white">
                        <GraduationCap size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3
                          className={`${HEADING_FONT} text-[12px] font-semibold leading-4 text-[#191719]`}
                        >
                          Next-Gen Campus Deployment
                        </h3>

                        <p
                          className={`mt-0.5 ${BODY_FONT} text-[10px] leading-3.5 text-[#756B70]`}
                        >
                          Connecting educators, administrators & students
                        </p>
                      </div>

                      <div
                        className={`hidden items-center gap-1 rounded-full border border-[#A7E7D0] bg-[#F1FFF9] px-2 py-1 ${BODY_FONT} text-[9px] font-semibold text-[#23936E] sm:flex`}
                      >
                        <ShieldCheck size={11} />
                        Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURE LINE
========================================================= */

function FeatureLine({ icon, text }) {
  return (
    <div
      className={`flex items-start gap-2.5 ${BODY_FONT} text-[10px] font-semibold uppercase tracking-[0.15em] text-[#655B60]`}
    >
      <span className="mt-0.5 shrink-0 text-[#730042]">{icon}</span>

      <span>{text}</span>
    </div>
  );
}

/* =========================================================
   EDITORIAL SECTION
========================================================= */

function EditorialSection() {
  return (
    <section className="education-section">
      <div className="education-container">
        <div className="editorial-card">
          <Eyebrow icon={BookOpen}>
            Editorial Perspective · Modern Institutional Architecture
          </Eyebrow>

          <h2
            className={`
              mt-6
              max-w-[900px]
              ${HEADING_FONT}
              text-[28px]
              font-medium
              leading-[1.08]
              tracking-[-0.04em]
              text-[#171719]
              sm:text-[30px]
              md:text-[34px]
              lg:text-[38px]
            `}
          >
            Connecting People, Processes, and Learning
            <br className="hidden sm:block" />
            Systems into One Unified Institutional Ecosystem
          </h2>

          <p
            className={`
              mt-5
              max-w-[1020px]
              ${BODY_FONT}
              text-[14px]
              leading-6
              text-[#6D6266]
              sm:text-[15px]
            `}
          >
            Educational institutions today face a structural challenge:
            academic departments, admissions pipelines, student records, and
            campus operations frequently run on disconnected legacy platforms.
            When software operates in silos, faculty spend valuable hours on
            redundant paperwork, students face friction during registration,
            and leadership lacks real-time institutional visibility.
          </p>

          <div className="mt-7 overflow-hidden rounded-xl border border-[#ECE8E8] bg-[#F5F5F5]">
            <div className="border-l-[3px] border-[#85004A] px-5 py-5 sm:px-8 sm:py-6">
              <p
                className={`${BODY_FONT} max-w-[950px] text-[14px] font-medium italic leading-6 text-[#40383C]`}
              >
                “At TechTorch Solutions, our belief is simple: Technology
                shouldn't add layers of complexity. It should connect people,
                streamline essential workflows, and give institutions the
                digital agility to grow sustainably.”
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-md bg-[#85004A] ${BODY_FONT} text-[9px] font-bold text-white`}
                >
                  TT
                </div>

                <span
                  className={`${BODY_FONT} text-[9px] font-semibold uppercase tracking-[0.15em] text-[#756A70]`}
                >
                  TechTorch Architectural Principles · Campus Transformation
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <SimpleInfoCard
              icon={<Database size={18} />}
              title="Beyond Disconnected Software"
              description="Moving from isolated vendor tools to an interoperable data architecture that preserves institutional governance."
            />

            <SimpleInfoCard
              icon={<Users size={18} />}
              title="Empowering Educators & Students"
              description="Reducing repetitive administrative overhead so faculties can focus on teaching and students enjoy seamless digital access."
            />

            <SimpleInfoCard
              icon={<RocketIcon />}
              title="Scalable & Future-Ready Foundation"
              description="Architecting cloud-native, modular systems that evolve alongside institutional accreditation, multi-campus expansions, and hybrid learning models."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RocketIcon() {
  return <TrendingUp size={18} />;
}

function SimpleInfoCard({ icon, title, description }) {
  return (
    <div className="rounded-xl border border-[#E7E4E4] bg-[#F9F9F8] p-5">
      <IconBox>{icon}</IconBox>

      <h3
        className={`mt-5 ${HEADING_FONT} text-[15px] font-semibold leading-5 text-[#252125]`}
      >
        {title}
      </h3>

      <p
        className={`mt-2 ${BODY_FONT} text-[13px] leading-5 text-[#766B70]`}
      >
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   CORE SOLUTIONS
========================================================= */

const CORE_SOLUTIONS = [
  {
    icon: <GraduationCap size={18} />,
    title: "Student & Academic Management",
    description:
      "Profiles, transcripts, degree audits, student progress",
  },
  {
    icon: <UserRoundCheck size={18} />,
    title: "Admissions & Enrollment",
    description:
      "Online applications, documentation, tracking & enrollment workflows",
  },
  {
    icon: <Laptop size={18} />,
    title: "Digital Learning",
    description:
      "Virtual classrooms, coursework, learning material distribution & assessment",
  },
  {
    icon: <Users size={18} />,
    title: "Faculty Management",
    description:
      "Workload planning, schedule coordination, department administration",
  },
  {
    icon: <CreditCard size={18} />,
    title: "Finance & Administration",
    description:
      "Tuition billing, fee management, payroll support & institutional reporting",
  },
  {
    icon: <BarChart3 size={18} />,
    title: "Reporting & Insights",
    description:
      "Centralized dashboards, operational analytics & multi-campus visibility",
  },
];

function CoreSolutionsSection() {
  return (
    <section className="education-section">
      <div className="education-container">
        <div className="white-section-card">
          <Eyebrow>Practical Digital Capabilities</Eyebrow>

          <h2
            className={`
              mt-5
              ${HEADING_FONT}
              text-[28px]
              font-semibold
              tracking-[-0.04em]
              text-[#171719]
              sm:text-[30px]
              md:text-[34px]
            `}
          >
            Core Education Solutions
          </h2>

          <p
            className={`mt-3 max-w-[760px] ${BODY_FONT} text-[14px] leading-6 text-[#71666B] sm:text-[15px]`}
          >
            Practical digital capabilities designed to support every layer of
            institutional operations.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_SOLUTIONS.map((item) => (
              <SolutionCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ icon, title, description }) {
  return (
    <div
      className="
        group
        relative
        min-h-[175px]
        overflow-hidden
        rounded-xl
        border
        border-[#E5E2E3]
        bg-[#FAFAFA]
        p-5
        shadow-[0_7px_18px_rgba(30,0,20,0.06)]
        transition-all
        duration-300
        ease-in-out
        hover:-translate-y-2
        hover:border-[#730042]
        hover:bg-[#eee9ec]
        hover:shadow-[0_16px_32px_rgba(30,0,20,0.16)]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -right-[45px]
          -top-[45px]
          z-0
          h-[130px]
          w-[130px]
          rounded-full
          bg-[#730042]/[0.04]
          blur-[28px]
          transition-opacity
          duration-300
        "
      />

      <div className="relative z-10">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            bg-[#730042]/10
            text-[#730042]
            transition-all
            duration-300
          "
        >
          {icon}
        </div>

        <h3
          className={`
            mt-5
            max-w-[230px]
            ${HEADING_FONT}
            text-[14px]
            font-semibold
            leading-5
            text-[#292327]
            transition-colors
            duration-300
            group-hover:text-[#730042]
          `}
        >
          {title}
        </h3>

        <p
          className={`
            mt-2
            ${BODY_FONT}
            text-[13px]
            leading-5
            text-[#756A70]
            transition-colors
            duration-300
            group-hover:text-[#475569]
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   SIX PILLARS
========================================================= */

const PILLARS = [
  {
    icon: <Database size={18} />,
    number: "01",
    title: "Student Information & Records",
    description:
      "Centralize student profiles, academic records and essential institutional information.",
  },
  {
    icon: <Filter size={18} />,
    number: "02",
    title: "Admissions & Enrollment",
    description:
      "Manage applications, documents and enrollment through an organized workflow.",
  },
  {
    icon: <UserRoundCheck size={18} />,
    number: "03",
    title: "Faculty & Workload Management",
    description:
      "Support faculty scheduling, workload planning and academic coordination.",
  },
  {
    icon: <Building2 size={18} />,
    number: "04",
    title: "Digital Campus Operations",
    description:
      "Connect attendance, campus activities and everyday operational processes.",
  },
  {
    icon: <Radio size={18} />,
    number: "05",
    title: "Digital Learning",
    description:
      "Support courses, learning content, assignments and assessments.",
  },
  {
    icon: <TrendingUp size={18} />,
    number: "06",
    title: "Analytics & Multi-Campus",
    description:
      "Improve visibility across academic, operational and institutional activities.",
  },
];

function PillarsSection() {
  return (
    <section className="education-section">
      <div className="education-container">
        <div className="cream-section-card">
          <Eyebrow>Modular Institutional Taxonomy</Eyebrow>

          <h2
            className={`
              mt-5
              ${HEADING_FONT}
              text-[28px]
              font-semibold
              tracking-[-0.04em]
              text-[#171719]
              sm:text-[30px]
              md:text-[34px]
            `}
          >
            Six Specialized Education Pillars
          </h2>

          <p
            className={`mt-3 max-w-[780px] ${BODY_FONT} text-[14px] leading-6 text-[#71666B] sm:text-[15px]`}
          >
            Each capability can be integrated independently into legacy
            environments or combined to create a unified campus operating
            standard.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((item) => (
              <PillarCard key={item.number} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({ icon, number, title, description }) {
  return (
    <div className="relative min-h-[175px] overflow-hidden rounded-xl border border-[#E4E0E0] bg-[#FAFAFA] p-5">
      <span
        className={`pointer-events-none absolute right-3 top-0 ${BODY_FONT} text-[52px] font-light leading-none text-[#F0EEEE]`}
      >
        {number}
      </span>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <IconBox>{icon}</IconBox>

          <span
            className={`rounded-md border border-[#E6D8DF] bg-[#F7EFF3] px-2 py-1 ${BODY_FONT} text-[9px] font-semibold uppercase tracking-[0.1em] text-[#7A174B]`}
          >
            Pillar {number}
          </span>
        </div>

        <h3
          className={`mt-5 ${HEADING_FONT} text-[14px] font-semibold leading-5 text-[#292327]`}
        >
          {title}
        </h3>

        <p
          className={`mt-2 ${BODY_FONT} text-[13px] leading-5 text-[#756A70]`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   INTEGRATION SECTION
========================================================= */

const INTEGRATION = [
  {
    icon: <RefreshCw size={18} />,
    title: "System Integration",
    description:
      "Connect legacy SIS, LMS, identity management and institutional tools",
  },
  {
    icon: <Network size={18} />,
    title: "Connected Data",
    description:
      "Unify disparate departmental data for clean institutional reporting",
  },
  {
    icon: <LockKeyhole size={18} />,
    title: "Secure Access",
    description:
      "Role-based access control, privacy-first data handling and confidentiality",
  },
  {
    icon: <Scale size={18} />,
    title: "Flexible Architecture",
    description:
      "Modular APIs and scalable cloud foundations that evolve with your campus",
  },
];

function IntegrationSection() {
  return (
    <section className="education-section">
      <div className="education-container">
        <div className="integration-card">
          <Eyebrow icon={Network} light>
            Seamless System Interoperability
          </Eyebrow>

          <h2
            className={`
              mt-6
              ${HEADING_FONT}
              text-[28px]
              font-medium
              leading-tight
              tracking-[-0.045em]
              sm:text-[34px]
              md:text-[40px]
              lg:text-[42px]
            `}
          >
            Connect With Your Existing Systems
          </h2>

          <p
            className={`mt-3 max-w-[820px] ${BODY_FONT} text-[14px] leading-6 text-white/75 sm:text-[15px]`}
          >
            Modernize your education environment without disrupting the
            systems and processes your institution already depends on.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INTEGRATION.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/15
                  bg-white/[0.07]
                  p-5
                  shadow-[0_7px_18px_rgba(30,0,20,0.10)]
                  transition-all
                  duration-300
                  ease-in-out
                  hover:-translate-y-2
                  hover:border-white/40
                  hover:bg-white
                  hover:shadow-[0_16px_32px_rgba(30,0,20,0.24)]
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-[45px]
                    -top-[45px]
                    h-[130px]
                    w-[130px]
                    rounded-full
                    bg-white/10
                    blur-[28px]
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/10
                      text-white
                      transition-all
                      duration-300
                      group-hover:bg-[#730042]/10
                      group-hover:text-[#730042]
                    "
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`
                      mt-5
                      ${HEADING_FONT}
                      text-[15px]
                      font-semibold
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#730042]
                    `}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`
                      mt-2
                      ${BODY_FONT}
                      text-[12px]
                      leading-5
                      text-white/65
                      transition-colors
                      duration-300
                      group-hover:text-[#475569]
                    `}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   IMPLEMENTATION
========================================================= */

const PHASES = [
  {
    number: "1",
    phase: "Phase 01",
    title: "Understand & Plan",
    description:
      "Review requirements, processes and existing systems.",
  },
  {
    number: "2",
    phase: "Phase 02",
    title: "Build & Validate",
    description:
      "Configure the solution, integrate systems and validate key workflows.",
  },
  {
    number: "3",
    phase: "Phase 03",
    title: "Launch & Support",
    description:
      "Introduce the solution and provide ongoing support as teams adopt it.",
  },
];

function ImplementationSection() {
  return (
    <section className="education-section">
      <div className="education-container">
        <div className="white-section-card implementation-card">
          <Eyebrow>Structured Methodology</Eyebrow>

          <h2
            className={`
              mt-5
              ${HEADING_FONT}
              text-[28px]
              font-semibold
              tracking-[-0.04em]
              text-[#171719]
              sm:text-[30px]
              md:text-[34px]
            `}
          >
            A Structured Approach to Implementation
          </h2>

          <p
            className={`mx-auto mt-3 max-w-[720px] ${BODY_FONT} text-[14px] leading-6 text-[#71666B] sm:text-[15px]`}
          >
            A practical three-phase approach designed to help institutions move
            from planning to adoption with greater clarity.
          </p>

          <div className="mt-9 grid gap-5 text-left md:grid-cols-3">
            {PHASES.map((item) => (
              <div
                key={item.number}
                className="
                  relative
                  min-h-[205px]
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#E4E2E3]
                  bg-[#FAFAFA]
                  p-5
                  sm:p-6
                "
              >
                <div className="relative flex flex-wrap items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl bg-[#730042] ${BODY_FONT} text-sm font-bold text-white`}
                  >
                    {item.number}
                  </div>

                  <span
                    className={`rounded-md border border-[#E6D8DF] bg-[#F7EFF3] px-2.5 py-1.5 ${BODY_FONT} text-[9px] font-semibold uppercase tracking-[0.1em] text-[#730042]`}
                  >
                    {item.phase}
                  </span>
                </div>

                <h3
                  className={`mt-6 ${HEADING_FONT} text-[15px] font-semibold text-[#292327]`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-2.5 max-w-[280px] ${BODY_FONT} text-[13px] leading-5 text-[#756A70]`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function CTASection() {
  return (
    <section className="education-section">
      <div className="education-container">
        <div className="cta-card">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div>
              <Eyebrow icon={Handshake}>
                Institutional Collaboration
              </Eyebrow>

              <h2
                className={`
                  mt-6
                  max-w-[720px]
                  ${HEADING_FONT}
                  text-[28px]
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-[#171719]
                  sm:text-[30px]
                  md:text-[34px]
                  lg:text-[38px]
                `}
              >
                Ready to Build a More Connected
                <br className="hidden sm:block" />
                Education Environment?
              </h2>

              <p
                className={`mt-5 max-w-[700px] ${BODY_FONT} text-[14px] leading-6 text-[#70656A] sm:text-[15px]`}
              >
                Let's discuss your institution's technology requirements and
                explore a practical approach for your next stage of digital
                growth.
              </p>

              <div className="mt-7 border-t border-[#ECE9E9] pt-5">
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <FeatureLine
                    icon={<Users size={16} />}
                    text="Direct Architect Consultation"
                  />

                  <FeatureLine
                    icon={<ShieldCheck size={16} />}
                    text="Bilateral NDA Protected"
                  />

                  <FeatureLine
                    icon={<Clock3 size={16} />}
                    text="Response within 24 Hours"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-[280px] lg:flex-col">
              <PrimaryButton>Talk to Our Experts</PrimaryButton>

              <SecondaryButton>
                <CalendarDays size={17} className="text-[#730042]" />
                Schedule Discovery
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function EducationSolutions() {
  return (
    <main className="education-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "Inter", sans-serif;
        }

        button {
          font-family: "Inter", sans-serif;
        }

        /* =====================================================
           PAGE
        ===================================================== */

        .education-page {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #f5f6f7;
          font-family: "Inter", sans-serif;
        }

        /* =====================================================
           COMMON HORIZONTAL SPACING SYSTEM
           
           Desktop  -> 100px
           Tablet   -> 40px
           Mobile   -> 24px
           Small    -> 16px
        ===================================================== */

        .education-section {
          width: 100%;
        }

        .education-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
          box-sizing: border-box;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .education-hero {
          padding-top: 24px;
        }

        .hero-card {
          width: 100%;
          border: 1px solid #e8e5e5;
          border-radius: 18px;
          background: #ffffff;
          padding-top: 56px;
          padding-bottom: 56px;
          padding-left: 48px;
          padding-right: 48px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(340px, 0.92fr);
          align-items: stretch;
          gap: 48px;
        }

        .hero-content {
          display: flex;
          min-width: 0;
          height: 100%;
          flex-direction: column;
          justify-content: center;
        }

        .hero-image-column {
          display: flex;
          min-width: 0;
          height: 100%;
          align-items: stretch;
          justify-content: center;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 390px;
          overflow: hidden;
          border: 1px solid #ddd9d9;
          border-radius: 18px;
          background: #000000;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);
        }

        .hero-image {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 390px;
          object-fit: cover;
          object-position: center;
        }

        /* =====================================================
           EDITORIAL
        ===================================================== */

        .editorial-card {
          width: 100%;
          border: 1px solid #e7e1d8;
          border-radius: 18px;
          background: #fbfaf4;
          padding: 56px 48px;
        }

        /* =====================================================
           COMMON WHITE / CREAM CARDS
        ===================================================== */

        .white-section-card,
        .cream-section-card,
        .cta-card {
          width: 100%;
          border-radius: 18px;
        }

        .white-section-card {
          border: 1px solid #e4e4e3;
          background: #ffffff;
          padding: 56px 48px;
        }

        .cream-section-card {
          border: 1px solid #e6e1d8;
          background: #fbfaf4;
          padding: 56px 48px;
        }

        .implementation-card {
          text-align: center;
        }

        /* =====================================================
           INTEGRATION
        ===================================================== */

        .integration-card {
          width: 100%;
          border-radius: 18px;
          background: #730042;
          padding: 56px 48px;
          color: #ffffff;
          box-shadow: 0 12px 30px rgba(95, 0, 50, 0.16);
        }

        /* =====================================================
           CTA
        ===================================================== */

        .cta-card {
          border: 1px solid #e2e0e0;
          background: #ffffff;
          padding: 56px 48px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        /* =====================================================
           TABLET
           768px - 1199px
        ===================================================== */

        @media (min-width: 768px) and (max-width: 1199px) {
          .education-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .education-hero {
            padding-top: 20px;
          }

          .hero-card {
            padding: 40px;
          }

          .hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(300px, 0.85fr);
            gap: 36px;
          }

          .hero-image-wrapper,
          .hero-image {
            min-height: 360px;
          }

          .editorial-card,
          .white-section-card,
          .cream-section-card,
          .integration-card,
          .cta-card {
            padding: 44px 40px;
          }
        }

        /* =====================================================
           MOBILE
           481px - 767px
        ===================================================== */

        @media (max-width: 767px) {
          .education-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .education-hero {
            padding-top: 16px;
          }

          .hero-card {
            padding: 32px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .hero-image-column {
            width: 100%;
          }

          .hero-image-wrapper {
            max-width: none;
            min-height: 360px;
          }

          .hero-image {
            min-height: 360px;
          }

          .editorial-card,
          .white-section-card,
          .cream-section-card,
          .integration-card,
          .cta-card {
            padding: 40px 32px;
          }

          .implementation-card {
            text-align: left;
          }
        }

        /* =====================================================
           SMALL MOBILE
           <= 480px
        ===================================================== */

        @media (max-width: 480px) {
          .education-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .education-hero {
            padding-top: 12px;
          }

          .hero-card {
            padding: 24px;
            border-radius: 16px;
          }

          .hero-grid {
            gap: 28px;
          }

          .hero-image-wrapper {
            min-height: 300px;
            border-radius: 15px;
          }

          .hero-image {
            min-height: 300px;
          }

          .editorial-card,
          .white-section-card,
          .cream-section-card,
          .integration-card,
          .cta-card {
            padding: 32px 24px;
            border-radius: 16px;
          }

          .integration-card {
            padding-top: 32px;
            padding-bottom: 32px;
          }

          .cta-card {
            padding-top: 32px;
            padding-bottom: 32px;
          }
        }

        /* =====================================================
           EXTRA SMALL
           <= 360px
        ===================================================== */

        @media (max-width: 360px) {
          .education-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero-card {
            padding: 20px;
          }

          .editorial-card,
          .white-section-card,
          .cream-section-card,
          .integration-card,
          .cta-card {
            padding-left: 20px;
            padding-right: 20px;
          }

          .hero-image-wrapper,
          .hero-image {
            min-height: 270px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto !important;
          }

          *,
          *::before,
          *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="flex w-full flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-9">
        <HeroSection />

        <EditorialSection />

        <CoreSolutionsSection />

        <PillarsSection />

        <IntegrationSection />

        <ImplementationSection />

        <CTASection />
      </div>
    </main>
  );
}