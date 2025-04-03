import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Zap } from 'lucide-react';

type TimelineImage = {
  url: string;
  alt: string;
  link?: string;
  width?: number;
  height?: number;
};

type TimelineNode = {
  id: string;
  year: string;
  professional: {
    title: string;
    description: string;
    active: boolean;
    image?: TimelineImage;
    link?: string;
  };
  personal: {
    title: string;
    description: string;
    active: boolean;
    image?: TimelineImage;
    link?: string;
  };
  nodeType: 'primary' | 'secondary' | 'accent' | 'future';
};

const Timeline: React.FC = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const timelineNodes: TimelineNode[] = [
    {
      id: '2019',
      year: '2019',
      professional: {
        title: "Desarrollador Full Stack Senior en Inycom",
        description: "Comencé a trabajar como desarrollador Full Stack Senior en Inycom, enfocándome en proyectos web con TypeScript/Angular y Java.",
        active: true,
      },
      personal: {
        title: "Selenium FIFA",
        description: "Creación de un proyecto con Java y Selenium que automatizaba la compra y venta de jugadores en FIFA para obtener beneficios con la moneda virtual del juego.",
        active: true,
        link: "#project-seleniumfifa"
      },
      nodeType: 'primary',
    },
    {
      id: '2020',
      year: '2020',
      professional: {
        title: "Carnet Joven Islas Baleares",
        description: "Desarrollo completo de plataforma de usuario con Java 8 (Spring, Hibernate, JPA) y Angular 7, integrando servicios AWS como S3, SES, API Gateway y Lambda.",
        active: true,
        link: "#project-carnetjoven"
      },
      personal: {
        title: "Profundización en AWS",
        description: "Estudio y práctica con servicios de AWS como Lambda, EC2, RDS y S3 para mejorar mi comprensión de servicios cloud.",
        active: true,
      },
      nodeType: 'primary',
    },
    {
      id: '2021',
      year: '2021',
      professional: {
        title: "MainRail",
        description: "Comencé en MainRail realizando pruebas unitarias con Selenium, trabajando con PHP como backend y Polymer 2 como frontend, enfocado en el mantenimiento de ferrocarriles.",
        active: true,
        link: "#project-mainrail"
      },
      personal: {
        title: "Yeezy Scrapper",
        description: "Creación de un script de Python que verificaba precios de zapatillas en StockX usando AWS SAM.",
        active: true,
        image: {
          url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          alt: "Yeezy Scrapper Project",
          width: 80,
          height: 60
        },
        link: "#project-yeezyscrapper"
      },
      nodeType: 'primary',
    },
    {
      id: '2022',
      year: '2022',
      professional: {
        title: "MainRail - Migración y mejoras",
        description: "Migración de MainRail de Polymer 3 a Angular 11 y Lumen, optimización de consultas PostgreSQL y despliegue en AWS EC2 y RDS.",
        active: true,
        link: "#project-mainrail"
      },
      personal: {
        title: "Gym App - Inicio del desarrollo",
        description: "Comienzo del desarrollo de una aplicación web full-stack para gestión de gimnasios con Angular y Spring Boot.",
        active: true,
        link: "#project-gymapp"
      },
      nodeType: 'primary',
    },
    {
      id: '2023',
      year: '2023',
      professional: {
        title: "Morabanc",
        description: "Proyecto bancario en Angular 13 migrando desde AngularJS, optimizando el rendimiento.",
        active: true,
        link: "#project-morabanc"
      },
      personal: {
        title: "Gym App y Certificación AWS",
        description: "Continuación del desarrollo de Gym App, implementando funcionalidades. Obtención de la certificación AWS Certified Developer – Associate.",
        active: true,
        image: {
          url: "https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
          alt: "AWS Certified Developer Associate Badge",
          link: "https://www.credly.com/badges/6b6535e9-8cdb-4c79-b445-c48ee300aa15/linked_in?t=s5p476",
          width: 80,
          height: 80
        },
        link: "#project-gymapp"
      },
      nodeType: 'primary',
    },
    {
      id: '2024',
      year: '2024',
      professional: {
        title: "CLUN - API con Spring Boot 3",
        description: "Desarrollo desde cero de API con Spring Boot 3 y Java 21, con integraciones múltiples y documentación completa con Swagger.",
        active: true,
        link: "#project-clun"
      },
      personal: {
        title: "Vibe Coding y IA",
        description: "Descubrimiento y dominio del vibe coding, utilizando herramientas de IA avanzadas como Cursor, Windsurf, Claude y Ollama para revolucionar mi flujo de desarrollo y aumentar la productividad de manera exponencial.",
        active: true,
        image: {
          url: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          alt: "AI Tools for Development",
          width: 80,
          height: 80
        },
      },
      nodeType: 'accent',
    },
    {
      id: '2025',
      year: '2025',
      professional: {
        title: "Continuación de CLUN",
        description: "Mantenimiento y mejoras de la API de CLUN, añadiendo nuevas funcionalidades e integraciones.",
        active: true,
        link: "#project-clun"
      },
      personal: {
        title: "LolImprove y finalización de Gym App",
        description: "Desarrollo de LolImprove, aplicación para mejorar en League of Legends, y finalización de la aplicación Gym App.",
        active: true,
        image: {
          url: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          alt: "LolImprove Project",
          width: 80,
          height: 60
        },
        link: "#project-lolimprove"
      },
      nodeType: 'accent',
    },
    {
      id: 'future',
      year: '',
      professional: {
        title: "Arquitecto de Software",
        description: "Evolucionar al rol de arquitectura de software, liderando decisiones técnicas y diseñando soluciones escalables.",
        active: true,
      },
      personal: {
        title: "Startup Propia",
        description: "Desarrollar mi propia startup tecnológica, aplicando todo el conocimiento adquirido durante mi carrera.",
        active: true,
      },
      nodeType: 'future',
    },
  ];

  const getNodeColor = (type: string) => {
    const colors = {
      primary: {
        bg: 'bg-primary/10 text-primary',
        node: 'bg-primary text-primary-foreground',
        badge: 'bg-primary/10 text-primary',
      },
      secondary: {
        bg: 'bg-secondary/20 text-secondary',
        node: 'bg-secondary text-secondary-foreground',
        badge: 'bg-secondary/20 text-secondary',
      },
      accent: {
        bg: 'bg-accent/20 text-accent',
        node: 'bg-accent text-accent-foreground',
        badge: 'bg-accent/20 text-accent',
      },
      future: {
        bg: 'bg-card text-card-foreground',
        node: 'bg-gradient-to-r from-primary to-secondary text-primary-foreground',
        badge: 'bg-card text-card-foreground',
      }
    };
    
    return colors[type as keyof typeof colors] || colors.primary;
  };

  const handleNodeClick = (id: string, node: TimelineNode) => {
    setActiveNode(activeNode === id ? null : id);
    
    // If node has link in professional or personal, navigate to it
    const profLink = node.professional.link;
    const persLink = node.personal.link;
    
    if (profLink || persLink) {
      // Prioritize the link that exists, or if both exist, use the one that's active
      const linkToUse = profLink && persLink 
        ? (node.professional.active ? profLink : persLink)
        : (profLink || persLink);
      
      if (linkToUse && linkToUse.startsWith('#')) {
        // Get project ID from the link
        const projectId = linkToUse.substring(linkToUse.indexOf('-') + 1);
        
        // Determine which tab (personal or professional) this project belongs to
        // First check if the link contains explicit indicators
        let tabToActivate = '';
        
        // Check if link explicitly indicates tab
        if (linkToUse.includes('#project-')) {
          // These are manual mappings based on project IDs in the links
          const isPersonalProject = 
            projectId === 'yeezy' || 
            projectId === 'lolimprove' || 
            projectId === 'gym' || 
            projectId === 'aws' ||  // AWS certification is personal
            projectId === 'selenium';
          
          const isProfessionalProject = 
            projectId === 'mainrail' || 
            projectId === 'clun' || 
            projectId === 'carnet-joven' || 
            projectId === 'morabanc';
            
          if (isPersonalProject) {
            tabToActivate = 'personal';
          } else if (isProfessionalProject) {
            tabToActivate = 'professional';
          } else {
            // If no specific match, use the active section of the timeline node
            tabToActivate = node.professional.active ? 'professional' : 'personal';
          }
        } else {
          // Default fallback based on which link was used
          tabToActivate = (linkToUse === persLink) ? 'personal' : 'professional';
        }
        
        // Dispatch a custom event to change the tab
        document.dispatchEvent(new CustomEvent('switch-projects-tab', { 
          detail: { tab: tabToActivate }
        }));
        
        // Set location hash which will trigger Projects component's hash change handler
        setTimeout(() => {
          window.location.hash = linkToUse.substring(1);
          
          // Ensure the project element is scrolled into view
          setTimeout(() => {
            const targetElement = document.getElementById(linkToUse.substring(1));
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }, 50);
      }
    }
  };

  return (
    <section className="mb-12" id="timeline">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t('timeline')}</h2>
        <p className="text-muted-foreground max-w-3xl">
          {t('timelineDesc')}
        </p>
      </div>
      
      <div className="relative pb-16">
        {/* Main Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary transform md:translate-x-px shadow-md"></div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Nodes */}
          {timelineNodes.map((node) => {
            const colorScheme = getNodeColor(node.nodeType);
            
            return (
              <div 
                key={node.id}
                className="mb-12"
              >
                <div className="flex flex-col md:flex-row items-start">
                  {/* Left Side (Professional) - Visible only on md+ */}
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    <div className="mb-2 pb-8">
                      <Badge 
                        variant="outline"
                        className="font-medium"
                      >
                        {t('professional')}
                      </Badge>
                      <h3 className="text-lg font-medium mt-2">
                        {node.professional.link ? (
                          <a 
                            href={node.professional.link} 
                            className="hover:text-primary transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNodeClick(node.id, node);
                            }}
                          >
                            {node.professional.title}
                          </a>
                        ) : (
                          node.professional.title
                        )}
                      </h3>
                      
                      <div className="flex items-start gap-3 mt-1">
                        <p className="text-muted-foreground">
                          {node.professional.description}
                        </p>
                        {node.professional.image && (
                          <div className="flex justify-end ml-3 shrink-0">
                            {node.professional.image.link ? (
                              <a 
                                href={node.professional.image.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center"
                              >
                                <img 
                                  src={node.professional.image.url} 
                                  alt={node.professional.image.alt}
                                  className="rounded-md shadow-md transition-transform hover:scale-105"
                                  width={node.professional.image.width || 100}
                                  height={node.professional.image.height || 100}
                                />
                                <ExternalLink className="ml-1 h-4 w-4 text-muted-foreground" />
                              </a>
                            ) : (
                              <img 
                                src={node.professional.image.url} 
                                alt={node.professional.image.alt}
                                className="rounded-md shadow-md"
                                width={node.professional.image.width || 100}
                                height={node.professional.image.height || 100}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Node */}
                  <div className="md:absolute md:left-1/2 flex flex-col items-center transform md:-translate-x-1/2 z-10">
                    <button 
                      onClick={() => handleNodeClick(node.id, node)}
                      className={`${
                        node.id === 'future' ? 'w-10 h-10' : 'w-10 h-10'
                      } rounded-full ${colorScheme.node} flex items-center justify-center font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110 ${
                        activeNode === node.id ? 'ring-4 ring-primary ring-opacity-50' : ''
                      }`}
                    >
                      {node.id === 'future' ? (
                        <Zap className="h-6 w-6" />
                      ) : (
                        <span className="text-[10px] font-bold">{node.year}</span>
                      )}
                    </button>
                    <div className="h-16 w-1 bg-primary mt-1 shadow-sm"></div>
                  </div>
                  
                  {/* Right Side (Personal) */}
                  <div className="pl-10 md:pl-8 md:w-1/2 mt-2 md:mt-0">
                    <div className="mb-2 pb-8">
                      <Badge 
                        variant="secondary"
                        className="font-medium"
                      >
                        {node.id === 'future' ? t('motivation') : t('personal')}
                      </Badge>
                      <h3 className="text-lg font-medium mt-2">
                        {node.personal.link ? (
                          <a 
                            href={node.personal.link} 
                            className="hover:text-primary transition-colors"
                            onClick={(e) => {
                              if (node.personal.link?.startsWith('#')) {
                                e.preventDefault();
                                handleNodeClick(node.id, node);
                              }
                            }}
                          >
                            {node.personal.title}
                          </a>
                        ) : (
                          node.personal.title
                        )}
                      </h3>
                      
                      <div className="flex flex-row-reverse items-start gap-3 mt-1">
                        {node.personal.image && (
                          <div className="flex shrink-0 mt-1 ml-3">
                            {node.personal.image.link ? (
                              <a 
                                href={node.personal.image.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center"
                              >
                                <img 
                                  src={node.personal.image.url} 
                                  alt={node.personal.image.alt}
                                  className="rounded-md shadow-md transition-transform hover:scale-105"
                                  width={node.personal.image.width || 100}
                                  height={node.personal.image.height || 100}
                                />
                                <ExternalLink className="ml-1 h-4 w-4 text-muted-foreground" />
                              </a>
                            ) : node.personal.link ? (
                              <a 
                                href={node.personal.link}
                                className="inline-flex items-center cursor-pointer"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNodeClick(node.id, node);
                                }}
                              >
                                <img 
                                  src={node.personal.image.url} 
                                  alt={node.personal.image.alt}
                                  className="rounded-md shadow-md transition-transform hover:scale-105 ring-2 ring-transparent hover:ring-primary"
                                  width={node.personal.image.width || 100}
                                  height={node.personal.image.height || 100}
                                />
                              </a>
                            ) : (
                              <img 
                                src={node.personal.image.url} 
                                alt={node.personal.image.alt}
                                className="rounded-md shadow-md"
                                width={node.personal.image.width || 100}
                                height={node.personal.image.height || 100}
                              />
                            )}
                          </div>
                        )}
                        <p className="text-muted-foreground">
                          {node.personal.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
