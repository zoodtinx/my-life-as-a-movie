"use client";

import { StartButton } from "@/app/home/today/components/StartButton";
import { cn } from "@/app/shared/utils";
import SvgFilmEmoji from "@/app/welcome/components/Emoji/FilmEmoji";
import SvgPopCornEmoji from "@/app/welcome/components/Emoji/PopCornEmoji";
import SvgSparkleEmoji from "@/app/welcome/components/Emoji/SparkleEmoji";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

export const TodayPageContent = () => {
   const router = useRouter();
   const searchParams = useSearchParams();

   const newSearchParams = useMemo(() => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("bg", "base");
      return params;
   }, [searchParams]);

   useEffect(() => {
      router.replace(
         `${window.location.pathname}?${newSearchParams.toString()}`
      );
   }, [newSearchParams, router]);

   return (
      <div
         className={cn(
            "flex flex-col justify-between items-center w-full h-full pb-5 px-7 animate-fade-in",
            "2xl:pb-9"
         )}
      >
         <div></div>

         <div
            className={cn(
               "flex flex-col items-center justify-between",
               "border-b border-t border-b-primary/25 border-t-primary/25",
               "w-full h-[240px] pb-3 pt-3",
               "md:w-[650px] md:h-[400px]"
            )}
         >
            <div
               className={cn(
                  "text-[21px] leading-tight flex flex-col w-full pb-3",
                  "md:text-[35px] md:pb-5",
                  "xl:text-[40px]"
               )}
            >
               <div className="flex gap-1 py-3">
                  <SvgPopCornEmoji />
                  <SvgFilmEmoji />
                  <SvgSparkleEmoji />
               </div>
               <p className="text-left text-[28px] md:text-[42px]">
                  If today were a movie, what genre would it be ?
               </p>
            </div>

            <div className="w-full flex justify-end">
               <StartButton />
            </div>
         </div>

         <p
            className={cn(
               "text-center w-full px-10 text-white font-header font-medium text-sm",
               "md:visible",
               "xl:w-2/3",
               "2xl:text-base",
               "invisible"
            )}
         ></p>
      </div>
   );
};
