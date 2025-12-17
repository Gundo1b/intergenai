import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const NewsletterCTA = () => {
    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Background with gradient matching the image (Cyan/Sky blue theme) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00C6FF] to-[#0072FF] z-0"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

                {/* Newsletter Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold mb-8"
                >
                    <Zap size={14} className="fill-current" />
                    <span>NEWSLETTER</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
                >
                    Stay in the Loop
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Get the latest insights, updates, and stories from the world of AI delivered straight to your inbox.
                </motion.p>

                {/* Input Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-6 py-4 rounded-full text-slate-900 bg-white border-0 focus:ring-2 focus:ring-white/50 w-full outline-none text-lg"
                    />
                    <button className="px-8 py-4 rounded-full bg-white text-[#0072FF] font-bold text-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                        <Zap size={20} className="fill-current" />
                        Subscribe
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
