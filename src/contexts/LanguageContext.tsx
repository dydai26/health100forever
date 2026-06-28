import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations as defaultTranslations } from '../lib/i18n';
import type { TranslationType } from '../lib/i18n';

export type Language = 'en' | 'ru' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
  allTranslations: typeof defaultTranslations;
  updateTranslations: (newTranslations: typeof defaultTranslations) => void;
  resetTranslations: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved language from localStorage, default to 'en' (primary)
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('site_lang');
    if (saved === 'en' || saved === 'ru' || saved === 'zh') {
      return saved;
    }
    return 'en';
  });

  // State to hold all translations (with localStorage support)
  const [allTranslations, setAllTranslations] = useState<typeof defaultTranslations>(() => {
    const saved = localStorage.getItem('site_translations');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved translations', e);
      }
    }
    return defaultTranslations;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('site_lang', lang);
  };

  const updateTranslations = (newTranslations: typeof defaultTranslations) => {
    setAllTranslations(newTranslations);
    localStorage.setItem('site_translations', JSON.stringify(newTranslations));
  };

  const resetTranslations = () => {
    setAllTranslations(defaultTranslations);
    localStorage.removeItem('site_translations');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = allTranslations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, allTranslations, updateTranslations, resetTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
