import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Cpu, CheckCircle2, Film, PlayCircle, Clapperboard, Wand2, Mic2, MonitorPlay } from 'lucide-react';
import { Theme } from '../types';
import { NewsletterCTA } from '../components/NewsletterCTA';

interface AIVideoProps {
  theme: Theme;
}

export const AIVideo: React.FC<AIVideoProps> = ({ theme }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-bg-dark dark:to-slate-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold font-display bg-gradient-to-r from-brand-start to-brand-end text-transparent bg-clip-text mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The Future of Video is Here
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Create cinematic videos with the world's most advanced AI video generation technology, all from a single unified platform.
          </motion.p>
        </motion.div>

        {/* Models Marquee */}
        <section className="overflow-hidden mb-16">
          <div className="flex gap-4 animate-marquee [--duration:30s]" aria-label="Supported models">
            {['OpenAI Sora', 'Runway Gen-2', 'Google Lumiere', 'Pika', 'Stability Video', 'Luma Dream', 'Kapwing AI', 'Veer'].map((m) => (
              <span key={m} className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 text-sm whitespace-nowrap">
                {m}
              </span>
            ))}
          </div>
        </section>

        {/* Inline KPIs */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { kpi: '4K', label: 'Max resolution' },
            { kpi: '60fps', label: 'Smooth motion' },
            { kpi: '120s', label: 'Clip duration' },
          ].map((s) => (
            <motion.div key={s.kpi} variants={listItemVariants} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#64E1FF] to-[#009DFF]">{s.kpi}</div>
              <div className="text-slate-600 dark:text-slate-400 mt-2">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Showcase Reel */}
        <section className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Showcase Reel
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1200&q=60', label: 'Cinematic city flythrough' },
              { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60', label: 'Product macro close-ups' },
              { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=60', label: 'Nature timelapse' },
            ].map((shot) => (
              <figure key={shot.label} className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/30">
                <div className="aspect-video relative">
                  <img src={shot.src} alt={shot.label} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <PlayCircle className="absolute bottom-3 left-3 text-white drop-shadow-lg" size={28} />
                </div>
                <figcaption className="p-3 text-sm text-slate-700 dark:text-slate-300">{shot.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Production Pipeline (no cards) */}
        <section className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Production Pipeline
          </motion.h3>

          <motion.div
            className="grid lg:grid-cols-3 gap-6 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Pre-Production */}
            <motion.div variants={listItemVariants} className="p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#64E1FF] to-[#009DFF] text-white flex items-center justify-center">
                  <Clapperboard size={18} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Pre-Production</h4>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF]"></span> Script & storyboard</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF]"></span> Style & tone presets</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF]"></span> Asset preparation</li>
              </ul>
            </motion.div>

            {/* Generation */}
            <motion.div variants={listItemVariants} className="p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#64E1FF] to-[#009DFF] text-white flex items-center justify-center">
                  <Wand2 size={18} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Generation</h4>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF]"></span> Text / shot prompts</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF]"></span> Camera motion & framing</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF]"></span> Physics & consistency</li>
              </ul>
            </motion.div>

            {/* Post-Production */}
            <motion.div variants={listItemVariants} className="p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#64E1FF] to-[#009DFF] text-white flex items-center justify-center">
                  <Mic2 size={18} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Post-Production</h4>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF]"></span> Color & grading</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF]"></span> Transitions & overlays</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF]"></span> Voiceover & sound</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Connector */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <div className="absolute left-1/3 top-[52%] w-1/3 h-px bg-gradient-to-r from-[#64E1FF] to-[#009DFF]" />
            </div>
          </motion.div>
        </section>

        {/* Quick Actions - Text List */}
        <motion.div
          className="max-w-3xl mx-auto mt-4 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">What You Can Do</h3>
          <div className="space-y-4">
            {[
              { title: 'Storyboard to video', desc: 'Turn scripts and boards into cinematic shots' },
              { title: 'Scene transitions', desc: 'Apply motion-consistent, tasteful transitions' },
              { title: 'Voiceover sync', desc: 'Align narration with scene timing and mood' },
            ].map((a, i) => (
              <motion.div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" variants={listItemVariants} whileHover={{ x: 10, transition: { duration: 0.2 } }}>
                <div className="h-2 w-2 bg-gradient-to-r from-[#64E1FF] to-[#009DFF] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{a.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className="mb-20">
          <motion.div
            className="bg-slate-100 dark:bg-slate-800/50 rounded-3xl p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-10">
              The InterGen Advantage
            </h2>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                'Unlimited Length',
                '4K Resolution',
                'Multiple Aspect Ratios',
                'Style Transfer',
                'Motion Consistency',
                'Commercial Licensing',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-3"
                  variants={listItemVariants}
                >
                  <CheckCircle2
                    className="text-green-500 flex-shrink-0"
                    size={28}
                  />
                  <span className="text-lg text-slate-700 dark:text-slate-300 font-medium">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Full-bleed CTA */}
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
          <NewsletterCTA />
        </section>
      </div>
    </div>
  );
};
