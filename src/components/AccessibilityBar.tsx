import React from 'react';
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
  const toggleHighContrast = () => {
    onChange({ ...settings, highContrast: !settings.highContrast });
  };

  const toggleLargeText = () => {
    onChange({ ...settings, largeText: !settings.largeText });
  };

  const toggleNarration = () => {
    onChange({ ...settings, narration: !settings.narration });
  };

  return (
    <div className="bg-gray-800 text-white py-2 z-50 relative">
      <div className="container mx-auto px-4 flex justify-end items-center space-x-4 text-sm">
        <span className="mr-2">Acessibilidade:</span>
        
        <button
          onClick={toggleHighContrast}
          className={`flex items-center ${settings.highContrast ? 'text-yellow-300' : 'text-gray-300'}`}
          aria-label="Alternar alto contraste"
          title="Alto contraste"
        >
          <Eye size={16} className="mr-1" />
          <span className="hidden md:inline">Contraste</span>
        </button>
        
        <button
          onClick={toggleLargeText}
          className={`flex items-center ${settings.largeText ? 'text-yellow-300' : 'text-gray-300'}`}
          aria-label="Alternar texto grande"
          title="Texto grande"
        >
          <ZoomIn size={16} className="mr-1" />
          <span className="hidden md:inline">Texto grande</span>
        </button>
        
        <button
          onClick={toggleNarration}
          className={`flex items-center ${settings.narration ? 'text-yellow-300' : 'text-gray-300'}`}
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