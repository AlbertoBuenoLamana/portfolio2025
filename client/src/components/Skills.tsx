import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

type SkillCategory = {
  id: string;
  title: string;
  color: string;
  gradientColors: string;
  skills: string[];
};

function Skills() {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      title: t('frontend'),
      color: 'text-primary dark:text-primary-foreground',
      gradientColors: 'from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400',
      skills: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Polymer', 'Material Design', 'TailwindCSS', 'SASS']
    },
    {
      id: 'backend',
      title: t('backend'),
      color: 'text-emerald-600 dark:text-emerald-400',
      gradientColors: 'from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400',
      skills: ['Java 8/21', 'Spring Boot', 'Hibernate', 'JPA', 'Python', 'PHP', 'REST API', 'Maven']
    },
    {
      id: 'tools',
      title: t('tools'),
      color: 'text-sky-600 dark:text-sky-400',
      gradientColors: 'from-sky-600 to-cyan-600 dark:from-sky-400 dark:to-cyan-400',
      skills: ['Git', 'Docker', 'Jira', 'Trello', 'Swagger', 'VS Code', 'Azure DevOps', 'AWS CodeBuild', 'AWS CodeDeploy']
    },
    {
      id: 'design',
      title: t('design'),
      color: 'text-purple-500 dark:text-purple-300',
      gradientColors: 'from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400',
      skills: ['JasperReports', 'AI Coding Assistants', 'Cursor', 'Claude', 'Ollama', 'Windsurf', 'n8n']
    },
    {
      id: 'mobileDev',
      title: t('mobileDev'),
      color: 'text-amber-500 dark:text-amber-300',
      gradientColors: 'from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400',
      skills: ['AWS Lambda', 'AWS S3', 'AWS EC2', 'DynamoDB', 'API Gateway', 'RDS', 'Cloudwatch', 'SES', 'SAM']
    },
    {
      id: 'softSkills',
      title: t('softSkills'),
      color: 'text-red-500 dark:text-red-300',
      gradientColors: 'from-red-500 to-pink-500 dark:from-red-400 dark:to-pink-400',
      skills: ['MySQL', 'PostgreSQL', 'DynamoDB', 'MongoDB']
    }
  ];

  return (
    <section className="mb-16 pt-4 relative" id="skills">
      {/* Background blob effect */}
      <div className="blob-effect w-80 h-80 opacity-30 right-[10%] bottom-[20%]"></div>
      
      <div className="section-container">
        <div className="mb-8 relative z-10">
          <h2 className="section-title">{t('skills')}</h2>
          <p className="text-muted-foreground dark:text-gray-300 transition-colors duration-300">
            {t('skillsDesc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {skillCategories.map((category) => (
            <Card 
              key={category.id}
              className="card-hover dark:bg-gray-800 overflow-hidden border border-transparent hover:border-primary/20 dark:hover:border-primary/30"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${category.gradientColors}`}></div>
              <CardContent className="p-6 md:p-8">
                <h3 className={`font-heading text-xl font-semibold mb-4 ${category.color} transition-colors duration-300 gradient-text`}>{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <span 
                      key={`${category.id}-${index}`}
                      className={`px-3 py-1 bg-card dark:bg-gray-700 border border-border dark:border-gray-600 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r ${category.gradientColors} hover:text-white cursor-default hover:scale-105 hover:shadow-md`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
