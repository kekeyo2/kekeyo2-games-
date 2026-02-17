import React, { useState, useMemo } from 'react';
import StarBackground from './components/StarBackground.tsx';
import Sidebar from './components/Sidebar.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import { TabType } from './types.ts';
import { Bell, Zap, ExternalLink, Globe, Mail, Search, X, TriangleAlert } from 'lucide-react';

const EXTERNAL_GAMES = [
  { 
    id: 'portal-2', 
    name: 'Math Nexus', 
    url: 'https://education.learn-math.space/',
    description: 'Logic-based tactical simulations and educational puzzles.'
  },
  { 
    id: 'portal-3', 
    name: 'Aether Zone', 
    url: 'https://0.collegeessayexamples.net/#zones',
    description: 'High-speed tactical operations and diverse gaming sectors.'
  },
  {
    id: 'portal-4',
    name: 'Temporal Nexus',
    url: 'http://one.thousand.eight.hundred.fifty.five.days.dimitriecantemir.ro/',
    description: 'Long-term strategic simulations across the chronological void.'
  },
  {
    id: 'portal-5',
    name: 'Macro Terminal',
    url: 'https://script.google.com/macros/s/AKfycbx85JQJwCkA9bUxaJzjXr0emUBQ98a9IE9Dg5vxPF95pvFyb5-2FRAsh2qZ5JZThFed/exec',
    description: 'Automated command sequences and high-level logic processing modules.'
  },
  {
    id: 'portal-6',
    name: 'Math Horizon',
    url: 'https://gn-math.s3.amazonaws.com/index.html',
    description: 'Advanced mathematical challenge simulations hosted on the S3 cloud-grid.'
  },
  {
    id: 'portal-7',
    name: 'Nettle Web',
    url: 'https://nettleweb.freetls.fastly.net/',
    description: 'High-performance interactive modules served via the fastly edge-relay.'
  },
  {
    id: 'portal-8',
    name: 'Lready Portal (code is funni)',
    url: 'https://login.lready.top/signin.html',
    description: 'Secure gateway to the Lready network. Note: Code is indeed funni.'
  },
  {
    id: 'portal-9',
    name: 'Legacy Systems',
    url: 'https://windows.wincheapguesthouse.com/#google_vignette',
    description: 'A retro-themed interface exploring legacy cloud-storage and guest management protocols.'
  },
  {
    id: 'portal-10',
    name: 'Vector Hub',
    url: 'https://graph.desmos.live.cdn.cloudflare.net/&',
    description: 'Precision coordinate mapping and mathematical vector visualization system.'
  }
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedGameUrl, setSelectedGameUrl] = useState<string>(EXTERNAL_GAMES[0].url);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    return EXTERNAL_GAMES.filter(game => 
      game.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      game.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-12 animate-in fade-in duration-700 pb-20">
            <section className="relative h-[450px] rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200" 
                alt="Cosmic Horizon" 
                className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent p-12 flex flex-col justify-center">
                <span className="text-blue-400 font-bold tracking-[0.3em] uppercase mb-4 text-sm">Now Playing</span>
                <h1 className="text-5xl md:text-7xl font-orbitron text-white font-bold max-w-2xl leading-tight mb-6">
                  DISCOVER THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">GALAXY</span>
                </h1>
                <p className="text-white/60 max-w-lg mb-8 text-lg">
                  Welcome to Kekeyo Games. Access the premier library of interstellar adventures and cosmic challenges.
                </p>
                <div className="flex gap-4">
                  <button onClick={() => setActiveTab('games')} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all interactive shadow-lg shadow-blue-500/20 flex items-center gap-2">
                    Open Library <Zap size={18} />
                  </button>
                  <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold transition-all interactive backdrop-blur-md">
                    Trending Now
                  </button>
                </div>
              </div>
            </section>

            <div className="max-w-3xl">
              <section className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-orbitron text-white mb-2 uppercase tracking-wider">Request Access</h3>
                    <p className="text-white/60 mb-4">
                      Submit new sector coordinates or game requests to the command center:
                    </p>
                    <a 
                      href="mailto:josenava2@greenbaystudent.com" 
                      className="text-lg font-orbitron text-blue-400 hover:text-blue-300 transition-colors break-all interactive"
                    >
                      josenava2@greenbaystudent.com
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      case 'games':
        return (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 h-[calc(100vh-14rem)] flex flex-col">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0 px-2">
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-orbitron text-white">Games Portal</h2>
                  <div className="relative flex-1 max-w-md group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-blue-400 transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search sectors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-12 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/20"
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                  {filteredGames.length > 0 ? (
                    filteredGames.map((game) => (
                      <button
                        key={game.id}
                        onClick={() => setSelectedGameUrl(game.url)}
                        className={`px-4 py-2 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all interactive flex items-center gap-2 ${
                          selectedGameUrl === game.url
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                            : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        <Globe size={14} />
                        {game.name}
                      </button>
                    ))
                  ) : (
                    <div className="flex items-center gap-3 text-white/30 py-2">
                      <TriangleAlert size={16} />
                      <span className="text-xs font-orbitron uppercase tracking-widest">No matching sectors found</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 self-end md:self-center">
                <a 
                  href={selectedGameUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white/60 hover:text-white transition-all interactive group flex items-center gap-2"
                >
                  <span className="text-xs font-bold hidden sm:block">External Relay</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            
            <div className="flex-1 w-full bg-black/40 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-md relative shadow-2xl">
              <iframe 
                key={selectedGameUrl}
                src={selectedGameUrl} 
                className="w-full h-full border-none"
                title="Gaming Site"
                allow="autoplay; encrypted-media; fullscreen"
              />
              <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[2.5rem]" />
            </div>
          </div>
        );
      case 'ai':
        return <AIAssistant />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex">
      <StarBackground />
      <CustomCursor />
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-20 md:ml-24 p-6 md:p-12 lg:px-16 lg:py-10 h-screen overflow-y-auto overflow-x-hidden">
        <header className="flex justify-between items-center mb-10">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-orbitron font-bold tracking-tight uppercase">KEKEYO GAMES</h2>
              <div className="h-px w-12 bg-blue-500/50" />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-white/60 hover:text-white transition-colors interactive">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center text-blue-400">
               <Zap size={20} />
            </div>
          </div>
        </header>

        <div className="max-w-[1400px] mx-auto h-full">
          {renderContent()}
        </div>
      </main>

      <div className="fixed bottom-0 right-0 p-8 pointer-events-none opacity-10 hidden lg:block">
         <div className="text-[80px] font-orbitron font-black text-white/5 select-none leading-none">
           BLACKSTAR
         </div>
      </div>
    </div>
  );
};

export default App;