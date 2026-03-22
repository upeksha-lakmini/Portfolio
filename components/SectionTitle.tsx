export default function SectionTitle({ text, icon }: { text: string; icon: string }) {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-[18px]">
      <span className="text-base">{icon}</span>
      <h2 className="font-display text-base sm:text-lg font-bold">{text}</h2>
    </div>
  );
}
