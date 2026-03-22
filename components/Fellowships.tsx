import Image, { StaticImageData } from "next/image";
import { portfolioData } from "@/lib/data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

import fellowship1 from "@/public/images/fellowship1.png";
import fellowship2 from "@/public/images/fellowship2.png";
import fellowship3 from "@/public/images/fellowship3.png";

const imageMap: Record<string, StaticImageData> = {
  "/images/fellowship1.png": fellowship1,
  "/images/fellowship2.png": fellowship2,
  "/images/fellowship3.png": fellowship3,
};

export default function Fellowships() {
  const { fellowships } = portfolioData;

  return (
    <Card>
      <SectionTitle text="Fellowships & Workshops" icon="🏆" />
      <div className="flex flex-col gap-3 sm:gap-4">
        {fellowships.map((fell, i) => (
          <div
            key={i}
            className="flex gap-3 sm:gap-4 p-3 sm:p-5 bg-pg-bg rounded-[10px] hover:shadow-cardHover hover:-translate-y-0.5 transition-all"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-sm relative">
              <Image
                src={imageMap[fell.img] || fell.img}
                alt={fell.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm sm:text-[15px] font-bold">{fell.title}</h4>
              <p className="text-xs sm:text-[13px] text-txt-secondary leading-snug">
                {fell.organizer}
              </p>
              <p className="text-xs font-semibold text-pg-blue mt-1">{fell.period}</p>
              <p className="text-xs sm:text-[13px] text-txt-secondary leading-relaxed mt-1 sm:mt-1.5">
                {fell.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
