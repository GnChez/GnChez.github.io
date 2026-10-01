// Bilingual content (ES / EN) for the portfolio, with two professional profiles.
// Shared text lives at the top level of each language; everything that differs between
// the Backend and the AI / ML profile lives under `profiles.backend` / `profiles.ai`
// and is deep-merged over it (arrays are replaced, not merged).
// Switching language or profile only swaps this data — no page reload needed.

const TRANSLATIONS = {
  es: {
    meta: {
      lang: "es",
      description:
        "Portfolio de Joan Guerrero Sánchez — Desarrollador Backend y AI / ML Engineer junior. Node.js, Python, APIs en producción, RAG, NLP y aprendizaje por refuerzo.",
    },
    nav: {
      about: "Perfil",
      work: "Cómo trabajo",
      projects: "Proyectos",
      experience: "Trayectoria",
      contact: "Contacto",
      menu: "Menú",
    },
    profileSwitch: {
      label: "Ver perfil",
      backend: "Backend",
      ai: "IA / ML",
    },
    hero: {
      name: "Joan Guerrero Sánchez",
      location: "Zaragoza, España",
      photoAlt: "Foto de perfil de Joan Guerrero Sánchez",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactar",
      ctaDownload: "Descargar CV",
    },
    elements: {
      eyebrow: "Las cuatro naciones",
      title: "Cómo trabajo",
      sub: "Siempre me ha gustado la idea de que dominar algo no va de fuerza, sino de equilibrio. Cada elemento es una forma distinta de afrontar un problema; los buenos proyectos necesitan los cuatro.",
      items: [
        {
          key: "water",
          nation: "Tribu del Agua",
          name: "Agua",
          verb: "Adaptarse",
          body: "El agua toma la forma de lo que la contiene. Me muevo entre frontend, backend, móvil e IA según lo que pida el proyecto, sin perder el hilo.",
          proof: "Prueba de concepto de la plataforma de la empresa en móvil con React Native; al terminar las prácticas me contrataron de vuelta como backend.",
          tags: ["React", "React Native", "TypeScript", "Node.js"],
        },
        {
          key: "earth",
          nation: "Reino Tierra",
          name: "Tierra",
          verb: "Construir",
          body: "Sistemas que aguantan peso. Servidores que no se caen, APIs con tests y modelos de datos pensados para cambiar sin romperse.",
          proof: "Runtime multi-proceso en Node.js con supervisor e IPC, autenticación JWT, Nginx como reverse proxy y pruebas con Jest y Supertest.",
          tags: ["Node.js", "FastAPI", "PostgreSQL", "Docker"],
        },
        {
          key: "fire",
          nation: "Nación del Fuego",
          name: "Fuego",
          verb: "Impulso",
          body: "El fuego es energía con disciplina. Es lo que me lleva a entrenar modelos desde cero y a insistir hasta que convergen.",
          proof: "Agente PPO para VizDoom con curriculum learning; fine-tuning de BERT con capa de clasificación propia.",
          tags: ["PyTorch", "Stable Baselines 3", "Transformers"],
        },
        {
          key: "air",
          nation: "Nómadas del Aire",
          name: "Aire",
          verb: "Explorar",
          body: "Libertad para aprender. Aprendo herramientas nuevas por mi cuenta, sigo la curiosidad y vuelvo con lo que de verdad sirve.",
          proof: "Asistente RAG 100% local con Llama-3 cuantizado a 4 bits y FAISS: chatear con PDFs sin enviar nada a la nube.",
          tags: ["RAG", "FAISS", "Sentence-Transformers", "LLMs"],
        },
      ],
    },
    tea: {
      eyebrow: "Desde la casa de té",
      button: "Otra taza",
      quotes: [
        "Un bug que solo aparece a veces es un maestro paciente.",
        "El código escrito con prisa se depura con calma.",
        "Refactorizar es como preparar té: si lo apuras, sale amargo.",
        "Ningún deploy es tan urgente que no pueda esperar a los tests.",
        "Pedir ayuda a tiempo no es debilidad; es saber leer el terreno.",
      ],
    },
    resume: {
      title: "Currículum",
      downloadEs: "Español (PDF)",
      downloadEn: "English (PDF)",
    },
    about: {
      title: "Perfil profesional",
    },
    skills: {
      title: "Herramientas",
    },
    projects: {
      viewGithub: "Ver en GitHub",
    },
    experience: {
      eyebrow: "El camino",
      title: "Experiencia",
    },
    education: {
      title: "Formación",
      items: [
        {
          name: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
          place: "Institut TIC de Barcelona",
          period: "2025 — 2026",
        },
        {
          name: "Especialización en Inteligencia Artificial y Big Data",
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
      title: "Hablemos",
      subtitle: "Si buscas a alguien que se adapte, construya con cuidado y no deje de aprender, escríbeme. Respondo rápido.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      locationLabel: "Ubicación",
    },
    footer: {
      built: "Diseñado y desarrollado por Joan Guerrero Sánchez",
    },

    profiles: {
      backend: {
        meta: { title: "Joan Guerrero Sánchez · Desarrollador Backend" },
        hero: {
          role: "Desarrollador Backend · Node.js / Python",
          tagline:
            "APIs y sistemas en producción. Trabajo en el runtime de servidor de la empresa: arquitectura multi-proceso, APIs autenticadas, planificación de tareas, monitorización y pruebas automatizadas.",
        },
        resume: { subtitle: "Descarga mi CV de Backend en PDF" },
        about: {
          body: "Desarrollador backend con experiencia en Node.js (Express, APIs REST, JWT) y Python (FastAPI). Actualmente trabajo en el runtime de servidor: arquitectura multi-proceso, APIs autenticadas, planificación de tareas, monitorización y pruebas automatizadas. Formación en IA y Big Data; busco un rol backend en producto, preferiblemente con APIs y sistemas distribuidos.",
          stats: [
            { value: "Node.js", label: "Runtime de servidor en producción" },
            { value: "3", label: "Titulaciones técnicas" },
            { value: "B2/C1", label: "Inglés avanzado" },
          ],
        },
        skills: {
          groups: [
            {
              name: "Backend",
              items: ["Node.js (Express, ES modules)", "Python (FastAPI)", "APIs REST", "JWT / sesiones", "IPC multi-proceso", "WebSockets", "Jest + Supertest"],
            },
            {
              name: "Infraestructura",
              items: ["Docker", "Linux", "Nginx (reverse proxy)", "Git / GitHub", "Monitorización y alertas", "Scrum"],
            },
            { name: "Datos", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"] },
            {
              name: "Frontend",
              items: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / Sass", "React Native"],
            },
            { name: "IA (complemento)", items: ["RAG", "FAISS", "PyTorch", "Hugging Face Transformers"] },
          ],
        },
        projects: {
          title: "Proyectos destacados",
          subtitle: "Backends en producción, tiempo real y APIs",
          items: [
            {
              name: "Piratas de Andrómeda",
              github: "https://github.com/GnChez/PiratesdAndromeda",
              stack: ["FastAPI", "React", "WebSockets", "MQTT", "Kotlin"],
              points: [
                "Backend FastAPI en producción para una experiencia multijugador en tiempo real (app Android y panel web).",
                "Canales WebSocket y MQTT para estado en vivo; integración IoT con ESP32.",
              ],
            },
            {
              name: "Asistente RAG Local",
              github: "https://github.com/GnChez/RAG-Document-Assistant",
              stack: ["Python", "FAISS", "Gradio"],
              points: [
                "API de consulta sobre PDFs privados (ingesta, embeddings, búsqueda vectorial) con inferencia local GPU/CPU.",
              ],
            },
            {
              name: "Plataforma Web Robot Escape",
              github: "https://github.com/GnChez/Robot-Escape-Web",
              stack: ["Vue.js", "Vuetify", "JavaScript"],
              points: [
                "Frontend web del ecosistema Robot Escape, un juego 3D multijugador online desarrollado en Unity.",
              ],
            },
          ],
        },
        experience: {
          items: [
            {
              role: "Desarrollador Backend",
              company: "Myllox",
              period: "Febrero 2026 — Actualidad",
              points: [
                "Desarrollo del runtime de servidor en Node.js: arquitectura multi-proceso con supervisor y servicios especializados, comunicación IPC y API de administración sobre HTTPS.",
                "Autenticación JWT/sesiones, reverse proxy con Nginx, planificación de tareas y monitorización de salud con alertas.",
                "Editor visual de workflows y contrato de datos entre la UI y el runtime, para exportar definiciones que se ejecutan en producción.",
                "Librerías JavaScript compartidas entre servidor y navegador; pruebas de APIs con Jest y Supertest (unidad y e2e).",
              ],
            },
            {
              role: "Operario de Logística L1",
              company: "Amazon",
              period: "Mayo 2025 — Enero 2026",
              points: [
                "Operación logística bajo objetivos de rendimiento y calidad, compatibilizada con la formación técnica.",
              ],
            },
            {
              role: "Desarrollador Frontend (Prácticas)",
              company: "Myllox",
              period: "Marzo 2024 — Junio 2024",
              points: [
                "Prueba de concepto de la plataforma web a móvil con React Native. Contratado de vuelta como backend al terminar las prácticas.",
              ],
            },
          ],
        },
      },

      ai: {
        meta: { title: "Joan Guerrero Sánchez · AI / ML Engineer junior" },
        hero: {
          role: "AI / ML Engineer junior · RAG, NLP y aprendizaje por refuerzo",
          tagline:
            "He construido un sistema RAG local, fine-tuning de BERT y un agente PPO en VizDoom. Y como desarrollador backend en producción, sé llevar esos modelos a servicios reales.",
        },
        resume: { subtitle: "Descarga mi CV de IA / ML en PDF" },
        about: {
          body: "Desarrollador especializado en Inteligencia Artificial y Big Data. He construido un sistema RAG local (Llama-3 / Phi-3, FAISS), fine-tuning de BERT y un agente PPO en VizDoom. En paralelo, experiencia profesional en backend (Node.js, APIs, runtime en producción), que me permite llevar modelos a servicios reales. Busco un rol junior de AI/ML Engineer o backend con IA en producto.",
          stats: [
            { value: "3", label: "Proyectos de IA: RAG, NLP y RL" },
            { value: "4-bit", label: "Llama-3 cuantizado en local" },
            { value: "B2/C1", label: "Inglés avanzado" },
          ],
        },
        skills: {
          groups: [
            {
              name: "IA y ML",
              items: ["PyTorch", "Hugging Face Transformers", "RAG (chunking, embeddings, FAISS)", "Sentence-Transformers", "Cuantización de LLM", "PPO / Stable Baselines 3", "OpenCV"],
            },
            { name: "Lenguajes", items: ["Python", "JavaScript (ES6+)", "SQL", "Bash"] },
            { name: "Serving y producto", items: ["Gradio", "FastAPI", "Node.js (Express)", "Docker", "Git / GitHub"] },
            { name: "Datos", items: ["Pandas", "NumPy", "PostgreSQL", "MySQL", "MongoDB"] },
          ],
        },
        projects: {
          title: "Proyectos de IA",
          subtitle: "Modelos construidos, entrenados y servidos desde cero",
          items: [
            {
              name: "Asistente de Documentos RAG Local",
              github: "https://github.com/GnChez/RAG-Document-Assistant",
              stack: ["Python", "Llama-3-8B", "Phi-3", "FAISS", "Gradio"],
              points: [
                "Chat sobre PDFs privados sin nube: ingesta, chunking, embeddings MiniLM e índice FAISS.",
                "Inferencia adaptativa: Llama-3-8B a 4 bits en GPU NVIDIA, o Phi-3 Mini en CPU.",
              ],
            },
            {
              name: "Clasificador de Sentimientos BERT",
              github: "https://github.com/GnChez/BERT-Sentiment-Analysis-Fine-Tuning-for-Movie-Reviews",
              stack: ["PyTorch", "Transformers", "IMDB"],
              points: [
                "Fine-tuning de bert-base-uncased sobre reseñas IMDB, con capa de clasificación propia sobre el modelo base.",
              ],
            },
            {
              name: "Agente Autónomo de Doom",
              github: "https://github.com/GnChez/DOOM-Reinforcement-Learning-Agent",
              stack: ["PyTorch", "Stable Baselines 3", "PPO", "VizDoom"],
              points: [
                "Agente PPO con curriculum learning y recompensas por escenario; visión por frames apilados.",
              ],
            },
            {
              name: "Piratas de Andrómeda",
              github: "https://github.com/GnChez/PiratesdAndromeda",
              stack: ["FastAPI", "WebSockets"],
              points: [
                "Backend FastAPI en producción (tiempo real). Encaje natural para servir modelos detrás de una API.",
              ],
            },
          ],
        },
        experience: {
          items: [
            {
              role: "Desarrollador Backend",
              company: "Myllox",
              period: "Febrero 2026 — Actualidad",
              points: [
                "Software de producción en Node.js: APIs autenticadas, runtime multi-proceso, planificación de tareas y monitorización. Base de ingeniería para integrar modelos y servicios de datos en producto.",
                "Pruebas automatizadas (Jest, Supertest) y librerías compartidas servidor/navegador.",
              ],
            },
            {
              role: "Operario de Logística L1",
              company: "Amazon",
              period: "Mayo 2025 — Enero 2026",
              points: ["Operación logística compatibilizada con el curso de especialización en IA y Big Data."],
            },
            {
              role: "Desarrollador Frontend (Prácticas)",
              company: "Myllox",
              period: "Marzo 2024 — Junio 2024",
              points: ["App móvil con React Native. Contratado de vuelta como backend al terminar las prácticas."],
            },
          ],
        },
      },
    },
  },

  en: {
    meta: {
      lang: "en",
      description:
        "Portfolio of Joan Guerrero Sánchez — Backend Developer and junior AI / ML Engineer. Node.js, Python, production APIs, RAG, NLP and reinforcement learning.",
    },
    nav: {
      about: "About",
      work: "How I work",
      projects: "Projects",
      experience: "Journey",
      contact: "Contact",
      menu: "Menu",
    },
    profileSwitch: {
      label: "View profile",
      backend: "Backend",
      ai: "AI / ML",
    },
    hero: {
      name: "Joan Guerrero Sánchez",
      location: "Zaragoza, Spain",
      photoAlt: "Profile photo of Joan Guerrero Sánchez",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      ctaDownload: "Download CV",
    },
    elements: {
      eyebrow: "The four nations",
      title: "How I work",
      sub: "I've always liked the idea that mastering something isn't about force, but balance. Each element is a different way of approaching a problem; good projects need all four.",
      items: [
        {
          key: "water",
          nation: "Water Tribe",
          name: "Water",
          verb: "Adapt",
          body: "Water takes the shape of whatever holds it. I move between frontend, backend, mobile and AI as the project needs, without losing the thread.",
          proof: "Proof-of-concept of the company's platform on mobile with React Native; after the internship they hired me back as a backend developer.",
          tags: ["React", "React Native", "TypeScript", "Node.js"],
        },
        {
          key: "earth",
          nation: "Earth Kingdom",
          name: "Earth",
          verb: "Build",
          body: "Systems that carry weight. Servers that stay up, APIs with tests, and data models designed to change without breaking.",
          proof: "Multi-process Node.js runtime with a supervisor and IPC, JWT auth, an Nginx reverse proxy and Jest + Supertest suites.",
          tags: ["Node.js", "FastAPI", "PostgreSQL", "Docker"],
        },
        {
          key: "fire",
          nation: "Fire Nation",
          name: "Fire",
          verb: "Drive",
          body: "Fire is energy with discipline. It's what gets me training models from scratch and pushing until they converge.",
          proof: "PPO agent for VizDoom with curriculum learning; BERT fine-tuning with a custom classification head.",
          tags: ["PyTorch", "Stable Baselines 3", "Transformers"],
        },
        {
          key: "air",
          nation: "Air Nomads",
          name: "Air",
          verb: "Explore",
          body: "Freedom to learn. I teach myself new tools, follow curiosity, and come back with what's actually useful.",
          proof: "Fully local RAG assistant with 4-bit Llama-3 and FAISS: chat with PDFs without sending anything to the cloud.",
          tags: ["RAG", "FAISS", "Sentence-Transformers", "LLMs"],
        },
      ],
    },
    tea: {
      eyebrow: "From the teahouse",
      button: "Another cup",
      quotes: [
        "A bug that only appears sometimes is a patient teacher.",
        "Code written in a hurry is debugged at leisure.",
        "Refactoring is like brewing tea: rush it and it turns bitter.",
        "No deploy is so urgent it can't wait for the tests.",
        "Asking for help in time isn't weakness; it's reading the terrain.",
      ],
    },
    resume: {
      title: "Resume",
      downloadEs: "Spanish (PDF)",
      downloadEn: "English (PDF)",
    },
    about: {
      title: "Professional profile",
    },
    skills: {
      title: "Toolkit",
    },
    projects: {
      viewGithub: "View on GitHub",
    },
    experience: {
      eyebrow: "The path",
      title: "Experience",
    },
    education: {
      title: "Education",
      items: [
        {
          name: "Advanced Vocational Training in Web Application Development (DAW)",
          place: "Institut TIC de Barcelona",
          period: "2025 — 2026",
        },
        {
          name: "Specialization in Artificial Intelligence and Big Data",
          place: "Institut TIC de Barcelona",
          period: "2024 — 2025",
        },
        {
          name: "Advanced Vocational Training in Multiplatform Application Development (DAM)",
          place: "Instituto Pedralbes",
          period: "2022 — 2024",
        },
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Spanish", level: "Native", pct: 100 },
        { name: "English", level: "Advanced (B2/C1)", pct: 80 },
        { name: "German", level: "Basic (A2)", pct: 35 },
      ],
    },
    contact: {
      title: "Let's talk",
      subtitle: "If you're looking for someone who adapts, builds with care and keeps learning, get in touch. I reply quickly.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      locationLabel: "Location",
    },
    footer: {
      built: "Designed and developed by Joan Guerrero Sánchez",
    },

    profiles: {
      backend: {
        meta: { title: "Joan Guerrero Sánchez · Backend Developer" },
        hero: {
          role: "Backend Developer · Node.js / Python",
          tagline:
            "APIs and production systems. I work on the company's server runtime: multi-process architecture, authenticated APIs, job scheduling, health monitoring and automated tests.",
        },
        resume: { subtitle: "Download my Backend CV as PDF" },
        about: {
          body: "Backend developer with hands-on experience in Node.js (Express, REST APIs, JWT) and Python (FastAPI). At the company I work on the server runtime: multi-process architecture, authenticated APIs, job scheduling, health monitoring, and automated tests. Background in AI and Big Data; looking for a backend role in production systems and APIs.",
          stats: [
            { value: "Node.js", label: "Server runtime in production" },
            { value: "3", label: "Technical qualifications" },
            { value: "B2/C1", label: "Advanced English" },
          ],
        },
        skills: {
          groups: [
            {
              name: "Backend",
              items: ["Node.js (Express, ES modules)", "Python (FastAPI)", "REST APIs", "JWT / sessions", "Multi-process IPC", "WebSockets", "Jest + Supertest"],
            },
            {
              name: "Infrastructure",
              items: ["Docker", "Linux", "Nginx (reverse proxy)", "Git / GitHub", "Monitoring and alerts", "Scrum"],
            },
            { name: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"] },
            {
              name: "Frontend",
              items: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / Sass", "React Native"],
            },
            { name: "AI (adjacent)", items: ["RAG", "FAISS", "PyTorch", "Hugging Face Transformers"] },
          ],
        },
        projects: {
          title: "Selected projects",
          subtitle: "Production backends, real time and APIs",
          items: [
            {
              name: "Pirates of Andromeda",
              github: "https://github.com/GnChez/PiratesdAndromeda",
              stack: ["FastAPI", "React", "WebSockets", "MQTT", "Kotlin"],
              points: [
                "Production FastAPI backend for a real-time multiplayer experience (Android app and web dashboard).",
                "WebSocket and MQTT channels for live state; IoT integration with ESP32.",
              ],
            },
            {
              name: "Local RAG Assistant",
              github: "https://github.com/GnChez/RAG-Document-Assistant",
              stack: ["Python", "FAISS", "Gradio"],
              points: [
                "Private PDF Q&A pipeline (ingestion, embeddings, vector search) with local GPU/CPU inference.",
              ],
            },
            {
              name: "Robot Escape Web Platform",
              github: "https://github.com/GnChez/Robot-Escape-Web",
              stack: ["Vue.js", "Vuetify", "JavaScript"],
              points: [
                "Web frontend for the Robot Escape ecosystem, an online multiplayer 3D game built with Unity.",
              ],
            },
          ],
        },
        experience: {
          items: [
            {
              role: "Backend Developer",
              company: "Myllox",
              period: "February 2026 — Present",
              points: [
                "Server runtime in Node.js: multi-process architecture with a supervisor and specialized services, IPC, and an HTTPS admin API.",
                "JWT/session auth, Nginx reverse proxy, job scheduling, and service health monitoring with alerts.",
                "Visual workflow editor and the data contract between the UI and the runtime, so exported definitions run in production.",
                "Shared JavaScript libraries for server and browser; API tests with Jest and Supertest (unit and e2e).",
              ],
            },
            {
              role: "L1 Logistics Associate",
              company: "Amazon",
              period: "May 2025 — January 2026",
              points: ["Logistics operations under strict performance and quality targets, alongside technical training."],
            },
            {
              role: "Frontend Developer (Internship)",
              company: "Myllox",
              period: "March 2024 — June 2024",
              points: [
                "Proof-of-concept mobile adaptation of the web platform with React Native. Hired back as a backend developer after the internship.",
              ],
            },
          ],
        },
      },

      ai: {
        meta: { title: "Joan Guerrero Sánchez · Junior AI / ML Engineer" },
        hero: {
          role: "Junior AI / ML Engineer · RAG, NLP and reinforcement learning",
          tagline:
            "I've built a local RAG system, fine-tuned BERT and trained a PPO agent in VizDoom. And as a production backend developer, I know how to turn those models into real services.",
        },
        resume: { subtitle: "Download my AI / ML CV as PDF" },
        about: {
          body: "Developer specializing in Artificial Intelligence and Big Data. I have built a local RAG system (Llama-3 / Phi-3, FAISS), fine-tuned BERT, and trained a PPO agent in VizDoom. I also ship production backend software (Node.js, APIs, server runtime), which I use to turn models into real services. Looking for a junior AI/ML Engineer role or a backend role with applied AI.",
          stats: [
            { value: "3", label: "AI projects: RAG, NLP and RL" },
            { value: "4-bit", label: "Quantized Llama-3, running locally" },
            { value: "B2/C1", label: "Advanced English" },
          ],
        },
        skills: {
          groups: [
            {
              name: "AI & ML",
              items: ["PyTorch", "Hugging Face Transformers", "RAG (chunking, embeddings, FAISS)", "Sentence-Transformers", "LLM quantization", "PPO / Stable Baselines 3", "OpenCV"],
            },
            { name: "Languages", items: ["Python", "JavaScript (ES6+)", "SQL", "Bash"] },
            { name: "Serving & product", items: ["Gradio", "FastAPI", "Node.js (Express)", "Docker", "Git / GitHub"] },
            { name: "Data", items: ["Pandas", "NumPy", "PostgreSQL", "MySQL", "MongoDB"] },
          ],
        },
        projects: {
          title: "AI projects",
          subtitle: "Models built, trained and served from scratch",
          items: [
            {
              name: "Local RAG Document Assistant",
              github: "https://github.com/GnChez/RAG-Document-Assistant",
              stack: ["Python", "Llama-3-8B", "Phi-3", "FAISS", "Gradio"],
              points: [
                "Private PDF chat with no cloud calls: ingestion, chunking, MiniLM embeddings, and a local FAISS index.",
                "Adaptive inference: 4-bit Llama-3-8B on NVIDIA GPU, or Phi-3 Mini on CPU.",
              ],
            },
            {
              name: "BERT Sentiment Classifier",
              github: "https://github.com/GnChez/BERT-Sentiment-Analysis-Fine-Tuning-for-Movie-Reviews",
              stack: ["PyTorch", "Transformers", "IMDB"],
              points: [
                "Fine-tuned bert-base-uncased on IMDB movie reviews, with a custom classification head on the base model.",
              ],
            },
            {
              name: "Doom Autonomous Agent",
              github: "https://github.com/GnChez/DOOM-Reinforcement-Learning-Agent",
              stack: ["PyTorch", "Stable Baselines 3", "PPO", "VizDoom"],
              points: ["PPO agent with curriculum learning and per-scenario rewards; stacked-frame vision."],
            },
            {
              name: "Pirates of Andromeda",
              github: "https://github.com/GnChez/PiratesdAndromeda",
              stack: ["FastAPI", "WebSockets"],
              points: ["Production FastAPI backend (real time). A natural fit for serving models behind an API."],
            },
          ],
        },
        experience: {
          items: [
            {
              role: "Backend Developer",
              company: "Myllox",
              period: "February 2026 — Present",
              points: [
                "Production Node.js software: authenticated APIs, multi-process runtime, job scheduling, and monitoring — the engineering layer needed to put models and data services into a product.",
                "Automated tests (Jest, Supertest) and shared server/browser libraries.",
              ],
            },
            {
              role: "L1 Logistics Associate",
              company: "Amazon",
              period: "May 2025 — January 2026",
              points: ["Logistics operations alongside a specialization course in AI and Big Data."],
            },
            {
              role: "Frontend Developer (Internship)",
              company: "Myllox",
              period: "March 2024 — June 2024",
              points: ["React Native mobile app. Hired back as a backend developer after the internship."],
            },
          ],
        },
      },
    },
  },
};

const PROFILES = ["backend", "ai"];
const DEFAULT_PROFILE = "backend";

const CONTACT = {
  email: "jo-an-gs@hotmail.com",
  linkedin: "https://linkedin.com/in/jg-chez",
  github: "https://github.com/GnChez",
};

const RESUMES = {
  backend: {
    es: { file: "cv/CV_Joan_Guerrero_Backend_ES.pdf", downloadName: "Joan_Guerrero_CV_Backend_ES.pdf" },
    en: { file: "cv/CV_Joan_Guerrero_Backend_EN.pdf", downloadName: "Joan_Guerrero_CV_Backend_EN.pdf" },
  },
  ai: {
    es: { file: "cv/CV_Joan_Guerrero_IA_ES.pdf", downloadName: "Joan_Guerrero_CV_IA_ES.pdf" },
    en: { file: "cv/CV_Joan_Guerrero_IA_EN.pdf", downloadName: "Joan_Guerrero_CV_AI_EN.pdf" },
  },
};

// Element shown next to each experience / education entry (same order as the items above).
const PATH_MARKS = {
  experience: ["earth", "earth", "water"],
  education: ["air", "fire", "earth"],
};

// Element that represents each profile (colors the hero accent).
const PROFILE_ELEMENT = { backend: "earth", ai: "fire" };
