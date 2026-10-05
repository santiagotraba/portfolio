import { PROYECTS } from "./proyects";
import Card from "./Card";
import { GithubIcon } from "./icons";

function Proyectos() {
  const visible = PROYECTS.filter((project) => project.visible !== false);
  const featured = visible.find((project) => project.featured);
  const rest = visible.filter((project) => !project.featured);

  return (
    <div className="min-w-0 space-y-4">
      {featured && <Card project={featured} featured />}
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
        {rest.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>
      <a
        href="https://github.com/santiagotraba"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-white"
      >
        <GithubIcon className="h-4 w-4" />
        Ver más proyectos en GitHub
      </a>
    </div>
  );
}

export default Proyectos;
