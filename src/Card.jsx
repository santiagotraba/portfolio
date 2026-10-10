import { ExternalIcon, GithubIcon } from "./icons";

function Card({ project }) {
  if (!project?.name || !project?.description || !project?.media) return null;

  return (
    <article className="grid min-w-0 items-start gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-10">
      <div className="aspect-[16/10] min-w-0 overflow-hidden border border-line bg-[#d5d6de] md:col-span-5">
        <img
          src={project.media}
          alt={`Captura de ${project.name}`}
          loading={project.featured ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex min-w-0 flex-col gap-3 md:col-span-7">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          {project.featured ? "En producción · " : ""}
          {project.role}
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-ink">{project.name}</h3>
        <p className="max-w-prose text-[15px] leading-relaxed text-ink/85">{project.description}</p>
        {project.stack?.length > 0 && (
          <p className="text-sm text-muted">{project.stack.join(" · ")}</p>
        )}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line underline-offset-4"
          >
            <ExternalIcon className="h-4 w-4" />
            Ver demo
          </a>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line underline-offset-4"
            >
              <GithubIcon className="h-4 w-4" />
              Código
            </a>
          ) : null}
        </div>
        {project.codeNote && <p className="text-sm text-muted">{project.codeNote}</p>}
      </div>
    </article>
  );
}

export default Card;
