import React from 'react';
import { Calendar, Users, Award, MapPin } from 'lucide-react';

const HistorySection: React.FC = () => {
  return (
    <section id="history" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-300">
            História do Hino
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Conheça a origem, o significado e o contexto histórico do hino de Guarapuava
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-emerald max-w-none prose-invert">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                O Hino e seu Significado
              </h3>
              
              <p>
                O Hino de Guarapuava, oficialmente adotado como hino municipal, é uma celebração poética da natureza exuberante e do desenvolvimento da cidade. Com letra de Gilda Boscardim Todeschini e música de Luiz Eulógio Zilli, o hino começa com a imagem do sol surgindo brilhante, simbolizando um novo começo e um futuro promissor para Guarapuava.
              </p>
              
              <p>
                A partitura original do hino foi recentemente entregue ao município e está exposta no Museu Visconde de Guarapuava, em um ato simbólico que resgatou e valorizou a história cultural da cidade. A família da compositora chegou à cidade em 1965, estabelecendo um forte vínculo afetivo e histórico com Guarapuava.
              </p>
              
              <p>
                O hino exalta elementos característicos da região, como o campo verdejante, os trigais dourados pelo sol e a figura do vaqueiro, símbolo da cultura local. A letra expressa o amor e o orgulho dos guarapuavanos pela cidade, retratando-a como uma "menina radiante" e uma "pérola do Oeste".
              </p>
              
              <blockquote className="italic border-l-4 border-emerald-500 pl-4 my-6">
                "O hino de Guarapuava é mais que uma composição musical; é um documento histórico que celebra nossa natureza, nossa cultura e nosso povo."
              </blockquote>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <a 
                href="#"
                className="flex items-center justify-center bg-emerald-900 hover:bg-emerald-800 text-emerald-100 py-3 px-4 rounded-lg transition-colors"
              >
                <span>Linha do Tempo Completa</span>
              </a>
              <a 
                href="#"
                className="flex items-center justify-center bg-emerald-900 hover:bg-emerald-800 text-emerald-100 py-3 px-4 rounded-lg transition-colors"
              >
                <span>Documentação Histórica</span>
              </a>
            </div>
          </div>
          
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src="https://www.viajeparana.com/sites/viaje-parana/arquivos_restritos/files/imagem/2019-03/lagoa_das_lagrimas_01.jpg" 
                alt="Vista histórica de Guarapuava" 
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-5 rounded-xl">
                <div className="text-emerald-300 mb-3">
                  <Calendar size={28} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Compositores</h4>
                <p className="text-gray-300 text-sm">
                  Letra por Gilda Boscardim Todeschini e música por Luiz Eulógio Zilli, criadores do hino oficial de Guarapuava.
                </p>
              </div>
              
              <div className="bg-gray-700 p-5 rounded-xl">
                <div className="text-emerald-300 mb-3">
                  <Users size={28} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Partitura Original</h4>
                <p className="text-gray-300 text-sm">
                  A partitura original está exposta no Museu Visconde de Guarapuava, preservando a história musical da cidade.
                </p>
              </div>
              
              <div className="bg-gray-700 p-5 rounded-xl">
                <div className="text-emerald-300 mb-3">
                  <Award size={28} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Reconhecimento</h4>
                <p className="text-gray-300 text-sm">
                  O hino é executado em todas as cerimônias oficiais e eventos cívicos importantes da cidade.
                </p>
              </div>
              
              <div className="bg-gray-700 p-5 rounded-xl">
                <div className="text-emerald-300 mb-3">
                  <MapPin size={28} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Localização</h4>
                <p className="text-gray-300 text-sm">
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