
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CookieBannerProps {
  theme: 'light' | 'dark';
}

const CookieBanner: React.FC<CookieBannerProps> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('beautyakademy-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('beautyakademy-cookie-consent', choice);
    setIsVisible(false);
  };

  const isLight = theme === 'light';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 left-8 right-8 md:left-12 md:right-auto md:max-w-md z-[100]"
        >
          <div className={`p-8 rounded-[32px] border ${
            isLight 
              ? 'bg-white/95 border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.1)]' 
              : 'bg-[#1C1917]/95 border-white/5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
            } glint-surface relative overflow-hidden`}
          >
            {/* Subtle light effect */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#CA8A04]/5 blur-[40px] rounded-full" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-[#CA8A04] animate-pulse" />
                <h4 className="vogue-serif text-[10px] font-black tracking-[0.5em] text-[#CA8A04] uppercase">
                  Datenschutz & Cookies
                </h4>
              </div>
              
              <p className={`text-[13px] font-light leading-relaxed ${isLight ? 'text-[#78716C]' : 'text-white/50'}`}>
                Um Ihre Erfahrung in unserer Akademie zu perfektionieren, nutzen wir exklusive Technologien zur Analyse und Personalisierung. 
                Sind Sie bereit für die digitale Exzellenz?
              </p>

              <div className="flex items-center space-x-4 pt-2">
                <button
                  onClick={() => handleConsent('accepted')}
                  className="flex-1 py-4 btn-money text-[10px] tracking-[0.2em] uppercase rounded-full"
                >
                  Akzeptieren
                </button>
                <button
                  onClick={() => handleConsent('rejected')}
                  className={`flex-1 py-4 border ${isLight ? 'border-black/10 text-black/40' : 'border-white/10 text-white/40'} text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-white/5 transition-colors`}
                >
                  Ablehnen
                </button>
              </div>
              
              <p className="text-[9px] tracking-widest text-center opacity-30 uppercase">
                Mehr erfahren in unserer <span className="underline cursor-pointer hover:text-[#CA8A04] transition-colors">Datenschutzerklärung</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
