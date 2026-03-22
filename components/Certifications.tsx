"use client";

import { portfolioData } from "@/lib/data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

interface CertificationsProps {
  onPreview: (src: string) => void;
}

export default function Certifications({ onPreview }: CertificationsProps) {
  const { certifications } = portfolioData;

  return (
    <Card>
      <SectionTitle text="Certifications" icon="📜" />
      <ul className="list-none p-0 m-0">
        {certifications.map((cert, i) => (
          <li
            key={i}
            className="flex gap-3 py-3.5 group cursor-pointer rounded-lg px-2 -mx-2 transition-all duration-200 hover:bg-pg-blueLight hover:shadow-card items-start"
            onClick={() => cert.img && onPreview(cert.img)}
          >
            <span className="w-2 h-2 rounded-full bg-pg-blue shrink-0 mt-[7px]" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold group-hover:text-pg-blue transition-colors">
                {cert.title}
              </h4>
              <p className="text-[13px] text-txt-secondary">{cert.issuer}</p>
              <p className="text-xs text-txt-light mt-0.5">{cert.year}</p>
            </div>
            {cert.img && (
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                <span className="text-[11px] font-semibold text-pg-blue bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap">
                  Preview ↗
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
