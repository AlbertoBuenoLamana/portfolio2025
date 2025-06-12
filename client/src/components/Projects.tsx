import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Linkedin, Globe, Github } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  type: 'professional' | 'personal';
  image: string;
  technologies: string[];
  year?: string;
  url?: string; // URL para proyectos con enlace web
  github?: string; // URL para proyectos con repositorio en GitHub
  linkedin?: string; // URL para proyectos con perfil de LinkedIn
};

function Projects() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('personal');

  const projects: Project[] = [
    // Personal Projects
    {
      id: 'gymapp',
      title: t('projectGymAppTitle'),
      description: t('projectGymAppDesc'),
      type: 'personal',
      year: '2022-2025',
      image: '/images/project-gymapp.png',
      technologies: ['Angular 19', 'Spring Boot', 'AWS', 'DynamoDB', 'CI/CD', 'JWT', 'Material Design'],
      url: '#'
    },
    {
      id: 'lolimprove',
      title: t('projectLolImproveTitle'),
      description: t('projectLolImproveDesc'),
      type: 'personal',
      year: '2025',
      image: '/images/project-lolimprove.png',
      technologies: ['React', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'Python'],
      url: '#'
    },
    {
      id: 'yeezyscrapper',
      title: t('projectYeezyScrapperTitle'),
      description: t('projectYeezyScrapperDesc'),
      type: 'personal',
      year: '2021',
      image: '/images/project-yeezyscrapper.png',
      technologies: ['Python', 'AWS SAM', 'Web Scraping'],
      github: 'https://github.com/yourusername/yeezy-scrapper'
    },
    {
      id: 'seleniumfifa',
      title: t('projectSeleniumFifaTitle'),
      description: t('projectSeleniumFifaDesc'),
      type: 'personal',
      year: '2019',
      image: '/images/project-seleniumfifa.png',
      technologies: ['Java', 'Selenium', 'Automation'],
      github: 'https://github.com/yourusername/selenium-fifa'
    },
    
    // Professional Projects
    {
      id: 'mainrail',
      title: t('projectMainRailTitle'),
      description: t('projectMainRailDesc'),
      type: 'professional',
      year: '2020-2023',
      image: '/images/project-mainrail.png',
      technologies: ['PHP', 'Polymer 2/3', 'Angular 11', 'Lumen', 'PostgreSQL', 'AWS EC2', 'RDS', 'Selenium'],
      linkedin: 'https://www.linkedin.com/in/your-linkedin-profile/'
    },
    {
      id: 'morabanc',
      title: t('projectMorabancTitle'),
      description: t('projectMorabancDesc'),
      type: 'professional',
      year: '2023-2024',
      image: '/images/project-morabanc.png',
      technologies: ['Angular 13', 'TypeScript', 'AngularJS', 'Performance Optimization', 'Migration'],
      linkedin: 'https://www.linkedin.com/in/your-linkedin-profile/'
    },
    {
      id: 'carnetjoven',
      title: t('projectCarnetJovenTitle'),
      description: t('projectCarnetJovenDesc'),
      type: 'professional',
      year: '2019-2021',
      image: '/images/project-carnetjoven.png',
      technologies: ['Java 8', 'Spring', 'Hibernate', 'Angular 7', 'AWS', 'JasperReports', 'MySQL', 'Tomcat'],
      linkedin: 'https://www.linkedin.com/in/your-linkedin-profile/'
    },
    {
      id: 'clun',
      title: t('projectClunTitle'),
      description: t('projectClunDesc'),
      type: 'professional',
      year: '2024-2025',
      image: '/images/project-clun.png',
      technologies: ['Spring Boot 3', 'Java 21', 'REST API', 'Swagger', 'Integration'],
      linkedin: 'https://www.linkedin.com/in/your-linkedin-profile/'
    }
  ];

  const personalProjects = projects.filter(project => project.type === 'personal');
  const professionalProjects = projects.filter(project => project.type === 'professional');

  // Helper function to sort projects from recent to old based on year
  const sortProjectsByYear = (projects: Project[]) => {
    return [...projects].sort((a, b) => {
      if (!a.year || !b.year) return 0;
      
      // Extract ending year from ranges like "2022-2025"
      const aYear = parseInt(a.year.split('-').pop() || a.year);
      const bYear = parseInt(b.year.split('-').pop() || b.year);
      
      // Sort descending (recent first)
      return bYear - aYear;
    });
  };

  const sortedPersonalProjects = sortProjectsByYear(personalProjects);
  const sortedProfessionalProjects = sortProjectsByYear(professionalProjects);
  
  // Handle hash change to switch to correct tab if needed
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#project-')) {
        const projectId = hash.replace('#project-', '');
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
          // Importante: Asegurar que el estado se actualice correctamente
          console.log("Cambiando a pestaña por hash:", project.type);
          setActiveTab(project.type);
          
          // Pequeño retraso para asegurar que el cambio de pestaña se procese
          setTimeout(() => {
            const element = document.getElementById(hash.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              
              // Añadir clase de resaltado
              element.classList.add('highlighted-card');
              
              // Eliminar la clase después de 3 segundos
              setTimeout(() => {
                element.classList.remove('highlighted-card');
              }, 3000);
            }
          }, 300); // Aumentar el tiempo de espera
        }
      }
    };
    
    // Ejecutar handleHashChange cuando el componente se monta o cuando cambia el hash
    handleHashChange();
    
    // Añadir el event listener para cambios de hash
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [projects]); // Este useEffect depende solo de projects
  
  // Función específica para cambiar la pestaña al hacer clic
  const handleTabChange = (value: string) => {
    // Establecer la pestaña activa
    setActiveTab(value);
    
    // Si hay un hash en la URL, hay que limpiarlo para que el usuario pueda cambiar entre pestañas libremente
    if (window.location.hash && window.location.hash.startsWith('#project-')) {
      // Usar history API para reemplazar la URL sin recargar la página
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  // Manejar el evento personalizado desde Timeline
  useEffect(() => {
    const handleTabSwitch = (event: CustomEvent) => {
      if (event.detail && event.detail.tab) {
        console.log("Cambiando a pestaña por evento:", event.detail.tab);
        setActiveTab(event.detail.tab);
        
        // Si no queremos mantener el hash (cambio de pestaña directo), lo limpiamos
        if (!event.detail.keepHash && window.location.hash) {
          setTimeout(() => {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }, 50);
        }
      }
    };
    
    document.addEventListener('switch-projects-tab', handleTabSwitch as EventListener);
    
    return () => {
      document.removeEventListener('switch-projects-tab', handleTabSwitch as EventListener);
    };
  }, []); // Este useEffect no tiene dependencias

  // Actualizar la vista cuando cambia activeTab
  useEffect(() => {
    // Cuando se cambia la pestaña, hacer scroll al inicio de la sección de proyectos
    if (activeTab) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activeTab]);

  return (
    <TooltipProvider>
      <section className="mb-12 pt-4 relative" id="projects">
      {/* Background blob effect */}
      <div className="blob-effect w-80 h-80 opacity-20 right-[5%] top-[30%]"></div>
      
      <div className="section-container">
        <div className="mb-8 relative z-10">
          <h2 className="section-title">{t('projects')}</h2>
          <p className="text-muted-foreground dark:text-gray-300 transition-colors duration-300">
            {t('projectsDesc')}
          </p>
        </div>
        
        {/* Estilos para tarjetas resaltadas */}
        <style dangerouslySetInnerHTML={{ __html: `
          .highlighted-card {
            animation: highlight-pulse 3s ease-in-out;
            position: relative;
            z-index: 20;
          }
          
          @keyframes highlight-pulse {
            0% { 
              box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7);
              transform: scale(1);
            }
            20% { 
              box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
              transform: scale(1.02);
            }
            40% { 
              box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7);
              transform: scale(1.01);
            }
            60% { 
              box-shadow: 0 0 0 5px rgba(99, 102, 241, 0);
              transform: scale(1.015);
            }
            100% { 
              box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
              transform: scale(1);
            }
          }
        `}} />
        
        <Tabs defaultValue={activeTab} value={activeTab} className="w-full" onValueChange={handleTabChange}>
          <TabsList className="mb-6 grid w-full grid-cols-2 max-w-md bg-muted dark:bg-gray-700 transition-colors duration-300 relative overflow-hidden">
            <div className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary-foreground transition-all duration-300 ${activeTab === 'personal' ? 'left-0 w-1/2' : 'left-1/2 w-1/2'}`}></div>
            <TabsTrigger 
              value="personal" 
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-foreground dark:data-[state=active]:text-white transition-colors duration-300"
            >
              {t('personal')}
            </TabsTrigger>
            <TabsTrigger 
              value="professional" 
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-foreground dark:data-[state=active]:text-white transition-colors duration-300"
            >
              {t('professional')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {sortedPersonalProjects.map((project) => (
                <Card 
                  key={project.id}
                  id={`project-${project.id}`}
                  className="overflow-hidden dark:bg-gray-800 scroll-mt-24 flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 relative before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-primary before:to-blue-600 dark:before:from-blue-400 dark:before:to-primary-foreground before:rounded-lg before:-z-10"
                >
                  <div className="mx-auto w-full max-w-[300px] pt-4">
                    <div className="relative aspect-[3/2] bg-muted dark:bg-gray-700 overflow-hidden rounded-md shadow-sm">
                      <OptimizedImage 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                        loading="lazy"
                        placeholder="skeleton"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <CardContent className="p-6 md:p-8 flex-1 bg-background dark:bg-gray-800 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-heading text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary-foreground">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {project.year && (
                          <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            {project.year}
                          </Badge>
                        )}
                        {project.url && (
                          project.url === '#' ? (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="text-gray-400 dark:text-gray-600 cursor-not-allowed">
                                  <Globe size={18} />
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{t('comingSoon')}</p>
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                              title="Ver sitio web"
                            >
                              <Globe size={18} />
                            </a>
                          )
                        )}
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                            title="Ver en GitHub"
                          >
                            <Github size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground dark:text-gray-300 mb-4 transition-colors duration-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={`${project.id}-tech-${index}`} 
                          variant="secondary"
                          className="badge-tech hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="professional" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {sortedProfessionalProjects.map((project) => (
                <Card 
                  key={project.id}
                  id={`project-${project.id}`}
                  className="overflow-hidden dark:bg-gray-800 scroll-mt-24 flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 relative before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-blue-600 before:to-purple-600 dark:before:from-blue-400 dark:before:to-purple-400 before:rounded-lg before:-z-10"
                >
                  <div className="mx-auto w-full max-w-[300px] pt-4">
                    <div className="relative aspect-[3/2] bg-muted dark:bg-gray-700 overflow-hidden rounded-md shadow-sm">
                      <OptimizedImage 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                        loading="lazy"
                        placeholder="skeleton"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <CardContent className="p-6 md:p-8 flex-1 bg-background dark:bg-gray-800 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-heading text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {project.year && (
                          <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            {project.year}
                          </Badge>
                        )}
                        {project.linkedin && (
                          <a 
                            href={project.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                            title="Ver en LinkedIn"
                          >
                            <Linkedin size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground dark:text-gray-300 mb-4 transition-colors duration-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={`${project.id}-tech-${index}`} 
                          variant="secondary"
                          className="badge-tech hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
    </TooltipProvider>
  );
}

export default Projects;
