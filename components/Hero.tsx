import { profile, stackLayers } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-600 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {profile.status}
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-6xl dark:text-stone-50">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-lg text-amber-700 sm:text-xl dark:text-amber-400">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            {profile.headline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>
          <p className="mt-6 text-sm text-stone-500">{profile.location}</p>
        </div>

        <div
          className="animate-fade-up rounded-xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900"
          style={{ animationDelay: "0.15s" }}
          aria-label="Technology stack used in my projects"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-stone-500">
            My stack, top to bottom
          </p>
          <ol className="space-y-2">
            {stackLayers.map((layer, i) => (
              <li
                key={layer.label}
                className="group flex items-center justify-between rounded-lg border border-stone-200 px-4 py-3 transition hover:border-amber-500 hover:bg-amber-50 dark:border-stone-800 dark:hover:bg-stone-800"
              >
                <span className="font-mono text-sm font-medium text-stone-900 dark:text-stone-100">
                  <span className="mr-3 text-stone-400">{String(i + 1).padStart(2, "0")}</span>
                  {layer.label}
                </span>
                <span className="text-xs text-stone-500">{layer.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
