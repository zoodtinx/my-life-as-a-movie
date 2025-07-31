"use client";

import { StartButton } from "@/app/home/today/components/StartButton";
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
            "flex flex-col justify-between items-center w-full h-full pb-5",
            "2xl:pb-9"
         )}
      >
         <div></div>

         <div
            className={cn(
               "flex flex-col items-center w-full h-fit fade-up pb-7 pt-9",
               "2xl:w-[1000px]"
            )}
         >
            <div
               className={cn(
                  "text-[21px] leading-tight flex flex-col items-center w-full pb-5",
                  "md:text-[35px]",
                  "2xl:text-[60px]"
               )}
            >
               <p>If your day were a movie,</p>
               <p>what genre would it be ?</p>
            </div>
            <StartButton />
         </div>

         <p
            className={cn(
               "text-center w-full px-10 text-white font-header font-medium text-sm",
               "xl:w-2/3",
               "2xl:text-base"
            )}
         >
            [ my life as a movie ] turns your daily moods into a cinematic
            journey. Rate your day, jot down your thoughts, and watch your story
            unfold. No filters, no fluff — just your life, honestly told.
         </p>
      </div>
   );
};
