import React, { useEffect, useRef, useState } from "react";
import {
  ShoppingBag,
  Package,
  IdCard,
  Smartphone,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const features = [
  {
    icon: ShoppingBag,
    title: "Easy Store Experience",
    body: "Provide a clear and responsive environment for browsing products.",
  },
  {
    icon: Package,
    title: "Organized Product Information",
    body: "Keep product listings, pricing and promotions organized.",
  },
  {
    icon: IdCard,
    title: "Connected Customer Information",
    body: "Bring customer preferences and purchase history into your business environment.",
  },
  {
    icon: Smartphone,
    title: "Responsive Access",
    body: "Support online access across different devices.",
  },
];

export default function ShoppingExperienceSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#f5f6f8",
        color: INK,
      }}
      className="w-full overflow-hidden font-['Inter']"
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
          gap-8
          sm:gap-10
          lg:gap-14
          items-start
        "
      >
        {/* ================= LEFT IMAGE ================= */}
        <div className="relative w-full">
          <div
            className="
              relative
              w-full
              h-[240px]
              sm:h-[280px]
              md:h-[330px]
              lg:h-[370px]
              rounded-2xl
              overflow-hidden
              bg-gray-200
            "
          >
            <img
              src="/shopping-experience.jpg"
              alt="Warehouse staff verifying dispatch inventory"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                hover:scale-[1.03]
              "
            />

            {/* Soft overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.18), transparent 50%)",
              }}
            />
          </div>

          {/* ================= FLOATING CAPTION ================= */}
          <div
            className="
              absolute
              bottom-3
              sm:bottom-4
              left-3
              sm:left-4
              right-3
              sm:right-4
              bg-white
              rounded-lg
              px-3
              sm:px-4
              py-3
            "
            style={{
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            }}
          >
            <p
              className="
                text-[9px]
                sm:text-[10px]
                font-semibold
                tracking-wide
                mb-1.5
                inline-block
                px-2
                py-1
                rounded
                font-['Inter']
              "
              style={{
                color: WINE,
                background: "#fbeef1",
              }}
            >
              FULFILLMENT INTEGRATION
            </p>

            <p
              className="
                text-xs
                sm:text-sm
                font-semibold
                leading-snug
                font-['Plus_Jakarta_Sans']
              "
            >
              Real-time inventory verification at dispatch
            </p>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-full">
          {/* Sub Heading */}
          <p
            className="
              text-[10px]
              sm:text-[11px]
              md:text-xs
              font-semibold
              tracking-[0.08em]
              mb-3
              font-['Plus_Jakarta_Sans']
            "
            style={{ color: WINE }}
          >
            FRONT-END PRECISION
          </p>

          {/* Main Heading */}
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
              mb-4
              max-w-xl
            "
          >
            Create a Better Online Shopping Experience
          </h2>

          {/* Description */}
          <p
            className="
              text-sm
              sm:text-[14px]
              leading-7
              mb-6
              font-['Inter']
            "
            style={{ color: MUTED }}
          >
            A well-structured digital storefront helps customers find
            products, understand information and interact with your
            business across different devices.
          </p>

          {/* ================= FEATURE CARDS ================= */}
          <div className="flex flex-col gap-3">
            {features.map(({ icon: Icon, title, body }, index) => (
              <div
                key={title}
                className={`
                  group
                  bg-white
                  rounded-lg
                  p-3.5
                  sm:p-4
                  flex
                  items-start
                  gap-3
                  border
                  border-transparent
                  transition-all
                  duration-500
                  ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                  hover:-translate-y-1.5
                  hover:border-[#7A1F3D]/15
                  hover:shadow-[0_12px_28px_rgba(122,31,61,0.10)]
                `}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 180}ms`
                    : "0ms",
                }}
              >
                {/* Icon */}
                <span
                  className="
                    w-8
                    h-8
                    sm:w-9
                    sm:h-9
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    shrink-0
                  "
                  style={{
                    background: "#fbeef1",
                    color: WINE,
                  }}
                >
                  <Icon
                    size={15}
                    sm-size={16}
                    strokeWidth={1.8}
                  />
                </span>

                {/* Text */}
                <div className="min-w-0">
                  <h3
                    className="
                      text-sm
                      sm:text-[14px]
                      font-semibold
                      mb-1
                      leading-snug
                      font-['Plus_Jakarta_Sans']
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      text-xs
                      sm:text-[13px]
                      leading-relaxed
                      font-['Inter']
                    "
                    style={{ color: MUTED }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}