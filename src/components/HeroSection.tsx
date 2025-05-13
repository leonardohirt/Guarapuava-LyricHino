import React from 'react';
import { Music, Play, BookOpen } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://www.viajeparana.com/sites/viaje-parana/arquivos_restritos/files/imagem/2019-03/parque_do_lago_07.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 to-emerald-800/80"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hino de Guarapuava
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-yellow-100">
            Conheça, aprenda e celebre o símbolo musical da nossa cidade
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <a 
              href="#lyrics" 
              className="bg-white text-emerald-800 hover:bg-yellow-100 transition-colors flex items-center justify-center py-3 px-6 rounded-full font-medium"
            >
              <Play size={20} className="mr-2" />
              Ouvir Agora
            </a>
            <a 
              href="#history" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors flex items-center justify-center py-3 px-6 rounded-full font-medium"
            >
              <BookOpen size={20} className="mr-2" />
              Conhecer História
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-yellow-300 mb-4">
                <Music size={32} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Letra e Música</h3>
              <p className="text-yellow-50 text-sm">
                Interaja com a letra sincronizada com a música e acompanhe no modo karaokê
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-yellow-300 mb-4">
                <BookOpen size={32} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atividades</h3>
              <p className="text-yellow-50 text-sm">
                Jogos, animações e atividades educativas para crianças e adultos
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-yellow-300 mb-4">
                <Play size={32} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">História</h3>
              <p className="text-yellow-50 text-sm">
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