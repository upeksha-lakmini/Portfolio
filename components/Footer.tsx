import { portfolioData } from "@/lib/data";

export default function Footer() {
  const d = portfolioData.personal;

  return (
    <footer className="bg-pg-dark px-4 sm:px-6 py-6 sm:py-7 mt-5">
      <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-display text-sm font-semibold text-white">
          Upeksha Lakmini
        </span>
        <div className="flex gap-4">
          <a href={`mailto:${d.email}`} className="text-txt-light hover:text-white transition-colors">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          <a href={`tel:${d.phone}`} className="text-txt-light hover:text-white transition-colors">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-txt-light mt-2">
        © Copyright 2026 Upeksha Lakmini. All rights reserved.
      </p>
    </footer>
  );
}
