import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LyricsSection from './components/LyricsSection';
import ChildrenSection from './components/ChildrenSection';
import HistorySection from './components/HistorySection';
import QuizSection from './components/QuizSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import AccessibilityBar from './components/AccessibilityBar';

function App() {
  const [accessibilityMode, setAccessibilityMode] = useState({
    highContrast: false,
    largeText: false,
    narration: false
  });

  return (
    <ThemeProvider>
      <div className={`min-h-screen ${accessibilityMode.highContrast ? 'high-contrast' : ''} 
                      ${accessibilityMode.largeText ? 'large-text' : ''}`}>
        <AccessibilityBar 
          settings={accessibilityMode} 
          onChange={setAccessibilityMode} 
        />
        <Header />
        <main>
          <HeroSection />
          <LyricsSection accessibilityMode={accessibilityMode} />
          <ChildrenSection />
          <HistorySection />
          <QuizSection />
          <TestimonialSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;