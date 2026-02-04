import React, { useState, useEffect, useRef } from 'react';
import { useScroll, motion, useTransform, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import ScrollytellingCanvas from './components/ScrollytellingCanvas';
import OverlayText from './components/OverlayText';
import LoadingScreen from './components/LoadingScreen';
import FloatingParticles from './components/FloatingParticles';
import Footer from './components/Footer';
import Curriculum from './components/Curriculum';
import CourseSection from './components/CourseSection';
import VideoSection from './components/VideoSection';
import TreatmentSpecials from './components/TreatmentSpecials';
import ProHyaluronicPage from './components/ProHyaluronicPage';
import MitochondrienPage from './components/MitochondrienPage';
import HypoxieTechPage from './components/HypoxieTechPage';
import Masterclass2025Page from './components/Masterclass2025Page';
import OurStoryPage from './components/OurStoryPage';
import FacultyPage from './components/FacultyPage';
import CertificationsPage from './components/CertificationsPage';
import AlumniNetworkPage from './components/AlumniNetworkPage';
import MesotherapyPage from './components/MesotherapyPage';
import MentoringBookingPage from './components/MentoringBookingPage';
import LegalPage from './components/LegalPage';
import Navbar from './components/Navbar';
import LiquidGlassBackground from './components/LiquidGlassBackground';
import CookieBanner from './components/CookieBanner';
import { HOME_BEATS } from './constants';
import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [loadProgress, setLoadProgress] = useState(100);
  const [isLoaded, setIsLoaded] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [sparkles, setSparkles] = useState<{ id: number, x: number, y: number }[]>([]);
  const lenisRef = useRef<Lenis | null>(null);

  const { scrollYProgress } = useScroll();
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const currentBg = theme === 'light' ? '#FAFAF9' : '#1C1917';
  const currentText = theme === 'light' ? '#292524' : '#FAFAF9';
  const accentColor = '#D9B16F'; // Luxe Champagne Gold

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    lenisRef.current?.scrollTo(0, { immediate: true });
    document.body.style.backgroundColor = currentBg;
    document.body.style.color = currentText;
  }, [currentPage, theme, currentBg, currentText]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        const newSparkle = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        };
        setSparkles(prev => [...prev.slice(-15), newSparkle]);
      }
    }, 350);
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <motion.div
      animate={{ backgroundColor: currentBg }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen body-montserrat overflow-x-hidden"
    >
      <LoadingScreen progress={loadProgress} isComplete={isLoaded} />

      <LiquidGlassBackground theme={theme} />
      <CookieBanner theme={theme} />

      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        <AnimatePresence>
          {sparkles.map(s => (
            <motion.div
              key={s.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 0], opacity: [0, 1, 0], rotate: 45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_20px_#D9B16F]"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            />
          ))}
        </AnimatePresence>
      </div>

      {isLoaded && <Navbar onNavigate={handleNavigate} currentPage={currentPage} theme={theme} onToggleTheme={toggleTheme} />}

      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <FloatingParticles theme={theme} />

            <div className="relative min-h-[160vh] md:min-h-[200vh] z-10">
              <ScrollytellingCanvas onProgress={setLoadProgress} onLoaded={() => setIsLoaded(true)} bgColor={currentBg} />
              <div className="sticky top-0 h-screen w-full pointer-events-none overflow-hidden">
                {HOME_BEATS.map((beat) => (
                  <OverlayText key={beat.id} beat={beat} scrollProgress={scrollYProgress} theme={theme} />
                ))}
                <motion.div style={{ opacity: indicatorOpacity }} className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30">
                  <span className="text-[9px] md:text-[11px] font-bold tracking-[0.4em] md:tracking-[0.8em] uppercase mb-3 md:mb-6 text-[#D9B16F] text-center w-full px-4">Artist Mentorship</span>
                  <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-[#D9B16F] to-transparent shadow-[0_0_25px_#D9B16F]" />
                </motion.div>
              </div>
            </div>

            <section id="philosophy" className="relative z-20 py-16 md:py-32 px-6 md:px-8 lg:px-24">
              <div className="max-w-[1400px] mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`${theme === 'light' ? 'gloss-marble' : 'gloss-onyx'} rounded-[40px] md:rounded-[60px] p-8 md:p-20 lg:p-24 overflow-hidden flex flex-col lg:flex-row gap-12 md:gap-20 items-center glint-surface card-lift`}
                >
                  <div className="flex-1 space-y-8 md:space-y-12 relative z-10 order-2 lg:order-none">
                    <div className="space-y-4">
                      <h4 className="text-lg md:text-xl font-bold text-[#D9B16F] tracking-[0.4em] mb-2 uppercase">ARTIST ACADEMY</h4>
                      <h2 className={`font-black uppercase leading-[0.9] tracking-tighter text-4xl sm:text-6xl md:text-8xl ${theme === 'light' ? 'text-[#1C1917]' : 'text-white'}`}>
                        DIE GLAMOUR <br /> AKADEMIE.
                      </h2>
                    </div>

                    <div className="space-y-8 md:space-y-10 text-lg md:text-xl font-light leading-relaxed max-w-3xl text-[#78716C]">
                      <p className={`border-l-[6px] md:border-l-[8px] border-[#D9B16F] pl-6 md:pl-10 italic text-xl md:text-2xl font-bold tracking-tight ${theme === 'light' ? 'text-[#292524]' : 'text-white/90'} vogue-serif`}>
                        "Erfolg ist kein Zufall, sondern die Summe aus Präzision und dem richtigen Glamour-Branding."
                      </p>
                      <p className="text-base md:text-lg">
                        In der BeautyAkademy verbinden wir medizinisches Fachwissen mit exklusivem Artist-Branding. Erlerne die Kunst von Botox, Fillern und modernster Mesotherapie in einer Umgebung, die Erfolg atmet.
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 w-full relative order-1 lg:order-none">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 1 }}
                      className="aspect-[4/5] relative rounded-[32px] md:rounded-[60px] overflow-hidden border-[6px] md:border-[10px] border-white z-10 shadow-2xl float-animate"
                    >
                      <img src="/images/so4.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2.5s]" alt="The Beauty Artist" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#D9B16F]/30 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>

            <TreatmentSpecials theme={theme} />

            <div id="courses">
              <CourseSection theme={theme} />
            </div>

            <Curriculum onNavigate={handleNavigate} theme={theme} />
            <VideoSection theme={theme} />

            <div id="mentoring" className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center z-30 overflow-hidden py-24 md:py-32 text-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#D9B16F]/[0.05] rounded-full blur-[150px] md:blur-[200px] pointer-events-none" />
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="text-center z-10 px-6 max-w-[1200px]">
                <h3 className="text-xl md:text-3xl font-bold text-[#D9B16F] mb-8 md:mb-12 uppercase tracking-[0.4em] md:tracking-[0.5em]">WIR KÜMMERN UNS</h3>
                <h2 className={`font-black tracking-tighter mb-12 md:mb-16 leading-[0.8] uppercase text-5xl sm:text-7xl md:text-[10rem] ${theme === 'light' ? 'text-[#1C1917]' : 'text-white'}`}>JETZT <br /> STARTEN.</h2>
                <p className={`text-xl md:text-3xl font-light mb-16 md:mb-24 max-w-4xl mx-auto leading-relaxed text-[#78716C]`}>
                  Sichere Dir Deinen Platz in der nächsten Masterclass. Hamburg-Bergedorf erwartet Dich für ein Artist-Training auf Weltklasse-Niveau.
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 justify-center items-center">
                  <button onClick={() => handleNavigate('mentoring-booking')} className="w-full md:w-auto px-12 md:px-20 py-6 md:py-8 btn-money text-[13px] md:text-[15px] uppercase tracking-[0.3em] md:tracking-[0.4em] rounded-full">JETZT BUCHEN</button>
                  <button onClick={() => handleNavigate('faculty')} className={`w-full md:w-auto px-12 md:px-20 py-6 md:py-8 border-2 border-[#D9B16F] text-[13px] md:text-[15px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] rounded-full hover:bg-[#D9B16F]/10 transition-all ${theme === 'light' ? 'text-[#1C1917]' : 'text-white'}`}>ZUM TEAM</button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {currentPage === 'pro-hyaluronic' && <ProHyaluronicPage key="ph" onBack={() => handleNavigate('home')} />}
        {currentPage === 'mitochondrien' && <MitochondrienPage key="mi" onBack={() => handleNavigate('home')} />}
        {currentPage === 'hypoxie-tech' && <HypoxieTechPage key="ht" onBack={() => handleNavigate('home')} />}
        {currentPage === 'masterclass-2025' && <Masterclass2025Page key="mc" onBack={() => handleNavigate('home')} />}
        {currentPage === 'our-story' && <OurStoryPage key="os" onBack={() => handleNavigate('home')} />}
        {currentPage === 'faculty' && <FacultyPage key="fc" onBack={() => handleNavigate('home')} />}
        {currentPage === 'certifications' && <CertificationsPage key="ct" onBack={() => handleNavigate('home')} />}
        {currentPage === 'alumni-network' && <AlumniNetworkPage key="an" onBack={() => handleNavigate('home')} />}
        {currentPage === 'mesotherapy' && <MesotherapyPage key="ms" onBack={() => handleNavigate('home')} />}
        {currentPage === 'mentoring-booking' && <MentoringBookingPage key="mb" onBack={() => handleNavigate('home')} />}

        {currentPage === 'privacy' && <LegalPage key="privacy" type="privacy" theme={theme} onBack={() => handleNavigate('home')} />}
        {currentPage === 'tos' && <LegalPage key="tos" type="tos" theme={theme} onBack={() => handleNavigate('home')} />}
        {currentPage === 'impressum' && <LegalPage key="impressum" type="impressum" theme={theme} onBack={() => handleNavigate('home')} />}
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} theme={theme} />
    </motion.div>
  );
};

export default App;