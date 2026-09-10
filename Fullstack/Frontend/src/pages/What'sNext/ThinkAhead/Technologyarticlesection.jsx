import React, { useEffect, useRef, useState } from "react";

const sections = [
  {
    id: "forward",
    navLabel: "Technology That Moves Business Forward",
    heading: "Technology That Moves Business Forward",
    body: "The boundaries between technical operations and strategic leadership are dissolving. Today, enterprise architecture is not a supporting function—it is the very structure upon which modern businesses operate, scale, and compete. Understanding this shift is critical for survival.",
  },
  {
    id: "adoption",
    navLabel: "From technology adoption to practical business value",
    heading: "From technology adoption to practical business value",
    body: "As organizations navigate the complexities of the digital age, the integration of technology into every facet of business strategy becomes paramount. It is no longer about having a digital department, but about being a digital business at its core. We help organizations identify the technologies that will actually make a difference to their operations, not just the ones making headlines.",
    image: "/Professionalmodern.png",
  },
  {
    id: "ai",
    navLabel: "Artificial Intelligence",
    heading: "Artificial Intelligence",
    body: "AI is moving from theoretical potential to practical application. The challenge for businesses is identifying where AI can genuinely improve processes, assist decision-making, or create better experiences for customers. We focus on pragmatic AI implementations that deliver measurable improvements to business workflows, ensuring that investments in AI translate directly to operational efficiency.",
  },
  {
    id: "cloud",
    navLabel: "Cloud Infrastructure",
    heading: "Cloud Infrastructure",
    body: "Modern business requires flexible, scalable foundations. Cloud infrastructure provides the agility necessary to respond to market changes quickly. However, a successful cloud strategy requires more than just migrating servers; it involves optimizing architecture for performance, cost, and security. We design cloud environments that align with business goals, providing a robust platform for growth and innovation.",
    image: "/Professionalenterprise.png",
  },
  {
    id: "cybersecurity",
    navLabel: "Cybersecurity",
    heading: "Cybersecurity",
    body: "As operations become increasingly digital, securing business assets is non-negotiable. Effective cybersecurity must be proactive and integrated into the very fabric of the organization's technology stack. We help businesses establish comprehensive security postures that protect data, ensure compliance, and build trust with customers, without stifling operational agility.",
  },
  {
    id: "software-engineering",
    navLabel: "Software Engineering and Development",
    heading: "Software Engineering and Development",
    body: "Custom software solutions are often the key differentiator in a competitive market. We approach software engineering with a focus on building scalable, maintainable, and user-centric applications. By employing modern development practices, we ensure that the software we build not only solves immediate challenges but also adapts to future business requirements.",
    image: "/Diversemodern engineeringteam.png",
  },
  {
    id: "work-together",
    navLabel: "Technology needs to work together",
    heading: "Technology needs to work together",
    body: "Isolated technology solutions rarely deliver their full potential. The true power of modern enterprise technology is realized when systems are integrated. AI relies on data stored in the cloud; cloud environments must be secured by robust cybersecurity; and software applications must seamlessly connect these components. We ensure that your technology investments function as a cohesive ecosystem.",
  },
  {
    id: "next",
    navLabel: "Preparing for what comes next",
    heading: "Preparing for what comes next",
    body: "The technology landscape will continue to evolve. Building a resilient business means establishing a technology foundation that can adapt to new tools and methodologies as they emerge. Our approach is designed to future-proof your operations, ensuring that you are always ready to leverage the next wave of technological innovation.",
  },
];

export default function TechnologyArticleSection() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#FAF6F1]
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
        xl:px-12
        xl:py-20
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-10
          sm:gap-12
          md:gap-14
          lg:grid-cols-[240px_minmax(0,1fr)]
          lg:gap-12
          xl:grid-cols-[260px_minmax(0,1fr)]
          xl:gap-16
        "
      >
        {/* ==================================================
            STICKY SIDEBAR NAVIGATION
        ================================================== */}
        <aside className="hidden lg:block">
          <nav
            className="
              sticky
              top-16
              flex
              flex-col
              gap-4
              border-l
              border-slate-300
              pl-4
              xl:pl-5
            "
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`
                  text-[11px]
                  leading-[1.45]
                  transition-colors
                  duration-200
                  hover:text-fuchsia-900
                  xl:text-xs
                  ${
                    activeId === s.id
                      ? "font-semibold text-fuchsia-900"
                      : "text-slate-500"
                  }
                `}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {s.navLabel}
              </a>
            ))}
          </nav>
        </aside>

        {/* ==================================================
            MAIN ARTICLE CONTENT
        ================================================== */}
        <article
          className="
            w-full
            min-w-0
            max-w-3xl
          "
        >
          <div
            className="
              flex
              flex-col
              gap-8
              sm:gap-10
              md:gap-12
              lg:gap-14
            "
          >
            {sections.map((s) => (
              <div
                key={s.id}
                id={s.id}
                ref={(el) => (sectionRefs.current[s.id] = el)}
                className="
                  scroll-mt-20
                  sm:scroll-mt-24
                  lg:scroll-mt-28
                "
              >
                {/* ==================================================
                    HEADING
                ================================================== */}
                <div
                  className="
                    w-full
                    border-l-[3px]
                    border-fuchsia-900
                    bg-rose-50/70
                    py-2.5
                    pl-3
                    pr-2
                    sm:border-l-4
                    sm:py-3
                    sm:pl-4
                    md:py-3.5
                  "
                >
                  <h2
                    className="
                      text-[18px]
                      font-bold
                      leading-[1.35]
                      text-slate-900
                      sm:text-[20px]
                      md:text-[22px]
                      lg:text-[23px]
                      xl:text-[24px]
                    "
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {s.heading}
                  </h2>
                </div>

                {/* ==================================================
                    BODY
                ================================================== */}
                <p
                  className="
                    mt-3
                    pl-3
                    text-[13px]
                    leading-[1.75]
                    text-slate-600
                    sm:mt-4
                    sm:pl-4
                    sm:text-[14px]
                    md:text-[15px]
                    md:leading-[1.8]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {s.body}
                </p>

                {/* ==================================================
                    IMAGE
                ================================================== */}
                {s.image && (
                  <div className="mt-5 w-full overflow-hidden rounded-lg sm:mt-6 sm:rounded-xl">
                    <img
                      src={s.image}
                      alt={s.heading}
                      loading="lazy"
                      className="
                        block
                        h-auto
                        w-full
                        max-w-full
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-[1.01]
                      "
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}