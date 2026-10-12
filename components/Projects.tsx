import Section from "./Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Featured work" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="flex flex-col rounded-xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:border-amber-500 hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
          >
            <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">{p.name}</h3>
            <p className="mt-1 font-mono text-xs text-amber-700 dark:text-amber-400">{p.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              {p.description}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-stone-700 dark:text-stone-300">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-600" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            {(p.repo || p.demo) && (
              <div className="mt-5 flex gap-4 text-sm font-medium">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="text-amber-700 hover:underline dark:text-amber-400">
                    Source code
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="text-amber-700 hover:underline dark:text-amber-400">
                    Live demo
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
