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
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
        {/* Left column */}
        <div>
          <span
            className="inline-block text-[10px] font-semibold tracking-wide px-3 py-1 rounded mb-5"
            style={{ backgroundColor: "#fbe4ef", color: "#a3134f" }}
          >
            Strategic Perspective
          </span>

          <h2 className="text-3xl font-bold text-neutral-900 leading-snug mb-5">
            Technology That Helps Your Business Move Forward
          </h2>

          <p className="text-sm leading-relaxed text-neutral-500 mb-6 max-w-lg">
            Technology should make your business simpler, more efficient and
            better prepared for the future. At TechTorch, we work with
            businesses to understand their technology challenges and deliver
            solutions that fit the way they actually work.
          </p>

          <div className="h-px bg-neutral-200 mb-8" />

          <div className="space-y-7">
            {sections.map((s) => (
              <div key={s.title} className="flex gap-3">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: "#a3134f" }}
                />
                <div>
                  <h3 className="text-[15px] font-bold text-neutral-900 mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-2 pl-4" style={{ borderColor: "#a3134f" }}>
            <p className="text-sm leading-relaxed text-neutral-600">
              Whether a business is starting a new digital initiative,
              modernizing existing legacy platforms, strengthening zero-trust
              security, moving to the cloud, or scaling engineering
              bandwidth, TechTorch brings the disciplined execution needed to
              bridge strategy and practical reality.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          <div
            className="rounded-xl p-7 text-white"
            style={{
              background: "linear-gradient(160deg, #7a0f45 0%, #4a0a2c 100%)",
            }}
          >
            <span className="text-[10px] font-semibold tracking-wide text-white/70 block mb-4">
              Our Core Philosophy
            </span>
            <p className="text-lg font-bold leading-snug mb-5">
              "Understand the business problem first, identify the right
              technology approach, and deliver long-term value."
            </p>
            <p className="text-xs leading-relaxed text-white/70 mb-5">
              As a vendor-agnostic firm, our approach remains the same
              regardless of the technology involved. We do not lose focused
              engineering, sustainable operational leverage that grows
              seamlessly alongside your organization.
            </p>
            <div className="space-y-2.5">
              {philosophyPoints.map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5 text-white/80 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-xs text-white/85">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-6 bg-neutral-50 border border-neutral-200">
            <span className="text-[10px] font-semibold tracking-wide text-neutral-500 block mb-3">
              Ready For Every Transformation Stage
            </span>
            <p className="text-xs leading-relaxed text-neutral-500">
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
  );
}