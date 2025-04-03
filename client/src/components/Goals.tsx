import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Zap } from 'lucide-react';

const Goals: React.FC = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const professionalGoals = [
    t('profGoal1'),
    t('profGoal2'),
    t('profGoal3'),
    t('profGoal4')
  ];

  const personalMotivations = [
    t('persMot1'),
    t('persMot2'),
    t('persMot3'),
    t('persMot4')
  ];

  const techAreas = [
    {
      id: 'frontend',
      title: t('modernFrontend'),
      description: 'React, NextJS, TailwindCSS, TypeScript'
    },
    {
      id: 'backend',
      title: t('backendCloud'),
      description: 'Node.js, Express, AWS, Serverless'
    },
    {
      id: 'interests',
      title: t('areasOfInterest'),
      description: 'AI/ML, Web3, Arquitectura de Microservicios'
    }
  ];

  return (
    <section className="mb-12" id="goals">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t('goalsSection')}</h2>
        <p className={`text-gray-600 max-w-3xl ${isDarkMode ? 'text-gray-400' : ''}`}>
          {t('goalsDesc')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Professional Goals */}
        <Card className={`hover:shadow-lg transition-shadow duration-200 border-l-4 border-primary ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">{t('profGoals')}</h3>
            <ul className={`space-y-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {professionalGoals.map((goal, index) => (
                <li key={`prof-goal-${index}`} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        {/* Personal Motivations */}
        <Card className={`hover:shadow-lg transition-shadow duration-200 border-l-4 border-secondary ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-secondary">{t('persMotivations')}</h3>
            <ul className={`space-y-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {personalMotivations.map((motivation, index) => (
                <li key={`pers-mot-${index}`} className="flex items-start">
                  <Zap className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                  <span>{motivation}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        {/* Current Technologies */}
        <Card className={`hover:shadow-lg transition-shadow duration-200 border-l-4 border-accent col-span-1 md:col-span-2 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-accent">{t('currentTech')}</h3>
            <p className={`text-gray-600 mb-4 ${isDarkMode ? 'text-gray-400' : ''}`}>
              {t('currentTechDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {techAreas.map((area) => (
                <div 
                  key={area.id}
                  className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}
                >
                  <h4 className="font-medium mb-2">{area.title}</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{area.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Goals;
