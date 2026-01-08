import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  User,
  ChevronDown,
  BarChart3,
  Zap,
  Target,
  TrendingUp,
  Shield,
  LinkIcon,
  Send,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Button } from '../components/ui/button';
import { NewsletterCTA } from '../components/NewsletterCTA';
import { Link } from 'react-router-dom';

const MODELS = {
  chatgpt: {
    name: 'ChatGPT',
    logo: '/ChatGPT-Logo-PNG-1.png',
  },
  claude: {
    name: 'Claude',
    logo: '/claude-color.svg',
  },
  gemini: {
    name: 'Gemini',
    logo: '/gemini-color.png',
  },
  ollama: {
    name: 'Ollama',
    logo: '/ollama.png',
  },
  deepseek: {
    name: 'DeepSeek',
    logo: '/deepseek-color.png',
  },
  qwen: {
    name: 'Qwen',
    logo: '/qwen-color.png',
  },
};

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const TypingIndicator = () => (
  <div className="flex items-center gap-2">
    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
  </div>
);

export const AIChat: React.FC = () => {
  const [activeModel, setActiveModel] = useState<keyof typeof MODELS>('chatgpt');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-gradient-to-b from-[#64E1FF]/20 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">

      {/* ================= HERO (FULL HEIGHT FIXED) ================= */}
      <section
        className="
          relative
          h-[80vh]
          md:min-h-screen
          flex
          items-center
          justify-center
          pt-20
          text-center
          overflow-hidden
        "
        style={{
          backgroundImage:
            'url(/flat-woman-chatting-with-chatbot-communicating-ai-robot-assistant.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Chat with AI that </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              understands your business
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Intergen AI connects directly to your data — not generic internet answers.
          </p>

          <div className="mt-10 flex justify-center">
            <Link to="/aichatinterface">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg">
                  Get Started Now
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= CHAT DEMO ================= */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              See It in Action
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Interact with different AI models and get instant, data-driven answers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl border bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-semibold">Intergen</span>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex gap-2">
                  <img src={MODELS[activeModel].logo} className="w-5 h-5" />
                  {MODELS[activeModel].name}
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                {Object.entries(MODELS).map(([key, model]) => (
                  <DropdownMenuItem
                    key={key}
                    onSelect={() => setActiveModel(key as keyof typeof MODELS)}
                  >
                    <img src={model.logo} className="w-5 h-5 mr-2" />
                    {model.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="p-6 min-h-[300px] flex flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto">
              {messages.length === 0 && (
                <div className="text-center text-slate-400 pt-10">
                  <Bot size={40} className="mx-auto mb-2" />
                  Ask me anything to get started
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
                      <Bot className="text-white" />
                    </div>
                  )}

                  <div className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 max-w-lg">
                    {msg.content}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center">
                      <User />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="p-4 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              className="flex-1 px-4 py-3 rounded-full bg-slate-100 dark:bg-slate-800"
            />
            <Button className="rounded-full">
              <Send size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ================= WHY INTERGEN AI CHAT ================= */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why You Need AI Chat from Intergen
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Unlike generic AI chatbots that give internet-sourced answers, Intergen connects directly to your business data for accurate, actionable insights.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Data-Driven Responses',
                description: 'Get answers based on your actual business data, not generic internet knowledge.'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Business Intelligence',
                description: 'Uncover hidden patterns and insights from your data that drive better decisions.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Enterprise Security',
                description: 'Your data stays secure with enterprise-grade encryption and privacy controls.'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Real-Time Analysis',
                description: 'Instant answers to complex queries across your entire dataset.'
              },
              {
                icon: <LinkIcon className="w-8 h-8" />,
                title: 'Seamless Integration',
                description: 'Connects to your existing tools and workflows without disrupting your processes.'
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Customizable Insights',
                description: 'Tailor responses to your specific business needs and industry requirements.'
              }
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-cyan-500 mb-4 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3">{reason.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <BarChart3 />, title: 'Data-Driven Insights' },
            { icon: <Zap />, title: 'Instant Analysis' },
            { icon: <Shield />, title: 'Enterprise Security' },
          ].map((b, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow">
              <div className="mb-3 text-cyan-500">{b.icon}</div>
              <h3 className="font-semibold text-lg">{b.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
};

export default AIChat;