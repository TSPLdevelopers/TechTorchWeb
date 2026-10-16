import React, { useRef, useState } from "react";
import {
  Cloud,
  Puzzle,
  Settings,
  Link2,
  Target,
  UsersRound,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const IMAGES = {
  handshake: "/PartnersEcosystem1.png",
  network: "/PartnersEcosystem2.png",
  building: "/PartnersEcosystem3.png",
};

const OPPORTUNITIES = [
  {
    icon: Cloud,
    title: "Technology Partnerships",
    description:
      "Explore opportunities to collaborate on software, technology platforms, and digital capabilities that support changing business requirements.",
  },
  {
    icon: Puzzle,
    title: "Solution Partnerships",
    description:
      "Combine complementary products and expertise to address specific customer needs and deliver relevant business solutions.",
  },
  {
    icon: Settings,
    title: "Service Partnerships",
    description:
      "Work together across implementation, technical services, and delivery capabilities to support customer projects and operational requirements.",
  },
];

const BENEFITS = [
  {
    icon: Link2,
    title: "Complementary Capabilities",
    description:
      "Bring together relevant expertise and services to address a broader range of business and technology requirements.",
  },
  {
    icon: Target,
    title: "Business Collaboration",
    description:
      "Identify opportunities to work together on customer projects and shared business objectives.",
  },
  {
    icon: UsersRound,
    title: "Customer-Focused Solutions",
    description:
      "Align technology and service capabilities with customer requirements and practical business outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Relationships",
    description:
      "Build partnerships grounded in transparency, accountability, and mutual value.",
  },
];

/* Footer jaisi hi horizontal padding: 16 / 24 / 40 / 100 */
const PAGE_X = "px-4 sm:px-6 md:px-10 lg:px-[100px]";
const SECTION_Y = "py-12 md:py-16 lg:py-24";

const Eyebrow = ({ children, light }) => (
  <span
    className={`mb-3 block text-[11px] font-bold uppercase tracking-wide sm:text-xs ${
      light ? "text-[#e6b6ca]" : "text-[#b31962]"
    }`}
  >
    {children}
  </span>
);

const inputClass =
  "w-full rounded border border-[#cbd2dc] px-3 py-2.5 text-[13px] text-[#111a2e] placeholder:text-[#a7b0be] focus:border-[#730042] focus:outline-none focus:ring-2 focus:ring-[#730042]/20";
const labelClass = "mb-1.5 mt-3.5 block text-xs font-semibold text-[#4c5768]";

export default function PartnersEcosystem() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    // TODO: yahan apni API / email service connect karo
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <main className="partners-ecosystem-page w-full overflow-x-hidden font-inter text-[#111a2e]">
      {/* ================= HERO ================= */}
      <section className={`bg-[#faf9f4] ${SECTION_Y} ${PAGE_X}`}>
        <div className="grid min-w-0 grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Eyebrow>Partners Ecosystem</Eyebrow>
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight sm:text-[40px] lg:text-[48px]">
              Partnerships That Create Business Value
            </h1>
            <p className="mt-5 max-w-[560px] text-[14px] leading-relaxed text-[#5b6b80] sm:text-[15px]">
              At TechTorch Solutions, we recognise the role of strong
              partnerships in delivering effective technology solutions. We aim
              to build relationships with organisations whose expertise,
              capabilities, and business objectives complement our own.
            </p>
          </div>
          <div className="pe-hero-image-wrap relative min-w-0">
            <img
              src={IMAGES.handshake}
              alt="Technology-enabled business handshake"
              className="pe-hero-image aspect-[3/2] w-full max-w-full rounded-xl object-cover object-center shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= NETWORK ================= */}
      <section className={`bg-white ${SECTION_Y} ${PAGE_X}`}>
        <div className="grid min-w-0 grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Eyebrow>Our Partner Network</Eyebrow>
            <h2 className="text-[26px] font-extrabold leading-tight tracking-tight sm:text-[32px] lg:text-[38px]">
              Collaboration Built Around Shared Objectives
            </h2>
            <p className="mt-5 max-w-[560px] text-[14px] leading-relaxed text-[#5b6b80] sm:text-[15px]">
              Our partner ecosystem is focused on bringing together
              complementary technology, services, and expertise. We believe
              effective collaboration starts with a clear understanding of
              customer requirements and a shared commitment to delivering
              relevant solutions.
            </p>
            <p className="mt-4 max-w-[560px] text-[14px] leading-relaxed text-[#5b6b80] sm:text-[15px]">
              We look for opportunities to work with organisations that value
              professional integrity, technical expertise, and long-term
              business relationships.
            </p>
          </div>
          <img
            src={IMAGES.network}
            alt="Professionals collaborating around a glowing digital structure"
            className="w-full max-w-[90%] aspect-[3/2] rounded-2xl object-cover object-center shadow-xl md:order-last"
          />
        </div>
      </section>

      {/* ================= OPPORTUNITIES ================= */}
      <section className={`bg-[#faf9f4] ${SECTION_Y} ${PAGE_X}`}>
        <Eyebrow>Partnership Opportunities</Eyebrow>
        <h2 className="text-[26px] font-extrabold leading-tight tracking-tight sm:text-[32px] lg:text-[38px]">
          Areas of Collaboration
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {OPPORTUNITIES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-xl border border-[#e6eaf0] bg-white p-6 lg:p-7"
            >
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-[10px] bg-[#fdf0f6] text-[#b31962]">
                <Icon size={22} />
              </span>
              <h3 className="text-[17px] font-bold leading-snug">{title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#5b6b80]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className={`bg-white ${SECTION_Y} ${PAGE_X}`}>
        <Eyebrow>Why Partner With TechTorch?</Eyebrow>
        <h2 className="text-[26px] font-extrabold leading-tight tracking-tight sm:text-[32px] lg:text-[38px]">
          Building Stronger Together
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <article key={title}>
              <Icon size={26} className="mb-4 text-[#b31962]" />
              <h3 className="text-[16px] font-bold leading-snug">{title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#5b6b80]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CTA + FORM ================= */}
      <section
        id="partner-enquiry"
        className={`bg-gradient-to-br from-[#4b0021] to-[#730042] ${SECTION_Y} ${PAGE_X}`}
      >
        <div className="grid min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div>
            <Eyebrow light>Start a Partnership Conversation</Eyebrow>
            <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[34px] lg:text-[40px]">
              Let's Explore Opportunities Together
            </h2>
            <p className="mt-5 max-w-[560px] text-[14px] leading-relaxed text-[#e8becd] sm:text-[15px]">
              Are you a technology provider, software company, or service
              organisation looking to explore potential collaboration?
            </p>
            <p className="mt-4 max-w-[560px] text-[14px] leading-relaxed text-[#e8becd] sm:text-[15px]">
              Share your organisation's capabilities and partnership objectives
              with TechTorch Solutions. Our team can review your enquiry and
              discuss potential areas of alignment.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-md border border-white bg-white px-5 text-[13px] font-bold text-[#730042] transition-colors hover:bg-[#f8eaf0]"
              >
                Submit a Partnership Enquiry <ArrowRight size={18} />
              </button>
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex min-h-[46px] items-center justify-center rounded-md border border-[#d49cb5] px-5 text-[13px] font-bold text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div
            ref={formRef}
            className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-2xl sm:grid-cols-[0.8fr_1fr]"
          >
            <img
              src={IMAGES.building}
              alt="Modern illuminated corporate office building"
              className="h-[180px] w-full max-w-full object-cover object-[58%_center] sm:h-full sm:min-h-[320px] lg:min-h-[420px]"
            />

            <form onSubmit={handleSubmit} className="p-5 sm:p-6 lg:p-8">
              <label htmlFor="pe-name" className={`${labelClass} !mt-0`}>
                Your Name <b className="text-[#b31962]">*</b>
              </label>
              <input
                id="pe-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className={inputClass}
              />

              <label htmlFor="pe-email" className={labelClass}>
                Business Email <b className="text-[#b31962]">*</b>
              </label>
              <input
                id="pe-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className={inputClass}
              />

              <label htmlFor="pe-org" className={labelClass}>
                Organisation Name <b className="text-[#b31962]">*</b>
              </label>
              <input
                id="pe-org"
                name="organisation"
                type="text"
                placeholder="Enter your organisation"
                required
                className={inputClass}
              />

              <label htmlFor="pe-message" className={labelClass}>
                Message (Optional)
              </label>
              <textarea
                id="pe-message"
                name="message"
                rows={4}
                placeholder="Tell us about your partnership interest"
                className={`${inputClass} resize-y`}
              />

              <button
                type="submit"
                className="mt-6 min-h-[44px] w-full rounded bg-[#730042] text-[13px] font-bold text-white transition-colors hover:bg-[#59002d]"
              >
                Submit
              </button>

              {submitted && (
                <p role="status" className="mt-3 text-xs text-[#27633e]">
                  Thank you! Your enquiry has been received.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Additional responsive CSS media queries */}
      <style>{`
        .partners-ecosystem-page,
        .partners-ecosystem-page * {
          box-sizing: border-box;
        }

        .partners-ecosystem-page img {
          display: block;
          max-width: 100%;
        }

        /* Hero image decoration to match the reference screenshot */
        .pe-hero-image-wrap { isolation: isolate; }
        .pe-hero-image-wrap::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 44%;
          height: 70%;
          right: -4%;
          bottom: -7%;
          border-radius: 18px;
          background: #f0dfe5;
          transform: rotate(-5deg);
        }
        .pe-hero-image-wrap::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 24%;
          height: 28%;
          background: #730042;
          clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
          border-bottom-right-radius: 12px;
          pointer-events: none;
        }
        .pe-hero-image { position: relative; z-index: 0; }

        /* Mobile phones */
        @media (max-width: 767px) {
          .partners-ecosystem-page > section > div {
            min-width: 0;
          }

          .partners-ecosystem-page > section:nth-of-type(1) .pe-hero-image,
          .partners-ecosystem-page > section:nth-of-type(2) img {
            width: 100%;
            height: auto;
            aspect-ratio: 3 / 2;
            object-fit: cover;
            object-position: center;
          }

          .partners-ecosystem-page > section:nth-of-type(5) > div > div:nth-child(2) > img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            object-position: center;
          }

          .partners-ecosystem-page input,
          .partners-ecosystem-page textarea,
          .partners-ecosystem-page button {
            max-width: 100%;
          }
        }

        /* Tablets and small laptops */
        @media (min-width: 768px) and (max-width: 1023px) {
          .partners-ecosystem-page > section:nth-of-type(1) .pe-hero-image,
          .partners-ecosystem-page > section:nth-of-type(2) img {
            width: 100%;
            height: auto;
            aspect-ratio: 3 / 2;
            object-fit: cover;
            object-position: center;
          }

          .partners-ecosystem-page > section:nth-of-type(5) > div > div:nth-child(2) > img {
            min-height: 320px;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }

        /* Desktop screens */
        @media (min-width: 1024px) {
          .partners-ecosystem-page > section:nth-of-type(1) .pe-hero-image,
          .partners-ecosystem-page > section:nth-of-type(2) img {
            width: 100%;
            height: auto;
            aspect-ratio: 3 / 2;
            object-fit: cover;
            object-position: center;
          }

          .partners-ecosystem-page > section:nth-of-type(5) > div > div:nth-child(2) > img {
            min-height: 420px;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
      `}</style>
    </main>
  );
}