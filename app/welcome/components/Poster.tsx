"use client";

import { cn } from "@/app/shared/utils";
import { format } from "date-fns";

export const MoviePoster = () => {
   const date = format(new Date(), "EEE, d MMMM");

   return (
      <div
         className={cn(
            "w-[110px] h-[160px] p-[8px] pb-[6px] shadow-md font-header flex flex-col justify-between font-medium text-primary",
            "bg-gradient-to-b from-adventure-fantasy-from to-adventure-fantasy-to shrink-0",
            "lg:w-[145px] lg:h-[200px] lg:p-[13px] lg:pb-[9px]",
            "sm:w-[180px] sm:h-[250px] sm:p-[16px] sm:pb-[11px]",
            "xl:w-[180px] xl:h-[250px] xl:p-[16px] xl:pb-[11px]"
         )}
      >
         <div className={cn("flex grow flex-col justify-between")}>
            <p
               className={cn(
                  "text-[18px] leading-[22px]",
                  "lg:text-[24px] lg:leading-[28px]",
                  "sm:text-[28px] sm:leading-[32px]",
                  "xl:text-[28px] xl:leading-[32px]"
               )}
            >
               Adventure Fantasy
            </p>
            <p
               className={cn(
                  "text-[12px] leading-[16px] text-right font-normal",
                  "lg:text-[16px] lg:leading-[20px]",
                  "sm:text-[18px] sm:leading-[22px]",
                  "xl:text-[18px] xl:leading-[22px]"
               )}
            >
               {date}
            </p>
         </div>
      </div>
   );
};
