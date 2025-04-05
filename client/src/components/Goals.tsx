import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Zap } from 'lucide-react';

function Goals() {
  const { t } = useLanguage();

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
      description: 'Angular, TypeScript, Material Design, TailwindCSS'
    },
    {
      id: 'backend',
      title: t('backendCloud'),
      description: 'Java, Spring Boot, AWS Lambda, API Gateway, S3'
    },
    {
      id: 'interests',
      title: t('areasOfInterest'),
      description: 'AI Coding Assistants, Cursor, Claude, Ollama, n8n'
    }
  ];

  return (
    <section className="mb-12 pt-4" id="goals">
      <div className="mb-8">
        <h2 className="section-title">{t('goalsSection')}</h2>
        <p className="max-w-3xl text-muted-foreground dark:text-gray-300 transition-colors duration-300">
          {t('goalsDesc')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Professional Goals */}
        <Card className="card-hover border-l-4 border-primary dark:bg-gray-800 dark:border-primary/80">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-heading text-xl font-semibold mb-4 text-primary dark:text-primary-foreground transition-colors duration-300">{t('profGoals')}</h3>
            <ul className="space-y-4">
              {professionalGoals.map((goal, index) => (
                <li key={`prof-goal-${index}`} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary dark:text-primary-foreground mr-3 flex-shrink-0 transition-colors duration-300" />
                  <span className="text-foreground dark:text-gray-200 transition-colors duration-300">
                    {index % 2 === 0 ? (
                      <>{goal.split(' ').slice(0, 3).join(' ')} <span className="bold-text">{goal.split(' ').slice(3).join(' ')}</span></>
                    ) : (
                      goal
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        {/* Personal Motivations */}
        <Card className="card-hover border-l-4 border-primary dark:bg-gray-800 dark:border-primary/80">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-heading text-xl font-semibold mb-4 text-primary dark:text-primary-foreground transition-colors duration-300">{t('persMotivations')}</h3>
            <ul className="space-y-4">
              {personalMotivations.map((motivation, index) => (
                <li key={`pers-mot-${index}`} className="flex items-start">
                  <Zap className="h-6 w-6 text-primary dark:text-primary-foreground mr-3 flex-shrink-0 transition-colors duration-300" />
                  <span className="text-foreground dark:text-gray-200 transition-colors duration-300">
                    {index % 2 === 1 ? (
                      <>{motivation.split(' ').slice(0, 2).join(' ')} <span className="highlight">{motivation.split(' ').slice(2, 4).join(' ')}</span> {motivation.split(' ').slice(4).join(' ')}</>
                    ) : (
                      motivation
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        {/* Current Technologies */}
        <Card className="card-hover border-l-4 border-primary dark:bg-gray-800 dark:border-primary/80 col-span-1 md:col-span-2">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-heading text-xl font-semibold mb-4 text-primary dark:text-primary-foreground transition-colors duration-300">{t('currentTech')}</h3>
            <p className="mb-4 text-muted-foreground dark:text-gray-300 transition-colors duration-300">
              {t('currentTechDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {techAreas.map((area) => (
                <div 
                  key={area.id}
                  className="bg-card dark:bg-gray-700 p-4 rounded-lg border border-border dark:border-gray-600 transition-all duration-300 hover:shadow-md"
                >
                  <h4 className="font-heading font-medium mb-2 text-primary dark:text-primary-foreground transition-colors duration-300">{area.title}</h4>
                  <p className="text-sm text-muted-foreground dark:text-gray-300 transition-colors duration-300">
                    <span className="accent-text font-medium">{area.description.split(',')[0]}</span>
                    {area.description.split(',').slice(1).join(',')}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Goals;
