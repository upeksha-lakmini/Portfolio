import Image, { StaticImageData } from "next/image";
import { portfolioData } from "@/lib/data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

import education1 from "@/public/images/education1.png";
import education2 from "@/public/images/education2.png";
import education3 from "@/public/images/education3.png";

const imageMap: Record<string, StaticImageData> = {
  "/images/education1.png": education1,
  "/images/education2.png": education2,
  "/images/education3.png": education3,
};

export default function Education() {
  const { education } = portfolioData;

  return (
    <Card>
      <SectionTitle text="Education" icon="🎓" />
      {education.map((edu, i) => (
        <div key={i} className={`flex gap-3 py-3.5 ${i > 0 ? "border-t border-pg-border" : ""}`}>
          <div className="w-16 h-16 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-sm relative">
            <Image
              src={imageMap[edu.img] || edu.img}
              alt={edu.institution}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold leading-snug">{edu.degree}</h4>
            <p className="text-[13px] text-txt-secondary">{edu.institution}</p>
            <p className="text-xs text-txt-light mt-0.5">{edu.year}</p>
            {edu.details && (
              <p className="text-xs font-semibold text-pg-blue mt-1">{edu.details}</p>
            )}
          </div>
        </div>
      ))}
    </Card>
  );
}
