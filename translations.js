// Bilingual content (ES / EN) for the portfolio.
// Switching language only swaps this data — no page reload needed.

const TRANSLATIONS = {
  es: {
    meta: {
      lang: "es",
      title: "Joan Guerrero Sanchez · Software Developer & AI Specialist",
      description:
        "Portfolio de Joan Guerrero Sanchez — Desarrollador Full Stack especializado en Inteligencia Artificial y Big Data.",
    },
    nav: {
      about: "Perfil",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Formación",
      contact: "Contacto",
    },
    hero: {
      role: "Software Developer · AI Specialist (DAM + IA)",
      name: "Joan Guerrero Sanchez",
      tagline:
        "Desarrollador Full Stack especializado en Inteligencia Artificial y Big Data. Construyo soluciones técnicas innovadoras, desde arquitecturas RAG hasta plataformas web completas.",
      location: "Barcelona, España",
      photoAlt: "Foto de perfil de Joan Guerrero Sanchez",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contáctame",
      ctaDownload: "Descargar CV",
    },
    resume: {
      title: "Currículum",
      subtitle: "Descarga mi CV en PDF",
      downloadEs: "Español (PDF)",
      downloadEn: "English (PDF)",
    },
    about: {
      title: "Perfil Profesional",
      body: "Desarrollador Full Stack con especialización en Inteligencia Artificial y Big Data. Combino una sólida base en desarrollo de software (Java, Python) con experiencia práctica en Deep Learning y arquitecturas RAG. Buscando aplicar soluciones técnicas innovadoras. Capacidad demostrada para autoaprendizaje y desarrollo de proyectos complejos de IA desde cero.",
      stats: [
        { value: "3+", label: "Titulaciones técnicas" },
        { value: "4+", label: "Proyectos de IA & ingeniería" },
        { value: "B2/C1", label: "Inglés profesional" },
      ],
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Tecnologías con las que trabajo a diario",
      groups: [
        {
          name: "Lenguajes de Programación",
          items: ["Python (Avanzado)", "Java", "JavaScript (ES6+)", "TypeScript", "SQL", "Bash"],
        },
        {
          name: "Inteligencia Artificial & Datos",
          items: [
            "PyTorch",
            "TensorFlow",
            "Hugging Face Transformers",
            "RAG (Retrieval-Augmented Generation)",
            "LangChain",
            "FAISS",
            "Computer Vision (OpenCV)",
            "Pandas",
            "NumPy",
          ],
        },
        {
          name: "Desarrollo Web & Móvil",
          items: ["React", "Vue.js", "Node.js (Express)", "React Native", "HTML5", "CSS3 / Sass"],
        },
        {
          name: "Herramientas & DevOps",
          items: ["Git", "GitHub", "Docker", "Linux", "Metodologías Ágiles (Scrum)"],
        },
        {
          name: "Bases de Datos",
          items: ["MongoDB", "MySQL", "PostgreSQL"],
        },
      ],
    },
    projects: {
      title: "Proyectos de Ingeniería & IA",
      subtitle: "Una selección de proyectos que he construido desde cero",
      viewGithub: "Ver en GitHub",
      items: [
        {
          name: "Piratas de Andromeda",
          github: "https://github.com/GnChez/PiratesdAndromeda",
          stack: ["FastAPI", "React", "WebSockets", "MySQL"],
          points: [
            "Experiencia multijugador en tiempo real con app Android, backend FastAPI y panel web React; desplegada en producción.",
            "Canales WebSocket y MQTT para acciones de juego, votaciones, sabotajes y monitorización en vivo.",
            "Integración IoT con ESP32 (NFC, LEDs) para misiones físicas en partidas presenciales.",
          ],
        },
        {
          name: "Plataforma Web Robot Escape",
          github: "https://github.com/GnChez/Robot-Escape-Web",
          stack: ["Vue.js", "Vuetify", "JavaScript", "GitHub Pages"],
          points: [
            "Frontend web del ecosistema Robot Escape, un juego 3D multijugador online desarrollado en Unity.",
            "Interfaz construida con Vue.js y Vuetify: diseño responsive, componentes reutilizables y experiencia de usuario orientada a la comunidad gamer.",
          ],
        },
        {
          name: "Asistente de Documentos RAG Local",
          github: "https://github.com/GnChez/RAG-Document-Assistant",
          stack: ["Python", "Llama-3", "FAISS", "Gradio"],
          points: [
            'Sistema de IA local capaz de procesar y "chatear" con documentos PDF privados sin enviar datos a la nube.',
            "Pipelines de ingestión de datos, chunking y búsqueda vectorial semántica con FAISS y Sentence-Transformers.",
            "Optimización de inferencia mediante cuantización de modelos LLM (Llama-3, Phi-3) para ejecución eficiente en hardware de consumo.",
          ],
        },
        {
          name: "Agente Autónomo de Doom (Aprendizaje por Refuerzo)",
          github: "https://github.com/GnChez/DOOM-Reinforcement-Learning-Agent",
          stack: ["Python", "PyTorch", "Stable Baselines 3"],
          points: [
            "Entrenamiento de un agente autónomo capaz de navegar y combatir en el entorno 3D VizDoom usando algoritmos PPO.",
            "Arquitectura de software modular aplicando el Patrón Estrategia para gestionar funciones de recompensa dinámicas.",
            "Curriculum Learning para mejorar la convergencia del modelo en escenarios de dificultad progresiva.",
          ],
        },
        {
          name: "Clasificador de Sentimientos BERT",
          github: "https://github.com/GnChez/BERT-Sentiment-Analysis-Fine-Tuning-for-Movie-Reviews",
          stack: ["PyTorch", "Transformers"],
          points: [
            "Fine-tuning de un modelo BERT para clasificación de sentimientos en datasets masivos.",
            "Red neuronal personalizada sobre la arquitectura base para optimizar la precisión en dominios específicos.",
          ],
        },
      ],
    },
    experience: {
      title: "Experiencia Laboral",
      items: [
        {
          role: "Desarrollador Back End",
          company: "Myllox",
          period: "Febrero 2026 — Actualidad",
          points: [
            "Contribuí al runtime de servidor en Node.js (Express, ES modules): arquitectura multi-proceso con proceso supervisor y servicios especializados, comunicación IPC y API de administración sobre HTTPS.",
            "Integración con servidor centralizado (autenticación JWT/sesiones), apoyo en la configuración ante Nginx (reverse proxy) y monitorización de salud de servicios con alertas.",
            "Interfaces operativas en JavaScript modular (dashboards servidor/servicio/runtime): indicadores en tiempo real, historial de pings, paneles de logs y estrategias de polling ante fallos consecutivos.",
            "Pruebas automatizadas de APIs con Jest y Supertest.",
          ],
        },
        {
          role: "Desarrollador Front End (Prácticas)",
          company: "Myllox",
          period: "Marzo 2024 — Junio 2024",
          points: [
            "Lideré la adaptación de la plataforma web a entorno móvil utilizando React Native.",
            "Mejoré la accesibilidad y la interfaz de usuario (UI/UX), asegurando un rendimiento fluido en diversos dispositivos.",
          ],
        },
        {
          role: "L1 Logistics Associate",
          company: "Amazon",
          period: "Mayo 2025 — Enero 2026",
          points: [
            "Gestión de procesos logísticos cumpliendo estrictos objetivos de rendimiento y calidad.",
            "Resolución de problemas bajo presión y trabajo en equipo en un entorno tecnológico avanzado.",
          ],
        },
        {
          role: "Experiencia adicional · Sector servicios",
          company: "Burger King · Goiko",
          period: "",
          points: [
            "Experiencia en atención al cliente desarrollando gestión del tiempo y trato con el público.",
          ],
        },
      ],
    },
    education: {
      title: "Formación Académica",
      items: [
        {
          name: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
          place: "Institut TIC de Barcelona",
          period: "2025 — 2026",
        },
        {
          name: "Curso de Especialización en Inteligencia Artificial y Big Data",
          place: "Institut TIC de Barcelona",
          period: "2024 — 2025",
        },
        {
          name: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
          place: "Instituto Pedralbes",
          period: "2022 — 2024",
        },
      ],
    },
    languages: {
      title: "Idiomas",
      items: [
        { name: "Español", level: "Nativo", pct: 100 },
        { name: "Inglés", level: "Avanzado (B2/C1)", pct: 80 },
        { name: "Alemán", level: "Básico (A2)", pct: 35 },
      ],
    },
    contact: {
      title: "Trabajemos juntos",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      locationLabel: "Ubicación",
    },
    footer: {
      built: "Diseñado y desarrollado por Joan Guerrero Sanchez",
    },
  },

  en: {
    meta: {
      lang: "en",
      title: "Joan Guerrero Sanchez · Software Developer & AI Specialist",
      description:
        "Portfolio of Joan Guerrero Sanchez — Full Stack Developer specializing in Artificial Intelligence and Big Data.",
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      role: "Software Developer · AI Specialist (DAM + IA)",
      name: "Joan Guerrero Sanchez",
      tagline:
        "Full Stack Developer specializing in Artificial Intelligence and Big Data. I build innovative technical solutions, from RAG architectures to complete web platforms.",
      location: "Barcelona, Spain",
      photoAlt: "Profile photo of Joan Guerrero Sanchez",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      ctaDownload: "Download resume",
    },
    resume: {
      title: "Resume",
      subtitle: "Download my CV as PDF",
      downloadEs: "Spanish (PDF)",
      downloadEn: "English (PDF)",
    },
    about: {
      title: "Professional Profile",
      body: "Full Stack Developer specializing in Artificial Intelligence and Big Data. I combine a solid foundation in software development (Java, Python) with practical experience in Deep Learning and RAG architectures. Seeking to apply innovative technical solutions. Proven ability for self-learning and developing complex AI projects from scratch.",
      stats: [
        { value: "3+", label: "Technical degrees" },
        { value: "4+", label: "AI & engineering projects" },
        { value: "B2/C1", label: "Professional English" },
      ],
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Technologies I work with every day",
      groups: [
        {
          name: "Programming Languages",
          items: ["Python (Advanced)", "Java", "JavaScript (ES6+)", "TypeScript", "SQL", "Bash"],
        },
        {
          name: "Artificial Intelligence & Data",
          items: [
            "PyTorch",
            "TensorFlow",
            "Hugging Face Transformers",
            "RAG (Retrieval-Augmented Generation)",
            "LangChain",
            "FAISS",
            "Computer Vision (OpenCV)",
            "Pandas",
            "NumPy",
          ],
        },
        {
          name: "Web & Mobile Development",
          items: ["React", "Vue.js", "Node.js (Express)", "React Native", "HTML5", "CSS3 / Sass"],
        },
        {
          name: "Tools & DevOps",
          items: ["Git", "GitHub", "Docker", "Linux", "Agile Methodologies (Scrum)"],
        },
        {
          name: "Databases",
          items: ["MongoDB", "MySQL", "PostgreSQL"],
        },
      ],
    },
    projects: {
      title: "Engineering & AI Projects",
      subtitle: "A selection of projects I've built from scratch",
      viewGithub: "View on GitHub",
      items: [
        {
          name: "Pirates of Andromeda",
          github: "https://github.com/GnChez/PiratesdAndromeda",
          stack: ["Kotlin", "FastAPI", "React", "WebSockets", "MySQL"],
          points: [
            "Real-time multiplayer escape-room experience with an Android app, FastAPI backend, and React web dashboard; deployed to production.",
            "WebSocket and MQTT channels for live gameplay, voting, sabotages, and real-time monitoring.",
            "IoT integration with ESP32 devices (NFC, LEDs) for physical missions in in-person sessions.",
          ],
        },
        {
          name: "Robot Escape Web Platform",
          github: "https://github.com/GnChez/Robot-Escape-Web",
          stack: ["Vue.js", "Vuetify", "JavaScript", "GitHub Pages"],
          points: [
            "Web frontend for the Robot Escape ecosystem, an online multiplayer 3D game built with Unity.",
            "UI built with Vue.js and Vuetify: responsive layout, reusable components, and a community-focused gamer experience.",
          ],
        },
        {
          name: "Local RAG Document Assistant",
          github: "https://github.com/GnChez/RAG-Document-Assistant",
          stack: ["Python", "Llama-3", "FAISS", "Gradio"],
          points: [
            'Local AI system capable of processing and "chatting" with private PDF documents without sending data to the cloud.',
            "Data ingestion, chunking, and semantic vector search pipelines using FAISS and Sentence-Transformers.",
            "Inference optimization through quantization of LLM models (Llama-3, Phi-3) for efficient execution on consumer hardware.",
          ],
        },
        {
          name: "Doom Autonomous Agent (Reinforcement Learning)",
          github: "https://github.com/GnChez/DOOM-Reinforcement-Learning-Agent",
          stack: ["Python", "PyTorch", "Stable Baselines 3"],
          points: [
            "Training of an autonomous agent capable of navigating and fighting in the 3D VizDoom environment using PPO algorithms.",
            "Modular software architecture applying the Strategy Pattern to manage dynamic reward functions.",
            "Curriculum Learning to improve model convergence in progressively challenging scenarios.",
          ],
        },
        {
          name: "BERT Sentiment Classifier",
          github: "https://github.com/GnChez/BERT-Sentiment-Analysis-Fine-Tuning-for-Movie-Reviews",
          stack: ["PyTorch", "Transformers"],
          points: [
            "Fine-tuning of a BERT model for sentiment classification on massive datasets.",
            "Custom neural network on the base architecture to optimize accuracy in specific domains.",
          ],
        },
      ],
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          role: "Back End Developer",
          company: "Myllox",
          period: "February 2026 — Present",
          points: [
            "Contributed to the Node.js server runtime (Express, ES modules): multi-process architecture with a process monitor and specialized services, IPC communication, and an administration API over HTTPS.",
            "Integration with a centralized server (JWT authentication/sessions), configuration support for Nginx (reverse proxy), and service health monitoring with alerts.",
            "Modular JavaScript operational interfaces (server/service/runtime dashboards): real-time indicators, ping history, log panels, and polling strategies for consecutive failures.",
            "Automated API testing with Jest and Supertest.",
          ],
        },
        {
          role: "Front-End Developer (Internship)",
          company: "Myllox",
          period: "March 2024 — June 2024",
          points: [
            "Led the adaptation of the web platform to a mobile environment using React Native.",
            "Improved accessibility and the user interface (UI/UX), ensuring smooth performance across various devices.",
          ],
        },
        {
          role: "L1 Logistics Associate",
          company: "Amazon",
          period: "June 2025 — February 2026",
          points: [
            "Management of logistics processes, meeting strict performance and quality objectives.",
            "Problem-solving under pressure and teamwork in an advanced technological environment.",
          ],
        },
        {
          role: "Additional experience · Service sector",
          company: "Burger King · Goiko",
          period: "",
          points: [
            "Customer service experience developing time management and people skills.",
          ],
        },
      ],
    },
    education: {
      title: "Academic Background",
      items: [
        {
          name: "Advanced Technician in Web Application Development (DAW)",
          place: "Institut TIC de Barcelona",
          period: "2025 — 2026",
        },
        {
          name: "Specialization Course in Artificial Intelligence and Big Data",
          place: "Institut TIC de Barcelona",
          period: "2024 — 2025",
        },
        {
          name: "Advanced Technician in Multiplatform Application Development (DAM)",
          place: "Instituto Pedralbes",
          period: "2022 — 2024",
        },
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Spanish", level: "Native", pct: 100 },
        { name: "English", level: "Professional (B2/C1)", pct: 80 },
        { name: "German", level: "Basic (A2)", pct: 35 },
      ],
    },
    contact: {
      title: "Let's work together",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      locationLabel: "Location",
    },
    footer: {
      built: "Designed and developed by Joan Guerrero Sanchez",
    },
  },
};

const CONTACT = {
  email: "jo-an-gs@hotmail.com",
  linkedin: "https://linkedin.com/in/jg-chez",
  github: "https://github.com/GnChez",
};

const RESUMES = {
  es: {
    file: "cv/CV_Joan_Guerrero_ES.pdf",
    downloadName: "Joan_Guerrero_CV_ES.pdf",
  },
  en: {
    file: "cv/CV_Joan_Guerrero_EN.pdf",
    downloadName: "Joan_Guerrero_CV_EN.pdf",
  },
};

// Profile photo — set `photo` to your image path when ready (e.g. "assets/profile.jpg").
const PROFILE = {
  photo: "",
  initials: "JG",
};
