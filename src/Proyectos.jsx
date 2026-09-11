import { PROYECTS } from "./proyects";
import Card from "./Card";

function Proyectos() {
  const featured = PROYECTS.find((p) => p.featured);
  const rest = PROYECTS.filter((p) => !p.featured);

  return (
    <div className="min-w-0 space-y-4">
      {featured && <Card project={featured} featured />}
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
        {rest.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
