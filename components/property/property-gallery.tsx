"use client";

import { useState } from "react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex h-72 w-full items-center justify-center rounded-xl bg-zinc-100 text-zinc-400 dark:bg-zinc-800">
        No images available
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 aspect-video max-h-[480px] w-full">
        <img
          src={images[activeIdx]}
          alt={`${title} - view ${activeIdx + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`relative h-18 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all cursor-pointer ${
                activeIdx === idx
                  ? "border-emerald-600 scale-95"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`thumb-${idx}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
