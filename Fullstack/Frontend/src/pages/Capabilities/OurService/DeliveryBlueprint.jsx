import React from "react";

const PINK = "#a3134f";

const steps = [
  {
    num: "01",
    title: "Understand & Scope",
    desc: "Deep discovery of enterprise workflows, architecture audit, and ROI benchmarking.",
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "Scalable systems blueprinting, security governance, and modular technology roadmaps.",
  },
  {
    num: "03",
    title: "Engineering & Deployment",
    desc: "Agile sprint cycles, CI/CD automated deployment, and enterprise-grade testing.",
  },
  {
    num: "04",
    title: "Continuous Evolution & Support",
    desc: "24/7 SLA monitoring, proactive optimization, and ongoing architectural support.",
  },
];

export default function TechTorchDeliveryBlueprint() {
  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        padding: "72px 24px",
      }}
    >
      <div style={{ maxWidth: 1024, width: "100%", textAlign: "center" }}>
        <span
          style={{
            display: "block",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
            color: PINK,
            marginBottom: 14,
          }}
        >
          Our Delivery Blueprint
        </span>

        <h2
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: "#171717",
            marginBottom: 16,
          }}
        >
          How We Work Together
        </h2>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: "#737373",
            maxWidth: 560,
            margin: "0 auto 48px",
          }}
        >
          A disciplined, human-driven framework ensuring every technical
          deployment solves genuine business needs.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {steps.map((s) => (
            <div
              key={s.num}
              style={{
                background: "#f7f7f8",
                borderRadius: 12,
                padding: 24,
                textAlign: "left",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: PINK,
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  marginBottom: 18,
                }}
              >
                {s.num}
              </span>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#171717",
                  marginBottom: 10,
                  lineHeight: 1.35,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 12.5,
                  lineHeight: 1.6,
                  color: "#8a8a8a",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}