import React from 'react';
import { Position, Product } from '../types';
import { ROLE_COLORS } from '../constants';

interface PlayerPositionProps {
  position: Position;
  product?: Product;
  onClick: () => void;
  onRemove: () => void;
}

export const PlayerPosition: React.FC<PlayerPositionProps> = ({ position, product, onClick, onRemove }) => {
  const roleColor = ROLE_COLORS[position.role] || { bg: 'bg-gray-500', text: 'text-white', ring: 'ring-gray-300' };

  return (
    <div 
      style={{ top: position.top, left: position.left }}
      className="absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 md:w-16 md:h-16 cursor-pointer group"
      onClick={product ? undefined : onClick}
    >
      {product ? (
        <>
          <div className="w-full h-full rounded-full flex items-center justify-center animate-scale-in">
            <img 
              src={product.imageUrl} 
              alt={product.name}
              className="w-full h-full rounded-full object-cover border-2 md:border-4 border-white shadow-lg"
            />
          </div>
          <button 
            onClick={(e) => { 
              e.stopPropagation();
              onRemove(); 
            }}
            className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-700"
            aria-label={`Rimuovi ${product.name}`}
          >
            &times;
          </button>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-32 bg-black/70 text-white text-xs text-center rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {product.name}
          </div>
        </>
      ) : (
        <>
          <div className={`w-full h-full rounded-full flex items-center justify-center font-black text-xl md:text-2xl transition-all duration-300 ring-2 md:ring-4 ring-offset-2 ring-offset-green-600 ${roleColor.bg} ${roleColor.text} ${roleColor.ring} group-hover:scale-110`}>
            {position.role}
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-32 bg-black/70 text-white text-xs text-center rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Aggiungi prodotto
          </div>
        </>
      )}
    </div>
  );
};