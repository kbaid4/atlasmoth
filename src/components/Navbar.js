import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Change navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-display text-xl text-white"
          >
            <span className="text-primary">Atlas</span>
            <span className="text-secondary">Moth</span>
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" active={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink to="/#services" active={location.hash === "#services"}>
            Services
          </NavLink>
          <NavLink to="/#how-we-work" active={location.hash === "#how-we-work"}>
            How We Work
          </NavLink>
          <NavLink to="/blog" active={location.pathname === "/blog"}>
            Blog
          </NavLink>
          <NavLink to="/#contact" active={location.hash === "#contact"}>
            Contact
          </NavLink>
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#contact"
            className="game-button bg-primary hover:bg-primary-dark text-white font-display text-xs px-4 py-2 rounded-full animate-glow"
          >
            ✨ Get Free UX Audit
          </a>
        </motion.div>

        {/* Mobile Menu Button - to be implemented with state management */}
        <div className="md:hidden">
          <button 
            className="text-white"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

// NavLink component with active state styling
const NavLink = ({ children, to, active }) => {
  return (
    <Link
      to={to}
      className={`nav-link relative font-medium text-sm px-1 py-2 transition-all duration-300 ${
        active 
          ? 'text-primary' 
          : 'text-text-primary hover:text-primary'
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default Navbar;
