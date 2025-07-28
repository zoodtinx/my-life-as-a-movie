"use client";

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { Slider } from "@/app/shared/components/primitives/Slider";
import { cn } from "@/app/shared/utils";
import { Option } from "@/app/shared/lib/constants/movie-prompts";

type ControlledSliderProps<T extends FieldValues> = {
   fieldName: Path<T>;
   control: Control<T>;
   min?: number;
   max?: number;
   step?: number;
   required?: boolean | string;
   errorMessage?: string;
   className?: string;
   options: Option[];
};

export function ControlledSlider<T extends FieldValues>({
   fieldName,
   control,
   min = 0,
   max = 100,
   step = 1,
   required,
   errorMessage,
   className,
   options,
}: ControlledSliderProps<T>) {
   return (
      <Controller
         name={fieldName}
         control={control}
         rules={required ? { required } : undefined}
         render={({ field, fieldState }) => (
            <div className={cn("flex flex-col pb-3 gap-2", className)}>
               <div className="flex justify-between font-header font-medium w-full">
                  {options.map((option, index) => {
                     return (
                        <div
                           className={`${index === 1 && "text-secondary"} text-[20px]`}
                           key={option.value}
                        >
                           <p>{option.label}</p>
                        </div>
                     );
                  })}
               </div>
               <Slider
                  value={field.value ? [field.value] : [min]} // wrap in array
                  onValueChange={(val) => field.onChange(val[0])} // take first element
                  min={min}
                  max={max}
                  step={step}
                  aria-invalid={!!fieldState.error}
               />
               {fieldState.error && (
                  <p className="text-xs text-red-500 mt-1 font-medium">
                     {errorMessage ||
                        fieldState.error.message ||
                        "This field is required"}
                  </p>
               )}
            </div>
         )}
      />
   );
}
