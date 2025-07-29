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
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { CircleNotch } from "phosphor-react";

export const PromptDialog = () => {
   const { data: session, status } = useSession();
   
   const formMethods = useForm<MovieFormData>({
      defaultValues: defaultMovieFormData
   });
   const router = useRouter()

   useEffect(() => {
      if (session?.user?.id) {
         formMethods.setValue("userId", session.user.id);
      }
   }, [session?.user?.id, formMethods]);

   if (status === "loading") return <CircleNotch className="animate-spin size-[40px] text-primary" />;
   if (!session) return <p>Not signed in</p>;

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
      const result = await getMovieSummary(values);
      console.log("result", result);
      router.push("/home/today");
   };

   return (
      <div className="bg-background rounded-[15px] w-[670px] min-h-[700px] shadow-main">
         <Carousel className="flex flex-col">
            <div className="flex justify-between items-center px-4 py-3 h-[55px]">
               <CarouselPrevious />
               <CarouselNext />
            </div>
            <CarouselContent className="h-[645px]">
               {prompts}
               <LastPrompt formMethods={formMethods} handleSubmit={handleSubmit} />
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
         <div className="flex flex-col justify-between w-full h-full pt-6 px-6 ">
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
            <ControlledMultiSelect
               fieldName={fieldName}
               control={control}
               options={options!}
            />
         );

      case "slider":
         return <ControlledSlider fieldName={fieldName} control={control} options={options!} />;

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
      <div className="flex flex-col w-full h-[160px] justify-between">
         <div className="border-t opacity-20" />
         <ControlledDynamicHeightInput className="text-[22px]" placeholder="Your answer?" fieldName={fieldName} control={control} />
         <div className="border-t opacity-20" />
      </div>
   );
};
