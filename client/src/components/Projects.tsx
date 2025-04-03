import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['PHP', 'Polymer', 'PostgreSQL', 'AWS EC2', 'RDS', 'Selenium']
    },
    {
      id: 'project2',
      title: t('project2Title'),
      description: t('project2Desc'),
      type: 'professional',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Angular 13', 'TypeScript', 'AngularJS', 'Performance Optimization']
    },
    {
      id: 'project3',
      title: t('project3Title'),
      description: t('project3Desc'),
      type: 'professional',
      image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Java 8', 'Spring', 'Hibernate', 'Angular 7', 'AWS', 'JasperReports']
    },
    {
      id: 'project4',
      title: t('project4Title'),
      description: t('project4Desc'),
      type: 'personal',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Angular', 'Spring Boot', 'AWS', 'DynamoDB', 'CI/CD']
    }
  ];

  return (
    <section className="mb-12" id="projects">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t('projects')}</h2>
        <p className="text-muted-foreground max-w-3xl">
          {t('projectsDesc')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card 
            key={project.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div className="h-48 bg-muted">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <Badge variant={project.type === 'professional' ? 'secondary' : 'outline'}>
                  {project.type === 'professional' ? t('professional') : t('personal')}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={`${project.id}-tech-${index}`}
                    className="px-2 py-1 bg-muted text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href="#">{t('viewDetails')}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
