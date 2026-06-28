"use client";

import { useEffect, useState } from "react";
import site from "@/data/site.json";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[200] bg-charcoal flex flex-col items-center justify-center loader-fade ${
        hidden ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
      aria-hidden={hidden}
    >
      <span className="font-display text-3xl gold-gradient-text font-bold tracking-widest">
        {site.businessName}
      </span>
      <div className="mt-5 w-10 h-10 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
    </div>
  );
}
