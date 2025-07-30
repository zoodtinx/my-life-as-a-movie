"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PencilSimple } from "phosphor-react";

export const StartButton = () => {
   const router = useRouter();
   return (
      <button
         className="flex items-center gap-1 font-header text-[21px] font-medium p-1 px-9 bg-secondary rounded-xl cursor-pointer shadow-lg hover:hover:-translate-y-1 transition-transform ease-in-out duration-200"
         onClick={() => router.push("/home/prompt")}
      >
         <p>Begin</p>
         <PencilSimple />
      </button>
   );
};
