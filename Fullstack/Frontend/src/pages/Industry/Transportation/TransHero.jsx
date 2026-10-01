import React from "react";
import { ArrowRight, Mail, Sparkle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function TransportationHeroSection() {
   const navigate = useNavigate();
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div>
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide mb-6"
            style={{ color: WINE }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
            TRANSPORTATION
          </span>

          <h1 className="text-4xl md:text-[2.5rem] leading-[1.15] font-bold tracking-tight mb-6">
            Technology Solutions for a More Connected Transportation
            Business
          </h1>

          <p className="text-[15px] leading-relaxed mb-4" style={{ color: MUTED }}>
            Transportation businesses need connected operations, organized
            information and reliable technology across their day-to-day
            processes.
          </p>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
            TechTorch provides digital solutions and technology services
            designed around business requirements — helping transportation
            organizations connect operations, supply chain, finance,
            customers and technology.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white text-xs font-semibold tracking-wide"
              style={{ background: WINE }}
            >
              TALK TO OUR EXPERTS
              <ArrowRight size={14} />
            </button>
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs font-semibold tracking-wide border"
              style={{ borderColor: "#d8d5d0", color: INK }}
               onClick={() => navigate("/transportation-get-in-touch")}
            >
              GET IN TOUCH
              <Mail size={14} />
            </button>
          </div>
        </div>

        {/* Right: image with overlay labels */}
        <div className="relative rounded-2xl overflow-hidden h-96">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #10151f 0%, #1c2230 50%, #1a1420 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium" style={{ color: "#8a8fa0" }}>
            Global operations center with world map dashboard
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <Sparkle size={13} style={{ color: "#e05a8a" }} />
            <span className="text-[11px] font-semibold tracking-wide text-white">
              OPERATIONAL ARCHITECTURE
            </span>
          </div>
          <div className="absolute bottom-4 right-4">
            <span className="text-[11px] font-semibold tracking-wide" style={{ color: "#8a8fa0" }}>
              TECHTORCH SYS_01
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}