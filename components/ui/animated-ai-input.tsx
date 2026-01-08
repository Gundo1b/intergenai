"use client";

import { ArrowRight, Bot, Check, ChevronDown, Paperclip, User } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

// Custom hook for auto-resizing textarea
interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            textarea.style.height = "auto";
            const newHeight = Math.max(
                minHeight,
                Math.min(textarea.scrollHeight, maxHeight ?? Infinity)
            );
            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    return { textareaRef, adjustHeight };
}

// Thinking indicator component
const ThinkingIndicator = () => (
    <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
            <Bot className="w-5 h-5 text-slate-600 dark:text-slate-300" />
        </div>
        <div className="p-3 rounded-2xl rounded-bl-none bg-slate-100 dark:bg-slate-700">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-100" />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-200" />
            </div>
        </div>
    </div>
);

// Message type definition
interface Message {
    role: "user" | "assistant";
    content: string;
    logo?: React.ReactNode;
}

// Main AI Prompt component
export function AI_Prompt() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 24, maxHeight: 200 });
    const [selectedModel, setSelectedModel] = useState("Claude 3");
    const [isThinking, setIsThinking] = useState(false);
    
    const AI_MODELS = ["Claude 3", "Gemini", "Deepseek", "Ollama", "Qwen"];
    const MODEL_ICONS: Record<string, React.ReactNode> = {
        "Claude 3": <img src="/claude-color.svg" className="w-5 h-5" alt="Claude 3" />,
        "Gemini": <img src="/gemini-color.png" className="w-5 h-5" alt="Gemini" />,
        "Deepseek": <img src="/deepseek-color.png" className="w-5 h-5" alt="Deepseek" />,
        "Ollama": <img src="/ollama.png" className="w-5 h-5" alt="Ollama" />,
        "Qwen": <img src="/qwen-color.png" className="w-5 h-5" alt="Qwen" />,
    };

    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hello! How can I help you today?",
            logo: <Bot className="w-5 h-5 text-slate-600 dark:text-slate-300" />,
        },
    ]);

    const conversationEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        conversationEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isThinking]);

    const sendMessage = () => {
        if (!value.trim()) return;

        const userMessage: Message = { role: "user", content: value };
        setMessages((prev) => [...prev, userMessage]);
        setValue("");
        adjustHeight(true);
        setIsThinking(true);

        setTimeout(() => {
            const assistantResponse: Message = {
                role: "assistant",
                content: `This is a simulated response from ${selectedModel}.`,
                logo: MODEL_ICONS[selectedModel],
            };
            setMessages((prev) => [...prev, assistantResponse]);
            setIsThinking(false);
        }, 2000);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="w-full py-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col h-[500px]">
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.map((message, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex items-start gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                        >
                            {message.role === "assistant" && (
                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                                    {message.logo}
                                </div>
                            )}
                            <div
                                className={`p-3 rounded-2xl max-w-lg ${message.role === "user"
                                    ? "bg-blue-600 text-white rounded-br-none"
                                    : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white rounded-bl-none"}`}>
                                <p className="leading-relaxed">{message.content}</p>
                            </div>
                            {message.role === "user" && (
                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                                    <User className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                    {isThinking && <ThinkingIndicator />}
                    <div ref={conversationEndRef} />
                </div>

                <div className="border-t border-slate-200 dark:border-slate-700 p-3">
                    <div className="relative bg-slate-100 dark:bg-slate-700 rounded-lg">
                        <Textarea
                            id="ai-input-15"
                            value={value}
                            placeholder="Send a message..."
                            className="w-full pl-4 pr-16 py-3 bg-transparent border-none text-slate-800 dark:text-white placeholder:text-slate-500 resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            ref={textareaRef}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                            disabled={isThinking}
                            rows={1}
                        />
                        <Button
                            size="icon"
                            variant="default"
                            className="absolute top-1/2 right-2 -translate-y-1/2 w-9 h-9 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg disabled:bg-slate-300 dark:disabled:bg-slate-600"
                            aria-label="Send message"
                            disabled={!value.trim() || isThinking}
                            onClick={sendMessage}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-2 h-8 pl-2 pr-3 text-sm rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                                >
                                    {MODEL_ICONS[selectedModel]}
                                    <span className="font-medium">{selectedModel}</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className={cn(
                                    "min-w-[12rem]",
                                    "border-slate-200 dark:border-slate-700",
                                    "bg-white dark:bg-slate-800 shadow-2xl"
                                )}
                            >
                                {AI_MODELS.map((model) => (
                                    <DropdownMenuItem
                                        key={model}
                                        onSelect={() => setSelectedModel(model)}
                                        className="flex items-center justify-between gap-2 focus:bg-slate-100 dark:focus:bg-slate-700"
                                    >
                                        <div className="flex items-center gap-2">
                                            {MODEL_ICONS[model]}
                                            <span className="font-medium">{model}</span>
                                        </div>
                                        {selectedModel === model && (
                                            <Check className="w-4 h-4 text-blue-500" />
                                        )}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <label
                            className={cn(
                                "p-2 rounded-lg cursor-pointer",
                                "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
                            )}
                            aria-label="Attach file"
                        >
                            <input type="file" className="hidden" />
                            <Paperclip className="w-5 h-5" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
