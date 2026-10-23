import React, { useState } from "react";
import {
  Lightbulb,
  Users,
  RefreshCw,
  Target,
  Rocket,
  ArrowRight,
} from "lucide-react";

const principles = [
  {
    Icon: Lightbulb,
    title: "Explore New Perspectives",
    description:
      "Look beyond conventional approaches to uncover opportunities for growth.",
  },
  {
    Icon: Users,
    title: "Encourage Creative Thinking",
    description:
      "Welcome different viewpoints and ideas that challenge assumptions.",
  },
  {
    Icon: RefreshCw,
    title: "Embrace Change",
    description:
      "Stay open to new ways of thinking in an evolving digital world.",
  },
  {
    Icon: Target,
    title: "Move Forward with Purpose",
    description:
      "Connect ideas with clear objectives and practical value.",
  },
];

/* Name: numbers type ya paste nahi ho paayenge */
const handleNameInput = (e) => {
  e.target.value = e.target.value.replace(/[0-9]/g, "");
};

export default function IdeasPage() {
  const [phoneError, setPhoneError] = useState("");
  const [sent, setSent] = useState(false);

  const PHONE_ERROR = "Please enter a valid 10-digit number";

  /* Phone: sirf digits, pehla digit 6-9, max 10 digits */
  const handlePhoneInput = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .replace(/^[0-5]+/, "")
      .slice(0, 10);
    e.target.value = value;

    // Jab tak 10 digit poore nahi, error dikhao (khali ho to nahi)
    setPhoneError(value.length > 0 && value.length < 10 ? PHONE_ERROR : "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const phone = form.elements.phone.value;

    if (phone && phone.length < 10) {
      setPhoneError(PHONE_ERROR);
      form.elements.phone.focus();
      return;
    }

    // Connect your backend/API here.

    setSent(true);
    setPhoneError("");
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .ideas-page {
          width: 100%;
          overflow: hidden;
          color: #171d2b;
          background: #fff;
          font-family: Inter, sans-serif;
        }

        .ideas-page,
        .ideas-page * {
          box-sizing: border-box;
        }

        .ideas-page img {
          max-width: 100%;
        }

        .ideas-approach-copy,
        .ideas-vision-copy,
        .ideas-principles-intro,
        .ideas-closing-copy,
        .ideas-principle {
          min-width: 0;
        }


        .ideas-container {
          width: 100%;
          max-width: none;
          margin: 0;
          padding-inline: 16px;
          box-sizing: border-box;
        }

        /* ---------- HERO (responsive grid) ---------- */
        .ideas-hero {
          position: relative;
          min-height: 455px;
          overflow: hidden;
          color: #fff;
          background-color: #0d1017;
          background-image: url("/Idea1.png");
          background-repeat: no-repeat;
          background-position: right center;
          background-size: 80% auto;
        }

        .ideas-hero::before {
          position: absolute;
          inset: 0;
          content: "";
          background: linear-gradient(
            90deg,
            rgba(13, 16, 23, 0.95) 0%,
            rgba(13, 16, 23, 0.75) 35%,
            rgba(13, 16, 23, 0.15) 70%,
            rgba(13, 16, 23, 0) 100%
          );
          pointer-events: none;
        }

        .ideas-hero-inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          width: 100%;
          max-width: none;
          min-height: 455px;
          margin: 0;
          padding: 62px 16px;
          box-sizing: border-box;
        }

        .ideas-hero-copy {
          width: 58%;
          max-width: 660px;
          min-width: 0;
        }

        .ideas-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 22px;
          color: #c42b78;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.2px;
          line-height: 1.5;
        }

        .ideas-eyebrow span {
          display: inline-block;
          width: 18px;
          height: 2px;
          flex: 0 0 18px;
          background: currentColor;
        }

        .ideas-eyebrow-light {
          color: #dc348b;
        }

        .ideas-page h1,
        .ideas-page h2 {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 700;
          letter-spacing: -1.2px;
        }

        .ideas-hero h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(34px, 3.2vw, 48px);
          line-height: 1.2;
        }

        .ideas-hero h1 span {
          color: #d52d82;
        }

        .ideas-hero-description {
          max-width: 600px;
          margin: 22px 0 28px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 14px;
          line-height: 1.75;
        }

        .ideas-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 42px;
          padding: 0 20px;
          border-radius: 4px;
          color: #fff;
          background: #a20d5c;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .ideas-button:hover {
          background: #bd1b70;
        }

        .ideas-approach,
        .ideas-vision {
          padding-block: 78px;
          background: #fff;
        }

        .ideas-approach-grid,
        .ideas-vision-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
          align-items: center;
          gap: clamp(38px, 6vw, 84px);
        }

        .ideas-page h2 {
          margin: 0 0 20px;
          font-size: clamp(28px, 2.25vw, 38px);
          line-height: 1.2;
        }

        .ideas-page p:not(.ideas-eyebrow) {
          color: #707989;
          font-size: 14px;
          line-height: 1.75;
        }

        .ideas-approach-image,
        .ideas-vision-image {
          width: 100%;
          height: clamp(240px, 27vw, 390px);
          overflow: hidden;
          border-radius: 11px;
          background: #eef0f3;
          box-shadow: 0 8px 18px rgba(20, 24, 36, 0.12);
        }

        .ideas-approach-image img,
        .ideas-vision-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ideas-values {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 24px;
          padding-top: 22px;
          border-top: 1px solid #ececf0;
        }

        .ideas-values > div {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-inline: 15px;
          border-right: 1px solid #ececf0;
        }

        .ideas-values > div:first-child {
          padding-left: 0;
        }

        .ideas-values > div:last-child {
          padding-right: 0;
          border-right: 0;
        }

        .ideas-values strong {
          color: #a41c64;
          font-size: 13px;
        }

        .ideas-values small {
          color: #7a8290;
          font-size: 11px;
          line-height: 1.45;
        }

        .ideas-principles {
          padding-block: 70px;
          background: #faf9f5;
        }

        .ideas-principles-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 2.8fr);
          align-items: start;
          gap: 42px;
        }

        .ideas-principles-list {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 25px;
          padding-top: 5px;
        }

        .ideas-principle {
          min-width: 0;
        }

        .ideas-principle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
          margin-bottom: 17px;
          border: 1px solid #f5d5e6;
          border-radius: 50%;
          color: #bf2c78;
          background: #fffafc;
        }

        .ideas-principle h3 {
          margin: 0 0 12px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.45;
        }

        .ideas-principle p {
          margin: 0;
          font-size: 12px !important;
          line-height: 1.65 !important;
        }

        .ideas-vision-grid {
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(42px, 7vw, 90px);
        }

        .ideas-vision-image {
          height: clamp(260px, 27vw, 390px);
        }

        .ideas-contact {
          padding: 76px 20px 82px;
          background: #eef6ff;
        }

        .ideas-contact-header {
          max-width: 560px;
          margin: 0 auto 34px;
          text-align: center;
        }

        .ideas-eyebrow-centered {
          justify-content: center;
          margin-bottom: 15px;
        }

        .ideas-contact h2 {
          margin-bottom: 12px;
          font-size: clamp(28px, 2.3vw, 36px);
        }

        .ideas-contact-header > p:last-child {
          margin: 0;
        }

        .ideas-contact-form {
          width: 100%;
          max-width: 620px;
          margin: 0 auto;
          padding: 34px 38px;
          border: 1px solid #edf0f5;
          border-radius: 15px;
          background: #fff;
          box-shadow: 0 2px 5px rgba(28, 38, 56, 0.04);
        }

        .ideas-contact-form label {
          display: block;
          margin-bottom: 21px;
          color: #414a5a;
          font-size: 12px;
          font-weight: 700;
        }

        .ideas-contact-form em {
          color: #b51d68;
          font-style: normal;
        }

        .ideas-contact-form input,
        .ideas-contact-form textarea {
          display: block;
          width: 100%;
          margin-top: 8px;
          padding: 12px 14px;
          border: 1px solid #dce1e8;
          border-radius: 8px;
          outline: none;
          color: #222b3a;
          background: #fff;
          font: 400 13px Inter, sans-serif;
        }

        .ideas-contact-form input {
          height: 44px;
        }

        .ideas-contact-form textarea {
          min-height: 100px;
          resize: vertical;
        }

        .ideas-contact-form input:focus,
        .ideas-contact-form textarea:focus {
          border-color: #a51a63;
          box-shadow: 0 0 0 3px rgba(165, 26, 99, 0.08);
        }

        .ideas-contact-form .ideas-input-invalid {
          border-color: #d93025;
        }

        .ideas-contact-form .ideas-field-error {
          display: block;
          margin-top: 6px;
          color: #d93025;
          font-size: 12px;
          font-weight: 500;
        }

        .ideas-contact-form .ideas-success {
          margin-top: 14px;
          color: #1e8e3e;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
        }

        .ideas-contact-form button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          min-height: 46px;
          margin-top: 3px;
          border: 0;
          border-radius: 8px;
          color: #fff;
          background: #921354;
          font: 600 13px Inter, sans-serif;
          cursor: pointer;
        }

        .ideas-contact-form button:hover {
          background: #730042;
        }

        .ideas-closing {
          padding-block: 76px;
          color: #fff;
          background: radial-gradient(
            ellipse at 70% 20%,
            rgba(117, 0, 65, 0.32),
            transparent 48%
          ), #210817;
        }

        .ideas-closing-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(250px, 0.8fr);
          align-items: center;
          gap: 70px;
        }

        .ideas-closing h2 {
          margin: 0 0 22px;
          color: #fff;
          font-size: clamp(32px, 3vw, 48px);
          line-height: 1.17;
        }

        .ideas-closing-copy > p:last-child {
          max-width: 700px;
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 15px;
          line-height: 1.75;
        }

        .ideas-closing-brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 190px;
          padding-left: 35px;
          border-left: 1px solid rgba(218, 42, 130, 0.22);
          color: #d52d82;
          text-align: center;
        }

        .ideas-closing-brand h3 {
          margin: 20px 0 10px;
          color: #fff;
          font: 700 21px "Plus Jakarta Sans", sans-serif;
        }

        .ideas-closing-brand p {
          margin: 0;
          color: rgba(255, 255, 255, 0.66) !important;
          font-size: 13px !important;
          line-height: 1.7 !important;
        }

        @media (min-width: 640px) {
          .ideas-container {
            padding-inline: 24px;
          }

          .ideas-hero-inner {
            padding-inline: 24px;
          }
        }

        @media (min-width: 768px) {
          .ideas-container {
            padding-inline: 40px;
          }

          .ideas-hero-inner {
            padding-inline: 40px;
          }
        }

        @media (min-width: 1024px) {
          .ideas-container {
            padding-inline: 100px;
          }

          .ideas-hero-inner {
            padding-inline: 100px;
          }
        }

        @media (max-width: 1100px) {

          .ideas-principles-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .ideas-principles-list {
            gap: 30px;
          }
        }

        @media (max-width: 800px) {
          .ideas-approach-grid,
          .ideas-vision-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 28px;
          }

          .ideas-hero-inner {
            min-height: 430px;
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .ideas-hero-copy {
            width: 70%;
          }

          .ideas-hero::before {
            background: linear-gradient(
              90deg,
              rgba(13, 16, 23, 0.95) 0%,
              rgba(13, 16, 23, 0.7) 50%,
              rgba(13, 16, 23, 0.2) 100%
            );
          }

          .ideas-approach-grid,
          .ideas-vision-grid {
            gap: 32px;
          }

          .ideas-approach,
          .ideas-vision {
            padding-block: 58px;
          }

          .ideas-principles-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            row-gap: 32px;
          }

          .ideas-closing-grid {
            grid-template-columns: minmax(0, 1.2fr) minmax(190px, 0.8fr);
            gap: 35px;
          }
        }

        @media (max-width: 600px) {
          .ideas-approach-grid,
          .ideas-vision-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .ideas-hero,
          .ideas-hero-inner {
            min-height: 480px;
          }

          .ideas-hero-inner {
            align-items: center;
            padding-top: 45px;
            padding-bottom: 45px;
          }

          .ideas-hero-copy {
            width: 100%;
          }

          .ideas-hero::before {
            background: rgba(13, 16, 23, 0.72);
          }

          .ideas-hero h1 {
            font-size: clamp(30px, 8vw, 40px);
            letter-spacing: -0.9px;
          }

          .ideas-hero-description {
            font-size: 13px;
          }

          .ideas-approach-grid,
          .ideas-vision-grid {
            grid-template-columns: 1fr;
          }

          .ideas-approach,
          .ideas-vision {
            padding-block: 48px;
          }

          .ideas-approach-image,
          .ideas-vision-image {
            height: 250px;
          }

          .ideas-values > div {
            padding-inline: 9px;
          }

          .ideas-values strong {
            font-size: 11px;
          }

          .ideas-values small {
            font-size: 10px;
          }

          .ideas-principles {
            padding-block: 48px;
          }

          .ideas-principles-list {
            gap: 26px 20px;
          }

          .ideas-principle h3 {
            font-size: 12px;
          }

          .ideas-principle p {
            font-size: 11px !important;
          }

          .ideas-contact {
            padding: 52px 16px 58px;
          }

          .ideas-contact-form {
            padding: 26px 20px;
          }

          .ideas-closing {
            padding-block: 52px;
          }

          .ideas-closing-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .ideas-closing h2 {
            font-size: clamp(30px, 8vw, 40px);
          }

          .ideas-closing-copy > p:last-child {
            font-size: 13px;
          }

          .ideas-closing-brand {
            min-height: 0;
            padding: 30px 0 0;
            border-top: 1px solid rgba(218, 42, 130, 0.22);
            border-left: 0;
          }
        }

        @media (max-width: 360px) {
          .ideas-values {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .ideas-values > div {
            padding: 0;
            border-right: 0;
          }

          .ideas-principles-list {
            grid-template-columns: 1fr;
          }

          .ideas-contact-form {
            padding-inline: 16px;
          }
        }
      `}</style>

      <main className="ideas-page">
        <section className="ideas-hero">
          <div className="ideas-hero-inner">
            <div className="ideas-hero-copy">
              <p className="ideas-eyebrow ideas-eyebrow-light">
                <span /> IDEAS &amp; INNOVATION
              </p>

              <h1>
                Great Ideas Begin with
                <br />
                <span>a New Perspective</span>
              </h1>

              <p className="ideas-hero-description">
                At TechTorch Solutions, we believe innovation starts with
                curiosity, grows through collaboration, and creates real value
                when the right ideas meet the right direction.
              </p>

              <a className="ideas-button" href="#contact">
                Let&apos;s Build What&apos;s Next <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section className="ideas-approach">
          <div className="ideas-container ideas-approach-grid">
            <div className="ideas-approach-copy">
              <p className="ideas-eyebrow">
                <span /> OUR APPROACH
              </p>

              <h2>A Culture of Forward Thinking</h2>

              <p>
                Innovation is more than just a trend — it&apos;s a mindset. At
                TechTorch, we encourage fresh perspectives, creative
                problem-solving, and the courage to explore new opportunities.
              </p>

              <p>
                We believe that great ideas have the power to challenge the
                status quo, create meaningful change, and build a stronger
                digital future.
              </p>

              <div className="ideas-values">
                <div>
                  <strong>Curiosity</strong>
                  <small>Drives New Ideas</small>
                </div>

                <div>
                  <strong>Collaboration</strong>
                  <small>Builds Stronger Solutions</small>
                </div>

                <div>
                  <strong>Innovation</strong>
                  <small>Creates Lasting Impact</small>
                </div>
              </div>
            </div>

            <div className="ideas-approach-image">
              <img
                src="/Idea2.png"
                alt="Colleagues collaborating in a modern office"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="ideas-principles">
          <div className="ideas-container ideas-principles-grid">
            <div className="ideas-principles-intro">
              <p className="ideas-eyebrow">
                <span /> THE THINKING BEHIND EVERY POSSIBILITY
              </p>

              <h2>Turning Ideas into Impact</h2>

              <p>
                Progress comes from looking beyond the obvious. By staying open
                to new perspectives and emerging possibilities, we help
                organizations find better ways to solve challenges and prepare
                for what&apos;s next.
              </p>
            </div>

            <div className="ideas-principles-list">
              {principles.map(({ Icon, title, description }) => (
                <article className="ideas-principle" key={title}>
                  <div className="ideas-principle-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ideas-vision">
          <div className="ideas-container ideas-vision-grid">
            <div className="ideas-vision-image">
              <img
                src="/Idea3.png"
                alt="Colorful mind map representing ideas"
                loading="lazy"
              />
            </div>

            <div className="ideas-vision-copy">
              <p className="ideas-eyebrow">
                <span /> OUR VISION
              </p>

              <h2>
                Every New Direction
                <br />
                Starts Somewhere
              </h2>

              <p>
                The future is shaped by the questions we ask, the perspectives
                we explore, and the ideas we choose to pursue.
              </p>

              <p>
                At TechTorch Solutions, we remain committed to a mindset of
                continuous learning, purposeful innovation, and forward-thinking
                development.
              </p>
            </div>
          </div>
        </section>

        <section className="ideas-contact" id="contact">
          <header className="ideas-contact-header">
            <p className="ideas-eyebrow ideas-eyebrow-centered">
              <span /> CONTACT US <span />
            </p>

            <h2>Get in Touch</h2>

            <p>
              Have an idea or inquiry? Send us a quick note and our team will get
              back to you shortly.
            </p>
          </header>

          <form className="ideas-contact-form" onSubmit={handleSubmit}>
            <label>
              Full Name <em>*</em>
              <input
                name="name"
                type="text"
                placeholder="Jane Doe"
                required
                onInput={handleNameInput}
                pattern="[^0-9]+"
                title="Name me numbers allowed nahi hain"
              />
            </label>

            <label>
              Email Address <em>*</em>
              <input
                name="email"
                type="email"
                placeholder="jane.doe@company.com"
                required
              />
            </label>

            <label>
              Phone Number
              <input
                name="phone"
                type="tel"
                inputMode="numeric"
                placeholder="9876543210"
                maxLength={10}
                onInput={handlePhoneInput}
                aria-invalid={phoneError ? "true" : "false"}
                className={phoneError ? "ideas-input-invalid" : ""}
              />
              {phoneError && (
                <span className="ideas-field-error" role="alert">
                  {phoneError}
                </span>
              )}
            </label>

            <label>
              Message <em>*</em>
              <textarea
                name="message"
                placeholder="How can we help you?"
                rows={4}
                required
              />
            </label>

            <button type="submit">
              Send Message <ArrowRight size={15} />
            </button>

            {sent && (
              <div className="ideas-success" role="status">
                Message sent successfully!
              </div>
            )}
          </form>
        </section>

        <section className="ideas-closing">
          <div className="ideas-container ideas-closing-grid">
            <div className="ideas-closing-copy">
              <p className="ideas-eyebrow ideas-eyebrow-light">
                <span /> HAVE AN IDEA TO SHARE?
              </p>

              <h2>
                Let&apos;s Turn Your Ideas
                <br />
                into Possibilities
              </h2>

              <p>
                We welcome conversations that explore new perspectives and
                possibilities. Connect with TechTorch Solutions to start a
                conversation about your thoughts, vision, or ideas.
              </p>
            </div>

            <div className="ideas-closing-brand">
              <Rocket size={70} strokeWidth={1.5} />

              <h3>TechTorch</h3>

              <p>
                Innovation in Action,
                <br />
                Solutions Beyond Imagination.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}