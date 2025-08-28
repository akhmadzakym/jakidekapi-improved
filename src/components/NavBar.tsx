import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { t } = useLanguage();

  return (
    <nav className="flex items-center justify-between 
                    md:mt-5 md:mb-10 md:mx-10
                    xs:mt-5 xs:mb-10 xs:mx-5
                    max-sm:mt-5 max-sm:mb-10 max-sm:mx-5">
      {/* entar ganti logo deh di sini */}
      <Link to="/" className="text-3xl font-bold">
        jakidekapi.net
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-5 content-center">
        <Link to="/digital" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.digital")}</Link>
        <Link to="/traditional" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.traditional")}</Link>
        <Link to="/graphic" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.graphic_design")}</Link>
        <Link to="/threedee" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.3D")}</Link>
        <Link to="/photography" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.photography")}</Link>
        <Link to="/discography" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.music")}</Link>
        <Link to="/video" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.video")}</Link>
        <Link to="/about" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.about")}</Link>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl focus:outline-none"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu (Dropdown) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
                className="absolute top-16 left-0 w-full bg-ctp-mantle flex flex-col items-center gap-4 py-4 z-50 md:hidden">
            <Link to="/digital" onClick={toggleMenu}>{t("navbar.digital")}</Link>
            <Link to="/traditional" onClick={toggleMenu}>{t("navbar.traditional")}</Link>
            <Link to="/graphic" onClick={toggleMenu}>{t("navbar.graphic_design")}</Link>
            <Link to="/threedee" onClick={toggleMenu}>{t("navbar.3D")}</Link>
            <Link to="/photography" onClick={toggleMenu}>{t("navbar.photography")}</Link>
            <Link to="/discography" onClick={toggleMenu}>{t("navbar.music")}</Link>
            <Link to="/video" onClick={toggleMenu}>{t("navbar.video")}</Link>
            <Link to="/about" onClick={toggleMenu}>{t("navbar.about")}</Link>
          </motion.div>
      )}
        </AnimatePresence>  
    </nav>
  );
};

export default NavBar;

// guys maafkan aku... aku menggunakan AI untuk media belajar... FORGIVE ME... :(