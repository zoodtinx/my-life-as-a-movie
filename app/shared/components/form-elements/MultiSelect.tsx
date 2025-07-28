"use client";

import React from "react";
import { cn } from "@/app/shared/utils";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { Option } from "@/app/shared/lib/constants/movie-prompts";


type MultiSelectProps = {
   options: Option[];
   selectedValues: string[];
   onChange: (values: string[]) => void;
};

type MultiSelectOptionProps = {
   option: Option;
   selected: boolean;
   onToggle: (value: string) => void;
};

const MultiSelectOption: React.FC<MultiSelectOptionProps> = ({
   option,
   selected,
   onToggle,
}) => (
   <button
      type="button"
      onClick={() => onToggle(option.value)}
      className={cn(
         "flex flex-col items-start w-full h-auto px-3 py-[4px] border rounded-[7px] text-left transition-colors duration-200",
         selected
            ? "bg-secondary text-white border-transparent"
            : "hover:bg-primary/5 border-primary/20 text-primary duration-75"
      )}
   >
      <p className="whitespace-nowrap font-header font-medium">{option.label}</p>
      {option.description && <p className="text-sm">{option.description}</p>}
   </button>
);

export const MultiSelect: React.FC<MultiSelectProps> = ({
   options,
   selectedValues,
   onChange,
}) => {
   const toggleValue = (value: string) => {
      if (selectedValues.includes(value)) {
         onChange(selectedValues.filter((v) => v !== value));
      } else {
         onChange([...selectedValues, value]);
      }
   };

   return (
      <div className="grid grid-cols-2 gap-2 w-full text-[19px]">
      {options.map((option) => (
        <MultiSelectOption
          key={option.value}
          option={option}
          selected={selectedValues.includes(option.value)}
          onToggle={toggleValue}
        />
      ))}
    </div>
   );
};

type ControlledMultiSelectProps<T extends FieldValues> = {
   fieldName: Path<T>;
   control: Control<T>;
   options: Option[];
   required?: boolean | string;
   errorMessage?: string;
};

export function ControlledMultiSelect<T extends FieldValues>({
   fieldName,
   control,
   options,
}: ControlledMultiSelectProps<T>) {
   return (
      <Controller
         name={fieldName}
         control={control}
         render={({ field }) => (
            <MultiSelect
               options={options}
               selectedValues={field.value || []}
               onChange={field.onChange}
            />
         )}
      />
   );
}
