import React, { useState, useEffect } from 'react';
import { hinoGuarapuavaData } from '../data/hinoData';

const ChildrenSection: React.FC = () => {
  const [gameProgress, setGameProgress] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [missingWordIndex, setMissingWordIndex] = useState(0);
  
  const currentVerse = hinoGuarapuavaData.verses[gameProgress];
  const words = currentVerse.text.split(' ');
  
  useEffect(() => {
    // Set a fixed missing word index when the verse changes
    setMissingWordIndex(Math.floor(Math.random() * words.length));
  }, [gameProgress]);
  
  const missingWord = words[missingWordIndex];
  const displayWords = [...words];
  displayWords[missingWordIndex] = '_____';
  
  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = userAnswer.toLowerCase().trim() === missingWord.toLowerCase().trim();
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setTimeout(() => {
        if (gameProgress < hinoGuarapuavaData.verses.length - 1) {
          setGameProgress(gameProgress + 1);
          setUserAnswer('');
          setShowFeedback(false);
        } else {
          // Game completed
          alert('Parabéns! Você completou o jogo!');
          setGameProgress(0);
          setUserAnswer('');
          setShowFeedback(false);
        }
      }, 1500);
    }
  };

  return (
    <section id="children" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-emerald-300">
            Jogo de Palavras
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Complete as palavras que faltam em cada verso do hino
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-emerald-300 mb-4">
              Complete a Letra
            </h3>
            
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-2">
                Verso {gameProgress + 1} de {hinoGuarapuavaData.verses.length}
              </p>
              <p className="text-xl leading-relaxed text-gray-900 dark:text-gray-100 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                {displayWords.join(' ')}
              </p>
            </div>
            
            <form onSubmit={handleSubmitAnswer} className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Digite a palavra que falta"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                required
              />
              <button 
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
              >
                Verificar
              </button>
            </form>
            
            {showFeedback && (
              <div className={`mt-4 p-3 rounded-lg ${isCorrect ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'}`}>
                {isCorrect ? 'Correto! Muito bem!' : 'Ops! Tente novamente.'}
              </div>
            )}
            
            <div className="mt-8">
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div 
                  className="bg-emerald-500 h-2.5 rounded-full" 
                  style={{ width: `${(gameProgress / (hinoGuarapuavaData.verses.length - 1)) * 100}%` }}
                ></div>
              </div>
              <p className="text-right mt-2 text-sm text-gray-600 dark:text-gray-300">
                Progresso: {Math.round((gameProgress / (hinoGuarapuavaData.verses.length - 1)) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenSection;