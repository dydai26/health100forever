import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Programs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="programs-section" id="programs">
      <div className="programs-inner">
        <div className="programs-header">
          <div className="section-eyebrow">{t.programs.eyebrow}</div>
          <h2 className="section-title">{t.programs.title}</h2>
          <p className="section-lead">{t.programs.lead}</p>
        </div>

        <div className="programs-grid">
          <div className="program-card">
            <span className="program-icon">💎</span>
            <h3>{t.programs.p1Title}</h3>
            <p>{t.programs.p1Desc}</p>
          </div>
          <div className="program-card">
            <span className="program-icon">👨‍👩‍👧</span>
            <h3>{t.programs.p2Title}</h3>
            <p>{t.programs.p2Desc}</p>
          </div>
          <div className="program-card">
            <span className="program-icon">🌱</span>
            <h3>{t.programs.p3Title}</h3>
            <p>{t.programs.p3Desc}</p>
          </div>
          <div className="program-card">
            <span className="program-icon">🏆</span>
            <h3>{t.programs.p4Title}</h3>
            <p>{t.programs.p4Desc}</p>
          </div>
          <div className="program-card">
            <span className="program-icon">🎤</span>
            <h3>{t.programs.p5Title}</h3>
            <p>{t.programs.p5Desc}</p>
          </div>
          <div className="program-card" style={{ background: 'var(--emerald)', borderColor: 'transparent' }}>
            <span className="program-icon">✉️</span>
            <h3 style={{ color: 'var(--white)' }}>{t.programs.p6Title}</h3>
            <p style={{ color: 'rgba(249,250,251,0.7)', marginBottom: '20px' }}>{t.programs.p6Desc}</p>
            <a
              href="mailto:health100cl@gmail.com"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '10px 20px' }}
            >
              {t.programs.p6Link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
