import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="trust-bar-section">
      <div className="trust-bar-inner">
        <div className="trust-card">
          <div className="trust-card-icon-container">
            <ShieldCheckIcon style={{ width: 18, height: 18 }} />
          </div>
          <div className="trust-card-text">
            <h3>{t.trust.guaranteeTitle}</h3>
            <span>{t.trust.guaranteeDesc}</span>
          </div>
        </div>
        <div className="trust-card-divider"></div>

        <div className="trust-card">
          <div className="trust-card-icon-container">
            <HomeIcon style={{ width: 18, height: 18 }} />
          </div>
          <div className="trust-card-text">
            <h3>{t.trust.surgeryTitle}</h3>
            <span>{t.trust.surgeryDesc}</span>
          </div>
        </div>
        <div className="trust-card-divider"></div>

        <div className="trust-card">
          <div className="trust-card-icon-container">
            <HeartIcon style={{ width: 18, height: 18 }} />
          </div>
          <div className="trust-card-text">
            <h3>{t.trust.stageTitle}</h3>
            <span>{t.trust.stageDesc}</span>
          </div>
        </div>
        <div className="trust-card-divider"></div>

        <div className="trust-card">
          <div className="trust-card-icon-container">
            <GlobeIcon style={{ width: 18, height: 18 }} />
          </div>
          <div className="trust-card-text">
            <h3>{t.trust.worldTitle}</h3>
            <span>{t.trust.worldDesc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
