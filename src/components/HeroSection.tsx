import React from 'react';
import { Music, Play, BookOpen } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-16 pb-16 md:pt-20 md:pb-24 min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://hotelkuster.com.br/wp-content/uploads/2022/06/Catedral-Nossa-Senhora-de-Belem-Guarapuava-PR.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-800/70 to-emerald-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
            Hino de Guarapuava
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-yellow-100 drop-shadow-lg font-light">
            Conheça, aprenda e celebre o símbolo musical da nossa cidade
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a 
              href="#lyrics" 
              className="bg-white text-emerald-800 hover:bg-yellow-100 transition-all duration-300 flex items-center justify-center py-4 px-8 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              <Play size={24} className="mr-3" />
              Ouvir Agora
            </a>
            <a 
              href="#history" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center py-4 px-8 rounded-full font-semibold text-lg backdrop-blur-sm hover:scale-105 transform"
            >
              <BookOpen size={24} className="mr-3" />
              Conhecer História
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20">
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 transform shadow-xl">
              <div className="text-yellow-300 mb-6">
                <Music size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">Letra e Música</h3>
              <p className="text-yellow-50 leading-relaxed">
                Interaja com a letra sincronizada com a música e acompanhe no modo karaokê
              </p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 transform shadow-xl">
              <div className="text-yellow-300 mb-6">
                <BookOpen size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">Atividades</h3>
              <p className="text-yellow-50 leading-relaxed">
                Jogos, animações e atividades educativas para crianças e adultos
              </p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 transform shadow-xl">
              <div className="text-yellow-300 mb-6">
                <Play size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">História</h3>
              <p className="text-yellow-50 leading-relaxed">
                Descubra a história e o significado cultural do hino de Guarapuava
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="currentColor" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;