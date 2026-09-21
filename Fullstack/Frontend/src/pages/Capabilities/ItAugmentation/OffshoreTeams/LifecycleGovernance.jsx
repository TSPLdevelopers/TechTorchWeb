import React from "react";
import { useNavigate } from "react-router-dom";

export default function LifecycleGovernance() {
    const navigate = useNavigate();
  return (
    <div className="w-full overflow-hidden">
      {/* =========================================================
          LIFECYCLE GOVERNANCE
      ========================================================= */}
      <section className="w-full bg-[#F9F8F3] px-4 sm:px-6 md:px-8 lg:px-16">
        <div
          className="
            mx-auto
            flex
            min-h-[390px]
            max-w-[1150px]
            flex-col
            items-center
            justify-center
            px-2
            py-12
            text-center
            sm:px-4
            sm:py-16
            md:py-20
            lg:py-24
          "
        >
          {/* Small Label */}
          <p
            className="
              mb-4
              text-[9px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#8B0047]
              sm:text-[10px]
              md:text-[11px]
            "
          >
            Lifecycle Governance
          </p>

          {/* Heading */}
          <h2
            className="
              max-w-[800px]
              text-[#15151A]
              font-semibold
              font-['Plus_Jakarta_Sans']
              leading-[1.12]
              tracking-[-0.03em]
              text-[26px]
              sm:text-[30px]
              md:text-[32px]
              lg:text-[32px]
            "
          >
            Support Through the Software Lifecycle
          </h2>

          {/* Subtitle */}
          <p
            className="
              mt-2
              text-[12px]
              font-medium
              text-[#5E5960]
              sm:text-[13px]
              md:text-[14px]
            "
          >
            From Development to Continuous Improvement
          </p>

          {/* Paragraphs */}
          <div
            className="
              mt-6
              w-full
              max-w-[760px]
              space-y-4
              px-1
              text-[11px]
              leading-[1.7]
              text-[#5B5B63]
              sm:px-0
              sm:text-[12px]
              md:text-[14px]
            "
          >
            <p>
              Software development does not end when an application is
              launched. Applications often require ongoing maintenance,
              enhancements, integrations, testing, security updates, and
              technical improvements.
            </p>

            <p>
              TechTorch can support development requirements across the
              software lifecycle, helping businesses continue improving their
              applications as their technology and business needs evolve.
            </p>

            <p>
              This approach provides businesses with the flexibility to use
              dedicated technical resources not only for initial projects but
              also for ongoing product development and support.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          COLLABORATION PHILOSOPHY
      ========================================================= */}
      <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16">
        <div
          className="
            mx-auto
            flex
            min-h-[350px]
            max-w-[1150px]
            flex-col
            items-center
            justify-center
            px-2
            py-12
            text-center
            sm:px-4
            sm:py-16
            md:py-20
            lg:py-24
          "
        >
          {/* Small Label */}
          <p
            className="
              mb-4
              text-[9px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#8B0047]
              sm:text-[10px]
              md:text-[11px]
            "
          >
            Collaboration Philosophy
          </p>

          {/* Heading */}
          <h2
            className="
              max-w-[850px]
              text-[#15151A]
              font-semibold
              leading-[1.12]
              tracking-[-0.03em]
              text-[25px]
              sm:text-[30px]
              md:text-[32px]
              lg:text-[32px]
            "
          >
            A Team That Works With Your Business
          </h2>

          {/* Subtitle */}
          <p
            className="
              mt-2
              text-[12px]
              font-medium
              text-[#5E5960]
              sm:text-[13px]
              md:text-[14px]
            "
          >
            Technology Expertise That Complements Your Team
          </p>

          {/* Paragraph */}
          <p
            className="
              mt-6
              w-full
              max-w-[760px]
              px-1
              text-[11px]
              leading-[1.7]
              text-[#5B5B63]
              sm:px-0
              sm:text-[12px]
              md:text-[14px]
            "
          >
            The purpose of an offshore development team is to become a useful
            extension of your technology capabilities. TechTorch focuses on
            understanding your requirements, establishing the right team
            structure, and providing technical expertise that fits your
            development environment. Whether you need additional developers,
            a dedicated engineering team, or support for a specific technology
            requirement, the team can be structured around your business
            objectives.
          </p>
        </div>
      </section>

      {/* =========================================================
          CTA / DEVELOPMENT TEAM
      ========================================================= */}
      <section
        className="
          relative
          w-full
          min-h-[520px]
          overflow-hidden
          sm:min-h-[500px]
          md:min-h-[500px]
          lg:min-h-[500px]
        "
      >
        {/* Background Image */}
        <img
          src="/LifecycleGovernance.png"
          alt="Development team"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Dark / Maroon Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-[#300019]/60
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[520px]
            max-w-[1100px]
            flex-col
            items-center
            justify-center
            px-4
            py-12
            text-center
            sm:min-h-[500px]
            sm:px-8
            sm:py-14
            md:py-16
          "
        >
          {/* Badge */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2
              backdrop-blur-md
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#43E6B2]" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-white
                sm:text-[10px]
              "
            >
              Accelerate Engineering Capability
            </span>
          </div>

          {/* CTA Heading */}
          <h2
            className="
              max-w-[850px]
              text-white
              font-bold
              font-['Plus_Jakarta_Sans']
              leading-[1.05]
              tracking-[-0.035em]
              text-[28px]
              sm:text-[34px]
              md:text-[38px]
              lg:text-[40px]
            "
          >
            Ready to Strengthen Your Development
            <br className="hidden sm:block" />
            {" "}Team?
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              w-full
              max-w-[700px]
              px-2
              text-[12px]
              leading-[1.55]
              text-white/80
              sm:mt-6
              sm:px-0
              sm:text-[14px]
              md:text-[16px]
            "
          >
            Tell us about your project, technology requirements, and the
            capabilities you are looking for. Our team can help you explore a
            development model that fits your business.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-7
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3
              sm:mt-8
              sm:flex-row
            "
          >
            <button
            onClick={() => navigate("/development-requirements")}
              className="
                group
                flex
                min-h-[50px]
                w-full
                max-w-[360px]
                items-center
                justify-center
                rounded-[9px]
                bg-[#780042]
                px-5
                text-[12px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#8E004B]
                hover:-translate-y-[1px]
                sm:px-7
                sm:text-[14px]
              "
            >
              Discuss Your Development Requirements

              <span
                className="
                  ml-2
                  text-[18px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </button>

            <button
              className="
                min-h-[50px]
                w-full
                max-w-[360px]
                rounded-[9px]
                border
                border-white/30
                bg-white/10
                px-5
                text-[12px]
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/20
                sm:max-w-[190px]
                sm:px-7
                sm:text-[14px]
              "
            >
              Talk to Our Experts
            </button>
          </div>

          {/* Bottom Benefits */}
          <div
            className="
              mt-8
              flex
              w-full
              max-w-[900px]
              flex-wrap
              items-center
              justify-center
              gap-x-6
              gap-y-3
              border-t
              border-white/20
              px-2
              pt-6
              sm:mt-9
              sm:gap-x-8
              sm:gap-y-4
              sm:px-0
              sm:pt-7
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                text-[10px]
                text-white/80
                sm:text-[11px]
                md:text-[12px]
              "
            >
              <span className="text-[#35D6A4]">✓</span>
              Mutual NDA Protected
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-[10px]
                text-white/80
                sm:text-[11px]
                md:text-[12px]
              "
            >
              <span className="text-[#35D6A4]">✓</span>
              Direct Technical Consultation (&lt;24h)
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-[10px]
                text-white/80
                sm:text-[11px]
                md:text-[12px]
              "
            >
              <span className="text-[#35D6A4]">✓</span>
              Flexible &amp; Transparent Engagement
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}