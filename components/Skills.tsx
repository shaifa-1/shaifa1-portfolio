import Section from "./Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.group} className="rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
            <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500">{g.group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
