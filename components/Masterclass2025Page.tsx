
import React from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import ScrollytellingCanvas from './ScrollytellingCanvas';
import OverlayText from './OverlayText';
import { MASTERCLASS_BEATS, getFrameUrl } from '../constants';

interface Masterclass2025PageProps {
  onBack: () => void;
}

const Masterclass2025Page: React.FC<Masterclass2025PageProps> = ({ onBack }) => {

  const { scrollYProgress } = useScroll();

  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="relative min-h-[400vh] bg-[#050505]">
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <button
          onClick={onBack}
          className="text-[10px] tracking-[0.4em] text-white/60 hover:text-white transition-all uppercase flex items-center group"
        >
          <span className="mr-4 group-hover:-translate-x-2 transition-transform">←</span> Return
        </button>
        <span className="text-[10px] tracking-[0.4em] text-white uppercase font-black">The Summit</span>
      </nav>

      <div className="relative h-[400vh] z-10">
        <ScrollytellingCanvas
          onProgress={() => { }}
          onLoaded={() => { }}
          customFrameUrl={(i) => getFrameUrl(i, 'masterclass-2025')}
        />

        <div className="sticky top-0 h-screen w-full pointer-events-none overflow-hidden">
          {MASTERCLASS_BEATS.map((beat) => (
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
            <span className="text-[10px] tracking-[0.5em] text-[#E2C3B1]/60 uppercase mb-4">The Global Summit</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-[#E2C3B1]/60 to-transparent"
            />
          </motion.div>
        </div>
      </div>

      <section className="relative z-20 bg-[#050505] py-48 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase mb-12">
                A Synergy of <br /> Clinical Excellence.
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed mb-8">
                The 2025 Masterclass is the definitive convergence of biotechnology and high-end aesthetic practice. We move beyond single-modality training into a comprehensive, unified approach to facial architecture and longevity.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="text-white font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Location</h4>
                  <p className="text-white/60 text-sm">Zurich, Switzerland</p>
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Date</h4>
                  <p className="text-white/60 text-sm">October 14-16, 2025</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-[#E2C3B1]/[0.01] rounded-2xl border border-[#E2C3B1]/10 flex flex-col p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E2C3B1]/5 to-transparent blur-3xl opacity-50" />
              <div className="z-10 h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold tracking-[0.5em] text-[#E2C3B1]/20 uppercase mb-8">Exclusive Access</h4>
                  <p className="text-white text-3xl font-black tracking-tight uppercase leading-none">Limited to 50 Elite Attendees.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[10px] text-white/40 uppercase">Invites Sent</span>
                    <span className="text-[10px] text-white">42/50</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[10px] text-white/40 uppercase">Waitlist</span>
                    <span className="text-[10px] text-white">1,200+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative h-screen flex flex-col items-center justify-center bg-[#050505] z-30 overflow-hidden py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E2C3B1]/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center z-10 px-6"
        >
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12 uppercase leading-none">Elevate Your <br /> Standard.</h2>
          <button className="px-16 py-6 btn-premium text-black font-bold uppercase text-[10px] tracking-[0.3em] rounded-full shadow-xl shadow-[#E2C3B1]/5">
            Apply for Invitation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Masterclass2025Page;
