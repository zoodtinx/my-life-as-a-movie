"use client"

import { MLAMLogo } from "@/app/shared/icons/Logo";
import { useState } from "react";

export default function Home() {
   const [isAltGradient, setIsAltGradient] = useState(false);
   const gradientClass = isAltGradient
      ? "absolute inset-0 bg-gradient-to-b from-background via-sky-200 to-sky-200 z-0"
      : "absolute inset-0 bg-gradient-to-b from-background via-background to-sky-200 z-0";
   return (
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
         <div
            className="absolute inset-0 bg-repeat opacity-10 pointer-events-none z-10"
            style={{ backgroundImage: "url('/grain.png')" }}
         />
         <div className={`${gradientClass} transition-colors duration-200 ease-in`} />
         <div className="flex h-full z-20">
            <MLAMLogo className="text-primary" />
            <p className="font-header font-medium text-[100px] text-primary">
               Comedy
            </p>
            Hello E Sus
         </div>
         <button
            className="z-30 px-4 py-2 rounded-lg bg-white/80 hover:bg-white text-gray-800 font-semibold shadow transition absolute top-8 left-1/2 -translate-x-1/2"
            onClick={() => setIsAltGradient((prev) => !prev)}
         >
            Toggle Gradient
         </button>
      </div>
   );
}
