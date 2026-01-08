import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Users,
  Target,
  Heart,
  Lightbulb,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Code,
  Brain,
  Rocket
} from 'lucide-react';
import { NewsletterCTA } from '../components/NewsletterCTA';

const values = [
  {
    icon: Heart,
    title: "Human-Centered",
    description: "We  AI should enhance human , not replace it."
  },
  {
    icon: Zap,
    title: "Speed & Innovation",
    description: "Moving fast to build the future of intelligent assistance."
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making advanced AI tools available to everyone, everywhere."
  },
  {
    icon: CheckCircle,
    title: "Quality & Trust",
    description: "Delivering reliable, high-quality experiences our users can trust."
  }
];

const floatingIcons = [
  { Icon: Brain, delay: 0, x: 10, y: 10 },
  { Icon: Code, delay: 0.5, x: -15, y: 5 },
  { Icon: Sparkles, delay: 1, x: 8, y: -12 },
  { Icon: Rocket, delay: 1.5, x: -8, y: 8 }
];

export default function About() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-light via-white to-blue-50/30 dark:from-bg-dark dark:via-slate-900 dark:to-blue-950/20 text-slate-900 dark:text-slate-100 transition-colors duration-300">


      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#64E1FF]/10 via-transparent to-[#009DFF]/10 dark:from-[#64E1FF]/20 dark:to-[#009DFF]/20"
          style={{ y: backgroundY }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#64E1FF]/20 to-[#009DFF]/20 dark:from-[#64E1FF]/30 dark:to-[#009DFF]/30 border border-[#64E1FF]/40 dark:border-[#64E1FF]/50 text-[#009DFF] dark:text-[#64E1FF] text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(100, 225, 255, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                
              </motion.div>
              <span>About Integen</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-slate-900 dark:text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Building the future of{' '}
              </motion.span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#64E1FF] to-[#009DFF] inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                intelligent assistance
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We're on a mission to democratize AI by creating the most intuitive,
              powerful, and accessible platform for human-AI collaboration.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#64E1FF]/8 to-transparent dark:via-[#64E1FF]/15"
          style={{ y: textY, opacity }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Our Mission
              </motion.h2>
              <motion.p
                className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At Integen, we believe that the future of work is human-AI collaboration.
                Our platform unifies the best AI models and capabilities into a single,
                intuitive interface that amplifies human creativity and productivity.
              </motion.p>
              <motion.p
                className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We're building more than just another AI tool we're creating an ecosystem
                where creators, developers, and teams can seamlessly leverage the power
                of artificial intelligence to achieve extraordinary results.
              </motion.p>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  { icon: Target, text: "Clear Vision" },
                  { icon: Lightbulb, text: "Innovation" }
                ].map(({ icon: Icon, text }, index) => (
                  <motion.div
                    key={text}
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={20} className="text-[#009DFF]" />
                    </motion.div>
                    <span className="font-semibold text-slate-900 dark:text-white">{text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                className="bg-gradient-to-br from-[#64E1FF]/25 via-[#64E1FF]/15 to-[#009DFF]/25 rounded-3xl p-8 backdrop-blur-sm border border-[#64E1FF]/40 shadow-2xl relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(100, 225, 255, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#64E1FF]/15 to-transparent rounded-3xl"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    background: [
                      "radial-gradient(circle at 20% 20%, rgba(100, 225, 255, 0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 80% 80%, rgba(0, 157, 255, 0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 20% 20%, rgba(100, 225, 255, 0.3) 0%, transparent 50%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="grid grid-cols-3 gap-6 relative z-10">
                  {[
                    { value: "50+", label: "AI Models", delay: 0 },
                    { value: "24/7", label: "Availability", delay: 0.2 },
                    { value: "20+", label: "Languages", delay: 0.4 }
                  ].map(({ value, label, delay }, index) => (
                    <motion.div
                      key={label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: delay }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className="text-3xl font-bold text-[#009DFF] mb-2"
                        whileHover={{
                          textShadow: "0 0 20px rgba(0, 157, 255, 0.5)"
                        }}
                      >
                        {value}
                      </motion.div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/90 to-blue-50/70 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-sm relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#64E1FF]/8 to-transparent dark:via-[#64E1FF]/15"
          style={{ y: textY, opacity }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our Values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  className="text-center group perspective-1000"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ rotateY: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#64E1FF]/20 to-[#009DFF]/20 flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
                      whileHover={{
                        boxShadow: "0 10px 30px rgba(100, 225, 255, 0.3)",
                        background: "linear-gradient(135deg, rgba(100, 225, 255, 0.3), rgba(0, 157, 255, 0.3))"
                      }}
                    >
                      <value.icon
                        size={32}
                        className="text-[#009DFF] group-hover:text-white transition-colors duration-300"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-semibold text-slate-900 dark:text-white mb-4"
                    whileHover={{ color: "#009DFF" }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.title}
                  </motion.h3>

                  <motion.p
                    className="text-slate-600 dark:text-slate-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      

      <div className="py-20">
        <NewsletterCTA />
      </div>
    </div>
  );
}
