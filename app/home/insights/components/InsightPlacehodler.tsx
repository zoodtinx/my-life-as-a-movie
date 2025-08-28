"use client";

import { CalendarPlus } from "phosphor-react";
import React from "react";

export const InsightPlaceholder = () => {
   return (
      <div
         className={
            "h-[calc(100vh-45px)] flex justify-center items-center" +
            " md:h-[calc(100vh-65px)]" +
            " xl:h-[calc(100vh-80px)]"
         }
      >
         <div className="flex gap-3 items-center">
            <CalendarPlus className="size-[61px] opacity-20" />
            <p className="text-[25px] leading-tight">
               Get started by logging
               <br /> your day for 1 week
            </p>
         </div>
      </div>
   );
};
