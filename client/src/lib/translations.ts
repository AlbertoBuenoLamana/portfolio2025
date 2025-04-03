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
    pageTitle: 'Mi Trayectoria Profesional',
    contact: 'Contacto',
    
    // Timeline
    timeline: 'Línea de tiempo',
    timelineDesc: 'Mi recorrido profesional desde 2019 hasta la actualidad, con un vistazo hacia el futuro.',
    professional: 'Profesional',
    personal: 'Personal',
    goals: 'Objetivos',
    motivation: 'Motivación',
    
    // Timeline Nodes
    node2019Prof: 'Graduación Universitaria',
    node2019ProfDesc: 'Licenciatura en Ingeniería Informática',
    node2019Pers: 'Proyecto de Videojuego',
    node2019PersDesc: 'Desarrollo de un videojuego indie con Unity',
    
    node2020Prof: 'Primer Trabajo',
    node2020ProfDesc: 'Desarrollador Junior en Startup Tech',
    node2020Pers: 'Aprendizaje de React',
    node2020PersDesc: 'Cursos y proyectos personales con React',
    
    node2021Prof: 'Promoción a Desarrollador',
    node2021ProfDesc: 'Desarrollador Frontend en Agencia Digital',
    node2021Pers: 'Certificación en UX/UI',
    node2021PersDesc: 'Completé un programa de certificación en diseño UX/UI',
    
    node2022Prof: 'Proyecto E-commerce',
    node2022ProfDesc: 'Lideré el desarrollo frontend de una plataforma e-commerce',
    node2022Pers: 'Desarrollo de App Móvil',
    node2022PersDesc: 'Desarrollé una app móvil con React Native',
    
    node2023Prof: 'Desarrollador Senior',
    node2023ProfDesc: 'Promoción a Desarrollador Senior en compañía de tecnología',
    node2023Pers: 'Contribuciones Open Source',
    node2023PersDesc: 'Comencé a contribuir a proyectos de código abierto',
    
    node2024Prof: 'Líder Técnico',
    node2024ProfDesc: 'Rol de liderazgo técnico en equipo de desarrollo',
    node2024Pers: 'Mentor de Desarrollo Web',
    node2024PersDesc: 'Comencé a mentorizar a estudiantes de desarrollo web',
    
    node2025Prof: 'Arquitecto de Software',
    node2025ProfDesc: 'Objetivo: Evolucionar a rol de arquitectura',
    node2025Pers: 'Startup Propia',
    node2025PersDesc: 'Objetivo: Lanzar mi propia startup de tecnología',
    
    nodeFutureProf: 'Visión Profesional',
    nodeFutureProfDesc: 'Liderar equipos de innovación tecnológica',
    nodeFutureMot: 'Tecnologías Actuales',
    nodeFutureMotDesc: 'React, NextJS, TailwindCSS, Node.js, AWS',
    
    // Skills
    skills: 'Habilidades',
    skillsDesc: 'Tecnologías y herramientas que he aprendido a lo largo de mi carrera.',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Herramientas',
    design: 'Diseño',
    mobileDev: 'Desarrollo Móvil',
    softSkills: 'Habilidades Blandas',
    
    // Projects
    projects: 'Proyectos Destacados',
    projectsDesc: 'Una selección de proyectos profesionales y personales en los que he trabajado.',
    viewDetails: 'Ver detalles',
    
    project1Title: 'Plataforma E-commerce',
    project1Desc: 'Desarrollo frontend de una plataforma e-commerce con React, Redux y Node.js.',
    
    project2Title: 'Aplicación Móvil',
    project2Desc: 'Aplicación de seguimiento de actividad física desarrollada con React Native.',
    
    project3Title: 'Dashboard Analytics',
    project3Desc: 'Dashboard de análisis de datos para empresa de marketing con visualizaciones interactivas.',
    
    project4Title: 'Videojuego Indie',
    project4Desc: 'Videojuego 2D de plataformas desarrollado con Unity y C#.',
    
    // Goals
    goalsSection: 'Objetivos y Motivación',
    goalsDesc: 'Mis aspiraciones profesionales y lo que me motiva en el desarrollo de software.',
    profGoals: 'Objetivos Profesionales',
    persMotivations: 'Motivaciones Personales',
    currentTech: 'Tecnologías Actuales',
    currentTechDesc: 'Actualmente estoy enfocado en las siguientes tecnologías y áreas de interés:',
    
    modernFrontend: 'Frontend Moderno',
    backendCloud: 'Backend & Cloud',
    areasOfInterest: 'Áreas de Interés',
    
    // Professional Goals List
    profGoal1: 'Evolucionar hacia roles de arquitectura de software.',
    profGoal2: 'Liderar equipos de desarrollo e innovación tecnológica.',
    profGoal3: 'Contribuir a proyectos que generen impacto social positivo.',
    profGoal4: 'Especializarme en soluciones cloud y arquitecturas escalables.',
    
    // Personal Motivations List
    persMot1: 'Crear productos que mejoren la vida de las personas.',
    persMot2: 'Aprender constantemente nuevas tecnologías y metodologías.',
    persMot3: 'Lanzar mi propia startup con enfoque en sostenibilidad.',
    persMot4: 'Mentorizar a futuros desarrolladores y compartir conocimiento.',
    
    // Footer
    copyright: '© 2024 Mi Trayectoria Profesional'
  },
  en: {
    // Header
    pageTitle: 'My Professional Journey',
    contact: 'Contact',
    
    // Timeline
    timeline: 'Timeline',
    timelineDesc: 'My professional journey from 2019 to present, with a look toward the future.',
    professional: 'Professional',
    personal: 'Personal',
    goals: 'Goals',
    motivation: 'Motivation',
    
    // Timeline Nodes
    node2019Prof: 'University Graduation',
    node2019ProfDesc: 'Bachelor in Computer Engineering',
    node2019Pers: 'Video Game Project',
    node2019PersDesc: 'Development of an indie game with Unity',
    
    node2020Prof: 'First Job',
    node2020ProfDesc: 'Junior Developer at Tech Startup',
    node2020Pers: 'Learning React',
    node2020PersDesc: 'Courses and personal projects with React',
    
    node2021Prof: 'Promotion to Developer',
    node2021ProfDesc: 'Frontend Developer at Digital Agency',
    node2021Pers: 'UX/UI Certification',
    node2021PersDesc: 'Completed a UX/UI design certification program',
    
    node2022Prof: 'E-commerce Project',
    node2022ProfDesc: 'Led the frontend development of an e-commerce platform',
    node2022Pers: 'Mobile App Development',
    node2022PersDesc: 'Developed a mobile app with React Native',
    
    node2023Prof: 'Senior Developer',
    node2023ProfDesc: 'Promotion to Senior Developer at tech company',
    node2023Pers: 'Open Source Contributions',
    node2023PersDesc: 'Started contributing to open source projects',
    
    node2024Prof: 'Tech Lead',
    node2024ProfDesc: 'Technical leadership role in development team',
    node2024Pers: 'Web Development Mentoring',
    node2024PersDesc: 'Started mentoring web development students',
    
    node2025Prof: 'Software Architect',
    node2025ProfDesc: 'Goal: Evolve to architecture role',
    node2025Pers: 'Own Startup',
    node2025PersDesc: 'Goal: Launch my own tech startup',
    
    nodeFutureProf: 'Professional Vision',
    nodeFutureProfDesc: 'Lead technological innovation teams',
    nodeFutureMot: 'Current Technologies',
    nodeFutureMotDesc: 'React, NextJS, TailwindCSS, Node.js, AWS',
    
    // Skills
    skills: 'Skills',
    skillsDesc: 'Technologies and tools I have learned throughout my career.',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',
    design: 'Design',
    mobileDev: 'Mobile Development',
    softSkills: 'Soft Skills',
    
    // Projects
    projects: 'Featured Projects',
    projectsDesc: 'A selection of professional and personal projects I have worked on.',
    viewDetails: 'View details',
    
    project1Title: 'E-commerce Platform',
    project1Desc: 'Frontend development of an e-commerce platform with React, Redux and Node.js.',
    
    project2Title: 'Mobile App',
    project2Desc: 'Fitness tracking app developed with React Native.',
    
    project3Title: 'Analytics Dashboard',
    project3Desc: 'Data analytics dashboard for marketing company with interactive visualizations.',
    
    project4Title: 'Indie Game',
    project4Desc: '2D platform game developed with Unity and C#.',
    
    // Goals
    goalsSection: 'Goals and Motivation',
    goalsDesc: 'My professional aspirations and what motivates me in software development.',
    profGoals: 'Professional Goals',
    persMotivations: 'Personal Motivations',
    currentTech: 'Current Technologies',
    currentTechDesc: 'I am currently focused on the following technologies and areas of interest:',
    
    modernFrontend: 'Modern Frontend',
    backendCloud: 'Backend & Cloud',
    areasOfInterest: 'Areas of Interest',
    
    // Professional Goals List
    profGoal1: 'Evolve toward software architecture roles.',
    profGoal2: 'Lead development teams and technological innovation.',
    profGoal3: 'Contribute to projects that generate positive social impact.',
    profGoal4: 'Specialize in cloud solutions and scalable architectures.',
    
    // Personal Motivations List
    persMot1: 'Create products that improve people\'s lives.',
    persMot2: 'Constantly learn new technologies and methodologies.',
    persMot3: 'Launch my own startup with a focus on sustainability.',
    persMot4: 'Mentor future developers and share knowledge.',
    
    // Footer
    copyright: '© 2024 My Professional Journey'
  }
};
