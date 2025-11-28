import { createContext, useState, useContext } from "react";
import { translations } from "../utils/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("es"); // Default to Spanish

    const toggleLanguage = (lang) => {
        if (lang === "es" || lang === "en") {
            setLanguage(lang);
        } else {
            setLanguage((prev) => (prev === "es" ? "en" : "es"));
        }
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
