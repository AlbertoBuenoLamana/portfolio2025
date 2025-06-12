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
      description: 'AI Coding Assistants, Cursor, Claude Code, Claude, Ollama, n8n'
    }
  ];

  return (
    <section className="mb-12 pt-4 relative" id="goals">
      {/* Background blob effect */}
      <div className="blob-effect w-96 h-96 opacity-20 left-[10%] bottom-[-10%]"></div>
      
      <div className="section-container">
        <div className="mb-8 relative z-10">
          <h2 className="section-title">{t('goalsSection')}</h2>
          <p className="text-muted-foreground dark:text-gray-300 transition-colors duration-300">
            {t('goalsDesc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
          {/* Professional Goals */}
          <Card className="card-hover dark:bg-gray-800 overflow-hidden border-0 relative before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-primary before:to-blue-600 dark:before:from-blue-400 dark:before:to-primary-foreground before:rounded-lg before:-z-10">
            <CardContent className="p-6 md:p-8 bg-background dark:bg-gray-800 rounded-lg h-full">
              <h3 className="font-heading text-xl font-semibold mb-4 gradient-text">{t('profGoals')}</h3>
              <ul className="space-y-4">
                {professionalGoals.map((goal, index) => (
                  <li key={`prof-goal-${index}`} className="flex items-start group">
                    <CheckCircle2 className="h-6 w-6 text-primary dark:text-primary-foreground mr-3 flex-shrink-0 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
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
          <Card className="card-hover dark:bg-gray-800 overflow-hidden border-0 relative before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-blue-600 before:to-purple-600 dark:before:from-blue-400 dark:before:to-purple-400 before:rounded-lg before:-z-10">
            <CardContent className="p-6 md:p-8 bg-background dark:bg-gray-800 rounded-lg h-full">
              <h3 className="font-heading text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">{t('persMotivations')}</h3>
              <ul className="space-y-4">
                {personalMotivations.map((motivation, index) => (
                  <li key={`pers-mot-${index}`} className="flex items-start group">
                    <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
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
          <Card className="card-hover dark:bg-gray-800 col-span-1 md:col-span-2 overflow-hidden border-0 relative before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-purple-600 before:to-pink-600 dark:before:from-purple-400 dark:before:to-pink-400 before:rounded-lg before:-z-10">
            <CardContent className="p-6 md:p-8 bg-background dark:bg-gray-800 rounded-lg">
              <h3 className="font-heading text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">{t('currentTech')}</h3>
              <p className="mb-6 text-muted-foreground dark:text-gray-300 transition-colors duration-300">
                {t('currentTechDesc')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {techAreas.map((area) => (
                  <div 
                    key={area.id}
                    className="glassmorphism p-5 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                  >
                    <h4 className="font-heading font-medium mb-3 text-primary dark:text-primary-foreground transition-colors duration-300">{area.title}</h4>
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
      </div>
    </section>
  );
}

export default Goals;
