import React from 'react';
import { Star, Play } from 'lucide-react';
import { Game } from '../types.ts';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 interactive">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-500/50 scale-75 group-hover:scale-100 transition-transform">
            <Play size={28} fill="currentColor" />
          </div>
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-1 block">
              {game.genre}
            </span>
            <h3 className="text-lg font-orbitron text-white leading-tight">
              {game.title}
            </h3>
          </div>
          <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg border border-white/10">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-white/80">{game.rating}</span>
          </div>
        </div>
        <p className="text-sm text-white/50 line-clamp-2">
          {game.description}
        </p>
      </div>
    </div>
  );
};

export default GameCard;