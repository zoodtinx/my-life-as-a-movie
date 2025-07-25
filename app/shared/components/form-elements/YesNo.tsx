"use client";

import React from "react";
import { cn } from "@/app/shared/utils";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

type YesNoSelectProps = {
   value?: boolean;
   onChange: (value: boolean) => void;
};

const YesNoOption: React.FC<{
   label: string;
   value: boolean;
   selected: boolean;
   onClick: (value: boolean) => void;
}> = ({ label, value, selected, onClick }) => (
   <button
      type="button"
      onClick={() => onClick(value)}
      className="flex items-center"
   >
      <span
         className={cn(
            "px-4 py-1 rounded-[7px] cursor-pointer transition-colors select-none",
            selected
               ? "bg-primary text-white border border-primary"
               : "border border-dashed border-white/30 text-primary"
         )}
      >
         {label}
      </span>
   </button>
);

export const YesNoSelect: React.FC<YesNoSelectProps> = ({ value, onChange }) => {
   return (
      <div className="flex gap-3 w-fit text-[19px]">
         <YesNoOption
            label="Yes"
            value={true}
            selected={value === true}
            onClick={onChange}
         />
         <YesNoOption
            label="No"
            value={false}
            selected={value === false}
            onClick={onChange}
         />
      </div>
   );
};

type ControlledYesNoSelectProps<T extends FieldValues> = {
   fieldName: Path<T>;
   control: Control<T>;
   required?: boolean | string;
   errorMessage?: string;
};

export function ControlledYesNoSelect<T extends FieldValues>({
   fieldName,
   control,
}: ControlledYesNoSelectProps<T>) {
   return (
      <Controller
         name={fieldName}
         control={control}
         render={({ field }) => (
            <YesNoSelect
               value={field.value}
               onChange={field.onChange}
            />
         )}
      />
   );
}