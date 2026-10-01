import React from "react";
import { ArrowRight, Download, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function EcommerceHeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="w-full bg-white overflow-hidden"
      style={{ color: INK }}
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          md:px-10
          lg:px-[100px]
          py-12
          sm:py-14
          md:py-16
          lg:py-20
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          sm:gap-12
          lg:gap-14
          items-center
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full">
          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              text-[10px]
              sm:text-[11px]
              font-semibold
              tracking-wide
              px-3
              py-1.5
              rounded-full
              mb-5
              sm:mb-6
              font-['Inter']
            "
            style={{
              background: "#fbeef1",
              color: WINE,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: WINE }}
            />

            E-COMMERCE
          </span>

          {/* Main Heading */}
          <h1
            className="
              font-['Plus_Jakarta_Sans']
              text-3xl
              sm:text-4xl
              md:text-[2.5rem]
              lg:text-[2.7rem]
              xl:text-[2.9rem]
              leading-[1.15]
              font-bold
              tracking-tight
              mb-5
              sm:mb-6
              max-w-2xl
            "
          >
            E-Commerce Solutions for Modern Online Businesses
          </h1>

          {/* Description */}
          <p
            className="
              font-['Inter']
              text-sm
              sm:text-[15px]
              leading-7
              sm:leading-relaxed
              mb-7
              sm:mb-8
              max-w-xl
            "
            style={{ color: MUTED }}
          >
            Build a professional online presence with e-commerce technology
            designed around your products, customers and business
            requirements. TechTorch provides e-commerce solutions for
            online storefronts, product management, payments, customer
            relationships, analytics and ongoing business support.
          </p>

          {/* Buttons */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:flex-wrap
              items-stretch
              sm:items-center
              gap-3
            "
          >
            {/* Primary Button */}
            <button
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                py-3
                rounded-md
                text-white
                text-sm
                font-medium
                font-['Inter']
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
              style={{ background: WINE }}
            >
              Talk to Our Experts

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => navigate("/ecommerce-get-in-touch")}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                py-3
                rounded-md
                text-sm
                font-medium
                font-['Inter']
                border
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
              style={{
                borderColor: "#d8d5d0",
                color: INK,
              }}
            >
              Get In Touch

              <Download
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-0.5
                "
              />
            </button>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative w-full mt-4 lg:mt-0 pb-16 sm:pb-14 lg:pb-10">
          {/* Image */}
          <div
            className="
              relative
              w-full
              h-[270px]
              sm:h-[330px]
              md:h-[380px]
              lg:h-[400px]
              xl:h-[420px]
              rounded-2xl
              overflow-hidden
              group
            "
          >
            <img
              src="/ecommerce-hero.png"
              alt="E-commerce team working together"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.03]
              "
            />

            {/* Image overlay */}
            <div
              className="
                absolute
                inset-0
                pointer-events-none
              "
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.12), transparent 55%)",
              }}
            />
          </div>

          {/* ================= FLOATING STATUS CARD ================= */}
          <div
            className="
              absolute
              -bottom-1
              sm:-bottom-2
              lg:-bottom-3
              left-3
              right-3
              sm:left-5
              sm:right-5
              lg:left-5
              lg:right-5
              bg-white
              rounded-xl
              shadow-[0_12px_35px_rgba(0,0,0,0.10)]
              px-3
              sm:px-4
              py-3
              sm:py-3.5
              flex
              items-center
              gap-2.5
              sm:gap-3
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            {/* Icon */}
            <span
              className="
                w-9
                h-9
                sm:w-10
                sm:h-10
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
              <ShoppingBag size={16} strokeWidth={1.8} />
            </span>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p
                className="
                  text-xs
                  sm:text-sm
                  font-semibold
                  font-['Plus_Jakarta_Sans']
                  truncate
                "
              >
                Integrated Commerce Studio
              </p>

              <p
                className="
                  text-[10px]
                  sm:text-xs
                  leading-relaxed
                  font-['Inter']
                  mt-0.5
                "
                style={{ color: MUTED }}
              >
                Storefront, catalog, and operations synchronized
              </p>
            </div>

            {/* Active Status */}
            <span
              className="
                hidden
                xs:inline-flex
                sm:inline-flex
                items-center
                gap-1
                text-[10px]
                sm:text-[11px]
                font-medium
                px-2
                sm:px-2.5
                py-1
                rounded-full
                shrink-0
                font-['Inter']
              "
              style={{
                background: "#e5f7ec",
                color: "#1a9455",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#1a9455" }}
              />

              Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}