"use client";

import Image from "next/image";
import { portfolioData } from "@/lib/data";
import SectionTitle from "./SectionTitle";

interface GalleryProps {
  onPreview: (src: string) => void;
}

export default function Gallery({ onPreview }: GalleryProps) {
  const { gallery } = portfolioData;

  if (gallery.length === 0) return null;

  return (
    <div className="max-w-[1320px] mx-auto px-2 mt-5">
      <div className="bg-white rounded-xl shadow-card p-7">
        <SectionTitle text="Gallery" icon="📸" />
        <p className="text-sm text-txt-secondary -mt-2.5 mb-4">
          Personal moments and professional highlights
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="aspect-square rounded-[10px] overflow-hidden border-2 border-pg-border cursor-pointer hover:-translate-y-1 hover:border-pg-blue hover:shadow-cardHover transition-all relative"
              onClick={() => onPreview(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
