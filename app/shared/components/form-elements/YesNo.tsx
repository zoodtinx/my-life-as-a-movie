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
   className={cn(
      "flex flex-col items-center w-full h-auto px-3 py-[4px] border rounded-[7px] transition-colors duration-200",
      selected
         ? "bg-secondary text-white border-transparent"
         : "hover:bg-primary/5 border-primary/20 text-primary duration-75"
   )}
>
   <p className="whitespace-nowrap font-header font-medium ">{label}</p>
   {/* {description && <p className="text-sm">{description}</p>} */}
</button>
);

export const YesNoSelect: React.FC<YesNoSelectProps> = ({ value, onChange }) => {
   return (
      <div className="flex gap-3 w-full text-[19px]">
         <YesNoOption
            label="No"
            value={false}
            selected={value === false}
            onClick={onChange}
         />
         <YesNoOption
            label="Yes"
            value={true}
            selected={value === true}
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