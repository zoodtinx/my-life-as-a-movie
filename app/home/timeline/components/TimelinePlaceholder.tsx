"use client";

import { PencilSimpleLine } from "phosphor-react";

export const TimelinePlaceholder = () => {
   return (
      <div
         className={
            "h-[calc(100vh-45px)] flex justify-center items-center" +
            " md:h-[calc(100vh-65px)]" +
            " xl:h-[calc(100vh-80px)]"
         }
      >
         <div className="flex gap-3 items-center">
            <PencilSimpleLine className="size-[61px] opacity-20" />
            <p className="text-[25px] leading-tight">
               Get started by logging
               <br /> your first day
            </p>
         </div>
      </div>
   );
};
