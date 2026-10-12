import Section from "./Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Background" title="Experience">
      <ol className="space-y-10 border-l border-stone-200 pl-6 dark:border-stone-800">
        {experience.map((e) => (
          <li key={e.role + e.period} className="relative">
            <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full border-2 border-amber-600 bg-stone-50 dark:bg-stone-950" />
            <p className="font-mono text-xs text-stone-500">{e.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-stone-900 dark:text-stone-50">{e.role}</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              {e.org}
              {e.location ? ` · ${e.location}` : ""}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
