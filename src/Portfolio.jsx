import Download from "./icons/Download";
import Proyectos from "./Proyectos";
import { EXPERIENCE, SKILLS } from "./proyects";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

function Portfolio() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(139,92,246,0.28),transparent)]"
      />

      <main id="contenido" className="mx-auto w-full min-w-0 max-w-5xl overflow-x-hidden px-5 pb-20">
        <section
          id="inicio"
          className="scroll-mt-24 space-y-6 pb-20 pt-10 md:pt-16"
        >
          <p className="text-sm font-medium text-violet-300">
            Disponible para roles frontend
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Santiago Traba
            </h1>
            <p className="text-lg text-white/80 md:text-xl">
              Frontend Developer · React y TypeScript
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-[17px]">
              Diseño y construyo interfaces para productos web: dashboards, SaaS
              y experiencias claras. Hoy trabajo en Odaclick Game Studio. Busco
              el próximo rol frontend en un equipo de producto.
            </p>
          </div>
          <div className="flex w-full min-w-0 flex-wrap gap-3">
            <a
              href="#proyectos"
              className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200 sm:w-auto"
            >
              Ver proyectos
            </a>
            <a
              href="/Cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              <Download className="h-5 w-5" />
              Descargar CV
            </a>
            <a
              href="mailto:santiagontraba95@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              <MailIcon className="h-5 w-5" />
              Escribime
            </a>
          </div>
          <ul className="flex w-full min-w-0 flex-wrap gap-2 pt-2" aria-label="Tecnologías principales">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/75"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="experiencia" className="scroll-mt-24 pb-20">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-white">
            Experiencia
          </h2>
          <ol className="space-y-4">
            {EXPERIENCE.map((job) => (
              <li
                key={job.id}
                className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
              >
                <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {job.role}
                    <span className="font-normal text-white/60"> · {job.company}</span>
                  </h3>
                  <p className="text-sm text-white/50">{job.period}</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/70">
                  {job.points.map((point) => (
                    <li key={point} className="pl-4 relative before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-violet-400">
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="proyectos" className="scroll-mt-24 pb-20">
          <div className="mb-6 space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Proyectos
            </h2>
            <p className="max-w-2xl text-sm text-white/60">
              Una selección de interfaces que construí: producto SaaS, paneles,
              ecommerce y herramientas de uso diario.
            </p>
          </div>
          <Proyectos />
        </section>

        <section
          id="contacto"
          className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            ¿Hablamos?
          </h2>
          <p className="mt-3 max-w-xl text-white/70">
            Estoy abierto a roles frontend. Si tu equipo necesita a alguien que
            cuide la UI y entregue interfaces claras, escribime.
          </p>
          <div className="mt-6 flex w-full min-w-0 flex-wrap gap-3">
            <a
              href="mailto:santiagontraba95@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200 sm:w-auto"
            >
              <MailIcon className="h-5 w-5" />
              <span className="sm:hidden">Email</span>
              <span className="hidden sm:inline">santiagontraba95@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/santiagotraba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              <LinkedinIcon className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/santiagotraba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              <GithubIcon className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-white/40">
        Santiago Traba · Frontend Developer · Buenos Aires
      </footer>
    </div>
  );
}

export default Portfolio;
