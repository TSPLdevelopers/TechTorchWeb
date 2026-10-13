// 👇 Apni boardroom image yahan import karo (path apne project ke hisaab se badlo)
import heroBg from "../assets/boardroom.jpg";

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap");

.lead-hero {
  --pink: #ec4899;
  --font-head: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;

  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: clamp(48px, 8vw, 110px) clamp(20px, 5vw, 80px);
  color: #fff;
  font-family: var(--font-body);
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(11, 16, 32, 0.96) 0%, rgba(11, 16, 32, 0.82) 40%, rgba(11, 16, 32, 0.45) 100%),
    var(--hero-img) center / cover no-repeat,
    #0b1020;
}
.lead-hero *, .lead-hero *::before, .lead-hero *::after { box-sizing: border-box; }

.lead-hero__inner {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 80px);
  align-items: center;
}

.lead-hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--pink);
}
.lead-hero__eyebrow::before { content: ""; width: 24px; height: 2px; background: var(--pink); }

.lead-hero__title {
  margin: 0;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: clamp(2.4rem, 5.2vw, 4.1rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
}
.lead-hero__title span { display: block; }
.lead-hero__title .accent { color: var(--pink); }

.lead-hero__text {
  max-width: 560px;
  margin: 28px 0 0;
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.82);
}

.lead-hero__card {
  justify-self: end;
  width: 100%;
  max-width: 310px;
  padding: 150px 16px 20px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  background:
    radial-gradient(120% 60% at 100% 0%, rgba(236, 72, 153, 0.35), transparent 60%),
    rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.lead-hero__badge {
  display: inline-block;
  margin-bottom: 14px;
  padding: 5px 14px;
  font-size: 11.5px;
  font-weight: 500;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.12);
}
.lead-hero__card p {
  margin: 0;
  font-size: 12px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.8);
}

/* Tablet */
@media (max-width: 900px) {
  .lead-hero {
    background:
      linear-gradient(180deg, rgba(11, 16, 32, 0.92), rgba(11, 16, 32, 0.75)),
      var(--hero-img) center / cover no-repeat,
      #0b1020;
  }
  .lead-hero__inner { grid-template-columns: 1fr; }
  .lead-hero__card { justify-self: start; max-width: 360px; padding-top: 24px; }
}

/* Mobile */
@media (max-width: 480px) {
  .lead-hero { min-height: auto; }
  .lead-hero__eyebrow { margin-bottom: 16px; }
  .lead-hero__text { margin-top: 20px; }
  .lead-hero__card { max-width: 100%; }
}
`;

export default function Leadership() {
  return (
    <>
      <style>{styles}</style>

      <section
        className="lead-hero"
        aria-labelledby="leadership-title"
        style={{ "--hero-img": `url(${heroBg})` }}
      >
        <div className="lead-hero__inner">
          <div className="lead-hero__content">
            <div className="lead-hero__eyebrow">Leadership</div>

            <h1 id="leadership-title" className="lead-hero__title">
              <span>Guiding Vision.</span>
              <span className="accent">Inspiring Innovation.</span>
              <span>Building the Future.</span>
            </h1>

            <p className="lead-hero__text">
              At TechTorch, leadership is about creating a clear vision,
              fostering innovation, and building an organization prepared for
              the future. Our leadership philosophy is rooted in strategic
              thinking, responsible decision-making, and a commitment to
              continuous progress.
            </p>
          </div>

          <aside className="lead-hero__card">
            <span className="lead-hero__badge">Corporate Governance</span>
            <p>
              Strategic direction guided by integrity, driving impactful results
              worldwide.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}