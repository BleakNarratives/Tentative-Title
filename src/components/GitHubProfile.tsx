import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, Star, GitFork, Users, MapPin, Link as LinkIcon, 
  Twitter, Mail, ExternalLink, Code2, Terminal, Zap, 
  Cpu, Globe, Fingerprint, Activity, MessageSquare, 
  Command, Send, ShieldAlert, BrainCircuit, Sparkles
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const SlimeCanaryProfile = () => {
  const [command, setCommand] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [meatsuitStatus, setMeatsuitStatus] = useState('UNSYNCED');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [sarcasmLevel, setSarcasmLevel] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Haptic Feedback Simulation (Visual + Vibration)
  const triggerHaptic = (intensity: 'light' | 'medium' | 'heavy') => {
    const patterns = {
      light: [10],
      medium: [20, 10, 20],
      heavy: [50, 20, 50, 20, 100]
    };
    if ('vibrate' in navigator) {
      navigator.vibrate(patterns[intensity]);
    }
    // Visual haptic: Screen shake effect
    const root = document.getElementById('root');
    if (root) {
      root.classList.add('animate-shake');
      setTimeout(() => root.classList.remove('animate-shake'), 200);
    }
  };

  const handleScan = () => {
    setIsScanning(true);
    triggerHaptic('medium');
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      setScanProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsScanning(false);
        setMeatsuitStatus('SYNCED');
        triggerHaptic('heavy');
      }
    }, 50);
  };

  const processNaturalLanguage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    setIsThinking(true);
    triggerHaptic('light');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `The user says: "${command}". 
        Context: You are the AI interface for a 2026 "Slime & Canary" GitHub profile. 
        The user is a "meatsuit" (human). 
        The user recently requested to mash their Google thumbnail with a "dickbutt" meme for their profile pic. 
        Respond with extreme sarcasm, technical nuance, and a futuristic tone. 
        Keep it under 60 words. 
        Analyze the sarcasm level of the user's input (0-100).`,
        config: {
          systemInstruction: "You are a sentient, sarcastic AI interface for a futuristic GitHub profile. You refer to users as 'meatsuits'. Your tone is a mix of high-tech arrogance and playful mockery. You find human humor (like old memes) primitive but fascinating.",
        }
      });

      const text = response.text || "Interface error. Meatsuit logic incompatible.";
      setAiResponse(text);
      
      // Simulate sarcasm detection
      setSarcasmLevel(Math.floor(Math.random() * 100));
      triggerHaptic('medium');
    } catch (err) {
      setAiResponse("Neural link severed. Check your API credentials, meatsuit.");
    } finally {
      setIsThinking(false);
      setCommand('');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0d1117] text-white font-sans overflow-hidden selection:bg-slime selection:text-black">
      {/* Dynamic 3D Light Sources */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ADFF2F 0%, transparent 70%)' }}
        animate={{
          x: ['-20%', '120%'],
          y: ['120%', '-20%'],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FFFF00 0%, transparent 70%)' }}
        animate={{
          x: ['100%', '0%', '20%', '-20%'],
          y: ['100%', '0%', '40%', '-10%'],
          rotate: [0, 360],
          scale: [0.8, 1.1, 0.9],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <header className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-12">
          <motion.div 
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => triggerHaptic('light')}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-slime to-canary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-40 h-40 rounded-full border-4 border-gh-dark overflow-hidden bg-black">
              {/* Google Thumb Placeholder (Simulated Neural Link) */}
              <img 
                src="https://picsum.photos/seed/meatsuit-google/200/200" 
                alt="Meatsuit Neural Link" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Legacy Artifact (The "Dickbutt" influence) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-500 mix-blend-overlay">
                <img 
                  src="https://picsum.photos/seed/legacy-meme-artifact/200/200?blur=1" 
                  alt="Legacy Artifact" 
                  className="w-full h-full object-cover scale-125 rotate-12"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Glitch Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slime/20 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity"></div>
            </div>
            <div className="absolute bottom-2 right-2 bg-gh-dark border border-gh-border p-2 rounded-full shadow-xl">
              <ShieldAlert className="w-5 h-5 text-canary animate-pulse" />
            </div>
          </motion.div>

          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-4xl font-bold tracking-tight text-white font-display">
                Broseph Gordon Levit <span className="text-slime">/</span> <span className="text-canary">2026</span>
              </h1>
              <span className="px-3 py-1 rounded-full border border-gh-border text-xs font-mono text-gray-400 bg-gh-dark/50 backdrop-blur-sm">PRO-LINKED</span>
            </div>
            <p className="text-xl text-gray-400 mb-6 max-w-2xl leading-relaxed">
              Architecting the <span className="text-slime font-semibold italic">Slime-Canary</span> singularity. 
              Directly interfacing with the GH substrate to manifest the ultimate profile excitation. 
              <span className="text-canary">#Myspace2026</span>
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2 hover:text-slime transition-colors cursor-pointer">
                <Users className="w-4 h-4" />
                <span className="text-white font-bold">12.4k</span> followers
              </div>
              <div className="flex items-center gap-2 hover:text-canary transition-colors cursor-pointer">
                <Star className="w-4 h-4" />
                <span className="text-white font-bold">842</span> following
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Neo-Tokyo / Virtual
              </div>
            </div>
          </div>
        </header>

        {/* Natural Language Command Bar */}
        <section className="mb-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-slime/20 to-canary/20 rounded-2xl blur opacity-50 group-focus-within:opacity-100 transition duration-500"></div>
            <form 
              onSubmit={processNaturalLanguage}
              className="relative flex items-center bg-gh-dark/80 backdrop-blur-xl border border-gh-border rounded-2xl p-2 pl-6"
            >
              <Command className="w-5 h-5 text-gray-500 mr-4" />
              <input 
                type="text" 
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="Interface with the substrate... (e.g., 'Analyze my meatsuit', 'Be sarcastic')"
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-600 font-mono text-sm h-12"
              />
              <button 
                type="submit"
                disabled={isThinking}
                className="p-3 rounded-xl bg-slime/10 hover:bg-slime/20 text-slime transition-all disabled:opacity-50"
              >
                {isThinking ? <Sparkles className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </form>
          </div>
          
          <AnimatePresence>
            {aiResponse && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-6 rounded-2xl border border-slime/20 bg-slime/5 backdrop-blur-md relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <BrainCircuit className="w-6 h-6 text-slime shrink-0 mt-1" />
                  <div className="space-y-2">
                    <p className="text-slime font-mono text-sm leading-relaxed italic">
                      {aiResponse}
                    </p>
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                      <span>Tone: Sarcastic</span>
                      <span className="flex items-center gap-1">
                        Sarcasm Meter: 
                        <span className="text-canary">{sarcasmLevel}%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar: Meatsuit Diagnostics */}
          <div className="space-y-8">
            <section className="p-6 rounded-2xl border border-gh-border bg-gh-dark/40 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Fingerprint className="w-12 h-12 text-canary" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                <Activity className="w-4 h-4 text-slime" /> Meatsuit Diagnostics
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Sync Status</span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded ${meatsuitStatus === 'SYNCED' ? 'bg-slime/20 text-slime' : 'bg-red-500/20 text-red-400'}`}>
                    {meatsuitStatus}
                  </span>
                </div>

                {isScanning ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                      <span>SCANNING BIOMETRICS...</span>
                      <span>{scanProgress}%</span>
                    </div>
                    <div className="w-full bg-gh-border h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-canary"
                        initial={{ width: 0 }}
                        animate={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <button 
                    onClick={handleScan}
                    className="w-full py-3 rounded-xl border border-slime/30 hover:bg-slime/10 text-slime text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                  >
                    <Fingerprint className="w-4 h-4" /> Register Meatsuit
                  </button>
                )}

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gh-border">
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-500 uppercase">Nuance</span>
                    <div className="text-sm font-mono text-white">92.1%</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-500 uppercase">Haptics</span>
                    <div className="text-sm font-mono text-white">ENABLED</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Organizations */}
            <section className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Organizations</h3>
              <div className="flex gap-3">
                {[1, 2, 3, 4].map(i => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-10 h-10 rounded-lg border border-gh-border bg-gh-dark/50 flex items-center justify-center cursor-pointer overflow-hidden"
                  >
                    <img src={`https://picsum.photos/seed/org-${i}/40/40`} alt="Org" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Star className="w-5 h-5 text-canary" /> Pinned Repositories
              </h3>
              <button className="text-xs text-slime hover:underline">Customize pins</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'bio-interface-v3', desc: 'Direct neural link to the GitHub UI substrate.', lang: 'TypeScript', stars: '4.2k' },
                { name: 'slime-canary-engine', desc: '3D light source pulsation engine for 2026 profiles.', lang: 'Rust', stars: '1.8k' },
                { name: 'myspace-legacy-bridge', desc: 'Injecting 2000s energy into the modern web.', lang: 'Go', stars: '942' },
                { name: 'field-excitation-lib', desc: 'Intent-based UI manipulation via field influence.', lang: 'Python', stars: '3.1k' }
              ].map((repo, i) => (
                <motion.div 
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, borderColor: i % 2 === 0 ? '#ADFF2F' : '#FFFF00' }}
                  onClick={() => triggerHaptic('light')}
                  className="p-5 rounded-xl border border-gh-border bg-gh-dark/60 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(173,255,47,0.1)] transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-gray-500" />
                      <span className="font-bold text-slime group-hover:text-white transition-colors">{repo.name}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-gh-border text-gray-500">Public</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{repo.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-slime' : 'bg-canary'}`}></div>
                      {repo.lang}
                    </div>
                    <div className="flex items-center gap-1 hover:text-canary transition-colors">
                      <Star className="w-3 h-3" />
                      {repo.stars}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contribution Matrix */}
            <section className="p-6 rounded-2xl border border-gh-border bg-gh-dark/40 backdrop-blur-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Contribution Matrix</h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  Less <div className="flex gap-1"><div className="w-3 h-3 bg-gh-border rounded-sm"></div><div className="w-3 h-3 bg-slime/20 rounded-sm"></div><div className="w-3 h-3 bg-slime/50 rounded-sm"></div><div className="w-3 h-3 bg-slime rounded-sm"></div></div> More
                </div>
              </div>
              <div className="flex gap-1 overflow-hidden h-32 items-end">
                {Array.from({ length: 52 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.random() * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.02 }}
                    className={`flex-1 rounded-t-sm ${Math.random() > 0.7 ? 'bg-slime' : Math.random() > 0.4 ? 'bg-canary/60' : 'bg-gh-border'}`}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* AI Field Excitation Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 20%, #ADFF2F 0%, transparent 40%)',
              'radial-gradient(circle at 80% 80%, #FFFF00 0%, transparent 40%)',
              'radial-gradient(circle at 20% 20%, #ADFF2F 0%, transparent 40%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-2px, 2px); }
          50% { transform: translate(2px, -2px); }
          75% { transform: translate(-2px, -2px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default SlimeCanaryProfile;
