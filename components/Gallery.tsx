"use client";

import Image, { StaticImageData } from "next/image";
import { portfolioData } from "@/lib/data";
import SectionTitle from "./SectionTitle";

import gallery1 from "@/public/gallery/image1.jpeg";
import gallery2 from "@/public/gallery/image2.jpeg";
import gallery3 from "@/public/gallery/image3.jpeg";
import gallery4 from "@/public/gallery/image4.jpeg";
import gallery5 from "@/public/gallery/image5.jpeg";
import gallery6 from "@/public/gallery/image6.jpeg";
import gallery7 from "@/public/gallery/image7.jpeg";
import gallery8 from "@/public/gallery/image8.jpeg";
import gallery9 from "@/public/gallery/image9.jpeg";
import gallery10 from "@/public/gallery/image10.jpeg";
import gallery11 from "@/public/gallery/image11.jpeg";
import gallery12 from "@/public/gallery/image12.jpeg";
import gallery13 from "@/public/gallery/image13.jpeg";

const imageMap: Record<string, StaticImageData> = {
  "/gallery/image1.jpeg": gallery1,
  "/gallery/image2.jpeg": gallery2,
  "/gallery/image3.jpeg": gallery3,
  "/gallery/image4.jpeg": gallery4,
  "/gallery/image5.jpeg": gallery5,
  "/gallery/image6.jpeg": gallery6,
  "/gallery/image7.jpeg": gallery7,
  "/gallery/image8.jpeg": gallery8,
  "/gallery/image9.jpeg": gallery9,
  "/gallery/image10.jpeg": gallery10,
  "/gallery/image11.jpeg": gallery11,
  "/gallery/image12.jpeg": gallery12,
  "/gallery/image13.jpeg": gallery13,
};

interface GalleryProps {
  onPreview: (src: string) => void;
}

export default function Gallery({ onPreview }: GalleryProps) {
  const { gallery } = portfolioData;

  if (gallery.length === 0) return null;

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 mt-5">
      <div className="bg-white rounded-xl shadow-card p-4 sm:p-7">
        <SectionTitle text="Gallery" icon="📸" />
        <p className="text-sm text-txt-secondary -mt-2.5 mb-4">
          Personal moments and professional highlights
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg sm:rounded-[10px] overflow-hidden border-2 border-pg-border cursor-pointer hover:-translate-y-1 hover:border-pg-blue hover:shadow-cardHover transition-all relative"
              onClick={() => onPreview(img.src)}
            >
              <Image
                src={imageMap[img.src] || img.src}
                alt={img.alt}
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
