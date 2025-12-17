import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Code, 
  Image, 
  Video, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  RefreshCw, 
  Download, 
  Upload,
  Wand2,
  Layers,
  Play,
  Settings,
  Palette,
  Terminal
} from 'lucide-react';

const modes = [
  {
    icon: MessageSquare,
    title: "Chat",
    description: "Ideas, learning, reasoning",
    color: "from-blue-400 to-cyan-400",
    glow: "shadow-blue-500/25"
  },
  {
    icon: Code,
    title: "Code", 
    description: "Creation, debugging, refactoring",
    color: "from-emerald-400 to-teal-400",
    glow: "shadow-emerald-500/25"
  },
  {
    icon: Image,
    title: "Image",
    description: "Visual generation, refinement", 
    color: "from-purple-400 to-pink-400",
    glow: "shadow-purple-500/25"
  },
  {
    icon: Video,
    title: "Video",
    description: "Motion design, storytelling",
    color: "from-orange-400 to-red-400", 
    glow: "shadow-orange-500/25"
  }
];

const examples = [
  "Design a cyberpunk-style logo.",
  "Fix this API function.",
  "Generate a video transition scene."
];

const resultTypes = [
  {
    icon: MessageSquare,
    title: "Chat Responses",
    description: "Intelligent conversations with ensemble reasoning",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    title: "Code Solutions",
    description: "Clean, optimized code with explanations",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Image,
    title: "High-Quality Images",
    description: "Stunning visuals with style control",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Video,
    title: "Video Previews",
    description: "Motion graphics and storytelling scenes",
    color: "from-orange-500 to-red-500"
  }
];

const refinementTools = [
  {
    icon: RefreshCw,
    title: "Regenerate",
    description: "Try again with variations"
  },
  {
    icon: Wand2,
    title: "Upscale",
    description: "Enhance quality and detail"
  },
  {
    icon: Settings,
    title: "Adjust",
    description: "Fine-tune parameters"
  },
  {
    icon: Settings,
    title: "Edit",
    description: "Manual modifications"
  },
  {
    icon: Play,
    title: "Continue",
    description: "Extend the sequence"
  },
  {
    icon: Terminal,
    title: "Re-run",
    description: "Execute with new inputs"
  }
];

export const HowItWorks: React.FC = () => {
  const [activeMode, setActiveMode] = useState(0);

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Aurora Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-start/30 to-brand-end/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-tr from-cyan-400/10 to-blue-600/10 rounded-full blur-[200px] animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-start/20 to-brand-end/20 border border-brand-start/30 text-brand-start text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm">
            <Sparkles size={16} />
            <span>How It Works</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display bg-gradient-to-r from-white via-brand-start to-brand-end text-transparent bg-clip-text mb-6">
            How Integen AI Works
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Everything happens in one unified workspace — no switching apps, no subscriptions stacking, no lost creativity.
          </p>
        </motion.div>

        {/* Step 1: Choose Your Mode */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-brand-start to-brand-end text-transparent bg-clip-text">
                Step 1 — Choose Your Mode
              </span>
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Users start by picking a mode or simply typing naturally. Integen understands context and routes tasks to the right model.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modes.map((mode, index) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
                onClick={() => setActiveMode(index)}
              >
                <div className={`relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 ${mode.glow} hover:shadow-2xl`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${mode.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mode.color} p-4 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <mode.icon className="w-full h-full text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{mode.title}</h4>
                    <p className="text-sm text-slate-300">{mode.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Step 2: Describe What You Need */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-brand-start to-brand-end text-transparent bg-clip-text">
                Step 2 — Describe What You Need
              </span>
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Users type instructions, upload references, or paste code. The system interprets intent with ensemble reasoning for the best possible response.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Prompt Input Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-start/20 to-brand-end/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-slate-300 text-sm font-mono">Integen Studio</span>
                </div>
                
                <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Upload size={20} className="text-brand-start" />
                    <span className="text-slate-300 text-sm">Upload files or type your prompt...</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-brand-start/10 to-brand-end/10 rounded-xl border-2 border-dashed border-brand-start/30 flex items-center justify-center">
                    <span className="text-brand-start font-mono">"Design a cyberpunk-style logo with neon accents"</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Examples */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles size={16} className="text-brand-start" />
                    <span className="text-sm font-semibold text-brand-start">Example</span>
                  </div>
                  <p className="text-slate-300 font-mono text-sm">{example}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Step 3: Integen Generates Results */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-brand-start to-brand-end text-transparent bg-clip-text">
                Step 3 — Integen Generates Results Instantly
              </span>
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Integen routes the task to the best-performing AI model and generates high-quality results with consistent UX across all tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resultTypes.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${result.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <result.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3">{result.title}</h4>
                  <p className="text-sm text-slate-300">{result.description}</p>
                  
                  {/* Animated indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-brand-start rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-brand-start rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-brand-start rounded-full animate-bounce delay-200"></div>
                    </div>
                    <span className="text-xs text-brand-start">Generating...</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Step 4: Refine, Iterate, and Export */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold font-display mb-6">
              <span className="bg-gradient-to-r from-brand-start to-brand-end text-transparent bg-clip-text">
                Step 4 — Refine, Iterate, and Export
              </span>
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Users can loop through refinements using natural language. Once finished, export in common formats (text, code files, images, video clips).
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {refinementTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-start to-brand-end p-3 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tool.icon className="w-full h-full text-white" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{tool.title}</h4>
                <p className="text-xs text-slate-300">{tool.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Export Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-brand-start/20 to-brand-end/20 border border-brand-start/30 rounded-full backdrop-blur-sm">
              <Download size={20} className="text-brand-start" />
              <span className="text-white font-semibold">Export in your preferred format</span>
              <ArrowRight size={20} className="text-brand-end" />
            </div>
          </motion.div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-start/20 to-brand-end/20 border border-brand-start/30 text-brand-start text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm">
              <Zap size={16} />
              <span>Ready to Start?</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold font-display mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                Experience the Future of Creative Intelligence
              </span>
            </h3>
            
            <p className="text-lg text-slate-300 mb-10">
              Join thousands of creators, developers, and businesses who have transformed their workflows with Integen AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold text-lg hover:shadow-lg hover:shadow-brand-start/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <Sparkles size={20} />
                Start Creating Now
              </button>
              <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
