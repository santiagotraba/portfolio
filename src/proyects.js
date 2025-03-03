import EGym from "../public/EGym.png";
import PokemonApi from "../public/PokemonApi.png";
import fotoparaproyectoderecetas from "../public/fotoparaproyectoderecetas.png"
import taskmanager from "../public/taskmanager.png"

export const PROYECTS = [
  {
    name: "E-GYM",
    description: "Ecommerce sobre productos deportivos",
    media: EGym,
    url: "https://frontend-pf-three.vercel.app/",
    github: "https://github.com/jdelaiglesia/egym-frontend"
  },

  {
    name: "Pokemon",
    description: "Pagina web sobre informacion de los pokemons",
    media: PokemonApi,
    url: "https://pi-pokemon-front-production.up.railway.app/home",
    github: "https://github.com/santiagotraba/pi-pokemon-front"
  },

  {
    name: "Recetas de cocina",
    description: "Pagina web sobre recetas de cocinas",
    media: fotoparaproyectoderecetas,
    url: "https://recetasdecocina.vercel.app/",
    github: "https://github.com/santiagotraba/recetasdecocina/tree/main"
  },

  {
    name: "Task manager",
    description: "Creador de tareas",
    media: taskmanager,
    url: "https://task-manager-frontend-sepia.vercel.app/login",
    github: "https://github.com/santiagotraba/task-manager-frontend",
  },
];
