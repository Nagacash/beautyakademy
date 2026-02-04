import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { FRAME_COUNT, getFrameUrl } from '../constants';

interface ScrollytellingCanvasProps {
  onProgress: (p: number) => void;
  onLoaded: () => void;
  customFrameUrl?: (index: number) => string;
  bgColor?: string;
}

const ScrollytellingCanvas: React.FC<ScrollytellingCanvasProps> = ({ 
  onProgress, 
  onLoaded, 
  customFrameUrl, 
  bgColor = '#050505' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesReady, setImagesReady] = useState(false);
  
  const { scrollYProgress } = useScroll();
  
  // Use spring for buttery smoothness
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Responsive drawing logic
  const drawFrame = (index: number, imageList: HTMLImageElement[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imageList[index];
    if (!img) return;

    // Responsive scaling (contain)
    const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Preload Images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;
    const urlProvider = customFrameUrl || ((i: number) => getFrameUrl(i));

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = urlProvider(i);
      img.onload = () => {
        count++;
        onProgress((count / FRAME_COUNT) * 100);
        if (count === FRAME_COUNT) {
          setImages(loadedImages);
          setImagesReady(true);
          onLoaded();
        }
      };
      loadedImages.push(img);
    }
  }, [customFrameUrl]);

  // Initial draw and Resize handling
  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
        canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
        canvasRef.current.style.width = `${window.innerWidth}px`;
        canvasRef.current.style.height = `${window.innerHeight}px`;
        if (imagesReady) {
          drawFrame(Math.floor(frameIndex.get()), images);
        }
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [images, imagesReady, bgColor]);

  // Explicitly draw first frame when images become ready or color changes
  useEffect(() => {
    if (imagesReady) {
      drawFrame(Math.floor(frameIndex.get()), images);
    }
  }, [imagesReady, bgColor]);

  // Hook into the motion value to trigger re-renders on the canvas as user scrolls
  useEffect(() => {
    const unsubscribe = frameIndex.on('change', (v) => {
      if (imagesReady) {
        drawFrame(Math.floor(v), images);
      }
    });
    return () => unsubscribe();
  }, [images, imagesReady, frameIndex, bgColor]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full object-contain"
      />
      {/* Enhanced Dynamic Vignette Overlay - Updated to Gold tint */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-colors duration-1000 ${
          bgColor === '#050505' 
            ? 'bg-gradient-to-b from-black/70 via-transparent to-black/90 shadow-[inset_0_0_300px_rgba(0,0,0,0.8)]' 
            : 'bg-gradient-to-b from-white/40 via-transparent to-white/50 shadow-[inset_0_0_200px_rgba(217,177,111,0.15)]'
        }`} 
      />
    </div>
  );
}; export default ScrollytellingCanvas;