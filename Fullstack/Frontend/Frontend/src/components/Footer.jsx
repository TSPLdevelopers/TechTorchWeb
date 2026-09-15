import { ArrowRight } from "lucide-react";

const LOGO_IMAGE = "/logo.png";

const EXPLORE_LINKS = [
  "Industries",
  "Services",
  "Products",
  "Digital Solutions",
  "Case Studies",
];

const COMPANY_LINKS = [
  "About Us",
  "Careers",
  "Company Profile – IT Services",
  "IT Staff Augmentation",
  "Contact Us",
];

const LEGAL_LINKS = [
  "Terms of Use",
  "Accessibility",
  "Privacy",
  "Refund Policy",
  "Cancellation Policy",
];

/* ================= SOCIAL ICON WRAPPER ================= */

const SocialIcon = ({ children, label }) => (
  <a
    href="#"
    aria-label={label}
    className="
      group
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-[10px]
      border
      border-[#e5c8d7]
      bg-white
      text-[#7a0046]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-md
    "
  >
    {children}
  </a>
);

/* ================= X / TWITTER ================= */

function XIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M18.9 2.5H22l-6.8 7.75 8 11.25h-6.3L12 14.7l-5.95 6.8H2.95l7.2-8.25L2.5 2.5h6.45l4.45 6.25L18.9 2.5ZM17.8 19.5h1.75L7.95 4.4H6.05L17.8 19.5Z" />
    </svg>
  );
}

/* ================= LINKEDIN ================= */

function LinkedInIcon() {
  return (
    <div
      className="
        flex
        h-[22px]
        w-[22px]
        items-center
        justify-center
        rounded-[3px]
        bg-[#7a0046]
        text-white
      "
    >
      <span
        className="
          text-[14px]
          font-bold
          leading-none
          tracking-[-0.7px]
        "
      >
        in
      </span>
    </div>
  );
}

/* ================= INSTAGRAM ================= */

function InstagramIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1.2"
        fill="currentColor"
      />
    </svg>
  );
}

/* ================= YOUTUBE ================= */

function YouTubeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.58 7.2a2.76 2.76 0 0 0-1.94-1.95C17.92 4.8 12 4.8 12 4.8s-5.92 0-7.64.45A2.76 2.76 0 0 0 2.42 7.2C2 8.92 2 12 2 12s0 3.08.42 4.8a2.76 2.76 0 0 0 1.94 1.95c1.72.45 7.64.45 7.64.45s5.92 0 7.64-.45a2.76 2.76 0 0 0 1.94-1.95C22 15.08 22 12 22 12s0-3.08-.42-4.8ZM10 15.3V8.7l5.5 3.3-5.5 3.3Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#7a1750] to-[#5c0f3d] text-white">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* ================= BRAND ================= */}

          <div>
            <div className="mb-6">
              <img
                src={LOGO_IMAGE}
                alt="TechTorch Solutions"
                className="h-auto w-[180px] max-w-full object-contain"
              />
            </div>

            <h3 className="mb-4 text-xl font-semibold leading-snug">
              Technology. Expertise. Progress.
            </h3>

            <p className="mb-6 max-w-[260px] max-w-full text-[15px] leading-relaxed text-white/70">
              We bring technology, expertise and people together to solve
              real business challenges and create practical digital
              solutions.
            </p>

            {/* ================= SOCIAL ICONS ================= */}

            <div className="flex items-center gap-4">

              {/* X */}
              <SocialIcon label="X (Twitter)">
                <XIcon />
              </SocialIcon>

              {/* LinkedIn */}
              <SocialIcon label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>

              {/* Instagram */}
              <SocialIcon label="Instagram">
                <InstagramIcon />
              </SocialIcon>

              {/* YouTube */}
              <SocialIcon label="YouTube">
                <YouTubeIcon />
              </SocialIcon>

            </div>
          </div>

          {/* ================= EXPLORE ================= */}

          <div>
            <h4 className="mb-5 text-[16px] font-semibold">
              Explore
            </h4>

            <ul className="flex flex-col gap-4">
              {EXPLORE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[15px] text-white/80 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COMPANY ================= */}

          <div>
            <h4 className="mb-5 text-[16px] font-semibold">
              Company
            </h4>

            <ul className="flex flex-col gap-4">
              {COMPANY_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[15px] text-white/80 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CTA ================= */}

          <div>
            <h4 className="mb-4 text-[18px] font-semibold">
              Let's build what's next.
            </h4>

            <p className="mb-4 text-[15px] leading-relaxed text-white/70">
              Have a project, technology requirement or business challenge?
              Let's talk.
            </p>

            <a
              href="#"
              className="mb-5 inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-wide transition-all hover:gap-3"
            >
              Talk to our experts
              <ArrowRight size={16} />
            </a>

            <div className="flex flex-col gap-1 text-[15px] text-white/80">

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                www.techtorch.solutions
              </a>

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                +91 581 350 0381
              </a>

            </div>
          </div>
        </div>

        {/* ================= DISCLAIMER ================= */}

        <div className="mt-14 border-t border-white/20 pt-6">
          <p className="max-w-4xl text-[13px] leading-relaxed text-white/70">
            Disclaimer: The information provided on this website is for
            general informational purposes only. TechTorch Solutions reserves
            the right to modify services, offerings, and specifications
            without prior notice. Case studies and performance metrics
            represent past engagements and do not guarantee future results.
            All trademarks, logos, and service marks displayed are the
            property of TechTorch Solutions or their respective owners.
          </p>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center">

          <p className="text-[13px] text-white/70">
            © 2024 — 2026 TechTorch Solutions Private Limited. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[13px] text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}