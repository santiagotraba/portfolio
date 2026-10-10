import { GithubIcon, LinkedinIcon } from "./icons";

const LINKS = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

function Navbar() {
  return (
    <nav aria-label="Principal" className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
        <a href="#inicio" className="text-sm font-semibold tracking-tight text-ink">
          Santiago Traba
        </a>
        <ul className="flex items-center gap-1 text-sm text-muted sm:gap-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-sm px-2 py-1.5 transition-colors hover:text-ink sm:px-2.5"
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
              className="flex rounded-sm p-1.5 transition-colors hover:text-ink"
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
              className="flex rounded-sm p-1.5 transition-colors hover:text-ink"
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
