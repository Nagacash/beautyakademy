import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { BeatData } from '../types';

interface OverlayTextProps {
  beat: BeatData;
  scrollProgress: MotionValue<number>;
  theme?: 'light' | 'dark';
}

const OverlayText: React.FC<OverlayTextProps> = ({ beat, scrollProgress, theme = 'light' }) => {
  const [start, end] = beat.range;
  const fadeInEnd = start + 0.1;
  const fadeOutStart = end - 0.1;

  const opacity = useTransform(
    scrollProgress,
    [start, fadeInEnd, fadeOutStart, end],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollProgress,
    [start, fadeInEnd, fadeOutStart, end],
    [60, 0, 0, -60]
  );

  const scale = useTransform(
    scrollProgress,
    [start, fadeInEnd, fadeOutStart, end],
    [0.9, 1, 1, 1.1]
  );

  // Specific transform for the CTA button to make it pop more
  const ctaButtonScale = useTransform(
    scrollProgress,
    [start, fadeInEnd, fadeOutStart, end],
    [0.7, 1.1, 1.1, 0.7]
  );

  const ctaButtonShadow = useTransform(
    scrollProgress,
    [start, fadeInEnd, fadeOutStart, end],
    [
      "0 0px 0px rgba(217, 177, 111, 0)",
      "0 30px 60px rgba(217, 177, 111, 0.4)",
      "0 30px 60px rgba(217, 177, 111, 0.4)",
      "0 0px 0px rgba(217, 177, 111, 0)"
    ]
  );

  const alignmentClasses = {
    left: 'items-start text-left px-8 md:pl-24 lg:pl-48',
    right: 'items-end text-right px-8 md:pr-24 lg:pr-48',
    center: 'items-center text-center px-8',
  };

  const isDark = theme === 'dark';
  const titleColor = isDark ? 'text-white' : 'text-[#050505]';
  const subtitleTextColor = isDark ? 'text-white' : 'text-[#050505]';

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className={`absolute inset-0 flex flex-col justify-center pointer-events-none z-20 ${alignmentClasses[beat.alignment]}`}
    >
      <motion.h2
        className={`font-black tracking-tighter leading-[0.9] mb-8 md:mb-12 uppercase transition-colors duration-1000 text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] vogue-serif ${titleColor}`}
        style={{
          textShadow: isDark ? '0 10px 30px rgba(0,0,0,0.8)' : 'none'
        }}
      >
        {beat.title}
      </motion.h2>

      <motion.div
        className={`px-6 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl backdrop-blur-2xl border shadow-2xl inline-block max-w-full md:max-w-4xl`}
        initial={{
          opacity: 0,
          scale: 0.9,
          backgroundColor: isDark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)",
          borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
        }}
        animate={{
          opacity: 1,
          scale: 1,
          backgroundColor: isDark
            ? ["rgba(0,0,0,0.4)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.4)"]
            : ["rgba(255,255,255,0.4)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.4)"],
          borderColor: isDark
            ? ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)"]
            : ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.1)"]
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.2 },
          scale: { duration: 0.8, delay: 0.2 },
          backgroundColor: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          },
          borderColor: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <p
          className={`text-xl md:text-4xl lg:text-5xl font-medium italic tracking-tight leading-[1.2] vogue-serif ${subtitleTextColor}`}
        >
          {beat.subtitle}
        </p>
      </motion.div>

      {beat.id === 'cta' && (
        <motion.button
          style={{ scale: ctaButtonScale, boxShadow: ctaButtonShadow }}
          className="mt-16 md:mt-32 px-10 py-5 md:px-32 md:py-12 btn-money text-[14px] md:text-[22px] lg:text-[28px] uppercase tracking-[0.5em] md:tracking-[0.8em] rounded-full pointer-events-auto shadow-2xl relative overflow-hidden group"
          whileHover={{ scale: 1.15, rotate: -1 }}
          whileTap={{
            scale: 0.94,
            y: 4,
            boxShadow: "0 10px 20px -10px rgba(217, 177, 111, 0.8)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <span className="relative z-10">JOIN THE ELITE</span>
          <motion.div
            className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        </motion.button>
      )}
    </motion.div>
  );
};

export default OverlayText;