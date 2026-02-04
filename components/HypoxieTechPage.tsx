import React, { useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import ScrollytellingCanvas from './ScrollytellingCanvas';
import OverlayText from './OverlayText';
import { HYPOXIE_BEATS, getFrameUrl } from '../constants';

interface HypoxieTechPageProps {
  onBack: () => void;
}

const HypoxieTechPage: React.FC<HypoxieTechPageProps> = ({ onBack }) => {
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const accentColor = '#D9B16F';

  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="relative min-h-[400vh] bg-[#050505]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <button 
          onClick={onBack}
          className="text-[10px] tracking-[0.4em] text-white/60 hover:text-white transition-all uppercase flex items-center group font-bold"
        >
          <span className="mr-4 group-hover:-translate-x-2 transition-transform">←</span> Zurück
        </button>
        <span className="text-[10px] tracking-[0.4em] text-white uppercase font-black">Modul 02</span>
      </nav>

      <div className="relative h-[400vh] z-10">
        <ScrollytellingCanvas 
          onProgress={setLoadProgress} 
          onLoaded={() => setIsLoaded(true)} 
          customFrameUrl={(i) => getFrameUrl(i, 'hypoxie-tech')}
          bgColor="#050505"
        />

        <div className="sticky top-0 h-screen w-full pointer-events-none overflow-hidden">
          {HYPOXIE_BEATS.map((beat) => (
            <OverlayText 
              key={beat.id} 
              beat={beat} 
              scrollProgress={scrollYProgress} 
              theme="dark"
            />
          ))}
          
          <motion.div 
            style={{ opacity: indicatorOpacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30"
          >
            <span style={{ color: accentColor }} className="text-[10px] tracking-[0.5em] uppercase mb-4 font-bold opacity-60">Sauerstoff Revolution</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: `linear-gradient(to b, ${accentColor}99, transparent)` }}
              className="w-[1px] h-12" 
            />
          </motion.div>
        </div>
      </div>

      {/* Deep Dive Section */}
      <section className="relative z-20 bg-[#050505] py-48 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h4 style={{ color: accentColor }} className="text-[10px] font-bold tracking-[0.5em] uppercase">Hauterneuerung</h4>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none italic">
                Oxygen <br /> Revolution.
              </h2>
              <p className="text-white/40 text-xl font-light leading-relaxed mb-8 italic">
                Durch die Induktion kontrollierter hypoxischer Zustände lösen wir die körpereigene HIF-1α-Reaktion aus. Dies ist eine fundamentale Rekalibrierung der regenerativen Kapazität der Haut.
              </p>
              <ul className="space-y-6">
                {['HIF-1α Signalweg Aktivierung', 'Angiogenese Stimulation', 'Sauerstoff-Gradienten Mapping', 'Gewebedichte Optimierung'].map(item => (
                  <li key={item} className="flex items-center text-[11px] tracking-[0.4em] uppercase text-white/60 font-bold">
                    <span style={{ backgroundColor: `${accentColor}66` }} className="w-4 h-[1px] mr-6"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               style={{ borderColor: `${accentColor}33` }}
               className="aspect-square bg-[#1C1917]/80 backdrop-blur-3xl rounded-[60px] border flex items-center justify-center relative overflow-hidden shadow-2xl"
            >
              <div style={{ backgroundColor: accentColor }} className="absolute -top-32 -right-32 w-80 h-80 opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
              <div className="text-center z-10 p-12">
                <h4 style={{ color: accentColor }} className="text-sm font-bold tracking-[0.5em] uppercase mb-8 opacity-40">Klinische Metrik</h4>
                <p className="text-white text-7xl md:text-9xl font-black tracking-tighter italic leading-none">+84%</p>
                <p className="text-white/40 text-xs tracking-widest uppercase mt-8 italic font-bold">Vaskulärer Nährstofffluss</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-[#050505] z-30 overflow-hidden py-32">
        <div style={{ backgroundColor: accentColor }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.05] rounded-full blur-[150px] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center z-10 px-6 max-w-4xl"
        >
          <h4 style={{ color: accentColor }} className="text-[12px] font-bold tracking-[0.6em] uppercase mb-12">Atme das Leben ein</h4>
          <h2 className="text-5xl md:text-[10rem] font-black tracking-tighter mb-16 uppercase leading-[0.7] italic text-white">BREATHE <br/> LIFE IN.</h2>
          <button className="px-20 py-8 btn-premium text-[14px] uppercase tracking-[0.4em] rounded-full">
            JETZT FÜR MODUL 02 ANMELDEN
          </button>
        </motion.div>
      </section>
    </div>
  );
}; export default HypoxieTechPage;