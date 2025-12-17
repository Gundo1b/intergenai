import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Sparkles, Palette, Image as ImageIcon, Layers, Zap, Shield, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { Theme } from '../types';

interface AIImageProps {
  theme: Theme;
}

interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  provider: string;
  timestamp: Date;
}

const AI_IMAGE_PROVIDERS = [
  { name: 'DALL-E', id: 'dalle', color: 'text-green-500', description: 'OpenAI DALL-E' },
  { name: 'Midjourney', id: 'midjourney', color: 'text-purple-500', description: 'High-quality artistic images' },
  { name: 'Stable Diffusion', id: 'stablediffusion', color: 'text-blue-500', description: 'Open-source image generation' },
  { name: 'Imagen', id: 'imagen', color: 'text-orange-500', description: 'Google Imagen' },
];

export const AIImage: React.FC<AIImageProps> = ({ theme }) => {
  const [prompt, setPrompt] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('dalle');
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        url: `https://picsum.photos/512/512?random=${Date.now()}`,
        prompt: prompt,
        provider: selectedProvider,
        timestamp: new Date(),
      };
      setGeneratedImages([newImage, ...generatedImages]);
      setIsGenerating(false);
      setPrompt(''); // Clear prompt after generation
    }, 2000);
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `ai-generated-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const promptSuggestions = [
    "A futuristic cityscape at sunset",
    "A serene mountain lake reflection",
    "An abstract digital art piece",
    "A cozy coffee shop interior",
    "A fantasy dragon over a castle",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-bg-dark dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        
        {/* Features Section */}
        <motion.div className="mb-24" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-4" initial={{ y:20, opacity: 0 }} whileInView={{ y:0, opacity: 1 }} viewport={{ once: true, amount: 0.5 }}>The InterGen Image Advantage</motion.h2>
            <motion.p
              className="text-xl text-center text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Create stunning visuals with the world's most advanced AI image generation models, all in one unified platform.
          </motion.p>
            <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <motion.div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700" variants={cardVariants} whileHover="hover">
                <motion.div className="h-14 w-14 bg-brand-start/10 rounded-xl flex items-center justify-center mb-6 text-brand-start" variants={iconVariants} whileHover="hover"><Layers size={32} /></motion.div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Multi-Provider Access</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Access DALL-E, Midjourney, Stable Diffusion, and more from one interface. Compare results and choose the best style for your vision.</p>
              </motion.div>
              <motion.div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700" variants={cardVariants} whileHover="hover">
                <motion.div className="h-14 w-14 bg-brand-end/10 rounded-xl flex items-center justify-center mb-6 text-brand-end" variants={iconVariants} whileHover="hover"><Zap size={32} /></motion.div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Lightning Fast Generation</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Our optimized pipelines deliver high-quality images in seconds, not minutes, letting you iterate on your ideas faster than ever.</p>
              </motion.div>
              <motion.div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700" variants={cardVariants} whileHover="hover">
                <motion.div className="h-14 w-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500" variants={iconVariants} whileHover="hover"><Shield size={32} /></motion.div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Creative Rights Protection</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Your generated images are yours alone. We provide enterprise-grade security to protect your creative assets and intellectual property.</p>
              </motion.div>
              <motion.div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700" variants={cardVariants} whileHover="hover">
                <motion.div className="h-14 w-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-500" variants={iconVariants} whileHover="hover"><Cpu size={32} /></motion.div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Advanced Customization</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Fine-tune your creations with advanced prompt engineering tools, style modifiers, and resolution controls for ultimate precision.</p>
              </motion.div>
            </motion.div>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-brand-start to-brand-end text-transparent bg-clip-text mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Try the AI Image Generator
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Bring your imagination to life. Create stunning, original images from text prompts using a suite of advanced AI models.
          </motion.p>
        </motion.div>

        {/* Main Content: Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left Column: Controls */}
          <motion.div 
            className="lg:col-span-2 space-y-8 sticky top-24"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {/* Provider Selection */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Choose AI Provider</h3>
              <div className="grid grid-cols-2 gap-3">
                {AI_IMAGE_PROVIDERS.map((provider) => (
                  <motion.button
                    key={provider.id}
                    onClick={() => setSelectedProvider(provider.id)}
                    className={`p-3 rounded-lg border-2 text-left transition-all duration-200 ${selectedProvider === provider.id ? 'border-brand-end bg-brand-end/10' : 'border-slate-200 dark:border-slate-700 hover:border-brand-start dark:hover:border-brand-start'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`font-semibold ${provider.color}`}>{provider.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{provider.description}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Prompt Input */}
            <div>
              <label className="block text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Describe Your Image
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., A cute cat astronaut floating in space"
                className="w-full h-36 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-end resize-none shadow-sm"
              />
            </div>
            
            {/* Prompt Suggestions */}
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Or try a suggestion:</p>
              <div className="flex flex-wrap gap-2">
                {promptSuggestions.map((suggestion, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setPrompt(suggestion)}
                    className="px-3 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full hover:bg-brand-start/20 hover:text-brand-start transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <motion.button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-full px-6 py-4 bg-brand-end text-white text-lg font-bold rounded-xl hover:bg-brand-end/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {isGenerating ? (
                <>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}><Sparkles size={22} /></motion.div>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Palette size={22} />
                  <span>Generate Image</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Right Column: Gallery */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3">
              <ImageIcon size={24} className="text-brand-start"/>
              Your Creations
            </h3>
            {generatedImages.length > 0 ? (
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={containerVariants} initial="hidden" animate="visible">
                {generatedImages.map((image) => (
                  <motion.div key={image.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden group" variants={imageVariants}>
                    <div className="aspect-square relative">
                      <img src={image.url} alt={image.prompt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute top-0 right-0 m-2">
                        <motion.button onClick={() => handleDownload(image.url)} className="p-2 bg-white/50 rounded-full text-slate-800 hover:bg-white backdrop-blur-sm transition-all" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Download size={16} />
                        </motion.button>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 line-clamp-2">{image.prompt}</p>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{AI_IMAGE_PROVIDERS.find(p => p.id === image.provider)?.name}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="w-full aspect-[4/3] border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center text-center p-8">
                  <ImageIcon size={48} className="text-slate-400 dark:text-slate-500 mb-4"/>
                  <h4 className="text-lg font-semibold text-slate-600 dark:text-slate-400">Your generated images will appear here</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500">Fill out the prompt on the left to start creating.</p>
              </div>
            )}
          </motion.div>
        </div>

      </div>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-white to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-4xl mx-auto text-center px-4">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="text-white">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-display">Ready to Get Started?</h2>
                    <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">Join thousands of creators and developers who are already using Integen to build the future.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-sky-600 font-bold text-lg rounded-2xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300">
                            <span>Get Started Now</span>
                            <ArrowRight size={24} />
                        </motion.button>
                        <Link to="/contact">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/30 hover:shadow-2xl transition-all duration-300">
                                <span>Contact Us</span>
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    </div>
  );
};
