import { BeatData, PageType } from './types';

export const FRAME_COUNT = 7;
export const BG_COLOR = '#FAFAF9';

export const HOME_BEATS: BeatData[] = [
  {
    id: 'hero',
    title: 'THE ARTIST LEGACY',
    subtitle: 'Where clinical precision meets iconic glamour.',
    alignment: 'center',
    range: [0, 0.12]
  },
  {
    id: 'botox-reveal',
    title: 'LIP ARCHITECTURE',
    subtitle: 'Redefining the silhouette of high-fashion beauty.',
    alignment: 'left',
    range: [0.15, 0.28]
  },
  {
    id: 'filler-reveal',
    title: 'GLAMOUR SCULPT',
    subtitle: 'The modern Hollywood profile, engineered for you.',
    alignment: 'right',
    range: [0.32, 0.45]
  },
  {
    id: 'meso-reveal',
    title: 'ELITE GLOW',
    subtitle: 'Reclaiming your inner radiance at a cellular level.',
    alignment: 'left',
    range: [0.50, 0.62]
  },
  {
    id: 'training-reveal',
    title: 'THE MENTORSHIP',
    subtitle: 'Elite artist coaching. Establish your global brand.',
    alignment: 'right',
    range: [0.68, 0.80]
  },
  {
    id: 'cta',
    title: 'OWN YOUR FUTURE',
    subtitle: 'Your journey into the world of elite aesthetics starts here.',
    alignment: 'center',
    range: [0.85, 0.98]
  }
];

export const getFrameUrl = (index: number, page: PageType = 'home'): string => {
  const localImages = ['/images/so1.jpg', '/images/so2.jpg', '/images/so3.jpg', '/images/so4.jpg', '/images/so5.jpg', '/images/so6.jpg', '/images/so7.jpg'];
  return localImages[index % localImages.length];
};

export const HYALURONIC_BEATS = [
  { id: 'hy-1', title: 'ICONIC GEOMETRY', subtitle: 'The new foundation of medical beauty.', alignment: 'center' as const, range: [0, 0.2] as [number, number] },
  { id: 'hy-2', title: 'TOTAL GLAMOUR', subtitle: 'Transformation without a single compromise.', alignment: 'left' as const, range: [0.3, 0.5] as [number, number] },
  { id: 'hy-3', title: 'MASTER ARTIST', subtitle: 'Step into the circle of clinical excellence.', alignment: 'center' as const, range: [0.85, 0.98] as [number, number] }
];

export const MITOCHONDRIEN_BEATS = [
  { id: 'mi-1', title: 'THE CORE RADIANCE', subtitle: 'Establish your beauty at the atomic level.', alignment: 'center' as const, range: [0, 0.2] as [number, number] },
  { id: 'mi-2', title: 'CELLULAR ART', subtitle: 'A protocol for a timeless clinical existence.', alignment: 'center' as const, range: [0.85, 0.98] as [number, number] }
];

export const HYPOXIE_BEATS = [
  { id: 'ht-1', title: 'OXYGEN REVOLUTION', subtitle: 'The vital breath in every fiber of the skin.', alignment: 'center' as const, range: [0, 0.2] as [number, number] },
  { id: 'ht-2', title: 'THE SUMMIT', subtitle: 'Peak performance for an effortless glow.', alignment: 'center' as const, range: [0.85, 0.98] as [number, number] }
];

export const MASTERCLASS_BEATS = [
  { id: 'ms-1', title: 'THE REVEAL', subtitle: 'Graduation into the elite tier of artistry.', alignment: 'center' as const, range: [0, 0.2] as [number, number] },
  { id: 'ms-2', title: 'AESTHETIC EMPIRE', subtitle: 'The blueprint for your own global icon brand.', alignment: 'center' as const, range: [0.85, 0.98] as [number, number] }
];

export const MESO_BEATS: BeatData[] = [
  { id: 'meso-1', title: 'THE SKIN CANVAS', subtitle: 'High-end artistry in every clinical drop.', alignment: 'center', range: [0, 0.2] },
  { id: 'meso-2', title: 'ULTIMATE SHINE', subtitle: 'Establishing your legacy of perfection.', alignment: 'center', range: [0.85, 0.98] }
];

export const STORY_BEATS: BeatData[] = [
  { id: 'story-1', title: 'OUR LEGACY', subtitle: 'Where technical precision met pure fashion.', alignment: 'center', range: [0, 0.15] },
  { id: 'story-2', title: 'YOUR SUCCESS', subtitle: 'The future of the beauty icon is yours.', alignment: 'center', range: [0.8, 0.98] }
];

export const FACULTY_BEATS: BeatData[] = [
  { id: 'fac-1', title: 'THE VISIONARIES', subtitle: 'Mentorship from the industry’s true icons.', alignment: 'center', range: [0, 0.2] },
  { id: 'fac-2', title: 'THE COLLECTIVE', subtitle: 'Joining the most exclusive medical circle.', alignment: 'center', range: [0.85, 0.98] }
];

export const MENTORING_BEATS: BeatData[] = [
  { id: 'men-1', title: '1:1 ELITE ACCESS', subtitle: 'Total clinical dominance, engineered for you.', alignment: 'center', range: [0, 0.2] },
  { id: 'men-2', title: 'THE ASCENSION', subtitle: 'Becoming the star of your own medical empire.', alignment: 'center', range: [0.85, 0.98] }
];

export const CERT_BEATS = STORY_BEATS;
export const ALUMNI_BEATS = STORY_BEATS;