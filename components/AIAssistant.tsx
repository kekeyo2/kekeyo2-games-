
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types.ts';
import { generateGameAdvice } from '../services/gemini.ts';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings, Commander. I am Kekeyo. Ready to optimize your gaming experience or delve into the lore of the cosmos?' }
  ]);
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

    const userMsg: ChatMessage = { role: 'user', text: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const responseText = await generateGameAdvice(newMessages);
    setMessages([...newMessages, { role: 'model', text: responseText || '...' }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] max-w-4xl mx-auto bg-black/40 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md">
      <div className="p-6 border-b border-white/10 bg-white/5 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
          <Bot size={24} />
        </div>
        <div>
          <h2 className="text-xl font-orbitron text-white">Kekeyo System</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-white/40 uppercase tracking-widest">Online & Ready</span>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                msg.role === 'user' ? 'bg-purple-600/30 text-purple-400' : 'bg-blue-600/30 text-blue-400'
              }`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-4 rounded-2xl ${
                msg.role === 'user' 
                ? 'bg-purple-600/20 text-white rounded-tr-none border border-purple-500/20' 
                : 'bg-blue-600/10 text-white/90 rounded-tl-none border border-blue-500/20'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10">
               <Loader2 className="animate-spin text-blue-400" size={16} />
               <span className="text-white/40 text-sm">Processing signals...</span>
             </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white/5 border-t border-white/10">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Query the cosmic intelligence..."
            className="w-full bg-black/60 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/20"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all interactive disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
