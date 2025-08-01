"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PencilSimple } from "phosphor-react";
import { cn } from "@/app/shared/utils";

export const StartButton = () => {
   const router = useRouter();
   return (
      <button
         className={cn(
            "flex items-center gap-1 font-header rounded-xl cursor-pointer hover:hover:-translate-y-1 transition-transform ease-in-out duration-200",
            "text-[22px] font-medium p-1 px-9 text-white",
            "2xl:text-[28px] font-medium p-1 px-9 text-primary",
         )}
         onClick={() => router.push("/home/prompt")}
      >
         <p>Begin</p>
         <PencilSimple />
      </button>
   );
};
