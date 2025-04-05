import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';

function Header() {
  const { language, t, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300 bg-card dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-semibold text-foreground dark:text-white transition-colors duration-300">{t('pageTitle')}</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </Button>
            
            {/* Dark Mode Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
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
              variant="default"
              className="transform hover:scale-105 transition-transform duration-200 hover:shadow-md"
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
}

export default Header;
