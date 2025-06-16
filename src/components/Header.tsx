import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Letra & Música', href: '#lyrics' },
    { name: 'Jogo de Palavras', href: '#children' },
    { name: 'História', href: '#history' },
    { name: 'Quiz', href: '#quiz' },
    { name: 'Depoimentos', href: '#testimonials' }
  ];

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun size={18} />;
      case 'dark':
        return <Moon size={18} />;
      case 'system':
        return <Monitor size={18} />;
      default:
        return <Monitor size={18} />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Claro';
      case 'dark':
        return 'Escuro';
      case 'system':
        return 'Sistema';
      default:
        return 'Sistema';
    }
  };

  const cycleTheme = () => {
    const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <header 
      className={`fixed w-full top-[32px] z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-gradient-to-b from-black/30 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className={`text-xl md:text-2xl font-bold transition-colors ${
              isScrolled 
                ? 'text-gray-900 dark:text-white' 
                : 'text-white drop-shadow-lg'
            }`}>
              Hino de Guarapuava
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className={`font-medium transition-colors hover:scale-105 transform duration-200 ${
                      isScrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                        : 'text-white/90 hover:text-white drop-shadow-md'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
                isScrolled
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
              }`}
              title={`Tema atual: ${getThemeLabel()}`}
            >
              {getThemeIcon()}
              <span className="text-sm hidden lg:inline">{getThemeLabel()}</span>
            </button>
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={cycleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
              title={`Tema atual: ${getThemeLabel()}`}
            >
              {getThemeIcon()}
            </button>
            
            <button
              className={`p-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white hover:bg-white/20'
              }`}
              onClick={toggleMenu}
              aria-label="Menu principal"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden border-t transition-all duration-300 ${
            isScrolled 
              ? 'border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm' 
              : 'border-white/20 bg-black/40 backdrop-blur-sm'
          }`}>
            <ul className="py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg mx-2 font-medium transition-colors ${
                      isScrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-emerald-600 dark:hover:text-emerald-400'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                    on
