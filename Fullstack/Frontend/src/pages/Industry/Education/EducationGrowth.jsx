import React from "react";
import { ChevronRight, Cloud, Share2, LayoutGrid, ShieldCheck } from "lucide-react";

const WINE = "#7A1F3D";
const WINE_DARK = "#5F1830";
const CARD_BG = "rgba(255,255,255,0.06)";
const CARD_BORDER = "rgba(255,255,255,0.12)";

const features = [
  {
    icon: Cloud,
    title: "Scalable Architecture",
    body: "Elastic cloud infrastructure designed to support growing enrollment and new departments without re-engineering.",
  },
  {
    icon: Share2,
    title: "Multi-Campus Readiness",
    body: "Centralized governance with localized autonomy across branch campuses, satellite centers, and affiliated colleges.",
  },
  {
    icon: LayoutGrid,
    title: "Modular Program Expansion",
    body: "Effortlessly introduce new academic degrees, online micro-certifications, vocational tracks, and specialized curricula.",
  },
  {
    icon: ShieldCheck,
    title: "Future-Proof Technology",
    body: "Seamless integration with emerging AI learning models, advanced student analytics, and secure digital credentials.",
  },
];

export default function EvolveWithInstitutionSection() {
  return (
    <div style={{ background: WINE }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(255,255,255,0.1)", color: "#f3d9e2" }}
          >
            <ChevronRight size={12} strokeWidth={3} />
            READY FOR THE NEXT STAGE OF GROWTH
          </span>
          <h2 className="text-3xl md:text-[2.4rem] leading-[1.15] font-semibold tracking-tight text-white mb-5">
            Technology that can evolve with your institution.
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: "#e3c3cf" }}>
            Your institution today may not look the same a few years from
            now. More students, new programs, additional departments, new
            locations and changing expectations can all create new
            technology requirements. That is why we design with change in
            mind — strengthening your current foundation while creating room
            for future capabilities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl p-6 border"
              style={{ background: CARD_BG, borderColor: CARD_BORDER }}
            >
              <span
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white mb-5"
                style={{ color: WINE_DARK }}
              >
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="text-[15px] font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#d9b7c4" }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}