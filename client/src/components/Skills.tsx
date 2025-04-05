import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

type SkillCategory = {
  id: string;
  title: string;
  color: string;
  skills: string[];
};

function Skills() {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      title: t('frontend'),
      color: 'text-primary dark:text-primary-foreground',
      skills: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Polymer', 'Material Design', 'TailwindCSS', 'SASS']
    },
    {
      id: 'backend',
      title: t('backend'),
      color: 'text-emerald-600 dark:text-emerald-400',
      skills: ['Java 8/21', 'Spring Boot', 'Hibernate', 'JPA', 'Python', 'PHP', 'REST API', 'Maven']
    },
    {
      id: 'tools',
      title: t('tools'),
      color: 'text-sky-600 dark:text-sky-400',
      skills: ['Git', 'Docker', 'Jira', 'Trello', 'Swagger', 'VS Code', 'Azure DevOps', 'AWS CodeBuild', 'AWS CodeDeploy']
    },
    {
      id: 'design',
      title: t('design'),
      color: 'text-purple-500 dark:text-purple-300',
      skills: ['JasperReports', 'AI Coding Assistants', 'Cursor', 'Claude', 'Ollama', 'Windsurf', 'n8n']
    },
    {
      id: 'mobileDev',
      title: t('mobileDev'),
      color: 'text-amber-500 dark:text-amber-300',
      skills: ['AWS Lambda', 'AWS S3', 'AWS EC2', 'DynamoDB', 'API Gateway', 'RDS', 'Cloudwatch', 'SES', 'SAM']
    },
    {
      id: 'softSkills',
      title: t('softSkills'),
      color: 'text-red-500 dark:text-red-300',
      skills: ['MySQL', 'PostgreSQL', 'DynamoDB', 'MongoDB']
    }
  ];

  return (
    <section className="mb-12 pt-4" id="skills">
      <div className="mb-8">
        <h2 className="section-title">{t('skills')}</h2>
        <p className="text-muted-foreground dark:text-gray-300 max-w-3xl transition-colors duration-300">
          {t('skillsDesc')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skillCategories.map((category) => (
          <Card 
            key={category.id}
            className="card-hover dark:bg-gray-800"
          >
            <CardContent className="p-6 md:p-8">
              <h3 className={`font-heading text-xl font-semibold mb-4 ${category.color} transition-colors duration-300`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span 
                    key={`${category.id}-${index}`}
                    className="px-3 py-1 bg-card dark:bg-gray-700 border border-border dark:border-gray-600 rounded-full text-sm font-medium transition-all duration-200 hover:bg-primary/5 dark:hover:bg-primary/10 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Skills;
