"use client";

import { cn } from "@/app/shared/utils";
import { format } from "date-fns";

export const MoviePoster = () => {
   const date = format(new Date(), "EEE, d MMMM");

   return (
      <div
         className={cn(
            "w-[240px] h-[364px] p-[16px] pb-[13px] shadow-md font-header flex flex-col justify-between font-medium text-primary",
            `bg-gradient-to-b from-adventure-fantasy-from to-adventure-fantasy-to shrink-0`
         )}
      >
         <div className={cn("flex grow flex-col justify-between")}>
            <p
               className={cn(
                  "text-[35px] leading-[38px]",
               )}
            >
               Adventure Fantasy
            </p>
            <p
               className={cn(
                  "text-[26px] leading-[26px] text-right font-normal",
               )}
            >
               {date}
            </p>
         </div>
      </div>
   );
};
