import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ChevronDown } from "lucide-react";

const LangSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "id", label: "Indonesia" },
  ];

  const current = languages.find((l) => l.code === lang);

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 max-sm:text-xs md:text-base rounded-lg bg-ctp-base border-2 text-ctp-text hover:bg-ctp-crust focus:outline-none"
      >
        <span>{current?.label}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-ctp-base rounded-lg z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code as "en" | "id");
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left ${
                lang === l.code ? "font-bold" : ""
              }`}
            >
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
