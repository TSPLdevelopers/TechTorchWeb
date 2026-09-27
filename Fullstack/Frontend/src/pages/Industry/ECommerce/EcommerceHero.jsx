import React from "react";
import { ArrowRight, Download, ShoppingBag } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function EcommerceHeroSection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div>
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6"
            style={{ background: "#fbeef1", color: WINE }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
            E-COMMERCE
          </span>

          <h1 className="text-4xl md:text-[2.5rem] leading-[1.15] font-bold tracking-tight mb-6">
            E-Commerce Solutions for Modern Online Businesses
          </h1>

          <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
            Build a professional online presence with e-commerce technology
            designed around your products, customers and business
            requirements. TechTorch provides e-commerce solutions for
            online storefronts, product management, payments, customer
            relationships, analytics and ongoing business support.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white text-sm font-medium"
              style={{ background: WINE }}
            >
              Talk to Our Experts
              <ArrowRight size={16} />
            </button>
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium border"
              style={{ borderColor: "#d8d5d0", color: INK }}
            >
              Get In Touch
              <Download size={15} />
            </button>
          </div>
        </div>

        {/* Right: image with floating status card */}
        <div className="relative">
          <div
            className="rounded-2xl w-full h-72 flex items-center justify-center text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #e9e4dc 0%, #d3ccc0 45%, #c4bcac 100%)",
              color: "#8a8378",
            }}
          >
            Team reviewing storefront displays in a boutique
          </div>

          <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
            <span
              className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
              style={{ background: "#fbeef1", color: WINE }}
            >
              <ShoppingBag size={16} />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold">Integrated Commerce Studio</p>
              <p className="text-xs" style={{ color: MUTED }}>
                Storefront, catalog, and operations synchronized
              </p>
            </div>
            <span
              className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full shrink-0"
              style={{ background: "#e5f7ec", color: "#1a9455" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1a9455" }} />
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}