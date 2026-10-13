/* ------------------------------------------------------------------
   👇 IMAGES — apne system ki images project ke src/assets folder mein
   rakho aur neeche ke paths/file names apne hisaab se badlo.
------------------------------------------------------------------- */
import heroBg from "/leadership.png";      // top hero background
import visionImg from "/meetingroom.png";   // "Better Ideas. Stronger Together." image
import siddharthImg from "/sidhart.png";
import amitImg from "/amitkaur.png";
import pradipImg from "/pradeep.png";
// import riyaImg from "/riya.png";
 import anshikaImg from "/anshika.png";
import futureBg from "/future.png";         // last purple section background

const leaders = [
  {
    img: siddharthImg,
    name: "Siddharth Pathak",
    role: "Founder & CEO",
    text: "Leading TechTorch's overarching strategic vision, long-term roadmap, and spearheading executive innovation across global digital operations.",
  },
  {
    img: amitImg,
    name: "Amit Gaur",
    role: "Administrative Director",
    text: "Overseeing organizational governance, corporate infrastructure, and ensuring seamless administrative and institutional efficiency.",
  },
  {
    img: pradipImg,
    name: "Pradip Pandey",
    role: "Operations Director (BPO | BPS)",
    text: "Spearheading business process outsourcing and solutions, optimizing operational workflows, client delivery, and scalable enterprise performance.",
  },
];

const serviceTeam = [
//   {
//     img: riyaImg,
//     name: "Riya Mishra",
//     role: "Human Resource Director",
//     text: "Driving people strategy, talent acquisition, organizational culture, leadership development, and employee excellence.",
//   },
  {
    img: anshikaImg,
    name: "Anshika Pandey",
    role: "Human Resource Executive",
    text: "Managing employee engagement, onboarding operations, talent management, and supporting day-to-day HR excellence.",
  },
];

const svg = (children) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const values = [
  {
    title: "Strategic Vision",
    text: "We believe in setting clear priorities, understanding emerging opportunities, and making decisions with a long-term perspective.",
    icon: svg(<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>),
  },
  {
    title: "Integrity & Accountability",
    text: "We value transparency, ethical conduct, responsible leadership, and ownership of decisions.",
    icon: svg(<><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></>),
  },
  {
    title: "People & Collaboration",
    text: "We recognize the importance of shared knowledge, mutual respect, and an environment where people can contribute and grow.",
    icon: svg(<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><path d="M16 4.5a3.5 3.5 0 010 7M18 14c2.2.6 3.5 2.4 3.5 6" /></>),
  },
  {
    title: "Innovation & Adaptability",
    text: "We encourage new ideas, continuous learning, and the ability to respond thoughtfully to a changing business environment.",
    icon: svg(<><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" /></>),
  },
  {
    title: "Sustainable Growth",
    text: "We believe in building a strong organizational foundation through consistency, thoughtful decisions, and continuous development.",
    icon: svg(<><path d="M4 20h16" /><path d="M8 20v-6M12 20V8M16 20v-9" /></>),
  },
];

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function PersonCard({ p, badge }) {
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
          <a href="#" className="lp-readmore">Read More <Arrow /></a>
        </div>
      </div>
    </article>
  );
}

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap");

.lp {
  --pink: #ec4899;
  --pink-deep: #e0246f;
  --maroon: #9b1b55;
  --ink: #0f172a;
  --body: #5b6472;
  --cream: #faf8f3;
  --mist: #f8fafc;
  --font-head: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  font-family: var(--font-body);
  color: var(--ink);
  line-height: 1.6;
  overflow-x: hidden;
}
.lp *, .lp *::before, .lp *::after { box-sizing: border-box; }
.lp h1, .lp h2, .lp h3 { font-family: var(--font-head); margin: 0; letter-spacing: -0.03em; line-height: 1.1; }
.lp p { margin: 0; }
.lp img { display: block; max-width: 100%; }

.lp-wrap {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 80px);
}
.lp-section { padding: clamp(56px, 9vw, 110px) 0; }

.lp-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-family: var(--font-body);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--maroon);
}
.lp-eyebrow::before { content: ""; width: 24px; height: 2px; background: currentColor; flex: none; }
.lp-eyebrow--pink { color: var(--pink); }

.lp-h2 { font-size: clamp(1.9rem, 3.6vw, 2.6rem); font-weight: 700; }

/* ---------- Hero ---------- */
.lp-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: #fff;
  padding: clamp(48px, 8vw, 110px) 0;
  background:
    linear-gradient(90deg, rgba(11,16,32,.96) 0%, rgba(11,16,32,.82) 40%, rgba(11,16,32,.45) 100%),
    var(--img) center / cover no-repeat, #0b1020;
}
.lp-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 80px);
  align-items: center;
}
.lp-hero h1 { font-weight: 700; font-size: clamp(2.4rem, 5.2vw, 4.1rem); line-height: 1.08; }
.lp-hero h1 span { display: block; }
.lp-hero h1 .accent { color: var(--pink); }
.lp-hero__text {
  max-width: 560px;
  margin-top: 28px;
  font-size: clamp(.95rem, 1.2vw, 1.05rem);
  line-height: 1.7;
  color: rgba(255,255,255,.82);
}
.lp-glass {
  justify-self: end;
  width: 100%;
  max-width: 310px;
  padding: 150px 16px 20px;
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 18px;
  background: radial-gradient(120% 60% at 100% 0%, rgba(236,72,153,.35), transparent 60%), rgba(255,255,255,.06);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
}
.lp-glass__badge {
  display: inline-block;
  margin-bottom: 14px;
  padding: 5px 14px;
  font-size: 11.5px;
  font-weight: 500;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.22);
  background: rgba(255,255,255,.12);
}
.lp-glass p { font-size: 12px; line-height: 1.55; color: rgba(255,255,255,.8); }

/* ---------- Intro ---------- */
.lp-intro { background: var(--cream); }
.lp-intro__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(32px, 6vw, 90px);
  align-items: center;
}
.lp-intro .lp-h2 { max-width: 420px; margin-bottom: 26px; }
.lp-intro p { font-size: 14.5px; color: var(--body); line-height: 1.75; max-width: 520px; }
.lp-intro p + p { margin-top: 18px; }
.lp-feature {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 50px -20px rgba(15,23,42,.45);
  aspect-ratio: 1.34 / 1;
}
.lp-feature img { width: 100%; height: 100%; object-fit: cover; }
.lp-feature::after {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgba(8,8,24,.75));
}
.lp-feature__caption {
  position: absolute;
  right: clamp(16px, 3vw, 28px);
  bottom: clamp(16px, 3vw, 26px);
  z-index: 1;
  text-align: right;
  font-family: var(--font-head);
  font-weight: 600;
  font-size: clamp(1.1rem, 2.4vw, 1.6rem);
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #fff;
}
.lp-feature__caption span { display: block; color: #f9a8d4; }

/* ---------- Team ---------- */
.lp-team { background: var(--mist); }
.lp-team__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 48px;
}
.lp-team__head .lp-h2 { margin-bottom: 18px; }
.lp-team__head p { font-size: 14px; color: var(--body); max-width: 440px; line-height: 1.7; }
.lp-team__note { font-size: 12px !important; max-width: none !important; white-space: nowrap; }
.lp-team__note::before { content: "+"; color: var(--pink-deep); margin-right: 6px; }

.lp-grid { display: grid; gap: 24px; }
.lp-grid--3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.lp-grid--2 { grid-template-columns: repeat(2, minmax(0, 1fr)); width: 73.5%; }

.lp-card {
  background: #fff;
  border: 1px solid #e8ecf2;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 18px -12px rgba(15,23,42,.25);
  display: flex;
  flex-direction: column;
}
.lp-card__img { position: relative; aspect-ratio: 1.46 / 1; background: #1f2937; }
.lp-grid--2 .lp-card__img { aspect-ratio: 1.68 / 1; }
.lp-card__img img { width: 100%; height: 100%; object-fit: cover; }
.lp-card__badge {
  position: absolute; top: 12px; right: 12px;
  padding: 3px 12px;
  font-size: 10.5px; font-weight: 500;
  color: var(--maroon);
  background: rgba(255,255,255,.92);
  border-radius: 999px;
}
.lp-card__body { padding: 22px 22px 18px; display: flex; flex-direction: column; flex: 1; }
.lp-card h3 { font-size: 1.02rem; font-weight: 700; letter-spacing: -0.01em; }
.lp-card__role { margin-top: 4px; font-size: 12px; font-weight: 500; color: var(--maroon); }
.lp-card__text { margin-top: 14px; font-size: 12px; line-height: 1.7; color: var(--body); }
.lp-card__foot { margin-top: auto; padding-top: 18px; }
.lp-card__foot::before { content: ""; display: block; height: 1px; background: #eef1f5; margin-bottom: 14px; }
.lp-readmore {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 12px; font-weight: 500;
  color: var(--maroon); text-decoration: none;
}
.lp-readmore:hover { text-decoration: underline; }
.lp-readmore:focus-visible { outline: 2px solid var(--pink); outline-offset: 3px; border-radius: 4px; }

.lp-divider { height: 1px; background: #e5e9f0; margin: 52px 0 36px; }
.lp-subhead { margin-bottom: 24px; }
.lp-subhead .lp-eyebrow { margin-bottom: 0; }

/* ---------- Values ---------- */
.lp-values { background: var(--cream); }
.lp-values .lp-h2 { margin-bottom: 56px; }
.lp-values__grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 28px; }
.lp-value__icon { color: var(--maroon); margin-bottom: 22px; }
.lp-value h3 { font-size: .95rem; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 10px; line-height: 1.25; }
.lp-value p { font-size: 12px; line-height: 1.65; color: var(--body); }

/* ---------- Future ---------- */
.lp-future {
  color: #fff;
  background:
    linear-gradient(90deg, rgba(34,10,48,.92) 0%, rgba(40,12,56,.7) 55%, rgba(40,12,56,.4) 100%),
    var(--img) center / cover no-repeat, #2a0f3c;
}
.lp-future .lp-h2 { max-width: 640px; margin-bottom: 28px; font-size: clamp(2rem, 4vw, 2.9rem); }
.lp-future__copy p { font-size: 14px; line-height: 1.75; color: rgba(255,255,255,.85); max-width: 600px; }
.lp-future__copy p + p { margin-top: 18px; }
.lp-future__brand { margin-top: 44px; }
.lp-future__brand strong { display: block; font-family: var(--font-head); font-size: 1rem; font-weight: 700; }
.lp-future__brand em { display: block; margin-top: 4px; font-size: 11.5px; color: rgba(255,255,255,.75); }

/* ---------- Responsive ---------- */
@media (max-width: 1100px) {
  .lp-values__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .lp-grid--2 { width: 100%; }
}
@media (max-width: 900px) {
  .lp-hero {
    background:
      linear-gradient(180deg, rgba(11,16,32,.92), rgba(11,16,32,.75)),
      var(--img) center / cover no-repeat, #0b1020;
  }
  .lp-hero__grid, .lp-intro__grid { grid-template-columns: 1fr; }
  .lp-glass { justify-self: start; max-width: 360px; padding-top: 24px; }
  .lp-grid--3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .lp-team__head { flex-direction: column; align-items: flex-start; margin-bottom: 36px; }
  .lp-team__note { white-space: normal; }
}
@media (max-width: 640px) {
  .lp-hero { min-height: auto; }
  .lp-grid--3, .lp-grid--2 { grid-template-columns: 1fr; }
  .lp-values__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px 20px; }
  .lp-glass { max-width: 100%; }
  .lp-future__brand { margin-top: 32px; }
}
@media (max-width: 420px) {
  .lp-values__grid { grid-template-columns: 1fr; }
}
`;

export default function Leadership() {
  return (
    <main className="lp">
      <style>{styles}</style>

      {/* 1. HERO */}
      <section className="lp-hero" style={{ "--img": `url(${heroBg})` }} aria-labelledby="lp-hero-title">
        <div className="lp-wrap lp-hero__grid">
          <div>
            <div className="lp-eyebrow lp-eyebrow--pink">Leadership</div>
            <h1 id="lp-hero-title">
              <span>Guiding Vision.</span>
              <span className="accent">Inspiring Innovation.</span>
              <span>Building the Future.</span>
            </h1>
            <p className="lp-hero__text">
              At TechTorch, leadership is about creating a clear vision, fostering innovation,
              and building an organization prepared for the future. Our leadership philosophy is
              rooted in strategic thinking, responsible decision-making, and a commitment to
              continuous progress.
            </p>
          </div>
          <aside className="lp-glass">
            <span className="lp-glass__badge">Corporate Governance</span>
            <p>Strategic direction guided by integrity, driving impactful results worldwide.</p>
          </aside>
        </div>
      </section>

      {/* 2. INTRO */}
      <section className="lp-section lp-intro">
        <div className="lp-wrap lp-intro__grid">
          <div>
            <div className="lp-eyebrow">Leadership at TechTorch</div>
            <h2 className="lp-h2">A Vision Built on Purpose and Progress.</h2>
            <p>
              The direction of an organization is shaped by its vision, its values, and the people
              responsible for bringing them to life. At TechTorch, we believe leadership means
              looking beyond immediate challenges, recognizing future opportunities, and
              encouraging a mindset of continuous improvement.
            </p>
            <p>
              Our leadership philosophy reflects our commitment to creating a culture that values
              innovation, accountability, professional growth, and long-term business development.
            </p>
          </div>
          <figure className="lp-feature" style={{ margin: 0 }}>
            <img src={visionImg} alt="Leadership team in a boardroom meeting" />
            <figcaption className="lp-feature__caption">
              Better Ideas.<span>Stronger Together.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 3. TEAM */}
      <section className="lp-section lp-team">
        <div className="lp-wrap">
          <div className="lp-team__head">
            <div>
              <div className="lp-eyebrow">Our Leadership Team</div>
              <h2 className="lp-h2">The People Behind Our Vision</h2>
              <p style={{ marginTop: 18 }}>
                Leadership brings vision and execution together. This section introduces the
                individuals whose experience, responsibilities, and leadership help guide
                TechTorch Solutions.
              </p>
            </div>
            <p className="lp-team__note">
              Experienced leaders. A shared commitment to innovation and growth.
            </p>
          </div>

          <div className="lp-grid lp-grid--3">
            {leaders.map((p) => <PersonCard key={p.name} p={p} />)}
          </div>

          <div className="lp-divider" />

          <div className="lp-subhead">
            <div className="lp-eyebrow">Corporate Service Team</div>
          </div>
          <div className="lp-grid lp-grid--2">
            {serviceTeam.map((p) => <PersonCard key={p.name} p={p} badge="Corporate Service Team" />)}
          </div>
        </div>
      </section>

      {/* 4. VALUES */}
      <section className="lp-section lp-values">
        <div className="lp-wrap">
          <div className="lp-eyebrow">Our Leadership Principles</div>
          <h2 className="lp-h2">The Values That Guide Our Direction</h2>
          <div className="lp-values__grid">
            {values.map((v) => (
              <div className="lp-value" key={v.title}>
                <div className="lp-value__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FUTURE */}
      <section className="lp-section lp-future" style={{ "--img": `url(${futureBg})` }}>
        <div className="lp-wrap">
          <div className="lp-eyebrow lp-eyebrow--pink">Looking Toward the Future</div>
          <h2 className="lp-h2">Leading Change. Creating Possibilities.</h2>
          <div className="lp-future__copy">
            <p>
              As TechTorch continues to evolve, our focus remains on strengthening our
              organizational vision, embracing new opportunities, and building a culture that
              supports progress.
            </p>
            <p>
              We believe the future is shaped by leaders who think ahead, act responsibly, and
              inspire others to move forward with confidence.
            </p>
          </div>
          <div className="lp-future__brand">
            <strong>TechTorch Solutions</strong>
            <em>Innovation in Action, Solutions Beyond Imagination.</em>
          </div>
        </div>
      </section>
    </main>
  );
}