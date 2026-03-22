import Image from "next/image";
import { portfolioData } from "@/lib/data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function Fellowships() {
  const { fellowships } = portfolioData;

  return (
    <Card>
      <SectionTitle text="Fellowships & Workshops" icon="🏆" />
      <div className="flex flex-col gap-4">
        {fellowships.map((fell, i) => (
          <div
            key={i}
            className="flex gap-4 p-5 bg-pg-bg rounded-[10px] hover:shadow-cardHover hover:-translate-y-0.5 transition-all"
          >
            <div className="w-16 h-16 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-sm relative">
              <Image
                src={fell.img}
                alt={fell.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <h4 className="text-[15px] font-bold">{fell.title}</h4>
              <p className="text-[13px] text-txt-secondary leading-snug">
                {fell.organizer}
              </p>
              <p className="text-xs font-semibold text-pg-blue mt-1">{fell.period}</p>
              <p className="text-[13px] text-txt-secondary leading-relaxed mt-1.5">
                {fell.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
