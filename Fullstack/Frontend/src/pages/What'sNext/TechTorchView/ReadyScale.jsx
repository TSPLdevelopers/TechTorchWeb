export default function CtaBanner() {
  return (
    <section
      className="
        w-full
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:py-14
        lg:py-16
        xl:py-20
      "
      style={{
        background:
          "radial-gradient(120% 160% at 50% 0%, #8a1a5c 0%, #5c0f3d 100%)",
      }}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-3xl
          text-center
        "
      >
        {/* ================= HEADING ================= */}
        <h2
          className="
            mb-3
            text-[21px]
            font-bold
            leading-[1.25]
            text-white
            sm:mb-4
            sm:text-[24px]
            md:text-[28px]
            lg:text-[30px]
            xl:text-[32px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Ready to scale at speed?
        </h2>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="
            mx-auto
            mb-6
            max-w-xl
            px-1
            text-[13px]
            leading-[1.7]
            text-white/80
            sm:mb-7
            sm:px-0
            sm:text-[14px]
            md:text-[15px]
            lg:mb-8
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Engage with our AI architects to identify high-impact
          opportunities within your organization and chart a secure path to
          deployment.
        </p>

        {/* ================= BUTTON ================= */}
        <button
          type="button"
          className="
            inline-flex
            w-full
            items-center
            justify-center
            rounded-md
            bg-white
            px-5
            py-3
            text-[13px]
            font-medium
            text-[#5c0f3d]
            transition-all
            duration-300
            hover:bg-white/90
            hover:-translate-y-0.5
            active:translate-y-0
            sm:w-auto
            sm:px-6
            sm:py-3
            sm:text-[14px]
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Schedule an AI Assessment
        </button>
      </div>
    </section>
  );
}