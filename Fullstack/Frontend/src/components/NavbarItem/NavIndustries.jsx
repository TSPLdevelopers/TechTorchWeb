import { useState } from "react";

const columnOne = [
  "Finance",
  "Education",
  "Healthcare",
  "Manufacturing",
  "Information Technology",
];

const columnTwo = [
  "Insurance",
  "Energy",
  "FMCG",
  "Transportation",
  "Telecommunications",
];

function NavIndustries() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="text-[17px] text-gray-900 cursor-pointer py-3 inline-block">
        Industries
      </span>

      {isOpen && (
        <div
          className="
            fixed left-1/2 -translate-x-1/2 top-[70px] md:top-[76px]
            w-[90vw] max-w-[1150px] min-h-[500px] md:min-h-[560px]
            bg-white shadow-2xl z-50
            px-10 py-12 md:px-16 md:py-14
            overflow-y-auto
          "
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Industries
          </h3>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-24">
            <div className="flex flex-col gap-6">
              {columnOne.map((title) => (
                <a
                  key={title}
                  href="#"
                  className="text-lg md:text-xl font-medium text-gray-900 hover:text-[#8a1538] transition-colors"
                >
                  {title}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {columnTwo.map((title) => (
                <a
                  key={title}
                  href="#"
                  className="text-lg md:text-xl font-medium text-gray-900 hover:text-[#8a1538] transition-colors"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavIndustries;