import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={isOpen ? 'nav-open' : ''}>
      <a className="nav-logo" href="#home" onClick={closeMenu}>
        <span>H</span>ealth <span>F</span>orever
      </a>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li>
          <a href="#why">{t.nav.approach}</a>
        </li>
        <li>
          <a href="#programs">{t.nav.programs}</a>
        </li>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <div className="lang-switcher">
            <button
              onClick={() => setLanguage('en')}
              className={language === 'en' ? 'active' : ''}
              type="button"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('ru')}
              className={language === 'ru' ? 'active' : ''}
              type="button"
            >
              RU
            </button>
            <button
              onClick={() => setLanguage('zh')}
              className={language === 'zh' ? 'active' : ''}
              type="button"
            >
              ZH
            </button>
          </div>
        </li>
        <li>
          <a href="#contact" className="nav-cta">
            {t.nav.contact}
          </a>
        </li>
      </ul>

      {/* Mobile/Tablet Language Switcher */}
      <div className="lang-switcher header-mobile-switcher">
        <button
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'active' : ''}
          type="button"
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('ru')}
          className={language === 'ru' ? 'active' : ''}
          type="button"
        >
          RU
        </button>
        <button
          onClick={() => setLanguage('zh')}
          className={language === 'zh' ? 'active' : ''}
          type="button"
        >
          ZH
        </button>
      </div>

      {/* Hamburger Toggle */}
      <button
        className={`nav-hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        type="button"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile Drawer Overlay */}
      <div className={`nav-mobile-overlay ${isOpen ? 'open' : ''}`}>
        <ul className="nav-mobile-links">
          <li>
            <a href="#why" onClick={closeMenu}>
              {t.nav.approach}
            </a>
          </li>
          <li>
            <a href="#programs" onClick={closeMenu}>
              {t.nav.programs}
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              {t.nav.contact}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
