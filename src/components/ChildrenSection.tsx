import React, { useState } from 'react';
import { BookOpen, Gamepad2, Video } from 'lucide-react';
import { hinoGuarapuavaData } from '../data/hinoData';

const ChildrenSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'game' | 'animation' | 'video'>('game');
  const [gameProgress, setGameProgress] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  
  const renderGameTab = () => {
    const currentVerse = hinoGuarapuavaData.verses[gameProgress];
    const missingWordIndex = Math.floor(Math.random() * currentVerse.text.split(' ').length);
    const words = currentVerse.text.split(' ');
    const missingWord = words[missingWordIndex];
    words[missingWordIndex] = '_____';
    
    const handleSubmitAnswer = (e: React.FormEvent) => {
      e.preventDefault();
      if (userAnswers[gameProgress]?.toLowerCase() === missingWord.toLowerCase()) {
        if (gameProgress < hinoGuarapuavaData.verses.length - 1) {
          setGameProgress(gameProgress + 1);
        } else {
          // Game completed
          alert('Parabéns! Você completou o jogo!');
          setGameProgress(0);
        }
      } else {
        alert('Ops! Tente novamente.');
      }
    };
    
    return (
      <div className="bg-yellow-50 dark:bg-gray-700 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-300 mb-4">
          Complete a Letra
        </h3>
        
        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-200 text-lg mb-2">
            Verso {gameProgress + 1} de {hinoGuarapuavaData.verses.length}
          </p>
          <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-100 p-4 bg-white dark:bg-gray-800 rounded-lg">
            {words.join(' ')}
          </p>
        </div>
        
        <form onSubmit={handleSubmitAnswer} className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={userAnswers[gameProgress] || ''}
            onChange={(e) => setUserAnswers({...userAnswers, [gameProgress]: e.target.value})}
            placeholder="Digite a palavra que falta"
            className="flex-1 px-4 py-2 border border-yellow-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-800 dark:text-white"
            required
          />
          <button 
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-lg transition-colors"
          >
            Verificar
          </button>
        </form>
        
        <div className="mt-8">
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
            <div 
              className="bg-yellow-500 h-2.5 rounded-full" 
              style={{ width: `${(gameProgress / (hinoGuarapuavaData.verses.length - 1)) * 100}%` }}
            ></div>
          </div>
          <p className="text-right mt-2 text-sm text-gray-600 dark:text-gray-300">
            Progresso: {Math.round((gameProgress / (hinoGuarapuavaData.verses.length - 1)) * 100)}%
          </p>
        </div>
      </div>
    );
  };
  
  const renderAnimationTab = () => {
    return (
      <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4">
          Imagens Interativas
        </h3>
        
        <div className="relative w-full h-64 md:h-96 bg-white dark:bg-gray-800 rounded-xl overflow-hidden mb-6">
          <img 
            src="https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg" 
            alt="Mapa de Guarapuava" 
            className="w-full h-full object-cover"
          />
          
          {/* Interactive hotspots would be added here */}
          <div className="absolute top-1/4 left-1/3 w-12 h-12 rounded-full bg-blue-500/70 hover:bg-blue-600 cursor-pointer flex items-center justify-center text-white transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110">
            <span className="font-bold">1</span>
          </div>
          
          <div className="absolute top-2/3 left-2/3 w-12 h-12 rounded-full bg-blue-500/70 hover:bg-blue-600 cursor-pointer flex items-center justify-center text-white transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110">
            <span className="font-bold">2</span>
          </div>
        </div>
        
        <p className="text-gray-700 dark:text-gray-200">
          Clique nos pontos azuis para descobrir curiosidades sobre Guarapuava e o significado de símbolos presentes no hino.
        </p>
      </div>
    );
  };
  
  const renderVideoTab = () => {
    return (
      <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-purple-600 dark:text-purple-300 mb-4">
          Vídeos Educativos
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video bg-gray-200 dark:bg-gray-600 relative">
              {/* Video thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-purple-600/90 flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-gray-800 dark:text-white mb-1">História do Hino</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Aprenda sobre a criação do hino de Guarapuava</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video bg-gray-200 dark:bg-gray-600 relative">
              {/* Video thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-purple-600/90 flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-gray-800 dark:text-white mb-1">Coreografia</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Aprenda a coreografia do hino para apresentações</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="children" className="py-20 bg-emerald-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">
            Para Crianças
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Atividades educativas e lúdicas para crianças aprenderem sobre o hino de Guarapuava de forma divertida
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            <button 
              onClick={() => setActiveTab('game')}
              className={`flex items-center px-6 py-3 rounded-t-lg font-medium mr-2 mb-2 transition-colors ${
                activeTab === 'game' 
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' 
                  : 'bg-white/80 text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <Gamepad2 size={20} className="mr-2" />
              <span>Jogo de Palavras</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('animation')}
              className={`flex items-center px-6 py-3 rounded-t-lg font-medium mr-2 mb-2 transition-colors ${
                activeTab === 'animation' 
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                  : 'bg-white/80 text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <BookOpen size={20} className="mr-2" />
              <span>Imagens Interativas</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('video')}
              className={`flex items-center px-6 py-3 rounded-t-lg font-medium mb-2 transition-colors ${
                activeTab === 'video' 
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' 
                  : 'bg-white/80 text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <Video size={20} className="mr-2" />
              <span>Vídeos</span>
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="transition-all">
            {activeTab === 'game' && renderGameTab()}
            {activeTab === 'animation' && renderAnimationTab()}
            {activeTab === 'video' && renderVideoTab()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenSection;