"use client";

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { Slider } from "@/app/shared/components/primitives/Slider";
import { cn } from "@/app/shared/utils";

type ControlledSliderProps<T extends FieldValues> = {
   fieldName: Path<T>;
   control: Control<T>;
   min?: number;
   max?: number;
   step?: number;
   required?: boolean | string;
   errorMessage?: string;
   className?: string;
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
}: ControlledSliderProps<T>) {
   return (
      <Controller
         name={fieldName}
         control={control}
         rules={required ? { required } : undefined}
         render={({ field, fieldState }) => (
            <div className={cn("flex flex-col pb-3 gap-2", className)}>
               <div className="flex justify-between font-header font-medium">
                  <p>Peaceful</p>
                  <p className="text-secondary">Chaotic</p>
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
