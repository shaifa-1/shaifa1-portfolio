import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <p className="max-w-xl text-lg text-stone-600 dark:text-stone-400">
        I'm looking for an entry-level Java Developer or Software Developer role. The quickest way to reach me is by email.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="btn-primary">
          {profile.email}
        </a>
        <a href={profile.phoneHref} className="btn-secondary">
          {profile.phone}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
          LinkedIn
        </a>
        {profile.github && (
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary">
            GitHub
          </a>
        )}
      </div>
    </Section>
  );
}
