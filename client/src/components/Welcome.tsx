import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

function Welcome() {
  const { t } = useLanguage();

  return (
    <section className="mb-16 mt-8 relative" id="about">
      {/* Background blob effect */}
      <div className="blob-effect w-64 h-64 right-[10%] top-[-20%]"></div>
      <div className="blob-effect w-72 h-72 left-[20%] bottom-[-20%]"></div>
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
          <div className="w-full md:w-1/3 flex justify-center">
            <Card className="overflow-hidden w-64 h-64 relative shadow-lg border-2 border-primary/20 dark:border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-105 dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent dark:from-primary/30"></div>
              <div className="w-full h-full bg-cover bg-center rounded-md overflow-hidden" 
                   style={{ backgroundImage: `url('/images/profile.jpg')` }}>
              </div>
            </Card>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground dark:text-white transition-colors duration-300">
              <span className="gradient-text">Alberto</span> <span className="accent-text italic dark:text-blue-400">Bueno</span> Lamana
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-6 leading-relaxed">
              Desarrollador web <span className="bold-text dark:text-blue-300">apasionado</span> en la creación de aplicaciones web modernas y soluciones escalables. Mi enfoque se centra en el desarrollo <span className="highlight">Full Stack</span>, principalmente Angular desde la versión 6 y Java desde la versión 8. <span className="subtle-text">Entusiasta de los servicios cloud especialmente de <span className="animated-underline dark:text-blue-300">AWS</span>.</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Card className="bg-primary/5 dark:bg-primary/10 border-none px-4 py-2 hover:bg-primary/10 dark:hover:bg-primary/15 transition-all duration-200 cursor-default hover:scale-105">
                <span className="text-sm font-medium dark:text-gray-200">AWS Certified Developer</span>
              </Card>
              <Card className="bg-primary/5 dark:bg-primary/10 border-none px-4 py-2 hover:bg-primary/10 dark:hover:bg-primary/15 transition-all duration-200 cursor-default hover:scale-105">
                <span className="text-sm font-medium dark:text-gray-200">Full Stack Developer</span>
              </Card>
              <Card className="bg-primary/5 dark:bg-primary/10 border-none px-4 py-2 hover:bg-primary/10 dark:hover:bg-primary/15 transition-all duration-200 cursor-default hover:scale-105">
                <span className="text-sm font-medium dark:text-gray-200">Angular Specialist</span>
              </Card>
              <Card className="bg-primary/5 dark:bg-primary/10 border-none px-4 py-2 hover:bg-primary/10 dark:hover:bg-primary/15 transition-all duration-200 cursor-default hover:scale-105">
                <span className="text-sm font-medium dark:text-gray-200">Java Developer</span>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;