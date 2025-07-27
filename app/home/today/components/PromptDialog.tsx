"use client";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/app/shared/components/primitives/Carousel";
import { ControlledInput } from "@/app/shared/components/form-elements/TextInput";
import { MovieFormData } from "@/app/shared/lib/zod/movie-input.zod.schema";
import { useForm } from "react-hook-form";
import { Control } from "react-hook-form";
import {
   movieFormQuestions,
   Prompt
} from "@/app/shared/lib/constants/movie-prompts";
import { ControlledSingleSelect } from "@/app/shared/components/form-elements/SingleSelect";
import { ControlledMultiSelect } from "@/app/shared/components/form-elements/MultiSelect";
import { ControlledSlider } from "@/app/shared/components/form-elements/SliderInput";
import { ControlledYesNoSelect } from "@/app/shared/components/form-elements/YesNo";
import { getMovieSummary } from "@/app/home/today/actions";
import { useRouter } from "next/navigation";


export const PromptDialog = () => {
   const formMethods = useForm<MovieFormData>();
   const router = useRouter();


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
      const values = formMethods.getValues()
      const result = await getMovieSummary(values)
      console.log('result', result)
      router.push("/home/result")
   }

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
                  <div className="flex flex-col w-full h-full pt-4 px-6 bg">
                     Are you ready for the result?
                     <button
                        className="border p-3 w-fit cursor-pointer"
                        onClick={handleSubmit}
                     >
                        Submit
                     </button>
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
         return <ControlledYesNoSelect control={control} fieldName={fieldName} />;

      default:
         return <div>Unknown Type</div>;
   }
};
