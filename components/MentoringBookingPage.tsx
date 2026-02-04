import React, { useState } from 'react';
import { useScroll, motion, useTransform, AnimatePresence } from 'framer-motion';
import ScrollytellingCanvas from './ScrollytellingCanvas';
import OverlayText from './OverlayText';
import { MENTORING_BEATS, getFrameUrl } from '../constants';

interface MentoringBookingPageProps {
  onBack: () => void;
}

const modules = [
  { id: 'hyaluron_lips', name: 'Hyaluronsäure: Lippen', price: 150 },
  { id: 'hyaluron_face', name: 'Hyaluronsäure: Full Face', price: 250 },
  { id: 'fett_weg', name: 'Fett-weg-Spritze (Injektionslipolyse)', price: 100 },
  { id: 'profhilo', name: 'Profhilo / Bio-Remodellierung', price: 120 },
  { id: 'mesotherapy', name: 'Mesotherapie & Skinbooster', price: 100 },
  { id: 'pdo_faden', name: 'PDO Fadenlifting', price: 300 },
  { id: 'infusion', name: 'Infusionstherapie (Vitamin Drips)', price: 80 },
  { id: 'blutabnahme', name: 'Blutabnahme & PRP Techniken', price: 50 },
  { id: 'praxis_tips', name: 'Praxisstart: Hygiene, Werbung, Orga', price: 200 }
];

const MentoringBookingPage: React.FC<MentoringBookingPageProps> = ({ onBack }) => {

  const { scrollYProgress } = useScroll();
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Pricing State
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [distance, setDistance] = useState(0);
  const basePrice = 800;
  const kmRate = 1.2;
  const accentColor = '#D9B16F';

  const toggleModule = (id: string) => {
    setSelectedModules(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    const modulesTotal = selectedModules.reduce((acc, id) => {
      const module = modules.find(m => m.id === id);
      return acc + (module?.price || 0);
    }, 0);
    return basePrice + modulesTotal + (distance * kmRate);
  };

  const handleWhatsApp = () => {
    const selectedNames = selectedModules.map(id => modules.find(m => m.id === id)?.name).join(', ');
    const message = `Hallo BeautyAkademy Team, ich interessiere mich für ein Mentoring. 
    Module: ${selectedNames || 'Keine ausgewählt'}
    Entfernung: ${distance}km
    Voraussichtlicher Preis: ${calculateTotal().toFixed(2)}€`;
    window.open(`https://wa.me/4917612345678?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative min-h-[500vh] bg-[#050505] overflow-x-hidden">
      {/* Opaque Solid Navigation */}
      <nav className="fixed top-0 w-full z-[70] px-6 md:px-12 py-5 bg-[#050505] border-b border-[#D9B16F]/20 flex justify-between items-center shadow-2xl">
        <button
          onClick={onBack}
          className="text-[11px] tracking-[0.4em] text-white/60 hover:text-white transition-all uppercase flex items-center group font-black"
        >
          <span className="mr-4 group-hover:-translate-x-2 transition-transform">←</span> Zurück
        </button>
        <div className="flex flex-col items-end">
          <span className="text-[11px] tracking-[0.4em] text-white uppercase font-black">1:1 PRAXISBESUCH</span>
          <span className="text-[9px] tracking-[0.2em] text-[#D9B16F] uppercase font-bold opacity-60">Mentoring Program</span>
        </div>
      </nav>

      <div className="relative h-[200vh] z-10 pt-20">
        <ScrollytellingCanvas
          onProgress={() => { }}
          onLoaded={() => { }}
          customFrameUrl={(i) => getFrameUrl(i, 'mentoring-booking')}
          bgColor="#050505"
        />

        <div className="sticky top-0 h-screen w-full pointer-events-none overflow-hidden">
          {MENTORING_BEATS.map((beat) => (
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
            <span style={{ color: accentColor }} className="text-[10px] tracking-[0.5em] uppercase mb-4 font-bold opacity-60">Dein Weg zur Sicherheit</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: `linear-gradient(to b, ${accentColor}99, transparent)` }}
              className="w-[1px] h-12"
            />
          </motion.div>
        </div>
      </div>

      {/* Booking Questionnaire Section */}
      <section id="packages" className="relative z-20 bg-[#050505] py-48 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h4 style={{ color: accentColor }} className="text-[10px] font-bold tracking-[0.5em] uppercase">Module & Planung</h4>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
              Gestalte Dein <br /> Mentoring-Paket.
            </h2>
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-xl italic">
              Wir kommen zu Dir! Jedes Modul ist eine intensive 1:1 Session an Deinen eigenen Patienten in Deinen Räumlichkeiten.
            </p>

            <div className="space-y-12 pt-12">
              <div className="space-y-4">
                <h5 style={{ color: accentColor }} className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">Voraussetzungen</h5>
                <p className="text-sm text-white/50">Gültige ärztliche Urkunde oder Heilpraktiker-Erlaubnis ist zwingend erforderlich.</p>
              </div>
              <div className="space-y-4">
                <h5 style={{ color: accentColor }} className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">Logistik</h5>
                <p className="text-sm text-white/50">Radius: 150km um Hamburg. Weitere Entfernungen auf Anfrage möglich.</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ borderColor: `${accentColor}33` }}
            className="relative bg-[#1C1917]/80 backdrop-blur-3xl rounded-[40px] p-8 md:p-12 lg:p-14 sticky top-32 border shadow-[0_60px_120px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Subtle Gradient Glow inside the card */}
            <div style={{ backgroundColor: accentColor }} className="absolute -top-24 -right-24 w-64 h-64 opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

            <h4 style={{ color: accentColor }} className="text-[11px] font-black tracking-[0.4em] uppercase mb-12 flex items-center">
              <span style={{ backgroundColor: accentColor }} className="w-8 h-[1px] opacity-40 mr-4"></span>
              Deine Auswahl
            </h4>

            <div className="space-y-3 mb-12 max-h-[450px] overflow-y-auto pr-4 custom-scrollbar relative z-10">
              {modules.map(module => (
                <button
                  key={module.id}
                  onClick={() => toggleModule(module.id)}
                  style={{
                    backgroundColor: selectedModules.includes(module.id) ? accentColor : 'rgba(255,255,255,0.05)',
                    borderColor: selectedModules.includes(module.id) ? accentColor : 'rgba(255,255,255,0.1)'
                  }}
                  className={`group w-full flex justify-between items-center p-5 rounded-2xl border transition-all duration-500 ${selectedModules.includes(module.id)
                    ? 'text-[#1C1917]'
                    : 'text-white/70 hover:bg-white/10'
                    }`}
                >
                  <span className="text-[13px] font-bold uppercase tracking-wide text-left">{module.name}</span>
                  <span className={`text-[11px] font-black ml-4 ${selectedModules.includes(module.id) ? 'text-[#1C1917]' : 'text-[#B8860B]'}`}>
                    +{module.price}€
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-6 mb-12 pt-10 border-t border-white/10 relative z-10">
              <div className="flex justify-between items-center">
                <h5 className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">Anfahrt (Hamburg Start)</h5>
                <span style={{ color: accentColor }} className="font-bold text-lg">{distance} km</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  value={distance}
                  onChange={(e) => setDistance(parseInt(e.target.value))}
                  style={{ accentColor: accentColor }}
                  className="w-full appearance-none bg-white/10 h-[2px] rounded-full cursor-pointer"
                />
                <div style={{ backgroundColor: accentColor, width: `${(distance / 500) * 100}%` }} className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] pointer-events-none" />
              </div>
            </div>

            <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-8 relative z-10">
              <div className="text-center sm:text-left">
                <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-3">Investition</p>
                <h3 className="text-5xl font-black text-white italic tracking-tighter leading-none">
                  {calculateTotal().toFixed(2)}€
                </h3>
              </div>
              <button
                onClick={handleWhatsApp}
                className="px-14 py-6 btn-money font-black text-[12px] tracking-[0.4em] uppercase rounded-full shadow-2xl w-full sm:w-auto hover:scale-105 active:scale-95 transition-transform"
              >
                ANFRAGE SENDEN
              </button>
            </div>

            <p className="mt-10 text-[9px] text-center text-white/20 uppercase tracking-[0.3em] leading-relaxed relative z-10 italic font-medium">
              *Alle Preise zzgl. MwSt. Abrechnung erfolgt professionell via ZAS.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expanded Trust Section */}
      <section id="booking" className="relative z-20 bg-[#080808] py-48 px-6 lg:px-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32 space-y-8">
            <h4 style={{ color: accentColor }} className="text-[10px] font-black tracking-[0.6em] uppercase">Warum BeautyAkademy?</h4>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none italic">MEISTERSCHAFT <br /> DURCH ERFAHRUNG.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[40px] overflow-hidden">
            <div className="bg-[#1C1917] p-16 flex flex-col h-full">
              <h3 style={{ color: accentColor }} className="text-2xl font-bold uppercase tracking-tight italic mb-8">Klinische Souveränität</h3>
              <p className="text-white/40 text-lg font-light leading-relaxed italic flex-grow">
                "Wir wissen, wie sich die zitternde Hand beim ersten Patienten anfühlt. Wir kennen die schlaflosen Nächte vor einer Abrechnungsprüfung oder einer Hygiene-Kontrolle."
              </p>
              <div className="pt-8 border-t border-white/5 flex items-center space-x-6 mt-8">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 overflow-hidden grayscale flex-shrink-0">
                  <img src="/images/team/team1.webp" alt="Sonja" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest">Sonja Ackermann</p>
                  <p style={{ color: accentColor }} className="text-[10px] uppercase font-bold tracking-widest opacity-80">30 Jahre Clinical Care</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1C1917] p-16 flex flex-col h-full">
              <h3 style={{ color: accentColor }} className="text-2xl font-bold uppercase tracking-tight italic mb-8">Ästhetische Brillanz</h3>
              <p className="text-white/40 text-lg font-light leading-relaxed italic flex-grow">
                "Wir sind nicht nur Dozenten – wir sind Deine Mentoren, Deine Versicherung und Deine Inspiration. Wir führen Deine Hand, bis die Perfektion zum Automatismus wird."
              </p>
              <div className="pt-8 border-t border-white/5 flex items-center space-x-6 mt-8">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 overflow-hidden grayscale flex-shrink-0">
                  <img src="/images/team/team4.webp" alt="Annette" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest">Annette Fascher-Wendlandt</p>
                  <p style={{ color: accentColor }} className="text-[10px] uppercase font-bold tracking-widest opacity-80">30 Jahre Aesthetic Excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-6">
              <h5 style={{ color: accentColor }} className="font-black text-6xl italic">1:1</h5>
              <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-bold">Ausschließlich Einzeltraining</p>
              <p className="text-xs text-white/20 italic">Keine Massen-Kurse. Nur Du und Deine Mentorin.</p>
            </div>
            <div className="space-y-6">
              <h5 style={{ color: accentColor }} className="font-black text-6xl italic">60J</h5>
              <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-bold">Kumulierte Expertise</p>
              <p className="text-xs text-white/20 italic">Vermeide die Fehler, die wir bereits vor Jahrzehnten gelöst haben.</p>
            </div>
            <div className="space-y-6">
              <h5 style={{ color: accentColor }} className="font-black text-6xl italic">Safe</h5>
              <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-bold">Klinische Sicherheit</p>
              <p className="text-xs text-white/20 italic">Abrechnung, Hygiene und Rechtliches – alles aus einer Hand.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentoringBookingPage;