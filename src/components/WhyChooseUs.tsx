import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const GridIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);

const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export const WhyChooseUs: React.FC = () => {
  const { language, t } = useLanguage();

  const renderQuote = () => {
    if (language === 'zh') {
      return (
        <>
          “既然有<span className="gold-text">解决方案</span>，为什么要选择死亡？联系我们——我们将共同寻找出路。”
        </>
      );
    }
    if (language === 'ru') {
      return (
        <>
          «Зачем умирать, если есть <span className="gold-text">решение?</span> Напишите нам — и мы найдем его вместе.»
        </>
      );
    }
    if (language === 'en') {
      return (
        <>
          “Why die when there is a <span className="gold-text">solution?</span> Write to us — and we will find it together.”
        </>
      );
    }
    // Fallback/Ukrainian
    return (
      <>
        «Навіщо помирати, якщо є <span className="gold-text">рішення?</span> Напишіть нам — і ми знайдемо його разом.»
      </>
    );
  };

  return (
    <section id="why" className="why-section">
      <div className="why">
        <div className="why-header">
          <div className="section-eyebrow">{t.why.eyebrow}</div>
          <h2 className="section-title">{t.why.title}</h2>
          <p className="why-lead-text">{t.why.lead}</p>
        </div>

        <div className="why-cards-grid">
          <div className="why-card">
            <div className="why-card-icon-wrap">
              <GridIcon />
            </div>
            <h3>{t.why.point1Title}</h3>
            <p>{t.why.point1Desc}</p>
          </div>

          <div className="why-card">
            <div className="why-card-icon-wrap">
              <ShieldCheckIcon />
            </div>
            <h3>{t.why.point2Title}</h3>
            <p>{t.why.point2Desc}</p>
          </div>

          <div className="why-card">
            <div className="why-card-icon-wrap">
              <GlobeIcon />
            </div>
            <h3>{t.why.point3Title}</h3>
            <p>{t.why.point3Desc}</p>
          </div>

          <div className="why-card">
            <div className="why-card-icon-wrap">
              <HeartIcon />
            </div>
            <h3>{t.why.point4Title}</h3>
            <p>{t.why.point4Desc}</p>
          </div>
        </div>

        <div className="why-quote-banner">
          <p className="why-quote-text">{renderQuote()}</p>
          <a href="#contact" className="btn-primary why-quote-btn">
            {t.why.quoteBtn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
