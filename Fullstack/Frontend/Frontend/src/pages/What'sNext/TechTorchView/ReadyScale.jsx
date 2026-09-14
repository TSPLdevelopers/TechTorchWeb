export default function CtaBanner() {
  return (
    <section
      className="w-full py-16 px-6"
      style={{
        background: "radial-gradient(120% 160% at 50% 0%, #8a1a5c 0%, #5c0f3d 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white text-[24px] sm:text-[26px] font-bold mb-4">
          Ready to scale at speed?
        </h2>
        <p className="text-white/80 text-[15px] leading-relaxed mb-8 max-w-lg mx-auto">
          Engage with our AI architects to identify high-impact
          opportunities within your organization and chart a secure path to
          deployment.
        </p>
        <button className="inline-flex items-center justify-center rounded-md bg-white text-[#5c0f3d] font-medium text-[14px] px-6 py-3 hover:bg-white/90 transition-colors">
          Schedule an AI Assessment
        </button>
      </div>
    </section>
  );
}