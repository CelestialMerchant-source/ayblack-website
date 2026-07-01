"use client";

import { useEffect, useState } from "react";
import site from "@/data/site.json";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[200] bg-charcoal flex flex-col items-center justify-center loader-fade ${
        hidden ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
      aria-hidden={hidden}
    >
      <div className="text-center px-6">
        <span className="font-display text-4xl gold-gradient-text font-bold tracking-widest block leading-tight">
          AY Black
        </span>
        <span className="font-display text-lg gold-gradient-text font-medium tracking-[0.2em] block mt-1 uppercase">
          Men Fashion World
        </span>
      </div>
      <div className="mt-6 w-10 h-10 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
    </div>
  );
}