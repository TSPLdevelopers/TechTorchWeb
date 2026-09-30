import React from "react";
import { Radio, MapPin } from "lucide-react";

export default function StrategicPerspective() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          px-4
          py-10
          sm:px-6
          sm:py-12
          md:px-8
          md:py-16
          lg:px-10
          lg:py-20
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-8 w-full max-w-3xl sm:mb-10 md:mb-12">
          {/* Eyebrow */}

          <div className="mb-3 flex items-center gap-2 sm:mb-4">
            <span
              className="h-px w-6 sm:w-8"
              style={{ backgroundColor: "#730024" }}
            />

            <span
              className="
                font-['Inter']
                text-[9px]
                font-semibold
                tracking-[0.08em]
                sm:text-[10px]
                md:text-[11px]
              "
              style={{ color: "#730024" }}
            >
              In-Depth Strategic Perspective
            </span>
          </div>

          {/* Main Heading */}

          <h1
            className="
              max-w-3xl
              font-['Plus_Jakarta_Sans']
              text-[25px]
              font-bold
              leading-[1.18]
              tracking-[-0.025em]
              text-[#1c1c1c]
              sm:text-[31px]
              md:text-[36px]
              lg:text-[40px]
            "
          >
            Harness the Power of Artificial Intelligence Without the Complexity
          </h1>
        </div>

        {/* =====================================================
            TWO COLUMN LAYOUT
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-8
            sm:gap-10
            md:gap-12
            lg:grid-cols-[1.55fr_1fr]
            lg:gap-14
          "
        >
          {/* =================================================
              LEFT COLUMN - ARTICLE
          ================================================= */}

          <div
            className="
              space-y-4
              font-['Inter']
              text-[12px]
              leading-[1.7]
              text-neutral-600
              sm:space-y-5
              sm:text-[13px]
              md:text-[14px]
            "
          >
            <p>
              Artificial Intelligence is becoming an important part of the
              modern technology landscape, creating new opportunities for
              businesses to improve the way they work and use technology.
            </p>

            <p>
              At TechTorch Solutions, our Artificial Intelligence as a
              Service offering is designed to help businesses access the
              power of AI without having to take on the complexity of
              building and maintaining their own infrastructure.
            </p>

            <p>
              Instead of requiring businesses to develop and manage an AI
              infrastructure independently, our service provides a more
              accessible way to bring Artificial Intelligence capabilities
              into their technology environment.
            </p>

            <p>
              This approach allows organizations to focus on their business
              and technology requirements while reducing the infrastructure
              complexity associated with adopting AI.
            </p>

            {/* ================= PULL QUOTE ================= */}

            <blockquote
              className="
                border-l-[3px]
                py-3
                pl-4
                pr-3
                font-['Inter']
                text-[12px]
                italic
                leading-[1.7]
                text-neutral-700
                sm:py-4
                sm:pl-5
                sm:pr-4
                sm:text-[13px]
                md:text-[14px]
              "
              style={{
                borderColor: "#730024",
                backgroundColor: "#fdf2f7",
              }}
            >
              "At TechTorch, we believe technology should help businesses move
              forward rather than create additional complexity. Our Artificial
              Intelligence service is therefore positioned as part of our
              broader technology offering, alongside IT Consultancy, Cloud
              Infrastructure, Cyber Security, Software Engineering, Business
              Process Outsourcing, Software Development & Support, and Resource
              & Staffing."
            </blockquote>

            <p>
              By bringing these capabilities together, TechTorch provides
              businesses with access to a wider technology ecosystem through
              one technology partner.
            </p>

            <p>
              Artificial Intelligence can be an important part of a
              business's technology journey, particularly as organizations
              look for modern ways to strengthen their technology
              capabilities. Our AI as a Service approach provides businesses
              with a practical way to explore and use AI while avoiding the
              need to build and maintain the complete infrastructure
              themselves.
            </p>

            <p>
              The focus is simple: make the power of Artificial Intelligence
              more accessible while keeping the technology environment
              practical and manageable.
            </p>

            <p>
              Whether an organization is beginning its journey with
              Artificial Intelligence or looking for a way to introduce AI
              capabilities without taking on the full infrastructure
              responsibility, TechTorch provides an AI service designed
              around this need.
            </p>

            <p>
              With Artificial Intelligence as part of our wider technology
              services, businesses can approach their technology requirements
              through a connected ecosystem that includes consulting,
              infrastructure, security, engineering, software development,
              operational support and staffing.
            </p>

            {/* ================= CALLOUT ================= */}

            <div
              className="
                rounded-lg
                px-4
                py-3
                font-['Inter']
                text-[11.5px]
                font-medium
                leading-[1.65]
                sm:px-5
                sm:py-4
                sm:text-[12px]
                md:text-[13px]
              "
              style={{
                backgroundColor: "#fdf2f7",
                color: "#730024",
              }}
            >
              Our objective is to help businesses make use of modern
              Artificial Intelligence capabilities while keeping the
              technology journey focused, practical and aligned with their
              requirements.
            </div>
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <div
            className="
              w-full
              lg:sticky
              lg:top-8
            "
          >
            {/* =================================================
                IMAGE CARD
            ================================================= */}

            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-neutral-200
                bg-neutral-900
                shadow-sm
              "
            >
              {/* Image */}

              <img
                src="OpManagement.png"
                alt="Business team working together"
                className="
                  block
                  h-[330px]
                  w-full
                  object-cover
                  sm:h-[390px]
                  md:h-[420px]
                  lg:h-[450px]
                "
              />

              {/* Dark gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/85
                  via-black/25
                  to-black/5
                "
              />

              {/* Content over image */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  p-4
                  sm:p-5
                  md:p-6
                "
              >
                {/* Label */}

                <span
                  className="
                    mb-2
                    inline-flex
                    rounded-md
                    px-2.5
                    py-1
                    font-['Inter']
                    text-[8px]
                    font-semibold
                    tracking-[0.08em]
                    text-white
                    sm:text-[9px]
                  "
                  style={{
                    backgroundColor: "#730024",
                  }}
                >
                  TECHTORCH LABS
                </span>

                {/* Image Heading */}

                <h3
                  className="
                    mb-1
                    font-['Plus_Jakarta_Sans']
                    text-[17px]
                    font-bold
                    leading-tight
                    text-white
                    sm:text-[19px]
                    md:text-[20px]
                  "
                >
                  Operational Neural Clusters
                </h3>

                {/* Image Subheading */}

                <p
                  className="
                    max-w-[330px]
                    font-['Inter']
                    text-[11px]
                    leading-[1.5]
                    text-white/75
                    sm:text-[12px]
                    md:text-[13px]
                  "
                >
                  Continuous AI model serving with automated workload tiering.
                </p>
              </div>
            </div>

            {/* =================================================
                STATUS CARD
            ================================================= */}

            <div
              className="
                mt-4
                flex
                w-full
                flex-col
                gap-4
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-4
                shadow-sm
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:p-5
              "
            >
              {/* Left */}

              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    sm:h-11
                    sm:w-11
                  "
                  style={{
                    borderColor: "#f4d5e1",
                    backgroundColor: "#fff7fa",
                  }}
                >
                  <MapPin
                    className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                    style={{ color: "#730024" }}
                  />
                </div>

                <div>
                  <div
                    className="
                      mb-0.5
                      font-['Inter']
                      text-[8px]
                      font-semibold
                      tracking-[0.08em]
                      text-neutral-400
                      sm:text-[9px]
                    "
                  >
                    DEPLOYMENT VELOCITY
                  </div>

                  <div
                    className="
                      font-['Plus_Jakarta_Sans']
                      text-[13px]
                      font-semibold
                      text-[#1c1c1c]
                      sm:text-[14px]
                    "
                  >
                    Immediate Access Model
                  </div>
                </div>
              </div>

              {/* Status */}

              <span
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-1.5
                  rounded-full
                  px-3
                  py-1.5
                  font-['Inter']
                  text-[9px]
                  font-semibold
                  sm:text-[10px]
                "
                style={{
                  backgroundColor: "#ecfdf5",
                  color: "#059669",
                }}
              >
                <Radio className="h-3 w-3" />
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}