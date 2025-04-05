import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 sm:px-6 md:px-8 mt-auto shadow-md bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p className="text-gray-600 dark:text-gray-300">
              {t('copyright')}
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground transform hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground transform hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground transform hover:scale-110 transition-all duration-200"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
