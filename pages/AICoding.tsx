import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NewsletterCTA } from '../components/NewsletterCTA';
import { Code, Zap, Bug, BrainCircuit, TestTube2, GitPullRequest } from 'lucide-react';
import { Python, JavaScript, ReactLogo, NodeJs, Go, Rust, TypeScript, Java, TensorFlow, Django, VueJs, Angular } from '../components/ui/TechIcons';
import { CodeComparisonDemo } from '../components/ui/code-comparison-demo';
import { Button } from '../components/ui/button';

// --- Mock Data ---
const features = [
    { icon: Code, title: 'Natural Language to Code', description: 'Describe logic in plain English and get production-ready code in seconds.' },
    { icon: Zap, title: 'Real-time Completion', description: 'Blazing-fast, context-aware code completions right in your editor.' },
    { icon: Bug, title: 'Automated Bug Fixing', description: 'AI identifies, explains, and suggests fixes for bugs in your codebase.' },
    { icon: BrainCircuit, title: 'Code Explanation', description: 'Understand complex code snippets with simple, natural language explanations.' },
    { icon: GitPullRequest, title: 'Effortless Refactoring', description: 'Modernize legacy code, improve performance, and enhance readability.' },
    { icon: TestTube2, title: 'Unit Test Generation', description: 'Automatically generate comprehensive unit and integration tests for your code.' },
];

const languageTabs = {
    Python: {
        prompt: "Create a Flask API endpoint that takes a user ID and returns user data from a PostgreSQL database.",
        code: `from flask import Flask, jsonify
from db_connector import get_user_by_id

app = Flask(__name__)

@app.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    """Fetches user data by user ID."""
    try:
        user = get_user_by_id(user_id)
        if user:
            return jsonify(user), 200
        else:
            return jsonify({'error': 'User not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
`
    },
    JavaScript: {
        prompt: "Build a React component that fetches and displays a list of posts from a JSON API.",
        code: `import React, { useState, useEffect } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
};

export default PostList;
`
    },
    Go: {
        prompt: "Write a Go function to execute a shell command and capture its output.",
        code: `package main

import (
    "fmt"
    "os/exec"
)

func executeCommand(command string, args ...string) (string, error) {
    cmd := exec.Command(command, args...)
    output, err := cmd.CombinedOutput()
    if err != nil {
        return "", fmt.Errorf("command execution failed: %w", err)
    }
    return string(output), nil
}

func main() {
    // Example: list files in current directory
    output, err := executeCommand("ls", "-la")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println(output)
}
`
    }
};

const techLogos = [
    { name: 'Python', icon: Python },
    { name: 'JavaScript', icon: JavaScript },
    { name: 'React', icon: ReactLogo },
    { name: 'Node.js', icon: NodeJs },
    { name: 'Go', icon: Go },
    { name: 'Rust', icon: Rust },
    { name: 'TypeScript', icon: TypeScript },
    { name: 'Java', icon: Java },
    { name: 'TensorFlow', icon: TensorFlow },
    { name: 'Django', icon: Django },
    { name: 'Vue.js', icon: VueJs },
    { name: 'Angular', icon: Angular },
];

export const AICoding: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Python');
    const [animatedCode, setAnimatedCode] = useState('');

    const demoCode = `import { createServer } from 'http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: "Hello from the future of code!",
    timestamp: new Date().toISOString()
  }));
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log('Server running on http://localhost:' + PORT);
});`;

    useEffect(() => {
        let i = 0;
        setAnimatedCode('');
        const interval = setInterval(() => {
            if (i < demoCode.length) {
                setAnimatedCode(prev => prev + demoCode[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 font-mono overflow-x-hidden">

            {/* --- Full Screen Video Background (Hero on Top) --- */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-contain z-0"
            >
                <source src="/videos/heroaicoding.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/50 z-0" /> {/* Optional overlay for readability */}
            
            <div className="relative z-10 h-[80vh] md:h-screen flex items-center justify-center text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto px-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-white">Your AI </span>
                        <span className="bg-gradient-to-r from-[#64E1FF] to-[#009DFF] bg-clip-text text-transparent">
                            Coding Partner
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
                       Generate, refactor, and understand code with the help of AI.
                    </p>
                    <Button className="mt-8 px-8 py-3 bg-gradient-to-r from-[#64E1FF] to-[#009DFF] text-white font-semibold rounded-lg hover:scale-105 transition-all">
                        Get Started
                    </Button>
                </motion.div>
            </div>

            {/* --- Main Content --- */}
            <div className="relative z-10 bg-white dark:bg-gray-950 w-full overflow-y-auto">

                {/* --- Interactive Demo --- */}
                <section className="py-12 md:py-24 px-4">
                    <div className="w-full grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 p-4 md:p-6 rounded-xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Describe Your Goal</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">Just type what you need in plain English.</p>
                            <div className="bg-gray-200 dark:bg-black/50 p-4 rounded-lg border border-slate-300 dark:border-slate-700 min-h-[200px] md:min-h-[300px]">
                                <p className="text-green-600 dark:text-green-400">{">"} Prompt:</p>
                                <p className="text-gray-800 dark:text-white whitespace-pre-wrap break-words">"Create a simple Node.js server that returns a JSON response."</p>
                            </div>
                        </div>
                        <div className="bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 p-4 md:p-6 rounded-xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Watch it Write</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">The AI generates clean, efficient code.</p>
                            <div className="bg-gray-200 dark:bg-black/50 p-4 rounded-lg border border-slate-300 dark:border-slate-700 min-h-[200px] md:min-h-[300px]">
                                <pre className="whitespace-pre-wrap break-words"><code className="language-javascript text-cyan-700 dark:text-cyan-300">{animatedCode}</code></pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Features Section --- */}
                <section className="py-24 flex-shrink-0 bg-gray-100 dark:bg-gray-900 px-4">
                    <div className="w-full">
                        <h2 className="text-4xl font-bold text-center mb-12">An Entire Dev Team in One Tool</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 p-8 rounded-2xl hover:border-purple-500/50 transition-colors">
                                    <div className="text-purple-400 mb-4"><feature.icon size={32} /></div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">{feature.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Tabbed Code Showcase --- */}
                <section className="py-24 flex-shrink-0 px-4">
                    <div className="w-full">
                        <h2 className="text-4xl font-bold text-center mb-12">Multi-Language Mastery</h2>
                        <div className="flex justify-center gap-4 mb-8">
                            {Object.keys(languageTabs).map(lang => (
                                <button key={lang} onClick={() => setActiveTab(lang)} className={`px-6 py-2 rounded-md font-semibold transition-all ${activeTab === lang ? 'bg-green-400/20 text-green-700 dark:text-green-300' : 'bg-slate-200 text-slate-600 hover:bg-slate-300 dark:bg-slate-800/50 dark:text-slate-400 dark:hover:bg-slate-700/50'}`}>
                                    {lang}
                                </button>
                            ))}
                        </div>
                        <div className="bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl p-6 relative min-h-[400px]">
                            <p className="text-green-600 dark:text-green-400 mb-4">{">"} {languageTabs[activeTab].prompt}</p>
                            <pre className="whitespace-pre-wrap break-words"><code className="text-slate-800 dark:text-slate-200">{languageTabs[activeTab].code}</code></pre>
                        </div>
                    </div>
                </section>

                {/* --- Before/After Comparison --- */}
                <section className="py-24 flex-shrink-0 bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">From Messy to Elegant</h2>
                    <CodeComparisonDemo />
                </section>

                {/* --- Supported Tech Section --- */}
                <section className="py-24 flex-shrink-0 bg-gray-100 dark:bg-gray-900 px-4">
                    <div className="w-full text-center">
                        <h2 className="text-3xl font-bold mb-10">Works With Your Favorite Tech Stack</h2>
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
                            {techLogos.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
                                    className="flex flex-col items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-400 transition-all"
                                >
                                    <tech.icon />
                                    <span className="text-sm">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Final CTA --- */}
                <section className="py-12 flex-shrink-0 px-4">
                    <NewsletterCTA />
                </section>

            </div>
        </div>
    );
};
