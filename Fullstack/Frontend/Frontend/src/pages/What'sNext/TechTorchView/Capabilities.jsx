const OFFERINGS = [
  {
    title: "Generative AI Integration",
    description:
      "Deploy secure, fine-tuned LLMs within your corporate firewall to automate content generation, enhance internal knowledge discovery, and streamline complex reporting workflows without compromising data privacy.",
    image: "/offerings/generative-ai.jpg",
    alt: "Analyst interacting with a neural network visualization on screen",
  },
  {
    title: "Predictive Analytics",
    description:
      "Harness historical data patterns to forecast market shifts, optimize supply chain logistics, and identify operational bottlenecks before they impact the bottom line. Built on highly interpretable machine learning models.",
    image: "/offerings/predictive-analytics.jpg",
    alt: "Team reviewing predictive analytics dashboards",
  },
  {
    title: "AI Governance & Security",
    description:
      "Establish comprehensive frameworks for AI transparency, bias mitigation, and regulatory compliance. Our security protocols ensure that model outputs are auditable, explainable, and aligned with corporate standards.",
    image: "/offerings/governance-security.jpg",
    alt: "Security operations team monitoring AI governance dashboards",
  },
  {
    title: "Autonomous Agents",
    description:
      "Develop specialized, role-based AI agents capable of executing multi-step business processes independently. From level-1 IT support resolution to dynamic price optimization, scale operations infinitely.",
    image: "/offerings/autonomous-agents.jpg",
    alt: "Professional configuring an autonomous agent interface on a tablet",
  },
];

export default function CapabilitiesOfferings() {
  return (
    <section
      className="w-full py-16"
      style={{
        background: "linear-gradient(160deg, #7a1750 0%, #5c0f3d 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-white/70 text-[11px] font-semibold tracking-[0.15em] mb-2">
          CAPABILITIES
        </p>
        <h2 className="text-white text-[26px] sm:text-[28px] font-bold mb-10">
          Precision Intelligence Offerings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {OFFERINGS.map((item) => (
            <div key={item.title} className="pb-8 border-b border-white/10">
              <div className="rounded-lg overflow-hidden mb-5">
                {/* Swap the src below for your own photo */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[180px] object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-[17px] mb-3">
                {item.title}
              </h3>
              <p className="text-white/70 text-[14px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}