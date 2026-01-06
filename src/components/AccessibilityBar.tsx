import React, { useRef } from 'react';
import { ZoomIn, Eye, VolumeX, Volume2 } from 'lucide-react';

interface AccessibilityMode {
  highContrast: boolean;
  largeText: boolean;
  narration: boolean;
}

interface AccessibilityBarProps {
  settings: AccessibilityMode;
  onChange: (settings: AccessibilityMode) => void;
}

const AccessibilityBar: React.FC<AccessibilityBarProps> = ({ settings, onChange }) => {
  const synth = window.speechSynthesis;
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const toggleHighContrast = () => {
    onChange({ ...settings, highContrast: !settings.highContrast });
  };

  const toggleLargeText = () => {
    onChange({ ...settings, largeText: !settings.largeText });
  };

  const toggleNarration = () => {
    const newNarration = !settings.narration;
    onChange({ ...settings, narration: newNarration });

    if (newNarration) {
      speakCurrentPageContent();
    } else {
      synth.cancel();
    }
  };

  const speakCurrentPageContent = () => {
    synth.cancel();

    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const text = mainContent.innerText;

    if (!text) return;

    utteranceRef.current = new SpeechSynthesisUtterance(text);
    utteranceRef.current.lang = 'pt-BR';
    utteranceRef.current.rate = 0.9;
    utteranceRef.current.pitch = 1;
    utteranceRef.current.volume = 1;

    utteranceRef.current.onend = () => {
      onChange({ ...settings, narration: false });
    };

    synth.speak(utteranceRef.current);
  };

  return (
    <div className="fixed top-0 w-full bg-gray-800 text-white py-2 z-50">
      <div className="container mx-auto px-4 flex justify-end items-center space-x-4 text-sm">
        <span className="mr-2">Acessibilidade:</span>

        <button
          onClick={toggleHighContrast}
          className={`flex items-center transition-colors ${settings.highContrast ? 'text-yellow-300' : 'text-gray-300'}`}
          aria-label="Alternar alto contraste"
          title="Alto contraste"
        >
          <Eye size={16} className="mr-1" />
          <span className="hidden md:inline">Contraste</span>
        </button>

        <button
          onClick={toggleLargeText}
          className={`flex items-center transition-colors ${settings.largeText ? 'text-yellow-300' : 'text-gray-300'}`}
          aria-label="Alternar texto grande"
          title="Texto grande"
        >
          <ZoomIn size={16} className="mr-1" />
          <span className="hidden md:inline">Texto grande</span>
        </button>

        <button
          onClick={toggleNarration}
          className={`flex items-center transition-colors ${settings.narration ? 'text-yellow-300' : 'text-gray-300'}`}
          aria-label="Alternar narração"
          title="Narração"
        >
          {settings.narration ? (
            <Volume2 size={16} className="mr-1" />
          ) : (
            <VolumeX size={16} className="mr-1" />
          )}
          <span className="hidden md:inline">Narração</span>
        </button>
      </div>
    </div>
  );
};

export default AccessibilityBar;
