
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a sophisticated AI agent for Shahin Alam. 
          Your tone: Professional, minimal, tech-forward.
          Key colors: Green (#bef264), White, and Deep Green-Black background.
          Key points: Shahin is expert in React, Design Systems, and ERP UX. 
          Contact info: Email is shahinalam982.as@gmail.com, Phone: +8801518479218.
          Max response length: 25 words. Keep it ultra-concise.`,
        },
      });

      const aiText = response.text || "Recalibrating system. Try again.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Service temporarily offline. Reach out at shahinalam982.as@gmail.com" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[110]">
      {isOpen ? (
        <div className="w-80 md:w-[400px] h-[500px] bg-dark/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-500">
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-surface">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Sparkles size={20} className="animate-pulse text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-tight">System AI</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] uppercase font-black tracking-widest text-accent/70">Terminal Live</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white p-2 transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.length === 0 && (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/5">
                   <Bot size={32} className="text-accent/50" />
                </div>
                <p className="text-slate-500 text-sm font-light">
                  "Query terminal for stack, experience, or project data."
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-accent text-dark' : 'bg-white/10 text-white'
                }`}>
                  {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className={`max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-accent text-dark rounded-tr-none font-bold shadow-lg shadow-accent/5' 
                    : 'bg-white/5 text-slate-300 rounded-tl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-[0.2em] animate-pulse">
                <Sparkles size={12} /> Processing...
              </div>
            )}
          </div>
          
          <div className="p-6 bg-surface border-t border-white/5">
            <div className="flex gap-3 glass-card p-2 rounded-2xl border border-white/10 shadow-inner">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Initialize query..."
                className="flex-1 bg-transparent border-none rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-0 text-white placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-accent text-dark p-2.5 rounded-xl hover:bg-white transition-all disabled:opacity-50 shadow-lg shadow-accent/10"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-accent text-dark rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(190,242,100,0.2)] hover:scale-110 active:scale-95 transition-all"
        >
          <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20 group-hover:opacity-40" />
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
};

export default Assistant;
