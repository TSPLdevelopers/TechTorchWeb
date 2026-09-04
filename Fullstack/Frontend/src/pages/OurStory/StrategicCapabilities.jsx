import React from 'react';

const capabilities = [
  {
    img: "/public/AI visualization.png",
    title: "AI-Delivered Right",
    description:
      "Ethical, scalable artificial intelligence implementations that drive measurable operational efficiency.",
  },
  {
    img: "/public/Cloud visualization.png",
    title: "Cloud Infrastructure",
    description:
      "Resilient, multi-cloud architectures built for high availability and stringent security compliance.",
  },
  {
    img: "/public/Engineering visualization.png",
    title: "Engineering Services",
    description:
      "Precision software development utilizing modern stacks to construct robust enterprise applications.",
  },
  {
    img: "/public/Digital apps visualization.png",
    title: "Digital Applications",
    description:
      "End-to-end transformation of legacy systems into unified, high-performance digital ecosystems.",
  },
];

export default function StrategicCapabilities() {
  return (
    <div
      className="w-full py-16 px-6 sm:px-10"
      style={{ backgroundColor: "#F4F6FB", fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#111827" }}>
          Strategic Capabilities
        </h2>
        <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Comprehensive enterprise solutions designed for the modern
          architectural landscape. We translate technical complexity into
          business advantage.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {capabilities.map(({ img, title, description }) => (
          <div
            key={title}
            className="bg-white rounded-xl overflow-hidden shadow-sm p-4"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-28 object-cover rounded-lg mb-4"
            />
            <h3
              className="font-semibold text-base mb-2 leading-snug"
              style={{ color: "#111827" }}
            >
              {title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}