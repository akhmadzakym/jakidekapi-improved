import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between 
                    md:mt-5 md:mb-10 md:mx-10
                    xs:mt-5 xs:mb-10 xs:mx-5">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold">
        jakidekapi.net
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-5 content-center">
        <Link to="/digital" className="font-light transition-all hover:font-bold hover:text-3xl">digital</Link>
        <Link to="/traditional" className="font-light transition-all hover:font-bold hover:text-3xl">traditional</Link>
        <Link to="/graphic" className="font-light transition-all hover:font-bold hover:text-3xl">graphic design</Link>
        <Link to="/threedee" className="font-light transition-all hover:font-bold hover:text-3xl">3D</Link>
        <Link to="/photography" className="font-light transition-all hover:font-bold hover:text-3xl">photography</Link>
        <Link to="/discography" className="font-light transition-all hover:font-bold hover:text-3xl">discography</Link>
        <Link to="/video" className="font-light transition-all hover:font-bold hover:text-3xl">video</Link>
        <Link to="/about" className="font-light transition-all hover:font-bold hover:text-3xl">about</Link>
      </div>

      {/* Mobile Hamburger Button */}
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
            <Link to="/digital" onClick={toggleMenu}>digital</Link>
            <Link to="/traditional" onClick={toggleMenu}>traditional</Link>
            <Link to="/graphic" onClick={toggleMenu}>graphic design</Link>
            <Link to="/threedee" onClick={toggleMenu}>3D</Link>
            <Link to="/photography" onClick={toggleMenu}>photography</Link>
            <Link to="/discography" onClick={toggleMenu}>discography</Link>
            <Link to="/video" onClick={toggleMenu}>video</Link>
            <Link to="/about" onClick={toggleMenu}>about</Link>
          </motion.div>
      )}
        </AnimatePresence>
    </nav>
  );
};

export default NavBar;

// guys maafkan aku... aku menggunakan AI untuk media belajar... FORGIVE ME... :(