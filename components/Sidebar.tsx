
import React from 'react';
import { Home, Gamepad2, Sparkles, Settings, LogOut } from 'lucide-react';
import { TabType } from '../types.ts';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Portal' },
    { id: 'games', icon: Gamepad2, label: 'Library' },
    { id: 'ai', icon: Sparkles, label: 'Kekeyo AI' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-20 md:w-24 bg-black/40 backdrop-blur-xl border-r border-white/10 flex flex-col items-center py-8 z-50">
      <div className="mb-12">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <span className="text-white font-orbitron font-bold text-xl">K</span>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as TabType)}
              className={`relative group p-3 rounded-2xl transition-all duration-300 interactive ${
                isActive 
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={24} />
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full" />
              )}
              <span className="absolute left-full ml-4 px-2 py-1 bg-blue-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <button className="text-white/40 hover:text-white transition-colors interactive">
          <Settings size={22} />
        </button>
        <button className="text-white/40 hover:text-red-400 transition-colors interactive">
          <LogOut size={22} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
