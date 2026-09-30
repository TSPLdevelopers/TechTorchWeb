const OFFERINGS = [
  {
    title: "Generative AI Integration",
    description:
      "Deploy secure, fine-tuned LLMs within your corporate firewall to automate content generation, enhance internal knowledge discovery, and streamline complex reporting workflows without compromising data privacy.",
    image: "/Ai integration.png",
    alt: "Analyst interacting with a neural network visualization on screen",
  },
  {
    title: "Predictive Analytics",
    description:
      "Harness historical data patterns to forecast market shifts, optimize supply chain logistics, and identify operational bottlenecks before they impact the bottom line. Built on highly interpretable machine learning models.",
    image: "/Analysis.png",
    alt: "Team reviewing predictive analytics dashboards",
  },
  {
    title: "AI Governance & Security",
    description:
      "Establish comprehensive frameworks for AI transparency, bias mitigation, and regulatory compliance. Our security protocols ensure that model outputs are auditable, explainable, and aligned with corporate standards.",
    image: "/Security.png",
    alt: "Security operations team monitoring AI governance dashboards",
  },
  {
    title: "Autonomous Agents",
    description:
      "Develop specialized, role-based AI agents capable of executing multi-step business processes independently. From level-1 IT support resolution to dynamic price optimization, scale operations infinitely.",
    image: "/agent.png",
    alt: "Professional configuring an autonomous agent interface on a tablet",
  },
];

export default function CapabilitiesOfferings() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        py-10
        sm:py-12
        md:py-16
        lg:py-20
      "
      style={{
        background: "linear-gradient(160deg, #7a1750 0%, #5c0f3d 100%)",
      }}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ================= SUB HEADING ================= */}
        <p
          className="
            mb-2
            text-[10px]
            font-semibold
            tracking-[0.14em]
            text-white/70
            sm:mb-3
            sm:text-[11px]
            md:text-xs
            md:tracking-[0.15em]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          CAPABILITIES
        </p>

        {/* ================= MAIN HEADING ================= */}
        <h2
          className="
            mb-7
            max-w-2xl
            text-[22px]
            font-bold
            leading-[1.2]
            text-white
            sm:mb-9
            sm:text-[26px]
            md:mb-11
            md:text-[30px]
            lg:mb-12
            lg:text-[32px]
            xl:text-[34px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Precision Intelligence Offerings
        </h2>

        {/* ================= GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-x-6
            gap-y-10
            sm:gap-x-8
            sm:gap-y-12
            md:grid-cols-2
            md:gap-x-10
            lg:gap-x-12
            lg:gap-y-14
          "
        >
          {OFFERINGS.map((item) => (
            <div
              key={item.title}
              className="
                w-full
                min-w-0
                border-b
                border-white/10
                pb-7
                sm:pb-8
                md:pb-9
                lg:pb-10
              "
            >
              {/* ================= IMAGE ================= */}
              <div
                className="
                  mb-4
                  w-full
                  overflow-hidden
                  rounded-md
                  bg-black/10
                  sm:mb-5
                  sm:rounded-lg
                  md:mb-6
                  md:rounded-xl
                "
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="
                    block
                    h-auto
                    w-full
                    max-w-full
                    object-contain
                    transition-transform
                    duration-500
                    hover:scale-[1.02]
                  "
                />
              </div>

              {/* ================= TITLE ================= */}
              <h3
                className="
                  mb-2
                  text-[15px]
                  font-semibold
                  leading-snug
                  text-white
                  sm:text-[16px]
                  md:text-[17px]
                  lg:text-[19px]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.title}
              </h3>

              {/* ================= DESCRIPTION ================= */}
              <p
                className="
                  max-w-2xl
                  text-[13px]
                  leading-[1.65]
                  text-white/70
                  sm:text-[13.5px]
                  sm:leading-[1.7]
                  md:text-[14px]
                  lg:text-[15px]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}