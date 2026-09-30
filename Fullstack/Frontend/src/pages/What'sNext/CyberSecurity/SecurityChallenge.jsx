import React from "react";

const vectors = [
  "Business applications and software",
  "Networks and connected systems",
  "Cloud environments",
  "Employee and user access",
  "Sensitive business information",
  "External integrations",
  "Security monitoring and response",
  "Business continuity",
];

export default function DigitalEnvironmentSection() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#6B0F41]
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
        xl:px-12
        xl:py-20
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-8
          sm:gap-10
          md:gap-12
          lg:grid-cols-2
          lg:gap-14
          xl:gap-16
        "
      >
        {/* ================= LEFT COLUMN ================= */}
        <div className="w-full min-w-0">
          {/* Label */}
          <span
            className="
              inline-flex
              w-fit
              items-center
              rounded-full
              bg-white/15
              px-3
              py-1
              text-[9px]
              font-semibold
              tracking-[0.15em]
              text-white
              sm:text-[10px]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            THE SECURITY CHALLENGE
          </span>

          {/* Main Heading */}
          <h1
            className="
              mt-4
              max-w-[350px]
              text-[22px]
              font-bold
              leading-[1.3]
              text-white
              sm:max-w-xl
              sm:text-[25px]
              md:max-w-2xl
              md:text-[28px]
              lg:max-w-xl
              lg:text-[30px]
              xl:text-[32px]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Your Digital Environment Is Bigger Than Your Network
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-2xl
              text-[13px]
              leading-[1.75]
              text-rose-100/90
              sm:mt-6
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.8]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Modern businesses rarely operate from a single system. Employees
            work across devices. Applications communicate through APIs.
            Business data moves between departments and platforms. Cloud
            services support critical workloads, while customers and partners
            interact with digital systems from outside the organization.
          </p>

          <p
            className="
              mt-4
              max-w-2xl
              text-[13px]
              leading-[1.75]
              text-rose-100/90
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.8]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            This creates a wider environment that needs to be understood and
            protected.
          </p>

          {/* ================= IMAGE + TEXT CARD ================= */}
          <div
            className="
              mt-7
              w-full
              overflow-hidden
              rounded-lg
              sm:mt-8
              sm:rounded-xl
            "
          >
            <img
              src="/Secure Software Architecture  Engineering.png"
              alt="Developer working on code across multiple monitors"
              loading="lazy"
              className="
                block
                h-auto
                min-h-[190px]
                w-full
                object-cover
                sm:min-h-[230px]
                md:min-h-[260px]
                lg:min-h-[250px]
                xl:min-h-[280px]
              "
            />

            {/* LIGHTER BACKGROUND FOR YOUR TEXT */}
            <div
              className="
                bg-black/45
                px-4
                py-4
                sm:px-5
                sm:py-4
                md:px-6
                md:py-5
              "
            >
              <p
                className="
                  text-[12px]
                  leading-[1.7]
                  text-white/90
                  sm:text-[13px]
                  md:text-[14px]
                "
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Rigorous code architecture, authenticated endpoints, and deep
                software-level controls form the baseline of organizational
                defense.
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
<div
  className="
    w-full
    min-w-0
    self-start
    rounded-lg
    bg-white/10
    p-4
    sm:p-5
    md:p-6
    lg:p-7
    xl:p-8
  "
>
  {/* Heading */}
  <h2
    className="
      text-[17px]
      font-bold
      leading-[1.4]
      text-white
      sm:text-[18px]
      md:text-[20px]
    "
    style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}
  >
    Key Environmental Vectors
  </h2>

  {/* Vectors */}
  <div
    className="
      mt-5
      grid
      grid-cols-1
      gap-3
      sm:grid-cols-2
      sm:gap-3.5
      md:mt-6
    "
  >
    {vectors.map((v) => (
      <div
        key={v}
        className="
          flex
          items-start
          gap-2.5
          rounded-md
          bg-white/10
          px-3
          py-3
          text-[12px]
          leading-[1.5]
          text-white
          transition-colors
          duration-300
          hover:bg-white/15
          sm:px-3.5
          sm:py-3.5
          sm:text-[13px]
        "
        style={{
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <span
          className="
            mt-1.5
            h-1.5
            w-1.5
            flex-shrink-0
            rounded-full
            bg-rose-300
          "
        />

        <span>{v}</span>
      </div>
    ))}
  </div>

  {/* Bottom Text */}
  <div
    className="
      mt-5
      rounded-md
      bg-white/10
      px-4
      py-4
      sm:mt-6
      sm:px-5
      sm:py-4
    "
  >
    <p
      className="
        text-[12px]
        leading-[1.7]
        text-rose-100/90
        sm:text-[13px]
        md:text-[14px]
      "
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      The right approach depends on the organization, its technology
      landscape and the risks it needs to manage.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}