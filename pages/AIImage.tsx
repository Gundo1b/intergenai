import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NewsletterCTA } from '../components/NewsletterCTA';
import { ImageIcon, Zap, Sparkles, Wand2, Cpu, ArrowRight } from 'lucide-react';
import WorldMapDemo from '../components/world-map-demo';

const artStyles = [
    { name: '', img: '/imagegenerated/photorealistic.png' },
    { name: '', img: '/imagegenerated/digital art.png' },
    { name: '', img: '/imagegenerated/rrr.png' },
    { name: '', img: '/imagegenerated/oil painting.png' },
    { name: '', img: '/imagegenerated/3d render.png' },
    { name: '', img: '/imagegenerated/hhh.png' },
    { name: '', img: '/imagegenerated/mud.png' },
];

const duplicatedArtStyles = [...artStyles, ...artStyles];

export const AIImage: React.FC = () => {
    const [prompt, setPrompt] = useState('A Shiba Inu wearing a beret and drinking coffee in a Parisian cafe, oil painting style');
    const [isGenerating, setIsGenerating] = useState(false);
    const [imageReady, setImageReady] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        setImageReady(false);
        setTimeout(() => {
            setIsGenerating(false);
            setImageReady(true);
        }, 2500);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white font-sans overflow-x-hidden">
            <style>{`
                @keyframes gradient-animation { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
                .animated-gradient { background-size: 200% 200%; animation: gradient-animation 12s ease infinite; }
            `}</style>

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-24 text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-400/10 animated-gradient"></div>
                <div className="absolute inset-0 -z-10">
                    <WorldMapDemo />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider text-cyan-700 dark:text-cyan-300 bg-cyan-100/50 dark:bg-cyan-900/30 rounded-full">
                            Infinite Creativity, One Click Away
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                            <span className="text-slate-900 dark:text-white">
                                Generate Stunning Images{' '}
                            </span>
                            <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                from Your Words
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
                            Unleash your imagination with Intergen. Describe any concept, and our advanced AI will transform your words into breathtaking, high-quality images in seconds.
                        </p>
                        <motion.button
                            onClick={() => {
                                const interactiveDemo = document.getElementById('interactive-demo');
                                if (interactiveDemo) {
                                    interactiveDemo.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            Get Started <ArrowRight className="inline-block ml-2" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* --- Interactive Demo --- */}
            <section id="interactive-demo" className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">Bring Your Vision to Life</h2>
                    <p className="text-base text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto">From a simple phrase to a masterpiece. Describe your idea and let our AI do the rest.</p>
                    <div className="bg-slate-100/10 dark:bg-white/10 backdrop-blur-xl border border-slate-300/20 dark:border-white/20 rounded-2xl p-4 shadow-2xl">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="w-full bg-transparent border-2 border-dashed border-slate-300 dark:border-white/30 rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4 h-20 resize-none text-slate-800 dark:text-white"
                            placeholder="Describe anything you can imagine..."
                        />
                        <button onClick={handleGenerate} disabled={isGenerating} className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 text-white">
                            {isGenerating ? 'Conjuring...' : 'Generate'}
                        </button>

                        <div className="mt-6 aspect-square max-w-sm mx-auto bg-slate-200 dark:bg-black/50 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-white/20 overflow-hidden">
                            {isGenerating && <Cpu size={36} className="animate-pulse text-slate-800 dark:text-white" />}
                            {imageReady && <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src="/placeholder/generated-image-shiba.jpg" className="w-full h-full object-cover" />}
                            {!isGenerating && !imageReady && <ImageIcon size={36} className="text-slate-400 dark:text-slate-500" />}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY INTERGEN AI IMAGE ================= */}
            <section className="py-16 px-4 bg-slate-100 dark:bg-slate-800/50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why You Need AI Image from Intergen
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
                        Transform your ideas into stunning visuals with Intergen's advanced AI image generation. Unlike basic tools, we deliver professional-quality images tailored to your creative vision.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Sparkles className="w-8 h-8" />,
                                title: 'High-Quality Output',
                                description: 'Generate photorealistic images up to 4K resolution with incredible detail and clarity.'
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: 'Lightning Fast',
                                description: 'Create images in seconds, not minutes. Perfect for rapid ideation and prototyping.'
                            },
                            {
                                icon: <Wand2 className="w-8 h-8" />,
                                title: 'Endless Creativity',
                                description: 'From realistic portraits to fantastical worlds, bring any concept to life with AI.'
                            },
                            {
                                icon: <Cpu className="w-8 h-8" />,
                                title: 'Advanced AI Models',
                                description: 'Powered by cutting-edge AI technology for superior results and artistic control.'
                            },
                            {
                                icon: <ImageIcon className="w-8 h-8" />,
                                title: 'Multiple Formats',
                                description: 'Export in various formats and resolutions for web, print, or any application.'
                            },
                            {
                                icon: <ArrowRight className="w-8 h-8" />,
                                title: 'Seamless Integration',
                                description: 'Easily integrate generated images into your workflows and creative projects.'
                            }
                        ].map((reason, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-cyan-500 mb-4 flex justify-center">
                                    {reason.icon}
                                </div>
                                <h3 className="font-semibold text-lg mb-3">{reason.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Style Selector --- */}
            <section className="py-24 bg-slate-100/70 dark:bg-slate-900/70 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-white">Find Your Perfect Style</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">Discover endless creative possibilities with a single click.</p>
                </div>
                <div
                    className="relative w-full"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}
                >
                    <motion.div
                        className="flex gap-8 pr-8"
                        animate={{
                            x: [0, -2048] // (224px width + 32px gap) * 8 styles
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedArtStyles.map((style, i) => (
                            <div key={i} className="flex-shrink-0 w-56">
                                <div className="relative rounded-xl overflow-hidden group cursor-pointer shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                                    <img src={style.img} alt={style.name} className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"/>
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-xl font-semibold text-white tracking-wider">{style.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <NewsletterCTA />

        </div>
    );
}