import { ExternalIcon, GithubIcon } from "./icons";

function Card({ project, featured = false }) {
  if (!project?.name || !project?.description || !project?.media) return null;

  const actions = (
    <div className="flex flex-wrap gap-2 pt-1">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
      >
        <ExternalIcon className="h-4 w-4" />
        Ver demo
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
      >
        <GithubIcon className="h-4 w-4" />
        Código
      </a>
    </div>
  );

  const meta = (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {project.name}
        </h3>
        {project.role && (
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/60">
            {project.role}
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed text-white/70">{project.description}</p>
      {project.stack?.length > 0 && (
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-violet-400/10 px-2 py-0.5 text-xs text-violet-200"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  if (featured) {
    return (
      <article className="group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-violet-400/35">
        <div className="grid min-w-0 md:grid-cols-2">
          <div className="min-w-0 overflow-hidden bg-neutral-900">
            <img
              src={project.media}
              alt={`Captura de ${project.name}`}
              loading="eager"
              decoding="async"
              className="h-56 w-full max-w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] md:h-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-3 p-5 md:p-7">
            <p className="text-xs font-medium uppercase tracking-wider text-violet-300">
              Proyecto destacado
            </p>
            {meta}
            {actions}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-violet-400/35">
      <div className="min-w-0 overflow-hidden bg-neutral-900">
        <img
          src={project.media}
          alt={`Captura de ${project.name}`}
          loading="lazy"
          decoding="async"
          className="h-44 w-full max-w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        {meta}
        <div className="mt-auto">{actions}</div>
      </div>
    </article>
  );
}

export default Card;
