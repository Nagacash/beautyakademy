
import React, { useState } from 'react';
import { useScroll, motion, useTransform, AnimatePresence } from 'framer-motion';
import ScrollytellingCanvas from './ScrollytellingCanvas';
import OverlayText from './OverlayText';
import { FACULTY_BEATS, getFrameUrl } from '../constants';

interface FacultyPageProps {
  onBack: () => void;
}

const FacultyPage: React.FC<FacultyPageProps> = ({ onBack }) => {
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  const members = [
    {
      name: 'Sonja Ackermann',
      role: 'Krankenschwester & Heilpraktikerin | Medizinische Leitung',
      bio: 'Im Dienste der Gesundheit: Sonja ist seit über 30 Jahren medizinisch tätig. Ihre Laufbahn begann in der Gynäkologie und Onkologie sowie der OP-Pflege für Plastische Chirurgie. Seit 2011 ist sie in eigener Praxis in Hamburg Schnelsen tätig und vereint fundiertes klinisches Wissen mit modernster mitochondrialer Medizin und funktioneller Stressmedizin.',
      imgSrc: '/images/team/team1.jpeg',
      expertise: ['OP-Pflege Plastische Chirurgie', 'Mitochondriale Medizin', 'Epigenetik', 'Funktionelle Medizin'],
      cv: [
        'Examen AK St. Georg, Hamburg',
        'OP Krankenschwester Plastische Chirurgie (Klinik Pöseldorf)',
        'Staatlich überprüfte Heilpraktikerin seit 2010',
        'Spezialisierung in Stress- & Mitochondrienmedizin',
        'Expertin für Full Face Lifting (Teoxane Academy)'
      ]
    },
    {
      name: 'Annette Fascher-Wendlandt',
      role: 'Heilpraktikerin & Psychologische Beraterin | Ästhetische Leitung',
      bio: 'Schönheit als Berufung: Annette ist seit über 30 Jahren leidenschaftlich in der Schönheitsbranche tätig. Als Expertin für Anti-Aging und Bodyforming bei Mesoskin Hamburg ist sie spezialisiert auf Hyaluron, PDO-Fäden und Infusionstherapien. Ihre Philosophie: Ein harmonisches Zusammenspiel von innerem Wohlbefinden und äußerer Ausstrahlung.',
      imgSrc: '/images/team/team4.jpg',
      expertise: ['Anti-Aging Expertin', 'Infusionstherapie (NAD+)', 'PDO Fadenlifting', 'Psychologische Beratung'],
      cv: [
        'Heilpraktikerin seit 1995',
        'Gründerin Mesoskin Hamburg',
        'Psychologische Beraterin (Ganzheitliche Unterstützung)',
        'Expertin für Vitamin- & NAD+ Infusionen',
        'Master Class Expertin für PDO-Fäden'
      ]
    }
  ];

  return (
    <div className="relative min-h-[600vh] bg-[#050505]">
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <button onClick={onBack} className="text-[10px] tracking-[0.4em] text-white/60 hover:text-white transition-all uppercase flex items-center group">
          <span className="mr-4 group-hover:-translate-x-2 transition-transform">←</span> Zurück
        </button>
        <span className="text-[10px] tracking-[0.4em] text-white uppercase font-black">Das Mentoren-Duo</span>
      </nav>

      <div className="relative h-[200vh] z-10">
        <ScrollytellingCanvas onProgress={setLoadProgress} onLoaded={() => setIsLoaded(true)} customFrameUrl={(i) => getFrameUrl(i, 'faculty')} />
        <div className="sticky top-0 h-screen w-full pointer-events-none overflow-hidden">
          {FACULTY_BEATS.map((beat) => (
            <OverlayText key={beat.id} beat={beat} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>

      <section id="team" className="relative z-20 bg-[#050505] py-48 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-48"
          >
            <h4 className="text-[10px] font-bold tracking-[0.4em] text-[#E2C3B1] uppercase mb-6">Expertise & Leidenschaft</h4>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
              Zwei Koryphäen. <br /> Ein Versprechen.
            </h2>
          </motion.div>

          <div className="space-y-64">
            {members.map((member, i) => (
              <div key={member.name} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32 items-start`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="flex-1 w-full sticky top-32"
                >
                  <div className="aspect-[4/5] bg-white/[0.02] border border-white/5 rounded-[40px] overflow-hidden relative group shadow-[0_0_100px_rgba(226,195,177,0.05)]">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 1 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 space-y-12"
                >
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.5em] text-[#E2C3B1]/40 uppercase mb-4">{member.role}</h4>
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">{member.name}</h3>
                  </div>

                  <p className="text-white/40 text-xl font-light leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-6">
                    <h5 className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase">Werdegang & Qualifikationen</h5>
                    <ul className="space-y-4">
                      {member.cv.map((item, idx) => (
                        <li key={idx} className="flex items-start text-white/60 text-sm font-light">
                          <span className="w-1 h-1 rounded-full bg-[#E2C3B1] mt-2 mr-4 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-8">
                    {member.expertise.map(exp => (
                      <span key={exp} className="px-6 py-2 bg-white/[0.03] border border-white/5 rounded-full text-[9px] tracking-widest text-white/40 uppercase">
                        {exp}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="relative z-20 bg-[#080808] py-48 px-6 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.4em] text-[#E2C3B1] uppercase mb-6">Gemeinsame Expertise</h4>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
                  Zwei Wege. <br /> Ein Ziel.
                </h2>
              </div>
              <p className="text-white/40 text-xl font-light leading-relaxed">
                Die BeautyAkademy ist das Ergebnis einer Synergie: Sonja Ackermanns 30-jährige klinische Erfahrung trifft auf Annette Fascher-Wendlandts 30-jährige Leidenschaft in der Schönheitsbranche.
              </p>
              <p className="text-white/40 text-xl font-light leading-relaxed">
                Was Sonja durch chirurgische Präzision und mitochondriale Tiefe verankert, vollendet Annette durch ästhetische Empathie und ganzheitliche Anti-Aging-Konzepte. Gemeinsam bilden sie eine Allianz, die in der Branche ihresgleichen sucht.
              </p>
              <blockquote className="border-l-2 border-[#E2C3B1]/30 pl-6 mt-8">
                <p className="text-white/60 text-lg italic font-light">
                  "Schönheit ist das harmonische Zusammenspiel von innerem Wohlbefinden und äußerer Ausstrahlung."
                </p>
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex-1 w-full"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-white/[0.02] border border-white/5 rounded-[40px] overflow-hidden relative group shadow-[0_0_100px_rgba(226,195,177,0.05)]">
                  <img
                    src="/images/team/team2.jpeg"
                    alt="Sonja Ackermann & Annette Fascher-Wendlandt"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>
                <div className="aspect-[3/4] bg-white/[0.02] border border-white/5 rounded-[40px] overflow-hidden relative group shadow-[0_0_100px_rgba(226,195,177,0.05)]">
                  <img
                    src="/images/team/team5.png"
                    alt="Sonja Ackermann & Annette Fascher-Wendlandt"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-[#050505] py-48 px-6 lg:px-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-12">
            "Wir kombinieren klinische Präzision mit ästhetischem Feingefühl, um Dir die Sicherheit zu geben, die Du für einen erfolgreichen Start brauchst."
          </h3>
          <p className="text-white/30 text-[10px] tracking-[0.4em] uppercase font-black">
            — Sonja Ackermann & Annette Fascher-Wendlandt
          </p>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;
