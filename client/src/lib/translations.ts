export type Language = 'es' | 'en';

type TranslationKeys = {
  // Header
  pageTitle: string;
  contact: string;
  about: string;
  timeline: string;
  skills: string;
  projects: string;
  
  // Timeline
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
  skillsDesc: string;
  frontend: string;
  backend: string;
  tools: string;
  design: string;
  mobileDev: string;
  softSkills: string;
  
  // Projects
  projectsDesc: string;
  viewDetails: string;
  comingSoon: string;
  
  project1Title: string;
  project1Desc: string;
  
  project2Title: string;
  project2Desc: string;
  
  project3Title: string;
  project3Desc: string;
  
  project4Title: string;
  project4Desc: string;
  
  // Individual Project Translations
  projectGymAppTitle: string;
  projectGymAppDesc: string;
  projectLolImproveTitle: string;
  projectLolImproveDesc: string;
  projectYeezyScrapperTitle: string;
  projectYeezyScrapperDesc: string;
  projectSeleniumFifaTitle: string;
  projectSeleniumFifaDesc: string;
  projectMainRailTitle: string;
  projectMainRailDesc: string;
  projectMorabancTitle: string;
  projectMorabancDesc: string;
  projectCarnetJovenTitle: string;
  projectCarnetJovenDesc: string;
  projectClunTitle: string;
  projectClunDesc: string;
  
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
  
  // Welcome
  welcomeDescription: string;
  awsCertified: string;
  fullStackDev: string;
  angularSpecialist: string;
  javaDeveloper: string;
  
  // Contact
  contactTitle: string;
  contactDesc: string;
  getInTouch: string;
  
  // Projects Disclaimer
  professionalDisclaimer: string;
  
  // Footer
  copyright: string;
};

export const translations: Record<Language, TranslationKeys> = {
  es: {
    // Header
    pageTitle: 'Alberto Bueno Lamana',
    contact: 'Contacto',
    about: 'Acerca de',
    timeline: 'Trayectoria',
    skills: 'Habilidades',
    projects: 'Proyectos',
    
    // Timeline
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
    node2020Pers: 'Inicio de Gym App',
    node2020PersDesc: 'Primeros pasos en el desarrollo personal de aplicación para gestión de gimnasios con Angular y tecnologías básicas',
    
    node2021Prof: 'Carnet Joven Islas Baleares',
    node2021ProfDesc: 'Desarrollo de plataforma en Java 8 y Angular 7 para gestión de usuarios',
    node2021Pers: 'Yeezy Scrapper',
    node2021PersDesc: 'Script de Python para verificar precios de zapatillas en StockX utilizando AWS SAM',
    
    node2022Prof: 'Continuación en Inycom',
    node2022ProfDesc: 'Mantenimiento de productos y desarrollo de proyectos en Angular y Java',
    node2022Pers: 'Evolución de Gym App',
    node2022PersDesc: 'Migración a Angular 12, integración con Spring Boot, implementación de nuevas funcionalidades y mejoras arquitecturales según necesidades del proyecto',
    
    node2023Prof: 'Proyecto Morabanc',
    node2023ProfDesc: 'Desarrollo en Angular 13 para proyecto bancario',
    node2023Pers: 'Certificación AWS',
    node2023PersDesc: 'Implementación de CI/CD en AWS y uso de DynamoDB para la aplicación de gimnasios. Obtención del certificado AWS Certified Developer – Associate en mi tiempo libre.',
    
    node2024Prof: 'Proyecto CLUN',
    node2024ProfDesc: 'Desarrollo de API con Spring Boot 3 y Java 21 con integraciones',
    node2024Pers: 'Desarrollo Asistido por IA',
    node2024PersDesc: 'Revolución en el desarrollo web: desde diciembre adopto Cursor para proyectos personales, experimento con LLM Studio, y posteriormente Claude Code y Windsurf. Transformación del paradigma de desarrollo tradicional hacia dirección supervisada de LLMs.',
    
    node2025Prof: 'Especialización Cloud',
    node2025ProfDesc: 'Objetivo: Profundizar en servicios cloud y arquitecturas escalables',
    node2025Pers: 'LolImprove',
    node2025PersDesc: 'Aplicación full-stack con React, TypeScript, FastAPI y SQLAlchemy para mejorar en League of Legends',
    
    nodeFutureProf: 'Visión Profesional',
    nodeFutureProfDesc: 'Especialización en arquitecturas cloud escalables y desarrollo full-stack enterprise, integrando AI-assisted development como metodología principal para optimizar la productividad y calidad del código.',
    nodeFutureMot: 'Tecnologías Actuales',
    nodeFutureMotDesc: 'Stack principal: Angular, Spring Boot, AWS Cloud Services. Especialización en AI Coding Assistants: Cursor (Dic 2024+), LLM Studio, Claude Code, Windsurf. Lenguajes: TypeScript, Python, Java.',
    
    // Skills
    skillsDesc: 'Tecnologías y herramientas que he aprendido a lo largo de mi carrera.',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Herramientas',
    design: 'Diseño',
    mobileDev: 'Cloud',
    softSkills: 'Bases de Datos',
    
    // Projects
    projectsDesc: 'Una selección de proyectos profesionales y personales en los que he trabajado.',
    viewDetails: 'Ver detalles',
    comingSoon: 'Próximamente disponible',
    
    project1Title: 'MainRail (2020-2023)',
    project1Desc: 'Proyecto para mantenimiento de ferrocarriles. Migración de Polymer 2 a Polymer 3 y posteriormente trabajo en PHP y Polymer.',
    
    project2Title: 'Morabanc (2023-2024)',
    project2Desc: 'Proyecto bancario en Angular 13. Migración desde AngularJS con foco en rendimiento y usabilidad.',
    
    project3Title: 'Carnet Joven Islas Baleares (2019-2021)',
    project3Desc: 'Plataforma de gestión de usuarios con Java 8, Spring, Hibernate, Angular 7 e integraciones AWS.',
    
    project4Title: 'Gym App (2022-2025)',
    project4Desc: 'Aplicación para gestión de gimnasios con Angular, Spring Boot, AWS y DynamoDB.',
    
    // Individual Project Translations
    projectGymAppTitle: 'Gym App',
    projectGymAppDesc: 'Aplicación web full-stack para gestión de gimnasios desarrollada con Angular 19 y Spring Boot (Java), implementando una arquitectura moderna con CI/CD en AWS (CodeBuild, CodeDeploy), base de datos NoSQL DynamoDB y siguiendo las mejores prácticas de desarrollo ágil. La aplicación ofrece gestión de rutinas de ejercicios, planes de dieta personalizados y seguimiento de progreso, utilizando Material Design para una interfaz moderna y responsive, con un backend robusto que implementa seguridad JWT, patrones de diseño empresariales y aprovecha la escalabilidad y rendimiento de DynamoDB para el almacenamiento de datos.',
    projectLolImproveTitle: 'LolImprove',
    projectLolImproveDesc: 'Como apasionado jugador de League of Legends, desarrollé como hobby una aplicación full-stack utilizando React, TypeScript, FastAPI y SQLAlchemy para mejorar mi experiencia de juego. Mi proyecto incluye gestión de tutoriales en video, análisis de mis sesiones y organización personalizada de campeones con una interfaz que me permite visualizar mi progreso y establecer objetivos adaptados a mi estilo de juego.',
    projectYeezyScrapperTitle: 'Yeezy Scrapper',
    projectYeezyScrapperDesc: 'Creación de un script de python que verificaba el precio de unas zapatillas en stockx, utilizando SAM de AWS.',
    projectSeleniumFifaTitle: 'Selenium FIFA',
    projectSeleniumFifaDesc: 'Creación de un proyecto con Java y Selenium que se dedicaba a hacer clicks y simulaba el uso de un humano a la hora de comprar/vender jugadores del FIFA, de esta manera sacaba beneficios con la moneda virtual del juego.',
    projectMainRailTitle: 'MainRail',
    projectMainRailDesc: 'Comencé en MainRail realizando pruebas unitarias con Selenium, probando funcionalidades como resultado del conocimiento adquirido de la aplicación. Inicialmente desarrollado en PHP puro como backend y Polymer 2 como frontend. Se trataba de un proyecto innovador para el mantenimiento de ferrocarriles con diferentes módulos. Durante los primeros 6 meses de este proyecto, se llevó a cabo una migración de Polymer 2 a Polymer 3. Una vez migrado, nos encontramos en un proceso de estabilización del proyecto, ya que presentaba muchos errores/fallas hasta que finalmente fue operativo para su implementación/venta. Posteriormente, el proyecto se convirtió en una \'productivización\' en la que surgieron nuevos desarrollos en busca de funcionalidades adicionales que el cliente solicitaba, como mejoras en el propio producto. Terminé mejorando la aplicación a Angular 11 y Lumen, siendo utilizada por más de 5 clientes. Durante el proceso, realicé un análisis de posibles mejoras que Angular tendría en comparación con Polymer, actualizando consultas complejas en PostgreSQL que estaban escalando con el tiempo. También adquirí experiencia en servicios de AWS, implementando cada proyecto en instancias EC2 y bases de datos RDS.',
    projectMorabancTitle: 'Morabanc',
    projectMorabancDesc: 'Proyecto enfocado en el sector bancario, desarrollado en Angular 13. La tarea consiste en replicar las funcionalidades de la antigua plataforma web en AngularJS en una nueva tecnología como Angular 13, analizando cuál podría ser la mejor manera de hacer que este proyecto funcione, teniendo en cuenta principalmente el rendimiento.',
    projectCarnetJovenTitle: 'Carnet Joven Islas Baleares',
    projectCarnetJovenDesc: 'Creación desde cero de una plataforma de usuario, desarrollada en Java 8 usando (Spring, Hibernate, JPA, Maven) como parte del backend y un frontend desarrollado en Angular 7, el proyecto se basaba en gestión/validación de usuarios para luego ser enviados vía archivos CSV a una integración con un banco para la generación de tarjetas, también incluye generación de PDF con consultas complejas usando JasperReports para generación de reportes. Debido a las comunicaciones con las aplicaciones, se desarrollaron algunas APIs en AWS usando: S3, SES, API Gateway, funciones Lambda. Desplegado en Tomcat y usando MySQL como base de datos. Actualmente continúa siendo mantenido por mí en posibles incidencias que ocurren con usuarios.',
    projectClunTitle: 'CLUN',
    projectClunDesc: 'Inicio de 0 de una API usando Spring Boot 3 y Java 21, mantenida y desarrollada en su totalidad por mí, con varias integraciones con plataformas del cliente, así como enriquecer usuarios de aplicación móvil y web, API con documentación y testing de endpoints en swagger.',
    
    // Goals
    goalsSection: 'Objetivos y Motivación',
    goalsDesc: 'Mis aspiraciones profesionales y lo que me motiva en el desarrollo de software.',
    profGoals: 'Objetivos Profesionales',
    persMotivations: 'Motivaciones Personales',
    currentTech: 'Tecnologías Actuales',
    currentTechDesc: 'El desarrollo web ha evolucionado radicalmente con la IA. Desde diciembre de 2024 utilizo Cursor para proyectos personales, he experimentado con LLM Studio y diversos modelos de lenguaje, recientemente adoptado Claude Code y probado Windsurf. Esta revolución tecnológica ha transformado mi flujo de trabajo: ahora dedico menos tiempo codificando línea por línea y más tiempo dirigiendo y supervisando cómo los LLMs deben estructurar y optimizar las soluciones.',
    
    modernFrontend: 'Angular & TypeScript',
    backendCloud: 'Spring Boot & AWS',
    areasOfInterest: 'IA y Automatización',
    
    // Professional Goals List
    profGoal1: 'Expandir mi experiencia en servicios cloud de AWS.',
    profGoal2: 'Profundizar en arquitecturas de software escalables.',
    profGoal3: 'Profundizar en el desarrollo de soluciones innovadoras con inteligencia artificial.',
    profGoal4: 'Implementar sistemas robustos con CI/CD y microservicios.',
    
    // Personal Motivations List
    persMot1: 'Completar proyectos personales como Gym App y LolImprove.',
    persMot2: 'Continuar explorando la integración de LLMs con desarrollo.',
    persMot3: 'Optimizar flujos de trabajo con automatización y AI coding.',
    persMot4: 'Dominar el paradigma de desarrollo asistido por IA, especializándome en la dirección eficaz de LLMs como Cursor, Claude Code y Windsurf para optimizar la arquitectura y calidad del código.',
    
    // Welcome
    welcomeDescription: 'Desarrollador web apasionado en la creación de aplicaciones web modernas y soluciones escalables. Mi enfoque se centra en el desarrollo Full Stack, principalmente Angular desde la versión 6 y Java desde la versión 8. Entusiasta de los servicios cloud especialmente de AWS.',
    awsCertified: 'AWS Certified Developer',
    fullStackDev: 'Full Stack Developer',
    angularSpecialist: 'Angular Specialist',
    javaDeveloper: 'Java Developer',
    
    // Contact
    contactTitle: 'Contacto',
    contactDesc: '¡No dudes en contactarme para colaboraciones, oportunidades o simplemente para saludar!',
    getInTouch: 'Ponte en Contacto',
    
    // Projects Disclaimer
    professionalDisclaimer: 'Participé en el desarrollo de este proyecto como parte de mi experiencia profesional o personal. Las marcas o logos mostrados pertenecen a sus respectivos propietarios y se incluyen únicamente con fines ilustrativos.',
    
    // Footer
    copyright: '© 2025 Alberto Bueno Lamana'
  },
  en: {
    // Header
    pageTitle: 'Alberto Bueno Lamana',
    contact: 'Contact',
    about: 'About',
    timeline: 'Timeline',
    skills: 'Skills',
    projects: 'Projects',
    
    // Timeline
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
    node2020Pers: 'Started Gym App',
    node2020PersDesc: 'First steps in personal development of gym management application with Angular and basic technologies',
    
    node2021Prof: 'Balearic Islands Youth Card',
    node2021ProfDesc: 'Platform development with Java 8 and Angular 7 for user management',
    node2021Pers: 'Yeezy Scrapper',
    node2021PersDesc: 'Python script to check sneaker prices on StockX using AWS SAM',
    
    node2022Prof: 'Continued at Inycom',
    node2022ProfDesc: 'Product maintenance and project development with Angular and Java',
    node2022Pers: 'Gym App Evolution',
    node2022PersDesc: 'Migration to Angular 12, Spring Boot integration, implementation of new features and architectural improvements based on project needs',
    
    node2023Prof: 'Morabanc Project',
    node2023ProfDesc: 'Angular 13 development for banking project',
    node2023Pers: 'AWS Certification',
    node2023PersDesc: 'Implementation of CI/CD in AWS and DynamoDB for the gym application. Obtained AWS Certified Developer – Associate certification in my free time.',
    
    node2024Prof: 'CLUN Project',
    node2024ProfDesc: 'API development with Spring Boot 3 and Java 21 with integrations',
    node2024Pers: 'AI-Assisted Development',
    node2024PersDesc: 'Web development revolution: since December adopting Cursor for personal projects, experimenting with LLM Studio, then Claude Code and Windsurf. Transforming from traditional development paradigm to supervised LLM direction.',
    
    node2025Prof: 'Cloud Specialization',
    node2025ProfDesc: 'Goal: Deepen knowledge in cloud services and scalable architectures',
    node2025Pers: 'LolImprove',
    node2025PersDesc: 'Full-stack app with React, TypeScript, FastAPI and SQLAlchemy to improve at League of Legends',
    
    nodeFutureProf: 'Professional Vision',
    nodeFutureProfDesc: 'Specialization in scalable cloud architectures and enterprise full-stack development, integrating AI-assisted development as the primary methodology to optimize productivity and code quality.',
    nodeFutureMot: 'Current Technologies',
    nodeFutureMotDesc: 'Core stack: Angular, Spring Boot, AWS Cloud Services. AI Coding Assistants specialization: Cursor (Dec 2024+), LLM Studio, Claude Code, Windsurf. Languages: TypeScript, Python, Java.',
    
    // Skills
    skillsDesc: 'Technologies and tools I have learned throughout my career.',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',
    design: 'Design',
    mobileDev: 'Cloud',
    softSkills: 'Databases',
    
    // Projects
    projectsDesc: 'A selection of professional and personal projects I have worked on.',
    viewDetails: 'View details',
    comingSoon: 'Coming soon',
    
    project1Title: 'MainRail (2020-2023)',
    project1Desc: 'Railway maintenance project. Migration from Polymer 2 to Polymer 3 and later work with PHP and Polymer.',
    
    project2Title: 'Morabanc (2023-2024)',
    project2Desc: 'Banking project in Angular 13. Migration from AngularJS with focus on performance and usability.',
    
    project3Title: 'Balearic Islands Youth Card (2019-2021)',
    project3Desc: 'User management platform with Java 8, Spring, Hibernate, Angular 7 and AWS integrations.',
    
    project4Title: 'Gym App (2022-2025)',
    project4Desc: 'Application for gym management with Angular, Spring Boot, AWS and DynamoDB.',
    
    // Individual Project Translations
    projectGymAppTitle: 'Gym App',
    projectGymAppDesc: 'Full-stack web application for gym management developed with Angular 19 and Spring Boot (Java), implementing a modern architecture with CI/CD on AWS (CodeBuild, CodeDeploy), NoSQL DynamoDB database and following agile development best practices. The application offers exercise routine management, personalized diet plans and progress tracking, using Material Design for a modern and responsive interface, with a robust backend that implements JWT security, enterprise design patterns and leverages the scalability and performance of DynamoDB for data storage.',
    projectLolImproveTitle: 'LolImprove',
    projectLolImproveDesc: 'As a passionate League of Legends player, I developed as a hobby a full-stack application using React, TypeScript, FastAPI and SQLAlchemy to improve my gaming experience. My project includes video tutorial management, session analysis and personalized champion organization with an interface that allows me to visualize my progress and set goals adapted to my playstyle.',
    projectYeezyScrapperTitle: 'Yeezy Scrapper',
    projectYeezyScrapperDesc: 'Creation of a Python script that checked sneaker prices on StockX, using AWS SAM.',
    projectSeleniumFifaTitle: 'Selenium FIFA',
    projectSeleniumFifaDesc: 'Creation of a project with Java and Selenium that was dedicated to making clicks and simulating human use when buying/selling FIFA players, thus making profits with the game\'s virtual currency.',
    projectMainRailTitle: 'MainRail',
    projectMainRailDesc: 'I started at MainRail performing unit tests with Selenium, testing functionalities as a result of knowledge acquired from the application. Initially developed in pure PHP as backend and Polymer 2 as frontend. It was an innovative project for railway maintenance with different modules. During the first 6 months of this project, a migration from Polymer 2 to Polymer 3 was carried out. Once migrated, we found ourselves in a project stabilization process, as it presented many errors/failures until it was finally operational for implementation/sale. Subsequently, the project became a \'productivization\' in which new developments arose in search of additional functionalities that the client requested, as improvements to the product itself. I ended up improving the application to Angular 11 and Lumen, being used by more than 5 clients. During the process, I performed an analysis of possible improvements that Angular would have compared to Polymer, updating complex queries in PostgreSQL that were scaling over time. I also gained experience in AWS services, implementing each project on EC2 instances and RDS databases.',
    projectMorabancTitle: 'Morabanc',
    projectMorabancDesc: 'Project focused on the banking sector, developed in Angular 13. The task consists of replicating the functionalities of the old web platform in AngularJS in a new technology like Angular 13, analyzing what could be the best way to make this project work, mainly taking into account performance.',
    projectCarnetJovenTitle: 'Balearic Islands Youth Card',
    projectCarnetJovenDesc: 'Creation from scratch of a user platform, developed in Java 8 using (Spring, Hibernate, JPA, Maven) as part of the backend and a frontend developed in Angular 7, the project was based on user management/validation to later be sent via CSV files to an integration with a bank for card generation, it also includes PDF generation with complex queries using JasperReports for report generation. Due to communications with applications, some APIs were developed in AWS using: S3, SES, API Gateway, Lambda functions. Deployed in Tomcat and using MySQL as database. Currently it continues to be maintained by me for possible incidents that occur with users.',
    projectClunTitle: 'CLUN',
    projectClunDesc: 'Started from scratch an API using Spring Boot 3 and Java 21, maintained and developed entirely by me, with several integrations with client platforms, as well as enriching mobile and web application users, API with documentation and endpoint testing in swagger.',
    
    // Goals
    goalsSection: 'Goals and Motivation',
    goalsDesc: 'My professional aspirations and what motivates me in software development.',
    profGoals: 'Professional Goals',
    persMotivations: 'Personal Motivations',
    currentTech: 'Current Technologies',
    currentTechDesc: 'Web development has evolved radically with AI. Since December 2024, I\'ve been using Cursor for personal projects, experimented with LLM Studio and various language models, recently adopted Claude Code, and tried Windsurf. This technological revolution has transformed my workflow: I now spend less time coding line by line and more time directing and supervising how LLMs should structure and optimize solutions.',
    
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
    persMot4: 'Master the AI-assisted development paradigm, specializing in effectively directing LLMs like Cursor, Claude Code, and Windsurf to optimize code architecture and quality.',
    
    // Welcome
    welcomeDescription: 'Passionate web developer creating modern web applications and scalable solutions. My focus is on Full Stack development, primarily Angular since version 6 and Java since version 8. Enthusiast of cloud services, especially AWS.',
    awsCertified: 'AWS Certified Developer',
    fullStackDev: 'Full Stack Developer',
    angularSpecialist: 'Angular Specialist',
    javaDeveloper: 'Java Developer',
    
    // Contact
    contactTitle: 'Contact Me',
    contactDesc: 'Feel free to reach out for collaborations, opportunities, or just to say hello!',
    getInTouch: 'Get In Touch',
    
    // Projects Disclaimer
    professionalDisclaimer: 'I participated in the development of this project as part of my professional or personal experience. The brands or logos shown belong to their respective owners and are included for illustrative purposes only.',
    
    // Footer
    copyright: '© 2025 Alberto Bueno Lamana'
  }
};
