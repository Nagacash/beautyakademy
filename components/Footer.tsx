import React from 'react';
import { motion } from 'framer-motion';
import { PageType } from '../types';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
  theme?: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ onNavigate, theme = 'light' }) => {
  const currentYear = new Date().getFullYear();
  const isLight = theme === 'light';
  const accentColor = '#D9B16F';

  const footerSections = [
    {
      title: 'Mentoring',
      links: [
        { name: '1:1 Praxisbesuch', target: 'mentoring-booking' },
        { name: 'ZAS Abrechnung', target: null },
        { name: 'Legal & Compliance', target: 'certifications' }
      ]
    },
    {
      title: 'Artist Programs',
      links: [
        { name: 'Hyaluron Artist', target: 'pro-hyaluronic' },
        { name: 'Mitochondrial Bio', target: 'mitochondrien' },
        { name: 'PDO Lifting', target: 'mentoring-booking' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', target: 'our-story' },
        { name: 'Our Faculty', target: 'faculty' },
        { name: 'Alumni Network', target: 'alumni-network' }
      ]
    },
    {
      title: 'Social Glamour',
      links: [
        { name: 'Instagram', target: null },
        { name: 'WhatsApp', target: null },
        { name: 'Concierge', target: null }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative ${isLight ? 'bg-[#FAFAF9]' : 'bg-[#1C1917]'} pt-16 pb-10 px-6 md:px-24 border-t ${isLight ? 'border-black/5' : 'border-white/5'} z-40 transition-colors duration-1000`}>
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <h3 
              onClick={() => onNavigate?.('home')}
              className={`font-black text-3xl tracking-[0.4em] ${isLight ? 'text-[#1C1917]' : 'text-white'} cursor-pointer uppercase`}
            >
              BEAUTYAKADEMY
            </h3>
            <p className={`text-lg font-light leading-relaxed max-w-sm ${isLight ? 'text-[#78716C]' : 'text-white/40'}`}>
              Handing over sixty years of clinical brilliance. We provide the safety, the technique, and the glamour-branding for the next generation of aesthetic artists.
            </p>
            <div className="flex space-x-10">
              {['VOGUE', 'GLAMOUR', 'LADY'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3, color: accentColor }}
                  className={`text-[11px] font-bold tracking-[0.3em] ${isLight ? 'text-[#1C1917]/30' : 'text-white/20'} transition-all`}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 style={{ color: accentColor }} className={`text-[13px] font-black tracking-[0.6em] uppercase`}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => link.target && onNavigate?.(link.target as any)}
                      whileHover={{ x: 6, color: accentColor }}
                      className={`text-[15px] font-medium transition-all block text-left ${isLight ? 'text-[#292524] hover:text-[#D9B16F]' : 'text-white/80 hover:text-[#D9B16F]'} ${!link.target && 'cursor-default'}`}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`pt-8 border-t ${isLight ? 'border-black/10' : 'border-white/10'} flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0`}>
          <div className={`text-[11px] tracking-[0.3em] uppercase ${isLight ? 'text-[#1C1917]/30' : 'text-white/20'}`}>
            © {currentYear} BEAUTYAKADEMY ARTIST LEGACY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { name: 'Privacy', id: 'privacy' },
              { name: 'TOS', id: 'tos' },
              { name: 'Impressum', id: 'impressum' }
            ].map((legal) => (
              <button 
                key={legal.id} 
                onClick={() => onNavigate?.(legal.id as any)}
                className={`text-[11px] tracking-[0.3em] uppercase ${isLight ? 'text-[#1C1917]/30' : 'text-white/20'} hover:text-[#D9B16F] transition-colors`}
              >
                {legal.name}
              </button>
            ))}
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className={`flex flex-col items-center group cursor-pointer`}
          >
            <span className={`text-[9px] tracking-[0.5em] uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isLight ? 'text-[#1C1917]' : 'text-white'}`}>Nach Oben</span>
            <div style={{ background: `linear-gradient(to top, ${accentColor}, transparent)`, boxShadow: `0 0 15px ${accentColor}` }} className={`w-[1px] h-12`} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}; export default Footer;