import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  return (
    <footer className={`py-6 mt-auto transition-colors duration-200 shadow-md ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('copyright')}
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className={`${
                isDarkMode ? 'text-gray-400 hover:text-primary-light' : 'text-gray-600 hover:text-primary'
              } transition-colors duration-200`}
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className={`${
                isDarkMode ? 'text-gray-400 hover:text-primary-light' : 'text-gray-600 hover:text-primary'
              } transition-colors duration-200`}
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className={`${
                isDarkMode ? 'text-gray-400 hover:text-primary-light' : 'text-gray-600 hover:text-primary'
              } transition-colors duration-200`}
            >
              <TwitterIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
