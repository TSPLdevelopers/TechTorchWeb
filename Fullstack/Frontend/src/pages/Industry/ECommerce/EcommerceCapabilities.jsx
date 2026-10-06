import React, { useEffect, useRef, useState } from "react";
import {
  Monitor,
  Package,
  CreditCard,
  Users,
  LineChart,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

function Card({ num, icon: Icon, title, body, index, isVisible }) {
  return (
    <div
      className={`
        rounded-xl
        sm:rounded-2xl
        p-5
        sm:p-6
        border
        bg-white
        transition-all
        duration-700
        ease-out
        hover:-translate-y-2
        hover:shadow-[0_16px_35px_rgba(122,31,61,0.10)]
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-[0.96]"
        }
      `}
      style={{
        borderColor: "#ece9e4",
        transitionDelay: isVisible ? `${index * 160}ms` : "0ms",
      }}
    >
      {/* Top Row */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        {/* Icon */}
        <span
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg"
          style={{
            background: "#fbeef1",
            color: WINE,
          }}
        >
          <Icon size={16} strokeWidth={1.8} />
        </span>

        {/* Number */}
        <span
          className="text-base sm:text-lg font-bold"
          style={{
            color: "#e3d3d9",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {num}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-sm sm:text-[15px] font-semibold mb-2"
        style={{
          color: INK,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-xs sm:text-[13px] leading-relaxed"
        style={{
          color: MUTED,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {body}
      </p>
    </div>
  );
}

export default function EcommerceCapabilitiesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
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
      className="w-full bg-white overflow-hidden"
      style={{
        color: INK,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px] py-12 sm:py-14 md:py-16 lg:py-20">

        {/* Section Label */}
        <p
          className="text-[10px] sm:text-xs font-semibold tracking-[0.08em] mb-3"
          style={{
            color: WINE,
            fontFamily: "Inter, sans-serif",
          }}
        >
          E-COMMERCE CAPABILITIES
        </p>

        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-tight font-bold tracking-tight mb-8 sm:mb-10 md:mb-12"
          style={{
            color: INK,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Key Capabilities for Your Online Business
        </h2>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
          <Card
            num="01"
            icon={Monitor}
            title="Storefront Design"
            body="Create responsive online storefronts that provide customers with an easy way to browse and interact with your business."
            index={0}
            isVisible={isVisible}
          />

          <Card
            num="02"
            icon={Package}
            title="Product Management"
            body="Manage product listings, inventory information, pricing and promotions through an organized platform."
            index={1}
            isVisible={isVisible}
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <Card
            num="03"
            icon={CreditCard}
            title="Payment Processing"
            body="Support online transactions through payment gateway capabilities designed for the purchasing process."
            index={2}
            isVisible={isVisible}
          />

          <Card
            num="04"
            icon={Users}
            title="Customer Relationship Tools"
            body="Manage customer information, preferences and purchase history to support customer engagement and service."
            index={3}
            isVisible={isVisible}
          />

          <Card
            num="05"
            icon={LineChart}
            title="Analytics & Reporting"
            body="Review sales performance, customer trends and website activity through reporting and analytics."
            index={4}
            isVisible={isVisible}
          />
        </div>

      </div>
    </section>
  );
}