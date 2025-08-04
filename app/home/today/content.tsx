"use client";

import { StartButton } from "@/app/home/today/components/StartButton";
import { FilmSlateQuestion } from "@/app/shared/icons/FilmSlateQuestion";
import { cn } from "@/app/shared/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo } from "react";

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
            "flex flex-col justify-between items-center w-full h-full pb-5 px-5",
            "2xl:pb-9"
         )}
      >
         <div></div>

         <div
            className={cn(
               "flex flex-col items-center w-full h-fit fade-up pb-7 pt-9 border-b border-t",
               "2xl:w-[1000px]"
            )}
         >
            <div
               className={cn(
                  "text-[21px] leading-tight flex flex-col items-center w-full pb-3",
                  "md:text-[35px] md:pb-5",
                  "xl:text-[40px]"
               )}
            >
               <FilmSlateQuestion className="size-[50px] mb-4 md:size-[75px] lg:size-[80px]" />
               <p>If your day were a movie,</p>
               <p>what genre would it be ?</p>
            </div>

            <div
               className={cn(
                  "bg-black all-gradient w-[250px] h-[2px] mb-2",
                  "md:w-[370px] md:h-[3px] md:mb-4",
                  "xl:w-[500px] xl:mb-5"
               )}
            />

            <StartButton />
         </div>

         <p
            className={cn(
               "text-center w-full px-10 text-white font-header font-medium text-sm",
               "md:visible",
               "xl:w-2/3",
               "2xl:text-base",
               "invisible"
            )}
         >
            [my life as a movie] turns your daily moods into a cinematic
            journey. Rate your day, jot your thoughts, and watch your story
            unfold—honestly, no fluff.
         </p>
      </div>
   );
};
