import React, { useState } from 'react';
import { HelpCircle, Check, X, RefreshCw } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const QuizSection: React.FC = () => {
  const questions: Question[] = [
    {
      id: 1,
      text: "Quem compôs a música do Hino de Guarapuava?",
      options: [
        "Luiz Eulógio Zilli",
        "Gilda Boscardim Todeschini",
        "Visconde de Guarapuava",
        "Francisco Peixoto de Lacerda Werneck"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      text: "Quem é a autora da letra do Hino de Guarapuava?",
      options: [
        "Maria Helena Zilli",
        "Gilda Boscardim Todeschini",
        "Ana Maria Todeschini",
        "Helena Kolody"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "Em que ano a família da compositora chegou à cidade de Guarapuava?",
      options: ["1960", "1962", "1965", "1970"],
      correctAnswer: 2
    },
    {
      id: 4,
      text: "Onde está exposta a partitura original do Hino de Guarapuava?",
      options: [
        "Biblioteca Municipal",
        "Museu Visconde de Guarapuava",
        "Prefeitura Municipal",
        "Casa da Cultura"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      text: "Qual elemento NÃO é mencionado na letra do hino como característico da região?",
      options: [
        "Campo verdejante",
        "Trigais dourados",
        "Vaqueiro",
        "Cachoeiras"
      ],
      correctAnswer: 3
    }
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const handleOptionSelect = (optionIndex: number) => {
    if (showResult) return;
    setSelectedOption(optionIndex);
  };
  
  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setShowResult(true);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };
  
  const renderQuizContent = () => {
    if (quizCompleted) {
      return (
        <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-emerald-300">
            Quiz Completo!
          </h3>
          
          <div className="mb-8">
            <div className="inline-block p-4 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-4">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                {score}/{questions.length}
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              {score === questions.length ? (
                "Parabéns! Você acertou todas as perguntas!"
              ) : score >= questions.length / 2 ? (
                "Bom trabalho! Você conhece bem o hino de Guarapuava."
              ) : (
                "Continue aprendendo sobre o hino de Guarapuava!"
              )}
            </p>
          </div>
          
          <button
            onClick={restartQuiz}
            className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <RefreshCw size={18} className="mr-2" />
            Reiniciar Quiz
          </button>
        </div>
      );
    }
    
    const question = questions[currentQuestion];
    
    return (
      <div className="bg-white dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-sm font-medium">
            Questão {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-gray-600 dark:text-gray-400">
            Pontuação: {score}
          </span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          {question.text}
        </h3>
        
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <div 
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedOption === index 
                  ? showResult
                    ? index === question.correctAnswer
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                      : 'border-red-500 bg-red-50 dark:bg-red-900/30'
                    : 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30'
                  : 'border-gray-300 dark:border-gray-600 hover:border-emerald-400 dark:hover:border-emerald-500'
              }`}
            >
              <div className="flex items-center">
                <span className="flex-1 text-gray-900 dark:text-gray-200">{option}</span>
                
                {showResult && index === question.correctAnswer && (
                  <Check size={20} className="text-green-500" />
                )}
                
                {showResult && selectedOption === index && index !== question.correctAnswer && (
                  <X size={20} className="text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
        
        {!showResult ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={selectedOption === null}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              selectedOption === null
                ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
            }`}
          >
            Verificar Resposta
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Próxima Pergunta
          </button>
        )}
        
        <div className="mt-6 text-center">
          <button
            onClick={restartQuiz}
            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm underline"
          >
            Reiniciar Quiz
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="quiz" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-emerald-300">
            Quiz do Hino
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Teste seus conhecimentos sobre o hino de Guarapuava e a história da cidade
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {renderQuizContent()}
          
          <div className="mt-10 bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
            <div className="flex items-start">
              <div className="mr-4 mt-1 text-emerald-600 dark:text-emerald-400">
                <HelpCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Sobre o Quiz
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Este quiz foi desenvolvido para testar e enriquecer seus conhecimentos sobre o hino de Guarapuava, sua história e significado. As perguntas abrangem detalhes sobre a composição, história da cidade e elementos do hino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;