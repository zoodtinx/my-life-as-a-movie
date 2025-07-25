"use client";

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { cn } from "@/app/shared/utils";
import { Option } from "@/app/shared/constants/movie-prompts";

type SingleSelectProps = {
   options: Option[];
   value: string;
   onSelect: (value: string) => void;
};

export const SingleSelect: React.FC<SingleSelectProps> = ({
   options,
   value,
   onSelect,
}) => {
   return (
      <div className="flex flex-col gap-2 w-full text-[19px]">
         {options.map((option) => {
            const selected = option.value === value;
            return (
               <button
                  key={option.value}
                  onClick={() => onSelect(option.value)}
                  className={cn(
                     "flex items-start w-full h-auto px-3 py-2 border rounded-[7px] text-left transition-colors",
                     selected
                        ? "bg-primary text-white border-primary"
                        : "border-dashed hover:border border-primary text-primary"
                  )}
               >
                  <p className="whitespace-nowrap">{option.label}</p>
                  {option.description && (
                     <p className="text-xs text-white/80 ml-2">
                        {option.description}
                     </p>
                  )}
               </button>
            );
         })}
      </div>
   );
};

type ControlledSingleSelectProps<T extends FieldValues> = {
   fieldName: Path<T>;
   control: Control<T>;
   options: Option[];
   required?: boolean | string;
   errorMessage?: string;
};

export function ControlledSingleSelect<T extends FieldValues>({
   fieldName,
   control,
   options,
   required,
   errorMessage,
}: ControlledSingleSelectProps<T>) {
   return (
      <Controller
         name={fieldName}
         control={control}
         rules={required ? { required } : undefined}
         render={({ field, fieldState }) => (
            <div className="flex flex-col gap-2 w-full text-[19px]">
               {options.map((option) => {
                  const selected = option.value === field.value;
                  return (
                     <button
                        key={option.value}
                        type="button"
                        onClick={() => field.onChange(option.value)}
                        className={cn(
                           "flex items-start w-full h-auto px-3 py-2 border rounded-[7px] text-left transition-colors",
                           selected
                              ? "bg-white text-primary shadow-lg border-transparent"
                              : "border-dashed hover:bg-primary/10 border-primary text-primary"
                        )}
                     >
                        <p className="whitespace-nowrap">{option.label}</p>
                        {option.description && (
                           <p className="text-xs text-white/80 ml-2">
                              {option.description}
                           </p>
                        )}
                     </button>
                  );
               })}
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
