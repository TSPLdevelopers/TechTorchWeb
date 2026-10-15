import React, { useRef, useState } from "react";
import { Cloud, Puzzle, Settings, Link2, Target, UsersRound, ShieldCheck, ArrowRight } from "lucide-react";

// Place partner-handshake.png, partner-network.png, partner-building.png in public/.
const IMAGES = {
  handshake: "/PartnersEcosystem1.png",
  network: "/PartnersEcosystem2.png",
  building: "/PartnersEcosystem3.png",
};

const opportunities = [
  {
    icon: Cloud,
    title: "Technology Partnerships",
    description: "Explore opportunities to collaborate on software, technology platforms, and digital capabilities that support changing business requirements.",
  },
  {
    icon: Puzzle,
    title: "Solution Partnerships",
    description: "Combine complementary products and expertise to address specific customer needs and deliver relevant business solutions.",
  },
  {
    icon: Settings,
    title: "Service Partnerships",
    description: "Work together across implementation, technical services, and delivery capabilities to support customer projects and operational requirements.",
  },
];

const benefits = [
  {
    icon: Link2,
    title: "Complementary Capabilities",
    description: "Bring together relevant expertise and services to address a broader range of business and technology requirements.",
  },
  {
    icon: Target,
    title: "Business Collaboration",
    description: "Identify opportunities to work together on customer projects and shared business objectives.",
  },
  {
    icon: UsersRound,
    title: "Customer-Focused Solutions",
    description: "Align technology and service capabilities with customer requirements and practical business outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Relationships",
    description: "Build partnerships grounded in transparency, accountability, and mutual value.",
  },
];

export default function PartnersEcosystem() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Connect this handler to your API/email service to actually send enquiries.
    setSubmitted(true);
    event.currentTarget.reset();
    window.setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <main className="pe-page">
      <style>{styles}</style>

      <section className="pe-section pe-hero">
        <div className="pe-container pe-two-column">
          <div className="pe-copy">
            <span className="pe-eyebrow">PARTNERS ECOSYSTEM</span>
            <h1>Partnerships That Create Business Value</h1>
            <p>
              At TechTorch Solutions, we recognise the role of strong partnerships in delivering effective technology solutions. We aim to build relationships with organisations whose expertise, capabilities, and business objectives complement our own.
            </p>
          </div>
          <div className="pe-hero-art">
            <div className="pe-image-shadow" />
            <img src={IMAGES.handshake} alt="Technology-enabled business handshake" />
            <div className="pe-image-corner" />
          </div>
        </div>
      </section>

      <section className="pe-section pe-network">
        <div className="pe-container pe-two-column">
          <div className="pe-copy">
            <span className="pe-eyebrow">OUR PARTNER NETWORK</span>
            <h2>Collaboration Built Around Shared Objectives</h2>
            <p>
              Our partner ecosystem is focused on bringing together complementary technology, services, and expertise. We believe effective collaboration starts with a clear understanding of customer requirements and a shared commitment to delivering relevant solutions.
            </p>
            <p>
              We look for opportunities to work with organisations that value professional integrity, technical expertise, and long-term business relationships.
            </p>
          </div>
          <div className="pe-network-art">
            <img src={IMAGES.network} alt="Professionals collaborating around a glowing digital structure" />
          </div>
        </div>
      </section>

      <section className="pe-section pe-opportunities">
        <div className="pe-container">
          <span className="pe-eyebrow">PARTNERSHIP OPPORTUNITIES</span>
          <h2>Areas of Collaboration</h2>
          <div className="pe-card-grid">
            {opportunities.map(({ icon: Icon, title, description }) => (
              <article className="pe-card" key={title}>
                <span className="pe-card-icon"><Icon size={25} strokeWidth={1.9} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pe-section pe-benefits">
        <div className="pe-container">
          <span className="pe-eyebrow">WHY PARTNER WITH TECHTORCH?</span>
          <h2>Building Stronger Together</h2>
          <div className="pe-benefits-grid">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article className="pe-benefit" key={title}>
                <Icon className="pe-benefit-icon" size={27} strokeWidth={2.2} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pe-section pe-cta" id="partner-enquiry">
        <div className="pe-container pe-cta-grid">
          <div className="pe-cta-copy">
            <span className="pe-eyebrow">START A PARTNERSHIP CONVERSATION</span>
            <h2>Let's Explore Opportunities Together</h2>
            <p>Are you a technology provider, software company, or service organisation looking to explore potential collaboration?</p>
            <p>Share your organisation's capabilities and partnership objectives with TechTorch Solutions. Our team can review your enquiry and discuss potential areas of alignment.</p>
            <div className="pe-actions">
              <button type="button" className="pe-button pe-button-light" onClick={scrollToForm}>
                Submit a Partnership Enquiry <ArrowRight size={19} />
              </button>
              <button type="button" className="pe-button pe-button-outline" onClick={scrollToForm}>Contact Us</button>
            </div>
          </div>

          <div className="pe-contact-panel" ref={formRef}>
            <div className="pe-building"><img src={IMAGES.building} alt="Modern illuminated corporate office building" /></div>
            <form className="pe-form" onSubmit={handleSubmit}>
              <label htmlFor="pe-name">Your Name <b>*</b></label>
              <input id="pe-name" name="name" type="text" placeholder="Enter your name" pattern="[A-Za-z ]+" title="Please enter letters only" required />

              <label htmlFor="pe-email">Business Email <b>*</b></label>
              <input id="pe-email" name="email" type="email" placeholder="Enter your email" required />

              <label htmlFor="pe-organisation">Organisation Name <b>*</b></label>
              <input id="pe-organisation" name="organisation" type="text" placeholder="Enter your organisation" required />

              <label htmlFor="pe-message">Message (Optional)</label>
              <textarea id="pe-message" name="message" placeholder="Tell us about your partnership interest" rows={4} />

              <button className="pe-submit" type="submit">Submit</button>
              {submitted && <p className="pe-success" role="status">Enquiry form completed. Connect an API to send it.</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
.pe-page{--pe-dark:#111a2e;--pe-muted:#5b6b80;--pe-pink:#b31962;--pe-cream:#faf9f4;font-family:'Inter',sans-serif;color:var(--pe-dark);width:100%;max-width:100%;overflow:hidden}
.pe-page *{box-sizing:border-box;min-width:0}
.pe-page img{max-width:100%}
.pe-container{width:min(100% - 64px,1320px);margin-inline:auto}
.pe-section{padding:clamp(64px,7.5vw,112px) 0}
.pe-eyebrow{display:block;font-size:12px;font-weight:800;color:var(--pe-pink);letter-spacing:.04em;margin-bottom:16px;line-height:1.4}
.pe-page h1,.pe-page h2,.pe-page h3{font-family:'Plus Jakarta Sans',sans-serif;letter-spacing:-.045em;margin:0}
.pe-page h1{font-size:clamp(34px,3.4vw,54px);line-height:1.08;font-weight:800;max-width:680px;overflow-wrap:break-word}
.pe-page h2{font-size:clamp(28px,2.6vw,40px);line-height:1.16;font-weight:800;overflow-wrap:break-word}
.pe-page h3{line-height:1.35}
.pe-page p{color:var(--pe-muted);font-size:15px;line-height:1.72;margin:20px 0 0;overflow-wrap:break-word}
.pe-two-column{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(30px,5vw,68px);align-items:center}
.pe-hero{background:var(--pe-cream);padding-top:clamp(72px,8vw,120px);padding-bottom:clamp(80px,9vw,130px)}
.pe-hero .pe-copy p,.pe-network .pe-copy p{max-width:650px}
.pe-hero-art{position:relative;isolation:isolate;margin:0 5px 20px 0}
.pe-hero-art img{display:block;width:100%;aspect-ratio:1.45;object-fit:cover;border-radius:16px;box-shadow:0 22px 30px rgba(0,0,0,.12);position:relative;z-index:2}
.pe-image-shadow{position:absolute;inset:12% -3% -8% 58%;border-radius:28px;background:#eadbe0;transform:rotate(-5deg);z-index:-1}
.pe-image-corner{position:absolute;right:0;bottom:0;width:25%;height:26%;background:#730b39;clip-path:polygon(14% 0,100% 0,100% 100%,0 100%);z-index:3;border-bottom-right-radius:16px}
.pe-network{background:#fff}
.pe-network-art img{display:block;width:100%;aspect-ratio:1.49;object-fit:cover;border-radius:14px;box-shadow:0 10px 18px rgba(0,0,0,.12)}
.pe-opportunities{background:var(--pe-cream)}
.pe-card-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;margin-top:48px}
.pe-card{background:#fff;border:1px solid #e6eaf0;border-radius:12px;padding:28px 26px 30px;box-shadow:0 2px 2px rgba(16,25,40,.04);min-height:220px}
.pe-card-icon{width:46px;height:46px;display:grid;place-items:center;background:#fdf0f6;color:var(--pe-pink);border-radius:9px;margin-bottom:22px}
.pe-card h3{font-size:18px;font-weight:800;letter-spacing:-.035em}
.pe-card p{margin-top:12px;font-size:14px;line-height:1.65}
.pe-benefits{background:#fff}
.pe-benefits-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:30px;margin-top:60px}
.pe-benefit-icon{color:var(--pe-pink);margin-bottom:18px}
.pe-benefit h3{font-size:16px;font-weight:800;letter-spacing:-.035em}
.pe-benefit p{font-size:13px;line-height:1.7;margin-top:12px}
.pe-cta{background:linear-gradient(112deg,#4b0021 0%,#730b39 55%,#5c002b 100%);padding-block:clamp(64px,7.5vw,110px)}
.pe-cta-grid{display:grid;grid-template-columns:minmax(0,.88fr) minmax(0,1.12fr);gap:clamp(28px,4vw,58px);align-items:center}
.pe-cta .pe-eyebrow{color:#e6b6ca}
.pe-cta h2{color:#fff;max-width:580px;font-size:clamp(30px,3vw,44px)}
.pe-cta-copy p{color:#e8becd;max-width:560px;font-size:15px;line-height:1.7}
.pe-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:30px}
.pe-button{min-height:48px;display:inline-flex;align-items:center;justify-content:center;gap:12px;padding:12px 20px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;line-height:1.35;transition:background .2s ease,color .2s ease}
.pe-button-light{color:#760b3b;background:#fff;border:1px solid #fff}
.pe-button-light:hover{background:#f8eaf0}
.pe-button-outline{color:#fff;background:transparent;border:1px solid #d49cb5}
.pe-button-outline:hover{background:#ffffff16}
.pe-contact-panel{display:grid;grid-template-columns:minmax(0,.78fr) minmax(0,1fr);background:#fff;border-radius:14px;overflow:hidden;min-height:430px;box-shadow:0 12px 30px #24001425}
.pe-building{min-height:100%;overflow:hidden}
.pe-building img{width:100%;height:100%;min-height:430px;object-fit:cover;object-position:58% center;display:block}
.pe-form{padding:clamp(20px,2.3vw,32px);display:flex;flex-direction:column;justify-content:center;background:#fff}
.pe-form label{font-size:12px;font-weight:700;color:#4c5768;margin-bottom:7px;line-height:1.4}
.pe-form label:not(:first-child){margin-top:14px}
.pe-form b{color:#bc1c65}
.pe-form input,.pe-form textarea{display:block;width:100%;min-width:0;border:1px solid #cbd2dc;border-radius:4px;padding:11px 12px;outline:none;font:13px 'Inter',sans-serif;color:#182136;background:#fff}
.pe-form input{min-height:42px}
.pe-form input:focus,.pe-form textarea:focus{border-color:#730042;box-shadow:0 0 0 2px #73004220}
.pe-form input::placeholder,.pe-form textarea::placeholder{color:#a7b0be}
.pe-form textarea{resize:vertical;min-height:78px}
.pe-submit{border:0;border-radius:4px;background:#730b39;color:#fff;min-height:44px;margin-top:24px;font-weight:700;font-size:13px;cursor:pointer}
.pe-submit:hover{background:#59002d}
.pe-success{font-size:12px!important;margin:10px 0 0!important;color:#27633e!important}
@media(min-width:1500px){.pe-container{width:min(100% - 100px,1400px)}}
@media(max-width:1100px){.pe-container{width:calc(100% - 56px)}.pe-two-column{gap:32px}.pe-card-grid{gap:18px}.pe-card{padding:24px 20px}.pe-benefits-grid{gap:22px}.pe-cta-grid{gap:28px}.pe-contact-panel{grid-template-columns:minmax(0,.7fr) minmax(0,1fr)}.pe-form{padding:20px}}
@media(max-width:900px){.pe-section{padding-block:68px}.pe-two-column{grid-template-columns:minmax(0,1fr) minmax(0,.95fr);gap:26px}.pe-page h1{font-size:clamp(32px,4.2vw,42px)}.pe-page h2{font-size:clamp(27px,3.2vw,34px)}.pe-page p{font-size:14px}.pe-card-grid{margin-top:38px}.pe-card h3{font-size:16px}.pe-card p{font-size:13px}.pe-benefits-grid{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:34px}.pe-cta-grid{grid-template-columns:1fr;gap:34px}.pe-cta-copy{max-width:680px}.pe-contact-panel{max-width:760px;width:100%;margin-inline:auto;grid-template-columns:minmax(0,.8fr) minmax(0,1fr)}}
@media(max-width:640px){.pe-container{width:calc(100% - 36px)}.pe-section{padding-block:54px}.pe-hero{padding-top:58px;padding-bottom:68px}.pe-two-column{grid-template-columns:1fr;gap:30px}.pe-page h1{font-size:clamp(32px,8vw,39px);line-height:1.1}.pe-page h2{font-size:clamp(27px,6.5vw,32px);line-height:1.17}.pe-page p{font-size:14px;line-height:1.7;margin-top:16px}.pe-eyebrow{font-size:10px;margin-bottom:12px}.pe-hero-art{margin:0 5px 10px 0}.pe-hero-art img{aspect-ratio:1.42;border-radius:12px}.pe-image-shadow{inset:12% -2% -6% 58%;border-radius:18px}.pe-image-corner{border-bottom-right-radius:12px}.pe-network-art img{aspect-ratio:1.42;border-radius:12px}.pe-card-grid{grid-template-columns:1fr;gap:14px;margin-top:30px}.pe-card{padding:22px;min-height:0}.pe-card-icon{width:42px;height:42px;margin-bottom:17px}.pe-card h3{font-size:17px}.pe-card p{font-size:13px;margin-top:9px}.pe-benefits-grid{grid-template-columns:1fr;gap:26px;margin-top:36px}.pe-benefit{display:grid;grid-template-columns:32px minmax(0,1fr);column-gap:12px;align-items:start}.pe-benefit-icon{grid-row:span 2;width:25px;height:25px;margin:0}.pe-benefit h3{font-size:16px}.pe-benefit p{grid-column:2;margin-top:7px;font-size:13px}.pe-cta{padding-block:58px}.pe-cta-grid{gap:28px}.pe-cta h2{font-size:clamp(30px,7.5vw,36px)}.pe-actions{display:grid;grid-template-columns:1fr;gap:10px;margin-top:24px}.pe-button{width:100%;min-height:46px}.pe-contact-panel{grid-template-columns:1fr;border-radius:12px}.pe-building{height:220px;min-height:220px}.pe-building img{height:220px;min-height:220px;object-position:center 42%}.pe-form{padding:22px}.pe-form label{font-size:12px}.pe-form label:not(:first-child){margin-top:13px}.pe-form input,.pe-form textarea{font-size:14px}.pe-submit{margin-top:20px}}
@media(max-width:380px){.pe-container{width:calc(100% - 28px)}.pe-section{padding-block:46px}.pe-page h1{font-size:31px}.pe-page h2{font-size:26px}.pe-card{padding:18px}.pe-form{padding:18px}.pe-building,.pe-building img{height:190px;min-height:190px}.pe-button{font-size:12px;padding:11px 14px}}
@media(prefers-reduced-motion:reduce){.pe-page *{scroll-behavior:auto!important;transition:none!important}}
`;
