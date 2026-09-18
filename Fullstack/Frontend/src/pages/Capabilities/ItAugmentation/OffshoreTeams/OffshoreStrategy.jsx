import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const BRAND = "#8B0046";

const capabilities = [
  {
    number: "01",
    title: "Custom Software Development",
    description:
      "Build software around your business processes, functional requirements, and specific operational needs.",
    label: "Tailored Engineering",
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Develop modern web applications designed around usability, performance, integration, and business requirements.",
    label: "Modern Web Systems",
  },
  {
    number: "03",
    title: "Mobile Application Development",
    description:
      "Extend your development capabilities for mobile applications based on your product and business objectives.",
    label: "Native & Cross-Platform",
  },
  {
    number: "04",
    title: "Software Engineering",
    description:
      "Add engineering expertise across application development, architecture, integration, implementation, and technical problem-solving.",
    label: "Full-Lifecycle Architecture",
  },
  {
    number: "05",
    title: "API & System Integration",
    description:
      "Connect applications, platforms, and business systems through APIs and appropriate integration solutions.",
    label: "Seamless Interoperability",
  },
  {
    number: "06",
    title: "Enterprise Application Development",
    description:
      "Support the development and enhancement of business applications that help organizations manage important operational processes.",
    label: "Mission-Critical Scale",
  },
  {
    number: "07",
    title: "Software Modernization",
    description:
      "Improve existing applications by adopting more suitable technologies, architectures, and development practices.",
    label: "Cloud & Legacy Re-platform",
  },
  {
    number: "08",
    title: "Software Maintenance & Support",
    description:
      "Continue development after launch through application maintenance, technical support, updates, and ongoing improvements.",
    label: "SLA Continuity",
  },
];

export default function OffshoreDevelopmentTeams() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#172033]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="w-full border-b border-[#edf0f4] bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[72px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

            {/* LEFT CONTENT */}
            <div className="max-w-[650px]">

              {/* Badge */}
              <div
                className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2"
                style={{
                  borderColor: "#ead5df",
                  backgroundColor: "#fff8fb",
                }}
              >
                <span
                  className="h-[7px] w-[7px] rounded-full"
                  style={{ backgroundColor: BRAND }}
                />

                <span
                  className="font-['Inter'] text-[10px] font-bold uppercase tracking-[0.08em] sm:text-[11px]"
                  style={{ color: BRAND }}
                >
                  IT AUGMENTATION • OFFSHORE ENGINEERING
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-['Inter'] text-[42px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#111a2e] sm:text-[52px] md:text-[58px] lg:text-[62px]">
                Offshore Development
                <span
                  className="block"
                  style={{ color: BRAND }}
                >
                  Teams
                </span>
              </h1>

              {/* Sub Heading */}
              <h2 className="mt-6 max-w-[620px] font-['Inter'] text-[21px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#344158] sm:text-[23px]">
                Extend Your Development Capabilities With the Right
                Technical Team
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[640px] font-['Inter'] text-[15px] leading-[1.7] text-[#647187] sm:text-[16px]">
                Build a dedicated development team that works around your
                projects, technology requirements, and business goals.
                TechTorch helps businesses strengthen their engineering
                capabilities with experienced professionals across software
                development, engineering, cloud, and technology support.
              </p>

              {/* CTA */}
              <button
                type="button"
                className="mt-7 inline-flex items-center gap-2 rounded-[11px] px-7 py-4 font-['Inter'] text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(139,0,70,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_25px_rgba(139,0,70,0.25)]"
                style={{ backgroundColor: BRAND }}
              >
                Build Your Development Team
                <ArrowRight className="h-[16px] w-[16px]" />
              </button>

              {/* Bottom Pills */}
              <div className="mt-7 inline-flex max-w-full flex-wrap items-center rounded-[12px] border border-[#e2e8ef] bg-[#f6f8fa] px-4 py-2.5">
                <span className="font-['Inter'] text-[12px] font-medium text-[#536075] sm:text-[13px]">
                  Global Delivery Centers
                </span>

                <span className="mx-3 text-[#c6ccd5]">
                  •
                </span>

                <span className="font-['Inter'] text-[12px] font-medium text-[#536075] sm:text-[13px]">
                  SLA-Governed Pods
                </span>

                <span className="mx-3 text-[#c6ccd5]">
                  •
                </span>

                <span className="font-['Inter'] text-[12px] font-medium text-[#536075] sm:text-[13px]">
                  Direct Engineering Alignment
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT IMAGE
            ================================================= */}
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-[480px]">

              <div className="relative overflow-hidden rounded-[17px] border border-[#e8ebef] bg-[#f4f5f6] shadow-[0_18px_40px_rgba(20,30,45,0.12)]">

                {/* 
                  IMPORTANT:
                  object-cover hata diya gaya hai so image crop nahi hogi.
                  Isse male person aur background properly visible rahenge.
                */}
                <img
                  src="/OffshoreStrategy.png"
                  alt="Offshore development team"
                  className="block h-auto w-full object-contain"
                />

                {/* Image Bottom Overlay */}
                <div className="absolute bottom-4 left-4 right-4 rounded-[14px] bg-white/95 px-4 py-3 shadow-[0_7px_20px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="flex items-center justify-between gap-3">

                    <div className="flex min-w-0 items-center gap-3">

                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d9f8eb]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#1dc98b]" />
                      </span>

                      <div className="min-w-0">
                        <p
                          className="truncate font-['Inter'] text-[10px] font-bold uppercase tracking-[0.05em]"
                          style={{ color: BRAND }}
                        >
                          Global Delivery Architecture
                        </p>

                        <p className="truncate font-['Inter'] text-[11px] font-semibold text-[#39455a] sm:text-[12px]">
                          Scalable Dedicated Engineering Pods
                        </p>
                      </div>

                    </div>

                    <span className="hidden shrink-0 font-['Inter'] text-[11px] font-medium text-[#68758a] sm:block">
                      Tier-1 Capability
                    </span>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          STRATEGIC PERSPECTIVE
      ===================================================== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[850px] px-5 py-16 sm:px-8 sm:py-20 lg:py-[82px]">

          {/* Section Label */}
          <div className="text-center">

            <span
              className="font-['Inter'] text-[10px] font-bold uppercase tracking-[0.13em]"
              style={{ color: BRAND }}
            >
              STRATEGIC PERSPECTIVE
            </span>

            <h2 className="mt-3 font-['Inter'] text-[29px] font-semibold leading-[1.15] tracking-[-0.035em] text-[#172033] sm:text-[34px]">
              Build a Development Team That Fits Your Business
            </h2>

          </div>

          {/* Content */}
          <div className="mt-7 space-y-5 font-['Inter'] text-[14px] leading-[1.65] text-[#647187] sm:text-[15px]">

            <p>
              Finding the right technical skills at the right time can be
              challenging, especially when development requirements continue
              to grow. Instead of expanding an internal team for every new
              project, businesses can use an offshore development model to
              add the expertise and capacity they need.
            </p>

            <p>
              TechTorch helps businesses build development teams around their
              specific requirements. Whether you are developing a new
              application, extending an existing product, modernizing legacy
              software, or looking for additional engineering capacity, we
              can help you establish a team suited to your project.
            </p>

            <p>
              Our teams can work alongside your existing employees or operate
              as a dedicated development function, depending on your business
              model and project needs.
            </p>

            <p>
              The focus is not simply on providing technical resources. It is
              about bringing together the right capabilities, establishing a
              clear working model, and creating a team that can contribute
              effectively to your development goals.
            </p>

          </div>

          {/* Quote Box */}
          <div className="relative mt-8 overflow-hidden rounded-[13px] bg-[#f7f9fb] px-6 py-6 sm:px-7 sm:py-7">

            <div
              className="absolute left-0 top-0 h-full w-[3px]"
              style={{ backgroundColor: BRAND }}
            />

            <p className="font-['Inter'] text-[15px] font-semibold italic leading-[1.5] text-[#263249] sm:text-[16px]">
              “Development Support Built Around Your Requirements: Every
              project has different priorities, technologies, timelines, and
              technical challenges. A development team should therefore be
              structured around the actual requirements of the project.”
            </p>

          </div>

          {/* Final Paragraph */}
          <p className="mt-8 font-['Inter'] text-[14px] leading-[1.65] text-[#647187] sm:text-[15px]">
            TechTorch provides flexible team models that can support different
            development needs—from adding individual specialists to building
            a dedicated team for an ongoing product or application. Our
            broader technology capabilities across software engineering,
            software development and support, cloud infrastructure,
            cybersecurity, and IT consulting allow us to support projects
            from different technical perspectives.
          </p>

        </div>
      </section>


      {/* =====================================================
          DEVELOPMENT CAPABILITIES
      ===================================================== */}
      <section className="w-full bg-[#f8fafc]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[82px]">

          {/* Heading */}
          <div className="text-center">

            <span
              className="font-['Inter'] text-[10px] font-bold uppercase tracking-[0.13em]"
              style={{ color: BRAND }}
            >
              SERVICE CAPABILITIES
            </span>

            <h2 className="mt-3 font-['Inter'] text-[29px] font-semibold leading-[1.15] tracking-[-0.035em] text-[#172033] sm:text-[34px]">
              Our Development Capabilities
            </h2>

            <p className="mt-2 font-['Inter'] text-[14px] text-[#69768b] sm:text-[15px]">
              Comprehensive software engineering expertise to support your
              technology initiatives.
            </p>

          </div>


          {/* Cards */}
          <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {capabilities.map((item) => (
              <div
                key={item.number}
                className="group relative flex min-h-[240px] flex-col overflow-hidden rounded-[14px] border border-[#e3e8ee] bg-white px-5 py-5 shadow-[0_2px_8px_rgba(20,30,45,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e4bfd0] hover:shadow-[0_12px_30px_rgba(80,20,50,0.08)]"
              >

                {/* Top Right Circle */}
                <div className="pointer-events-none absolute -right-9 -top-9 h-[78px] w-[78px] rounded-full bg-[#fbf1f6] transition-all duration-500 group-hover:scale-[2.8]" />

                {/* Number */}
                <div
                  className="relative z-10 flex h-[26px] w-[26px] items-center justify-center rounded-[6px] border font-['Inter'] text-[10px] font-bold"
                  style={{
                    color: BRAND,
                    borderColor: "#ecd4df",
                    backgroundColor: "#fff8fb",
                  }}
                >
                  {item.number}
                </div>

                {/* Content */}
                <div className="relative z-10 mt-4">

                  <h3 className="max-w-[210px] font-['Inter'] text-[15px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#1d293d]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 font-['Inter'] text-[12px] leading-[1.55] text-[#6a7689]">
                    {item.description}
                  </p>

                </div>

                {/* Bottom */}
                <div className="relative z-10 mt-auto pt-5">

                  <div className="mb-3 h-px w-full bg-[#edf0f3]" />

                  <div className="flex items-center justify-between gap-2">

                    <span
                      className="font-['Inter'] text-[10px] font-bold sm:text-[10.5px]"
                      style={{ color: BRAND }}
                    >
                      {item.label}
                    </span>

                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: "#aeb7c5" }}
                    />

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          END
      ===================================================== */}
      <section className="h-8 bg-white sm:h-10" />

    </main>
  );
}