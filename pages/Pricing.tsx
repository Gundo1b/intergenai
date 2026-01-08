import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, X, Zap, ArrowRight } from 'lucide-react';
import Comparison from './Comparison';

const plans = [
  {
    name: 'Pro',
    price: '25',
    currency: '$',
    period: '/month',
    features: [
      { text: 'Chat, Code, Image Generation', included: true },
      { text: 'Memory', included: true },
      { text: 'Refinement Loops', included: true },
      { text: 'Priority Compute', included: true },
      { text: 'Ensemble Reasoning', included: true },
      { text: '4K Visuals', included: false },
      { text: 'Collaboration tools', included: false }
    ]
  },
  {
    name: 'Ultra',
    price: '60',
    currency: '$',
    period: '/month',
    features: [
      { text: 'All Pro features', included: true },
      { text: 'Ensemble Reasoning', included: true },
      { text: '4K Visuals', included: true },
      { text: 'Collaboration tools', included: true },
      { text: 'Priority Compute', included: true },
      { text: 'Refinement Loops', included: true },
      { text: 'Memory', included: true },
      { text: 'Chat, Code, Image Generation', included: true }
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: '',
    period: '',
    features: [
      { text: 'Private Hosting', included: true },
      { text: 'Team Management', included: true },
      { text: 'API & SDK', included: true },
      { text: 'Analytics Dashboard', included: true },
      { text: 'White Labelling', included: true },
      { text: 'Role-based Access Control (RBAC)', included: true },
      { text: 'Multi-region Deployment', included: true },
      { text: 'Compliance Certifications', included: true },
      { text: 'Integration Support', included: true }
    ]
  }
];

const NewsletterCTA = () => {
  return (
    <section className="w-full pt-16 sm:pt-20 lg:pt-24 pb-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#64E1FF] via-[#009DFF] to-[#64E1FF]" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full flex items-center justify-center text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold uppercase tracking-wider mb-8">
            
            <span>Newsletter</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Stay in the Loop
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            Get the latest insights, updates, and stories from the world of AI
            delivered straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 sm:px-8 py-4 sm:py-5 rounded-full text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-base sm:text-lg"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#009DFF] font-bold rounded-full hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg shadow-xl hover:shadow-2xl whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FBFF] to-[#F0F8FF] dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-32 pb-0">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-14 lg:mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#64E1FF]/20 to-[#009DFF]/20 border border-[#64E1FF]/30 text-[#64E1FF] dark:text-[#64E1FF] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 sm:mb-8 backdrop-blur-sm shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(100, 225, 255, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              
              <span>Pricing</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 px-4">
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64E1FF] to-[#009DFF]">
                GEN AI Plan
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
              Simple, transparent pricing for every need. No hidden fees, no surprises.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14 lg:mb-16"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className="flex flex-col divide-y divide-[#64E1FF]/20 dark:divide-slate-700 rounded-2xl sm:rounded-3xl border border-[#64E1FF]/20 dark:border-slate-700 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl hover:shadow-[#64E1FF]/20 transition-all duration-500 group"
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Plan Header */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
                    {plan.name}
                    <span className="sr-only">Plan</span>
                  </h2>

                  <div className="mb-6 sm:mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#64E1FF] to-[#009DFF]">
                        {plan.currency}{plan.price}
                      </span>
                      <span className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <motion.a
                    href="#"
                    className="block w-full rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#64E1FF] to-[#009DFF] px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-center text-sm sm:text-base font-semibold text-white hover:shadow-2xl hover:shadow-[#64E1FF]/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </motion.a>
                </div>

                {/* Features List */}
                <div className="p-6 sm:p-8 lg:p-10 flex-1">
                  <ul role="list" className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-[#64E1FF]" />
                          ) : (
                            <X className="h-5 w-5 text-slate-400" />
                          )}
                        </div>
                        <span className="flex-1">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Comparison/>

          {/* Newsletter CTA */}
          
          
        </div>
         <section className="relative pt-20 pb-0 px-4 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main content */}
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight"
          >
            Ready to Experience the Future?
            <br />
            <span className="text-white">
          
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
           
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          <button onClick={() => window.location.href = '/welcomepage/index.html'} className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-xl bg-transparent border-2 border-white text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 hover:bg-white/10">
            Contact Sales
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
      </div>
    </div>
  );
}
