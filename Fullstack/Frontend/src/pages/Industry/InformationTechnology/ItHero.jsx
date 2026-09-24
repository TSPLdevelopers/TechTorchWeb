import React from "react";
import { ArrowRight, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function ItHeroSection() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full font-sans"
      style={{
        background: "linear-gradient(135deg, #fbeef1 0%, #f7f5f2 40%, #ffffff 100%)",
        color: INK,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div>
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6 bg-white border"
            style={{ color: WINE, borderColor: "#f0d6de" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
            INFORMATION TECHNOLOGY
          </span>

          <h1 className="text-4xl md:text-[2.6rem] leading-[1.15] font-bold tracking-tight mb-6">
            Technology Solutions Designed Around Your Business
          </h1>

          <p className="text-[15px] leading-relaxed mb-4" style={{ color: MUTED }}>
            Technology plays an important role in how businesses operate,
            communicate and grow. From software applications and cloud
            infrastructure to cybersecurity and digital platforms,
            organizations need technology that supports their business
            requirements and evolving needs.
          </p>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
            TechTorch Solutions brings together technology consulting,
            software engineering, cloud infrastructure, cybersecurity,
            artificial intelligence, software development and technology
            support to help businesses build and improve their digital
            environment.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-medium"
              style={{ background: WINE }}
            >
              Talk to Our Experts
              <ArrowRight size={16} />
            </button>
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border bg-white"
              style={{ borderColor: "#d8d5d0", color: INK }}
              onClick={() => navigate("/it-get-in-touch")}
            >
              Get in Touch
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right: image with floating status card */}
        <div className="relative">
          <div
            className="rounded-2xl w-full h-72 flex items-center justify-center text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #1c2230 0%, #2a2f3d 55%, #3a2230 100%)",
              color: "#8a8fa0",
            }}
          >
            Team reviewing architecture on a whiteboard
          </div>

          <div className="absolute -bottom-6 left-4 right-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
            <span
              className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
              style={{ background: "#fbeef1", color: WINE }}
            >
              <Share2 size={16} />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold">Enterprise Ops Command Center</p>
              <p className="text-xs" style={{ color: MUTED }}>
                Cloud Architecture · Real-time Telemetry
              </p>
            </div>
            <span
              className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full shrink-0 whitespace-nowrap"
              style={{ background: "#e5f7ec", color: "#1a9455" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1a9455" }} />
              Verified Architecture
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}