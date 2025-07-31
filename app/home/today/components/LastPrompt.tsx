"use client";

import { PageButton } from "@/app/shared/components/CustomButton";
import { CarouselItem } from "@/app/shared/components/primitives/Carousel";
import { MovieFormData } from "@/app/shared/lib/zod/movie-input.zod.schema";
import { ArrowRight } from "phosphor-react";
import { UseFormReturn, useWatch } from "react-hook-form";

interface LastPromptProps {
   handleSubmit: () => void;
   formMethods: UseFormReturn<MovieFormData>;
}

export const LastPrompt = ({ handleSubmit, formMethods }: LastPromptProps) => {
   const values = useWatch({ control: formMethods.control });

   const undefinedFields = Object.entries(values)
      .filter(([, value]) => value === undefined || value === "")
      .map(([key]) => key);

   const hasUnanswered = undefinedFields.length > 0;

   return (
      <CarouselItem>
         <div className="border-b opacity-10" />
         <div className="flex flex-col justify-center items-center w-full h-full gap-5">
            {hasUnanswered ? (
               <div className="flex flex-col items-center gap-2 w-4/5">
                  {/* <WarningCircle className="size-[60px] stroke-[0.5px]" /> */}
                  <p className="font-header font-medium text-[28px] text-center leading-tight">
                     Still {undefinedFields.length} unanswered question
                  </p>
                  <p className="text-center">
                     You can leave them, but your results might not be as
                     accurate as it should be.
                  </p>
               </div>
            ) : (
               <div className="flex flex-col items-center gap-2 w-4/5">
                  {/* <WarningCircle className="size-[60px] stroke-[0.5px]" /> */}
                  <p className="font-header font-medium text-[28px] text-center leading-tight">
                     Ready to see your day as a movie ?
                  </p>
                  <p className="text-center">
                     Last chance to edit your script.
                  </p>
               </div>
            )}
            <div className="border border-primary px-3 rounded-[9px]">
               <PageButton
                  icon={<ArrowRight />}
                  iconPosition="right"
                  text="Submit"
                  onClick={handleSubmit}
               />
            </div>
         </div>
      </CarouselItem>
   );
};
