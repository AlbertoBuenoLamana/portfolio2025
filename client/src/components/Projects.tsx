import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Project = {
  id: string;
  title: string;
  description: string;
  type: 'professional' | 'personal';
  image: string;
  technologies: string[];
  year?: string;
};

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<string>('personal');

  const projects: Project[] = [
    // Personal Projects
    {
      id: 'gymapp',
      title: 'Gym App',
      description: 'Aplicación web full-stack para gestión de gimnasios desarrollada con Angular 19 y Spring Boot (Java), implementando una arquitectura moderna con CI/CD en AWS (CodeBuild, CodeDeploy), base de datos NoSQL DynamoDB y siguiendo las mejores prácticas de desarrollo ágil. La aplicación ofrece gestión de rutinas de ejercicios, planes de dieta personalizados y seguimiento de progreso, utilizando Material Design para una interfaz moderna y responsive, con un backend robusto que implementa seguridad JWT, patrones de diseño empresariales y aprovecha la escalabilidad y rendimiento de DynamoDB para el almacenamiento de datos.',
      type: 'personal',
      year: '2022-2025',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Angular 19', 'Spring Boot', 'AWS', 'DynamoDB', 'CI/CD', 'JWT', 'Material Design']
    },
    {
      id: 'lolimprove',
      title: 'LolImprove',
      description: 'Como apasionado jugador de League of Legends, desarrollé como hobby una aplicación full-stack utilizando React, TypeScript, FastAPI y SQLAlchemy para mejorar mi experiencia de juego. Mi proyecto incluye gestión de tutoriales en video, análisis de mis sesiones y organización personalizada de campeones con una interfaz que me permite visualizar mi progreso y establecer objetivos adaptados a mi estilo de juego.',
      type: 'personal',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'Python']
    },
    {
      id: 'yeezyscrapper',
      title: 'Yeezy Scrapper',
      description: 'Creación de un script de python que verificaba el precio de unas zapatillas en stockx, utilizando SAM de AWS.',
      type: 'personal',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'AWS SAM', 'Web Scraping']
    },
    {
      id: 'seleniumfifa',
      title: 'Selenium FIFA',
      description: 'Creación de un proyecto con Java y Selenium que se dedicaba a hacer clicks y simulaba el uso de un humano a la hora de comprar/vender jugadores del FIFA, de esta manera sacaba beneficios con la moneda virtual del juego.',
      type: 'personal',
      year: '2019',
      image: 'https://images.unsplash.com/photo-1551958219-e5137b648775?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Java', 'Selenium', 'Automation']
    },
    
    // Professional Projects
    {
      id: 'mainrail',
      title: 'MainRail',
      description: 'Comencé en MainRail realizando pruebas unitarias con Selenium, probando funcionalidades como resultado del conocimiento adquirido de la aplicación. Inicialmente desarrollado en PHP puro como backend y Polymer 2 como frontend. Se trataba de un proyecto innovador para el mantenimiento de ferrocarriles con diferentes módulos. Durante los primeros 6 meses de este proyecto, se llevó a cabo una migración de Polymer 2 a Polymer 3. Una vez migrado, nos encontramos en un proceso de estabilización del proyecto, ya que presentaba muchos errores/fallas hasta que finalmente fue operativo para su implementación/venta. Posteriormente, el proyecto se convirtió en una \'productivización\' en la que surgieron nuevos desarrollos en busca de funcionalidades adicionales que el cliente solicitaba, como mejoras en el propio producto. Terminé mejorando la aplicación a Angular 11 y Lumen, siendo utilizada por más de 5 clientes. Durante el proceso, realicé un análisis de posibles mejoras que Angular tendría en comparación con Polymer, actualizando consultas complejas en PostgreSQL que estaban escalando con el tiempo. También adquirí experiencia en servicios de AWS, implementando cada proyecto en instancias EC2 y bases de datos RDS.',
      type: 'professional',
      year: '2020-2023',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['PHP', 'Polymer 2/3', 'Angular 11', 'Lumen', 'PostgreSQL', 'AWS EC2', 'RDS', 'Selenium']
    },
    {
      id: 'morabanc',
      title: 'Morabanc',
      description: 'Proyecto enfocado en el sector bancario, desarrollado en Angular 13. La tarea consiste en replicar las funcionalidades de la antigua plataforma web en AngularJS en una nueva tecnología como Angular 13, analizando cuál podría ser la mejor manera de hacer que este proyecto funcione, teniendo en cuenta principalmente el rendimiento.',
      type: 'professional',
      year: '2023-2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Angular 13', 'TypeScript', 'AngularJS', 'Performance Optimization', 'Migration']
    },
    {
      id: 'carnetjoven',
      title: 'Carnet Joven Islas Baleares',
      description: 'Creation from 0 of an user platform, developed in Java 8 using (Spring, Hibernate, JPA, Maven) as part of the back and a front end developed in Angular 7, the project was based on user management/validation to later be sent via CSV files to an integration with a bank for card generation, it also includes PDF generation with complex queries using JasperReports for report generation. Due to the communications with the applications, some APIs were developed in AWS using: S3, SES, API Gateway, Lambda functions. Deployed in Tomcat and using MySQL as database. At present it continues to be maintained by me in possible incidents that occur with users.',
      type: 'professional',
      year: '2019-2021',
      image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Java 8', 'Spring', 'Hibernate', 'Angular 7', 'AWS', 'JasperReports', 'MySQL', 'Tomcat']
    },
    {
      id: 'clun',
      title: 'CLUN',
      description: 'Inicio de 0 de una API usando Spring Boot 3 y Java 21, mantenida y desarrollada en su totalidad por mi, con varias integraciones con plataformas del cliente, asi como enriquecer usuarios de aplicacion movil y web, API con documentacion y testing de endpoints en swagger.',
      type: 'professional',
      year: '2024-2025',
      image: 'https://images.unsplash.com/photo-1633269540827-728e7d5a2420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Spring Boot 3', 'Java 21', 'REST API', 'Swagger', 'Integration']
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
  React.useEffect(() => {
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
    
    // Check on mount and when hash changes
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [projects]);

  return (
    <section className="mb-12" id="projects">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t('projects')}</h2>
        <p className="text-muted-foreground max-w-3xl">
          {t('projectsDesc')}
        </p>
      </div>
      
      <Tabs defaultValue="personal" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-6 grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="personal">{t('personal')}</TabsTrigger>
          <TabsTrigger value="professional">{t('professional')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedPersonalProjects.map((project) => (
              <Card 
                key={project.id}
                id={`project-${project.id}`}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-200 scroll-mt-24"
              >
                <div className="h-48 bg-muted">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.year && (
                      <Badge variant="outline" className="ml-2">
                        {project.year}
                      </Badge>
                    )}
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
        </TabsContent>
        
        <TabsContent value="professional" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedProfessionalProjects.map((project) => (
              <Card 
                key={project.id}
                id={`project-${project.id}`}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-200 scroll-mt-24"
              >
                <div className="h-48 bg-muted">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.year && (
                      <Badge variant="secondary" className="ml-2">
                        {project.year}
                      </Badge>
                    )}
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
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Projects;
