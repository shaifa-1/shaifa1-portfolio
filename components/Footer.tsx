import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-8 text-center text-xs text-stone-500 dark:border-stone-800">
      © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
    </footer>
  );
}
