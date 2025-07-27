"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const StartButton = () => {
   const router = useRouter();
   return (
      <button
         className="font-header text-[25px] font-medium p-2 px-7 bg-white rounded-full cursor-pointer"
         onClick={() => router.push("/home/prompt")}
      >
         Begin
      </button>
   );
};
