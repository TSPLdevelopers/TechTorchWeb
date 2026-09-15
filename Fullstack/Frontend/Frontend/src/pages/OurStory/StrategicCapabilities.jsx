import React from "react";

const capabilities = [
  {
    img: "/AI visualization.png",
    title: "AI-Delivered Right",
    description:
      "Ethical, scalable artificial intelligence implementations that drive measurable operational efficiency.",
  },
  {
    img: "/Cloud visualization.png",
    title: "Cloud Infrastructure",
    description:
      "Resilient, multi-cloud architectures built for high availability and stringent security compliance.",
  },
  {
    img: "/Engineering visualization.png",
    title: "Engineering Services",
    description:
      "Precision software development utilizing modern stacks to construct robust enterprise applications.",
  },
  {
    img: "/Digital apps visualization.png",
    title: "Digital Applications",
    description:
      "End-to-end transformation of legacy systems into unified, high-performance digital ecosystems.",
  },
];

export default function StrategicCapabilities() {
  return (
    <section
      className="
        w-full
        bg-[#F4F6FB]
        px-5
        sm:px-8
        md:px-10
        lg:px-12
        py-12
        sm:py-14
        md:py-16
        lg:py-20
        font-inter
      "
    >
      {/* Heading */}
      <div className="w-full max-w-5xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
        <h2
          className="
            text-[#111827]
            font-bold
            text-2xl
            sm:text-3xl
            md:text-[32px]
            leading-tight
            mb-3
            sm:mb-4
            font-plus-jakarta
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Strategic Capabilities
        </h2>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-inter">
          Comprehensive enterprise solutions designed for the modern
          architectural landscape. We translate technical complexity into
          business advantage.
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          w-full
          max-w-5xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
          sm:gap-6
          lg:gap-7
          xl:gap-9
        "
      >
        {capabilities.map(({ img, title, description }) => (
          <div
            key={title}
            className="
              group
              w-full
              bg-white
              rounded-xl
              overflow-hidden
              shadow-sm
              p-4
              sm:p-5
              transition-all
              duration-300
              hover:shadow-md
              hover:-translate-y-1
              font-inter
            "
          >
            {/* Image */}
            <div
              className="
                w-full
                h-36
                sm:h-32
                md:h-36
                lg:h-28
                xl:h-32
                overflow-hidden
                rounded-lg
                mb-4
              "
            >
              <img
                src={img}
                alt={title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-105
                "
              />
            </div>

            {/* Card Heading */}
            <h3
              className="
                font-semibold
                text-[16px]
                sm:text-base
                leading-snug
                mb-2
                font-inter
              "
              style={{ color: "#111827" }}
            >
              {title}
            </h3>

            {/* Card Description */}
            <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed font-inter">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}