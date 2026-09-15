export default function TechTorchView() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[320px]
        h-[360px]
        sm:h-[400px]
        md:h-[440px]
        lg:h-[480px]
        xl:h-[520px]
        overflow-hidden
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,14,20,0.35) 0%, rgba(10,14,20,0.15) 40%, rgba(8,12,18,0.55) 100%), url('/Enterprise AI command center.png')",
        }}
      />

      {/* ================= EXTRA DARK OVERLAY ================= */}
      <div
        className="
          absolute
          inset-0
          bg-black/25
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          flex-col
          items-center
          justify-center
          px-4
          text-center
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        {/* ================= HEADING ================= */}
        <h1
          className="
            w-full
            max-w-[300px]
            text-[22px]
            font-bold
            leading-[1.25]
            text-white
            [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]
            sm:max-w-xl
            sm:text-[27px]
            md:max-w-2xl
            md:text-[31px]
            lg:max-w-3xl
            lg:text-[34px]
            xl:text-[36px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          AI-Delivered Right: Scale at Speed
        </h1>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="
            mt-3
            w-full
            max-w-[290px]
            text-[13px]
            leading-[1.65]
            text-white/90
            [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]
            sm:mt-4
            sm:max-w-lg
            sm:text-[14px]
            sm:leading-[1.7]
            md:max-w-2xl
            md:text-[15px]
            lg:max-w-3xl
            lg:text-[16px]
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Empowering the modern enterprise with precision-engineered AI
          solutions that drive measurable business outcomes, safely and at
          scale.
        </p>
      </div>
    </section>
  );
}