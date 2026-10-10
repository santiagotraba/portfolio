import Download from "./icons/Download";
import Proyectos from "./Proyectos";
import { EXPERIENCE, SKILLS } from "./proyects";

function Portfolio() {
  return (
    <div>
      <main id="contenido" className="mx-auto w-full min-w-0 max-w-page overflow-x-hidden px-5 pb-16">
        <section id="inicio" className="scroll-mt-24 grid gap-8 pb-20 pt-10 md:grid-cols-12 md:gap-x-10 md:pt-16">
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Disponible para roles frontend
            </p>
            <h1 className="mt-4 text-[2.65rem] font-semibold leading-[0.95] tracking-[-0.045em] text-ink sm:text-6xl md:text-7xl md:leading-[0.92]">
              Santiago Traba
            </h1>
            <p className="mt-4 text-lg text-ink md:text-xl">Frontend · React y TypeScript</p>
          </div>

          <figure className="mx-auto w-full max-w-[320px] md:col-span-5 md:row-span-2 md:mx-0 md:ml-auto md:max-w-[340px]">
            <img
              src="/santiago.jpg"
              alt="Retrato de Santiago Traba"
              width={400}
              height={400}
              className="aspect-square w-full border border-ink object-cover"
            />
            <figcaption className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">
              Buenos Aires
            </figcaption>
          </figure>

          <div className="md:col-span-7">
            <p className="max-w-xl text-base leading-relaxed text-ink/80 md:text-[17px]">
              Más de dos años armando interfaces de productos reales: una ticketera web, una
              plataforma de venta de seguros y una aplicación de inversiones. Busco el próximo
              equipo de producto.
            </p>
            <div className="mt-6 flex w-full min-w-0 flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#proyectos"
                className="inline-flex items-center bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink/80"
              >
                Ver proyectos
              </a>
              <a
                href="/Santiago_Traba_CV_Frontend.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
              >
                <Download className="h-4 w-4" />
                Descargar CV
              </a>
              <a
                href="mailto:santiagontraba95@gmail.com"
                className="text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
              >
                Escribime
              </a>
            </div>
            <p className="mt-8 flex max-w-xl flex-wrap gap-x-2 gap-y-1 text-sm leading-relaxed text-muted">
              {SKILLS.map((skill, index) => (
                <span key={skill} className="whitespace-nowrap">
                  {skill}
                  {index < SKILLS.length - 1 ? " ·" : ""}
                </span>
              ))}
            </p>
          </div>
        </section>

        <section id="experiencia" className="scroll-mt-24 border-t border-line pb-8 pt-12">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Experiencia</h2>
          <ol className="mt-8">
            {EXPERIENCE.map((job) => (
              <li key={job.id} className="border-t border-line py-8 first:border-t-0 first:pt-0">
                <div className="grid gap-3 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-semibold tracking-tight text-ink">{job.company}</h3>
                    <p className="mt-1 text-sm text-ink">{job.role}</p>
                    <p className="mt-1 text-sm text-muted">{job.period}</p>
                  </div>
                  <div className="space-y-4 md:col-span-8">
                    {job.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="max-w-prose text-[15px] leading-relaxed text-ink/85">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="proyectos" className="scroll-mt-24 border-t border-line pb-8 pt-12">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Proyectos</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/80">
            Un e-commerce en producción, uno de equipo, un dashboard y un gestor de finanzas.
          </p>
          <div className="mt-4">
            <Proyectos />
          </div>
        </section>

        <section id="contacto" className="scroll-mt-24 border-t border-line py-16">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Contacto</h2>
          <p className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-ink md:text-4xl md:leading-tight">
            Si tu equipo necesita a alguien en la interfaz, escribime.
          </p>
          <a
            href="mailto:santiagontraba95@gmail.com"
            className="mt-6 inline-block text-lg underline decoration-line underline-offset-4 md:text-xl"
          >
            santiagontraba95@gmail.com
          </a>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <a
              href="https://www.linkedin.com/in/santiagotraba/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/santiagotraba"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-4"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        Santiago Traba · Frontend · Buenos Aires
      </footer>
    </div>
  );
}

export default Portfolio;
