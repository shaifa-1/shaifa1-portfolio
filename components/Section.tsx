import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-stone-200 py-20 dark:border-stone-800">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl dark:text-stone-50">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
