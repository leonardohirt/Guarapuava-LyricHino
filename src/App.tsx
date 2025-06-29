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
import AdminLayout from './components/admin/AdminLayout';

function App() {
  const [accessibilityMode, setAccessibilityMode] = useState({
    highContrast: false,
    largeText: false,
    narration: false
  });

  // Check if we're on the admin route
  const isAdminRoute = window.location.pathname === '/admin';

  if (isAdminRoute) {
    return (
      <ThemeProvider>
        <AdminLayout />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className={`min-h-screen bg-white dark:bg-gray-900 ${accessibilityMode.highContrast ? 'high-contrast' : ''} 
                      ${accessibilityMode.largeText ? 'large-text' : ''}`}>
        <div className="relative z-50">
          <AccessibilityBar 
            settings={accessibilityMode} 
            onChange={setAccessibilityMode} 
          />
        </div>
        <Header />
        <main className="pt-[96px]">
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