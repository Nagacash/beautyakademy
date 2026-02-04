import React from 'react';
import { motion } from 'framer-motion';

interface CourseModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  targetGroup: string;
  prices: {
    single: string;
    group: string;
  };
  time: string;
  location: string;
  bonus: string[];
  zones: string[];
  highlight?: string;
  patientInfo: string;
  img: string;
}

const academyModules: CourseModule[] = [
  {
    id: 'botox',
    title: 'LIP ARTIST',
    subtitle: 'Modellierung & Glamour-Fokus',
    description: 'Werde zur Expertin für Lippen-Design. Lerne Techniken für maximales Volumen bei natürlichem Look – perfekt abgestimmt auf die Wünsche junger Trendsetterinnen.',
    targetGroup: 'Ärzte & Heilpraktiker',
    prices: {
      single: '1.900,00€',
      group: '1.200,00€ (5-7 Personen)'
    },
    time: '10:00 – 19:00 Uhr',
    location: 'Hamburg-Bergedorf',
    bonus: ['Glamour Verpflegung', 'Artist Zertifikat', 'Fortbildungsmappe', 'High-End Patientenmaterial'],
    zones: ['Lip Flip', 'Russian Lips', 'Hydration', 'Contour'],
    highlight: 'DTC Branding inklusive',
    patientInfo: 'Die Akademie stellt Artist-Modelle.',
    img: '/images/work/work3.jpeg'
  },
  {
    id: 'filler',
    title: 'FACE SCULPT',
    subtitle: 'Wangen & Jawline Masterclass',
    description: 'Erschaffe das perfekte Profil. In dieser Masterclass lernst Du, wie Du Gesichter modellierst, um den modernen "Young Hollywood" Look sicher und ästhetisch umzusetzen.',
    targetGroup: 'Ärzte und Heilpraktiker',
    prices: {
      single: '1.900,00€',
      group: '1.200,00€ (5-7 Personen)'
    },
    time: '10:00 – 19:00 Uhr',
    location: 'Hamburg-Bergedorf',
    bonus: ['After-Care Kit', 'Premium Zertifikat', 'Mentoring-Flatrate', 'Social Media Guide'],
    zones: ['Cheekbones', 'Jawline', 'Chin', 'Naso-Labial'],
    patientInfo: 'Wir kuratieren Deine Trainings-Patienten.',
    img: '/images/so2.jpg'
  },
  {
    id: 'meso',
    title: 'GLOW EXPERT',
    subtitle: 'Vampir-Lifting & Hautvitalisierung',
    description: 'Der ultimative Glow für Deine Kunden. Meistere PRP und Mesotherapie, um Hautbilder zu perfektionieren. Ein Muss für jeden ganzheitlichen Beauty-Artist.',
    targetGroup: 'Ärzte und Heilpraktiker',
    prices: {
      single: '1.200,00€',
      group: 'Auf Anfrage'
    },
    time: '10:00 – 15:00 Uhr',
    location: 'Hamburg-Bergedorf',
    bonus: ['Material-Starter-Set', 'Zertifikat', 'Abrechnungs-Tipps'],
    zones: ['Face Glow', 'Neck', 'Hands', 'Hair Growth'],
    patientInfo: 'Modelle werden durch uns organisiert.',
    img: '/images/so3.jpg'
  }
];

interface CourseSectionProps {
  theme?: 'light' | 'dark';
}

const CourseSection: React.FC<CourseSectionProps> = ({ theme = 'light' }) => {
  return (
    <section className="relative z-20 bg-transparent py-16 md:py-24 px-6 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-8 border-b border-[#D9B16F]/20 pb-12 md:pb-16">
          <div className="max-w-2xl">
            <h4 className="font-bold tracking-[0.6em] md:tracking-[0.8em] text-[#D9B16F] uppercase mb-4 text-[11px] md:text-[13px]">SCHOOL OF BEAUTY ARTISTS</h4>
            <h2 className={`font-black tracking-tighter uppercase leading-none text-4xl sm:text-6xl md:text-8xl ${theme === 'light' ? 'text-[#1C1917]' : 'text-white'}`}>
              MASTERCLASSES
            </h2>
          </div>
          <p className="text-lg md:text-xl font-light text-[#78716C] max-w-lg leading-relaxed italic">
            Werde Teil der neuen Generation von Ästhetik-Profis. Wir lehren nicht nur Technik, sondern erschaffen Künstler.
          </p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {academyModules.map((module, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={module.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-32 items-center`}
              >
                <div className="flex-1 space-y-10 md:space-y-12 order-2 lg:order-none">
                  <div className="space-y-4">
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.6em] text-[#D9B16F] uppercase">ARTIST LEVEL 0{index + 1}</span>
                    <h3 className={`font-black uppercase leading-none text-4xl sm:text-5xl md:text-7xl tracking-tighter ${theme === 'light' ? 'text-[#1C1917]' : 'text-white'}`}>
                      {module.title}
                    </h3>
                    <p className="text-xl md:text-3xl text-[#D9B16F] font-light tracking-tight italic">{module.subtitle}</p>
                  </div>

                  <p className="text-base md:text-lg font-light text-[#78716C] leading-relaxed max-w-xl">
                    {module.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 border-t border-[#1C1917]/10 pt-10 md:pt-12">
                    <div className="space-y-6 md:space-y-8">
                      <div>
                        <p className="font-bold tracking-[0.3em] text-[#D9B16F] uppercase mb-2 text-[10px] md:text-[11px]">Zielgruppe</p>
                        <p className={`text-sm md:text-base font-bold uppercase ${theme === 'light' ? 'text-[#292524]' : 'text-white'}`}>{module.targetGroup}</p>
                      </div>
                      <div>
                        <p className="font-bold tracking-[0.3em] text-[#D9B16F] uppercase mb-2 text-[10px] md:text-[11px]">Investition</p>
                        <p className={`text-[13px] md:text-sm font-semibold tracking-wide ${theme === 'light' ? 'text-[#78716C]' : 'text-white/60'}`}>Einzel: {module.prices.single}</p>
                        <p className={`text-[13px] md:text-sm font-semibold tracking-wide ${theme === 'light' ? 'text-[#78716C]' : 'text-white/60'}`}>Gruppe: {module.prices.group}</p>
                      </div>
                    </div>

                    <div className="space-y-6 md:space-y-8">
                      <div>
                        <p className="font-bold tracking-[0.3em] text-[#D9B16F] uppercase mb-2 text-[10px] md:text-[11px]">Bonus & Glamour</p>
                        <div className="flex flex-wrap gap-2">
                          {module.bonus.map(b => (
                            <span key={b} className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[#D9B16F]/5 rounded-full text-[#B8860B]">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-bold tracking-[0.3em] text-[#D9B16F] uppercase mb-2 text-[10px] md:text-[11px]">Techniken</p>
                        <div className="flex flex-wrap gap-2">
                          {module.zones.map(z => (
                             <span key={z} className="text-[9px] md:text-[10px] text-[#78716C] border border-[#D9B16F]/10 px-2 py-0.5 rounded uppercase">{z}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 pt-4">
                    <button className="px-10 py-4 btn-money text-[12px] uppercase tracking-[0.3em] rounded-full shadow-lg w-full sm:w-auto">
                      BERATUNG BUCHEN
                    </button>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#D9B16F] text-center sm:text-left">
                      {module.patientInfo}
                    </p>
                  </div>
                </div>

                <div className="flex-1 w-full lg:max-w-xl order-1 lg:order-none">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-[4/5] rounded-[32px] md:rounded-[40px] overflow-hidden border-[6px] md:border-[10px] border-white shadow-2xl gloss-marble float-animate card-lift"
                  >
                    <img 
                      src={module.img} 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0" 
                      alt={module.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#D9B16F]/10 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;