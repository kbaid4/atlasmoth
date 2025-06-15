import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const COOKIE_KEY = 'atlasmoth_cookie_consent_v1';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = value => {
    localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur border-t border-black/10 shadow-[0_-2px_15px_0_rgba(0,0,0,0.08)] py-4 px-0 font-sans" style={{fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}}>
      <div className="max-w-5xl mx-auto px-6 w-full box-border">
        <div className="flex flex-col gap-4 items-start justify-between">
          <div className="flex justify-between items-start w-full gap-4">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 512 512" width={24} height={24} fill="#FFC233" className="flex-shrink-0"><path d="M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>
              <h3 className="m-0 text-lg font-semibold text-[#9D1F15] leading-snug">We Value Your Privacy</h3>
            </div>
            <button
              aria-label="Close cookie consent"
              onClick={() => handleConsent('closed')}
              className="bg-none border-none text-gray-400 hover:text-gray-600 cursor-pointer p-1 rounded transition ml-2 flex items-center justify-center"
              style={{background: 'none', border: 'none'}}
            >
              <svg viewBox="0 0 352 512" width={20} height={20}><path fill="#9D1F15" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
            </button>
          </div>
          <p className="m-0 text-sm leading-relaxed text-text-secondary max-w-2xl">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By using our site, you acknowledge that you have read and understand our{' '}
            <Link to="/privacy" className="text-secondary font-medium border-b border-transparent hover:border-secondary transition">Privacy Policy</Link>.
          </p>
          <div className="flex flex-wrap gap-3 mt-2 w-full justify-end">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-text-secondary bg-white border border-gray-200 rounded-md cursor-pointer transition hover:bg-gray-50"
              onClick={() => handleConsent('rejected')}
            >
              Reject All
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-secondary border border-transparent rounded-md cursor-pointer transition hover:bg-secondary/90"
              onClick={() => handleConsent('preferences')}
            >
              Save Preferences
            </button>
            <button
              type="button"
              className="px-6 py-2 text-sm font-medium text-white bg-[#9D1F15] border border-transparent rounded-md cursor-pointer transition hover:bg-[#B22A1B] shadow"
              onClick={() => handleConsent('accepted')}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
