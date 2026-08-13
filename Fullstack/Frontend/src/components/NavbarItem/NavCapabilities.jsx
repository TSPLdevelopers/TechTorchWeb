import { useState } from "react";

const columns = [
  {
    heading: "Digital Solutions",
    items: [
      "ERP",
      "Operations Management",
      "Supply Chain Management",
      "Aviation Management",
      "People Management",
      "Web Portals",
      "Financial Management",
      "Payment Management",
      "Healthcare & Hospital Management",
      "CRM",
      "Ecommerce",
      "Project Management",
    ],
  },
  {
    heading: "IT Augmentation Service",
    sections: [
      {
        subheading: "Our Services",
        items: [
          "IT Consultancy",
          "Artificial Intelligence (AaaS)",
          "Cloud Infrastructure Services (IaaS)",
          "Cyber Security",
          "Software Engineering Outsourcing",
          "Business process Outsourcing",
          "Software Development & Support",
          "Resource and Staffing",
        ],
      },
      {
        subheading: "Platforms",
        items: ["TorchX Suite", "TorchX Campus"],
      },
    ],
  },
];

function NavCapabilities() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="text-[17px] text-gray-900 cursor-pointer py-3 inline-block">
        Capabilities
      </span>

      {isOpen && (
        <div
          className="
            absolute left-1/2 -translate-x-1/2 top-full mt-0
            w-[92vw] max-w-[1100px]
            bg-white shadow-2xl z-50
            grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20
            px-8 py-10 md:px-12 md:py-14
            overflow-hidden
          "
        >
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {col.heading}
              </h3>

              {/* Flat list column */}
              {col.items &&
                col.items.map((title) => (
                  <a
                    key={title}
                    href="#"
                    className="text-base md:text-lg text-gray-500 hover:text-[#8a1538] transition-colors"
                  >
                    {title}
                  </a>
                ))}

              {/* Nested sections: Our Services / Platforms */}
              {col.sections &&
                col.sections.map((section, idx) => (
                  <div
                    key={section.subheading}
                    className={`flex flex-col gap-3 ${idx > 0 ? "mt-4" : ""}`}
                  >
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">
                      {section.subheading}
                    </h4>
                    {section.items.map((title) => (
                      <a
                        key={title}
                        href="#"
                        className="text-base md:text-lg text-gray-500 hover:text-[#8a1538] transition-colors"
                      >
                        {title}
                      </a>
                    ))}
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavCapabilities;