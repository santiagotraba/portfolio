import { PROYECTS } from "./proyects";
import Card from "./Card";

function Proyectos() {
  const visible = PROYECTS.filter((project) => project.visible !== false);

  return (
    <div className="min-w-0">
      {visible.map((project) => (
        <Card project={project} key={project.id} />
      ))}
      <p className="border-t border-line py-8">
        <a
          href="https://github.com/santiagotraba"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-ink underline decoration-line underline-offset-4"
        >
          Ver más proyectos en GitHub
        </a>
      </p>
    </div>
  );
}

export default Proyectos;
