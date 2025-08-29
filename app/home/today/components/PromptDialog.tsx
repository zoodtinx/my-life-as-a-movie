"use client";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/app/shared/components/primitives/Carousel";
import { MovieFormData } from "@/app/shared/lib/zod/movie-input.zod.schema";
import { useForm } from "react-hook-form";
import { Control } from "react-hook-form";
import {
   movieFormQuestions,
   Prompt,
} from "@/app/shared/lib/constants/movie-prompts";
import { ControlledSingleSelect } from "@/app/shared/components/form-elements/SingleSelect";
import { ControlledMultiSelect } from "@/app/shared/components/form-elements/MultiSelect";
import { ControlledSlider } from "@/app/shared/components/form-elements/SliderInput";
import { ControlledYesNoSelect } from "@/app/shared/components/form-elements/YesNo";
import { getMovieSummary } from "@/app/home/today/actions";
import { useRouter } from "next/navigation";
import { ControlledDynamicHeightInput } from "@/app/shared/components/form-elements/DynamicHeightTextInput";
import { LastPrompt } from "@/app/home/today/components/LastPrompt";
import { defaultMovieFormData } from "@/app/shared/lib/constants/default-values";
import { useState } from "react";
import { CircleNotch } from "phosphor-react";
import { cn } from "@/app/shared/utils";
import { LoadingTexts } from "@/app/home/today/components/LoadingTexts";
import { User } from "@prisma/client";
import { useEffect } from "react";

export const PromptDialog = ({user}:{user: User}) => {
   const [isLoading, setIsLoading] = useState(false);

   const formMethods = useForm<MovieFormData>({
      defaultValues: {
         ...defaultMovieFormData,
      },
   });
   const router = useRouter();

   useEffect(() => {
      if (user) {
         formMethods.setValue("userId", user.id);
         // formMethods.setValue("userContext", user.personalContext);
      }
   }, [user, formMethods]);

   const prompts = movieFormQuestions.map((question) => {
      return (
         <MoviePrompt
            control={formMethods.control}
            prompt={question}
            key={question.fieldName}
         />
      );
   });

   const handleSubmit = async () => {
      const values = formMethods.getValues();
      console.log('values', values)
      setIsLoading(true);
      const result = await getMovieSummary(values);
      router.push(`/home/today?bg=${result.data.genre}`);
   };

   

   return (
      <div
         className={cn(
            "rounded-[15px] w-full min-h-[calc(100vh-45px)] overflow-auto",
            "md:w-[670px] md:min-h-fit md:overflow-auto",
            "xl:min-h-[800px]"
         )}
      >
         <Carousel className="flex flex-col">
            <div
               className={cn(
                  "flex justify-between items-center",
                  "h-[35px] px-1 py-3",
                  "2xl:px-4 2xl:h-[55px] "
               )}
            >
               <CarouselPrevious />
               <CarouselNext />
            </div>
            <CarouselContent className="md:h-fit xl:h-[745px]">
               {isLoading ? (
                  <div className="flex justify-center items-start md:items-center w-full h-screen md:h-full pt-[100px] md:pt-0">
                     <div className="flex flex-col items-center">
                        <CircleNotch className="animate-spin size-[40px] text-primary mb-3" />
                        <LoadingTexts />
                        <p className="font-header text-sm font-medium opacity-50">Getting result. This may take a while.</p>
                     </div>
                  </div>
               ) : (
                  <>
                     {prompts}
                     <LastPrompt
                        formMethods={formMethods}
                        handleSubmit={handleSubmit}
                     />
                  </>
               )}
            </CarouselContent>
         </Carousel>
      </div>
   );
};

interface MoviePromptProps {
   prompt: Prompt;
   control: Control<MovieFormData>;
}

const MoviePrompt = ({ control, prompt }: MoviePromptProps) => {
   const { question } = prompt;

   return (
      <CarouselItem>
         <div
            className={cn(
               "flex flex-col w-full h-fit justify-start",
               "px-4 pt-2",
               "md:h-full md:pb-4 md:pt-2",
            )}
         >
            <div className="pb-7">
               <p
                  className={cn(
                     "font-header font-medium pb-3",
                     "text-[26px] leading-tight",
                     "2xl:text-[35px] 2xl:leading-10"
                  )}
               >
                  {question.head}
               </p>
               <p className="text-sm md:text-base">{question.description}</p>
            </div>
            <div className="pb-6 md:pb-0">
               <InputElement control={control} prompt={prompt} />
            </div>
         </div>
      </CarouselItem>
   );
};

const InputElement = ({ control, prompt }: MoviePromptProps) => {
   const { type, fieldName, options } = prompt;

   switch (type) {
      case "text":
         return <StyledInput prompt={prompt} control={control} />;

      case "select":
         return (
            <ControlledSingleSelect
               fieldName={fieldName}
               control={control}
               options={options!}
            />
         );

      case "multi-select":
         return (
            <div className="flex flex-col gap-2">
               <p className="text-sm text-center">Pick all that apply</p>
               <ControlledMultiSelect
                  fieldName={fieldName}
                  control={control}
                  options={options!}
               />
            </div>
         );

      case "slider":
         return (
            <ControlledSlider
               fieldName={fieldName}
               control={control}
               options={options!}
            />
         );

      case "yesno":
         return (
            <ControlledYesNoSelect control={control} fieldName={fieldName} />
         );

      default:
         return <div>Unknown Type</div>;
   }
};

const StyledInput = ({ control, prompt }: MoviePromptProps) => {
   const { fieldName } = prompt;
   return (
      <div className="flex flex-col w-full h-[160px] justify-between my-3 px-2">
         <div className="border-t opacity-20" />
         <ControlledDynamicHeightInput
            className="text-[19px] md:text-[22px]"
            placeholder="Closing line..."
            fieldName={fieldName}
            control={control}
         />
         <div className="border-t opacity-20" />
      </div>
   );
};
