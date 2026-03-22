import { portfolioData } from "@/lib/data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function Languages() {
  const { languages } = portfolioData;

  return (
    <Card>
      <SectionTitle text="Languages" icon="🌐" />
      {languages.map((lang, i) => (
        <div key={i} className={`flex items-center gap-2.5 py-2.5 ${i > 0 ? "border-t border-pg-border" : ""}`}>
          <div className="w-9 h-9 rounded-lg bg-pg-blueLight flex items-center justify-center text-base shrink-0">
            {lang.flag}
          </div>
          <div>
            <p className="text-sm font-bold">{lang.name}</p>
            <p className="text-xs text-txt-secondary">{lang.level}</p>
            <div className="flex gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, j) => (
                <span
                  key={j}
                  className={`w-2 h-2 rounded-full ${j < lang.dots ? "bg-pg-blue" : "bg-[#e2e8f0]"}`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
}
