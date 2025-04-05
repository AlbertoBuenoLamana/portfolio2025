import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, Menu, X } from 'lucide-react';

function Header() {
  const { language, t, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90' : 'bg-white/80 dark:bg-gray-900/80'} backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-700/50`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary-foreground">{t('pageTitle')}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 animated-underline transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('timeline')} 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 animated-underline transition-colors duration-200"
            >
              Timeline
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 animated-underline transition-colors duration-200"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 animated-underline transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 animated-underline transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-primary/20 hover:border-primary/50 hover:bg-primary/5 dark:border-blue-400/30 dark:hover:border-blue-400/60 dark:hover:bg-blue-400/10 transition-all duration-200"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </Button>
            
            {/* Dark Mode Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="border-primary/20 hover:border-primary/50 hover:bg-primary/5 dark:border-blue-400/30 dark:hover:border-blue-400/60 dark:hover:bg-blue-400/10 transition-all duration-200"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-blue-700" />
              )}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden border-primary/20 hover:border-primary/50 hover:bg-primary/5 dark:border-blue-400/30 dark:hover:border-blue-400/60 dark:hover:bg-blue-400/10 transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
            
            {/* Contact Button */}
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="default"
              className="hidden md:flex bg-gradient-to-r from-primary to-blue-600 dark:from-blue-500 dark:to-blue-600 hover:shadow-md hover:shadow-primary/20 dark:hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-200 dark:text-white"
            >
              {t('contact')}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200 py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('timeline')} 
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200 py-2"
              >
                Timeline
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200 py-2"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200 py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200 py-2"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
