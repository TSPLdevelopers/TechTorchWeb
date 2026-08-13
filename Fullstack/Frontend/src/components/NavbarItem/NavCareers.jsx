import { useState } from "react";

const links = ["The TechTorch Way", "Culture & Inclusion", "Join Us"];

function NavCareers() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="text-[17px] text-gray-900 cursor-pointer py-3 inline-block">
        Careers
      </span>

      {isOpen && (
        <div
          className="
            fixed left-1/2 -translate-x-1/2 top-[70px] md:top-[76px]
            w-[90vw] max-w-[1150px]
            bg-white shadow-2xl z-50
            px-10 py-12 md:px-20 md:py-16
            min-h-[70vh]
            overflow-y-auto
          "
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Careers
          </h3>

          <div className="flex flex-col gap-6">
            {links.map((title) => (
              <a
                key={title}
                href="#"
                className="text-lg md:text-xl text-gray-900 hover:text-[#8a1538] transition-colors"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavCareers;