import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { NewsletterCTA } from '../components/NewsletterCTA';
import { PlayCircle, Zap, Film, Star, Cpu, ArrowRight, Rewind, FastForward, Pause, RotateCcw, RotateCw } from 'lucide-react';
import { TypewriterEffectSmooth } from '../components/TypewriterEffect';

export const AIVideo: React.FC = () => {
    const [prompt, setPrompt] = useState('A majestic lion walking through the golden savanna at sunset');
    const [isGenerating, setIsGenerating] = useState(false);
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleGenerate = () => {
        setIsGenerating(true);
        setVideoReady(false);
        setTimeout(() => {
            setIsGenerating(false);
            setVideoReady(true);
        }, 3000);
    };



    const features = [
        { icon: Film, title: 'Text-to-Video', description: 'Transform your ideas into stunning visuals with a simple text prompt.' },
        { icon: Star, title: 'Multiple Styles', description: 'Choose from realistic, animated, cinematic, and other artistic styles.' },
        { icon: Zap, title: 'Ultra-Fast Generation', description: 'Go from prompt to final video in minutes, not hours.' },
        { icon: Cpu, title: 'HD Quality', description: 'Export your creations in high-definition 1080p and 4K resolutions.' },
    ];

    const exampleVideos = [
        { thumb: '/videos/28828668-a97e-4cbc-a3d2-8c7baee9fd8b.mp4', prompt: '' },
        { thumb: '/videos/361438156-fe0a78e6-b669-4800-8cf0-b5f9b5145b52.mp4', prompt: '' },
        { thumb: '/videos/f6b07746-4a60-45a3-8ec0-08c581e31070.mp4', prompt: '' },
        { thumb: '/videos/tmp7147fps1.mp4', prompt: '' },
        { thumb: '/videos/tmpd9iuqqz4.mp4', prompt: '' },
    ];

    const trustedByLogos = [
        { name: 'Academatrix', img: '/splogos/Academatrix.png' },
        { name: 'Cybluence', img: '/splogos/Cybluence.png' },
        { name: 'Decorexy', img: '/splogos/Decorexy.png' },
        { name: 'Finance Portal', img: '/splogos/Finance Portal.png' },
        { name: 'Icycon', img: '/splogos/Icycon.png' },
        { name: 'UMetha', img: '/splogos/UMetha.png' },
        { name: 'Viralitics', img: '/splogos/Viralitics.png' },
    ];

    return (
        <div>
            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                    overflow-x: hidden;
                    background: #0a0a0f;
                }

                .hero {
                    min-height: 80vh;
                    background: transparent;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-top: 80px;
                }

                .gradient-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.4;
                    animation: float 8s ease-in-out infinite;
                }

                .orb-1 {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, #64E1FF 0%, transparent 70%);
                    top: -150px;
                    left: -100px;
                    animation-delay: 0s;
                }

                .orb-2 {
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, #009DFF 0%, transparent 70%);
                    bottom: -100px;
                    right: -100px;
                    animation-delay: 2s;
                }

                .orb-3 {
                    width: 250px;
                    height: 250px;
                    background: radial-gradient(circle, #0072FF 0%, transparent 70%);
                    top: 50%;
                    right: 10%;
                    animation-delay: 4s;
                }

                @keyframes float {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(30px, -30px) scale(1.05); }
                    50% { transform: translate(-20px, 20px) scale(0.95); }
                    75% { transform: translate(20px, 10px) scale(1.02); }
                }

                .grid-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                    pointer-events: none;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 40px;
                    position: relative;
                    z-index: 10;
                }

                .hero-content {
                    text-align: center;
                    color: #ffffff;
                    animation: fadeInUp 1s ease-out;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .badge {
                    display: inline-block;
                    padding: 8px 20px;
                    background: rgba(100, 225, 255, 0.1);
                    border: 1px solid rgba(100, 225, 255, 0.3);
                    border-radius: 30px;
                    font-size: 14px;
                    color: #009DFF;
                    margin-bottom: 30px;
                    backdrop-filter: blur(10px);
                    animation: fadeInUp 1s ease-out 0.2s both;
                }

                h1 {
                    font-size: 60px;
                    font-weight: 800;
                    line-height: 1.1;
                    margin-bottom: 24px;
                    background: linear-gradient(135deg, #ffffff 0%, #64E1FF 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: fadeInUp 1s ease-out 0.3s both;
                }

                .subtitle {
                    font-size: 20px;
                    color: #e2e8f0;
                    max-width: 600px;
                    margin: 0 auto 40px;
                    line-height: 1.6;
                    animation: fadeInUp 1s ease-out 0.4s both;
                }

                .cta-group {
                    display: flex;
                    gap: 16px;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    animation: fadeInUp 1s ease-out 0.5s both;
                }

                .btn {
                    padding: 16px 32px;
                    font-size: 16px;
                    font-weight: 600;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-block;
                    border: none;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #64E1FF 0%, #009DFF 100%);
                    color: #F9FBFF;
                    box-shadow: 0 10px 30px rgba(100, 225, 255, 0.3);
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 40px rgba(100, 225, 255, 0.4);
                }

                .btn-secondary {
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                }

                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.1);
                    transform: translateY(-2px);
                }

                .video-preview {
                    margin-top: 80px;
                    position: relative;
                    animation: fadeInUp 1s ease-out 0.6s both;
                }

                .video-container {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(10px);
                }

                .video-placeholder {
                    aspect-ratio: 16/9;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    border: 2px dashed rgba(255, 255, 255, 0.2);
                    overflow: hidden;
                }

                .play-button {
                    width: 80px;
                    height: 80px;
                    background: rgba(255, 255, 255, 0.9);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }

                .play-button:hover {
                    transform: scale(1.1);
                    background: white;
                }

                .play-icon {
                    width: 0;
                    height: 0;
                    border-left: 20px solid #6366f1;
                    border-top: 12px solid transparent;
                    border-bottom: 12px solid transparent;
                    margin-left: 6px;
                }

                .stats {
                    display: flex;
                    justify-content: center;
                    gap: 60px;
                    margin-top: 60px;
                    flex-wrap: wrap;
                    animation: fadeInUp 1s ease-out 0.7s both;
                }

                .stat-item {
                    text-align: center;
                }

                .stat-number {
                    font-size: 36px;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 8px;
                }

                .stat-label {
                    font-size: 14px;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                @media (min-width: 768px) {
                    .hero {
                        min-height: 100vh;
                    }
                }

                @media (max-width: 768px) {
                    h1 {
                        font-size: 40px;
                    }

                    .subtitle {
                        font-size: 18px;
                    }

                    .stats {
                        gap: 40px;
                    }

                    .container {
                        padding: 0 20px;
                    }
                }
            `}</style>
            
            {/* --- Hero Section --- */}
            <section className="hero">
                <video
                    src="/videos/herovideo1.mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-contain z-0"
                />
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
                <div className="grid-overlay"></div>

                <div className="container">
                    <div className="hero-content">
                        <h1>Create Stunning Videos<br />in Seconds</h1>
                        <p className="subtitle">
                            Transform your ideas into professional videos with AI. No editing skills required.
                            Just describe what you want, and watch it come to life.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Interactive Demo Section --- */}
            <section className="py-24 px-4 bg-slate-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">See the Magic in Action</h2>
                    <p className="text-lg text-slate-400 mb-12">Enter a prompt below and watch our AI create a video in real-time.</p>
                    
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                        <div className="flex flex-col md:flex-row gap-4 mb-6">
                            <input 
                                type="text"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                className="flex-grow bg-white/10 border border-white/20 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                                placeholder="e.g., A robot orchestra playing classical music"
                            />
                            <button onClick={handleGenerate} disabled={isGenerating} className="px-8 py-4 bg-gradient-to-r from-[#64E1FF] to-[#009DFF] rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-[#F9FBFF]">
                                {isGenerating ? 'Generating...' : 'Generate Video'}
                            </button>
                        </div>

                        <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center border-2 border-dashed border-white/20 overflow-hidden">
                            {isGenerating && (
                                <div className="text-center">
                                    <Cpu size={48} className="animate-pulse mx-auto mb-4" />
                                    <p className="text-slate-300">AI is processing your request...</p>
                                </div>
                            )}
                            {videoReady && (
                                <motion.video 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    src="/placeholder/generated-video.mp4" 
                                    autoPlay 
                                    loop 
                                    muted 
                                    className="w-full h-full object-cover"
                                />
                            )}
                            {!isGenerating && !videoReady && (
                                <div className="text-center text-slate-400">
                                    <Film size={48} className="mx-auto mb-4"/>
                                    <p>Your generated video will appear here</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY INTERGEN AI VIDEO ================= */}
            <section className="py-16 px-4 bg-slate-900/50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why You Need AI Video from Intergen
                    </h2>
                    <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
                        Create professional videos instantly with Intergen's advanced AI video generation. Unlike traditional tools, we deliver cinematic quality without the complexity or cost.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Film className="w-8 h-8" />,
                                title: 'Cinematic Quality',
                                description: 'Generate Hollywood-grade videos with stunning visuals and professional production values.'
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: 'Instant Creation',
                                description: 'Transform text prompts into complete videos in minutes, not days of editing.'
                            },
                            {
                                icon: <Star className="w-8 h-8" />,
                                title: 'Multiple Styles',
                                description: 'From realistic documentaries to animated fantasies, create any style you envision.'
                            },
                            {
                                icon: <Cpu className="w-8 h-8" />,
                                title: 'Advanced AI',
                                description: 'Powered by cutting-edge AI models for superior results and creative control.'
                            },
                            {
                                icon: <PlayCircle className="w-8 h-8" />,
                                title: 'Easy Export',
                                description: 'Export in multiple formats and resolutions for web, social media, or broadcast.'
                            },
                            {
                                icon: <ArrowRight className="w-8 h-8" />,
                                title: 'Seamless Workflow',
                                description: 'Integrate video generation into your existing creative and marketing processes.'
                            }
                        ].map((reason, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-cyan-400 mb-4 flex justify-center">
                                    {reason.icon}
                                </div>
                                <h3 className="font-semibold text-lg mb-3">{reason.title}</h3>
                                <p className="text-slate-400">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Features Section --- */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="inline-block bg-gradient-to-br from-pink-500/20 to-purple-600/20 text-pink-400 p-4 rounded-xl mb-6">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-slate-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Video Gallery --- */}
            <section className="py-24 px-4 bg-slate-900/70 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">From Prompts to Masterpieces</h2>
                    <div className="relative">
                        <motion.div
                            className="flex gap-6"
                            animate={{
                                x: [0, -1000] // Adjust based on video width + gap
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...exampleVideos, ...exampleVideos].map((video, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.6, delay: (i % exampleVideos.length) * 0.1 }}
                                    className="group relative rounded-lg overflow-hidden shadow-2xl flex-shrink-0 w-80 h-48"
                                >
                                    <video src={video.thumb} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" autoPlay muted loop playsInline />
                                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <PlayCircle size={48} />
                                    </div>
                                    <div className="absolute bottom-0 left-0 bg-black/50 p-3 w-full">
                                        <p className="text-sm truncate">{video.prompt || 'Integen AI-generated video'}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Trusted By Section --- */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-sm font-bold uppercase text-slate-500 tracking-widest mb-8">Trusted by the world's most innovative companies</h2>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                        {trustedByLogos.map((logo, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                            >
                                <img src={logo.img} alt={logo.name} className="h-12 w-auto object-contain" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Final CTA Section --- */}
            <NewsletterCTA />
        </div>
    );
}
