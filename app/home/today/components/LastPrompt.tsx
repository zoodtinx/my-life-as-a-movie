"use client";

import { PageButton } from "@/app/shared/components/CustomButton";
import { CarouselItem } from "@/app/shared/components/primitives/Carousel";
import { MovieFormData } from "@/app/shared/lib/zod/movie-input.zod.schema";
import { cn } from "@/app/shared/utils";
import { ArrowRight } from "phosphor-react";
import { UseFormReturn, useWatch } from "react-hook-form";

interface LastPromptProps {
   handleSubmit: () => void;
   formMethods: UseFormReturn<MovieFormData>;
}

export const LastPrompt = ({ handleSubmit, formMethods }: LastPromptProps) => {
   const values = useWatch({ control: formMethods.control });

   const requiredFields = [
      "setting",
      "archetype",
      "supportingCast",
      "plotDevice",
      "villain",
      "unexpected",
      "cinematography",
      "dramaticIntensity",
      "pacing",
      "trailer",
      "soundtrack",
      "closingLine",
      "userId",
   ];

   const undefinedFields = requiredFields.filter(
      (field) => values[field as keyof MovieFormData] === undefined
   );

   const hasUnanswered = undefinedFields.length > 0;

   return (
      <CarouselItem>
         <div
            className={cn(
               "flex flex-col items-center w-full h-full gap-5",
               "justify-start pt-8",
               "md:justify-center md:pt-0"
            )}
         >
            {hasUnanswered ? (
               <div className="flex flex-col items-center gap-2 w-4/5">
                  <p className="font-header font-medium text-[28px] text-center leading-tight">
                     {undefinedFields.length} unanswered
                  </p>
                  <p className="text-center md:text-base text-sm">
                     You can leave them, but your results might not be as
                     accurate as it should be.
                  </p>
               </div>
            ) : (
               <div className="flex flex-col items-center gap-2 w-4/5">
                  <p className="font-header font-medium text-[28px] text-center leading-tight">
                     Ready to see your day as a movie ?
                  </p>
                  <p className="text-center md:text-base text-sm">
                     Last chance to edit your script.
                  </p>
               </div>
            )}
               <PageButton
                  icon={<ArrowRight />}
                  iconPosition="right"
                  text="Submit"
                  onClick={handleSubmit}
                  className="border border-primary px-2 py-1 rounded-[9px] active:bg-primary/20"
               />
         </div>
      </CarouselItem>
   );
};