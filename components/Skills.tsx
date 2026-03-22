import { portfolioData } from "@/lib/data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <Card>
      <SectionTitle text="Skills" icon="⚡" />
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="px-3.5 py-1.5 text-xs font-semibold text-pg-blue bg-transparent border-[1.5px] border-pg-blue rounded-full hover:bg-pg-blue hover:text-white transition-all cursor-default"
          >
            {s}
          </span>
        ))}
      </div>
    </Card>
  );
}
