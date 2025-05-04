import { PROYECTS } from "./proyects";
import Card from "./Card";

function Proyectos() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mt-5">
      {PROYECTS
        .filter(
          (p) => p.name && p.description && p.media && p.url && p.github
        )
        .map((p, index) => (
          <Card proyect={p} key={index} />
        ))}
    </div>
  );
}

export default Proyectos;
