import React from "react";
import {
  Monitor,
  Code2,
  RefreshCw,
  Zap,
  Lightbulb,
  UsersRound,
  ChartNoAxesColumn,
  ArrowRight,
  ArrowUpRight,
  Rocket,
} from "lucide-react";


const IMAGES = {
  hero: "/Investors1.png",
  growth: "/Investors2.png",
};
 

const PAGE_X = "px-4 sm:px-6 md:px-10 lg:px-[100px]";

const FOCUS_AREAS = [
  {
    icon: Monitor,
    title: "Digital Solutions",
    description:
      "Supporting organizations in addressing business challenges through technology-led approaches and digital capabilities.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Creating software solutions designed around defined requirements, operational needs, and business objectives.",
  },
  {
    icon: RefreshCw,
    title: "Business Process Enablement",
    description:
      "Exploring ways technology can simplify workflows, improve coordination, and support more effective operations.",
  },
  {
    icon: Zap,
    title: "Emerging Opportunities",
    description:
      "Remaining attentive to new technologies, changing market requirements, and opportunities for continued development.",
  },
];

const PRINCIPLES = [
  {
    icon: Lightbulb,
    title: "Innovation with Intent",
    description:
      "We value ideas that address genuine challenges and offer practical opportunities for improvement.",
  },
  {
    icon: UsersRound,
    title: "Business-Centred Thinking",
    description:
      "We consider the objectives, processes, and priorities that shape each technology requirement.",
  },
  {
    icon: RefreshCw,
    title: "Adaptability and Learning",
    description:
      "We recognize the importance of evolving alongside changing technologies, customer expectations, and business environments.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "A Long-Term Perspective",
    description:
      "We aim to approach development with an understanding of future requirements, maintainability, and opportunities for continued progress.",
  },
];

const NOTICE_ROWS = [
  { label: "Entity Status", value: "Private Limited" },
  { label: "Communication Mode", value: "Formal Electronic & Postal" },
  { label: "Official Portal", value: "techtorch.solutions", accent: true },
];

/* ================= SMALL REUSABLE PIECES ================= */

const Eyebrow = ({ children, light }) => (
  <p
    className={`mb-5 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.18em] ${
      light ? "text-[#ec4899]" : "text-[#a41c64]"
    }`}
  >
    <span className="h-[2px] w-[18px] shrink-0 bg-current" />
    {children}
  </p>
);

const SectionTitle = ({ children, light }) => (
  <h2
    className={`text-[28px] font-bold leading-[1.2] tracking-tight sm:text-[32px] lg:text-[38px] ${
      light ? "text-white" : "text-[#111a2e]"
    }`}
  >
    {children}
  </h2>
);

/* ================= PAGE ================= */

export default function InvestorsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white font-inter text-[#111a2e]">
      {/* ================= HERO ================= */}
      <section
        className={`bg-[#0b0710] bg-[radial-gradient(ellipse_at_90%_0%,#4a1042_0%,transparent_55%)] py-14 text-white md:py-20 lg:py-24 ${PAGE_X}`}
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <Eyebrow light>Investor Relations</Eyebrow>

            <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight sm:text-[44px] lg:text-[54px]">
              A Vision for Progress.
              <span className="block bg-gradient-to-r from-[#ff5cb8] to-[#f08be0] bg-clip-text text-transparent">
                A Commitment to Innovation.
              </span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
              At TechTorch Solutions Private Limited, we see technology as a
              foundation for meaningful business progress. Our focus is on
              developing digital capabilities, exploring new opportunities, and
              creating technology-driven solutions that respond to the changing
              needs of modern businesses.
            </p>

            <p className="mt-4 max-w-[600px] text-[13px] leading-relaxed text-white/60">
              With a forward-looking mindset and a commitment to purposeful
              innovation, we aim to build lasting value through technology,
              strategic thinking, and continuous improvement.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img
              src={IMAGES.hero}
              alt="Modern glass building with illuminated light streaks"
              className="aspect-[16/10] w-full object-cover object-center"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#120a14]/85 px-4 py-3 backdrop-blur-sm">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#ec4899]">
                  Strategic Direction
                </p>
                <p className="mt-1 text-[12px] text-white">
                  Long-term value through technology
                </p>
              </div>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#730042] text-[#f5b5d5]">
                <ArrowUpRight size={15} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PERSPECTIVE ================= */}
      <section className={`bg-white py-12 md:py-16 lg:py-24 ${PAGE_X}`}>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Our Perspective on Growth</Eyebrow>
            <SectionTitle>Building for a Changing Digital Landscape</SectionTitle>

            <p className="mt-6 text-[14px] leading-relaxed text-[#5b6b80]">
              The future belongs to businesses that can adapt, innovate, and
              turn emerging opportunities into practical outcomes. As
              technology continues to reshape industries, organizations need
              solutions that support efficiency, flexibility, and long-term
              development.
            </p>

            <p className="mt-4 text-[14px] leading-relaxed text-[#5b6b80]">
              At TechTorch Solutions, our approach begins with understanding
              these evolving needs. We focus on the role technology can play in
              improving business processes, supporting digital initiatives, and
              helping organizations move forward with greater clarity.
            </p>

            <blockquote className="mt-7 border-l-[3px] border-[#a41c64] bg-[#fdf6f9] px-5 py-4 text-[13px] italic leading-relaxed text-[#5b6b80]">
              “We believe sustainable progress comes from combining a clear
              business direction with the ability to respond thoughtfully to
              change.”
            </blockquote>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
            <img
              src={IMAGES.growth}
              alt="Team collaborating around a presentation in a modern office"
              className="aspect-[16/10] w-full object-cover object-center"
            />
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a41c64]">
                  Strategic Foundation
                </p>
                <p className="mt-1 text-[12px] font-medium">
                  Clear Direction &amp; Adaptability
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#fdeaf3] px-3 py-1.5 text-[11px] font-semibold text-[#a41c64]">
                Progress Mindset
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS FOCUS ================= */}
      <section className={`bg-[#faf9f5] py-12 md:py-16 lg:py-24 ${PAGE_X}`}>
        <Eyebrow>Our Business Focus</Eyebrow>
        <SectionTitle>Technology with a Purpose</SectionTitle>
        <p className="mt-4 max-w-[640px] text-[14px] leading-relaxed text-[#5b6b80]">
          We approach digital development with an emphasis on practical
          application, business relevance, and the opportunities created by an
          evolving technology landscape.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FOCUS_AREAS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex flex-col rounded-xl border border-[#ece8e8] bg-white p-6 shadow-sm"
            >
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-[#fdeaf3] text-[#bf2c78]">
                <Icon size={19} strokeWidth={1.8} />
              </span>
              <h3 className="text-[16px] font-bold leading-snug">{title}</h3>
              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[#6b7585]">
                {description}
              </p>
              <p className="mt-6 border-t border-[#f0eded] pt-4 text-[11px] font-bold text-[#a41c64]">
                Capability Area
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className={`bg-white py-12 md:py-16 lg:py-24 ${PAGE_X}`}>
        <Eyebrow>Our Approach to Creating Value</Eyebrow>
        <SectionTitle>Thoughtful Decisions. Meaningful Progress.</SectionTitle>
        <p className="mt-4 max-w-[640px] text-[14px] leading-relaxed text-[#5b6b80]">
          We believe that progress is built through consistent effort, informed
          decisions, and a willingness to improve. Our approach is guided by
          principles that help connect technology initiatives with real
          business requirements.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {PRINCIPLES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="lg:border-l lg:border-[#ececf0] lg:px-6 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <Icon size={24} strokeWidth={1.6} className="mb-4 text-[#bf2c78]" />
              <h3 className="text-[14px] font-bold leading-snug">{title}</h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-[#6b7585]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= GOVERNANCE ================= */}
      <section className={`bg-[#eef6ff] py-12 md:py-16 lg:py-24 ${PAGE_X}`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Governance &amp; Disclosures</Eyebrow>
            <SectionTitle>Clear Communication Builds Trust</SectionTitle>

            <p className="mt-6 max-w-[620px] text-[14px] leading-relaxed text-[#5b6b80]">
              We recognize the importance of reliable information and
              professional communication in building confidence among business
              stakeholders.
            </p>
            <p className="mt-4 max-w-[620px] text-[14px] leading-relaxed text-[#5b6b80]">
              TechTorch Solutions is committed to handling corporate inquiries
              through appropriate communication channels and sharing
              information in accordance with its availability, accuracy, and
              applicable disclosure requirements.
            </p>
            <p className="mt-4 max-w-[620px] text-[14px] leading-relaxed text-[#5b6b80]">
              For inquiries concerning company information, business
              activities, or potential areas of collaboration, interested
              parties may contact our team.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-[#a41c64] transition-colors hover:text-[#730042]"
            >
              Submit a formal corporate inquiry <ArrowRight size={15} />
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border-t-[3px] border-[#a41c64] bg-white p-5 shadow-lg sm:p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#fdeaf3] text-[12px] font-bold text-[#a41c64]">
                §
              </span>
              <p className="text-[12px] font-bold uppercase tracking-wide">
                Statutory Notice
              </p>
            </div>

            <p className="mt-5 rounded-lg border border-[#eceef2] bg-[#f7f8fa] p-4 text-[12px] leading-relaxed text-[#7a8290]">
              Official financial information, statutory disclosures, ownership
              details, and investor documents should be included in this
              section only where applicable, verified, and approved for
              publication.
            </p>

            <dl className="mt-3">
              {NOTICE_ROWS.map(({ label, value, accent }) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 border-b border-[#eef0f3] py-4 text-[12px] last:border-b-0"
                >
                  <dt className="text-[#5b6b80]">{label}</dt>
                  <dd
                    className={`text-right font-bold ${
                      accent ? "text-[#a41c64]" : "text-[#111a2e]"
                    }`}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section
        className={`bg-[#1a0614] bg-[radial-gradient(ellipse_at_80%_20%,rgba(117,0,65,0.35),transparent_55%)] py-14 text-white md:py-20 lg:py-24 ${PAGE_X}`}
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-0">
          <div className="lg:pr-12">
            <Eyebrow light>Connect with TechTorch Solutions</Eyebrow>

            <h2 className="text-[30px] font-bold leading-[1.15] tracking-tight sm:text-[38px] lg:text-[46px]">
              Start a Conversation About What Comes Next
            </h2>

            <p className="mt-6 max-w-[560px] text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
              We welcome relevant business inquiries, professional
              discussions, and conversations about technology-driven
              opportunities.
            </p>
            <p className="mt-4 max-w-[560px] text-[13px] leading-relaxed text-white/60">
              If you would like to learn more about TechTorch Solutions and its
              business direction, our team can help direct your inquiry to the
              appropriate contact.
            </p>
          </div>

          <div className="flex flex-col items-center border-t border-[#da2a82]/25 pt-8 text-center lg:border-l lg:border-t-0 lg:px-8 lg:py-10">
            <span className="grid h-14 w-14 place-items-center rounded-xl border border-[#da2a82]/30 bg-[#730042]/70 text-[#f5b5d5]">
              <Rocket size={26} strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-[18px] font-bold sm:text-[20px]">
              TechTorch Solutions Private Limited
            </h3>
            <p className="mt-2 max-w-[260px] text-[13px] leading-relaxed text-white/65">
              Innovation in Action, Solutions Beyond Imagination.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}