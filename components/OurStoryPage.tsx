
import React, { useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import ScrollytellingCanvas from './ScrollytellingCanvas';
import OverlayText from './OverlayText';
import { STORY_BEATS, getFrameUrl } from '../constants';

interface OurStoryPageProps {
  onBack: () => void;
}

const OurStoryPage: React.FC<OurStoryPageProps> = ({ onBack }) => {
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative bg-[#050505]">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 md:py-8 flex justify-between items-center mix-blend-difference">
        <button onClick={onBack} className="text-[10px] tracking-[0.2em] md:tracking-[0.4em] text-white/60 hover:text-white transition-all uppercase flex items-center group">
          <span className="mr-2 md:mr-4 group-hover:-translate-x-2 transition-transform">←</span> Return
        </button>
        <span className="text-[10px] tracking-[0.2em] md:tracking-[0.4em] text-white uppercase font-black">History & Vision</span>
      </nav>

      {/* Scrollytelling Visual Section */}
      <div className="relative min-h-[160vh] md:min-h-[200vh] z-10">
        <ScrollytellingCanvas onProgress={setLoadProgress} onLoaded={() => setIsLoaded(true)} customFrameUrl={(i) => getFrameUrl(i, 'our-story')} />
        <div className="sticky top-0 h-screen w-full pointer-events-none overflow-hidden">
          {STORY_BEATS.map((beat) => (
            <OverlayText key={beat.id} beat={beat} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>

      {/* Founders Section */}
      <section className="relative z-20 bg-[#050505] py-24 md:py-48 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-12"
          >
            <h4 className="text-[#E2C3B1] font-bold tracking-[0.4em] md:tracking-[0.5em] text-[9px] md:text-[10px] uppercase">GEMEINSAME EXPERTISE</h4>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
              Zwei Wege. <br /> Ein Ziel.
            </h2>
            <div className="space-y-6 md:space-y-8 text-white/50 text-lg md:text-xl font-light leading-relaxed">
              <p>
                Die BeautyAkademy ist das Ergebnis einer Synergie: Sonja Ackermanns 30-jährige klinische Erfahrung trifft auf Annette Fascher-Wendlandts 30-jährige Leidenschaft in der Schönheitsbranche.
              </p>
              <p>
                Was Sonja durch chirurgische Präzision und mitochondriale Tiefe verankert, vollendet Annette durch ästhetische Empathie und ganzheitliche Anti-Aging-Konzepte. Gemeinsam bilden sie eine Allianz, die in der Branche ihresgleichen sucht.
              </p>
              <p className="text-[#E2C3B1] italic">
                "Schönheit ist das harmonische Zusammenspiel von innerem Wohlbefinden und äußerer Ausstrahlung."
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#E2C3B1]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[3/4] rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/5 group"
              >
                <img src="/images/team/team2.jpeg" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Sonja & Annette" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-[3/4] rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/5 group"
              >
                <img src="/images/team/team5.png" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Sonja & Annette" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-[3/4] rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/5 group"
              >
                <img src="/images/team/team6.png" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Team" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="aspect-[3/4] rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/5 group"
              >
                <img src="/images/team/team7.jpg" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Team" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-20 bg-[#080808] py-24 md:py-48 px-6 lg:px-24 border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center space-y-12 md:space-y-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-bold text-white uppercase tracking-tighter"
          >
            "Kein Anfang allein. Wir begleiten Dich mit ehrlicher Beratung und Kompetenz bei jedem Schritt in Deine erfolgreiche Zukunft."
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { label: 'Erfahrung', val: '60 Jahre', sub: 'Gebündeltes Wissen' },
              { label: 'Module', val: 'Maßgeschneidert', sub: 'Keine Standardlösungen' },
              { label: 'Support', val: '1:1', sub: 'In Deiner Praxis' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-3xl"
              >
                <p className="text-[9px] md:text-[10px] tracking-[0.4em] text-[#E2C3B1] uppercase mb-4">{stat.label}</p>
                <p className="text-3xl md:text-4xl font-black text-white mb-2">{stat.val}</p>
                <p className="text-white/30 text-xs uppercase tracking-widest">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Narrative */}
      <section id="modules" className="relative z-20 bg-[#050505] py-24 md:py-48 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h4 className="text-[#E2C3B1] font-bold tracking-[0.5em] text-[9px] md:text-[10px] uppercase mb-6 md:mb-8">Was uns antreibt</h4>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
              Exzellenz in <br /> jedem Modul.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Hyaluron & PDO', desc: 'Sanfte Verjüngung durch stetige Fortbildungen auf dem neuesten Stand.' },
              { title: 'Infusionstherapie', desc: 'Spezialisierung auf Vitamin- und NAD+ Infusionen für innere Vitalität.' },
              { title: 'Klinische Basis', desc: 'Hygiene, OP-Standards und medizinische Sicherheit aus 30 Jahren Klinik.' },
              { title: 'Psychologische Beratung', desc: 'Ganzheitliche Unterstützung für Körper und Geist in der Beratung.' },
              { title: 'Praxis-Support', desc: 'Abrechnung via ZAS, Material-Sourcing und Räumlichkeits-Analyse.' },
              { title: 'Sonja & Annette', desc: 'Persönliches Mentoring vor Ort in Deiner eigenen Praxis.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 md:p-12 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all duration-500 rounded-[30px]"
              >
                <h5 className="text-white font-bold uppercase tracking-tight text-lg md:text-xl mb-4 md:mb-6 group-hover:text-[#E2C3B1] transition-colors">{item.title}</h5>
                <p className="text-white/30 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative h-[80vh] md:h-screen flex flex-col items-center justify-center bg-[#050505] z-30 overflow-hidden py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#E2C3B1]/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center z-10 px-6 max-w-4xl"
        >
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-12 md:mb-16 uppercase leading-none">Werde Teil <br /> der Elite.</h2>
          <p className="text-white/40 text-lg md:text-xl font-light mb-12 md:mb-16 leading-relaxed">
            Deine Reise beginnt mit der Erfahrung von 60 Jahren. Lass uns gemeinsam den Grundstein für Deinen Erfolg in der ästhetischen Medizin legen.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-12 md:px-16 py-6 btn-premium text-[#050505] font-black uppercase text-[10px] tracking-[0.3em] rounded-full shadow-2xl">
              Mentorship Anfragen
            </button>
            <button className="px-12 md:px-16 py-6 border border-white/20 text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-full hover:bg-white/5 transition-all">
              WhatsApp Kontakt
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default OurStoryPage;
