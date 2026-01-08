import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, CornerDownLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  reasoning_details?: any;
}

export const AIChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

    if (!apiKey) {
      const errorMessage: Message = { role: 'assistant', content: 'Error: VITE_OPENROUTER_API_KEY is not set. Please add it to your .env.local file.' };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiMessages = [...messages, userMessage].map(msg => ({
        role: msg.role,
        content: msg.content,
        ...(msg.reasoning_details && { reasoning_details: msg.reasoning_details })
      }));

      const enableReasoning = messages.length === 0 || !messages.some(m => m.reasoning_details);

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "openai/gpt-3.5-turbo",
          "messages": apiMessages,
          ...(enableReasoning && { "reasoning": { "enabled": true } })
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'API request failed');
      }

      const result = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: result.choices[0].message.content,
        reasoning_details: result.choices[0].message.reasoning_details
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Error sending message:', error);
      const errorMessage: Message = { role: 'assistant', content: `Sorry, there was an error: ${error.message}` };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto w-full p-4 flex flex-col h-screen">
        <div className="flex-1 overflow-y-auto mb-4 space-y-6 pr-2">
          {messages.length === 0 && (
            <div className="text-center text-slate-500 dark:text-slate-400 mt-20 flex flex-col items-center">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4">
                <Bot size={48} className="text-white" />
              </div>
              <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">integen AI Chat</h1>
              <p className="text-lg mt-2">Start a conversation with your AI assistant.</p>
            </div>
          )}
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-white" />
                </div>
              )}
              <div className={`max-w-2xl p-3 rounded-lg shadow-sm ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white ml-auto'
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200'
              }`}>
                <p className="whitespace-pre-wrap">{message.content}</p>
                {message.reasoning_details && (
                  <details className="mt-2 text-sm opacity-75 cursor-pointer">
                    <summary>Show Reasoning</summary>
                    <pre className="mt-1 p-2 bg-slate-100 dark:bg-slate-700 rounded-md text-xs whitespace-pre-wrap">{JSON.stringify(message.reasoning_details, null, 2)}</pre>
                  </details>
                )}
              </div>
              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center flex-shrink-0">
                  <User size={16} className="text-slate-700 dark:text-slate-200" />
                </div>
              )}
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="relative">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 resize-none pr-20"
            rows={1}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
            <p className="text-xs text-slate-400 mr-2 hidden sm:block">
              <kbd className="font-sans">Shift</kbd> + <kbd className="font-sans">Enter</kbd> for new line
            </p>
            <Button onClick={sendMessage} disabled={isLoading || !input.trim()} size="icon">
              <Send size={16} />
            </Button>
          </div>
        </div>
        <div className="text-center text-xs text-slate-400 mt-2">
            Powered by <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="underline">OpenRouter</a>. Free model usage.
        </div>
      </div>
    </div>
  );
};

export default AIChatInterface;