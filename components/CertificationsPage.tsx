
import React, { useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import ScrollytellingCanvas from './ScrollytellingCanvas';
import OverlayText from './OverlayText';
import { CERT_BEATS, getFrameUrl } from '../constants';

interface CertificationsPageProps {
  onBack: () => void;
}

const CertificationsPage: React.FC<CertificationsPageProps> = ({ onBack }) => {
  const [loadProgress, setLoadProgress] = useState(100);
  const [isLoaded, setIsLoaded] = useState(true);
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-[400vh] bg-[#050505]">
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <button onClick={onBack} className="text-[10px] tracking-[0.4em] text-white/60 hover:text-white transition-all uppercase flex items-center group">
          <span className="mr-4 group-hover:-translate-x-2 transition-transform">←</span> Return
        </button>
        <span className="text-[10px] tracking-[0.4em] text-white uppercase font-black">Accreditation</span>
      </nav>

      <div className="relative h-[400vh] z-10">
        <ScrollytellingCanvas onProgress={setLoadProgress} onLoaded={() => setIsLoaded(true)} customFrameUrl={(i) => getFrameUrl(i, 'certifications')} />
        <div className="sticky top-0 h-screen w-full pointer-events-none overflow-hidden">
          {CERT_BEATS.map((beat) => (
            <OverlayText key={beat.id} beat={beat} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>

      <section className="relative z-20 bg-[#050505] py-48 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase mb-12">The Global <br/> Standard.</h2>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Our certifications are not just diplomas; they are recognized validations of technical mastery. Every module concludes with a rigorous clinical evaluation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 uppercase">Clinical Accreditation</h3>
              <p className="text-white/40 text-sm">Recognized by the International Board of Aesthetic Practitioners (IBAP).</p>
            </div>
            <div className="p-12 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 uppercase">Biotech Verified</h3>
              <p className="text-white/40 text-sm">Certified in advanced mitochondrial and hypoxic delivery protocols.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
