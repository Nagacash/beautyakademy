import React from 'react';
import { motion } from 'framer-motion';

interface FloatingParticlesProps {
  theme?: 'dark' | 'light';
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ theme = 'dark' }) => {
  const particles = Array.from({ length: 40 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full transition-colors duration-500 ${theme === 'dark' ? 'bg-[#D9B16F]/40' : 'bg-[#D9B16F]/60'}`}
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -200 - 100],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 0.8, 0],
            scale: [0, 2, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 20,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;