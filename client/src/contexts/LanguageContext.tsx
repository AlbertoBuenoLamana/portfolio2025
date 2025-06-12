import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations } from '@/lib/translations';

type LanguageContextType = {
  language: Language;
  t: (key: keyof typeof translations.es) => string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'es' ? 'es' : 'en';
  };

  const [language, setLanguage] = useState<Language>(getBrowserLanguage());

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
  };

  const t = (key: keyof typeof translations.es) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
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
