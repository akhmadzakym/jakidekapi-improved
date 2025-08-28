import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import id from "../locales/id.json";

type Lang = "en" | "id";
type Messages = typeof en;

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [lang, setLangState] = useState<Lang>(() => {
        return (localStorage.getItem("lang") as Lang) || "en";
    });

    const translations: Record<Lang, Messages> = {en, id};

    const setLang = (newLang: Lang) => {
        setLangState(newLang);
        localStorage.setItem("lang", newLang);
    }

    const t = (key: string): string => {
        const keys = key.split(".");
        let result: any = translations[lang];
        for (const k of keys) {
            result = result?.[k];
        }
        return result || key; // apa itu fallback if missing????
    };

    return (
        <LanguageContext.Provider value={{lang, setLang, t}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside LanguageProvide");
    return ctx;
};