"use client";

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { cn } from "@/app/shared/utils";
import { Option } from "@/app/shared/lib/constants/movie-prompts";

type SingleSelectInputProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

function SingleSelectInput({ options, value, onChange }: SingleSelectInputProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full text-[19px]">
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "flex flex-col items-start w-full h-auto px-3 py-[4px] border rounded-[7px] text-left transition-colors",
              "transition-colors duration-200",
              selected
                ? "bg-secondary text-white border-transparent"
                : "hover:bg-primary/5 border-primary/20 text-primary duration-75"
            )}
          >
            <p className="whitespace-nowrap font-header font-medium">{option.label}</p>
            {option.description && <p className="text-sm">{option.description}</p>}
          </button>
        );
      })}
    </div>
  );
}

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
        <>
          <SingleSelectInput options={options} value={field.value} onChange={field.onChange} />
          {fieldState.error && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errorMessage || fieldState.error.message || "This field is required"}
            </p>
          )}
        </>
      )}
    />
  );
}
