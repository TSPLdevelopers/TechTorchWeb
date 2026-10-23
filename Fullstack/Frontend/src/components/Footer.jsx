import { useEffect, useState } from "react";

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
  "Privacy",
  "Refund Policy",
  "Cancellation Policy",
  "Cookie Policy",
];

/* ================= POLICY CONTENT ================= */

const POLICIES = {
  Privacy: {
    title: "Privacy Policy",
    effective: "April 01, 2026",
    sections: [
      {
        blocks: [
          {
            p: "This Privacy Policy describes how Techtorch Solutions Private Limited (“Company”, “we”, “our”, or “us”) collects, uses, stores, and protects information when users access or use our SaaS platform suite including Talent, Engage, Pay, Inventory, and Finance (“Services”).",
          },
          {
            p: "By using our Services, you agree to the practices described in this Privacy Policy.",
          },
        ],
      },
      {
        title: "1. Information We Collect",
        blocks: [
          { p: "We may collect the following information:" },
          { sub: "a. Personal Information" },
          {
            list: [
              "Name",
              "Email address",
              "Phone number",
              "Billing information",
              "Company details",
              "Account credentials",
            ],
          },
          { sub: "b. Usage Information" },
          {
            list: [
              "IP address",
              "Browser type",
              "Device information",
              "Login activity",
              "Usage analytics",
              "Cookies and tracking information",
            ],
          },
          { sub: "c. Customer Data" },
          {
            p: "Any data uploaded, processed, or stored by customers while using our Services.",
          },
        ],
      },
      {
        title: "2. How We Use Information",
        blocks: [
          { p: "We use the collected information to:" },
          {
            list: [
              "Provide and maintain Services",
              "Process subscriptions and payments",
              "Improve platform performance",
              "Offer customer support",
              "Prevent fraud and abuse",
              "Send service-related notifications",
              "Comply with legal obligations",
            ],
          },
        ],
      },
      {
        title: "3. Data Security",
        blocks: [
          {
            p: "We implement commercially reasonable administrative, technical, and organizational safeguards to protect user data from unauthorized access, disclosure, or misuse.",
          },
          {
            p: "However, no internet-based service is completely secure, and we cannot guarantee absolute security.",
          },
        ],
      },
      {
        title: "4. Data Sharing",
        blocks: [
          { p: "We do not sell personal data." },
          { p: "We may share information with:" },
          {
            list: [
              "Payment processors",
              "Cloud hosting providers",
              "Analytics providers",
              "Legal authorities when required by law",
            ],
          },
          {
            p: "All third-party partners are required to maintain confidentiality and data protection standards.",
          },
        ],
      },
      {
        title: "5. Data Retention",
        blocks: [
          {
            p: "We retain data only for as long as necessary to provide Services, comply with legal obligations, resolve disputes, and enforce agreements.",
          },
        ],
      },
      {
        title: "6. User Rights",
        blocks: [
          { p: "Users may request:" },
          {
            list: [
              "Access to personal data",
              "Correction of inaccurate data",
              "Account deletion",
              "Data export where applicable",
            ],
          },
          { p: "Requests can be sent to:" },
          { list: ["privacy@torchxsuite.com"] },
        ],
      },
      {
        title: "7. International Data Transfers",
        blocks: [
          {
            p: "Your information may be processed and stored in locations outside your country, subject to applicable data protection laws.",
          },
        ],
      },
      {
        title: "8. Children’s Privacy",
        blocks: [
          {
            p: "Our Services are not intended for individuals under 18 years of age.",
          },
        ],
      },
      {
        title: "9. Changes to This Policy",
        blocks: [
          {
            p: "We reserve the right to modify this Privacy Policy at any time. Updated versions will be posted on this page with a revised effective date.",
          },
        ],
      },
      {
        title: "10. Contact Us",
        blocks: [
          { p: "For privacy-related concerns:" },
          { list: ["Email: legal@torchxsuite.com"] },
        ],
      },
    ],
  },

  "Terms of Use": {
    title: "Terms of Service",
    effective: "April 01, 2026",
    sections: [
      {
        blocks: [
          {
            p: "These Terms of Service (“Terms”) govern the use of the SaaS products and services provided by Techtorch Solutions Private Limited including Talent, Engage, Pay, Inventory, and Finance.",
          },
          {
            p: "By accessing or using the Services, you agree to these Terms.",
          },
        ],
      },
      {
        title: "1. Eligibility",
        blocks: [
          {
            p: "You must be legally capable of entering into binding agreements to use our Services.",
          },
        ],
      },
      {
        title: "2. Account Responsibilities",
        blocks: [
          { p: "Users are responsible for:" },
          {
            list: [
              "Maintaining account confidentiality",
              "All activities under their account",
              "Providing accurate information",
            ],
          },
          { p: "You agree not to:" },
          {
            list: [
              "Use the Services unlawfully",
              "Attempt unauthorized access",
              "Reverse engineer or copy the platform",
              "Upload malicious software",
            ],
          },
        ],
      },
      {
        title: "3. Subscription & Billing",
        blocks: [
          {
            list: [
              "Services are offered on subscription plans.",
              "Fees are billed monthly, quarterly, or annually.",
              "Payments are non-refundable unless stated otherwise in our Refund Policy.",
              "Failure to pay may result in suspension or termination.",
            ],
          },
        ],
      },
      {
        title: "4. Intellectual Property",
        blocks: [
          {
            p: "All platform software, branding, designs, content, APIs, workflows, and technology remain the exclusive property of the Company.",
          },
          {
            p: "Users receive a limited, non-transferable license to use the Services during an active subscription.",
          },
        ],
      },
      {
        title: "5. Customer Data",
        blocks: [
          { p: "Customers retain ownership of their uploaded data." },
          {
            p: "You grant us limited rights necessary to host, process, and operate the Services.",
          },
        ],
      },
      {
        title: "6. Service Availability",
        blocks: [
          {
            p: "We aim for high uptime but do not guarantee uninterrupted or error-free operation.",
          },
          { p: "Scheduled maintenance and unforeseen outages may occur." },
        ],
      },
      {
        title: "7. Limitation of Liability",
        blocks: [
          { p: "To the maximum extent permitted by law:" },
          {
            list: [
              "We are not liable for indirect, incidental, or consequential damages.",
              "Total liability shall not exceed the amount paid by the customer during the previous 3 months.",
            ],
          },
        ],
      },
      {
        title: "8. Termination",
        blocks: [
          { p: "We may suspend or terminate accounts for:" },
          {
            list: [
              "Violation of Terms",
              "Fraudulent activity",
              "Non-payment",
              "Abuse of Services",
            ],
          },
          {
            p: "Upon termination, access to Services may be revoked immediately.",
          },
        ],
      },
      {
        title: "9. Governing Law",
        blocks: [
          { p: "These Terms shall be governed by the laws of India." },
          {
            p: "Any disputes shall be subject to the jurisdiction of courts located in Bareilly, Uttar Pradesh, India.",
          },
        ],
      },
      {
        title: "10. Contact",
        blocks: [{ list: ["Email: legal@torchxsuite.com"] }],
      },
    ],
  },

  "Refund Policy": {
    title: "Refund Policy",
    effective: "April 01, 2026",
    sections: [
      {
        blocks: [
          {
            p: "At Techtorch Solutions Private Limited, we strive to provide reliable SaaS solutions across our product suite including Talent, Engage, Pay, Inventory, and Finance.",
          },
        ],
      },
      {
        title: "1. Subscription Payments",
        blocks: [
          {
            p: "All subscription payments are generally non-refundable once billed.",
          },
        ],
      },
      {
        title: "2. Trial Periods",
        blocks: [
          {
            p: "Where trial access is provided, users are encouraged to evaluate the Services before purchasing a paid subscription.",
          },
        ],
      },
      {
        title: "3. Exceptional Refunds",
        blocks: [
          {
            p: "Refunds may be considered only under the following circumstances:",
          },
          {
            list: [
              "Duplicate payment",
              "Incorrect billing due to system error",
              "Service unavailable for an extended verified duration caused solely by us",
            ],
          },
          { p: "Approved refunds are processed within 7–15 business days." },
        ],
      },
      {
        title: "4. Non-Refundable Situations",
        blocks: [
          { p: "Refunds will not be issued for:" },
          {
            list: [
              "Partial usage",
              "Change of mind",
              "Failure to cancel before renewal",
              "Account suspension due to policy violations",
              "Third-party service interruptions",
            ],
          },
        ],
      },
      {
        title: "5. Chargebacks",
        blocks: [
          {
            p: "Initiating fraudulent chargebacks or payment disputes without contacting support may result in:",
          },
          {
            list: [
              "Immediate account suspension",
              "Permanent service restriction",
              "Legal recovery actions where applicable",
            ],
          },
        ],
      },
      {
        title: "6. Contact",
        blocks: [
          { p: "For billing support:" },
          { list: ["accounts@torchxsuite.com"] },
        ],
      },
    ],
  },

  "Cancellation Policy": {
    title: "Cancellation Policy",
    effective: "April 01, 2026",
    sections: [
      {
        blocks: [
          {
            p: "This Cancellation Policy applies to subscriptions purchased for the SaaS products provided by Techtorch Solutions Private Limited.",
          },
        ],
      },
      {
        title: "1. Subscription Cancellation",
        blocks: [
          { p: "Users may cancel their subscription at any time through:" },
          {
            list: [
              "Account dashboard",
              "Billing settings",
              "Official support email",
            ],
          },
          {
            p: "Cancellation requests become effective at the end of the current billing cycle unless otherwise specified.",
          },
        ],
      },
      {
        title: "2. No Partial Refunds",
        blocks: [
          {
            p: "Cancelling a subscription does not entitle users to refunds for unused subscription periods unless explicitly approved under the Refund Policy.",
          },
        ],
      },
      {
        title: "3. Data Retention After Cancellation",
        blocks: [
          { p: "After subscription termination:" },
          {
            list: [
              "Account access may be restricted",
              "Data may be retained temporarily for compliance and recovery purposes",
              "Data may be permanently deleted after 30 days",
            ],
          },
          {
            p: "Users are responsible for exporting the necessary data before cancellation.",
          },
        ],
      },
      {
        title: "4. Company-Initiated Cancellation",
        blocks: [
          { p: "We reserve the right to suspend or terminate accounts for:" },
          {
            list: [
              "Fraudulent activity",
              "Abuse of Services",
              "Violation of policies",
              "Non-payment",
            ],
          },
        ],
      },
      {
        title: "5. Contact",
        blocks: [{ list: ["accounts@torchxsuite.com"] }],
      },
    ],
  },

  "Cookie Policy": {
    title: "Cookie Policy",
    effective: "April 01, 2026",
    sections: [
      {
        blocks: [
          {
            p: "This Cookie Policy explains how Techtorch Solutions Private Limited uses cookies and similar technologies on our websites and SaaS platforms.",
          },
        ],
      },
      {
        title: "1. What Are Cookies?",
        blocks: [
          {
            p: "Cookies are small text files stored on your device to improve website functionality and user experience.",
          },
        ],
      },
      {
        title: "2. Types of Cookies We Use",
        blocks: [
          { sub: "Essential Cookies" },
          {
            p: "Required for authentication, security, and core functionality.",
          },
          { sub: "Analytics Cookies" },
          {
            p: "Help us understand platform usage and improve performance.",
          },
          { sub: "Preference Cookies" },
          { p: "Remember user settings and preferences." },
          { sub: "Marketing Cookies" },
          {
            p: "Used for relevant communication and advertising where permitted.",
          },
        ],
      },
      {
        title: "3. Third-Party Cookies",
        blocks: [
          {
            p: "Some third-party services integrated into our platform may place cookies subject to their own privacy policies.",
          },
        ],
      },
      {
        title: "4. Managing Cookies",
        blocks: [
          {
            p: "Users can manage or disable cookies through browser settings.",
          },
          { p: "Disabling cookies may affect platform functionality." },
        ],
      },
      {
        title: "5. Updates",
        blocks: [{ p: "We may update this Cookie Policy periodically." }],
      },
    ],
  },
};

/* ================= POLICY MODAL ================= */

function PolicyModal({ policy, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/40 px-4 pb-4 pt-24 backdrop-blur-md sm:pt-28"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-[calc(100vh-7rem)] w-full max-w-[900px] flex-col overflow-hidden rounded-[20px] border border-white/40 bg-white shadow-2xl sm:max-h-[calc(100vh-8rem)]"
      >
        {/* Header */}
        <div className="flex shrink-0 items-start justify-between gap-4 bg-[#7a0046] px-6 py-6 text-white sm:px-8">
          <div>
            <h2
              id="policy-modal-title"
              className="text-[22px] font-bold leading-tight"
            >
              {policy.title}
            </h2>

            <p className="mt-1 text-[13px] text-white/75">
              Effective {policy.effective}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close policy"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="min-h-0 overflow-y-auto overscroll-contain px-6 py-6 sm:px-8">
          {policy.sections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="mb-7 last:mb-0">
              {section.title && (
                <h3 className="mb-3 text-[16px] font-bold uppercase tracking-wide text-[#7a0046]">
                  {section.title}
                </h3>
              )}

              {section.blocks.map((block, blockIndex) => {
                if (block.p) {
                  return (
                    <p
                      key={blockIndex}
                      className="mb-3 text-[15px] leading-relaxed text-[#5b4a53]"
                    >
                      {block.p}
                    </p>
                  );
                }

                if (block.sub) {
                  return (
                    <h4
                      key={blockIndex}
                      className="mb-2 mt-4 text-[15px] font-semibold text-[#3d2a34]"
                    >
                      {block.sub}
                    </h4>
                  );
                }

                return (
                  <ul
                    key={blockIndex}
                    className="mb-3 flex flex-col gap-2"
                  >
                    {block.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[15px] leading-relaxed text-[#5b4a53]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#c07a9d]"
                        />
                        <span className="min-w-0 break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              })}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= SOCIAL ICON WRAPPER ================= */

const SocialIcon = ({ children, label, href }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#e5c8d7] bg-white text-[#7a0046] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
    <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[3px] bg-[#730042] text-white">
      <span className="text-[14px] font-bold leading-none tracking-[-0.7px]">
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
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
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

/* ================= FOOTER ================= */

export default function Footer() {
  const [openPolicy, setOpenPolicy] = useState(null);

  return (
    <footer className="w-full bg-[#730042] font-inter text-white">
      <div className="w-full px-4 pb-8 pt-12 sm:px-6 md:px-10 md:pt-16 lg:px-[100px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src={LOGO_IMAGE}
                alt="TechTorch Solutions"
                className="h-auto w-[180px] object-contain"
              />
            </div>

            <h3 className="mb-4 text-[16px] font-semibold leading-snug">
              Technology. Expertise. Progress.
            </h3>

            <p className="mb-6 max-w-[260px] text-[14px] leading-relaxed text-white/70">
              We bring technology, expertise and people together to solve real
              business challenges and create practical digital solutions.
            </p>

            <div className="flex items-center gap-4">
              <SocialIcon
                label="X (Twitter)"
                href="https://x.com/techtorch_sol"
              >
                <XIcon />
              </SocialIcon>

              <SocialIcon
                label="LinkedIn"
                href="https://www.linkedin.com/company/techtorch_sol/"
              >
                <LinkedInIcon />
              </SocialIcon>

              <SocialIcon
                label="Instagram"
                href="https://www.instagram.com/techtorch_sol/?hl=en"
              >
                <InstagramIcon />
              </SocialIcon>

              <SocialIcon
                label="YouTube"
                href="https://www.youtube.com/@techtorch_sol"
              >
                <YouTubeIcon />
              </SocialIcon>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-5 text-[16px] font-semibold">Explore</h4>

            <ul className="flex flex-col gap-4">
              {EXPLORE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] text-white/80 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-[16px] font-semibold">Company</h4>

            <ul className="flex flex-col gap-4">
              {COMPANY_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] text-white/80 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-4 text-[16px] font-semibold">
              Let's build what's next.
            </h4>

            <p className="mb-4 text-[14px] leading-relaxed text-white/70">
              Have a project, technology requirement or business challenge?
              Let's talk.
            </p>

            <div className="flex flex-col gap-1 text-[14px] text-white/80">
              <a
                href="https://www.techtorch.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                www.techtorch.solutions
              </a>

              
<a
  href="tel:+917251090147"
  className="transition-colors hover:text-white"
>
  +91 7251090147
</a>

            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 border-t border-white/20 pt-6">
          <p className="max-w-4xl text-[13px] leading-relaxed text-white/70">
            Disclaimer: The information provided on this website is for general
            informational purposes only. TechTorch Solutions reserves the right
            to modify services, offerings, and specifications without prior
            notice. Case studies and performance metrics represent past
            engagements and do not guarantee future results. All trademarks,
            logos, and service marks displayed are the property of TechTorch
            Solutions or their respective owners.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-white/70">
            © 2024 — 2026 TechTorch Solutions Private Limited. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <button
                key={link}
                type="button"
                onClick={() => setOpenPolicy(link)}
                className="text-left text-[13px] text-white/80 transition-colors hover:text-white"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>

      {openPolicy && (
        <PolicyModal
          policy={POLICIES[openPolicy]}
          onClose={() => setOpenPolicy(null)}
        />
      )}
    </footer>
  );
}