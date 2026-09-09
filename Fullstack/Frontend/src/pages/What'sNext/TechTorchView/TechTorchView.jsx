export default function TechTorchView() {
  return (
    <section className="relative w-full h-[360px] sm:h-[400px] md:h-[440px] lg:h-[480px] overflow-hidden">
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
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 sm:px-6">
        <h1 className="text-white font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] leading-tight max-w-2xl [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
          AI-Delivered Right: Scale at Speed
        </h1>
        <p className="mt-3 sm:mt-4 text-white/90 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-[280px] sm:max-w-md md:max-w-lg [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
          Empowering the modern enterprise with precision-engineered AI
          solutions that drive measurable business outcomes, safely and at
          scale.
        </p>
      </div>
    </section>
  );
}