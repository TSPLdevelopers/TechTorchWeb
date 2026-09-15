import React from "react";

const sections = [
  {
    title: "Strategic Guidance & Intelligent Modernization",
    body: "Our services cover the key areas businesses need to build, modernize, protect and scale their technology environment. We provide IT Consultancy to help organizations make informed technology decisions and create practical digital strategies. Our AI Solutions help businesses explore automation, intelligent workflows, and data-driven opportunities that genuinely improve productivity and executive decision-making.",
  },
  {
    title: "Resilient Infrastructure & Proactive Defense",
    body: "With our Cloud Infrastructure services, businesses can build flexible, scalable and reliable technology environments that support evolving operational demands. Concurrently, our Cyber Security services help protect critical systems, proprietary data, and digital operations while systematically strengthening the overall security posture of the enterprise.",
  },
  {
    title: "Purpose-Built Software & Full Lifecycle Engineering",
    body: "For organizations developing or modernizing digital products, our Software Engineering and Development services cover the complete technology journey — from requirements discovery and systems architecture to development, migration, testing, deployment, and ongoing support. We prioritize engineering software around genuine business requirements rather than forcing business processes to bend to off-the-shelf software limitations.",
  },
  {
    title: "Operational Continuity & Specialized Staffing",
    body: "We provide Business Process Outsourcing and technology support services to help organizations improve operational efficiency and allow internal teams to focus on higher-value initiatives. Through our Resource & Staffing services, businesses gain agile access to skilled technology specialists and flexible engineering capacity precisely when needed.",
  },
];

const philosophyPoints = [
  "Zero-force, technical build",
  "Aggressive architecture built to scale",
  "Transparent, governed delivery milestones",
];

export default function TechTorchContent() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto flex w-full max-w-7xl
          items-center justify-center
          px-4 py-10
          sm:px-6 sm:py-12
          md:px-8 md:py-16
          lg:px-10 lg:py-20
        "
      >
        <div
          className="
            grid w-full
            grid-cols-1
            gap-8
            sm:gap-10
            lg:grid-cols-[minmax(0,1fr)_320px]
            lg:gap-12
            xl:grid-cols-[minmax(0,1fr)_350px]
            xl:gap-14
          "
        >
          {/* ================= LEFT COLUMN ================= */}
          <div className="min-w-0">
            {/* Label */}
            <span
              className="
                mb-4 inline-block
                rounded
                px-3 py-1
                font-['Inter']
                text-[9px]
                font-semibold
                tracking-[0.08em]
                sm:mb-5
                sm:text-[10px]
              "
              style={{
                backgroundColor: "#fbe4ef",
                color: "#730024",
              }}
            >
              Strategic Perspective
            </span>

            {/* Main Heading */}
            <h2
              className="
                mb-4
                max-w-3xl
                font-['Plus_Jakarta_Sans']
                text-[25px]
                font-bold
                leading-[1.2]
                tracking-[-0.025em]
                text-neutral-900
                sm:mb-5
                sm:text-[30px]
                md:text-[34px]
                lg:text-[38px]
              "
            >
              Technology That Helps Your Business Move Forward
            </h2>

            {/* Subheading / Intro */}
            <p
              className="
                mb-6
                max-w-2xl
                font-['Inter']
                text-[12px]
                leading-[1.7]
                text-neutral-500
                sm:mb-7
                sm:text-[13px]
                md:text-[14px]
              "
            >
              Technology should make your business simpler, more efficient and
              better prepared for the future. At TechTorch, we work with
              businesses to understand their technology challenges and deliver
              solutions that fit the way they actually work.
            </p>

            {/* Divider */}
            <div className="mb-7 h-px w-full bg-neutral-200 sm:mb-8" />

            {/* Content Sections */}
            <div className="space-y-6 sm:space-y-7 md:space-y-8">
              {sections.map((s) => (
                <div
                  key={s.title}
                  className="
                    flex
                    gap-3
                    sm:gap-4
                  "
                >
                  {/* Bullet */}
                  <span
                    className="
                      mt-2
                      h-1.5 w-1.5
                      shrink-0
                      rounded-full
                      sm:mt-2.5
                    "
                    style={{ backgroundColor: "#730024" }}
                  />

                  <div className="min-w-0">
                    {/* Section Heading */}
                    <h3
                      className="
                        mb-1.5
                        font-['Plus_Jakarta_Sans']
                        text-[14px]
                        font-bold
                        leading-[1.4]
                        text-neutral-900
                        sm:text-[15px]
                        md:text-[16px]
                      "
                    >
                      {s.title}
                    </h3>

                    {/* Section Body */}
                    <p
                      className="
                        font-['Inter']
                        text-[11.5px]
                        leading-[1.7]
                        text-neutral-500
                        sm:text-[12px]
                        md:text-[13px]
                        lg:text-[14px]
                      "
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Highlight */}
            <div
              className="
                mt-7
                border-l-2
                pl-3.5
                sm:mt-8
                sm:pl-4
              "
              style={{ borderColor: "#730024" }}
            >
              <p
                className="
                  font-['Inter']
                  text-[11.5px]
                  leading-[1.7]
                  text-neutral-600
                  sm:text-[12px]
                  md:text-[13px]
                  lg:text-[14px]
                "
              >
                Whether a business is starting a new digital initiative,
                modernizing existing legacy platforms, strengthening zero-trust
                security, moving to the cloud, or scaling engineering
                bandwidth, TechTorch brings the disciplined execution needed to
                bridge strategy and practical reality.
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div
            className="
              flex
              flex-col
              gap-4
              sm:gap-5
              lg:pt-10
          "
          >
            {/* Core Philosophy Card */}
            <div
              className="
                rounded-xl
                p-5
                text-white
                sm:p-6
                md:p-7
              "
              style={{
                background:
                  "linear-gradient(160deg, #7a0f45 0%, #4a0a2c 100%)",
              }}
            >
              {/* Card Label */}
              <span
                className="
                  mb-3
                  block
                  font-['Inter']
                  text-[9px]
                  font-semibold
                  tracking-[0.08em]
                  text-white/70
                  sm:mb-4
                  sm:text-[10px]
                "
              >
                Our Core Philosophy
              </span>

              {/* Card Heading */}
              <p
                className="
                  mb-4
                  font-['Plus_Jakarta_Sans']
                  text-[16px]
                  font-bold
                  leading-[1.45]
                  sm:mb-5
                  sm:text-[18px]
                "
              >
                "Understand the business problem first, identify the right
                technology approach, and deliver long-term value."
              </p>

              {/* Card Description */}
              <p
                className="
                  mb-5
                  font-['Inter']
                  text-[10.5px]
                  leading-[1.7]
                  text-white/70
                  sm:text-[11px]
                  md:text-[12px]
                "
              >
                As a vendor-agnostic firm, our approach remains the same
                regardless of the technology involved. We do not lose focused
                engineering, sustainable operational leverage that grows
                seamlessly alongside your organization.
              </p>

              {/* Philosophy Points */}
              <div className="space-y-2.5">
                {philosophyPoints.map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="
                        h-3.5 w-3.5
                        shrink-0
                        text-white/80
                      "
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    <span
                      className="
                        font-['Inter']
                        text-[10.5px]
                        leading-relaxed
                        text-white/85
                        sm:text-[11px]
                        md:text-[12px]
                      "
                    >
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transformation Card */}
            <div
              className="
                rounded-xl
                border
                border-neutral-200
                bg-neutral-50
                p-5
                sm:p-6
              "
            >
              <span
                className="
                  mb-2.5
                  block
                  font-['Inter']
                  text-[9px]
                  font-semibold
                  tracking-[0.08em]
                  text-neutral-500
                  sm:mb-3
                  sm:text-[10px]
                "
              >
                Ready For Every Transformation Stage
              </span>

              <p
                className="
                  font-['Inter']
                  text-[10.5px]
                  leading-[1.7]
                  text-neutral-500
                  sm:text-[11px]
                  md:text-[12px]
                "
              >
                Whether a business is starting a new digital initiative,
                modernizing existing systems, strengthening security, moving to
                cloud or expanding its technology use, TechTorch brings the
                experience and capability needed to move from ideas and
                challenges to practical solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}