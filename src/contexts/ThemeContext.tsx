import React, { createContext, useState, useContext, ReactNode } from 'react';

type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme] = useState<Theme>('dark');

  const toggleTheme = () => {
    // Theme is always dark, so this is now a no-op
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="bg-gray-900 text-white">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};