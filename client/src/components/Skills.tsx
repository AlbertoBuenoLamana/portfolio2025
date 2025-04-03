import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';

type SkillCategory = {
  id: string;
  title: string;
  color: string;
  skills: string[];
};

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      title: t('frontend'),
      color: 'text-primary',
      skills: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Polymer', 'Material Design', 'TailwindCSS', 'SASS']
    },
    {
      id: 'backend',
      title: t('backend'),
      color: 'text-blue-500',
      skills: ['Java 8/21', 'Spring Boot', 'Hibernate', 'JPA', 'Python', 'PHP', 'REST API', 'Maven']
    },
    {
      id: 'tools',
      title: t('tools'),
      color: 'text-green-500',
      skills: ['Git', 'Docker', 'Jira', 'Trello', 'Swagger', 'VS Code', 'Azure DevOps', 'AWS CodeBuild', 'AWS CodeDeploy']
    },
    {
      id: 'design',
      title: t('design'),
      color: 'text-purple-500',
      skills: ['JasperReports', 'AI Coding Assistants', 'Cursor', 'Claude', 'Ollama', 'Windsurf', 'n8n']
    },
    {
      id: 'mobileDev',
      title: t('mobileDev'),
      color: 'text-amber-500',
      skills: ['AWS Lambda', 'AWS S3', 'AWS EC2', 'DynamoDB', 'API Gateway', 'RDS', 'Cloudwatch', 'SES', 'SAM']
    },
    {
      id: 'softSkills',
      title: t('softSkills'),
      color: 'text-red-500',
      skills: ['MySQL', 'PostgreSQL', 'DynamoDB', 'MongoDB']
    }
  ];

  return (
    <section className="mb-12" id="skills">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t('skills')}</h2>
        <p className="text-muted-foreground max-w-3xl">
          {t('skillsDesc')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card 
            key={category.id}
            className="hover:shadow-lg transition-shadow duration-200"
          >
            <CardContent className="p-6">
              <h3 className={`text-xl font-semibold mb-4 ${category.color}`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span 
                    key={`${category.id}-${index}`}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
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
};

export default Skills;
