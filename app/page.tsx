"use client";

import { useState } from "react";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Fellowships from "@/components/Fellowships";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import ImagePreview from "@/components/ImagePreview";

export default function Home() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-pg-bg">
      <Header />

      <div className="max-w-[1320px] mx-auto px-2 mt-6 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
        {/* LEFT */}
        <div className="space-y-5">
          <AboutMe />
          <ContactMe />
          <Education />
          <Skills />
          <Languages />
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          <Experience />
          <Certifications onPreview={setPreview} />
          <Fellowships />
        </div>
      </div>

      <Gallery onPreview={setPreview} />
      <Footer />
      <ImagePreview src={preview} onClose={() => setPreview(null)} />
    </div>
  );
}
