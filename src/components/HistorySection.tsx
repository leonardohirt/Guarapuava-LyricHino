import React from 'react';
import { Calendar, Users, Award, MapPin } from 'lucide-react';

const HistorySection: React.FC = () => {
  return (
    <section id="history" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">
            História do Hino
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conheça a origem, o significado e o contexto histórico do hino de Guarapuava
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-emerald max-w-none dark:prose-invert">
              <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
                O Hino e seu Significado
              </h3>
              
              <p>
                O hino de Guarapuava foi criado para celebrar a rica história e as características marcantes desta importante cidade do Paraná. Composto em [ANO] por [COMPOSITOR], com letra de [LETRISTA], o hino rapidamente se tornou um símbolo de orgulho para os guarapuavanos.
              </p>
              
              <p>
                Cada verso do hino representa aspectos importantes da cidade e de sua identidade cultural. As referências à natureza exuberante, ao clima característico, à história de ocupação do território e às tradições locais são elementos que permeiam a composição.
              </p>
              
              <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mt-8 mb-4">
                Contextualização Histórica
              </h3>
              
              <p>
                Guarapuava, cujo nome tem origem no tupi-guarani e significa "lobo bravo", foi fundada oficialmente em 9 de dezembro de 1819. A região, habitada originalmente por povos indígenas, principalmente Kaingang e Guarani, passou por um processo de colonização a partir do século XIX.
              </p>
              
              <p>
                O hino reflete esse rico passado, honrando tanto os povos originários quanto os pioneiros que contribuíram para o desenvolvimento da cidade. As menções às características geográficas, como os campos e montanhas, também destacam a beleza natural que sempre foi marca registrada de Guarapuava.
              </p>
              
              <blockquote className="italic border-l-4 border-emerald-500 pl-4 my-6">
                "O hino de Guarapuava é mais que uma composição musical; é um documento histórico que narra a trajetória, os valores e as aspirações de nosso povo." — [Historiador Local]
              </blockquote>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <a 
                href="#"
                className="flex items-center justify-center bg-emerald-100 hover:bg-emerald-200 text-emerald-800 dark:bg-emerald-900 dark:hover:bg-emerald-800 dark:text-emerald-100 py-3 px-4 rounded-lg transition-colors"
              >
                <span>Linha do Tempo Completa</span>
              </a>
              <a 
                href="#"
                className="flex items-center justify-center bg-emerald-100 hover:bg-emerald-200 text-emerald-800 dark:bg-emerald-900 dark:hover:bg-emerald-800 dark:text-emerald-100 py-3 px-4 rounded-lg transition-colors"
              >
                <span>Documentação Histórica</span>
              </a>
            </div>
          </div>
          
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhotelkuster.com.br%2F10-pontos-turisticos-para-conhecer-em-guarapuava%2F&psig=AOvVaw2QdAQ1GYgiy_23Lkljc8U_&ust=1747193900866000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDj89HCn40DFQAAAAAdAAAAABAL" 
                alt="Vista histórica de Guarapuava" 
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 dark:bg-gray-700 p-5 rounded-xl">
                <div className="text-emerald-600 dark:text-emerald-300 mb-3">
                  <Calendar size={28} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Criação do Hino</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  O hino foi oficialmente adotado em [ANO], após concurso público realizado pela prefeitura municipal.
                </p>
              </div>
              
              <div className="bg-emerald-50 dark:bg-gray-700 p-5 rounded-xl">
                <div className="text-emerald-600 dark:text-emerald-300 mb-3">
                  <Users size={28} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Compositores</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  [NOME DO COMPOSITOR] e [NOME DO LETRISTA] trabalharam juntos para criar esta peça musical emblemática.
                </p>
              </div>
              
              <div className="bg-emerald-50 dark:bg-gray-700 p-5 rounded-xl">
                <div className="text-emerald-600 dark:text-emerald-300 mb-3">
                  <Award size={28} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Reconhecimento</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  O hino é executado em todas as cerimônias oficiais e eventos cívicos importantes da cidade.
                </p>
              </div>
              
              <div className="bg-emerald-50 dark:bg-gray-700 p-5 rounded-xl">
                <div className="text-emerald-600 dark:text-emerald-300 mb-3">
                  <MapPin size={28} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Localização</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Guarapuava está localizada na região centro-sul do Paraná, sendo a cidade mais populosa do centro do estado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;