"use client";

import { cn } from "@/app/shared/utils";
import { format } from "date-fns";

export const MoviePoster = () => {
   const date = format(new Date(), "EEE, d MMMM");

   return (
      <div
         className={cn(
            // Base (mobile) styles - made a little bit larger
            "w-[140px] h-[200px] p-[10px] pb-[8px] shadow-md font-header flex flex-col justify-between font-medium text-primary",
            "bg-gradient-to-b from-adventure-fantasy-from to-adventure-fantasy-to shrink-0",
            // lg: a bit larger than base (increased more)
            "lg:w-[190px] lg:h-[270px] lg:p-[18px] lg:pb-[15px]",
            // md: breakpoint overrides - also larger
            "md:w-[250px] md:h-[360px] md:p-[20px] md:pb-[16px]",
            // xl: same as md
            "xl:w-[250px] xl:h-[360px] xl:p-[20px] xl:pb-[16px]"
         )}
      >
         <div className={cn("flex grow flex-col justify-between")}>
            <p
               className={cn(
                  // Base (mobile) - larger
                  "text-[22px] leading-[26px]",
                  // lg: a bit larger than base (increased more)
                  "lg:text-[32px] lg:leading-[38px]",
                  // md: breakpoint - larger
                  "md:text-[38px] md:leading-[44px]",
                  // xl: same as md
                  "xl:text-[38px] xl:leading-[44px]"
               )}
            >
               Adventure Fantasy
            </p>
            <p
               className={cn(
                  // Base (mobile) - larger
                  "text-[16px] leading-[20px] text-right font-normal",
                  // lg: a bit larger than base (increased more)
                  "lg:text-[24px] lg:leading-[30px]",
                  // md: breakpoint - larger
                  "md:text-[28px] md:leading-[32px]",
                  // xl: same as md
                  "xl:text-[28px] xl:leading-[32px]"
               )}
            >
               {date}
            </p>
         </div>
      </div>
   );
};
