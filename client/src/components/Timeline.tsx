import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Badge } from '@/components/ui/badge';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, Star, Zap, ExternalLink } from 'lucide-react';

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

function Timeline() {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const timelineData: TimelineNode[] = [
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
          url: "/images/timeline-yeezyscrapper.png",
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
          url: "/images/timeline-aws-cert.png",
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
          url: "/images/timeline-vibe-coding.png",
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
          url: "/images/timeline-lolimprove.png",
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
      year: 'Futuro',
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

  // Función para manejar el clic en un elemento de timeline
  const handleElementClick = (node: TimelineNode, type: 'professional' | 'personal') => {
    const link = type === 'professional' ? node.professional.link : node.personal.link;
    
    if (link && link.startsWith('#')) {
      // Obtener el ID del proyecto desde el enlace
      const projectId = link.substring(link.indexOf('-') + 1);
      
      // Determinar qué pestaña activar
      const tabToActivate = type;
      
      // Crear y lanzar un evento personalizado para cambiar la pestaña
      const switchEvent = new CustomEvent('switch-projects-tab', { 
        detail: { 
          tab: tabToActivate,
          keepHash: true, // Indicar que queremos mantener el hash para este evento
          projectId: projectId
        }
      });
      document.dispatchEvent(switchEvent);
      
      // En lugar de establecer el hash directamente (que causa un salto instantáneo),
      // primero hacemos scroll y luego actualizamos el hash
      setTimeout(() => {
        // Obtener el elemento antes de cambiar el hash
        const targetElementId = `project-${projectId}`;
        const targetElement = document.getElementById(targetElementId);
        
        if (targetElement) {
          // Hacer scroll suavemente primero
          targetElement.scrollIntoView({ behavior: 'smooth' });
          
          // Después del scroll, actualizar el hash sin causar otro salto
          setTimeout(() => {
            // Usar history.replaceState para actualizar la URL sin causar salto
            history.replaceState(null, '', link);
            
            // Añadir clase de destacado
            targetElement.classList.add('highlighted-card');
            
            // Remover la clase después de 3 segundos
            setTimeout(() => {
              targetElement.classList.remove('highlighted-card');
            }, 3000);
          }, 800); // Esperar a que termine la animación de scroll
        } else {
          // Si no encontramos el elemento, simplemente actualizamos el hash como fallback
          window.location.hash = link.substring(1);
        }
      }, 100);
    }
  };

  // Colores para los diferentes tipos de nodos
  const getNodeStyles = (nodeType: string, isProfessional: boolean) => {
    const colors = {
      primary: {
        professional: {
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.9) 0%, rgba(79, 70, 229, 1) 100%)',
          border: 'rgba(99, 102, 241, 0.5)',
          icon: '#fff',
        },
        personal: {
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.9) 0%, rgba(59, 130, 246, 1) 100%)',
          border: 'rgba(59, 130, 246, 0.5)',
          icon: '#fff',
        }
      },
      secondary: {
        professional: {
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.9) 0%, rgba(79, 70, 229, 1) 100%)',
          border: 'rgba(99, 102, 241, 0.5)',
          icon: '#fff',
        },
        personal: {
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.9) 0%, rgba(59, 130, 246, 1) 100%)',
          border: 'rgba(59, 130, 246, 0.5)',
          icon: '#fff',
        }
      },
      accent: {
        professional: {
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.9) 0%, rgba(124, 58, 237, 1) 100%)',
          border: 'rgba(139, 92, 246, 0.5)',
          icon: '#fff',
        },
        personal: {
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.9) 0%, rgba(29, 78, 216, 1) 100%)',
          border: 'rgba(29, 78, 216, 0.5)',
          icon: '#fff',
        }
      },
      future: {
        professional: {
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.9) 0%, rgba(14, 165, 233, 1) 100%)',
          border: 'rgba(14, 165, 233, 0.5)',
          icon: '#fff',
        },
        personal: {
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.9) 0%, rgba(14, 165, 233, 1) 100%)',
          border: 'rgba(14, 165, 233, 0.5)',
          icon: '#fff',
        }
      }
    };
    
    const type = nodeType as keyof typeof colors;
    return isProfessional 
      ? colors[type]?.professional || colors.primary.professional 
      : colors[type]?.personal || colors.primary.personal;
  };

  // Crear una lista ordenada de elementos de timeline por año
  const timelineElements = timelineData.map(node => (
    <React.Fragment key={node.id}>
      {/* Elemento profesional (izquierda) */}
      <VerticalTimelineElement
        key={`professional-${node.id}`}
        className="vertical-timeline-element--work hover:timeline-element"
        date={node.year}
        position="left"
        dateClassName="font-medium text-gray-600 dark:text-gray-300"
        contentStyle={{
          background: isDarkMode ? 'rgba(31, 41, 55, 0.8)' : 'white',
          color: isDarkMode ? '#e5e7eb' : '#4b5563',
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '0.75rem',
          border: isDarkMode 
            ? '1px solid rgba(75, 85, 99, 0.2)' 
            : '1px solid rgba(99, 102, 241, 0.5)',
          transition: 'all 0.3s ease-in-out',
        }}
        contentArrowStyle={{ 
          borderRight: `7px solid ${isDarkMode ? 'rgba(31, 41, 55, 0.8)' : 'white'}`,
        }}
        iconStyle={{ 
          background: getNodeStyles(node.nodeType, true).background, 
          color: getNodeStyles(node.nodeType, true).icon, 
          boxShadow: `0 0 0 4px ${getNodeStyles(node.nodeType, true).border}`,
          fontSize: '1rem',
          transition: 'transform 0.3s ease-in-out',
        }}
        icon={node.id === 'future' ? <Zap size={20} /> : <Briefcase size={20} />}
        onTimelineElementClick={() => handleElementClick(node, 'professional')}
      >
        <Badge className="mb-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0" variant="outline">{t('professional')}</Badge>
        <h3 className="vertical-timeline-element-title text-lg font-semibold mb-1 text-foreground dark:text-white">
          {node.professional.title}
        </h3>
        <p className="text-muted-foreground dark:text-gray-300">
          {node.professional.description}
        </p>
        {node.professional.image && (
          <div className="mt-3 flex justify-center">
            <a 
              href={node.professional.image.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <div className="overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 shadow-md">
                <img 
                  src={node.professional.image.url} 
                  alt={node.professional.image.alt}
                  className="transition-transform group-hover:scale-105 duration-200"
                  width={node.professional.image.width || 80}
                  height={node.professional.image.height || 60}
                />
              </div>
            </a>
          </div>
        )}
      </VerticalTimelineElement>

      {/* Elemento personal (derecha) */}
      <VerticalTimelineElement
        key={`personal-${node.id}`}
        className="vertical-timeline-element--education hover:timeline-element"
        date={node.year}
        position="right"
        dateClassName="font-medium text-gray-600 dark:text-gray-300"
        contentStyle={{
          background: isDarkMode ? 'rgba(31, 41, 55, 0.8)' : 'white',
          color: isDarkMode ? '#e5e7eb' : '#4b5563',
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '0.75rem',
          border: isDarkMode 
            ? '1px solid rgba(75, 85, 99, 0.2)' 
            : '1px solid rgba(59, 130, 246, 0.5)',
          transition: 'all 0.3s ease-in-out',
        }}
        contentArrowStyle={{ 
          borderRight: `7px solid ${isDarkMode ? 'rgba(31, 41, 55, 0.8)' : 'white'}`,
        }}
        iconStyle={{ 
          background: getNodeStyles(node.nodeType, false).background, 
          color: getNodeStyles(node.nodeType, false).icon, 
          boxShadow: `0 0 0 4px ${getNodeStyles(node.nodeType, false).border}`,
          fontSize: '1rem',
          transition: 'transform 0.3s ease-in-out',
        }}
        icon={node.id === 'future' ? <Star size={20} /> : <GraduationCap size={20} />}
        onTimelineElementClick={() => handleElementClick(node, 'personal')}
      >
        <Badge className={`mb-2 ${node.id === 'future' ? 'bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600' : 'bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700'} text-white border-0`} variant={node.id === 'future' ? 'default' : 'secondary'}>
          {node.id === 'future' ? t('motivation') : t('personal')}
        </Badge>
        <h3 className="vertical-timeline-element-title text-lg font-semibold mb-1 text-foreground dark:text-white">
          {node.personal.title}
        </h3>
        <p className="text-muted-foreground dark:text-gray-300">
          {node.personal.description}
        </p>
        {node.personal.image && (
          <div className="mt-3 flex justify-center">
            <a 
              href={node.personal.image.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <div className="overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 shadow-md">
                <img 
                  src={node.personal.image.url} 
                  alt={node.personal.image.alt}
                  className="transition-transform group-hover:scale-105 duration-200"
                  width={node.personal.image.width || 80}
                  height={node.personal.image.height || 60}
                />
              </div>
            </a>
          </div>
        )}
      </VerticalTimelineElement>
    </React.Fragment>
  ));

  return (
    <section className="relative mb-16" id="timeline">
      {/* Background blob effect */}
      <div className="blob-effect w-96 h-96 opacity-30 left-[-10%] top-[30%]"></div>
      
      <div className="section-container">
        <div className="mb-8 relative z-10">
          <h2 className="section-title">{t('timeline')}</h2>
          <p className="text-muted-foreground dark:text-gray-400 transition-colors duration-300">
            {t('timelineDesc')}
          </p>
        </div>
        
        {/* Estilos CSS para efectos hover */}
        <style dangerouslySetInnerHTML={{ __html: `
          .vertical-timeline-element--work .vertical-timeline-element-content:hover,
          .vertical-timeline-element--education .vertical-timeline-element-content:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
          
          .vertical-timeline-element--work:hover .vertical-timeline-element-icon,
          .vertical-timeline-element--education:hover .vertical-timeline-element-icon {
            transform: scale(1.15);
          }
          
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
        
        <VerticalTimeline animate={true} lineColor={isDarkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(229, 231, 235, 0.7)'}>
          {timelineElements}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
