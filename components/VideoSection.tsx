import React from 'react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  const accentColor = '#D9B16F';

  return (
    <section className="relative z-20 bg-[#050505] py-32 md:py-48 px-6 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h4 style={{ color: accentColor }} className="font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Masterclass Insights</h4>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-tight">
            PRÄZISION ERLEBEN.<br />ARTIST TRAINING.
          </h2>
          <p className="mt-8 text-white/40 text-sm font-light max-w-xl mx-auto leading-relaxed">
            Wir stehen direkt neben Dir. In unseren Mentorship-Sessions führen wir Deine Hand und geben Dir die Sicherheit, die Du für perfekte ästhetische Ergebnisse am echten Artist-Modell benötigst.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-[40px] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(217,177,111,0.1)] group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
          <iframe 
            className="absolute inset-0 w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            src="https://www.youtube.com/embed/iLEzgjNtojw?si=isIXGOOmEL4xzo_U&rel=0&modestbranding=1"
            title="BeautyAkademy Showcase"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Technik', value: 'Micro-Injektion' },
            { label: 'Fokus', value: 'Lippen-Architektur' },
            { label: 'Level', value: 'Masterclass' },
            { label: 'Support', value: '1:1 Mentoring' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="flex flex-col items-center"
            >
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20 mb-2">{stat.label}</h5>
              <p className="text-white text-xs font-medium uppercase tracking-widest">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background glow for the video section */}
      <div style={{ backgroundColor: accentColor }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] blur-[150px] pointer-events-none" />
    </section>
  );
};

export default VideoSection;