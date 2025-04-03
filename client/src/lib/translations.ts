export type Language = 'es' | 'en';

type TranslationKeys = {
  // Header
  pageTitle: string;
  contact: string;
  
  // Timeline
  timeline: string;
  timelineDesc: string;
  professional: string;
  personal: string;
  goals: string;
  motivation: string;
  
  // Timeline Nodes
  node2019Prof: string;
  node2019ProfDesc: string;
  node2019Pers: string;
  node2019PersDesc: string;
  
  node2020Prof: string;
  node2020ProfDesc: string;
  node2020Pers: string;
  node2020PersDesc: string;
  
  node2021Prof: string;
  node2021ProfDesc: string;
  node2021Pers: string;
  node2021PersDesc: string;
  
  node2022Prof: string;
  node2022ProfDesc: string;
  node2022Pers: string;
  node2022PersDesc: string;
  
  node2023Prof: string;
  node2023ProfDesc: string;
  node2023Pers: string;
  node2023PersDesc: string;
  
  node2024Prof: string;
  node2024ProfDesc: string;
  node2024Pers: string;
  node2024PersDesc: string;
  
  node2025Prof: string;
  node2025ProfDesc: string;
  node2025Pers: string;
  node2025PersDesc: string;
  
  nodeFutureProf: string;
  nodeFutureProfDesc: string;
  nodeFutureMot: string;
  nodeFutureMotDesc: string;
  
  // Skills
  skills: string;
  skillsDesc: string;
  frontend: string;
  backend: string;
  tools: string;
  design: string;
  mobileDev: string;
  softSkills: string;
  
  // Projects
  projects: string;
  projectsDesc: string;
  viewDetails: string;
  
  project1Title: string;
  project1Desc: string;
  
  project2Title: string;
  project2Desc: string;
  
  project3Title: string;
  project3Desc: string;
  
  project4Title: string;
  project4Desc: string;
  
  // Goals
  goalsSection: string;
  goalsDesc: string;
  profGoals: string;
  persMotivations: string;
  currentTech: string;
  currentTechDesc: string;
  
  modernFrontend: string;
  backendCloud: string;
  areasOfInterest: string;
  
  // Professional Goals List
  profGoal1: string;
  profGoal2: string;
  profGoal3: string;
  profGoal4: string;
  
  // Personal Motivations List
  persMot1: string;
  persMot2: string;
  persMot3: string;
  persMot4: string;
  
  // Footer
  copyright: string;
};

export const translations: Record<Language, TranslationKeys> = {
  es: {
    // Header
    pageTitle: 'Alberto Bueno Lamana',
    contact: 'Contacto',
    
    // Timeline
    timeline: 'Trayectoria Profesional',
    timelineDesc: 'Mi recorrido profesional desde 2019 hasta la actualidad, con un vistazo hacia el futuro.',
    professional: 'Profesional',
    personal: 'Personal',
    goals: 'Objetivos',
    motivation: 'Motivación',
    
    // Timeline Nodes
    node2019Prof: 'Grado Superior DAW',
    node2019ProfDesc: 'Desarrollo de Aplicaciones Web en IES Santiago Hernández',
    node2019Pers: 'Selenium Fifa',
    node2019PersDesc: 'Proyecto con Java y Selenium para automatizar compra/venta de jugadores en FIFA',
    
    node2020Prof: 'Desarrollador Full Stack en Inycom',
    node2020ProfDesc: 'Migración de Polymer 2 a Polymer 3 en proyecto MainRail',
    node2020Pers: 'MainRail',
    node2020PersDesc: 'Pruebas unitarias con Selenium y desarrollo del aplicativo para mantenimiento de ferrocarriles',
    
    node2021Prof: 'Carnet Joven Islas Baleares',
    node2021ProfDesc: 'Desarrollo de plataforma en Java 8 y Angular 7 para gestión de usuarios',
    node2021Pers: 'Yeezy Scrapper',
    node2021PersDesc: 'Script de Python para verificar precios de zapatillas en StockX utilizando AWS SAM',
    
    node2022Prof: 'Continuación en Inycom',
    node2022ProfDesc: 'Mantenimiento de productos y desarrollo de proyectos en Angular y Java',
    node2022Pers: 'Inicio de Gym App',
    node2022PersDesc: 'Comienzo del desarrollo de aplicación web para gestión de gimnasios con Angular y Spring Boot',
    
    node2023Prof: 'AWS Certified Developer',
    node2023ProfDesc: 'Certificación como AWS Developer Associate y proyecto Morabanc en Angular 13',
    node2023Pers: 'Avance en Gym App',
    node2023PersDesc: 'Implementación de CI/CD en AWS y uso de DynamoDB para la aplicación de gimnasios',
    
    node2024Prof: 'Proyecto CLUN',
    node2024ProfDesc: 'Desarrollo de API con Spring Boot 3 y Java 21 con integraciones',
    node2024Pers: 'Vibe Coding',
    node2024PersDesc: 'Uso de herramientas de IA como Cursor, Windsurf, Claude y Ollama para desarrollo',
    
    node2025Prof: 'Especialización Cloud',
    node2025ProfDesc: 'Objetivo: Profundizar en servicios cloud y arquitecturas escalables',
    node2025Pers: 'LolImprove',
    node2025PersDesc: 'Aplicación full-stack con React, TypeScript, FastAPI y SQLAlchemy para mejorar en League of Legends',
    
    nodeFutureProf: 'Visión Profesional',
    nodeFutureProfDesc: 'Arquitectura de sistemas cloud y desarrollo full-stack a gran escala',
    nodeFutureMot: 'Tecnologías Actuales',
    nodeFutureMotDesc: 'Angular, Spring Boot, AWS, AI Coding Assistants, TypeScript, Python',
    
    // Skills
    skills: 'Habilidades',
    skillsDesc: 'Tecnologías y herramientas que he aprendido a lo largo de mi carrera.',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Herramientas',
    design: 'Diseño',
    mobileDev: 'Cloud',
    softSkills: 'Bases de Datos',
    
    // Projects
    projects: 'Proyectos Destacados',
    projectsDesc: 'Una selección de proyectos profesionales y personales en los que he trabajado.',
    viewDetails: 'Ver detalles',
    
    project1Title: 'MainRail (2020-2023)',
    project1Desc: 'Proyecto para mantenimiento de ferrocarriles. Migración de Polymer 2 a Polymer 3 y posteriormente trabajo en PHP y Polymer.',
    
    project2Title: 'Morabanc (2023-2024)',
    project2Desc: 'Proyecto bancario en Angular 13. Migración desde AngularJS con foco en rendimiento y usabilidad.',
    
    project3Title: 'Carnet Joven Islas Baleares (2019-2021)',
    project3Desc: 'Plataforma de gestión de usuarios con Java 8, Spring, Hibernate, Angular 7 e integraciones AWS.',
    
    project4Title: 'Gym App (2022-2025)',
    project4Desc: 'Aplicación para gestión de gimnasios con Angular, Spring Boot, AWS y DynamoDB.',
    
    // Goals
    goalsSection: 'Objetivos y Motivación',
    goalsDesc: 'Mis aspiraciones profesionales y lo que me motiva en el desarrollo de software.',
    profGoals: 'Objetivos Profesionales',
    persMotivations: 'Motivaciones Personales',
    currentTech: 'Tecnologías Actuales',
    currentTechDesc: 'En 2024 he iniciado mi viaje en Vibe Coding, utilizando herramientas de IA como Ollama, n8n para automatización de flujos de trabajo y diversas herramientas de codificación asistida por IA para mejorar mi productividad de desarrollo.',
    
    modernFrontend: 'Angular & TypeScript',
    backendCloud: 'Spring Boot & AWS',
    areasOfInterest: 'AI Coding & Automatización',
    
    // Professional Goals List
    profGoal1: 'Expandir mi experiencia en servicios cloud de AWS.',
    profGoal2: 'Profundizar en arquitecturas de software escalables.',
    profGoal3: 'Profundizar en el desarrollo de soluciones innovadoras con inteligencia artificial.',
    profGoal4: 'Implementar sistemas robustos con CI/CD y microservicios.',
    
    // Personal Motivations List
    persMot1: 'Completar proyectos personales como Gym App y LolImprove.',
    persMot2: 'Continuar explorando la integración de LLMs con desarrollo.',
    persMot3: 'Optimizar flujos de trabajo con automatización y AI coding.',
    persMot4: 'Especializarme en Vibe Coding, integrando desarrollo con IA y automatización para mejorar procesos.',
    
    // Footer
    copyright: '© 2024 Alberto Bueno Lamana'
  },
  en: {
    // Header
    pageTitle: 'Alberto Bueno Lamana',
    contact: 'Contact',
    
    // Timeline
    timeline: 'Professional Journey',
    timelineDesc: 'My professional journey from 2019 to present, with a look toward the future.',
    professional: 'Professional',
    personal: 'Personal',
    goals: 'Goals',
    motivation: 'Motivation',
    
    // Timeline Nodes
    node2019Prof: 'Higher Degree in Web Development',
    node2019ProfDesc: 'Web Application Development at IES Santiago Hernández',
    node2019Pers: 'Selenium Fifa',
    node2019PersDesc: 'Java and Selenium project to automate FIFA player trading',
    
    node2020Prof: 'Full Stack Developer at Inycom',
    node2020ProfDesc: 'Migration from Polymer 2 to Polymer 3 in MainRail project',
    node2020Pers: 'MainRail',
    node2020PersDesc: 'Unit testing with Selenium and development of railway maintenance application',
    
    node2021Prof: 'Balearic Islands Youth Card',
    node2021ProfDesc: 'Platform development with Java 8 and Angular 7 for user management',
    node2021Pers: 'Yeezy Scrapper',
    node2021PersDesc: 'Python script to check sneaker prices on StockX using AWS SAM',
    
    node2022Prof: 'Continued at Inycom',
    node2022ProfDesc: 'Product maintenance and project development with Angular and Java',
    node2022Pers: 'Started Gym App',
    node2022PersDesc: 'Beginning development of gym management web application with Angular and Spring Boot',
    
    node2023Prof: 'AWS Certified Developer',
    node2023ProfDesc: 'AWS Developer Associate certification and Morabanc project with Angular 13',
    node2023Pers: 'Gym App Progress',
    node2023PersDesc: 'Implementation of CI/CD in AWS and DynamoDB for the gym application',
    
    node2024Prof: 'CLUN Project',
    node2024ProfDesc: 'API development with Spring Boot 3 and Java 21 with integrations',
    node2024Pers: 'Vibe Coding',
    node2024PersDesc: 'Using AI tools like Cursor, Windsurf, Claude and Ollama for development',
    
    node2025Prof: 'Cloud Specialization',
    node2025ProfDesc: 'Goal: Deepen knowledge in cloud services and scalable architectures',
    node2025Pers: 'LolImprove',
    node2025PersDesc: 'Full-stack app with React, TypeScript, FastAPI and SQLAlchemy to improve at League of Legends',
    
    nodeFutureProf: 'Professional Vision',
    nodeFutureProfDesc: 'Cloud system architecture and large-scale full-stack development',
    nodeFutureMot: 'Current Technologies',
    nodeFutureMotDesc: 'Angular, Spring Boot, AWS, AI Coding Assistants, TypeScript, Python',
    
    // Skills
    skills: 'Skills',
    skillsDesc: 'Technologies and tools I have learned throughout my career.',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',
    design: 'Design',
    mobileDev: 'Cloud',
    softSkills: 'Databases',
    
    // Projects
    projects: 'Featured Projects',
    projectsDesc: 'A selection of professional and personal projects I have worked on.',
    viewDetails: 'View details',
    
    project1Title: 'MainRail (2020-2023)',
    project1Desc: 'Railway maintenance project. Migration from Polymer 2 to Polymer 3 and later work with PHP and Polymer.',
    
    project2Title: 'Morabanc (2023-2024)',
    project2Desc: 'Banking project in Angular 13. Migration from AngularJS with focus on performance and usability.',
    
    project3Title: 'Balearic Islands Youth Card (2019-2021)',
    project3Desc: 'User management platform with Java 8, Spring, Hibernate, Angular 7 and AWS integrations.',
    
    project4Title: 'Gym App (2022-2025)',
    project4Desc: 'Application for gym management with Angular, Spring Boot, AWS and DynamoDB.',
    
    // Goals
    goalsSection: 'Goals and Motivation',
    goalsDesc: 'My professional aspirations and what motivates me in software development.',
    profGoals: 'Professional Goals',
    persMotivations: 'Personal Motivations',
    currentTech: 'Current Technologies',
    currentTechDesc: 'In 2024 I started my Vibe Coding journey, using AI tools like Ollama, n8n for workflow automation, and various AI-assisted coding tools to enhance my development productivity.',
    
    modernFrontend: 'Angular & TypeScript',
    backendCloud: 'Spring Boot & AWS',
    areasOfInterest: 'AI Coding & Automation',
    
    // Professional Goals List
    profGoal1: 'Expand my experience with AWS cloud services.',
    profGoal2: 'Deepen knowledge in scalable software architectures.',
    profGoal3: 'Develop innovative solutions with artificial intelligence.',
    profGoal4: 'Implement robust systems with CI/CD and microservices.',
    
    // Personal Motivations List
    persMot1: 'Complete personal projects like Gym App and LolImprove.',
    persMot2: 'Continue exploring LLM integration with development.',
    persMot3: 'Optimize workflows with automation and AI coding.',
    persMot4: 'Specialize in Vibe Coding, integrating AI development and automation to improve processes.',
    
    // Footer
    copyright: '© 2024 Alberto Bueno Lamana'
  }
};
