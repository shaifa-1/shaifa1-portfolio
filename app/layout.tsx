import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: `${profile.headline} ${profile.status}.`,
};

const themeScript = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    var dark = t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
