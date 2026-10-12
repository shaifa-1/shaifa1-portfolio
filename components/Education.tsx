import Section from "./Section";
import { education, certifications } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" eyebrow="Credentials" title="Education & Certifications">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500">Education</h3>
          <p className="mt-3 text-lg font-semibold text-stone-900 dark:text-stone-50">{education.degree}</p>
          <p className="text-sm text-stone-600 dark:text-stone-400">{education.school}</p>
          <p className="mt-1 font-mono text-xs text-stone-500">
            {education.period} · {education.detail}
          </p>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500">Certifications</h3>
          <ul className="mt-3 space-y-3">
            {certifications.map((c) => (
              <li key={c.name}>
                <p className="text-sm font-medium text-stone-900 dark:text-stone-50">{c.name}</p>
                <p className="text-xs text-stone-500">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
