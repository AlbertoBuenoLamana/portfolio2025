import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';

const Header: React.FC = () => {
  const { language, t, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-semibold">{t('pageTitle')}</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className={`${
                isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''
              }`}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </Button>
            
            {/* Dark Mode Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className={`${
                isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''
              }`}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
            
            {/* Contact Button */}
            <Button 
              asChild
              className={`${
                isDarkMode ? 'bg-primary-dark hover:bg-primary' : ''
              }`}
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                {t('contact')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
