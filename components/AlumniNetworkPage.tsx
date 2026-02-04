
import React, { useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import ScrollytellingCanvas from './ScrollytellingCanvas';
import OverlayText from './OverlayText';
import { ALUMNI_BEATS, getFrameUrl } from '../constants';

interface AlumniNetworkPageProps {
  onBack: () => void;
}

const AlumniNetworkPage: React.FC<AlumniNetworkPageProps> = ({ onBack }) => {
  const [loadProgress, setLoadProgress] = useState(100);
  const [isLoaded, setIsLoaded] = useState(true);
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-[400vh] bg-[#050505]">
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <button onClick={onBack} className="text-[10px] tracking-[0.4em] text-white/60 hover:text-white transition-all uppercase flex items-center group">
          <span className="mr-4 group-hover:-translate-x-2 transition-transform">←</span> Return
        </button>
        <span className="text-[10px] tracking-[0.4em] text-white uppercase font-black">Global Community</span>
      </nav>

      <div className="relative h-[400vh] z-10">
        <ScrollytellingCanvas onProgress={setLoadProgress} onLoaded={() => setIsLoaded(true)} customFrameUrl={(i) => getFrameUrl(i, 'alumni-network')} />
        <div className="sticky top-0 h-screen w-full pointer-events-none overflow-hidden">
          {ALUMNI_BEATS.map((beat) => (
            <OverlayText key={beat.id} beat={beat} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>

      <section className="relative z-20 bg-[#050505] py-48 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase mb-12">The Power of <br/> Many.</h2>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-12">
              Our alumni directory connects the world’s most successful aesthetic clinics. By joining the network, you gain lifetime access to quarterly research updates and invitation-only summits.
            </p>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-[10px] tracking-widest text-white/30 uppercase">Active Practitioners</span>
                <span className="text-white font-bold">5,200+</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-[10px] tracking-widest text-white/30 uppercase">Countries</span>
                <span className="text-white font-bold">42</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-[10px] tracking-widest text-white/30 uppercase">Annual Summit</span>
                <span className="text-white font-bold">Zurich & Dubai</span>
              </div>
            </div>
          </div>
          <div className="aspect-square bg-white/[0.02] border border-white/10 rounded-full flex items-center justify-center p-24 text-center">
            <h3 className="text-3xl font-black tracking-tight text-white uppercase">One Collective <br/> Vision for <br/> Bio-Aesthetics.</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniNetworkPage;
