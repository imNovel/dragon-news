"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AdvertisementModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200"
        >
          ✕
        </button>

        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0xkOftUJiOBYQ1RoRBAY1y0gzDP-O-CXcbAZEuswOg&s=10"
          alt="Advertisement"
          height={200}
          width={200}
          className="mb-4 h-auto w-full rounded-lg"
        />

        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Special Offer 🎉
        </h2>

        <p className="mb-4 text-gray-600">
          Get 20% off on your next purchase. Limited time offer!
        </p>
      </div>
    </div>
  );
}