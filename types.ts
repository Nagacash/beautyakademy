export type PageType = 'home' | 'pro-hyaluronic' | 'mitochondrien' | 'hypoxie-tech' | 'masterclass-2025' | 'our-story' | 'faculty' | 'certifications' | 'alumni-network' | 'mesotherapy' | 'mentoring-booking' | 'privacy' | 'tos' | 'impressum';

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export interface BeatData {
  id: string;
  title: string;
  subtitle: string;
  alignment: 'left' | 'right' | 'center';
  range: [number, number]; // [startScroll, endScroll] 0-1
}

export interface FrameAsset {
  id: number;
  url: string;
}