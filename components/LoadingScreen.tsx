import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  progress: number;
  isComplete: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress, isComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] ${isComplete ? 'pointer-events-none' : ''}`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D9B16F]/[0.05] rounded-full blur-[150px] pointer-events-none" />
      
      <motion.div 
        className="mb-12 relative overflow-hidden text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-[0.5em] text-shimmer-glamour uppercase mb-2">
          BEAUTYAKADEMY
        </h2>
        <p className="text-[10px] tracking-[0.8em] text-white/20 uppercase font-black">Establishing The Legend</p>
      </motion.div>
      
      <div className="w-80 h-[1px] bg-white/5 relative overflow-hidden">
        <motion.div 
          className="absolute inset-y-0 left-0 bg-[#D9B16F] shadow-[0_0_15px_#D9B16F]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />
      </div>
      
      <div className="mt-8 flex items-center space-x-6">
        <motion.div 
          animate={{ opacity: [0.1, 1, 0.1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-[#D9B16F]"
        />
        <motion.p 
          className="text-[11px] tracking-[0.6em] text-white/30 font-black uppercase"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {Math.round(progress)}% Clinical Ready
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;