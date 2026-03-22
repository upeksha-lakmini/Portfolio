import Image, { StaticImageData } from "next/image";
import { portfolioData } from "@/lib/data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

import ideahellImg from "@/public/images/ideahell.png";
import education2Img from "@/public/images/education2.png";

const imageMap: Record<string, StaticImageData> = {
  "/images/ideahell.png": ideahellImg,
  "/images/education2.png": education2Img,
};

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <Card>
      <SectionTitle text="Experience" icon="💼" />
      {experience.map((exp, i) => (
        <div key={i} className={`flex gap-4 py-4 ${i > 0 ? "border-t border-pg-border" : ""}`}>
          <div className="w-16 h-16 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-sm relative">
            <Image
              src={imageMap[exp.img] || exp.img}
              alt={exp.company}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[15px] font-bold">{exp.title}</h4>
            <p className="text-[13px] text-txt-secondary">
              {exp.company} · {exp.location}
            </p>
            <p className="text-xs text-txt-light mt-0.5">{exp.period}</p>
            <p className="text-[13px] text-txt-secondary leading-[1.7] mt-2">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </Card>
  );
}
