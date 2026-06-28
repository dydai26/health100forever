import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <p>{t.footer.copyright}</p>
      <a href="mailto:health100cl@gmail.com">health100cl@gmail.com</a>
    </footer>
  );
};

export default Footer;
