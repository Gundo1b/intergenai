import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Zap,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  Code,
  Palette,
  Brain,
  TrendingUp,
  Lightbulb,
  Target,
  Sparkles,
  Rocket,
  Award,
  Shield
} from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Senior",
    description: "Join our core AI team to build and optimize the next generation of intelligent systems.",
    requirements: [
      "5+ years of experience in machine learning",
      "Strong Python and TensorFlow/PyTorch skills",
      "Experience with large language models",
      "Background in NLP or computer vision"
    ],
    icon: Brain,
    featured: true
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Shape the future of AI interaction design and create beautiful, intuitive user experiences.",
    requirements: [
      "4+ years of product design experience",
      "Figma, Sketch, or similar design tools",
      "Understanding of UX principles",
      "Portfolio of AI or tech products"
    ],
    icon: Palette,
    featured: true
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    level: "Mid-Level",
    description: "Build responsive, performant web applications that showcase our AI capabilities.",
    requirements: [
      "3+ years of React/TypeScript experience",
      "Knowledge of modern CSS frameworks",
      "Experience with state management",
      "Understanding of web performance optimization"
    ],
    icon: Code,
    featured: false
  },
  {
    id: 4,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Lead our marketing efforts to reach more creators, developers, and enterprises.",
    requirements: [
      "4+ years of B2B marketing experience",
      "Experience with AI or tech products",
      "Content marketing and social media skills",
      "Data-driven marketing approach"
    ],
    icon: TrendingUp,
    featured: false
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Austin, TX",
    type: "Full-time",
    level: "Senior",
    description: "Scale our infrastructure to support millions of users and ensure 99.9% uptime.",
    requirements: [
      "5+ years of DevOps/SRE experience",
      "AWS/GCP expertise",
      "Kubernetes and Docker",
      "CI/CD pipeline management"
    ],
    icon: Target,
    featured: false
  },
  {
    id: 6,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    level: "Mid-Level",
    description: "Help our enterprise customers succeed with Integen AI and drive adoption.",
    requirements: [
      "3+ years of customer success experience",
      "B2B SaaS background",
      "Strong communication skills",
      "Technical aptitude for AI products"
    ],
    icon: Users,
    featured: false
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance plus mental health support"
  },
  {
    icon: Globe,
    title: "Remote First",
    description: "Work from anywhere with flexible hours and remote work stipend"
  },
  {
    icon: Zap,
    title: "Learning & Growth",
    description: "$3,000 annual learning budget for courses, conferences, and books"
  },
  {
    icon: Star,
    title: "Equity & Compensation",
    description: "Competitive salary with equity participation and performance bonuses"
  },
  {
    icon: Clock,
    title: "Time Off",
    description: "Unlimited PTO, plus company holidays and wellness days"
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Regular team events, offsites, and a supportive, inclusive environment"
  }
];

export default function Careers() {
  const featuredJobs = jobOpenings.filter(job => job.featured);
  const otherJobs = jobOpenings.filter(job => !job.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50/80 via-cyan-50/60 to-blue-50/80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-cyan-100/30 to-blue-100/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-200/30 text-sky-600 dark:text-sky-400 text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
             
              <span>Join Our Team</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display text-slate-900 dark:text-white mb-8 leading-tight">
              Join the Future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500">
                Creative Intelligence
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed font-light">
              Help us build the all-in-one AI platform that empowers millions of creators and developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50/80 to-sky-50/60 dark:from-slate-800 dark:to-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent dark:via-sky-500/10" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-gradient-to-br from-slate-50/90 to-sky-50/70 dark:from-slate-800/90 dark:to-slate-900/70 backdrop-blur-sm rounded-3xl p-10 lg:p-16 shadow-2xl border border-slate-200/30 dark:border-slate-700/30">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 p-4 flex items-center justify-center shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white mb-6">
                  Our Mission
                </h2>
              </div>
              <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed text-center font-light italic">
                "At Integen AI, we believe creativity and intelligence belong to everyone. We're building a unified AI platform that transforms how the world creates, learns, and builds — faster, smarter, and more seamlessly than ever. Together, we're breaking down barriers and unlocking unprecedented potential for creators and developers worldwide."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work at Integen */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent dark:via-cyan-500/10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Why Work at Integen
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light">
              Join a team that's shaping the future of creative AI technology
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6 p-8 rounded-3xl bg-gradient-to-br from-slate-50/80 to-cyan-50/60 dark:from-slate-800/80 dark:to-slate-700/80 border border-sky-100/50 dark:border-slate-600/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 p-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Lightbulb className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    Shape the Future
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Build something meaningful — Pioneer breakthrough innovations that will define the next generation of creative AI technology.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="flex items-start gap-6 p-8 rounded-3xl bg-gradient-to-br from-slate-50/80 to-emerald-50/60 dark:from-slate-800/80 dark:to-slate-700/80 border border-sky-100/50 dark:border-slate-600/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Freedom to Create
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Remote-first culture — Design your ideal workspace and collaborate with brilliant minds across the globe, unbound by geography.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group"
            >
              <div className="flex items-start gap-6 p-8 rounded-3xl bg-gradient-to-br from-slate-50/80 to-purple-50/60 dark:from-slate-800/80 dark:to-slate-700/80 border border-sky-100/50 dark:border-slate-600/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 p-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Your Voice Matters
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Small team, big impact — Every team member drives our direction, with your ideas and vision directly shaping our product and company culture.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group"
            >
              <div className="flex items-start gap-6 p-8 rounded-3xl bg-gradient-to-br from-slate-50/80 to-blue-50/60 dark:from-slate-800/80 dark:to-slate-700/80 border border-sky-100/50 dark:border-slate-600/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 p-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Brain className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Push Boundaries
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Cutting-edge technology — Work with the latest AI advancements and help establish new industry standards in creative intelligence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Culture Block */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/90 via-sky-900/80 to-cyan-900/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 p-8 flex items-center justify-center shadow-2xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2">
                  <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-12 lg:p-16 border border-white/20">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed text-center font-light">
                "We're a tight-knit community of innovators who thrive on curiosity and collaboration. Our shared passion for empowering creators drives us to build tools that don't just meet today's needs — they anticipate tomorrow's possibilities. If you're excited about building technology that amplifies human creativity, you'll find your tribe here."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50/80 to-sky-50/60 dark:from-slate-800 dark:to-slate-900 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light">
              We take care of our team so they can take care of their best work
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-50/90 to-sky-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-200/30 dark:border-slate-700/30 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent dark:via-cyan-500/10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light">
              Find your next opportunity to make an impact
            </p>
          </motion.div>
          
          {/* Featured Positions */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Featured Positions</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-slate-50/90 to-sky-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/30 dark:border-slate-700/30 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 p-4 flex-shrink-0 shadow-lg">
                        <job.icon className="w-full h-full text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                            {job.title}
                          </h3>
                          <div className="px-3 py-1 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs font-semibold rounded-full">
                            FEATURED
                          </div>
                        </div>
                        <p className="text-sky-600 dark:text-sky-400 font-semibold mb-3">{job.department}</p>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <div className="space-y-2 mb-6">
                          <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Key Requirements:</h4>
                          <ul className="space-y-1">
                            {job.requirements.slice(0, 2).map((req, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <CheckCircle size={12} className="text-emerald-500 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button className="w-full px-6 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                          Apply Now
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Positions */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">All Positions</h3>
            <div className="space-y-6">
              {otherJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50/90 to-sky-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/30 dark:border-slate-700/30 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 p-3 shadow-lg">
                          <job.icon className="w-full h-full text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-sm text-sky-600 dark:text-sky-400 font-medium">{job.department}</p>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase size={14} />
                          <span>{job.level}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-48">
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        Apply Now
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-white to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-8">
              <Sparkles className="w-20 h-20 mx-auto mb-6 text-white/80" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
              "We're at the beginning of an incredible journey. Join Integen and help us architect the future of unified AI — where creativity knows no bounds and innovation drives every decision."
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <button className="px-10 py-5 bg-white text-sky-600 font-bold text-lg rounded-2xl hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <Briefcase size={24} />
                View All Careers
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}