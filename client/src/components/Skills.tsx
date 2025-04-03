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
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'NextJS', 'TailwindCSS', 'SASS']
    },
    {
      id: 'backend',
      title: t('backend'),
      color: 'text-secondary',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST API', 'GraphQL']
    },
    {
      id: 'tools',
      title: t('tools'),
      color: 'text-accent',
      skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Figma', 'VS Code', 'Webpack', 'Jest', 'Cypress']
    },
    {
      id: 'design',
      title: t('design'),
      color: 'text-primary-light',
      skills: ['UI/UX', 'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Wireframing', 'Prototyping']
    },
    {
      id: 'mobileDev',
      title: t('mobileDev'),
      color: 'text-secondary-light',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Responsive Design', 'PWA']
    },
    {
      id: 'softSkills',
      title: t('softSkills'),
      color: 'text-accent-light',
      skills: ['Liderazgo', 'Trabajo en Equipo', 'Comunicación', 'Gestión de Proyectos', 'Resolución de Problemas', 'Adaptabilidad', 'Mentoría']
    }
  ];

  return (
    <section className="mb-12" id="skills">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t('skills')}</h2>
        <p className={`text-gray-600 max-w-3xl ${isDarkMode ? 'text-gray-400' : ''}`}>
          {t('skillsDesc')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card 
            key={category.id}
            className={`hover:shadow-lg transition-shadow duration-200 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <CardContent className="p-6">
              <h3 className={`text-xl font-semibold mb-4 ${category.color}`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span 
                    key={`${category.id}-${index}`}
                    className={`px-3 py-1 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    } rounded-full text-sm font-medium`}
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
