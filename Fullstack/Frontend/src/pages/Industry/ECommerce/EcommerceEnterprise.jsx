import React from "react";
import { Share2 } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function EnterpriseAlignmentSection() {
  return (
    <section
      style={{ background: "#f7f5f2", color: INK }}
      className="w-full font-['Inter'] overflow-hidden"
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-[100px]
          py-12 sm:py-14 md:py-16 lg:py-20
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8 sm:gap-10 md:gap-12 lg:gap-14
          items-start
        "
      >
        {/* ================= LEFT ================= */}
        <div>
          <p
            className="
              text-[10px] sm:text-[11px] md:text-xs
              font-semibold
              tracking-[0.08em]
              mb-3
              font-['Plus_Jakarta_Sans']
            "
            style={{ color: WINE }}
          >
            ENTERPRISE ALIGNMENT
          </p>

          <h2
            className="
              font-['Plus_Jakarta_Sans']
              text-2xl
              sm:text-[1.65rem]
              md:text-[1.75rem]
              lg:text-[1.9rem]
              leading-[1.25]
              font-bold
              tracking-tight
              max-w-xl
            "
          >
            Build a More Connected Online
            <br className="hidden sm:block" />
            Business
          </h2>
        </div>

        {/* ================= RIGHT ================= */}
        <div>
          <p
            className="
              text-sm
              sm:text-[14px]
              md:text-sm
              leading-7
              mb-6
              font-['Inter']
            "
            style={{ color: MUTED }}
          >
            An e-commerce business depends on more than an online store.
            Product information, inventory, pricing, payments, customer
            data and business insights all play an important role in
            managing online operations. TechTorch provides e-commerce
            solutions that bring these areas together in a practical
            digital environment, with support from implementation and
            training through ongoing maintenance and updates.
          </p>

          {/* ================= CARD ================= */}
          <div
            className="
              group
              bg-white
              rounded-lg
              p-4 sm:p-5
              border-l-4
              transition-all
              duration-300
              ease-out
              hover:-translate-y-2
              hover:scale-[1.015]
              hover:shadow-[0_18px_35px_rgba(122,31,61,0.12),0_5px_12px_rgba(0,0,0,0.04)]
            "
            style={{
              borderColor: WINE,
            }}
          >
            {/* Card Heading */}
            <div className="flex items-center gap-2 mb-2">
              <Share2
                size={16}
                strokeWidth={1.8}
                style={{ color: WINE }}
                className="shrink-0"
              />

              <h3
                className="
                  text-sm
                  sm:text-[14px]
                  font-semibold
                  font-['Plus_Jakarta_Sans']
                "
              >
                Operational Coherence
              </h3>
            </div>

            {/* Card Description */}
            <p
              className="
                text-xs
                sm:text-[13px]
                leading-relaxed
                font-['Inter']
              "
              style={{ color: MUTED }}
            >
              Bridging the gap between the front-of-house shopping
              experience and back-of-house supply chain execution creates
              stable, predictable growth for expanding enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}