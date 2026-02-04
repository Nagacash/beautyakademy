import React from 'react';
import { motion } from 'framer-motion';

interface LiquidGlassBackgroundProps {
  theme?: 'light' | 'dark';
}

const LiquidGlassBackground: React.FC<LiquidGlassBackgroundProps> = ({ theme = 'light' }) => {
  const blobs = [
    { size: 'w-[1800px] h-[1800px]', color: 'bg-[#D9B16F]/10', delay: 0, duration: 55 }, 
    { size: 'w-[1400px] h-[1400px]', color: 'bg-[#F3E5AB]/15', delay: 5, duration: 45 },
    { size: 'w-[1200px] h-[1200px]', color: 'bg-[#FFFFFF]/10', delay: 10, duration: 65 },
    { size: 'w-[1500px] h-[1500px]', color: 'bg-[#B8860B]/12', delay: 2, duration: 60 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden gooey-container opacity-70">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[220px] ${blob.size} ${blob.color}`}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            scale: 1 
          }}
          animate={{
            x: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%'
            ],
            y: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%'
            ],
            scale: [1, 1.4, 0.7, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            delay: blob.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Liquid Gold Flow Path */}
      <svg className="absolute inset-0 w-full h-full opacity-50">
        <motion.path
          d="M -300 700 Q 600 350 1500 700 T 2500 700"
          fill="none"
          stroke="#D9B16F"
          strokeWidth="1.5"
          animate={{
            d: [
              "M -300 700 Q 600 350 1500 700 T 2500 700",
              "M -300 800 Q 750 450 1600 800 T 2500 800",
              "M -300 700 Q 600 350 1500 700 T 2500 700"
            ]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default LiquidGlassBackground;