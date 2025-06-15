import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

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
          <img src="/Logo.png" alt="AtlasMoth logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 mx-auto justify-center">
          <NavLink
            to="/"
            active={location.pathname === "/" && (!location.hash || location.hash === "#hero")}
            idTarget="hero"
            onClick={() => { window.location.hash = ""; }}
          >
            Home
          </NavLink>
          <NavLink
            to="/#services"
            active={location.hash === "#services"}
            idTarget="services"
          >
            Services
          </NavLink>
          <NavLink
            to="/#how-we-work"
            active={location.hash === "#how-we-work"}
            idTarget="how-we-work"
          >
            How We Work
          </NavLink>
          <NavLink to="/blog" active={location.pathname === "/blog"}>
            Blog
          </NavLink>
          <NavLink
            to="/#contact"
            active={location.hash === "#contact"}
            idTarget="contact"
          >
            Contact
          </NavLink>
        </div>

        {/* Desktop CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <a 
            href="https://cal.com/kushagrabaid/30-minute-meeting"
            className="game-button font-display font-bold text-xs px-4 py-2 rounded-full border shadow-[0_0_12px_2px_#9D1F15]"
            style={{ backgroundColor: '#FBF7BA', color: '#9D1F15', borderColor: '#9D1F15' }}
          >
            BOOK A CALL
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className={`text-white bg-surface/70 border border-white/20 shadow-lg rounded-lg p-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary active:scale-95 ${menuOpen ? 'ring-2 ring-primary' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            tabIndex={0}
            style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0.1)' }}
            onClick={() => setMenuOpen((open) => !open)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setMenuOpen(open => !open); }}
          >
            {menuOpen ? (
              // Close icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="3" y="5" width="18" height="2" rx="1" fill="currentColor" />
                <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
                <rect x="3" y="17" width="18" height="2" rx="1" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex flex-col md:hidden"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="ml-auto w-4/5 max-w-xs h-full bg-surface shadow-2xl flex flex-col p-8 gap-6"
            id="mobile-menu"
          >
            <nav className="flex flex-col gap-4 mt-10">
              {[{ to: '/', label: 'Home', active: location.pathname === '/' },
              { to: '/#services', label: 'Services', active: location.hash === '#services' },
              { to: '/#how-we-work', label: 'How We Work', active: location.hash === '#how-we-work' },
              { to: '/blog', label: 'Blog', active: location.pathname === '/blog' },
              { to: '/#contact', label: 'Contact', active: location.hash === '#contact' },
              ].map(link => (
                <div className="relative" key={link.label}>
                  <NavLink
                    to={link.to}
                    active={link.active}
                    onClick={() => setMenuOpen(false)}
                    idTarget={link.to.startsWith('/#') ? link.to.replace('/#','') : undefined}
                  >
                    {link.label}
                  </NavLink>
                </div>
              ))}
            </nav>
            <a
              href="https://cal.com/kushagrabaid/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="game-button font-display font-bold text-base px-6 py-3 rounded-full animate-glow mt-10 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ minHeight: 48, backgroundColor: '#FBF7BA', color: '#9D1F15' }}
              onClick={() => setMenuOpen(false)}
              tabIndex={0}
            >
              BOOK A CALL
            </a>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

// NavLink component with active state styling

const NavLink = ({ children, to, active, idTarget, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      className={`nav-link relative font-medium text-sm px-1 py-2 transition-all duration-300 ${
        active ? 'text-primary' : 'text-text-primary'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={e => {
        if (idTarget && window.location.pathname === '/' && document.getElementById(idTarget)) {
          e.preventDefault();
          document.getElementById(idTarget).scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', `/#${idTarget}`);
        }
        if (onClick) onClick(e);
      }}
    >
      {children}
      <motion.div
        layoutId="underline"
        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: active || hovered ? 1 : 0, scaleX: active || hovered ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{ transformOrigin: 'center' }}
      />
    </Link>
  );
};

export default Navbar;
