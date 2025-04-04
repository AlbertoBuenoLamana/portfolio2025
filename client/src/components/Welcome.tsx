import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const Welcome: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="mb-12 mt-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3 flex justify-center">
          <Card className="overflow-hidden w-64 h-64 relative shadow-lg border-2 border-primary/20 transition-all duration-300 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
            <div className="w-full h-full bg-cover bg-center rounded-md overflow-hidden" 
                 style={{ backgroundImage: `url('/images/profile.jpg')` }}>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Alberto Bueno Lamana</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Desarrollador web apasionado en la creación de aplicaciones web modernas y soluciones escalables. Mi enfoque se centra en el desarrollo Full Stack, principalmente Angular desde la versión 6 y Java desde la versión 8. Entusiasta de los servicios cloud especialmente de AWS.
          </p>
          <div className="flex flex-wrap gap-3">
            <Card className="bg-primary/5 border-none px-4 py-2">
              <span className="text-sm font-medium">AWS Certified Developer</span>
            </Card>
            <Card className="bg-primary/5 border-none px-4 py-2">
              <span className="text-sm font-medium">Full Stack Developer</span>
            </Card>
            <Card className="bg-primary/5 border-none px-4 py-2">
              <span className="text-sm font-medium">Angular Specialist</span>
            </Card>
            <Card className="bg-primary/5 border-none px-4 py-2">
              <span className="text-sm font-medium">Java Developer</span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;