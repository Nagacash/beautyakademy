import React from 'react';
import { motion } from 'framer-motion';

interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  oldPrice: string;
  newPrice: string;
  duration: string;
  description: string;
  img: string;
}

const offers: SpecialOffer[] = [
  {
    id: 'lips',
    title: 'Lippenauffüllung',
    subtitle: 'Volume & Contour',
    oldPrice: '400€',
    newPrice: '199€',
    duration: 'ca. 60 Minuten',
    description: 'Verleihen Sie Ihren Lippen unwiderstehliches Volumen und perfekte Kontur – für sinnliche, verführerische Lippen.',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=450&fit=crop'
  },
  {
    id: 'threads',
    title: 'Fadenlifting',
    subtitle: 'Straffungsverfahren',
    oldPrice: '540€',
    newPrice: '490€',
    duration: 'ca. 60 Minuten',
    description: 'Ein spezielles Verfahren, bei dem das Gesicht mit Hilfe von Fäden unter der Haut gezogen wird. Diese lösen sich zeitlich auf.',
    img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=450&fit=crop'
  },
  {
    id: 'lipolyse',
    title: 'Injektionslipolyse',
    subtitle: 'Fett-weg-Spritze',
    oldPrice: '340€',
    newPrice: '299€',
    duration: 'ca. 45 Minuten',
    description: 'Hilft die Struktur von Fettdepots in bestimmten Körperregionen zu zerstören und unterstützt das Schmelzen der Fette.',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=450&fit=crop'
  },
  {
    id: 'lymph',
    title: 'Lymphdrainage',
    subtitle: 'Detox & Recovery',
    oldPrice: '110€',
    newPrice: '99€',
    duration: 'ca. 60 Minuten',
    description: 'Unterstützt den natürlichen Lymphfluss und hilft bei der Regeneration des Gewebes nach ästhetischen Eingriffen.',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop'
  }
];

interface TreatmentSpecialsProps {
  theme?: 'light' | 'dark';
}

const TreatmentSpecials: React.FC<TreatmentSpecialsProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';
  const accentColor = '#D9B16F'; // Updated to Gold

  return (
    <section className="relative z-20 py-20 md:py-32 px-6 lg:px-24 overflow-hidden">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h4 className="font-bold tracking-[0.5em] text-[#D9B16F] uppercase mb-4 text-[10px] md:text-[11px]">Limited Training Offers</h4>
            <h2 className={`font-black tracking-tighter uppercase leading-none text-4xl sm:text-5xl md:text-7xl ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
              ARTIST SPECIALS.
            </h2>
          </div>
          <p className="text-base md:text-lg font-light text-[#78716C] max-w-sm leading-relaxed italic">
            Sonderkonditionen für Behandlungen durch unsere Artist-Absolventen unter klinischer Aufsicht.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group relative rounded-[32px] md:rounded-[40px] overflow-hidden border-2 p-6 md:p-10 flex flex-col justify-between h-full card-lift ${isDark ? 'bg-[#1C1917]/80' : 'bg-white'
                }`}
              style={{
                borderColor: '#D9B16F',
                boxShadow: '0 0 30px rgba(217, 177, 111, 0.15), inset 0 0 60px rgba(217, 177, 111, 0.03)'
              }}
            >
              <div className="space-y-6 md:space-y-8 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight leading-none ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
                      {offer.title}
                    </h3>
                    <p className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-[#D9B16F]">{offer.subtitle}</p>
                  </div>
                </div>

                <div className="aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden border border-black/5">
                  <img
                    src={offer.img.startsWith('/') || offer.img.startsWith('http') ? offer.img : `https://picsum.photos/seed/${offer.img}/600/450`}
                    alt={offer.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                </div>

                <p className={`text-sm font-light leading-relaxed ${isDark ? 'text-white/40' : 'text-[#78716C]'}`}>
                  {offer.description}
                </p>
              </div>

              <div className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-black/5 relative z-10 flex flex-col gap-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className={`text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-white/20' : 'text-black/20'}`}>Behandlungsdauer</p>
                    <p className={`text-[11px] md:text-xs font-bold ${isDark ? 'text-white/60' : 'text-black/60'}`}>{offer.duration}</p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center justify-end space-x-2 md:space-x-3 mb-1">
                      <p className={`text-[11px] md:text-xs font-bold line-through opacity-30 ${isDark ? 'text-white' : 'text-black'}`}>
                        {offer.oldPrice}
                      </p>
                      <p className="text-2xl md:text-3xl font-black italic tracking-tighter" style={{ color: accentColor }}>
                        {offer.newPrice}
                      </p>
                    </div>
                    <p className={`text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-white/20' : 'text-black/20'}`}>Preis: JETZT ANFRAGEN</p>
                  </div>
                </div>

                <button
                  className={`w-full py-4 md:py-5 rounded-full text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all duration-500 ${isDark ? 'bg-white text-black hover:bg-[#D9B16F]' : 'bg-black text-white hover:bg-[#D9B16F]'
                    }`}
                >
                  MODUL-TERMIN BUCHEN
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSpecials;