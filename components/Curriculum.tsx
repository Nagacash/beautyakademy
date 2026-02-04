import React from 'react';
import { motion } from 'framer-motion';
import { PageType } from '../types';

interface CurriculumProps {
  onNavigate?: (page: PageType) => void;
  theme?: 'dark' | 'light';
}

const modules = [
  {
    number: '01',
    title: 'Praxisbesuch & Mentoring',
    duration: 'Individuell',
    description: 'Wir kommen zu Dir. 1:1 Supervision bei Deinem ersten Artist-Patienten. Wir klären alle Fragen zu Hygiene, Material (Pharma Medical) und rechtlichen Voraussetzungen.',
    topics: ['Hygiene-Standards', 'Material-Kunde', 'Glamour Werbung'],
    target: 'mentoring-booking',
    img: 'shadow-day-clinical-artist',
    style: 'obsidian'
  },
  {
    number: '02',
    title: 'Aesthetic Artistry',
    duration: '4 Std. Module',
    description: 'Vom Lippen-Aufbau über Full-Face Restaurationen bis hin zum PDO Fadenlifting. Wir zeigen Dir die Artist-Techniken, die wirklich funktionieren.',
    topics: ['Hyaluronsäure', 'PDO Fäden', 'Lippen-Architektur'],
    target: 'pro-hyaluronic',
    img: '/images/work/doll-lips.webp',
    style: 'pearl'
  },
  {
    number: '03',
    title: 'Vitalität & Glamour-Aging',
    duration: 'Masterclass',
    description: 'Profhilo, Mesotherapie und modernste Skinbooster. Erlerne die Kunst der Hautqualitäts-Verbesserung für einen natürlichen Elite-Glow.',
    topics: ['Profhilo', 'Mesotherapie', 'Bio-Remodellierung'],
    target: 'mesotherapy',
    img: 'lips-precision-artist',
    style: 'pearl'
  },
  {
    number: '04',
    title: 'Injektion & Artist-Vibe',
    duration: 'Clinical',
    description: 'Infusionstherapie, Blutabnahme, Fett-weg-Spritze und Schmerztherapie (Gelenke/Rücken). Werde zum medizinischen Glamour-Allrounder.',
    topics: ['Infusionen', 'Fett-weg-Spritze', 'Artist-Vibe'],
    target: 'mitochondrien',
    img: 'luxury-clinic-management-purple',
    style: 'obsidian'
  }
];

const Curriculum: React.FC<CurriculumProps> = ({ onNavigate, theme = 'dark' }) => {
  const accentColor = '#D9B16F';

  return (
    <section id="curriculum" className="relative z-20 py-24 md:py-48 px-6 lg:px-24 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D9B16F]/20 to-transparent blur-[2px]" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 space-y-8 md:space-y-0">
          <div className="max-w-2xl">
            <h4 style={{ color: accentColor }} className="font-black tracking-[0.4em] md:tracking-[0.5em] uppercase text-[10px] md:text-[11px] mb-6 md:mb-8">Dein Artist-Support</h4>
            <h2 className={`font-black tracking-tighter uppercase leading-none text-4xl sm:text-6xl md:text-8xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              ARTIST <br /> MODULE.
            </h2>
          </div>
          <p className={`text-sm font-light max-w-xs leading-relaxed ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
            Basierend auf 60 Jahren Praxiserfahrung. Wir begleiten Dich von Deiner ersten Blutabnahme bis zum Full-Face Artist-Masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D9B16F]/10 border border-[#D9B16F]/10">
          {modules.map((module, index) => {
            const isPearl = module.style === 'pearl';
            return (
              <motion.div
                key={module.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                onClick={() => module.target && onNavigate?.(module.target as any)}
                className={`p-10 md:p-12 lg:p-16 flex flex-col justify-between group transition-all duration-700 relative overflow-hidden ${isPearl
                  ? 'bg-[#FDFCFB] text-[#050505]'
                  : 'bg-[#050505] text-white hover:bg-[#080808]'
                  } ${module.target ? 'cursor-pointer' : ''}`}
              >
                <div className={`absolute inset-0 bg-[#D9B16F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

                <div className="relative z-10 space-y-8 md:space-y-12">
                  <div className="flex justify-between items-start">
                    <span className={`text-sm font-black tracking-widest transition-colors ${isPearl ? 'text-black/20' : 'text-white/20'} group-hover:text-[#D9B16F]`}>
                      {module.number}
                    </span>
                    <div className="flex items-center space-x-4">
                      <span className={`text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase border px-2.5 py-1 rounded-full ${isPearl ? 'border-black/10 text-black/30' : 'border-white/10 text-white/30'}`}>
                        {module.duration}
                      </span>
                    </div>
                  </div>

                  <div className="aspect-video bg-black/5 rounded-2xl md:rounded-3xl overflow-hidden border border-black/5 relative mb-8 md:mb-12 shadow-2xl">
                    <img
                      src={module.img.startsWith('/') ? module.img : `https://picsum.photos/seed/${module.img}/800/450`}
                      alt={module.title}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s] ease-out"
                    />
                  </div>

                  <div>
                    <h3 className={`text-xl md:text-2xl lg:text-3xl font-black tracking-tight mb-4 md:mb-6 uppercase group-hover:translate-x-3 transition-transform duration-700`}>
                      {module.title}
                    </h3>
                    <p className={`text-[13px] md:text-sm font-light leading-relaxed mb-6 md:mb-8 ${isPearl ? 'text-black/50' : 'text-white/40'}`}>
                      {module.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4">
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {module.topics.map(topic => (
                      <span key={topic} className={`text-[8px] md:text-[9px] font-black tracking-[0.3em] uppercase ${isPearl ? 'text-black/20' : 'text-white/20'}`}>
                        • {topic}
                      </span>
                    ))}
                  </div>
                  <div className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] sm:opacity-0 sm:group-hover:opacity-100 sm:translate-x-4 sm:group-hover:translate-x-0 transition-all duration-700 whitespace-nowrap ${isPearl ? 'text-black' : 'text-[#D9B16F]'}`}>
                    Artist Booking →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;