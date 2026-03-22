import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Upeksha Lakmini | Portfolio",
  description: "Portfolio of E.G. Upeksha Lakmini — Graduate in Communication Studies, Journalist, Storyteller, and Media Professional from Sri Lanka.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
