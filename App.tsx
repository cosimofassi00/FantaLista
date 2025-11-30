import React, { useState, useMemo } from 'react';
import { SoccerField } from './components/SoccerField';
import { ProductModal } from './components/ProductModal';
import { CompletionBanner } from './components/CompletionBanner';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Product, Position, FormationKey } from './types';
import { PRODUCTS, FORMATIONS } from './constants';

function App() {
  const [formation, setFormation] = useLocalStorage<Record<number, string>>('fantaTeamFormation', {});
  const [modalState, setModalState] = useState<{ isOpen: boolean; position: Position | null }>({
    isOpen: false,
    position: null,
  });
  const [showCompletionBanner, setShowCompletionBanner] = useState(false);
  const [selectedFormationKey, setSelectedFormationKey] = useLocalStorage<FormationKey>('fantaTeamKey', '3-5-2');

  const currentPositions = useMemo(() => FORMATIONS[selectedFormationKey].positions, [selectedFormationKey]);
  
  const filledSlots = useMemo(() => Object.keys(formation).length, [formation]);
  const isComplete = filledSlots === currentPositions.length;
  
  const usedProductIds = useMemo(() => Object.values(formation), [formation]);

  const totalPrice = useMemo(() => {
    return Object.values(formation).reduce((total, productId) => {
      const product = PRODUCTS.find(p => p.id === productId);
      return total + (product ? product.price : 0);
    }, 0);
  }, [formation]);

  const handlePositionClick = (position: Position) => {
    setModalState({ isOpen: true, position });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, position: null });
  };

  const handleSelectProduct = (product: Product) => {
    if (modalState.position) {
      const newFormation = {
        ...formation,
        [modalState.position!.id]: product.id,
      };
      setFormation(newFormation);
      if (Object.keys(newFormation).length === currentPositions.length) {
        setShowCompletionBanner(true);
      }
    }
    handleCloseModal();
  };

  const handleRemoveProduct = (positionId: number) => {
    setFormation(prev => {
      const newFormation = { ...prev };
      delete newFormation[positionId];
      return newFormation;
    });
  };

  const handleReset = () => {
    setFormation({});
    setShowCompletionBanner(false);
  };

  const handleFormationChange = (newFormation: FormationKey) => {
    if (newFormation === selectedFormationKey) return;
    
    if (filledSlots > 0) {
      const confirmed = window.confirm("Cambiando modulo perderai la formazione attuale. Vuoi continuare?");
      if (!confirmed) {
        return;
      }
    }
    
    setFormation({}); // Resetta sempre la formazione quando si cambia modulo
    setShowCompletionBanner(false);
    setSelectedFormationKey(newFormation);
  };

  const handleCloseBanner = () => {
    setShowCompletionBanner(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 flex flex-col items-center p-4 selection:bg-red-500 selection:text-white">
      <style>{`
        .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-slide-up { animation: slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        @keyframes slideUp { from { transform: translateY(20px) scale(0.95); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
        .animate-scale-in { animation: scaleIn 0.3s ease-out; }
        @keyframes scaleIn { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-pulse-slow { animation: pulseSlow 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1); }
        @keyframes pulseSlow { 50% { opacity: .7; } }
      `}</style>
      
      <header className="w-full max-w-4xl text-center mb-4">
        <img 
          src="https://i.ibb.co/gbqmXmHc/fanta-lista-copy.png" 
          alt="Esselunga Fanta Team Logo" 
          className="max-w-xs md:max-w-md mx-auto h-auto"
        />
        <p className="text-2xl text-gray-600 mt-1">
        Crea la tua formazione vincente e vinci uno sconto sulla tua spesa in 
          <img 
            src="https://i.ibb.co/nNByS6S7/spesaonline-social-2.png" 
            alt="Esselunga" 
            className="inline-block h-6 md:h-8 mx-1 align-middle"
          />
        </p>
      </header>
      
      <main className="w-full flex-grow flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 p-2 bg-white/50 rounded-lg">
          <label className="font-bold text-gray-700">Modulo:</label>
          <div className="flex gap-2 flex-wrap justify-center">
            {(Object.keys(FORMATIONS) as FormationKey[]).map(key => (
              <button 
                key={key}
                onClick={() => handleFormationChange(key)}
                className={`px-4 py-2 text-sm font-bold rounded-full transition-all duration-200 ${
                  selectedFormationKey === key 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-200'
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
        
        <SoccerField 
          formation={formation} 
          onPositionClick={handlePositionClick}
          onRemoveProduct={handleRemoveProduct}
          positions={currentPositions}
        />
        <div className="w-full max-w-4xl mt-4 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="font-bold text-lg">Progresso Formazione:</h3>
            <p className="text-red-600 font-bold text-xl">{filledSlots} / {currentPositions.length} prodotti inseriti</p>
          </div>
          <div className="flex items-center gap-4">
            {isComplete && !showCompletionBanner && (
              <button
                onClick={() => setShowCompletionBanner(true)}
                className="bg-red-600 text-white font-bold px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 shadow-md transform hover:scale-105"
              >
                Vedi Riepilogo
              </button>
            )}
            <button
              onClick={handleReset}
              className="bg-gray-200 text-gray-700 font-bold px-6 py-2 rounded-full hover:bg-gray-300 transition-colors duration-200"
            >
              Reset Squadra
            </button>
          </div>
        </div>
      </main>

      <ProductModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        onSelectProduct={handleSelectProduct}
        category={modalState.position?.category || null}
        usedProductIds={usedProductIds}
      />
      
      {showCompletionBanner && <CompletionBanner totalPrice={totalPrice} onClose={handleCloseBanner} />}
    </div>
  );
}

export default App;
