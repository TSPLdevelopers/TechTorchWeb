import React from "react";

const pillars = [
  {
    title: "Integrity",
    description:
      "Uncompromising adherence to ethical standards and technical excellence in every line of code we write.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L4 5V11C4 16.5 7.4 21.7 12 23C16.6 21.7 20 16.5 20 11V5L12 2Z"
          stroke="#8B1E5C"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11 14L15.5 9.5"
          stroke="#8B1E5C"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Quality",
    description:
      "Relentless pursuit of perfection, delivering solutions that set the benchmark for industry standards.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#8B1E5C" strokeWidth="1.8" />
        <path
          d="M8.5 12.2L10.7 14.5L15.5 9.5"
          stroke="#8B1E5C"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Care",
    description:
      "Deep commitment to our clients' success, fostering partnerships built on trust and mutual growth.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.5 8.5C20.5 12.5 15.5 16.5 12.5 19C12.2 19.2 11.8 19.2 11.5 19C8.5 16.5 3.5 12.5 3.5 8.5C3.5 5.5 5.8 3.5 8.3 3.5C9.9 3.5 11.3 4.3 12 5.6C12.7 4.3 14.1 3.5 15.7 3.5C18.2 3.5 20.5 5.5 20.5 8.5Z"
          stroke="#8B1E5C"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function PhilosophySection() {
  return (
    <section
      style={{
        background: "#EEF1FC",
        padding: "72px 24px",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            color: "#8B1E5C",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Our Philosophy
        </p>
        <h2
          style={{
            fontSize: 42,
            color: "#1B2233",
            fontWeight: 500,
            margin: "0 0 20px",
            letterSpacing: "-0.01em",
          }}
        >
          Scale at Speed
        </h2>
        <p
          style={{
            color: "#4B5468",
            fontSize: 17,
            lineHeight: 1.6,
            maxWidth: 620,
            margin: "0 auto 48px",
          }}
        >
          We believe in rapid innovation without compromising on structural
          invulnerability. Our foundation is built on three unwavering
          pillars.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            textAlign: "left",
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              style={{
                background: "#FFFFFF",
                borderRadius: 16,
                padding: "32px 28px",
                boxShadow: "0 4px 20px rgba(30, 40, 80, 0.06)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "#FBE4EC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                {pillar.icon}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  color: "#1B2233",
                  fontWeight: 600,
                  margin: "0 0 12px",
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  color: "#5A6178",
                  margin: 0,
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}