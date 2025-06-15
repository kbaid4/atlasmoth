import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Newsletter subscribe state and handler
  const [newsletterStatus, setNewsletterStatus] = React.useState(null);
  const [newsletterLoading, setNewsletterLoading] = React.useState(false);

  const handleNewsletterSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    if (!email) {
      setNewsletterStatus({ type: 'error', message: 'Please enter your email.' });
      return;
    }
    setNewsletterLoading(true);
    setNewsletterStatus(null);
    // Open Beehiiv subscribe page in new tab with email prefilled
    const url = email
      ? `https://www.atlasmothnewsletter.com/subscribe?email=${encodeURIComponent(email)}`
      : 'https://www.atlasmothnewsletter.com/subscribe';
    window.open(url, '_blank', 'noopener noreferrer');
    setNewsletterStatus({ type: 'success', message: 'Check the new tab to finish subscribing!' });
    setNewsletterLoading(false);
    form.reset();
  };


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
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center mb-5">
  <img src="/Logo.png" alt="AtlasMoth Logo" className="h-10 w-auto" />
</Link>
            <p className="text-text-secondary mb-4 max-w-sm">
            Elevating UX With The Magic Of Gamification
Duolingo for Design & Engineering</p>
            <div className="flex flex-wrap gap-3 mt-6 items-center">
  {/* Email */}
  <motion.a
    href="mailto:kbaid@atlasmoth.com"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-8 h-8 rounded-full flex items-center justify-center bg-surface hover:bg-primary transition-colors duration-300"
    aria-label="Email"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2" fill="#FBF7BA" stroke="#9D1F15" strokeWidth="2"/><path d="M4 7l8 6 8-6" stroke="#9D1F15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </motion.a>
  {/* Newsletter */}
  <motion.a
    href="https://www.atlasmothnewsletter.com/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-8 h-8 rounded-full flex items-center justify-center bg-surface hover:bg-primary transition-colors duration-300"
    aria-label="Newsletter"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2" fill="#FFC233" stroke="#9D1F15" strokeWidth="2"/><path d="M4 7l8 6 8-6" stroke="#9D1F15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" fill="#ff6b99"/></svg>
  </motion.a>
  {/* Instagram */}
  <motion.a
    href="https://www.instagram.com/atlasmothdesign/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-8 h-8 rounded-full flex items-center justify-center bg-surface hover:bg-primary transition-colors duration-300"
    aria-label="Instagram"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" fill="#FBF7BA" stroke="#9D1F15" strokeWidth="2"/><circle cx="12" cy="12" r="5" fill="#ff6b99"/><circle cx="17.5" cy="6.5" r="1.5" fill="#9D1F15"/></svg>
  </motion.a>
  {/* Twitter */}
  <motion.a
    href="https://x.com/atlasmothdesign"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-8 h-8 rounded-full flex items-center justify-center bg-surface hover:bg-primary transition-colors duration-300"
    aria-label="Twitter"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="6" fill="#FBF7BA" stroke="#9D1F15" strokeWidth="2"/><path d="M8 15c6 0 9-5 9-9v-.5A6.5 6.5 0 0 0 20 3a6.5 6.5 0 0 1-2.36.65A3.28 3.28 0 0 0 19.5 2a6.5 6.5 0 0 1-2.07.79A3.28 3.28 0 0 0 12 5.5c0 .26.03.52.09.77C8.09 6.09 4.54 4.13 2.5 1.5c-.36.6-.57 1.3-.57 2.05 0 1.41.72 2.66 1.81 3.39A3.23 3.23 0 0 1 2 6.1v.04c0 1.97 1.4 3.62 3.26 4-.34.09-.7.14-1.07.14-.26 0-.51-.03-.76-.07.51 1.6 2 2.77 3.76 2.8A6.57 6.57 0 0 1 2 18.58 9.29 9.29 0 0 0 8 20c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.36 8.36 0 0 0 22 3.5c-.66.29-1.36.48-2.1.56A3.28 3.28 0 0 0 20 3z" fill="#9D1F15"/></svg>
  </motion.a>
  {/* TikTok */}
  <motion.a
    href="https://www.tiktok.com/@atlasmothdesign"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-8 h-8 rounded-full flex items-center justify-center bg-surface hover:bg-primary transition-colors duration-300"
    aria-label="TikTok"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="6" fill="#FBF7BA" stroke="#9D1F15" strokeWidth="2"/><path d="M14.5 7V17a4.5 4.5 0 1 1-3-4.24V7h3.5z" fill="#ff6b99"/><circle cx="17.5" cy="7.5" r="1.5" fill="#9D1F15"/></svg>
  </motion.a>
  {/* LinkedIn */}
  <motion.a
    href="https://www.linkedin.com/company/atlasmoth"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-8 h-8 rounded-full flex items-center justify-center bg-surface hover:bg-primary transition-colors duration-300"
    aria-label="LinkedIn"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" fill="#FBF7BA" stroke="#9D1F15" strokeWidth="2"/><rect x="6" y="10" width="2.5" height="7" fill="#9D1F15"/><rect x="15.5" y="13" width="2.5" height="4" fill="#9D1F15"/><circle cx="7.25" cy="7.25" r="1.25" fill="#ff6b99"/><rect x="10" y="10" width="2.5" height="7" fill="#9D1F15"/></svg>
  </motion.a>
  {/* Threads */}
  <motion.a
    href="https://www.threads.com/@atlasmothdesign"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-8 h-8 rounded-full flex items-center justify-center bg-surface hover:bg-primary transition-colors duration-300"
    aria-label="Threads"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="6" fill="#FBF7BA" stroke="#9D1F15" strokeWidth="2"/><path d="M12 7c2.5 0 4.5 1.5 4.5 4.5S14.5 16 12 16s-4.5-1.5-4.5-4.5S9.5 7 12 7z" stroke="#9D1F15" strokeWidth="2"/><path d="M12 10.5c.83 0 1.5.67 1.5 1.5S12.83 13.5 12 13.5 10.5 12.83 10.5 12s.67-1.5 1.5-1.5z" fill="#ff6b99"/></svg>
  </motion.a>
  {/* Book a Call */}
  <motion.a
    href="https://cal.com/kushagrabaid/30-minute-meeting"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold shadow transition-colors duration-300" style={{ backgroundColor: '#FBF7BA', color: '#9D1F15' }}
    aria-label="Book a Call"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="6" fill="#ff6b99" stroke="#9D1F15" strokeWidth="2"/><path d="M8 10h8v2H8zm0 4h5v2H8z" fill="#FBF7BA"/><circle cx="16" cy="8" r="2" fill="#FFC233"/></svg>
    <span className="hidden sm:inline">Book a Call</span>
  </motion.a>
</div>
          </div>

          {/* Quick Links */}
          


          {/* Newsletter */}
          <div className="md:ml-auto md:text-right lg:col-start-9 lg:col-span-4">
  <h3 className="text-white font-semibold mb-4">Unlock Exclusive Content</h3>
  <p className="text-text-secondary text-sm mb-4">
  Subscribe to get design learnings to your inbox for free!
  </p>
  <form
    className="flex flex-col space-y-3 md:items-end"
    onSubmit={handleNewsletterSubmit}
  >
    <div className="relative w-full md:w-80">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="w-full px-6 py-2 bg-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
      />
    </div>
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      className="px-6 py-2 rounded-lg font-medium text-sm shadow-[0_0_16px_4px_#9D1F15] animate-glow disabled:opacity-60" style={{ backgroundColor: '#9D1F15', color: '#FBF7BA' }}
      disabled={newsletterLoading}
    >
      {newsletterLoading ? 'Joining...' : 'Join For Free!'}
    </motion.button>
    {newsletterStatus && (
      <p className={`mt-2 text-sm ${newsletterStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
        {newsletterStatus.message}
      </p>
    )}
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
