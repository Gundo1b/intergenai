import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Brain, Shield, Target, Rocket, Sparkles, CheckCircle } from 'lucide-react';
import { NewsletterCTA } from '../components/NewsletterCTA';
const features = [
  {
    icon: Brain,
    title: "Beyond Basic Chatbots",
    description: "Enterprise-grade conversational intelligence that understands context, creativity, and professional nuance.",
    color: "from-[#64E1FF] to-[#009DFF]",
    benefits: ["Context-aware responses", "Professional communication", "Multi-domain expertise"]
  },
  {
    icon: Zap,
    title: "Lightning-Fast Responses",
    description: "200ms response time means instant access to intelligent insights when you need them most.",
    color: "from-[#64E1FF] to-[#009DFF]",
    benefits: ["200ms median response", "Real-time collaboration", "Instant intelligence"]
  },
  {
    icon: Target,
    title: "Multi-Model Intelligence",
    description: "Access 50+ specialized models automatically selected for your specific task and industry needs.",
    color: "from-[#64E1FF] to-[#009DFF]",
    benefits: ["50+ AI models", "Automatic selection", "Task-optimized responses"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "99.9% uptime SLA with enterprise-grade security to protect your conversations and data.",
    color: "from-[#64E1FF] to-[#009DFF]",
    benefits: ["99.9% uptime SLA", "Enterprise security", "Data protection"]
  }
];

const benefits = [
  {
    icon: Rocket,
    title: "Competitive Edge",
    description: "Stay ahead with AI that transforms good work into exceptional results",
    color: "from-[#64E1FF] to-[#009DFF]"
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Join thousands of professionals already transforming productivity",
    color: "from-[#64E1FF] to-[#009DFF]"
  }
];

const AIChat: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9FBFF] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Aurora Background Elements */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#64E1FF]/20 via-violet-400/15 to-[#009DFF]/20 rounded-full blur-[120px] opacity-40 mix-blend-screen dark:opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-[20%] right-0 w-[800px] h-[600px] bg-gradient-to-b from-cyan-300/10 via-violet-500/10 to-blue-400/15 rounded-full blur-[100px] opacity-30 mix-blend-screen dark:opacity-10"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[400px] bg-gradient-to-tr from-[#64E1FF]/15 via-violet-300/10 to-blue-500/15 rounded-full blur-[80px] opacity-25 mix-blend-screen animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-md border border-[#64E1FF]/30 dark:border-white/10 text-slate-600 dark:text-slate-300 text-sm font-medium mb-8 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 shadow-lg shadow-[#64E1FF]/20 hover:shadow-[#64E1FF]/30">
              <MessageSquare size={16} className="text-[#009DFF] drop-shadow-sm" />
              <span>Conversational AI Excellence</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
              Why professionals choose<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64E1FF] to-[#009DFF]">
                InterGen AI Chat.
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Transform your productivity with enterprise-grade conversational AI that delivers speed, accuracy, and professional intelligence.
            </p>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { kpi: '200ms', label: 'Median response time' },
                { kpi: '99.9%', label: 'Uptime SLA' },
                { kpi: '50+', label: 'Models & tools' },
              ].map((s, i) => (
                <div key={s.kpi} className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#64E1FF] to-[#009DFF]">
                    {s.kpi}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 mt-2">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Bento Grid Style */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              The AI Chat That Changes Everything
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Experience conversational AI built for professionals who demand excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#64E1FF]/20 via-violet-400/15 to-blue-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-3xl p-8 overflow-hidden hover:border-[#64E1FF]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#64E1FF]/10">
                  <div className={`absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br ${feature.color} opacity-5 blur-3xl rounded-full group-hover:opacity-10 transition-opacity`}></div>

                  <div className="flex flex-col h-full relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg`}>
                        <feature.icon size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
                      {feature.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3">
                      {feature.benefits.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-100/50 dark:bg-white/[0.02]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Your Competitive Advantage
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white/50 dark:bg-slate-800/30 border border-white/30 dark:border-white/10 backdrop-blur-sm"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                  <benefit.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <NewsletterCTA />
      </section>
    </div>
  );
};

export { AIChat };
