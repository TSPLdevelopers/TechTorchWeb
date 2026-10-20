import React, { useEffect, useState } from "react";

import heroBg from "/leadership.png";
import visionImg from "/meetingroom.png";
import siddharthImg from "/sidhart1.png";
import amitImg from "/amitkaur1.png";
import pradipImg from "/pradeep1.png";
import anshikaImg from "/anshika.png";
import futureBg from "/future.png";

const leaders = [
  {
    img: siddharthImg,
    name: "Siddharth Pathak",
    role: "Founder & CEO",
    text: "Leading TechTorch's overarching strategic vision, long-term roadmap, and executive innovation across digital operations.",
    href: "https://www.linkedin.com/in/siddharth-pathak-19b025149/",
  },
  {
    img: amitImg,
    name: "Amit Gaur",
    role: "Administrative Director",
    text: "Overseeing organizational governance, corporate infrastructure, and administrative efficiency.",
    href: "https://www.linkedin.com/in/amit-gaur-4754a278/",
  },
  {
    img: pradipImg,
    name: "Pradip Pandey",
    role: "Operations Director (BPO | BPS)",
    text: "Spearheading business process outsourcing, workflow optimization, client delivery, and operational performance.",
    href: "https://www.linkedin.com/in/pradip-pandey-3a8116154/",
  },
];

const serviceTeam = [
  {
    img: anshikaImg,
    name: "Anshika Pandey",
    role: "Human Resource Executive",
    text: "Managing employee engagement, onboarding, talent management, and day-to-day HR operations.",
    href: "https://www.linkedin.com/in/anshika-pandey-42631832a/",
  },
];

const articles = {
  "Siddharth Pathak": {
    title:
      "Siddharth Pathak: Building Better Businesses Through People and Technology",
    paragraphs: [
      "In today's competitive business environment, success depends not only on innovative products and services but also on the people who bring ideas to life. Siddharth Pathak's professional journey highlights the importance of business growth, workforce management, and technology-driven solutions.",
      "As businesses expand, traditional employee management processes can become complicated. Manual attendance tracking, scattered leave requests, time-consuming reports, and communication gaps can affect performance. Practical digital solutions can simplify these processes and help organizations make better decisions.",
      "One initiative associated with Siddharth is TorchX Talent, a workforce management solution designed to help businesses manage teams more effectively. It aims to provide better visibility into employee engagement, highlight operational challenges, and help organizations identify issues before they affect performance.",
      "Siddharth's approach to product development emphasizes research, understanding customer problems, testing, and continuous improvement. These principles help ensure that software is built around genuine user needs.",
      "His professional philosophy highlights that productivity is about more than hours spent at work. Ownership, discipline, communication, and meaningful contributions matter too. By connecting technology with an understanding of people, businesses can build more efficient and adaptable workplaces.",
      "Ultimately, successful innovation begins by identifying real problems and creating solutions that genuinely help people.",
    ],
  },

  "Amit Gaur": {
    title: "Amit Gaur: Growth, Leadership, and Professional Excellence",
    paragraphs: [
      "In today's professional environment, organizational success depends on clear processes, responsible decision-making, and people who can bring structure to everyday operations. Amit Gaur's profile within TechTorch Solutions highlights the importance of organizational governance, corporate infrastructure, and administrative efficiency.",
      "Administrative leadership helps create the foundation that allows teams to focus on their responsibilities. Clear procedures, coordination, and effective resource management can reduce confusion and help an organization operate smoothly as it grows.",
      "Strong administration also requires communication and collaboration. By aligning people, processes, and priorities, organizations can respond to challenges more effectively and maintain consistency across their operations.",
      "As workplaces evolve, adaptability becomes equally valuable. Reviewing processes, identifying opportunities for improvement, and embracing practical digital tools can help teams manage changing business requirements.",
      "Professional growth is an ongoing process. Learning from experience, listening to colleagues, and remaining open to better ways of working can strengthen decision-making and support long-term development.",
      "When governance, collaboration, and continuous improvement work together, they help create a stronger foundation for sustainable organizational growth.",
    ],
  },

  "Pradip Pandey": {
    title: "Pradip Pandey: Operations, Collaboration, and Continuous Improvement",
    paragraphs: [
      "In a business environment where customer expectations and operational demands continue to grow, effective operations are essential to consistent service delivery. Pradip Pandey's professional role highlights business process outsourcing, workflow optimization, client delivery, and scalable enterprise performance.",
      "Operations leadership connects strategy with execution. Well-designed workflows help teams understand their responsibilities, manage resources, and deliver services with greater consistency.",
      "In business process outsourcing, client communication and reliability are particularly important. Understanding client requirements, setting clear expectations, and maintaining service standards help build trust and long-term working relationships.",
      "Continuous improvement is another important principle. By learning from feedback, monitoring results, and adapting to changing requirements, organizations can strengthen delivery without losing focus on customer needs.",
      "Leadership in operations requires planning and practical problem-solving. It involves supporting teams, coordinating priorities, and translating business objectives into repeatable processes.",
      "When people, processes, and performance are aligned, organizations are better positioned to deliver value and grow sustainably.",
    ],
  },

  "Anshika Pandey": {
    title: "Anshika Pandey: Creativity, Communication, and Technology",
    paragraphs: [
      "In today's digital world, creativity, communication, and technology play an important role in building brands and meaningful connections. Anshika Pandey represents an emerging generation of professionals who combine creative thinking with strategic communication to develop engaging content and impactful ideas.",
      "Her professional interests include content creation, storytelling, branding, and digital communication. Effective content begins with understanding both the message a brand wants to share and the needs of its audience.",
      "Experiences in content-related work, including supporting a founder's office and contributing as a content lead for a university cultural fest, can provide opportunities to explore social media content, email campaigns, outreach, and team coordination.",
      "As a Computer Science student, Anshika also brings a technical perspective to her creative interests. Understanding technology while communicating ideas clearly opens up opportunities across content, marketing, and digital strategy.",
      "Continuous learning, adaptability, and collaboration are essential for long-term growth. Creative projects can strengthen problem-solving, confidence, and the ability to respond to real-world challenges.",
      "Anshika's profile reflects the potential of combining imagination with strategy and technology with storytelling.",
    ],
  },
};

const values = [
  {
    title: "Strategic Vision",
    text: "We believe in setting clear priorities, understanding emerging opportunities, and making decisions with a long-term perspective.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
  },
  {
    title: "Integrity & Accountability",
    text: "We value transparency, ethical conduct, responsible leadership, and ownership of decisions.",
    icon: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "People & Collaboration",
    text: "We recognize the importance of shared knowledge, mutual respect, and an environment where people can contribute and grow.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
        <path d="M16 4.5a3.5 3.5 0 010 7M18 14c2.2.6 3.5 2.4 3.5 6" />
      </>
    ),
  },
  {
    title: "Innovation & Adaptability",
    text: "We encourage new ideas, continuous learning, and the ability to respond thoughtfully to a changing business environment.",
    icon: (
      <>
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
      </>
    ),
  },
  {
    title: "Sustainable Growth",
    text: "We believe in building a strong organizational foundation through consistency, thoughtful decisions, and continuous development.",
    icon: (
      <>
        <path d="M4 20h16" />
        <path d="M8 20v-6M12 20V8M16 20v-9" />
      </>
    ),
  },
];

const Arrow = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3v9ZM6.5 7.77a1.75 1.75 0 1 1 .02-3.5 1.75 1.75 0 0 1-.02 3.5ZM19 18h-3v-4.38c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32V18h-3V9h2.88v1.23h.04c.4-.71 1.38-1.46 2.84-1.46C18.65 8.77 19 10.7 19 13.2V18Z" />
    </svg>
  );
}

const LineIcon = ({ children }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

function PersonCard({ p, badge, onReadMore }) {
  return (
    <article className="lp-card">
      <div className="lp-card__img">
        <img src={p.img} alt={p.name} loading="lazy" />

        {badge && <span className="lp-card__badge">{badge}</span>}
      </div>

      <div className="lp-card__body">
        <h3>{p.name}</h3>
        <p className="lp-card__role">{p.role}</p>
        <p className="lp-card__text">{p.text}</p>

        <div className="lp-card__foot">
          <div className="lp-card__actions">
            <button
              type="button"
              className="lp-readmore"
              onClick={() => onReadMore(p)}
            >
              Read More <Arrow />
            </button>

            <a
              href={p.href}
              className="lp-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.name}'s LinkedIn profile`}
              title={`View ${p.name} on LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function ArticleModal({ person, onClose }) {
  useEffect(() => {
    if (!person) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [person, onClose]);

  if (!person) return null;

  const article = articles[person.name];

  if (!article) return null;

  return (
    <div
      className="lp-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="lp-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lp-modal-title"
      >
        <button
          className="lp-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close article"
        >
          ×
        </button>

        <div className="lp-eyebrow">Leadership · Team Profile</div>

        <h2 id="lp-modal-title">{article.title}</h2>

        <p className="lp-modal__role">
          {person.name} · {person.role}
        </p>

        <div className="lp-modal__content">
          {article.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <a
          className="lp-modal__linkedin"
          href={person.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          View LinkedIn Profile
        </a>
      </section>
    </div>
  );
}

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

.lp {
  --pink: #ec4899;
  --pink-deep: #e0246f;
  --maroon: #9b1b55;
  --ink: #0f172a;
  --body: #5b6472;
  --cream: #faf8f3;
  --mist: #f8fafc;
  --font-head: "Plus Jakarta Sans", sans-serif;
  --font-body: "Inter", sans-serif;

  width: 100%;
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.6;
  overflow-x: clip;
}

.lp *,
.lp *::before,
.lp *::after {
  box-sizing: border-box;
}

.lp h1,
.lp h2,
.lp h3 {
  margin: 0;
  font-family: var(--font-head);
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.lp p {
  margin: 0;
}

.lp img {
  display: block;
  max-width: 100%;
}

.lp-wrap {
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
}

.lp-section {
  padding-top: clamp(56px, 7vw, 100px);
  padding-bottom: clamp(56px, 7vw, 100px);
}

.lp-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--maroon);
}

.lp-eyebrow::before {
  content: "";
  width: 24px;
  height: 2px;
  background: currentColor;
  flex: none;
}

.lp-eyebrow--pink {
  color: var(--pink);
}

.lp-h2 {
  font-size: clamp(1.8rem, 3.4vw, 2.65rem);
  font-weight: 700;
}

/* HERO */

.lp-hero {
  min-height: 90vh;
  min-height: 90svh;
  display: flex;
  align-items: center;
  color: #fff;
  padding: clamp(72px, 9vw, 120px) 0;
  background:
    linear-gradient(
      90deg,
      rgba(11, 16, 32, 0.96) 0%,
      rgba(11, 16, 32, 0.82) 40%,
      rgba(11, 16, 32, 0.45) 100%
    ),
    var(--img) center / cover no-repeat,
    #0b1020;
}

.lp-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 80px);
  align-items: center;
}

.lp-hero h1 {
  max-width: 850px;
  font-weight: 700;
  font-size: clamp(2.35rem, 5vw, 4.25rem);
  line-height: 1.1;
}

.lp-hero h1 span {
  display: block;
}

.lp-hero h1 .accent {
  color: var(--pink);
}

.lp-hero__text {
  max-width: 560px;
  margin-top: 26px !important;
  font-size: clamp(0.93rem, 1.1vw, 1.05rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.82);
}

.lp-glass {
  justify-self: end;
  width: 100%;
  max-width: 310px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 26px 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 18px;
  background:
    radial-gradient(
      120% 60% at 100% 0%,
      rgba(236, 72, 153, 0.35),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
}

.lp-glass__badge {
  align-self: flex-start;
  display: inline-block;
  margin-bottom: 14px;
  padding: 5px 12px;
  font-size: 11px;
  font-weight: 500;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.12);
}

.lp-glass p {
  font-size: 13px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.82);
}

/* INTRO */

.lp-intro {
  background: var(--cream);
}

.lp-intro__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(32px, 6vw, 90px);
  align-items: center;
}

.lp-intro .lp-h2 {
  max-width: 500px;
  margin-bottom: 24px;
}

.lp-intro p {
  max-width: 580px;
  font-size: 14px;
  color: var(--body);
  line-height: 1.85;
}

.lp-intro p + p {
  margin-top: 18px;
}

/* FULL INTRO IMAGE - NO CROPPING */

.lp-feature {
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: auto;
  border-radius: 20px;
  overflow: hidden;
  background: #f1f5f9;
  box-shadow: 0 24px 50px -20px rgba(15, 23, 42, 0.3);
}

.lp-feature img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
}

.lp-feature::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    transparent 45%,
    rgba(8, 8, 24, 0.76)
  );
}

.lp-feature__caption {
  position: absolute;
  right: 24px;
  bottom: 24px;
  z-index: 1;
  text-align: right;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: clamp(1.1rem, 2.4vw, 1.6rem);
  line-height: 1.25;
  color: #fff;
}

.lp-feature__caption span {
  display: block;
  color: #f9a8d4;
}

/* TEAM */

.lp-team {
  background: var(--mist);
}

.lp-team__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 28px;
  margin-bottom: 42px;
}

.lp-team__head > div {
  max-width: 720px;
}

.lp-team__head .lp-h2 {
  margin-bottom: 18px;
}

.lp-team__head p {
  max-width: 580px;
  font-size: 14px;
  color: var(--body);
  line-height: 1.8;
}

.lp-team__note {
  font-size: 12px !important;
  max-width: 260px !important;
}

.lp-team__note::before {
  content: "+";
  color: var(--pink-deep);
  margin-right: 6px;
}

.lp-grid {
  display: grid;
  gap: 24px;
}

.lp-grid--3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.lp-grid--2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 73.5%;
}

.lp-card {
  min-width: 0;
  height: 100%;
  background: #fff;
  border: 1px solid #e8ecf2;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 18px -12px rgba(15, 23, 42, 0.25);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.lp-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 35px -20px rgba(15, 23, 42, 0.32);
}

/* TEAM IMAGES - KEEP THE WHOLE IMAGE VISIBLE */

.lp-card__img,
.lp-grid--2 .lp-card__img {
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: auto;
  background: #f1f5f9;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lp-card__img img,
.lp-grid--2 .lp-card__img img {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
  transition: none;
}

.lp-card:hover .lp-card__img img {
  transform: none;
}

.lp-card__badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 11px;
  font-size: 10px;
  font-weight: 600;
  color: var(--maroon);
  background: rgba(255, 255, 255, 0.94);
  border-radius: 999px;
}

.lp-card__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 22px;
}

.lp-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  overflow-wrap: anywhere;
}

.lp-card__role {
  margin-top: 6px !important;
  font-size: 12px;
  font-weight: 600;
  color: var(--maroon);
}

.lp-card__text {
  margin-top: 14px !important;
  font-size: 12px;
  line-height: 1.8;
  color: var(--body);
}

.lp-card__foot {
  margin-top: auto;
  padding-top: 20px;
}

.lp-card__foot::before {
  content: "";
  display: block;
  height: 1px;
  background: #eef1f5;
  margin-bottom: 14px;
}

.lp-card__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.lp-readmore {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 0;
  border: 0;
  background: transparent;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  color: var(--maroon);
  cursor: pointer;
  transition: gap 0.2s ease;
}

.lp-readmore:hover {
  gap: 11px;
}

.lp-readmore:focus-visible,
.lp-linkedin:focus-visible {
  outline: 2px solid var(--pink);
  outline-offset: 4px;
  border-radius: 4px;
}

.lp-linkedin {
  width: 36px;
  height: 36px;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: #0a66c2;
  border: 1px solid #d9e7f5;
  border-radius: 9px;
  background: #f2f8ff;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.lp-linkedin:hover {
  color: #fff;
  background: #0a66c2;
  transform: translateY(-2px);
}

.lp-divider {
  height: 1px;
  background: #e5e9f0;
  margin: 52px 0 36px;
}

.lp-subhead {
  margin-bottom: 24px;
}

.lp-subhead .lp-eyebrow {
  margin-bottom: 0;
}

/* VALUES */

.lp-values {
  background: var(--cream);
}

.lp-values .lp-h2 {
  margin-bottom: 48px;
}

.lp-values__grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 28px;
}

.lp-value__icon {
  color: var(--maroon);
  margin-bottom: 20px;
}

.lp-value h3 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.lp-value p {
  font-size: 12px;
  line-height: 1.8;
  color: var(--body);
}

/* FUTURE */

.lp-future {
  color: #fff;
  background:
    linear-gradient(
      90deg,
      rgba(34, 10, 48, 0.92) 0%,
      rgba(40, 12, 56, 0.7) 55%,
      rgba(40, 12, 56, 0.4) 100%
    ),
    var(--img) center / cover no-repeat,
    #2a0f3c;
}

.lp-future .lp-h2 {
  max-width: 700px;
  margin-bottom: 26px;
  font-size: clamp(2rem, 4vw, 2.9rem);
}

.lp-future__copy p {
  max-width: 620px;
  font-size: 14px;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.85);
}

.lp-future__copy p + p {
  margin-top: 18px;
}

.lp-future__brand {
  margin-top: 40px;
}

.lp-future__brand strong {
  display: block;
  font-family: var(--font-head);
  font-size: 1rem;
  font-weight: 700;
}

.lp-future__brand em {
  display: block;
  margin-top: 5px;
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.75);
}

/* ARTICLE MODAL */

.lp-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: rgba(9, 13, 28, 0.72);
  backdrop-filter: blur(6px);
  overflow-y: auto;
  animation: lp-fade-in 0.2s ease;
}

.lp-modal {
  position: relative;
  width: min(100%, 800px);
  max-height: min(85vh, 900px);
  max-height: min(85dvh, 900px);
  overflow-y: auto;
  padding: clamp(24px, 5vw, 48px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.25);
  animation: lp-modal-up 0.25s ease;
}

.lp-modal__close {
  position: sticky;
  top: 0;
  float: right;
  z-index: 2;
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: -8px -8px 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  background: #fff;
  color: #111827;
  font-size: 25px;
  line-height: 1;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.lp-modal__close:hover {
  background: var(--maroon);
  color: #fff;
}

.lp-modal h2 {
  clear: both;
  max-width: 680px;
  margin-top: 8px;
  font-size: clamp(1.5rem, 3vw, 2.35rem);
  line-height: 1.25;
}

.lp-modal__role {
  margin-top: 14px !important;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8ecf2;
  color: var(--maroon);
  font-size: 13px;
  font-weight: 600;
}

.lp-modal__content {
  padding-top: 22px;
}

.lp-modal__content p {
  margin-bottom: 18px;
  color: #4b5563;
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.9;
}

.lp-modal__linkedin {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
  padding: 12px 16px;
  border-radius: 10px;
  background: #0a66c2;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;
}

.lp-modal__linkedin:hover {
  background: #084d91;
}

.lp-modal__linkedin svg {
  width: 19px;
  height: 19px;
}

@keyframes lp-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes lp-modal-up {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.99);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* RESPONSIVE PADDING */

@media (min-width: 640px) {
  .lp-wrap {
    padding-left: 24px;
    padding-right: 24px;
  }
}

@media (min-width: 768px) {
  .lp-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (min-width: 1024px) {
  .lp-wrap {
    padding-left: 100px;
    padding-right: 100px;
  }
}

/* TABLET */

@media (max-width: 1100px) {
  .lp-values__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lp-grid--2 {
    width: 100%;
  }
}

@media (max-width: 900px) {
  .lp-hero {
    min-height: auto;
    background:
      linear-gradient(
        180deg,
        rgba(11, 16, 32, 0.92),
        rgba(11, 16, 32, 0.75)
      ),
      var(--img) center / cover no-repeat,
      #0b1020;
  }

  .lp-hero__grid,
  .lp-intro__grid {
    grid-template-columns: 1fr;
  }

  .lp-glass {
    justify-self: start;
    max-width: 420px;
    min-height: auto;
  }

  .lp-grid--3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lp-team__head {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 36px;
  }

  .lp-team__note {
    max-width: 100% !important;
  }

  .lp-values__grid {
    gap: 32px 24px;
  }
}

/* MOBILE */

@media (max-width: 640px) {
  .lp-section {
    padding-top: 56px;
    padding-bottom: 56px;
  }

  .lp-hero {
    padding-top: 88px;
    padding-bottom: 64px;
  }

  .lp-hero h1 {
    font-size: clamp(2.1rem, 9vw, 3rem);
  }

  .lp-hero__text {
    margin-top: 20px !important;
  }

  .lp-glass {
    max-width: 100%;
  }

  .lp-intro__grid {
    gap: 30px;
  }

  .lp-feature {
    height: auto;
    aspect-ratio: auto;
    border-radius: 16px;
  }

  .lp-feature img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .lp-team__head {
    gap: 16px;
    margin-bottom: 28px;
  }

  .lp-grid--3,
  .lp-grid--2 {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .lp-card__img,
  .lp-grid--2 .lp-card__img {
    height: auto;
    aspect-ratio: auto;
  }

  .lp-card__img img,
  .lp-grid--2 .lp-card__img img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .lp-card__body {
    padding: 20px;
  }

  .lp-divider {
    margin: 36px 0 28px;
  }

  .lp-values .lp-h2 {
    margin-bottom: 36px;
  }

  .lp-values__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 20px;
  }

  .lp-value__icon {
    margin-bottom: 14px;
  }

  .lp-future__brand {
    margin-top: 30px;
  }

  .lp-modal-backdrop {
    align-items: flex-start;
    padding: 12px;
  }

  .lp-modal {
    max-height: 92vh;
    max-height: 92dvh;
    padding: 24px 20px;
    border-radius: 16px;
  }

  .lp-modal__content p {
    font-size: 13px;
    line-height: 1.8;
  }
}

@media (max-width: 420px) {
  .lp-values__grid {
    grid-template-columns: 1fr;
  }

  .lp-card__img,
  .lp-grid--2 .lp-card__img {
    height: auto;
    aspect-ratio: auto;
  }

  .lp-modal-backdrop {
    padding: 8px;
  }

  .lp-modal {
    padding: 20px 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .lp *,
  .lp *::before,
  .lp *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
`;

export default function Leadership() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div className="lp">
      <style>{styles}</style>

      {/* HERO SECTION */}
      <section
        className="lp-hero"
        style={{ "--img": `url("${heroBg}")` }}
      >
        <div className="lp-wrap">
          <div className="lp-hero__grid">
            <div>
              <div className="lp-eyebrow lp-eyebrow--pink">
                Meet Our Leadership
              </div>

              <h1>
                <span>People Behind</span>
                <span className="accent">Our Purpose</span>
              </h1>

              <p className="lp-hero__text">
                Meet the people shaping our vision, guiding our teams, and
                helping businesses move forward through technology,
                collaboration, and purposeful innovation.
              </p>
            </div>

            <div className="lp-glass">
              <span className="lp-glass__badge">Our Leadership</span>
              <p>
                We bring people, ideas, and technology together to build
                meaningful solutions and create lasting business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="lp-intro lp-section">
        <div className="lp-wrap">
          <div className="lp-intro__grid">
            <div>
              <div className="lp-eyebrow">Who We Are</div>

              <h2 className="lp-h2">
                Leadership With Purpose. Technology With Impact.
              </h2>

              <p>
                At TechTorch Solutions, we believe strong leadership starts
                with a clear vision, responsible decisions, and a commitment
                to people. Our team brings together different strengths to
                help organizations navigate business challenges and embrace
                digital opportunities.
              </p>

              <p>
                By combining strategic thinking, operational discipline, and
                continuous improvement, we work to build a culture where
                collaboration and innovation can thrive.
              </p>
            </div>

            <div className="lp-feature">
              <img
                src={visionImg}
                alt="Team collaborating in a meeting room"
                loading="lazy"
              />

              <div className="lp-feature__caption">
                Better Together
                <span>Building What's Next</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="lp-team lp-section">
        <div className="lp-wrap">
          <div className="lp-team__head">
            <div>
              <div className="lp-eyebrow">Our Leadership</div>

              <h2 className="lp-h2">Meet the People Leading the Way</h2>

              <p>
                Our leadership team brings together strategic direction,
                organizational management, and operational expertise to
                support our shared goals.
              </p>
            </div>

            <p className="lp-team__note">
              Click Read More to learn about each team member.
            </p>
          </div>

          <div className="lp-grid lp-grid--3">
            {leaders.map((person) => (
              <PersonCard
                key={person.name}
                p={person}
                onReadMore={setSelectedPerson}
              />
            ))}
          </div>

          <div className="lp-divider" />

          <div className="lp-subhead">
            <div className="lp-eyebrow">Our Team</div>
          </div>

          <div className="lp-grid lp-grid--2">
            {serviceTeam.map((person) => (
              <PersonCard
                key={person.name}
                p={person}
                badge="PEOPLE & CULTURE"
                onReadMore={setSelectedPerson}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="lp-values lp-section">
        <div className="lp-wrap">
          <div className="lp-eyebrow">What Guides Us</div>

          <h2 className="lp-h2">The Values Behind Our Decisions</h2>

          <div className="lp-values__grid">
            {values.map((value) => (
              <article className="lp-value" key={value.title}>
                <div className="lp-value__icon">
                  <LineIcon>{value.icon}</LineIcon>
                </div>

                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE SECTION */}
      <section
        className="lp-future lp-section"
        style={{ "--img": `url("${futureBg}")` }}
      >
        <div className="lp-wrap">
          <div className="lp-future__copy">
            <div className="lp-eyebrow lp-eyebrow--pink">
              Looking Ahead
            </div>

            <h2 className="lp-h2">
              Building the Future, One Meaningful Solution at a Time
            </h2>

            <p>
              We believe progress happens when people share a vision, embrace
              change, and turn ideas into practical solutions. Our focus
              remains on building strong relationships, improving how work
              gets done, and creating technology that serves real business
              needs.
            </p>

            <p>
              Together, we continue learning, adapting, and working toward
              sustainable growth for our team, our clients, and the
              businesses we support.
            </p>

            <div className="lp-future__brand">
              <strong>TechTorch Solutions</strong>
              <em>Turning business challenges into digital possibilities.</em>
            </div>
          </div>
        </div>
      </section>

      {/* READ MORE ARTICLE MODAL */}
      <ArticleModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </div>
  );
}