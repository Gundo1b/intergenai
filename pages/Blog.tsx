import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Tag,
  TrendingUp,
  Users,
  Lightbulb,
  Code,
  Zap,
  Star,
  Bot,
  Palette,
  Settings,
  Shield,
  Sparkles,
  Lock
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI: Human-AI Collaboration",
    excerpt: "Exploring how artificial intelligence is reshaping the way we work, create, and solve problems.",
    content: "Artificial intelligence is no longer a distant concept from science fiction. It's here, it's powerful, and it's changing everything...",
    author: "Alex Chen",
    date: "2025-12-01",
    readTime: "5 min read",
    category: "AI Trends",
    image: Bot,
    featured: true
  },
  {
    id: 2,
    title: "Building Better AI Interfaces",
    excerpt: "Design principles for creating intuitive AI-powered applications that users love.",
    content: "The success of AI applications depends heavily on how well we design their user interfaces...",
    author: "Emily Watson",
    date: "2025-11-28",
    readTime: "7 min read",
    category: "Design",
    image: Palette,
    featured: false
  },
  {
    id: 3,
    title: "Scaling AI Systems: Lessons Learned",
    excerpt: "Technical insights from building and maintaining large-scale AI infrastructure.",
    content: "When we started building Integen, we had to solve many challenges around scaling AI systems...",
    author: "Sarah Johnson",
    date: "2025-11-25",
    readTime: "10 min read",
    category: "Engineering",
    image: Settings,
    featured: false
  },
  {
    id: 4,
    title: "AI in Creative Industries",
    excerpt: "How artists, writers, and designers are leveraging AI to enhance their creative processes.",
    content: "The creative industries are being transformed by AI tools that augment human creativity...",
    author: "Michael Rodriguez",
    date: "2025-11-22",
    readTime: "6 min read",
    category: "Creativity",
    image: Lightbulb,
    featured: false
  },
  {
    id: 5,
    title: "Privacy and AI: Building Trust",
    excerpt: "Our approach to ensuring user privacy and data security in AI applications.",
    content: "Trust is fundamental to the adoption of AI technology. Users need to know their data is safe...",
    author: "Alex Chen",
    date: "2025-11-20",
    readTime: "8 min read",
    category: "Security",
    image: Shield,
    featured: false
  },
  {
    id: 6,
    title: "The Multi-Modal AI Revolution",
    excerpt: "Understanding how AI that can process text, images, audio, and video is changing everything.",
    content: "Multi-modal AI represents a significant leap forward in artificial intelligence...",
    author: "Sarah Johnson",
    date: "2025-11-18",
    readTime: "9 min read",
    category: "Technology",
    image: Sparkles,
    featured: false
  }
];

const categories = [
  { name: "All Posts", count: blogPosts.length, active: true },
  { name: "AI Trends", count: 2, active: false },
  { name: "Design", count: 1, active: false },
  { name: "Engineering", count: 1, active: false },
  { name: "Creativity", count: 1, active: false },
  { name: "Security", count: 1, active: false }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-start/5 via-transparent to-brand-end/5 dark:from-brand-start/10 dark:to-brand-end/10" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-brand-start/20 to-brand-end/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-end/10 to-brand-start/10 rounded-full blur-3xl opacity-20" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-start/10 to-brand-end/10 dark:from-brand-start/20 dark:to-brand-end/20 border border-brand-start/30 dark:border-brand-start/40 text-brand-end dark:text-brand-start text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <BookOpen size={16} />
              <span>Our Blog</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-slate-900 dark:text-white mb-8 leading-tight">
              Insights &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                Innovations
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and developments
              in AI, design, and technology from our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-start/5 to-transparent dark:via-brand-start/10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200/50 dark:border-slate-700/50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-start/50 focus:border-brand-start transition-all duration-300 hover:shadow-lg"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${category.active
                      ? 'bg-gradient-to-r from-brand-start to-brand-end text-white shadow-lg hover:shadow-xl'
                      : 'bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/80 dark:hover:bg-slate-700/80 hover:shadow-md'
                    }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50 dark:bg-slate-900/50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-start/5 to-transparent dark:via-brand-start/10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
              <TrendingUp size={32} className="text-brand-end" />
              Featured Article
            </h2>

            {blogPosts.filter(post => post.featured).map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative bg-gradient-to-br from-white/90 to-blue-50/50 dark:from-slate-800/90 dark:to-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-brand-start/25 transition-all duration-500 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-start/5 via-transparent to-brand-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-10 lg:p-14 flex flex-col justify-center relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <Tag size={18} className="text-brand-end" />
                      <span className="text-sm font-semibold text-brand-end bg-gradient-to-r from-brand-start/10 to-brand-end/10 dark:from-brand-start/20 dark:to-brand-end/20 px-4 py-2 rounded-full border border-brand-start/30">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-brand-end transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-6 mb-8 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold rounded-full hover:shadow-lg hover:shadow-brand-start/25 hover:-translate-y-1 transition-all duration-300 w-fit group"
                    >
                      Read Article
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  <div className="bg-gradient-to-br from-brand-start/10 via-brand-start/5 to-brand-end/10 flex items-center justify-center p-10 lg:p-14 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-start/5 to-transparent opacity-50" />
                    <post.image className="w-32 h-32 text-brand-end relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
              <BookOpen size={32} className="text-brand-end" />
              Latest Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-brand-start/25 hover:-translate-y-3 transition-all duration-500 group-hover:scale-105">
                    <div className="bg-gradient-to-br from-slate-100/80 to-slate-200/80 dark:from-slate-700/80 dark:to-slate-600/80 p-8 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-start/10 via-transparent to-brand-end/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <post.image className="w-16 h-16 mx-auto mb-4 text-brand-end relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      <span className="inline-block text-xs font-semibold text-brand-end bg-gradient-to-r from-brand-start/10 to-brand-end/10 dark:from-brand-start/20 dark:to-brand-end/20 px-4 py-2 rounded-full border border-brand-start/30 relative z-10">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-8">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-end transition-colors duration-300 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-4 mb-6 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                          By {post.author}
                        </span>
                        <ArrowRight size={18} className="text-brand-end group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-start via-brand-end to-brand-start" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold uppercase tracking-wider mb-8">
              
              <span>Newsletter</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Stay in the Loop
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get the latest insights, updates, and stories from the world of AI
              delivered straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-8 py-5 rounded-full text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-lg"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-brand-end font-bold rounded-full hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl hover:shadow-2xl"
              >            
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
