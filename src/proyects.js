export const PROYECTS = [
  {
    id: "mate-argentino",
    name: "Mate Argentino",
    description:
      "E-commerce de mates, en producción. Freelance (2026). Hice el frontend; el backend lo hizo un colaborador.",
    decisions: [
      "El carrito es un store de Zustand persistido (mates-terere-cart): si el producto ya está, suma la cantidad, y el total se calcula con cash_price.",
      "Productos, perfiles y pedidos se leen y escriben con el cliente de Supabase. Las fotos se suben al bucket product-images.",
    ],
    media: "/mate-argentino.png",
    url: "https://mate-argentino-web-nu.vercel.app/",
    codeNote: "Código privado (proyecto de cliente)",
    stack: ["React", "Zustand", "Supabase", "Tailwind"],
    role: "Frontend · freelance",
    featured: true,
  },
  {
    id: "egym",
    name: "E-GYM",
    description:
      "Ecommerce de indumentaria deportiva: catálogo, búsqueda, carrito y flujo de usuario. Frontend en un proyecto de equipo.",
    decisions: [
      "El carrito y la sesión están en React Context y se guardan en localStorage.",
      "El catálogo se consume con Axios (GET /products) y el listado se pagina en el cliente, de a 10, con un componente Pagination.",
    ],
    media: "/EGym.png",
    url: "https://frontend-pf-three.vercel.app/",
    github: "https://github.com/jdelaiglesia/egym-frontend",
    // TODO: confirmar con Santiago — package.json declara Redux Toolkit y react-redux, pero en src no hay un store. El estado que revisé está en Context.
    stack: ["React", "Tailwind", "Axios"],
    role: "Frontend · equipo",
  },
  {
    id: "nimbus",
    name: "Nimbus",
    description:
      "Dashboard con analytics, clientes, billing y modo oscuro. UI de producto: métricas, tablas, gráficos y componentes reutilizables.",
    decisions: [
      "Las vistas comparten un layout (sidebar y topbar) definido como ruta padre de React Router.",
      "Métricas, clientes y facturas salen de un módulo local (mock-data). En clientes, el filtro por texto, plan y estado es estado local.",
    ],
    media: "/professionalsaasdashboard.png",
    url: "https://nimbus-plum-nine.vercel.app/",
    github: "https://github.com/santiagotraba/Nimbus",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui"],
    role: "Frontend",
  },
  {
    id: "finzen",
    name: "Finzen",
    description:
      "Gestor de finanzas personales: landing, login y dashboard con gráficos, presupuestos y exportación. Demo de producto frontend.",
    decisions: [
      "Sesión, categorías, movimientos y presupuestos están en un store de Zustand persistido en localStorage (finance-app-v1).",
      "Las rutas usan TanStack Router. El login no llama a un backend: cualquier email y contraseña entra al dashboard.",
    ],
    media: "/finzen.png",
    url: "https://expense-star.vercel.app/",
    stack: ["React", "Zustand", "Tailwind"],
    role: "Frontend",
  },
  {
    id: "admin-dashboard",
    name: "Admin Dashboard",
    description:
      "Panel de administración para un store: usuarios, productos, órdenes y métricas. Auth, tablas dinámicas, CRUD y visualización de datos.",
    media: "/admindashboard.png",
    url: "https://admin-dashboard-suite.vercel.app",
    github: "https://github.com/santiagotraba/admin-dashboard-suite",
    stack: ["Next.js", "React", "Tailwind"],
    role: "Frontend",
    visible: false,
  },
  {
    id: "lol-stats",
    name: "LoL Stats",
    description:
      "App para buscar invocadores y ver rendimiento, historial y gráficos. Interfaz de datos densa, pensada para leerse rápido.",
    media: "/lolstatsdashboard.png",
    url: "https://lol-stats-dashboard.vercel.app",
    github: "https://github.com/santiagotraba/lol-stats-dashboard",
    stack: ["React", "Tailwind", "APIs"],
    role: "Frontend",
    visible: false,
  },
  {
    id: "atlas",
    name: "Atlas",
    description:
      "Tracker de búsqueda laboral en kanban: pipeline, cards y alta de postulaciones. Mockup frontend con estado en el navegador.",
    media: "/atlas.png",
    url: "https://my-job-buddy.vercel.app/auth",
    stack: ["React", "Tailwind"],
    role: "Frontend",
    visible: false,
  },
];

export const EXPERIENCE = [
  {
    id: "odaclick",
    company: "Odaclick Games Studio",
    role: "Frontend Developer",
    period: "05/2025 – 09/2026",
    points: [
      "Equipos de ~10 personas, trabajo conjunto con backend, diseño y producto.",
      "Universo (ticketera web): maquetación completa de la app móvil en React Native; maquetación, refactorización y consumo de APIs REST en el sitio web.",
      "Interpass (venta de seguros): maquetación y consumo de APIs REST desde el diseño; tests con Jest de vistas y componentes reutilizables.",
      "Stack: React, Next.js, TypeScript, Redux, Tailwind CSS, React Native, Jest, Docker.",
    ],
  },
  {
    id: "poncho",
    company: "Poncho Capital",
    role: "Frontend Developer",
    period: "03/2024 – 03/2025 (pasante desde 03/2024, contratado desde 10/2024)",
    points: [
      "Interfaz de una aplicación web de inversiones desde el diseño, con componentes reutilizables y vistas responsive.",
      "Integración con APIs del backend (incluye GraphQL).",
      "Carga de nuevas monedas en la base de datos (SQL) para habilitar compra y venta.",
      "Stack: React, JavaScript, TypeScript, HTML, CSS, SQL, GraphQL.",
    ],
  },
];

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Redux",
  "React Native",
  "Jest",
  "Git",
];
