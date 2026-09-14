export default function TechTorchView() {
  return (
    <section className="relative w-full h-[420px] overflow-hidden">
      {/* Background image layer — swap the url() below for your own photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,14,20,0.35) 0%, rgba(10,14,20,0.15) 40%, rgba(8,12,18,0.55) 100%), url('/Enterprise AI command center.png')",
        }}
      />

      {/* Extra darkening so text stays legible over any photo */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white font-bold text-[28px] sm:text-[34px] leading-tight max-w-2xl [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
          AI-Delivered Right: Scale at Speed
        </h1>
        <p className="mt-4 text-white/90 text-[15px] sm:text-[16px] leading-relaxed max-w-lg [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
          Empowering the modern enterprise with precision-engineered AI
          solutions that drive measurable business outcomes, safely and at
          scale.
        </p>
      </div>
    </section>
  );
}