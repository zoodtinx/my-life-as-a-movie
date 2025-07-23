"use client";

import React from "react";
import { cn } from "@/app/shared/utils";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

type Option = {
   value: string;
   label: string;
};

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
      className="flex items-center"
   >
      <span
         className={cn(
            "px-3 py-1 rounded-[7px] cursor-pointer transition-colors select-none",
            selected
               ? "bg-primary text-white border border-primary"
               : "border border-dashed border-white/30 text-primary"
         )}
      >
         {option.label}
      </span>
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
      <div className="flex flex-wrap gap-2 w-fit text-[19px]">
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
