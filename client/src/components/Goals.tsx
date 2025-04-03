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
    <section className="mb-12" id="goals">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t('goalsSection')}</h2>
        <p className="text-muted-foreground max-w-3xl">
          {t('goalsDesc')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Professional Goals */}
        <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-primary">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">{t('profGoals')}</h3>
            <ul className="space-y-3 text-muted-foreground">
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
        <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-secondary">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-secondary">{t('persMotivations')}</h3>
            <ul className="space-y-3 text-muted-foreground">
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
        <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-accent col-span-1 md:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-accent">{t('currentTech')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('currentTechDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {techAreas.map((area) => (
                <div 
                  key={area.id}
                  className="bg-muted p-4 rounded-lg"
                >
                  <h4 className="font-medium mb-2">{area.title}</h4>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
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
