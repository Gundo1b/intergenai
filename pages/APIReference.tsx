import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Terminal, 
  Zap, 
  Book, 
  Copy, 
  Play, 
  CheckCircle,
  Globe,
  Lock,
  Clock,
  BarChart3,
  Cpu,
  Image,
  Video,
  MessageSquare
} from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';

export default function APIReference() {
  const [activeTab, setActiveTab] = useState('chat');
  const [copiedCode, setCopiedCode] = useState('');

  const endpoints = {
    chat: {
      title: 'GEN AI Chat API',
      description: 'Conversational AI powered by multiple models',
      icon: <MessageSquare className="w-6 h-6" />,
      baseUrl: 'https://api.integen.ai/v1/chat',
      methods: [
        {
          method: 'POST',
          path: '/messages',
          description: 'Send a message and get AI response',
          example: {
            request: `curl -X POST https://api.integen.ai/v1/chat/messages \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gemini-1.5-flash",
    "messages": [
      {
        "role": "user",
        "content": "Hello, how are you?"
      }
    ],
    "temperature": 0.7,
    "max_tokens": 1000
  }'`,
            response: `{
  "id": "msg_1234567890",
  "object": "chat.completion",
  "created": 1704067200,
  "model": "gemini-1.5-flash",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! I'm doing great, thank you for asking. How can I help you today?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 15,
    "completion_tokens": 25,
    "total_tokens": 40
  }
}`
          }
        },
        {
          method: 'GET',
          path: '/models',
          description: 'List available models',
          example: {
            request: `curl -X GET https://api.integen.ai/v1/chat/models \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
            response: `{
  "object": "list",
  "data": [
    {
      "id": "gemini-1.5-flash",
      "object": "model",
      "created": 1704067200,
      "owned_by": "google"
    },
    {
      "id": "claude-3-sonnet",
      "object": "model",
      "created": 1704067200,
      "owned_by": "anthropic"
    }
  ]
}`
          }
        }
      ]
    },
    image: {
      title: 'AI Image API',
      description: 'Generate stunning images from text descriptions',
      icon: <Image className="w-6 h-6" />,
      baseUrl: 'https://api.integen.ai/v1/images',
      methods: [
        {
          method: 'POST',
          path: '/generate',
          description: 'Generate image from prompt',
          example: {
            request: `curl -X POST https://api.integen.ai/v1/images/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A futuristic cityscape at sunset with flying cars",
    "model": "dall-e-3",
    "size": "1024x1024",
    "quality": "hd",
    "style": "vivid",
    "n": 1
  }'`,
            response: `{
  "created": 1704067200,
  "data": [
    {
      "url": "https://oaidalleapi.azureedge.net/path/to/image.png",
      "revised_prompt": "A futuristic cityscape at sunset with flying cars, digital art style"
    }
  ]
}`
          }
        }
      ]
    },
    video: {
      title: 'AI Video API',
      description: 'Create videos from text prompts',
      icon: <Video className="w-6 h-6" />,
      baseUrl: 'https://api.integen.ai/v1/videos',
      methods: [
        {
          method: 'POST',
          path: '/generate',
          description: 'Generate video from text description',
          example: {
            request: `curl -X POST https://api.integen.ai/v1/videos/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A majestic lion roaring on a rocky cliff at sunrise",
    "model": "sora",
    "duration": 10,
    "resolution": "1080p",
    "fps": 24
  }'`,
            response: `{
  "id": "vid_1234567890",
  "status": "processing",
  "prompt": "A majestic lion roaring on a rocky cliff at sunrise",
  "model": "sora",
  "created_at": "2025-12-14T19:29:34Z"
}`
          }
        }
      ]
    },
    code: {
      title: 'AI Code API',
      description: 'Generate code in multiple programming languages',
      icon: <Code className="w-6 h-6" />,
      baseUrl: 'https://api.integen.ai/v1/code',
      methods: [
        {
          method: 'POST',
          path: '/generate',
          description: 'Generate code from description',
          example: {
            request: `curl -X POST https://api.integen.ai/v1/code/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Create a React component for a login form",
    "language": "javascript",
    "framework": "react",
    "style": "typescript"
  }'`,
            response: `{
  "id": "code_1234567890",
  "generated_code": "import React, { useState } from 'react';\\n\\nconst LoginForm = () => {\\n  const [email, setEmail] = useState('');\\n  const [password, setPassword] = useState('');\\n\\n  const handleSubmit = (e) => {\\n    e.preventDefault();\\n    // Login logic here\\n  };\\n\\n  return (\\n    <form onSubmit={handleSubmit}>\\n      <input\\n        type=\"email\"\\n        value={email}\\n        onChange={(e) => setEmail(e.target.value)}\\n        placeholder=\"Email\"\\n      />\\n      <input\\n        type=\"password\"\\n        value={password}\\n        onChange={(e) => setPassword(e.target.value)}\\n        placeholder=\"Password\"\\n      />\\n      <button type=\"submit\">Login</button>\\n    </form>\\n  );\\n};\\n\\nexport default LoginForm;",
  "language": "javascript",
  "framework": "react"
}`
          }
        }
      ]
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const tabs = [
    { id: 'chat', label: 'Chat API', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'image', label: 'Image API', icon: <Image className="w-4 h-4" /> },
    { id: 'video', label: 'Video API', icon: <Video className="w-4 h-4" /> },
    { id: 'code', label: 'Code API', icon: <Code className="w-4 h-4" /> }
  ];

  const currentEndpoint = endpoints[activeTab as keyof typeof endpoints];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/80 via-cyan-50/60 to-blue-50/80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Animated Background */}
      <AnimatedBackground variant="coding" intensity="medium" />

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-200/30 text-sky-600 dark:text-sky-400 text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm shadow-lg">
              <Terminal size={16} />
              <span>API Reference</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
              Build with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500">
                integen APIs
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto leading-relaxed">
              Complete API documentation with examples, authentication guides, and interactive code samples.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: <Zap className="w-6 h-6" />, label: '99.9% Uptime', value: '99.9%' },
              { icon: <Clock className="w-6 h-6" />, label: 'Avg Response', value: '<200ms' },
              { icon: <BarChart3 className="w-6 h-6" />, label: 'Rate Limit', value: '1000/min' },
              { icon: <Lock className="w-6 h-6" />, label: 'Security', value: 'Enterprise' }
            ].map((stat, index) => (
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
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* API Tabs */}
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

          {/* API Documentation */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* API Header */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/30 dark:border-slate-700/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 p-4 text-white">
                  {currentEndpoint.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{currentEndpoint.title}</h2>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">{currentEndpoint.description}</p>
                </div>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-4">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Globe className="w-4 h-4" />
                  <span className="font-mono">{currentEndpoint.baseUrl}</span>
                </div>
              </div>
            </div>

            {/* API Methods */}
            <div className="space-y-6">
              {currentEndpoint.methods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/30 dark:border-slate-700/30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      method.method === 'GET' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}>
                      {method.method}
                    </span>
                    <code className="text-slate-900 dark:text-white font-mono text-lg">{method.path}</code>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6">{method.description}</p>
                  
                  <div className="space-y-6">
                    {/* Request Example */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Request</h4>
                        <button
                          onClick={() => copyToClipboard(method.example.request, `request-${index}`)}
                          className="flex items-center gap-2 px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                        >
                          {copiedCode === `request-${index}` ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          Copy
                        </button>
                      </div>
                      <pre className="bg-slate-900 rounded-xl p-4 overflow-x-auto text-sm text-green-400 font-mono">
                        <code>{method.example.request}</code>
                      </pre>
                    </div>
                    
                    {/* Response Example */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Response</h4>
                        <button
                          onClick={() => copyToClipboard(method.example.response, `response-${index}`)}
                          className="flex items-center gap-2 px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                        >
                          {copiedCode === `response-${index}` ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          Copy
                        </button>
                      </div>
                      <pre className="bg-slate-900 rounded-xl p-4 overflow-x-auto text-sm text-blue-400 font-mono">
                        <code>{method.example.response}</code>
                      </pre>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Start */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-200/30 rounded-3xl p-8 lg:p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 p-4 text-white mx-auto mb-6">
                <Play className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Get Started?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Get your API key and start building with integen AI in minutes. No credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Book size={20} />
                  Get API Key
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white font-semibold rounded-2xl border border-slate-200/30 dark:border-slate-700/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Terminal size={20} />
                  Try Interactive Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}