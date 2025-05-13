import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-800 text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Hino de Guarapuava</h3>
            <p className="text-emerald-100 mb-4">
              Conheça, aprenda e celebre o símbolo musical da nossa cidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-200 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-emerald-100 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#lyrics" className="text-emerald-100 hover:text-white transition-colors">Letra & Música</a>
              </li>
              <li>
                <a href="#children" className="text-emerald-100 hover:text-white transition-colors">Para Crianças</a>
              </li>
              <li>
                <a href="#history" className="text-emerald-100 hover:text-white transition-colors">História</a>
              </li>
              <li>
                <a href="#quiz" className="text-emerald-100 hover:text-white transition-colors">Quiz</a>
              </li>
              <li>
                <a href="#testimonials" className="text-emerald-100 hover:text-white transition-colors">Depoimentos</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-emerald-100 hover:text-white transition-colors">Download MP3</a>
              </li>
              <li>
                <a href="#" className="text-emerald-100 hover:text-white transition-colors">Letra (PDF)</a>
              </li>
              <li>
                <a href="#" className="text-emerald-100 hover:text-white transition-colors">Partitura</a>
              </li>
              <li>
                <a href="#" className="text-emerald-100 hover:text-white transition-colors">Material Educativo</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:leonardohirt73@gmail.com" className="text-emerald-100 hover:text-white transition-colors">
                  leonardohirt73@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Globe size={16} className="mr-2" />
                <a href="https://www.guarapuava.pr.gov.br/" target="_blank" rel="noopener noreferrer" className="text-emerald-100 hover:text-white transition-colors">
                  www.guarapuava.pr.gov.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-200 text-sm">
          <p>© {new Date().getFullYear()} Hino de Guarapuava. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este site é um projeto educacional dedicado à preservação e divulgação do patrimônio cultural de Guarapuava.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;