import Image from "next/image";
import { portfolioData } from "@/lib/data";

import profileImg from "@/public/images/DSC_9076.jpg.jpeg";
import logoImg from "@/public/images/logo.jpg";

export default function Header() {
  const d = portfolioData.personal;

  return (
    <header className="relative h-[320px]">
      <div className="absolute inset-0 bg-pg-dark overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, #1e293b 0%, #0f1724 50%, #0a0f1a 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20px 30px, #fff, transparent), radial-gradient(1px 1px at 40px 70px, #ccc, transparent), radial-gradient(1px 1px at 80px 40px, #fff, transparent), radial-gradient(1px 1px at 130px 80px, #ddd, transparent), radial-gradient(1px 1px at 160px 30px, #fff, transparent), radial-gradient(1.5px 1.5px at 200px 60px, #fff, transparent), radial-gradient(1px 1px at 250px 20px, #ccc, transparent), radial-gradient(1px 1px at 300px 90px, #fff, transparent), radial-gradient(1.5px 1.5px at 350px 50px, #fff, transparent), radial-gradient(1px 1px at 400px 30px, #ddd, transparent), radial-gradient(1px 1px at 450px 70px, #fff, transparent), radial-gradient(1px 1px at 500px 45px, #ccc, transparent), radial-gradient(1.5px 1.5px at 550px 85px, #fff, transparent), radial-gradient(1px 1px at 600px 25px, #fff, transparent), radial-gradient(1px 1px at 650px 65px, #ddd, transparent), radial-gradient(1px 1px at 700px 40px, #fff, transparent), radial-gradient(1.5px 1.5px at 750px 80px, #ccc, transparent), radial-gradient(1px 1px at 800px 55px, #fff, transparent)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-[1320px] mx-auto px-2 pb-8 flex items-end gap-6 flex-wrap">
          <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] rounded-full border-[5px] border-white shadow-xl shrink-0 relative overflow-hidden">
            <Image
              src={profileImg}
              alt="Upeksha Lakmini"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="pb-2">
            <div className="flex items-center gap-3">
              <Image
                src={logoImg}
                alt="Logo"
                width={40}
                height={40}
                className="rounded-lg object-cover"
              />
              <h1 className="font-display text-[26px] sm:text-[32px] font-extrabold text-white leading-tight">
                {d.name}
              </h1>
            </div>
            <p className="text-base text-[#94a3b8] mt-1">{d.title}</p>
            <a
              href="/doc/template.pdf"
              download="Upeksha_Lakmini_CV.pdf"
              className="inline-block mt-2 px-5 py-2 bg-[#dc2626] text-white text-[13px] font-bold rounded-md hover:bg-[#b91c1c] hover:-translate-y-0.5 hover:shadow-lg transition-all no-underline tracking-wide"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
