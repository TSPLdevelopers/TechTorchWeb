import React from "react";

const cards = [
  {
    tag: "TECHTORCH VIEW · ARTIFICIAL INTELLIGENCE",
    title: (
    <>
        AI Is Moving Into
      <br />
       Everyday Business
    </>
  ),
    desc: "AI is becoming part of everyday business, changing how teams work, make decisions and create better experiences.",
    bg: "url('sec4.1.png')",
    bgColor: "#2b2620"
  },
  {
    tag: "FIELD NOTE · BUSINESS OPERATIONS",
    title: (
    <>
      Better Connections Make
      <br />
       Better Work
    </>
  ),
    desc: "When teams, information and processes work together, everyday business becomes easier to manage.",
    bg: "url('sec4.2.png')",
    bgColor: "#050810",
  },
  {
    tag: "THINK AHEAD · EMERGING TECHNOLOGY",
    title: (
    <>
      What Comes Next Can Change
      <br />
      How We Work
    </>
  ),
    desc: "New technologies are opening up different ways to solve problems, create value and rethink what's possible.",
    bg: "url('sec4.3.png')",
    bgColor: "#c9d3da",
  },
  {
    tag: "IN FOCUS · CYBERSECURITY",
    title: (
    <>
      Security Shouldn't Be An
      <br />
        Afterthought
    </>
  ),
    desc: "As more work moves online, building security into everyday technology is becoming more important than ever.",
    bg: "url('sec4.4.png')",
    bgColor: "#04070d",
  },
  {
    tag: "TECH PULSE · DATA & DECISIONS",
     title: (
    <>
      More Data Doesn't Always Mean 
      <br />
      Better Decisions
    </>
  ),
    desc: "Businesses have more data than ever. The real challenge is finding what matters and turning it into useful decisions.",
    bg: "url('sec4.5.png')",
    bgColor: "#020306",
  },
  {
    tag: "BUSINESS GROWTH",
    title: (
    <>
      Technology Should Grow With
      <br />
       Your Business
    </>
  ),
    desc: "As business needs change, technology should be flexible enough to adapt, scale and keep supporting what comes next.",
    bg: "url('sec4.6.png')",
    bgColor: "#0a0a0a",
  },
];

function Card({ tag, title, desc, bg, bgColor, imageUrl }) {
  return (
    <div
      className="wn-card"
      style={{
        backgroundColor: bgColor,
        backgroundImage: imageUrl ? `url(${imageUrl})` : bg,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="wn-overlay" />
      <div className="wn-glass" />
      <div className="wn-tag">{tag}</div>
      <div className="wn-content">
        <h2 className="wn-title">{title}</h2>
        <p className="wn-desc">{desc}</p>
        <a className="wn-read-more" href="#">
          Read More <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
}

export default function WhatsNext() {
  return (
    <div className="wn-wrap">
      <style>{`
  .wn-wrap {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    font-family: "Plus Jakarta Sans", -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
    color: #111;
    padding: 60px 40px;
    background: #fff;
    box-sizing: border-box;
  }

  /* ================= HEADER ================= */

  .wn-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 36px;
  }

  .wn-header h1 {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 44px;
    font-weight: 800;
    letter-spacing: -0.5px;
    margin: 0;
  }

  .wn-header p {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 19px;
    line-height: 1.5;
    color: #4a4a4a;
    max-width: 520px;
    margin: 0;
  }

  /* ================= GRID ================= */

  .wn-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }

  /* ================= CARD ================= */

  .wn-card {
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    isolation: isolate;
    box-sizing: border-box;
  }

  /* ================= OVERLAY ================= */

  .wn-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0,0,0,0.85) 0%,
      rgba(0,0,0,0.35) 45%,
      rgba(0,0,0,0) 70%
    );

    backdrop-filter: blur(0px) saturate(100%);
    -webkit-backdrop-filter: blur(0px) saturate(100%);

    transition:
      background 0.4s ease,
      backdrop-filter 0.4s ease;
    
    z-index: 1;
  }

  .wn-card:hover .wn-overlay {
    background: linear-gradient(
      to top,
      rgba(10,10,10,0.5) 0%,
      rgba(10,10,10,0.3) 55%,
      rgba(10,10,10,0.12) 100%
    );

    backdrop-filter: blur(4px) saturate(120%);
    -webkit-backdrop-filter: blur(4px) saturate(120%);
  }

  /* ================= GLASS ================= */

  .wn-glass {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    opacity: 0;

    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);

    background: rgba(255,255,255,0);

    transition:
      opacity 0.4s ease,
      backdrop-filter 0.4s ease,
      background 0.4s ease;
  }

  .wn-card:hover .wn-glass {
    opacity: 1;

    backdrop-filter: blur(3px) saturate(120%);
    -webkit-backdrop-filter: blur(3px) saturate(120%);

    background: rgba(255,255,255,0.04);
  }

  /* ================= TAG ================= */

  .wn-tag {
    position: absolute;
    top: 24px;
    left: 24px;
    right: 24px;

    width: fit-content;
    max-width: calc(100% - 48px);

    z-index: 3;

    background: rgba(0,0,0,0.55);
    color: #fff;

    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.6px;

    padding: 6px 12px;
    border-radius: 3px;

    box-sizing: border-box;
  }

  /* ================= CONTENT ================= */

  .wn-content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 3;

    padding: 28px;
    box-sizing: border-box;
  }

  /* ================= TITLE ================= */

  .wn-title {
    color: #fff;

    font-family: "Plus Jakarta Sans", sans-serif;

    font-size: 26px;
    font-weight: 800;
    line-height: 1.2;

    margin: 0 0 12px 0;

    transition: transform 0.4s ease;
  }

  .wn-card:hover .wn-title {
    transform: translateY(-50px);
  }

  /* ================= DESCRIPTION ================= */

  .wn-desc {
    color: #e7e7e7;

    font-family: "Plus Jakarta Sans", sans-serif;

    font-size: 18px;
    line-height: 1.5;

    max-width: 420px;
    max-height: 0;

    opacity: 0;
    overflow: hidden;

    margin: 0;

    transition:
      max-height 0.35s ease,
      opacity 0.3s ease,
      margin 0.35s ease,
      transform 0.4s ease;
  }

  .wn-card:hover .wn-desc {
    max-height: 120px;
    opacity: 1;
    margin: 0 0 14px 0;
    transform: translateY(-40px);
  }

  /* ================= READ MORE ================= */

  .wn-read-more {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    color: #fff;

    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 15px;
    font-weight: 700;

    text-decoration: none;

    opacity: 0;

    transform: translateY(8px);

    transition:
      opacity 0.3s ease 0.1s,
      transform 0.3s ease 0.1s;
  }

  .wn-card:hover .wn-read-more {
    opacity: 1;
    transform: translateY(0);
  }

  .wn-read-more span {
    transition: transform 0.25s ease;
  }

  .wn-card:hover .wn-read-more span {
    transform: translateX(4px);
  }


  /* ==================================================
     TABLET
     ================================================== */

  @media (max-width: 1100px) {

    .wn-wrap {
      padding: 50px 30px;
    }

    .wn-header h1 {
      font-size: 40px;
    }

    .wn-header p {
      font-size: 17px;
      max-width: 450px;
    }

    .wn-grid {
      gap: 20px;
    }

    .wn-card {
      height: 380px;
    }

    .wn-title {
      font-size: 23px;
    }

    .wn-desc {
      font-size: 16px;
    }

    .wn-content {
      padding: 24px;
    }
  }


  /* ==================================================
     TABLET / SMALL LAPTOP
     ================================================== */

  @media (max-width: 900px) {

    .wn-wrap {
      padding: 45px 24px;
    }

    .wn-header {
      flex-direction: column;
      gap: 12px;
      margin-bottom: 28px;
    }

    .wn-header h1 {
      font-size: 36px;
    }

    .wn-header p {
      max-width: 100%;
      font-size: 17px;
    }

    .wn-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }

    .wn-card {
      height: 360px;
    }

    .wn-title {
      font-size: 21px;
    }

    .wn-desc {
      font-size: 15px;
    }

    .wn-content {
      padding: 22px;
    }

    .wn-tag {
      top: 18px;
      left: 18px;
      font-size: 11px;
      padding: 5px 9px;
    }
  }


  /* ==================================================
     MOBILE
     ================================================== */

  @media (max-width: 600px) {

    .wn-wrap {
      padding: 40px 16px;
    }

    .wn-header {
      margin-bottom: 24px;
    }

    .wn-header h1 {
      font-size: 30px;
      line-height: 1.2;
    }

    .wn-header p {
      font-size: 15px;
      line-height: 1.5;
    }

    .wn-grid {
      grid-template-columns: 1fr;
      gap: 18px;
    }

    .wn-card {
      width: 100%;
      height: 360px;
      border-radius: 6px;
    }

    .wn-tag {
      top: 16px;
      left: 16px;
      right: 16px;

      max-width: calc(100% - 32px);

      font-size: 10px;
      letter-spacing: 0.4px;

      padding: 5px 8px;

      white-space: normal;
    }

    .wn-content {
      padding: 20px;
    }

    .wn-title {
      font-size: 22px;
      line-height: 1.25;
    }

    .wn-desc {
      font-size: 15px;
      line-height: 1.45;
      max-width: 100%;
    }

    .wn-card:hover .wn-title {
      transform: translateY(-40px);
    }

    .wn-card:hover .wn-desc {
      transform: translateY(-30px);
      max-height: 140px;
    }

    .wn-read-more {
      font-size: 14px;
    }
  }


  /* ==================================================
     SMALL MOBILE
     ================================================== */

  @media (max-width: 400px) {

    .wn-wrap {
      padding: 32px 12px;
    }

    .wn-header h1 {
      font-size: 27px;
    }

    .wn-header p {
      font-size: 14px;
    }

    .wn-card {
      height: 340px;
    }

    .wn-content {
      padding: 18px;
    }

    .wn-title {
      font-size: 20px;
    }

    .wn-desc {
      font-size: 14px;
    }

    .wn-tag {
      font-size: 9px;
    }
  }
`}</style>

      <div className="wn-header">
        <h1 font-family="Plus Jakarta Sans">What's Next</h1>
        <p font-family="Plus Jakarta Sans">Ideas, trends and technology shaping how businesses adapt, evolve and move forward.</p>
      </div>

      <div className="wn-grid">
        {cards.map((c) => (
          <Card key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
}