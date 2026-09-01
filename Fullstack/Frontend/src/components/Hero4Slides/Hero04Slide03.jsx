import React, { useState } from 'react';
import {
  Target,
  BrainCircuit,
  Cloud,
  IdCard,
  Repeat2,
  FolderKanban,
  Settings2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

const MAROON = '#7a1338';
const CREAM = '#f7f4ef';

const cards = [
  {
    id: 'it-consultancy',
    icon: Target,
    title: 'IT Consultancy',
    description:
      'We help you assess your technology, identify opportunities and create a clear direction aligned with your business goals.',
    cta: 'Explore IT Consultancy',
  },
  {
    id: 'ai',
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    description:
      'We help businesses apply AI to automate processes, improve insights and create smarter ways of working.',
    cta: 'Explore AI Services',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'We build and modernize cloud environments that improve flexibility, reliability, performance and scalability.',
    cta: 'Explore Cloud Services',
  },
  {
    id: 'staffing',
    icon: IdCard,
    title: 'Resource & Staffing',
    description:
      'We provide skilled technology professionals and flexible resources to support projects and evolving business requirements.',
    cta: 'Explore Staffing Services',
  },
  {
    id: 'bpo',
    icon: Repeat2,
    title: 'Business Process Outsourcing',
    description:
      'We support essential business processes so your teams can focus on strategic priorities and growth.',
    cta: 'Explore BPO Services',
  },
  {
    id: 'software-dev-support',
    icon: FolderKanban,
    title: 'Software Development & Support',
    description:
      'We develop, maintain and improve software to keep your systems reliable and ready for changing needs.',
    cta: 'Explore Software Development',
  },
  {
    id: 'software-engineering',
    icon: Settings2,
    title: 'Software Engineering',
    description:
      'We design and develop reliable software solutions around your business requirements.',
    cta: 'Explore Software Engineering',
  },
  {
    id: 'cybersecurity',
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description:
      'We help businesses strengthen security, reduce risk and protect critical systems and information.',
    cta: 'Explore Cybersecurity',
  },
];

const VISIBLE_CARDS = 3;
const CARD_WIDTH = 260;
const CARD_GAP = 24;
const totalPages = Math.ceil(cards.length / VISIBLE_CARDS);

export default function TechnologyServicesSection() {
  const [page, setPage] = useState(0);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section
      style={{
        position: 'relative',
        padding: '60px 80px',
        background: MAROON,
        backgroundImage:
          'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 90px)',
        fontFamily: "'Segoe UI', Arial, sans-serif",
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '30px',
            marginBottom: '40px',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 700,
                letterSpacing: '0.5px',
                color: '#ffffff',
                margin: '0 0 16px 0',
              }}
            >
              OUR TECHNOLOGY SERVICES
            </h2>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: '#e9d3dd',
                margin: 0,
              }}
            >
              We provide practical technology services that help businesses
              modernize, improve efficiency and solve complex challenges.
              From software and cloud to AI, cybersecurity and technical
              expertise, our solutions are built around your business needs.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
            <button
              onClick={goPrev}
              disabled={page === 0}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: 'none',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: page === 0 ? 'default' : 'pointer',
                opacity: page === 0 ? 0.5 : 1,
              }}
            >
              <ChevronLeft size={18} color={MAROON} />
            </button>
            <button
              onClick={goNext}
              disabled={page === totalPages - 1}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: 'none',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: page === totalPages - 1 ? 'default' : 'pointer',
                opacity: page === totalPages - 1 ? 0.5 : 1,
              }}
            >
              <ChevronRight size={18} color={MAROON} />
            </button>
          </div>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <div
            style={{
              display: 'flex',
              gap: `${CARD_GAP}px`,
              transform: `translateX(-${
                page * VISIBLE_CARDS * (CARD_WIDTH + CARD_GAP)
              }px)`,
              transition: 'transform 0.4s ease',
            }}
          >
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  style={{
                    flex: `0 0 ${CARD_WIDTH}px`,
                    background: CREAM,
                    border: `1px solid #e6b8cf`,
                    borderRadius: '14px',
                    padding: '28px 24px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: MAROON,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <Icon size={22} color="#ffffff" strokeWidth={1.8} />
                  </div>

                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      margin: '0 0 12px 0',
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: '#555555',
                      margin: '0 0 20px 0',
                      flexGrow: 1,
                    }}
                  >
                    {card.description}
                  </p>

                  <a
                    href="#"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      textDecoration: 'none',
                    }}
                  >
                    {card.cta} <ArrowRight size={15} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}