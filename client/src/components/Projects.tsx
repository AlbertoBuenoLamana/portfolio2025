import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Project = {
  id: string;
  title: string;
  description: string;
  type: 'professional' | 'personal';
  image: string;
  technologies: string[];
};

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const projects: Project[] = [
    {
      id: 'project1',
      title: t('project1Title'),
      description: t('project1Desc'),
      type: 'professional',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB']
    },
    {
      id: 'project2',
      title: t('project2Title'),
      description: t('project2Desc'),
      type: 'personal',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'Redux', 'API']
    },
    {
      id: 'project3',
      title: t('project3Title'),
      description: t('project3Desc'),
      type: 'professional',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'D3.js', 'Python', 'Flask']
    },
    {
      id: 'project4',
      title: t('project4Title'),
      description: t('project4Desc'),
      type: 'personal',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Unity', 'C#', 'Pixel Art', 'Game Design']
    }
  ];

  return (
    <section className="mb-12" id="projects">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t('projects')}</h2>
        <p className={`text-gray-600 max-w-3xl ${isDarkMode ? 'text-gray-400' : ''}`}>
          {t('projectsDesc')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card 
            key={project.id}
            className={`overflow-hidden hover:shadow-lg transition-shadow duration-200 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className={`h-48 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <Badge className={
                  project.type === 'professional' 
                    ? (isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800')
                    : (isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800')
                }>
                  {project.type === 'professional' ? t('professional') : t('personal')}
                </Badge>
              </div>
              <p className={`text-gray-600 mb-4 ${isDarkMode ? 'text-gray-400' : ''}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={`${project.id}-tech-${index}`}
                    className={`px-2 py-1 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    } text-xs font-medium rounded-full`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="#" 
                className="text-primary hover:text-primary-dark font-medium"
              >
                {t('viewDetails')}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
