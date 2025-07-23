"use client";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/app/shared/components/Carousel";
import { ControlledInput } from "@/app/shared/components/form-elements/TextInput";
import { MovieFormData } from "@/app/shared/zod/movie-input.zod.schema";
import { useForm } from "react-hook-form";
import { Control } from "react-hook-form";
import {
   MovieFormFieldName,
   movieFormQuestions,
   Prompt,
} from "@/app/shared/constants/movie-prompts";
import { ControlledSingleSelect } from "@/app/shared/components/form-elements/SingleSelect";
import { ControlledMultiSelect } from "@/app/shared/components/form-elements/MultiSelect";
import { ControlledSlider } from "@/app/shared/components/form-elements/SliderInput";

export const PromptDialog = () => {
   const formMethods = useForm<MovieFormData>();

   const values = formMethods.watch();
   console.log("values", values);

   const prompts = movieFormQuestions.map((question) => {
      return (
         <MoviePrompt
            control={formMethods.control}
            prompt={question}
            key={question.fieldName}
         />
      );
   });

   return (
      <div className="bg-background rounded-[15px] w-[670px] min-h-[420px] shadow-main">
         <Carousel className="flex flex-col">
            <div className="flex justify-between items-center px-4 py-3 h-[55px]">
               <CarouselPrevious />
               <p className="pt-1 font-header font-medium text-[17px]">
                  If today were a movie...
               </p>
               <CarouselNext />
            </div>
            <CarouselContent className="min-h-[365px] h-fit">
               {prompts}
               <CarouselItem>
                  <div className="border-b opacity-10" />
                  <div className="flex flex-col justify-between w-full h-full pt-4 px-6 bg">
                     Are you ready for the result?
                  </div>
               </CarouselItem>
            </CarouselContent>
         </Carousel>
      </div>
   );
};

interface MoviePromptProps {
   prompt: Prompt;
   control: Control<MovieFormData>;
}

type InputType = "text" | "select" | "multi-select" | "slider" | "yesno";

const MoviePrompt = ({ control, prompt }: MoviePromptProps) => {
   const { question } = prompt;

   return (
      <CarouselItem>
         <div className="border-b opacity-10" />
         <div className="flex flex-col justify-between w-full h-full pt-4 px-6 bg">
            <div>
               <p className="font-header font-medium text-[35px] leading-10 pb-5">
                  {question.head}
               </p>
               <p>{question.description}</p>
            </div>
            <div className="pb-6">
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
         return <ControlledInput fieldName={fieldName} control={control} />;

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
            <ControlledMultiSelect
               fieldName={fieldName}
               control={control}
               options={options!}
            />
         );

      case "slider":
         return <ControlledSlider fieldName={fieldName} control={control} />;

      case "yesno":
         return <div>Slider Input Mock</div>;

      default:
         return <div>Unknown Type</div>;
   }
};
