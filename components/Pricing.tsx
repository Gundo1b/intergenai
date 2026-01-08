import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  MinusCircle,
  Sparkles,
  Crown,
  Check,
  ArrowDown,
  ArrowRight,
  Palette,
  Rocket,
  Building,
  Code,
  GraduationCap
} from 'lucide-react';
import { Icons } from './ui/icons';
import { NewsletterCTA } from './NewsletterCTA';

interface PricingCardProps {
  title: string;
  desc: string;
  price: string[];
  options: {
    icon: React.ReactNode;
    info: string;
  }[];
  featured?: boolean;
  showArrow?: boolean;
}

function PricingCard({ title, desc, price, options, featured = false, showArrow = false }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-gradient-to-br from-[#F9FBFF]/95 to-white/90 dark:from-gray-900/95 dark:to-gray-800/90 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-400/20 hover:border-sky-300/70 group ${featured
          ? 'border-2 border-sky-400 shadow-xl shadow-sky-400/20 scale-105'
          : 'border border-sky-200/50 dark:border-gray-700/50 shadow-lg'
        }`}
    >
      {/* Aurora shimmer effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-sky-400/0 via-cyan-300/0 to-violet-400/0 rounded-2xl transition-all duration-700 ${isHovered ? 'bg-gradient-to-r from-sky-400/5 via-cyan-300/10 to-violet-400/5' : ''
        }`}></div>

      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 text-white text-sm font-semibold shadow-lg shadow-sky-400/25">
            <Crown size={16} />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div className="text-center mb-6 relative z-10">
        <h3 className={`text-2xl font-bold mb-2 uppercase tracking-wide transition-all duration-300 ${isHovered
            ? 'bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent'
            : 'text-gray-900 dark:text-white'
          }`}>
          {title}
        </h3>
        {desc && <p className="text-sm text-sky-600 dark:text-sky-400 mb-4 font-medium">{desc}</p>}
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-light text-gray-900 dark:text-white">{price[0]}</span>
          <span className={`text-4xl font-bold transition-all duration-300 ${isHovered
              ? 'bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent'
              : 'text-gray-900 dark:text-white'
            }`}>
            {price[1]}
          </span>
          {price[2] && <span className="text-lg font-medium text-gray-500 dark:text-gray-400 ml-2">{price[2]}</span>}
        </div>
      </div>

      <ul className="flex flex-col gap-4 mb-6 relative z-10">
        {options.map((option, key) => (
          <li key={key} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <CheckCircle className="h-5 w-5 text-sky-500" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed">{option.info}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 border-2 relative z-10 ${featured
          ? 'bg-gradient-to-r from-sky-400 to-cyan-400 text-white border-transparent hover:from-sky-500 hover:to-cyan-500 shadow-lg hover:shadow-xl hover:shadow-sky-400/40'
          : 'bg-transparent text-gray-900 dark:text-white border-sky-300 dark:border-gray-600 hover:border-sky-500 dark:hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400'
        }`}>
        Get Started
      </button>

      {/* Floating accent on hover */}
      <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${isHovered ? 'animate-pulse' : ''
        }`}></div>

      {/* Bottom accent */}
      <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-400 rounded-full transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
    </motion.div>
  );
}

export function PricingSection11() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Pro",
      desc: "Perfect for individuals",
      price: ["$", "25", "/month"],
      options: [
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Chat, Code, Image Generation",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Advanced Memory Context",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Iterative Refinement Loops",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Priority Compute Access",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Basic Ensemble Reasoning",
        },
      ],
    },
    {
      title: "Ultra",
      desc: "For teams and professionals",
      price: ["$", "60", "/month"],
      featured: true,
      options: [
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Everything in Pro",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Enhanced Ensemble Reasoning",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "4K Visual Generation",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Real-time Collaboration",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Team Shared Workspaces",
        },
      ],
    },
    {
      title: "Enterprise",
      desc: "Custom solutions",
      price: ["", "Custom", ""],
      options: [
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Custom Private Hosting",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Team Management",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "API & SDK Access",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Analytics Dashboard",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "White Labelling",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Role-based Access Control",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Multi-region Deployment",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Compliance Certifications",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-sky-500" />,
          info: "Integration Support",
        },
      ],
    },
  ];

  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Aurora background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 via-cyan-300/20 to-violet-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-sky-400/10 via-cyan-300/10 to-violet-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#F9FBFF]/90 to-white/90 dark:from-gray-900/90 dark:to-gray-800/90 border border-sky-200/50 dark:border-gray-700/50 text-sky-600 dark:text-sky-400 text-sm font-medium uppercase tracking-wider mb-6 backdrop-blur-sm">
            <span>Pricing</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-6">
            Simple, transparent{' '}
            <span className="font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. All plans include our core AI features
            with no hidden fees or surprise charges.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto mb-16">
          {cards.map((card, key) => (
            <div key={key} className="relative">
              <PricingCard
                title={card.title}
                desc={card.desc}
                price={card.price}
                options={card.options}
                featured={card.featured}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Call to Action Section */}
      <NewsletterCTA/>
    </section>
  );
}

export default PricingSection11;
