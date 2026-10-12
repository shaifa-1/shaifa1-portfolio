import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-stone-500">Based in</dt>
            <dd className="mt-1 text-stone-800 dark:text-stone-200">{profile.location}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-stone-500">Languages</dt>
            <dd className="mt-1 text-stone-800 dark:text-stone-200">{profile.languages.join(", ")}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
