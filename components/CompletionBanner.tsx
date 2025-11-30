import React from 'react';

interface CompletionBannerProps {
  totalPrice: number;
  onClose: () => void;
}

export const CompletionBanner: React.FC<CompletionBannerProps> = ({ totalPrice, onClose }) => {
  const discount = totalPrice * 0.15;
  const discountedPrice = totalPrice - discount;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl text-center p-6 md:p-8 max-w-lg w-full transform animate-slide-up relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 w-9 h-9 flex items-center justify-center text-2xl rounded-full transition-colors duration-200 hover:bg-gray-100"
          aria-label="Chiudi banner"
        >
          &times;
        </button>
        <span className="text-6xl mb-4 inline-block">🎉</span>
        <h2 className="text-3xl font-black text-gray-800 mb-2">Complimenti!</h2>
        <p className="text-lg text-gray-600 mb-6">La tua Esselunga Dream Team è completa!</p>
        
        <div className="bg-gray-50 rounded-lg p-4 my-6 w-full text-left space-y-2 border border-gray-200">
          <div className="flex justify-between items-center text-gray-700">
            <span className="text-sm">Totale prodotti:</span>
            <span className="font-semibold">€{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-green-600">
            <span className="text-sm">Sconto Fanta Team (15%):</span>
            <span className="font-semibold">-€{discount.toFixed(2)}</span>
          </div>
          <hr className="my-2 border-t border-gray-300 border-dashed" />
          <div className="flex justify-between items-center text-red-600">
            <span className="font-bold text-lg">TOTALE DA PAGARE:</span>
            <span className="font-black text-2xl">€{discountedPrice.toFixed(2)}</span>
          </div>
        </div>

        <a
          href="https://www.esselunga.it"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
        >
          Ordina ora su Esselunga.it
        </a>
      </div>
    </div>
  );
};