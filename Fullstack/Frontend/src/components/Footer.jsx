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
    className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-[#6b1345] hover:bg-white/90 transition-colors"
  >
    {children}
  </a>
);

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.03.66-.31.32-.5.61-.66 1.03-.12.31-.26.78-.3 1.65C4.27 8.55 4.26 8.87 4.26 10s0 2.99.06 4.04c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.03.32.31.61.5 1.03.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.03-.66.31-.32.5-.61.66-1.03.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.8 2.8 0 0 0-.66-1.03 2.8 2.8 0 0 0-1.03-.66c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3zm0 8.5a3.35 3.35 0 1 0 0-6.7 3.35 3.35 0 0 0 0 6.7zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="10" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.12 8.44H12.9V6.8c0-.62.41-.77.7-.77h1.48V3.6L12.93 3.6c-2.7 0-3.32 2.02-3.32 3.32v1.52H8v2.75h1.61V21h3.29v-9.81h2.21l.29-2.75z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.24 2.75h3.3l-7.2 8.23L22.8 21.25h-6.63l-5.2-6.8-5.94 6.8H1.72l7.7-8.8L1 2.75h6.8l4.7 6.22 5.74-6.22zm-1.16 16.6h1.83L7.03 4.55H5.06l12.02 14.8z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#7a1750] to-[#5c0f3d] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src={LOGO_IMAGE}
                alt="TechTorch Solutions"
                className="w-[180px] h-auto object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold leading-snug mb-4">
              Technology. Expertise. Progress.
            </h3>

            <p className="text-white/70 text-[15px] leading-relaxed max-w-[260px] mb-6">
              We bring technology, expertise and people together to solve
              real business challenges and create practical digital
              solutions.
            </p>

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

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-[16px] mb-5">Explore</h4>

            <ul className="flex flex-col gap-4">
              {EXPLORE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white text-[15px] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[16px] mb-5">Company</h4>

            <ul className="flex flex-col gap-4">
              {COMPANY_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white text-[15px] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-[18px] mb-4">
              Let's build what's next.
            </h4>

            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              Have a project, technology requirement or business challenge?
              Let's talk.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold text-[14px] tracking-wide uppercase hover:gap-3 transition-all mb-5"
            >
              Talk to our experts
              <ArrowRight size={16} />
            </a>

            <div className="text-white/80 text-[15px] flex flex-col gap-1">
              <a href="#" className="hover:text-white transition-colors">
                www.techtorch.solutions
              </a>

              <a href="#" className="hover:text-white transition-colors">
                +91 581 350 0381
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/20 mt-14 pt-6">
          <p className="text-white/70 text-[13px] leading-relaxed max-w-4xl">
            Disclaimer: The information provided on this website is for
            general informational purposes only. TechTorch Solutions reserves
            the right to modify services, offerings, and specifications
            without prior notice. Case studies and performance metrics
            represent past engagements and do not guarantee future results.
            All trademarks, logos, and service marks displayed are the
            property of TechTorch Solutions or their respective owners.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-6 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/70 text-[13px]">
            © 2024 — 2026 TechTorch Solutions Private Limited. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/80 hover:text-white text-[13px] transition-colors"
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