import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';

const AssetGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [assetType, setAssetType] = useState<'image' | 'video' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async (type: 'hero' | 'exploded') => {
    setIsGenerating(true);
    setError(null);
    setAssetType('image');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = type === 'hero' 
        ? "Close-up of a premium beauty artist's hand holding a high-end aesthetic syringe, soft lavender clinical lighting, glamorous medical academy setting, high-end luxury feel for young women, soft focus, 8k, ultra-realistic."
        : "Exploded view of a luxury lavender filler syringe, floating glass components, needle with soft purple glow, cinematic rim lighting on stone background, high-end medical beauty academy design aesthetic.";

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: prompt }] },
      });

      const part = response.candidates[0].content.parts.find(p => p.inlineData);
      if (part?.inlineData) {
        setGeneratedUrl(`data:image/png;base64,${part.inlineData.data}`);
      } else {
        throw new Error("Generation failed");
      }
    } catch (err: any) {
      setError(err.message || "Failed to generate image");
    } finally {
      setIsGenerating(false);
    }
  };

  const generateVideo = async () => {
    setIsGenerating(true);
    setError(null);
    setAssetType('video');
    try {
      if (!(await window.aistudio.hasSelectedApiKey())) {
        await window.aistudio.openSelectKey();
      }
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'Macro shot of a high-end lavender filler being precisely injected into a glamorous surface, slow motion, clinical purple and white aesthetic, 4k, professional academy vibe.',
        config: { resolution: '720p', aspectRatio: '16:9' }
      });

      while (!operation.done) {
        await new Promise(r => setTimeout(r, 10000));
        operation = await ai.operations.getVideosOperation({ operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        setGeneratedUrl(URL.createObjectURL(blob));
      }
    } catch (err: any) {
      setError(err.message || "Failed to generate video");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end">
      <AnimatePresence>
        {generatedUrl && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 relative group"
          >
            {assetType === 'image' ? (
              <img src={generatedUrl} className="w-48 h-48 object-cover rounded-lg border border-purple-500/20 shadow-2xl" alt="Generated" />
            ) : (
              <video src={generatedUrl} autoPlay loop muted className="w-48 h-27 object-cover rounded-lg border border-purple-500/20 shadow-2xl" />
            )}
            <button 
              onClick={() => setGeneratedUrl(null)}
              className="absolute -top-2 -right-2 bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col space-y-2">
        <div className="flex space-x-2">
          <button onClick={() => generateImage('hero')} disabled={isGenerating} className="generator-btn">
            {isGenerating && assetType === 'image' ? 'LÄDT...' : 'GLAM HERO'}
          </button>
          <button onClick={() => generateImage('exploded')} disabled={isGenerating} className="generator-btn">
             {isGenerating && assetType === 'image' ? 'LÄDT...' : 'GLAM EXPLODED'}
          </button>
        </div>
        <button onClick={generateVideo} disabled={isGenerating} className="generator-btn w-full !bg-purple-500/10">
          {isGenerating && assetType === 'video' ? 'VIDEO GENERIERUNG (WARTEN)...' : 'CINEMATIC ARTIST VIDEO'}
        </button>
      </div>
      
      {error && <p className="text-red-500 text-[10px] mt-2 bg-black/80 px-2 py-1 rounded">{error}</p>}
      
      <style>{`
        .generator-btn {
          background: rgba(192, 132, 252, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(192, 132, 252, 0.2);
          color: #C084FC;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 9999px;
          transition: all 0.2s;
        }
        .generator-btn:hover { background: rgba(192, 132, 252, 0.2); }
        .generator-btn:disabled { opacity: 0.5; cursor: not-allowed; }
      `}</style>
    </div>
  );
};

export default AssetGenerator;