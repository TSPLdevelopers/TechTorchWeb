import { ArrowRight } from "lucide-react";

const LOGO_IMAGE = "/Footerlogo.png";

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

const SocialIcon = ({ children, label }) => (
  <a
    href="#"
    aria-label={label}
    className="group flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6b1345] transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-lg"
  >
    {children}
  </a>
);

/* ================= INSTAGRAM ================= */

function InstagramIcon() {
  return (
    <svg
      width="19"
      height="19"
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
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1.15"
        fill="currentColor"
      />
    </svg>
  );
}

/* ================= LINKEDIN ================= */

function LinkedInIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.5 8.5V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M6.5 5.5V5.51"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M11 18V12.5C11 10.84 12.34 9.5 14 9.5C15.66 9.5 17 10.84 17 12.5V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M11 13V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ================= FACEBOOK ================= */

function FacebookIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M13.6 21V13.1H16.2L16.6 10H13.6V8C13.6 7.1 13.9 6.5 15.1 6.5H16.7V3.7C16.4 3.65 15.5 3.5 14.5 3.5C11.8 3.5 10 5.15 10 8.15V10H7.3V13.1H10V21H13.6Z" />
    </svg>
  );
}

/* ================= X / TWITTER ================= */

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M18.9 2.5H22L15.2 10.25L23.2 21.5H16.9L12 14.7L6.05 21.5H2.95L10.15 13.25L2.5 2.5H8.95L13.4 8.75L18.9 2.5ZM17.8 19.5H19.55L7.95 4.4H6.05L17.8 19.5Z" />
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
                className="h-auto w-[180px] object-contain"
              />
            </div>

            <h3 className="mb-4 text-xl font-semibold leading-snug">
              Technology. Expertise. Progress.
            </h3>

            <p className="mb-6 max-w-[260px] text-[15px] leading-relaxed text-white/70">
              We bring technology, expertise and people together to solve
              real business challenges and create practical digital
              solutions.
            </p>

            {/* SOCIAL ICONS */}

            <div className="flex items-center gap-3">
              <SocialIcon label="Instagram">
                <InstagramIcon />
              </SocialIcon>

              <SocialIcon label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>

              <SocialIcon label="Facebook">
                <FacebookIcon />
              </SocialIcon>

              <SocialIcon label="X (Twitter)">
                <XIcon />
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