
import React, { useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import ScrollytellingCanvas from './ScrollytellingCanvas';
import OverlayText from './OverlayText';
import { MESO_BEATS, getFrameUrl } from '../constants';

interface MesotherapyPageProps {
  onBack: () => void;
}

const MesotherapyPage: React.FC<MesotherapyPageProps> = ({ onBack }) => {
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="relative min-h-[400vh] bg-[#050505]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <button 
          onClick={onBack}
          className="text-[10px] tracking-[0.4em] text-white/60 hover:text-white transition-all uppercase flex items-center group"
        >
          <span className="mr-4 group-hover:-translate-x-2 transition-transform">←</span> Zurück
        </button>
        <span className="text-[10px] tracking-[0.4em] text-white uppercase font-black">Meso & Skinbooster</span>
      </nav>

      <div className="relative h-[400vh] z-10">
        <ScrollytellingCanvas 
          onProgress={setLoadProgress} 
          onLoaded={() => setIsLoaded(true)} 
          customFrameUrl={(i) => getFrameUrl(i, 'mesotherapy')}
        />

        <div className="sticky top-0 h-screen w-full pointer-events-none overflow-hidden">
          {MESO_BEATS.map((beat) => (
            <OverlayText 
              key={beat.id} 
              beat={beat} 
              scrollProgress={scrollYProgress} 
            />
          ))}
          
          <motion.div 
            style={{ opacity: indicatorOpacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30"
          >
            <span className="text-[10px] tracking-[0.5em] text-[#E2C3B1]/60 uppercase mb-4">The Depth of Glow</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-[#E2C3B1]/60 to-transparent" 
            />
          </motion.div>
        </div>
      </div>

      {/* Detail Section */}
      <section className="relative z-20 bg-[#050505] py-48 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h4 className="text-[10px] font-bold tracking-[0.5em] text-[#E2C3B1] uppercase">Das Konzept</h4>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
                Sinnvolle <br /> Hautpflege.
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                Die medizinisch-ästhetische Mesotherapie sorgt dafür, dass Überkorrekturen unmöglich werden. Sie trägt ihren Namen deshalb, weil hauptsächlich die mittlere („meso") Hautschicht behandelt wird.
              </p>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                Die Wirkung beruht auf der Zuführung individuell abgestimmter Cocktails bei gleichzeitiger Ausnutzung des natürlichen Wundheilungseffekts der Haut.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { title: 'Faltenbehandlung', desc: 'Augenringe, Stirnfalten, Mundpartie.' },
                 { title: 'Hautdichte', desc: 'Verbesserung der Spannkraft & Flexibilität.' },
                 { title: 'Hydration', desc: 'Tiefenwirksame Befeuchtung dehydrierter Haut.' },
                 { title: 'Regeneration', desc: 'Sonnengeschädigte Haut & Akne-Narben.' }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl"
                 >
                   <h5 className="text-[#E2C3B1] text-xs font-bold tracking-widest uppercase mb-4">{item.title}</h5>
                   <p className="text-white/40 text-sm font-light">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>

          <div className="border-t border-white/5 pt-48">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="aspect-[4/5] rounded-[40px] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000"
               >
                 <img src="https://picsum.photos/seed/skinbooster-results/800/1000" className="w-full h-full object-cover" alt="Skinbooster Results" />
               </motion.div>
               
               <div className="space-y-16">
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.5em] text-[#E2C3B1] uppercase mb-8">Der Skinbooster</h4>
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                      Glanz & Straffung.
                    </h3>
                    <p className="text-white/40 text-lg font-light leading-relaxed mb-8">
                      Hier setzen wir Hyaluronsäure mit Kalzium-Hydroxylapatit ein. Die Behandlung wird schonend mit der stumpfen Kanüle durchgeführt, um ein Maximum an Glanz und Straffung zu erzielen.
                    </p>
                  </div>
                  
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <h5 className="text-white text-sm font-bold tracking-widest uppercase">Einsatzbereiche</h5>
                      <div className="flex flex-wrap gap-3">
                        {['Wangen', 'Kinn', 'Oberlippe', 'Hals', 'Dekolleté', 'Handrücken'].map(tag => (
                          <span key={tag} className="px-4 py-2 bg-white/5 text-white/40 text-[10px] font-bold tracking-widest uppercase rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-12 bg-gradient-pearl rounded-[40px] border border-white/5">
                      <div className="flex justify-between items-end mb-8">
                        <div>
                          <p className="text-[10px] tracking-[0.4em] text-[#E2C3B1] uppercase mb-2">Behandlung</p>
                          <h4 className="text-white text-2xl font-black uppercase">Preisliste</h4>
                        </div>
                        <div className="text-right">
                           <p className="text-white/20 text-[10px] uppercase mb-2">Ab</p>
                           <p className="text-white text-3xl font-bold">280€</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 pt-8 border-t border-white/5">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/40 font-light">Mesotherapie Session</span>
                          <span className="text-white font-bold">350€</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/40 font-light">Skinbooster Session</span>
                          <span className="text-white font-bold">280€</span>
                        </div>
                      </div>

                      <button className="w-full mt-12 py-6 btn-premium font-black text-[10px] tracking-[0.3em] uppercase rounded-full">
                        Termin Online Buchen
                      </button>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-[#050505] z-30 overflow-hidden py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E2C3B1]/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center z-10 px-6"
        >
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12 uppercase leading-none">Fühle Dich wohl <br/> in Deiner Haut.</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
             <button className="px-12 py-5 btn-premium text-black font-bold uppercase text-[10px] tracking-[0.3em] rounded-full shadow-xl">
               Beratungstermin Buchen
             </button>
             <button className="px-12 py-5 border border-white/20 text-white font-bold uppercase text-[10px] tracking-[0.3em] rounded-full hover:bg-white/5 transition-all">
               WhatsApp Anfrage
             </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MesotherapyPage;
