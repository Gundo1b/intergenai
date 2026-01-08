import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Share2, 
  Star, 
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Calendar,
  MapPin,
  Trophy,
  Zap,
  BookOpen,
  Code,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Award,
  Target,
  Coffee,
  Globe,
  Shield,
  Clock
} from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';

export default function Community() {
  const [activeTab, setActiveTab] = useState('overview');

  const communityStats = [
    { label: 'Active Members', value: '50K+', icon: <Users className="w-6 h-6" /> },
    { label: 'Daily Discussions', value: '2K+', icon: <MessageSquare className="w-6 h-6" /> },
    { label: 'Success Stories', value: '1K+', icon: <Trophy className="w-6 h-6" /> },
    { label: 'Contributors', value: '500+', icon: <Heart className="w-6 h-6" /> }
  ];

  const featuredMembers = [
    {
      name: 'Alex Chen',
      role: 'AI Researcher',
      company: 'Tech Innovators',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      contributions: 150,
      badges: ['Expert', 'Mentor', 'Early Adopter']
    },
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      company: 'StartupXYZ',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      contributions: 89,
      badges: ['Contributor', 'Problem Solver']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      company: 'AI Solutions Inc',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      contributions: 67,
      badges: ['Innovator', 'Community Leader']
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Developer Workshop',
      date: '2025-01-15',
      time: '2:00 PM PST',
      type: 'Virtual',
      attendees: 250,
      description: 'Deep dive into advanced AI integration techniques'
    },
    {
      title: 'integen Hackathon 2025',
      date: '2025-02-01',
      time: 'All Day',
      type: 'Hybrid',
      attendees: 500,
      description: 'Build the next breakthrough AI application'
    },
    {
      title: 'Community Meetup - San Francisco',
      date: '2025-02-20',
      time: '6:00 PM PST',
      type: 'In-Person',
      attendees: 100,
      description: 'Network with fellow AI enthusiasts'
    }
  ];

  const discussions = [
    {
      title: 'Best practices for AI image generation',
      author: 'Emily Davis',
      replies: 23,
      likes: 45,
      category: 'Tips & Tricks',
      timeAgo: '2 hours ago',
      featured: true
    },
    {
      title: 'Help: Code generation not working as expected',
      author: 'John Smith',
      replies: 12,
      likes: 8,
      category: 'Support',
      timeAgo: '4 hours ago'
    },
    {
      title: 'Showcase: Built an AI-powered todo app',
      author: 'Maria Garcia',
      replies: 31,
      likes: 67,
      category: 'Showcase',
      timeAgo: '6 hours ago',
      featured: true
    }
  ];

  const resources = [
    {
      title: 'Community Guidelines',
      description: 'Our community standards and best practices',
      icon: <BookOpen className="w-6 h-6" />,
      link: '#'
    },
    {
      title: 'Code of Conduct',
      description: 'Creating a welcoming environment for everyone',
      icon: <Heart className="w-6 h-6" />,
      link: '#'
    },
    {
      title: 'Moderation Policy',
      description: 'How we maintain a healthy community',
      icon: <Shield className="w-6 h-6" />,
      link: '#'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Globe className="w-4 h-4" /> },
    { id: 'events', label: 'Events', icon: <Calendar className="w-4 h-4" /> },
    { id: 'discussions', label: 'Discussions', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'members', label: 'Members', icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50/80 via-cyan-50/60 to-blue-50/80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Animated Background */}
      <AnimatedBackground variant="coding" intensity="medium" />

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-200/30 text-sky-600 dark:text-sky-400 text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm shadow-lg">
              <Users size={16} />
              <span>Community</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
              Join Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500">
                Thriving Community
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto leading-relaxed mb-8">
              Connect with developers, share knowledge, and build amazing AI applications together. 
              Learn from experts, showcase your work, and be part of the future of AI development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users size={20} />
                Join Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white font-semibold rounded-2xl border border-slate-200/30 dark:border-slate-700/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Start Discussion
              </motion.button>
            </div>
          </motion.div>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-slate-200/30 dark:border-slate-700/30"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 p-3 text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-slate-200/30 dark:border-slate-700/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'overview' && (
              <div className="space-y-12">
                {/* Featured Members */}
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                    Featured Community Members
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredMembers.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/30 dark:border-slate-700/30 text-center"
                      >
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-1">{member.role}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{member.company}</p>
                        
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <Trophy className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">{member.contributions} contributions</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.badges.map((badge, badgeIndex) => (
                            <span
                              key={badgeIndex}
                              className="px-2 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-xs font-medium"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                    Community Resources
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resources.map((resource, index) => (
                      <motion.a
                        key={index}
                        href={resource.link}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/30 dark:border-slate-700/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                          {resource.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{resource.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{resource.description}</p>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                  Upcoming Events
                </h2>
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/30 dark:border-slate-700/30"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{event.title}</h3>
                          <p className="text-slate-600 dark:text-slate-300 mb-4">{event.description}</p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{event.type}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{event.attendees} attendees</span>
                            </div>
                          </div>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-4 md:mt-0 md:ml-6 px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                        >
                          Register
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'discussions' && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                  Recent Discussions
                </h2>
                <div className="space-y-4">
                  {discussions.map((discussion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/30 dark:border-slate-700/30 hover:shadow-xl transition-all duration-300 ${
                        discussion.featured ? 'border-sky-300 dark:border-sky-700' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer">
                              {discussion.title}
                            </h3>
                            {discussion.featured && (
                              <span className="px-2 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-xs font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                            <span>by {discussion.author}</span>
                            <span>•</span>
                            <span>{discussion.timeAgo}</span>
                            <span>•</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs">
                              {discussion.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{discussion.replies}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{discussion.likes}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'members' && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                  Community Members
                </h2>
                <div className="text-center mb-12">
                  <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    Connect with talented developers, researchers, and AI enthusiasts from around the world.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(9)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/30 dark:border-slate-700/30 text-center hover:shadow-xl transition-all duration-300"
                    >
                      <img
                        src={`https://images.unsplash.com/photo-${1500000000000 + index}?w=150&h=150&fit=crop&crop=face`}
                        alt={`Member ${index + 1}`}
                        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {['Alex Chen', 'Sarah Johnson', 'Michael Rodriguez', 'Emily Davis', 'John Smith', 'Maria Garcia', 'David Kim', 'Lisa Wang', 'Robert Taylor'][index]}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                        {['AI Researcher', 'Full Stack Developer', 'Product Manager', 'UI/UX Designer', 'Data Scientist', 'Software Engineer', 'Machine Learning Engineer', 'Tech Lead', 'Startup Founder'][index]}
                      </p>
                      <div className="flex justify-center gap-2">
                        <button className="p-2 text-slate-400 hover:text-sky-500 transition-colors">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-sky-500 transition-colors">
                          <Github className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-sky-500 transition-colors">
                          <Twitter className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Join CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-200/30 rounded-3xl p-8 lg:p-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 p-4 text-white mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Join?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Become part of our growing community and unlock the full potential of AI development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Users size={20} />
                  Join Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white font-semibold rounded-2xl border border-slate-200/30 dark:border-slate-700/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}