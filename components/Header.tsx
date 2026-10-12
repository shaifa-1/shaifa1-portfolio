import { profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/85 backdrop-blur dark:border-stone-800 dark:bg-stone-950/85">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold text-stone-900 dark:text-stone-50">
          {profile.name.toLowerCase()}
          <span className="text-amber-600 dark:text-amber-400">.dev</span>
        </a>
        <nav className="flex items-center gap-5">
          <ul className="hidden items-center gap-5 text-sm text-stone-600 sm:flex dark:text-stone-400">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-amber-700 dark:hover:text-amber-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
