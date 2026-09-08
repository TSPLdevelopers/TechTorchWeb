import React from "react";

/* ---------------- Content ---------------- */

const ROWS = [
  {
    step: "01",
    title: "CONNECT PEOPLE",
    copy:
      "Empowering teams with actionable insights rather than burying them in data entry. Connected operations mean employees spend less time searching for information and more time executing high-value strategic initiatives.",
    image: "/OverlayShadow2.png",
    imageSide: "right",
  },
  {
    step: "02",
    title: "CONNECT PROCESSES",
    copy:
      "Streamlining workflows across departmental boundaries. Automated handoffs and standardized procedures reduce friction, eliminate bottlenecks, and ensure consistent quality from procurement to delivery.",
    image: "/Modern.png",
    imageSide: "left",
  },
  {
    step: "03",
    title: "CONNECT SYSTEMS",
    copy:
      "Creating a cohesive technological ecosystem. Legacy monoliths and modern SaaS applications are bridged through robust APIs and middleware, ensuring functional synergy without the need for total platform replacement.",
    image: "/Hightechvisualization.png",
    imageSide: "right",
  },
  {
    step: "04",
    title: "CONNECT DATA",
    copy:
      "Establishing a single source of truth. When data flows unimpeded and is governed rigorously, leadership gains real-time visibility into performance metrics, enabling proactive rather than reactive decision-making.",
    image: "/OverlayShadow.png",
    imageSide: "left",
  },
];

function Row({ step, title, copy, image, imageSide }) {
  const text = (
    <div>
      {/* Heading - Plus Jakarta Sans */}
      <span
        className="block text-[11px] tracking-[0.14em] font-semibold text-[#8C2F3B] mb-3"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {step} — {title}
      </span>

      {/* Paragraph - Inter */}
      <p
        className="text-[13.5px] leading-relaxed text-[#6B665C] max-w-[38ch]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {copy}
      </p>
    </div>
  );

  const imageElement = (
    <div className="relative overflow-hidden rounded-sm aspect-[8/6] w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center py-10">
      {imageSide === "left" ? (
        <>
          {imageElement}
          {text}
        </>
      ) : (
        <>
          {text}
          {imageElement}
        </>
      )}
    </div>
  );
}

export default function ConnectSection() {
  return (
    <div className="w-full bg-[#F7F6F3] flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full divide-y divide-[#E2DED5]">
        {ROWS.map((row) => (
          <Row key={row.step} {...row} />
        ))}
      </div>
    </div>
  );
}