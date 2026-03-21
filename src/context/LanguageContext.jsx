import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';
import * as dataEn from '../data/data_en';
import * as dataDe from '../data/data_de';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'de' : 'en');
    };

    const t = (section, key) => {
        return translations[language]?.[section]?.[key] || key;
    };

    const content = language === 'en' ? dataEn : dataDe;

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t, content }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
