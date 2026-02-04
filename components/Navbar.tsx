import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageType } from '../types';

interface NavbarProps {
  onNavigate: (page: PageType, scrollId?: string) => void;
  currentPage: PageType;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

interface SubLink {
  name: string;
  scrollId: string;
}

interface NavLink {
  name: string;
  target: PageType;
  scrollId?: string;
  subLinks?: SubLink[];
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    {
      name: 'ACADEMY',
      target: 'home' as PageType,
      subLinks: [
        { name: 'Philosophy', scrollId: 'philosophy' },
        { name: 'Courses', scrollId: 'courses' },
        { name: 'Curriculum', scrollId: 'curriculum' },
        { name: 'Mentoring', scrollId: 'mentoring' },
      ]
    },
    {
      name: 'MENTORSHIP',
      target: 'mentoring-booking' as PageType,
      subLinks: [
        { name: 'Packages', scrollId: 'packages' },
        { name: 'Booking', scrollId: 'booking' },
      ]
    },
    {
      name: 'FACULTY',
      target: 'faculty' as PageType,
      subLinks: [
        { name: 'Team', scrollId: 'team' },
        { name: 'Expertise', scrollId: 'expertise' },
      ]
    },
    { name: 'COURSES', target: 'home' as PageType, scrollId: 'courses' },
    {
      name: 'STORY',
      target: 'our-story' as PageType,
      subLinks: [
        { name: 'Founders', scrollId: 'founders' },
        { name: 'Philosophy', scrollId: 'philosophy' },
        { name: 'Modules', scrollId: 'modules' },
      ]
    },
  ];

  const handleLinkClick = (link: NavLink, subLink?: SubLink) => {
    const scrollId = subLink?.scrollId || link.scrollId;
    
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    
    // Always use onNavigate - it handles both page changes and scrolling
    onNavigate(link.target, scrollId);
  };

  const isLight = theme === 'light';
  // If at top -> transparent (gradient implied by parent or absolute positioning). 
  // If scrolled -> glassmorphism.
  const navBg = isScrolled
    ? (isLight ? 'rgba(250, 250, 249, 0.85)' : 'rgba(5, 5, 5, 0.85)')
    : (isLight ? 'rgba(250, 250, 249, 0)' : 'rgba(5, 5, 5, 0)');

  const backdropBlur = isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-none';
  const borderColor = isScrolled
    ? (isLight ? 'rgba(217, 177, 111, 0.2)' : 'rgba(255, 255, 255, 0.05)')
    : (isLight ? 'rgba(217, 177, 111, 0)' : 'rgba(255, 255, 255, 0)');

  const shadowClass = isScrolled ? 'shadow-2xl' : '';
  const paddingClass = isScrolled ? 'py-4 md:py-4' : 'py-6 md:py-8'; // Shrink on scroll

  // Always white text on top transparent header if background is dark canvas, 
  // BUT we need to respect the theme if users toggle it. 
  // Assuming 'home' hero is always dark initially unless light theme is forced? 
  // Let's stick to theme logic but maybe force white on top if it's the hero section? 
  // For now, consistent theme logic is safer.
  const textColor = isLight ? 'text-[#1C1917]' : 'text-white';

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{
          backgroundColor: navBg,
          borderBottomColor: borderColor,
        }}
        className={`fixed top-0 w-full z-[70] px-6 md:px-12 ${paddingClass} border-b ${backdropBlur} ${shadowClass} transition-all duration-500 ease-in-out`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">

          <motion.div
            onClick={() => onNavigate('home')}
            className="cursor-pointer group flex items-center justify-start z-[90] relative"
            whileHover={{ scale: 1.02 }}
          >
            <h1 className={`font-black text-sm md:text-2xl tracking-[0.2em] md:tracking-[0.4em] uppercase transition-all duration-500 group-hover:text-[#D9B16F] ${textColor}`}>
              BEAUTYAKADEMY
            </h1>
          </motion.div>

          <div className="hidden lg:flex items-center justify-center space-x-10 px-10 py-3 rounded-full bg-[#D9B16F]/5 border border-[#D9B16F]/10">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleLinkClick(link)}
                  className={`text-[11px] font-black tracking-[0.4em] uppercase transition-all duration-500 hover:text-[#D9B16F] relative group ${currentPage === link.target
                    ? 'text-[#D9B16F]'
                    : (theme === 'light' ? 'text-[#78716C]' : 'text-white/60')
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#D9B16F] transition-all duration-500 ${currentPage === link.target ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>

                <AnimatePresence>
                  {link.subLinks && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 py-3 px-2 rounded-2xl border shadow-2xl min-w-[160px] ${theme === 'light'
                        ? 'bg-white/95 backdrop-blur-xl border-[#D9B16F]/10'
                        : 'bg-[#0a0a0a]/95 backdrop-blur-xl border-white/10'
                        }`}
                    >
                      {link.subLinks.map((sub) => (
                        <button
                          key={sub.scrollId}
                          onClick={() => handleLinkClick(link, sub)}
                          className={`block w-full text-left px-4 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-lg transition-all duration-300 hover:bg-[#D9B16F]/10 hover:text-[#D9B16F] ${theme === 'light' ? 'text-[#78716C]' : 'text-white/50'
                            }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center justify-end space-x-10">
            <button
              onClick={onToggleTheme}
              className={`text-[10px] font-black tracking-[0.3em] uppercase transition-colors hover:text-[#D9B16F] ${theme === 'light' ? 'text-[#78716C]' : 'text-white/40'}`}
            >
              {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
            </button>

            <div className="relative p-[1.5px] rounded-full overflow-hidden group bg-[#D9B16F]/20">
              <button
                onClick={() => onNavigate('mentoring-booking')}
                className={`relative px-8 py-3 rounded-full text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-500 block z-10 ${theme === 'light'
                  ? 'bg-[#FAFAF9] text-[#1C1917] hover:bg-white'
                  : 'bg-[#1C1917] text-white hover:bg-[#292524]'
                  }`}
              >
                VIP BOOKING
              </button>
            </div>
          </div>

          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-2 z-[90] relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-8 h-[2px] block transition-all duration-300 ${theme === 'light' ? 'bg-[#1C1917]' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}`} />
            <span className={`w-8 h-[2px] block transition-all duration-300 ${theme === 'light' ? 'bg-[#1C1917]' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-8 h-[2px] block transition-all duration-300 ${theme === 'light' ? 'bg-[#1C1917]' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className={`fixed inset-0 z-[80] flex flex-col items-center justify-center p-12 space-y-12 ${theme === 'light' ? 'bg-[#FAFAF9]' : 'bg-[#050505]'}`}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleLinkClick(link)}
                className={`text-5xl font-black uppercase tracking-tighter hover:text-[#D9B16F] ${theme === 'light' ? 'text-[#1C1917]' : 'text-white'}`}
              >
                {link.name}
              </motion.button>
            ))}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className={`absolute top-12 right-12 text-6xl ${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;