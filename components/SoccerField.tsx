import React from 'react';
import { PlayerPosition } from './PlayerPosition';
import { PRODUCTS } from '../constants';
import { Position, Product } from '../types';

interface SoccerFieldProps {
  formation: Record<number, string>;
  onPositionClick: (position: Position) => void;
  onRemoveProduct: (positionId: number) => void;
  positions: Position[];
}

export const SoccerField: React.FC<SoccerFieldProps> = ({ formation, onPositionClick, onRemoveProduct, positions }) => {
  const getProductById = (id: string | undefined): Product | undefined => {
    if (!id) return undefined;
    return PRODUCTS.find(p => p.id === id);
  };
  
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[5/3] bg-green-600 border-4 border-white overflow-hidden shadow-2xl rounded-lg">
      {/* Center Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-[33%] rounded-full border-2 border-white/50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/50"></div>
      {/* Center Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-white/50"></div>
      {/* Goal Area Left */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[15%] h-[60%] border-2 border-r-white/50 border-transparent"></div>
      {/* Goal Area Right */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[15%] h-[60%] border-2 border-l-white/50 border-transparent"></div>
      
      {positions.map(pos => (
        <PlayerPosition
          key={pos.id}
          position={pos}
          product={getProductById(formation[pos.id])}
          onClick={() => onPositionClick(pos)}
          onRemove={() => onRemoveProduct(pos.id)}
        />
      ))}
    </div>
  );
};
