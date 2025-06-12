import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { GithubIcon, LinkedinIcon } from 'lucide-react';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 sm:px-6 md:px-8 mt-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p className="text-gray-600 dark:text-gray-300 animated-underline hover:text-primary dark:hover:text-primary-foreground transition-colors duration-300">
              {t('copyright')}
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/albertobuenolamana" 
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/alberto-bueno-6b0344185/" 
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
