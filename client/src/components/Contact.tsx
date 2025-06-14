import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

function Contact() {
  const { t } = useLanguage();

  return (
    <section className="mb-16 pt-4 relative" id="contact">
      {/* Background blob effect */}
      <div className="blob-effect w-96 h-96 opacity-20 left-[15%] top-[10%]"></div>
      
      <div className="section-container">
        <div className="mb-8 relative z-10">
          <h2 className="section-title">{t('contactTitle')}</h2>
          <p className="text-muted-foreground dark:text-gray-300 transition-colors duration-300">
            {t('contactDesc')}
          </p>
        </div>
        
        <div className="flex justify-center relative z-10">
          <Card className="glassmorphism p-6 md:p-8 shadow-lg border-0 relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-primary/40 before:to-blue-600/40 dark:before:from-blue-400/40 dark:before:to-primary-foreground/40 before:rounded-lg before:-z-10 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary-foreground">
              {t('getInTouch')}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-primary dark:text-blue-400" />
                <a href="mailto:albertobuenolamana@gmail.com" className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300 animated-underline">
                  albertobuenolamana@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <LinkedinIcon className="h-5 w-5 text-primary dark:text-blue-400" />
                <a href="https://www.linkedin.com/in/alberto-bueno-lamana-6b0344185/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300 animated-underline">
                  /in/alberto-bueno-6b0344185/
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <GithubIcon className="h-5 w-5 text-primary dark:text-blue-400" />
                <a href="https://github.com/albertobuenolamana" target="_blank" rel="noopener noreferrer" className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300 animated-underline">
                  github.com/albertobuenolamana
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact; 