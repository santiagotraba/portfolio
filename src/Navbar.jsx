import { GithubIcon, LinkedinIcon } from "./icons";

const LINKS = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

function Navbar() {
  return (
    <nav
      aria-label="Principal"
      className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
        <a
          href="#inicio"
          className="text-sm font-semibold tracking-tight text-white transition hover:text-violet-300"
        >
          Santiago Traba
        </a>
        <ul className="flex items-center gap-1 text-sm text-white/70 sm:gap-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-2 py-1.5 transition hover:bg-white/5 hover:text-white sm:px-2.5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="hidden sm:block">
            <a
              href="https://github.com/santiagotraba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Santiago Traba"
              className="flex rounded-md p-1.5 transition hover:bg-white/5 hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </li>
          <li className="hidden sm:block">
            <a
              href="https://www.linkedin.com/in/santiagotraba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Santiago Traba"
              className="flex rounded-md p-1.5 transition hover:bg-white/5 hover:text-white"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
