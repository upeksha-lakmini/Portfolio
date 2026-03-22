import { portfolioData } from "@/lib/data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function AboutMe() {
  const d = portfolioData.personal;

  return (
    <Card>
      <SectionTitle text="About Me" icon="👤" />
      <p className="font-display text-base font-bold mb-2">
        Hello! I&apos;m Upeksha Lakmini
      </p>
      <p className="text-sm text-txt-secondary leading-[1.75]">
        {d.profileSummary}
      </p>
    </Card>
  );
}
