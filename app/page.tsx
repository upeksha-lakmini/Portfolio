"use client";
import { portfolioData } from "@/lib/data";
import { useState } from "react";

export default function Home() {
  const d = portfolioData;
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-pg-bg">

      {/* ===== HEADER — Banner with profile inside ===== */}
      <header className="relative h-[320px]">
        {/* Dark starry banner */}
        <div className="absolute inset-0 bg-pg-dark overflow-hidden">
          <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at 30% 50%, #1e293b 0%, #0f1724 50%, #0a0f1a 100%)"}} />
          <div className="absolute inset-0 opacity-30" style={{backgroundImage:"radial-gradient(1px 1px at 20px 30px, #fff, transparent), radial-gradient(1px 1px at 40px 70px, #ccc, transparent), radial-gradient(1px 1px at 80px 40px, #fff, transparent), radial-gradient(1px 1px at 130px 80px, #ddd, transparent), radial-gradient(1px 1px at 160px 30px, #fff, transparent), radial-gradient(1.5px 1.5px at 200px 60px, #fff, transparent), radial-gradient(1px 1px at 250px 20px, #ccc, transparent), radial-gradient(1px 1px at 300px 90px, #fff, transparent), radial-gradient(1.5px 1.5px at 350px 50px, #fff, transparent), radial-gradient(1px 1px at 400px 30px, #ddd, transparent), radial-gradient(1px 1px at 450px 70px, #fff, transparent), radial-gradient(1px 1px at 500px 45px, #ccc, transparent), radial-gradient(1.5px 1.5px at 550px 85px, #fff, transparent), radial-gradient(1px 1px at 600px 25px, #fff, transparent), radial-gradient(1px 1px at 650px 65px, #ddd, transparent), radial-gradient(1px 1px at 700px 40px, #fff, transparent), radial-gradient(1.5px 1.5px at 750px 80px, #ccc, transparent), radial-gradient(1px 1px at 800px 55px, #fff, transparent)"}} />
        </div>
        {/* Profile inside banner */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-[1320px] mx-auto px-2 pb-8 flex items-end gap-6 flex-wrap">
            <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] rounded-full border-[5px] border-white shadow-xl shrink-0 relative overflow-hidden">
              <img src="/images/DSC_9076.jpg.jpeg" alt="Upeksha Lakmini" className="w-full h-full object-cover" />
            </div>
            <div className="pb-2">
              <div className="flex items-center gap-3">
                <img src={d.personal.logo} alt="Logo" className="w-10 h-10 rounded-lg object-cover" />
                <h1 className="font-display text-[26px] sm:text-[32px] font-extrabold text-white leading-tight">{d.personal.name}</h1>
              </div>
              <p className="text-base text-[#94a3b8] mt-1">{d.personal.title}</p>
              <a href="/doc/template.pdf" download="Upeksha_Lakmini_CV.pdf" className="inline-block mt-2 px-5 py-2 bg-[#dc2626] text-white text-[13px] font-bold rounded-md hover:bg-[#b91c1c] hover:-translate-y-0.5 hover:shadow-lg transition-all no-underline tracking-wide">Download CV</a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MAIN GRID ===== */}
      <div className="max-w-[1320px] mx-auto px-2 mt-6 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">

        {/* LEFT */}
        <div className="space-y-5">
          <Card><SectionTitle text="About Me" icon="👤" /><p className="font-display text-base font-bold mb-2">Hello! I&apos;m Upeksha Lakmini</p><p className="text-sm text-txt-secondary leading-[1.75]">{d.personal.profileSummary}</p></Card>

          <Card>
            <SectionTitle text="Contact Me" icon="📬" />
            <CI icon="loc" text="Imaduwa, Sri Lanka" />
            <CI icon="phone" text={d.personal.phone} href={`tel:${d.personal.phone}`} />
            <CI icon="email" text={d.personal.email} href={`mailto:${d.personal.email}`} />
            <p className="text-[13px] font-semibold text-txt-secondary mt-3.5">Connect with Me</p>
            <div className="flex gap-2 mt-3">
              {[{l:"in",bg:"#0a66c2",h:"www.linkedin.com/in/upeksha-lakmini-1583b330b"},{l:"✉",bg:"#ea4335",h:`mailto:${d.personal.email}`},{l:"📞",bg:"#10b981",h:`tel:${d.personal.phone}`},{l:"W",bg:"#25d366",h:"https://wa.me/94774782241"}].map((s,i)=>(
                <a key={i} href={s.h} className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold hover:scale-110 transition-transform" style={{background:s.bg}}>{s.l}</a>
              ))}
            </div>
          </Card>

          {/* Education with images */}
          <Card>
            <SectionTitle text="Education" icon="🎓" />
            {d.education.map((edu, i) => (
              <div key={i} className={`flex gap-3 py-3.5 ${i > 0 ? "border-t border-pg-border" : ""}`}>
                <div className="w-16 h-16 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                  <img src={edu.img} alt="" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-snug">{edu.degree}</h4>
                  <p className="text-[13px] text-txt-secondary">{edu.institution}</p>
                  <p className="text-xs text-txt-light mt-0.5">{edu.year}</p>
                  {edu.details && <p className="text-xs font-semibold text-pg-blue mt-1">{edu.details}</p>}
                </div>
              </div>
            ))}
          </Card>

          <Card>
            <SectionTitle text="Skills" icon="⚡" />
            <div className="flex flex-wrap gap-2">
              {d.skills.map(s => (
                <span key={s} className="px-3.5 py-1.5 text-xs font-semibold text-pg-blue bg-transparent border-[1.5px] border-pg-blue rounded-full hover:bg-pg-blue hover:text-white transition-all cursor-default">{s}</span>
              ))}
            </div>
          </Card>

          <Card>
            <SectionTitle text="Languages" icon="🌐" />
            {d.languages.map((lang, i) => (
              <div key={i} className={`flex items-center gap-2.5 py-2.5 ${i > 0 ? "border-t border-pg-border" : ""}`}>
                <div className="w-9 h-9 rounded-lg bg-pg-blueLight flex items-center justify-center text-base shrink-0">{lang.flag}</div>
                <div>
                  <p className="text-sm font-bold">{lang.name}</p>
                  <p className="text-xs text-txt-secondary">{lang.level}</p>
                  <div className="flex gap-1 mt-1">{Array.from({length:5}).map((_,j)=>(<span key={j} className={`w-2 h-2 rounded-full ${j < lang.dots ? "bg-pg-blue" : "bg-[#e2e8f0]"}`} />))}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">

          {/* Experience */}
          <Card>
            <SectionTitle text="Experience" icon="💼" />
            {d.experience.map((exp, i) => (
              <div key={i} className={`flex gap-4 py-4 ${i > 0 ? "border-t border-pg-border" : ""}`}>
                <div className="w-16 h-16 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                  <img src={exp.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[15px] font-bold">{exp.title}</h4>
                  <p className="text-[13px] text-txt-secondary">{exp.company} · {exp.location}</p>
                  <p className="text-xs text-txt-light mt-0.5">{exp.period}</p>
                  <p className="text-[13px] text-txt-secondary leading-[1.7] mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </Card>

          {/* Certifications — bullet points, no icons */}
          <Card>
            <SectionTitle text="Certifications" icon="📜" />
            <ul className="list-none p-0 m-0">
              {d.certifications.map((cert, i) => (
                <li
                  key={i}
                  className="flex gap-3 py-3.5 group cursor-pointer rounded-lg px-2 -mx-2 transition-all duration-200 hover:bg-pg-blueLight hover:shadow-card items-start"
                  onClick={() => cert.img && setPreview(cert.img)}
                >
                  <span className="w-2 h-2 rounded-full bg-pg-blue shrink-0 mt-[7px]" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold group-hover:text-pg-blue transition-colors">{cert.title}</h4>
                    <p className="text-[13px] text-txt-secondary">{cert.issuer}</p>
                    <p className="text-xs text-txt-light mt-0.5">{cert.year}</p>
                  </div>
                  {cert.img && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                      <span className="text-[11px] font-semibold text-pg-blue bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap">Preview ↗</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Card>

          {/* Fellowships */}
          <Card>
            <SectionTitle text="Fellowships & Workshops" icon="🏆" />
            <div className="flex flex-col gap-4">
              {d.fellowships.map((fell, i) => (
                <div key={i} className="flex gap-4 p-5 bg-pg-bg rounded-[10px] hover:shadow-cardHover hover:-translate-y-0.5 transition-all">
                  <div className="w-16 h-16 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                    <img src={fell.img} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[15px] font-bold">{fell.title}</h4>
                    <p className="text-[13px] text-txt-secondary leading-snug">{fell.organizer}</p>
                    <p className="text-xs font-semibold text-pg-blue mt-1">{fell.period}</p>
                    <p className="text-[13px] text-txt-secondary leading-relaxed mt-1.5">{fell.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* GALLERY (col-12) */}
      <div className="max-w-[1320px] mx-auto px-2 mt-5">
        <div className="bg-white rounded-xl shadow-card p-7">
          <SectionTitle text="Gallery" icon="📸" />
          <p className="text-sm text-txt-secondary -mt-2.5 mb-4">Personal moments and professional highlights</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {d.gallery.map((img, i) => (
              <div key={i} className="aspect-square rounded-[10px] overflow-hidden border-2 border-pg-border cursor-pointer hover:-translate-y-1 hover:border-pg-blue hover:shadow-cardHover transition-all" onClick={() => setPreview(img.src)}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-pg-dark px-2 py-7 mt-5">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between flex-wrap gap-3">
          <span className="font-display text-sm font-semibold text-white">Upeksha Lakmini</span>
          <div className="flex gap-4">
            <a href={`mailto:${d.personal.email}`} className="text-txt-light hover:text-white transition-colors"><svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a>
            <a href={`tel:${d.personal.phone}`} className="text-txt-light hover:text-white transition-colors"><svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></a>
          </div>
        </div>
        <p className="text-center text-xs text-txt-light mt-2">© Copyright 2026 Upeksha Lakmini. All rights reserved.</p>
      </footer>

      {/* ===== IMAGE PREVIEW MODAL ===== */}
      {preview && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setPreview(null)}>
          <div className="relative max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden animate-[fadeUp_.3s_ease-out]" onClick={e => e.stopPropagation()}>
            <button onClick={() => setPreview(null)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors z-10 text-lg">&times;</button>
            <img src={preview} alt="Certificate Preview" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}

function Card({children}:{children:React.ReactNode}){return <div className="bg-white rounded-xl shadow-card p-6">{children}</div>}
function SectionTitle({text,icon}:{text:string;icon:string}){return <div className="flex items-center gap-2.5 mb-[18px]"><span className="text-base">{icon}</span><h2 className="font-display text-lg font-bold">{text}</h2></div>}
function CI({icon,text,href}:{icon:string;text:string;href?:string}){
  const svgs:Record<string,React.ReactNode>={
    loc:<svg className="w-[18px] h-[18px] text-txt-light shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>,
    phone:<svg className="w-[18px] h-[18px] text-txt-light shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>,
    email:<svg className="w-[18px] h-[18px] text-txt-light shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>,
  };
  return <div className="flex items-center gap-2.5 py-2 text-sm">{svgs[icon]}{href?<a href={href} className="hover:text-pg-blue transition-colors">{text}</a>:text}</div>;
}
