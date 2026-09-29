import React from "react";
import { Building2, Share2, Network, BadgeCheck, ArrowDown } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function BusinessToTechnologySection() {
  return (
    <div style={{ background: "#f4f1ec", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            TECHNOLOGY THAT WORKS FOR YOUR BUSINESS
          </p>

          <h2 className="text-3xl leading-[1.2] font-bold tracking-tight mb-5">
            Turning Business Requirements Into Practical Technology
          </h2>

          <div className="space-y-4 mb-6">
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              Every business has different technology requirements. Whether
              you are developing a new application, improving an existing
              system, connecting multiple platforms or strengthening your IT
              environment, the right technology starts with understanding
              the business behind it.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              At TechTorch, we focus on understanding your requirements,
              existing technology environment and business objectives
              before shaping a solution around them.
            </p>
          </div>

          <div
            className="bg-white rounded-xl p-5 flex items-start gap-3"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
          >
            <BadgeCheck size={18} style={{ color: WINE }} className="shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed" style={{ color: INK }}>
              Our capabilities cover IT consultancy, software engineering,
              cloud infrastructure, cybersecurity, AI, software development
              and support, BPO, and technology resources.
            </p>
          </div>
        </div>

        {/* Right: vertical flow diagram */}
        <div className="bg-white rounded-2xl p-8" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div className="flex flex-col items-center gap-1">
            {/* Business */}
            <div
              className="w-full max-w-xs rounded-xl p-5 text-center border"
              style={{ background: "#f6f6f8", borderColor: "#e8e7ea" }}
            >
              <span
                className="w-9 h-9 mx-auto flex items-center justify-center rounded-lg mb-3"
                style={{ background: "#fbeef1", color: WINE }}
              >
                <Building2 size={16} />
              </span>
              <p className="text-[10px] font-semibold tracking-wide mb-1" style={{ color: "#a29b8f" }}>
                PRIMARY DRIVER
              </p>
              <p className="text-sm font-semibold">Business</p>
            </div>

            <ArrowDown size={16} style={{ color: WINE }} className="my-2" />

            {/* Technology */}
            <div
              className="w-full max-w-xs rounded-xl p-5 text-center"
              style={{ background: WINE, boxShadow: "0 8px 20px rgba(122,31,61,0.25)" }}
            >
              <span
                className="w-9 h-9 mx-auto flex items-center justify-center rounded-lg mb-3"
                style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
              >
                <Share2 size={16} />
              </span>
              <p className="text-[10px] font-semibold tracking-wide mb-1" style={{ color: "#f0d0dc" }}>
                ARCHITECTURAL CORE
              </p>
              <p className="text-sm font-semibold text-white">Technology</p>
            </div>

            <ArrowDown size={16} style={{ color: WINE }} className="my-2" />

            {/* Connected Systems */}
            <div
              className="w-full max-w-xs rounded-xl p-5 text-center border"
              style={{ background: "#f6f6f8", borderColor: "#e8e7ea" }}
            >
              <span
                className="w-9 h-9 mx-auto flex items-center justify-center rounded-lg mb-3"
                style={{ background: "#fbeef1", color: WINE }}
              >
                <Network size={16} />
              </span>
              <p className="text-[10px] font-semibold tracking-wide mb-1" style={{ color: "#a29b8f" }}>
                TARGET REALIZATION
              </p>
              <p className="text-sm font-semibold">Connected Systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}