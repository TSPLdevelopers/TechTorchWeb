import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const sections = [
  {
    eyebrow: "ABOUT TECHTORCH",
    title: "Building a Future Driven by Technology and Innovation",
    paragraphs: [
      "TechTorch Solutions Private Limited is a technology-focused company committed to advancing digital innovation and helping shape the future of modern business.",
      "We believe technology is more than a tool for progress — it is a foundation for new ideas, better possibilities, and meaningful transformation.",
      "At TechTorch, our philosophy is built around understanding change, embracing innovation, and continuously evolving with the digital world. We value forward-thinking ideas, purposeful execution, and a business mindset that places long-term growth at the center of everything we do.",
    ],
    image: "/CompanyOverview2.png",
    imageAlt: "TechTorch team collaborating in a modern office",
    className: "co-about",
  },
  {
    eyebrow: "OUR PHILOSOPHY",
    title: "Progress Begins with the Right Mindset",
    paragraphs: [
      "At TechTorch, we believe lasting progress is built through clarity of purpose, thoughtful decisions, and a willingness to keep learning.",
      "We recognize that the business environment is constantly changing. Our philosophy is to approach that change with an open mind, a forward-looking perspective, and a commitment to building a strong and sustainable organization.",
    ],
    image: "/CompanyOverview3.png",
    imageAlt: "Workspace with laptop and notebook",
    className: "co-philosophy",
  },
  {
    eyebrow: "LOOKING AHEAD",
    title: "A Vision Focused on Continuous Growth",
    paragraphs: [
      "As TechTorch continues its journey, our focus remains on strengthening our identity, embracing new opportunities, and building a future grounded in innovation, trust, and continuous development.",
      "We believe that a strong organization is built over time through consistent values, a clear direction, and the ability to adapt while staying true to its purpose.",
    ],
    image: "/CompanyOverview4.png",
    imageAlt: "Hiker looking toward a mountain sunrise",
    className: "co-looking-ahead",
  },
];

const principles = [
  {
    title: "Our Vision",
    subtitle: "Creating Possibilities for Tomorrow",
    paragraphs: [
      "Our vision is to establish TechTorch as a trusted and forward-thinking name in the technology-driven business landscape, recognized for its commitment to innovation, integrity, and sustainable growth.",
      "We aspire to embrace emerging opportunities, encourage new ideas, and contribute to a future where technology and business progress move forward together.",
    ],
  },
  {
    title: "Our Mission",
    subtitle: "Moving Forward with Purpose",
    paragraphs: [
      "Our mission is to foster a culture of innovation, continuous learning, and responsible growth. We aim to strengthen our organizational capabilities, build lasting professional relationships, and remain responsive to the changing needs of the business environment.",
      "Through a clear sense of purpose and a commitment to progress, we strive to create lasting value for our stakeholders and build a strong foundation for the future.",
    ],
  },
  {
    title: "Our Core Values",
    subtitle: "The Principles That Define Us",
    values: [
      {
        title: "Integrity",
        text: "We believe in honesty, transparency, and responsible conduct in our professional relationships and business decisions.",
      },
      {
        title: "Innovation",
        text: "We encourage fresh thinking, new perspectives, and a willingness to explore better possibilities.",
      },
      {
        title: "Excellence",
        text: "We value high standards, attention to detail, and a continuous commitment to improvement.",
      },
      {
        title: "Collaboration",
        text: "We believe meaningful progress comes from mutual respect, shared knowledge, and strong professional relationships.",
      },
      {
        title: "Adaptability",
        text: "We embrace change, remain open to new opportunities, and recognize the importance of evolving with the world around us.",
      },
      {
        title: "Long-Term Thinking",
        text: "We value sustainable development, responsible decisions, and a clear focus on future opportunities.",
      },
    ],
  },
];

function Eyebrow({ children }) {
  return (
    <div className="co-eyebrow">
      <span aria-hidden="true" />
      {children}
    </div>
  );
}

function StorySection({ section, reverse = false }) {
  return (
    <section className={`co-story ${section.className}`}>
      <div className={`co-container co-story-grid ${reverse ? "co-reverse" : ""}`}>
        <div className="co-story-copy">
          <Eyebrow>{section.eyebrow}</Eyebrow>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="co-story-image-wrap">
          <img
            src={section.image}
            alt={section.imageAlt}
            className="co-story-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default function CompanyOverview() {
  const [activePrinciple, setActivePrinciple] = useState(-1);

  return (
    <main className="company-overview-page">
      {/* HERO */}
      <section className="co-hero">
        <div className="co-hero-background" role="img" aria-label="City skyline at dusk" />
        <div className="co-hero-shade" />
        <div className="co-container co-hero-content">
          <Eyebrow>COMPANY OVERVIEW</Eyebrow>
          <h1>
            Technology. Innovation.
            <br />
            <span>Business Transformation.</span>
          </h1>
          <p>
            At TechTorch, we believe technology is more than a tool — it&apos;s a
            foundation for new ideas, better possibilities and meaningful
            transformation.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <StorySection section={sections[0]} />

      {/* WHO WE ARE */}
      <section className="co-who-we-are">
        <div className="co-container co-who-grid">
          <div className="co-who-intro">
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h2>
              Driven by Purpose.
              <br />
              Defined by Progress.
            </h2>
            <p>
              TechTorch represents a forward-looking approach to business and
              technology. We are guided by the belief that progress comes from
              combining vision, knowledge, creativity, and a strong commitment
              to continuous improvement.
            </p>
            <p>
              As the digital landscape continues to evolve, we recognize the
              importance of staying adaptable, thinking strategically, and
              building a culture that values innovation and responsibility.
            </p>
          </div>

          <div className="co-principles" aria-label="Our vision, mission and values">
            {principles.map((item, index) => {
              const isActive = activePrinciple === index;
              return (
                <article className={`co-principle ${isActive ? "is-active" : ""}`} key={item.title}>
                  <button
                    type="button"
                    className="co-principle-toggle"
                    aria-expanded={isActive}
                    onClick={() => setActivePrinciple(isActive ? -1 : index)}
                  >
                    <span className="co-principle-symbol" aria-hidden="true">
                      {index === 0 ? "◉" : index === 1 ? "◎" : "◇"}
                    </span>
                    <span className="co-principle-heading">
                      <strong>{item.title}</strong>
                      <small>{item.subtitle}</small>
                    </span>
                    <span className="co-principle-control" aria-hidden="true">
                      {isActive ? <X size={17} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isActive && (
                    <div className="co-principle-body">
                      {item.paragraphs?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {item.values?.map((value) => (
                        <div className="co-value-item" key={value.title}>
                          <h3>{value.title}</h3>
                          <p>{value.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <StorySection section={sections[1]} reverse />

      {/* LOOKING AHEAD */}
      <StorySection section={sections[2]} />

      {/* JOURNEY / FOOTER-ALIGNED CLOSING SECTION */}
      <section className="co-journey">
        <div className="co-container co-journey-grid">
          <div>
            <Eyebrow>OUR JOURNEY</Eyebrow>
            <h2>The Future Starts with a Vision</h2>
            <p>
              At TechTorch, we look ahead with ambition, embrace change with
              confidence, and remain committed to building an organization that
              stands for progress and possibility.
            </p>
          </div>
          <div className="co-journey-brand">
            <strong>TechTorch</strong>
            <p>Driven by Innovation. Defined by Progress.</p>
            <span aria-hidden="true" />
          </div>
        </div>
      </section>

      <style>{`
        .company-overview-page {
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
          overflow: hidden;
          color: #151c2c;
          background: #fff;
          font-family: "Inter", sans-serif;
        }

        /* Same horizontal alignment system as the site footer */
        .co-container {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          margin-inline: auto;
          padding-inline: 16px;
          box-sizing: border-box;
        }

        .co-container *,
        .co-container *::before,
        .co-container *::after {
          box-sizing: border-box;
        }

        @media (min-width: 640px) {
          .co-container { padding-inline: 24px; }
        }

        @media (min-width: 768px) {
          .co-container { padding-inline: 40px; }
        }

        @media (min-width: 1024px) {
          .co-container { padding-inline: 100px; }
        }

        /* HERO */
        .co-hero {
          position: relative;
          isolation: isolate;
          min-height: 500px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #160817;
        }

        .co-hero-background {
          position: absolute;
          z-index: -2;
          inset: 0;
          background-image: url("/CompanyOverview1.png");
          background-position: center 48%;
          background-size: cover;
          background-repeat: no-repeat;
          transform: scale(1.01);
        }

        .co-hero-shade {
          position: absolute;
          z-index: -1;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(14, 4, 18, .94) 0%,
            rgba(19, 7, 26, .82) 42%,
            rgba(17, 7, 25, .46) 100%
          );
        }

        .co-hero-content {
          padding-block: 72px;
        }

        .co-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
          color: #a22a66;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          line-height: 1.4;
        }

        .co-eyebrow > span {
          display: inline-block;
          width: 17px;
          height: 2px;
          flex: 0 0 17px;
          background: #a22a66;
        }

        .co-hero .co-eyebrow {
          color: #ef4c9b;
          margin-bottom: 18px;
        }

        .co-hero .co-eyebrow > span {
          background: #ef4c9b;
        }

        .co-hero h1 {
          max-width: 900px;
          margin: 0;
          color: #fff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -1.8px;
        }

        .co-hero h1 span {
          color: #ed4c91;
        }

        .co-hero-content > p {
          max-width: 570px;
          margin: 23px 0 0;
          color: rgba(255,255,255,.78);
          font-size: 16px;
          line-height: 1.75;
        }

        /* STORY SECTIONS */
        .co-story {
          padding-block: 90px;
          background: #fff;
        }

        .co-story-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, .95fr);
          align-items: center;
          gap: clamp(38px, 6vw, 88px);
        }

        .co-story-grid.co-reverse .co-story-copy {
          order: 2;
        }

        .co-story-grid.co-reverse .co-story-image-wrap {
          order: 1;
        }

        .co-story-copy {
          min-width: 0;
        }

        .co-story-copy .co-eyebrow {
          margin-bottom: 28px;
        }

        .co-story-copy h2,
        .co-who-intro h2 {
          margin: 0 0 25px;
          color: #151c2c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          line-height: 1.16;
          letter-spacing: -1.2px;
        }

        .co-story-copy p,
        .co-who-intro p {
          margin: 0 0 20px;
          color: #687383;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 400;
        }

        .co-story-copy p:last-child,
        .co-who-intro p:last-child {
          margin-bottom: 0;
        }

        .co-story-image-wrap {
          width: 100%;
          min-width: 0;
          height: clamp(220px, 28vw, 360px);
          overflow: hidden;
          border-radius: 18px;
          background: #e9edf1;
        }

        .co-story-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .co-about {
          padding-block: 88px;
        }

        .co-philosophy {
          background: #fff;
          padding-block: 88px;
        }

        .co-looking-ahead {
          background: #f8f7f2;
          padding-block: 88px;
        }

        /* WHO WE ARE */
        .co-who-we-are {
          padding-block: 100px;
          background: #f8f7f2;
        }

        .co-who-grid {
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
          align-items: start;
          gap: clamp(40px, 7vw, 110px);
        }

        .co-who-intro .co-eyebrow {
          margin-bottom: 28px;
        }

        .co-who-intro h2 {
          margin-bottom: 25px;
        }

        .co-principles {
          min-width: 0;
          padding-top: 8px;
        }

        .co-principle {
          border-bottom: 1px solid #e1e3e6;
        }

        .co-principle:first-child {
          border-bottom-color: #e1e3e6;
        }

        .co-principle-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 22px;
          padding: 18px 0;
          border: 0;
          background: transparent;
          color: #151c2c;
          text-align: left;
          cursor: pointer;
        }


        .co-principle-symbol {
          display: flex;
          width: 40px;
          height: 48px;
          flex: 0 0 58px;
          align-items: center;
          justify-content: center;
          border: 1px solid #f3dce8;
          border-radius: 15px;
          background: #fff1f7;
          color: #730042;
          font-size: 25px;
          transition: background .2s ease, color .2s ease;
        }

        .co-principle.is-active .co-principle-symbol {
          background: #730042;
          color: #ffffff;
          border-color: #730042;
        }

        .co-principle-heading {
          display: flex;
          min-width: 0;
          flex: 1;
          flex-direction: column;
          gap: 6px;
        }

        .co-principle-heading strong {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
        }

        .co-principle-heading small {
          color: #8a929f;
          font-size: 14px;
          line-height: 1.4;
        }

        .co-principle-control {
          display: flex;
          flex: 0 0 24px;
          align-items: center;
          justify-content: center;
          color: #730042;
          transition: color .2s ease;
        }

        .co-principle.is-active .co-principle-control {
          color: #730042;
        }

        .co-principle.is-active .co-principle-toggle {
          background: transparent;
          color: #151c2c;
          padding-inline: 0;
          border-radius: 0;
        }

        .co-principle.is-active .co-principle-heading strong {
          color: #151c2c;
        }

        .co-principle.is-active .co-principle-heading small {
          color: #8a929f;
        }

        .co-principle-body {
          margin: 0 0 24px 80px;
          color: #687383;
          font-size: 14px;
          line-height: 1.75;
        }

        .co-principle-body > p {
          margin: 0 0 14px;
        }

        .co-principle-body > p:last-child {
          margin-bottom: 0;
        }

        .co-value-item {
          margin-bottom: 18px;
        }

        .co-value-item:last-child {
          margin-bottom: 0;
        }

        .co-value-item h3 {
          margin: 0 0 5px;
          color: #151c2c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 700;
        }

        .co-value-item p {
          margin: 0;
          color: #687383;
          font-size: 13px;
          line-height: 1.7;
        }

        /* CLOSING SECTION */
        .co-journey {
          position: relative;
          overflow: hidden;
          padding-block: 54px;
          background: #21091c;
          color: #fff;
        }

        .co-journey::after {
          position: absolute;
          right: -5%;
          bottom: -110px;
          left: 25%;
          height: 180px;
          border-radius: 50% 50% 0 0;
          background: rgba(117, 16, 75, .23);
          content: "";
          transform: rotate(-5deg);
          pointer-events: none;
        }

        .co-journey-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(230px, .8fr);
          align-items: center;
          gap: 60px;
        }

        .co-journey .co-eyebrow {
          margin-bottom: 18px;
          color: #ed4c91;
        }

        .co-journey .co-eyebrow > span {
          background: #ed4c91;
        }

        .co-journey h2 {
          margin: 0 0 15px;
          color: #fff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -.7px;
        }

        .co-journey-grid > div:first-child > p {
          max-width: 680px;
          margin: 0;
          color: rgba(255,255,255,.72);
          font-size: 14px;
          line-height: 1.7;
        }

        .co-journey-brand {
          justify-self: end;
          min-width: 240px;
        }

        .co-journey-brand strong {
          display: block;
          margin-bottom: 10px;
          color: #fff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
        }

        .co-journey-brand p {
          margin: 0;
          color: rgba(255,255,255,.65);
          font-size: 13px;
          line-height: 1.6;
        }

        .co-journey-brand > span {
          display: block;
          width: 42px;
          height: 3px;
          margin-top: 16px;
          background: #ed4c91;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .co-story,
          .co-about,
          .co-philosophy,
          .co-looking-ahead {
            padding-block: 65px;
          }

          .co-who-we-are {
            padding-block: 70px;
          }

          .co-story-grid {
            gap: 32px;
          }

          .co-story-copy h2,
          .co-who-intro h2 {
            font-size: 40px;
          }

          .co-story-copy p,
          .co-who-intro p,
          .co-principle-body {
            font-size: 14px;
          }

          .co-principle-toggle {
            gap: 14px;
          }

          .co-principle-symbol {
            width: 48px;
            height: 48px;
            flex-basis: 48px;
          }

          .co-principle-heading strong {
            font-size: 18px;
          }

          .co-principle-body {
            margin-left: 62px;
          }
        }

        /* MOBILE */
        @media (max-width: 767px) {
          .co-hero {
            min-height: 420px;
          }

          .co-hero-content {
            padding-block: 60px;
          }

          .co-hero h1 {
            font-size: clamp(31px, 8vw, 42px);
            letter-spacing: -1.2px;
          }

          .co-hero-content > p {
            font-size: 14px;
            line-height: 1.7;
          }

          .co-story,
          .co-about,
          .co-philosophy,
          .co-looking-ahead {
            padding-block: 52px;
          }

          .co-story-grid,
          .co-who-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 30px;
          }

          .co-story-grid.co-reverse .co-story-copy,
          .co-story-grid.co-reverse .co-story-image-wrap {
            order: initial;
          }

          .co-story-copy .co-eyebrow,
          .co-who-intro .co-eyebrow {
            margin-bottom: 20px;
          }

          .co-story-copy h2,
          .co-who-intro h2 {
            margin-bottom: 18px;
            font-size: 30px;
            letter-spacing: -.8px;
          }

          .co-story-copy p,
          .co-who-intro p {
            margin-bottom: 15px;
            font-size: 14px;
            line-height: 1.7;
          }

          .co-story-image-wrap {
            height: clamp(200px, 58vw, 300px);
            border-radius: 14px;
          }

          .co-who-we-are {
            padding-block: 55px;
          }

          .co-principles {
            padding-top: 0;
          }

          .co-principle-toggle {
            gap: 13px;
            padding-block: 16px;
          }

          .co-principle-symbol {
            width: 44px;
            height: 44px;
            flex-basis: 44px;
            border-radius: 12px;
            font-size: 21px;
          }

          .co-principle-heading strong {
            font-size: 17px;
          }

          .co-principle-heading small {
            font-size: 12px;
          }

          .co-principle-body {
            margin: 0 0 20px 57px;
            font-size: 13px;
            line-height: 1.7;
          }

          .co-journey {
            padding-block: 42px;
          }

          .co-journey-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 32px;
          }

          .co-journey-brand {
            justify-self: start;
            min-width: 0;
          }
        }

        @media (max-width: 380px) {
          .co-container {
            padding-inline: 16px;
          }

          .co-hero h1 {
            font-size: 29px;
          }

          .co-story-copy h2,
          .co-who-intro h2 {
            font-size: 27px;
          }

          .co-principle-toggle {
            gap: 10px;
          }

          .co-principle-symbol {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
          }

          .co-principle-body {
            margin-left: 50px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .co-principle-symbol {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
