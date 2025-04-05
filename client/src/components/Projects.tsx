import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
      title: 'Gym App',
      description: 'Aplicación web full-stack para gestión de gimnasios desarrollada con Angular 19 y Spring Boot (Java), implementando una arquitectura moderna con CI/CD en AWS (CodeBuild, CodeDeploy), base de datos NoSQL DynamoDB y siguiendo las mejores prácticas de desarrollo ágil. La aplicación ofrece gestión de rutinas de ejercicios, planes de dieta personalizados y seguimiento de progreso, utilizando Material Design para una interfaz moderna y responsive, con un backend robusto que implementa seguridad JWT, patrones de diseño empresariales y aprovecha la escalabilidad y rendimiento de DynamoDB para el almacenamiento de datos.',
      type: 'personal',
      year: '2022-2025',
      image: '/images/project-gymapp.png',
      technologies: ['Angular 19', 'Spring Boot', 'AWS', 'DynamoDB', 'CI/CD', 'JWT', 'Material Design'],
      url: '#'
    },
    {
      id: 'lolimprove',
      title: 'LolImprove',
      description: 'Como apasionado jugador de League of Legends, desarrollé como hobby una aplicación full-stack utilizando React, TypeScript, FastAPI y SQLAlchemy para mejorar mi experiencia de juego. Mi proyecto incluye gestión de tutoriales en video, análisis de mis sesiones y organización personalizada de campeones con una interfaz que me permite visualizar mi progreso y establecer objetivos adaptados a mi estilo de juego.',
      type: 'personal',
      year: '2025',
      image: '/images/project-lolimprove.png',
      technologies: ['React', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'Python'],
      url: '#'
    },
    {
      id: 'yeezyscrapper',
      title: 'Yeezy Scrapper',
      description: 'Creación de un script de python que verificaba el precio de unas zapatillas en stockx, utilizando SAM de AWS.',
      type: 'personal',
      year: '2021',
      image: '/images/project-yeezyscrapper.png',
      technologies: ['Python', 'AWS SAM', 'Web Scraping'],
      github: 'https://github.com/yourusername/yeezy-scrapper'
    },
    {
      id: 'seleniumfifa',
      title: 'Selenium FIFA',
      description: 'Creación de un proyecto con Java y Selenium que se dedicaba a hacer clicks y simulaba el uso de un humano a la hora de comprar/vender jugadores del FIFA, de esta manera sacaba beneficios con la moneda virtual del juego.',
      type: 'personal',
      year: '2019',
      image: '/images/project-seleniumfifa.png',
      technologies: ['Java', 'Selenium', 'Automation'],
      github: 'https://github.com/yourusername/selenium-fifa'
    },
    
    // Professional Projects
    {
      id: 'mainrail',
      title: 'MainRail',
      description: 'Comencé en MainRail realizando pruebas unitarias con Selenium, probando funcionalidades como resultado del conocimiento adquirido de la aplicación. Inicialmente desarrollado en PHP puro como backend y Polymer 2 como frontend. Se trataba de un proyecto innovador para el mantenimiento de ferrocarriles con diferentes módulos. Durante los primeros 6 meses de este proyecto, se llevó a cabo una migración de Polymer 2 a Polymer 3. Una vez migrado, nos encontramos en un proceso de estabilización del proyecto, ya que presentaba muchos errores/fallas hasta que finalmente fue operativo para su implementación/venta. Posteriormente, el proyecto se convirtió en una \'productivización\' en la que surgieron nuevos desarrollos en busca de funcionalidades adicionales que el cliente solicitaba, como mejoras en el propio producto. Terminé mejorando la aplicación a Angular 11 y Lumen, siendo utilizada por más de 5 clientes. Durante el proceso, realicé un análisis de posibles mejoras que Angular tendría en comparación con Polymer, actualizando consultas complejas en PostgreSQL que estaban escalando con el tiempo. También adquirí experiencia en servicios de AWS, implementando cada proyecto en instancias EC2 y bases de datos RDS.',
      type: 'professional',
      year: '2020-2023',
      image: '/images/project-mainrail.png',
      technologies: ['PHP', 'Polymer 2/3', 'Angular 11', 'Lumen', 'PostgreSQL', 'AWS EC2', 'RDS', 'Selenium'],
      linkedin: 'https://www.linkedin.com/in/your-linkedin-profile/'
    },
    {
      id: 'morabanc',
      title: 'Morabanc',
      description: 'Proyecto enfocado en el sector bancario, desarrollado en Angular 13. La tarea consiste en replicar las funcionalidades de la antigua plataforma web en AngularJS en una nueva tecnología como Angular 13, analizando cuál podría ser la mejor manera de hacer que este proyecto funcione, teniendo en cuenta principalmente el rendimiento.',
      type: 'professional',
      year: '2023-2024',
      image: '/images/project-morabanc.png',
      technologies: ['Angular 13', 'TypeScript', 'AngularJS', 'Performance Optimization', 'Migration'],
      linkedin: 'https://www.linkedin.com/in/your-linkedin-profile/'
    },
    {
      id: 'carnetjoven',
      title: 'Carnet Joven Islas Baleares',
      description: 'Creation from 0 of an user platform, developed in Java 8 using (Spring, Hibernate, JPA, Maven) as part of the back and a front end developed in Angular 7, the project was based on user management/validation to later be sent via CSV files to an integration with a bank for card generation, it also includes PDF generation with complex queries using JasperReports for report generation. Due to the communications with the applications, some APIs were developed in AWS using: S3, SES, API Gateway, Lambda functions. Deployed in Tomcat and using MySQL as database. At present it continues to be maintained by me in possible incidents that occur with users.',
      type: 'professional',
      year: '2019-2021',
      image: '/images/project-carnetjoven.png',
      technologies: ['Java 8', 'Spring', 'Hibernate', 'Angular 7', 'AWS', 'JasperReports', 'MySQL', 'Tomcat'],
      linkedin: 'https://www.linkedin.com/in/your-linkedin-profile/'
    },
    {
      id: 'clun',
      title: 'CLUN',
      description: 'Inicio de 0 de una API usando Spring Boot 3 y Java 21, mantenida y desarrollada en su totalidad por mi, con varias integraciones con plataformas del cliente, asi como enriquecer usuarios de aplicacion movil y web, API con documentacion y testing de endpoints en swagger.',
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
          setActiveTab(project.type);
          setTimeout(() => {
            const element = document.getElementById(hash.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };
    
    // Handle the custom tab switch event from Timeline
    const handleTabSwitch = (event: CustomEvent) => {
      if (event.detail && event.detail.tab) {
        setActiveTab(event.detail.tab);
      }
    };
    
    // Check on mount and when hash changes
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('switch-projects-tab', handleTabSwitch as EventListener);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('switch-projects-tab', handleTabSwitch as EventListener);
    };
  }, [projects]);

  return (
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
        
        <Tabs defaultValue={activeTab} value={activeTab} className="w-full" onValueChange={setActiveTab}>
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
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
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
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                            title="Ver sitio web"
                          >
                            <Globe size={18} />
                          </a>
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
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
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
  );
}

export default Projects;
