import React from "react";
import { ArrowRight, Users } from "lucide-react";

const PINK = "#c41c6e";
const PINK_LIGHT = "#e63980";

const stats = [
  { title: "24h Response SLA", sub: "Rapid Architecture Review" },
  { title: "Senior Technical Leads", sub: "Direct Architect Access" },
  { title: "Enterprise NDA First", sub: "Rigorous Governance & Security" },
];

export default function TechTorchFinalCTA() {
  return (
    <div
      style={{
        width: "100%",
        background: "#0a0a0c",
        display: "flex",
        justifyContent: "center",
        padding: "56px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          width: "100%",
          borderRadius: 20,
          overflow: "hidden",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          background:
            "radial-gradient(circle at 0% 0%, rgba(196,28,110,0.25), transparent 55%), linear-gradient(160deg, #1a1620 0%, #0e0c12 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Left content */}
        <div
          style={{
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 0.6,
                color: PINK_LIGHT,
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: PINK_LIGHT,
                }}
              />
              Let's Talk About Your Technology Roadmap
            </span>

            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              Ready to Move Your Business Forward?
            </h2>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 28,
                maxWidth: 380,
              }}
            >
              From strategic advisory to enterprise execution, TechTorch
              partners with leading organizations to build scalable,
              resilient, and future-proof digital solutions.
            </p>

            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                padding: "14px 26px",
                borderRadius: 8,
                border: "none",
                background: `linear-gradient(135deg, ${PINK_LIGHT}, ${PINK})`,
                cursor: "pointer",
              }}
            >
              Talk to Our Experts
              <ArrowRight size={16} />
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: 28,
              paddingTop: 32,
              marginTop: 32,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              flexWrap: "wrap",
            }}
          >
            {stats.map((s) => (
              <div key={s.title}>
                <p style={{ fontSize: 12.5, fontWeight: 600, color: "#fff", marginBottom: 4 }}>
                  {s.title}
                </p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image placeholder */}
        <div
          style={{
            position: "relative",
            minHeight: 320,
            background:
              "linear-gradient(160deg, #2b2438 0%, #14121a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Users size={48} color="rgba(255,255,255,0.25)" />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(10,10,12,0.9) 0%, transparent 25%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}