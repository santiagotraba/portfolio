export const PROYECTS = [
  {
    id: "mate-argentino",
    name: "Mate Argentino",
    description:
      "Un cliente necesitaba vender mates por internet. Armé el frontend del e-commerce, que está en producción; el backend lo hizo un colaborador. El carrito es un store de Zustand que persiste (mates-terere-cart): si el producto ya está, suma la cantidad, y el total se calcula con cash_price. Productos, perfiles y pedidos se leen y escriben con el cliente de Supabase, y las fotos se suben al bucket product-images.",
    media: "/mate-argentino.png",
    url: "https://mate-argentino-web-nu.vercel.app/",
    codeNote: "Código privado: es un proyecto de cliente.",
    stack: ["React", "Zustand", "Supabase", "Tailwind"],
    role: "Frontend, freelance · 2026",
    featured: true,
  },
  {
    id: "egym",
    name: "E-GYM",
    description:
      "Indumentaria deportiva, en un proyecto de equipo. Me ocupé del recorrido de catálogo, búsqueda, carrito y usuario. El carrito y la sesión viven en React Context y se guardan en localStorage. El catálogo se pide con Axios (GET /products) y el listado se pagina en el cliente, de a 10, con un componente Pagination.",
    media: "/EGym.png",
    url: "https://frontend-pf-three.vercel.app/",
    github: "https://github.com/jdelaiglesia/egym-frontend",
    // TODO: confirmar con Santiago — package.json declara Redux Toolkit y react-redux, pero en src no hay un store. El estado que revisé está en Context.
    stack: ["React", "Tailwind", "Axios"],
    role: "Frontend, en equipo",
  },
  {
    id: "nimbus",
    name: "Nimbus",
    description:
      "Una interfaz de producto para leer un negocio de un vistazo: métricas, clientes, facturación y modo oscuro. Las vistas comparten un layout —sidebar y topbar— definido como ruta padre de React Router. Métricas, clientes y facturas salen de un módulo local (mock-data). En clientes, el filtro por texto, plan y estado es estado de esa pantalla.",
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
      "Un gestor de finanzas personales para mostrar el producto de punta a punta: landing, ingreso y un dashboard con gráficos, presupuestos y exportación. La sesión, las categorías, los movimientos y los presupuestos están en un store de Zustand persistido en localStorage (finance-app-v1). Las rutas usan TanStack Router. El ingreso no llama a un backend: con cualquier email y contraseña se entra al dashboard.",
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
    company: "Odaclick Game Studio",
    role: "Desarrollador frontend",
    period: "mayo 2025 – septiembre 2026",
    paragraphs: [
      "Entré a productos de clientes del estudio. Los equipos eran de unas diez personas y el trabajo era conjunto con backend, diseño y producto: el diseño llegaba definido y yo lo pasaba a interfaz, siguiendo esa base.",
      "Universo es una ticketera web. Ahí maqueté la aplicación móvil completa en React Native. En el sitio web maqueté pantallas, refactoricé lo que ya estaba y conecté la interfaz a las APIs REST.",
      "Interpass es una plataforma de venta de seguros. Partí del diseño y armé las pantallas consumiendo las APIs REST. Mi aporte fue la maquetación, los componentes reutilizables y los layouts responsive, más los tests con Jest de vistas y componentes, para que se pudiera seguir sumando pantallas sin romper lo ya entregado.",
      "El día a día era React, Next.js, TypeScript, Redux, Tailwind CSS, React Native, Jest y Docker.",
    ],
  },
  {
    id: "poncho",
    company: "Poncho Capital",
    role: "Desarrollador frontend",
    period: "marzo 2024 – marzo 2025",
    paragraphs: [
      "Entré como pasante en marzo de 2024 y quedé contratado desde octubre. El producto era una aplicación web de inversiones. Armé la interfaz desde el diseño: componentes reutilizables y vistas responsive, con el lineamiento visual que ya tenía el equipo.",
      "Esas pantallas se conectaban a las APIs del backend, incluido GraphQL. También cargué monedas nuevas en la base SQL para habilitar la compra y la venta.",
      "El stack era React, JavaScript, TypeScript, HTML, CSS, SQL y GraphQL.",
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
