import React from "react";
import { LayoutGrid, GraduationCap, ArrowRight } from "lucide-react";

export default function OurPlatformsSection() {
  return (
    <section
      className="
        w-full
        bg-white
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
      "
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* ================= HEADER ================= */}

        <div
          className="
            mb-7
            max-w-xl
            sm:mb-8
            md:mb-9
          "
        >
          {/* Label */}

          <div className="mb-2.5 flex items-center gap-3">
            <span
              className="
                font-['Inter']
                text-[12px]
                font-semibold
                sm:text-[13px]
              "
              style={{ color: "#730024" }}
            >
              Our Platforms
            </span>

            <span
              className="h-px w-8"
              style={{ backgroundColor: "#730024" }}
            />
          </div>

          {/* Heading */}

          <h2
            className="
              mb-2.5
              font-['Plus_Jakarta_Sans']
              text-[25px]
              font-bold
              leading-[1.2]
              tracking-[-0.02em]
              text-slate-900
              sm:text-[29px]
              md:text-[32px]
            "
          >
            Built for the Way You Work
          </h2>

          {/* Sub Heading */}

          <p
            className="
              font-['Plus_Jakarta_Sans']
              text-[13px]
              leading-[1.6]
              text-slate-500
              sm:text-[14px]
              md:text-[15px]
            "
          >
            Our platforms bring together the tools businesses need to manage
            their operations, people and growth from a more connected
            environment.
          </p>
        </div>

        {/* ================= PLATFORM CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-2
            lg:gap-6
          "
        >

          {/* ================= TORCHX SUITE ================= */}

          <div
            className="
              flex
              flex-col
              rounded-2xl
              border
              border-slate-100
              bg-[#fbf6f9]
              p-5
              sm:p-6
              lg:p-7
            "
          >

            {/* Card Header */}

            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <div
                className="
                  flex
                  h-9
                  w-9
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  sm:h-10
                  sm:w-10
                "
                style={{ backgroundColor: "#7a0e4a" }}
              >
                <LayoutGrid
                  size={17}
                  className="text-white"
                />
              </div>

              <h3
                className="
                  font-['Inter']
                  text-[17px]
                  font-bold
                  text-slate-900
                  sm:text-[19px]
                "
              >
                TorchX{" "}
                <span style={{ color: "#730024" }}>
                  Suite
                </span>
              </h3>
            </div>

            {/* Card Heading */}

            <h4
              className="
                mb-2.5
                font-['Inter']
                text-[15px]
                font-semibold
                leading-snug
                text-slate-900
                sm:text-[16px]
                md:text-[17px]
              "
            >
              Everything Your Business Needs, Connected.
            </h4>

            {/* Description */}

            <p
              className="
                mb-2.5
                font-['Inter']
                text-[12.5px]
                leading-[1.6]
                text-slate-500
                sm:text-[13px]
                md:text-[13.5px]
              "
            >
              TorchX is a smart business platform designed for small and
              medium-sized businesses, bringing HRM, CRM and Accounts
              together in one place.
            </p>

            <p
              className="
                mb-5
                font-['Inter']
                text-[12.5px]
                leading-[1.6]
                text-slate-500
                sm:text-[13px]
                md:text-[13.5px]
              "
            >
              Manage your people, customer relationships, and financial
              operations through a connected system — built to reduce
              complexity and support business growth.
            </p>

            {/* ================= SUITE IMAGE ================= */}

            <div
              className="
                relative
                mb-5
                flex
                min-h-[155px]
                flex-1
                items-center
                justify-center
                sm:min-h-[170px]
              "
            >
              <div
                className="
                  relative
                  w-full
                  sm:w-[78%]
                  lg:w-[72%]
                "
              >
                {/* Main Image */}

                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/desktop.png"
                    alt="TorchX Suite dashboard on a laptop"
                    className="
                      block
                      h-[135px]
                      w-full
                      object-cover
                      object-center
                      sm:h-[155px]
                      md:h-[165px]
                      lg:h-[170px]
                    "
                  />
                </div>

                {/* Phone */}

                <div
                  className="
                    absolute
                    bottom-[-10px]
                    right-[-12px]
                    z-10
                    w-[48px]
                    overflow-hidden
                    rounded-lg
                    border-2
                    border-white
                    bg-white
                    shadow-xl
                    sm:right-[-18px]
                    sm:w-[58px]
                    md:w-[62px]
                  "
                >
                  <img
                    src="/phone.png"
                    alt="TorchX Suite mobile app"
                    className="
                      block
                      h-auto
                      w-full
                      object-contain
                    "
                  />
                </div>
              </div>
            </div>

            {/* Explore */}

            <a
              href="#"
              className="
                mt-1
                inline-flex
                items-center
                gap-1.5
                font-['Inter']
                text-[12px]
                font-semibold
                sm:text-[13px]
              "
              style={{ color: "#730024" }}
            >
              Explore TorchX Suite
              <ArrowRight size={13} />
            </a>
          </div>

          {/* ================= TORCHX ACADEMY ================= */}

          <div
            className="
              flex
              flex-col
              rounded-2xl
              border
              border-slate-100
              bg-[#fbf6f9]
              p-5
              sm:p-6
              lg:p-7
            "
          >

            {/* Card Header */}

            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <div
                className="
                  flex
                  h-9
                  w-9
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  sm:h-10
                  sm:w-10
                "
                style={{ backgroundColor: "#7a0e4a" }}
              >
                <GraduationCap
                  size={17}
                  className="text-white"
                />
              </div>

              <h3
                className="
                  font-['Inter']
                  text-[17px]
                  font-bold
                  text-slate-900
                  sm:text-[19px]
                "
              >
                TorchX{" "}
                <span style={{ color: "#730024" }}>
                  Academy
                </span>
              </h3>
            </div>

            {/* Card Heading */}

            <h4
              className="
                mb-2.5
                font-['Inter']
                text-[15px]
                font-semibold
                leading-snug
                text-slate-900
                sm:text-[16px]
                md:text-[17px]
              "
            >
              Learn. Develop. Move Forward.
            </h4>

            {/* Description */}

            <p
              className="
                mb-5
                font-['Inter']
                text-[12.5px]
                leading-[1.6]
                text-slate-500
                sm:text-[13px]
                md:text-[13.5px]
              "
            >
              TorchX Academy is a dedicated platform from TechTorch focused
              on building skills, enabling learning, and supporting
              continuous growth.
            </p>

            {/* ================= ACADEMY IMAGE ================= */}

            <div
              className="
                mb-5
                flex
                min-h-[155px]
                flex-1
                items-center
                justify-center
                sm:min-h-[170px]
              "
            >
              <div
                className="
                  w-full
                  overflow-hidden
                  rounded-lg
                  sm:w-[78%]
                  lg:w-[72%]
                "
              >
                <img
                  src="/desktop2.png"
                  alt="TorchX Academy dashboard on a desktop monitor"
                  className="
                    block
                    h-[135px]
                    w-full
                    object-cover
                    object-center
                    sm:h-[155px]
                    md:h-[165px]
                    lg:h-[170px]
                  "
                />
              </div>
            </div>

            {/* Explore */}

            <a
              href="#"
              className="
                mt-1
                inline-flex
                items-center
                gap-1.5
                font-['Inter']
                text-[12px]
                font-semibold
                sm:text-[13px]
              "
              style={{ color: "#730024" }}
            >
              Explore TorchX Academy
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}