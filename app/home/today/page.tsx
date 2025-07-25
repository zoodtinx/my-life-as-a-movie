
import React from "react";
import { StartButton } from "@/app/home/today/components/StartButton";

const TodayPage = async () => {
   // fetch data to check if user has taken survey

   const todayData = null;

   if (!todayData) {
      return (
         <div className="flex flex-col justify-between items-center w-full h-full pb-9">
            <div></div>
            {/* <PromptDialog /> */}
            <div className="flex flex-col items-center gap-3">
               <div className="text-[50px] leading-tight flex flex-col items-center">
                  <p>If your day were a movie,</p>
                  <p>what genre would it be ?</p>
               </div>
               <StartButton />
            </div>
            <p className="text-center w-2/3 text-white font-header font-medium">
               [ my life as a movie ] turns your daily moods into a cinematic
               journey. Rate your day, jot down your thoughts, and watch your
               story unfold. No filters, no fluff — just your life, honestly
               told.
            </p>
         </div>
      );
   } else {
      return (
         <div className="flex flex-col justify-between items-center w-full h-full pb-9">
            <div></div>
            <div className="flex flex-col items-center gap-3">
               <div className="text-[50px] leading-tight flex flex-col items-center">
                  <p>User had taken survey</p>
               </div>
            </div>
            <p className="text-center w-2/3 text-white font-header font-medium">
               [ my life as a movie ] turns your daily moods into a cinematic
               journey. Rate your day, jot down your thoughts, and watch your
               story unfold. No filters, no fluff — just your life, honestly
               told.
            </p>
         </div>
      );
   }
};

export default TodayPage;
