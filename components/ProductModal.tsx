import React, { Fragment } from 'react';
import { Product, Category } from '../types';
import { PRODUCTS } from '../constants';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  category: Category | null;
  usedProductIds: string[];
}

const categoryNames: Record<Category, string> = {
  [Category.ATTACKER]: 'Fanta (Attaccanti)',
  [Category.MIDFIELDER]: 'Snack Salati (Centrocampisti)',
  [Category.DEFENDER]: 'Birre (Difensori)',
  [Category.GOALKEEPER]: 'Snack Dolci (Portiere)',
};

export const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, onSelectProduct, category, usedProductIds }) => {
  if (!isOpen || !category) return null;

  const availableProducts = PRODUCTS.filter(p => p.category === category);

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col transform transition-transform duration-300 scale-95 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            Seleziona: {categoryNames[category]}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
        </div>
        <div className="overflow-y-auto p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {availableProducts.map(product => {
              const isUsed = usedProductIds.includes(product.id);
              return (
                <div 
                  key={product.id} 
                  onClick={isUsed ? undefined : () => onSelectProduct(product)}
                  className={`relative group border border-gray-200 rounded-lg p-3 text-center transition-all duration-200 flex flex-col items-center ${
                    isUsed
                      ? 'opacity-40 cursor-not-allowed'
                      : 'cursor-pointer hover:shadow-lg hover:border-red-500'
                  }`}
                >
                  {isUsed && (
                    <div className="absolute top-1 right-1 bg-gray-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                      IN CAMPO
                    </div>
                  )}
                  <img src={product.imageUrl} alt={product.name} className={`w-20 h-20 rounded-full object-cover mb-2 transition-transform duration-200 ${!isUsed && 'group-hover:scale-105'}`} />
                  <h3 className="font-semibold text-sm text-gray-700 flex-grow">{product.name}</h3>
                  <p className="text-red-600 font-bold mt-1">€{product.price.toFixed(2)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
