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
      <div className="flex flex-col justify-between items-center w-full h-full pb-9">
         <div></div>
         <div
            className={cn(
               "flex flex-col items-center w-[1000px] h-fit fade-up",
               "pb-7 pt-9"
            )}
         >
            <div className="text-[60px] leading-tight flex flex-col items-center w-full pb-5">
               <p>If your day were a movie,</p>
               <p>what genre would it be ?</p>
            </div>
            <StartButton />
         </div>
         <p className="text-center w-2/3 text-white font-header font-medium">
            [ my life as a movie ] turns your daily moods into a cinematic
            journey. Rate your day, jot down your thoughts, and watch your story
            unfold. No filters, no fluff — just your life, honestly told.
         </p>
      </div>
   );
};
