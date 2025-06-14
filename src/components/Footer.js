import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="absolute -bottom-10 right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-10 left-40 w-60 h-60 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-5">
              <div className="font-display text-2xl text-white">
                <span className="text-primary">Atlas</span>
                <span className="text-secondary">Moth</span>
              </div>
            </Link>
            <p className="text-text-secondary mb-4 max-w-sm">
              Transforming digital experiences through design, gamification, and strategic development. Level up your business with AtlasMoth.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Social Media Icons */}
              {[
                { platform: 'twitter', icon: 'X' },
                { platform: 'linkedin', icon: 'in' },
                { platform: 'instagram', icon: 'IG' }
              ].map((social) => (
                <motion.a
                  key={social.platform}
                  href={`#${social.platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-surface text-white hover:bg-primary transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/#services' },
                { name: 'How We Work', path: '/#how-we-work' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'UX/UI Design',
                'Gamification',
                'Frontend Development',
                'Digital Strategy',
                'Branding'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/#services"
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Unlock Exclusive Content</h3>
            <p className="text-text-secondary text-sm mb-4">
              Subscribe to get special rewards, cheat codes, and digital goodies.
            </p>
            <form className="flex flex-col space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 bg-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm"
              >
                🎮 Get Exclusive Access
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm mb-4 md:mb-0">
            © {currentYear} AtlasMoth, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-text-secondary hover:text-primary text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-text-secondary hover:text-primary text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-text-secondary hover:text-primary text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Game-like Easter Egg */}
        <div className="absolute right-6 bottom-6">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="hidden md:block text-xs text-gray-600 cursor-help"
            title="You found a hidden message! + 50 XP"
          >
            🔍 Discover the secret
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
