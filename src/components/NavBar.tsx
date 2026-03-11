import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

import { useLanguage } from "../context/LanguageContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { t } = useLanguage();

  const {theme, toggleTheme} = useTheme();

  return (
    <nav className="flex items-center justify-between 
                    md:mt-5 md:mb-10 md:mx-10
                    xs:mt-5 xs:mb-10 xs:mx-5
                    max-sm:mt-5 max-sm:mb-10 max-sm:mx-5">
      {/* entar ganti logo deh di sini */}
      <Link to="/" className="w-35">
        <svg className="fill-ctp-text" viewBox="0 0 675.42 174.31">
          <path d="M257.15,30.41l19.13,101.32,17.39,1.72,11.89-31.29,10.09-52.78-11.52-22.19-46.98,3.22ZM294.27,98.95l-8.19,21.56-14.98-79.34,26.2-1.8,6.12,11.78-9.14,47.79Z"/>
          <polygon points="93.57 87.79 118.68 87.39 104.54 43.64 93.57 87.79"/>
          <path d="M566.33,28.45l5.44,50.48,35.49-20-3.75-31.5-37.18,1.02ZM581.5,60.02l-2.18-20.22,13.84-.38,1.57,13.15-13.22,7.45Z"/>
          <polygon points="514.49 75.59 533.98 87.29 529.71 44.47 514.49 75.59"/>
          <path d="M675.34,144.31l-15.21-131.76c-.36-3.08-1.92-5.9-4.35-7.82-2.08-1.65-4.64-2.53-7.27-2.53-.45,0-.89.03-1.34.08l-14.76,1.7c-2.14.25-4.08,1.07-5.69,2.28-2.05-3.46-5.82-5.74-10.05-5.74-.11,0-.22,0-.33,0l-66.82,1.83c-1.94.05-3.81.6-5.47,1.54l-14.25-2.56c-.69-.12-1.39-.18-2.07-.18-4.41,0-8.52,2.5-10.5,6.56l-53.53,109.43-22.97-27.09c9.42-8.44,21.64-19.7,34.39-31.44l.18-.17c8.17-7.53,16.61-15.3,23.99-22.03,2.29-2.09,3.66-5.01,3.81-8.11.14-3.1-.95-6.13-3.04-8.42l-10.01-10.98c-2.31-2.53-5.47-3.82-8.65-3.82-2.81,0-5.64,1.01-7.88,3.05-7.49,6.83-16.05,14.71-24.32,22.33-7.03,6.48-14.16,13.05-20.73,19.05l2.95-34.5c.55-6.44-4.22-12.1-10.66-12.66l-14.8-1.27c-.33-.03-.67-.04-1-.04-2.75,0-5.42.97-7.54,2.75-.61.51-1.15,1.08-1.64,1.69-1.05-.33-2.14-.52-3.26-.55,0,0-48.2-1.14-48.29-1.14-5.68,0-10.55,4.09-11.52,9.71l-1.44,8.32-8.06-15.52c-2.02-3.89-6.04-6.31-10.38-6.31-.27,0-.53,0-.8.03l-73.39,5.03c-3.33.23-6.41,1.87-8.46,4.52-.37.47-.68.98-.96,1.5-.83-2.98-2.8-5.52-5.49-7.05-1.78-1.01-3.77-1.53-5.78-1.53-1.04,0-2.08.14-3.1.42l-14.32,3.94c-1.38.38-2.62,1-3.72,1.79l-8.05-4.86c-1.84-1.11-3.93-1.68-6.04-1.68-.94,0-1.88.11-2.81.34-3.01.74-5.61,2.66-7.21,5.31l-16.79,27.84-7.2-24.77c-1.48-5.12-6.16-8.44-11.23-8.44-1.08,0-2.18.15-3.27.47l-14.27,4.14s-.07.03-.11.04c-2.18-2.74-5.52-4.43-9.15-4.43-.13,0-.27,0-.41,0l-14.28.49c-2.6.09-5.02,1.04-6.95,2.59-.35-.11-.71-.21-1.08-.29l-14.53-3.11c-.82-.18-1.65-.26-2.46-.26-5.4,0-10.25,3.76-11.43,9.25l-23.81,111.17-28.69,12.42c-5.93,2.57-8.65,9.45-6.09,15.38l5.9,13.63c1.23,2.85,3.55,5.09,6.43,6.23,1.39.55,2.85.82,4.31.82,1.58,0,3.17-.32,4.65-.96l41.25-17.86c2.4-1.04,4.33-2.84,5.57-5.07l9.2,2.29c.93.23,1.88.35,2.82.35,2.11,0,4.2-.57,6.03-1.68,2.66-1.6,4.57-4.19,5.32-7.2l6.6-26.56,15.94-.25,13.85,42.87c.95,2.95,3.04,5.41,5.8,6.82,1.66.85,3.49,1.28,5.33,1.28,1.21,0,2.43-.19,3.6-.57l10.61-3.43c.71.68,1.51,1.27,2.38,1.75,1.74.96,3.68,1.45,5.64,1.45,1.09,0,2.19-.15,3.26-.46l14.27-4.14c2.98-.87,5.49-2.88,6.99-5.6,1.49-2.72,1.85-5.92.98-8.9l-2.86-9.86,22.45,21.96c2.28,2.23,5.23,3.34,8.18,3.34s6.07-1.18,8.36-3.52l5.04-5.15c2.15,3.3,5.84,5.33,9.8,5.33,1.03,0,2.07-.14,3.11-.42l13.19-3.63c1.91,2.18,4.61,3.63,7.64,3.93l39.78,3.93c.39.04.77.06,1.16.06,3.08,0,5.97-1.22,8.12-3.29.12.15.23.31.35.46,2.22,2.59,5.47,4.08,8.88,4.08.06,0,49.38-.9,60.87-1.11,1.59,3.98,5.3,6.94,9.86,7.33l14.8,1.27c.33.03.67.04,1,.04,2.75,0,5.42-.97,7.54-2.75,2.37-2,3.85-4.86,4.12-7.95l2.76-32.22,32.59,38.43c2.31,2.73,5.61,4.13,8.93,4.13,2.67,0,5.36-.91,7.56-2.78l11.33-9.61c1.66-1.4,2.86-3.23,3.53-5.26.24-.07.49-.13.73-.22,2.93-1.01,5.35-3.14,6.71-5.93l19.62-40.11,11.92,7.15,5.09,51.04c.31,3.09,1.83,5.93,4.23,7.89,2.1,1.72,4.72,2.65,7.41,2.65.39,0,.77-.02,1.16-.06l15.6-1.56c3.96-.39,7.25-2.72,9.05-5.95l13.76-1.48c3.09-.33,5.91-1.88,7.86-4.29,1.95-2.42,2.85-5.51,2.52-8.59l-5.49-50.96,42.97-24.21s.09-.06.14-.09l8.26,71.57c.36,3.08,1.92,5.9,4.35,7.82,2.08,1.65,4.64,2.53,7.27,2.53.45,0,.89-.03,1.34-.08l14.76-1.7c6.42-.74,11.02-6.54,10.28-12.96ZM197.64,40.47l20.24,73.56-40.64-39.75,20.4-33.81ZM58.85,141.4l-41.24,17.86-5.9-13.63,34.22-14.82L70.99,13.74l14.53,3.11-26.67,124.55ZM139.97,153.28l-16.52-51.11-33.6.53-8.77,35.29-14.42-3.58L96.4,14.81l14.28-.49,43.43,134.4-14.14,4.57ZM215.47,148.82l-54.29-53.1,15.28,52.63-14.27,4.14L123.21,18.24l14.27-4.14,14.65,50.43,30.59-50.71,12.72,7.67-32.99,54.69,63.41,62.03-10.39,10.62ZM238.67,145.48l-35.04-127.34,14.33-3.94,35.04,127.34-14.33,3.94ZM303.53,149.35l-39.78-3.93-24.3-128.69,73.39-5.03,18.38,35.41-11.3,59.11-16.38,43.13ZM383.79,122.91s-.08,0-.13,0c-.07,0-31.13.57-31.13.57l4.34-25.1,16.06,1.5c.37.03.74.05,1.1.05,5.97,0,11.07-4.55,11.63-10.61l1.39-14.79c.29-3.09-.66-6.17-2.64-8.56-1.98-2.39-4.83-3.89-7.92-4.18l-13.09-1.23,3.11-17.96s18.96.45,24.1.57l-6.83,79.75ZM391.9,31.49l-35.2-.84-6.98,40.37,25.68,2.4-1.38,14.79-26.83-2.51-8.59,49.71,45.06-.82.27,14.86-63.04,1.15,23.35-135.11,48.01,1.14-.35,14.85ZM463.35,157.78l-50.77-59.87-5.16,60.23-14.8-1.27,12.34-144.12,14.8,1.27-5.47,63.92c9.15-7.85,26.22-23.58,42.83-38.88,8.26-7.61,16.8-15.47,24.27-22.29l10.01,10.98c-7.45,6.79-15.97,14.64-24.21,22.23-17.02,15.68-33.3,30.68-42.81,38.86l50.3,59.32-11.33,9.61ZM541.49,162.61l-5.73-57.45-.23.39-27.59-16.56-25.22,51.56-14.08-6.89,59.1-120.82,14.84,2.67,14.52,145.54-15.59,1.56ZM574.97,94.18l-1.93-3.42,6.77,62.88-14.77,1.59-15.2-141.18,66.82-1.83,6.53,54.8-48.22,27.17ZM648.96,147.35l-15.21-131.76,14.76-1.7,15.21,131.76-14.76,1.7Z"/>
        </svg>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-5 content-center" >
        <Link to="/digital" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.digital")}</Link>
        <Link to="/traditional" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.traditional")}</Link>
        <Link to="/graphic" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.graphic_design")}</Link>
        <Link to="/threedee" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.3D")}</Link>
        <Link to="/photography" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.photography")}</Link>
        <Link to="/discography" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.music")}</Link>
        <Link to="/video" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.video")}</Link>
        <Link to="/projects" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.projects")}</Link>
        <Link to="/about" className="font-light transition-all hover:font-bold hover:text-3xl">{t("navbar.about")}</Link>
        <button onClick={toggleTheme} className="transition hover:scale-110"> {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />} </button>
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
            <Link to="/projects" onClick={toggleMenu}>{t("navbar.projects")}</Link>
            <Link to="/about" onClick={toggleMenu}>{t("navbar.about")}</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;

// guys maafkan aku... aku menggunakan AI untuk media belajar... FORGIVE ME... :(
// agak goblok gak sih kalo pakek AI? btw namanya vibe coding yah... kalo in my case, aku 60% vibecoding dan sisanya aku sendiri hehe :3 (11/03/2026)
