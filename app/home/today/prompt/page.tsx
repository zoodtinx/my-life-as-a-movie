import { PromptDialog } from "@/app/home/today/components/PromptDialog";
import React, { Suspense } from "react";

const PromptPage = () => {
   return (
      <div className="flex flex-col justify-between items-center w-full h-full pb-9">
         <div></div>
         <Suspense fallback={<div>Loading...</div>}>
            <PromptDialog />
         </Suspense>
         <p className="text-center w-2/3 text-white font-header font-medium">
            [ my life as a movie ] turns your daily moods into a cinematic
            journey. Rate your day, jot down your thoughts, and watch your story
            unfold. No filters, no fluff — just your life, honestly told.
         </p>
      </div>
   );
};

export default PromptPage;
