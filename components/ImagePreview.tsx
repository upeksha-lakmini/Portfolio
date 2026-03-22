"use client";

import Image from "next/image";

interface ImagePreviewProps {
  src: string | null;
  onClose: () => void;
}

export default function ImagePreview({ src, onClose }: ImagePreviewProps) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden animate-[fadeUp_.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors z-10 text-lg"
        >
          &times;
        </button>
        <div className="relative w-full min-h-[300px]">
          <Image
            src={src}
            alt="Certificate Preview"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
