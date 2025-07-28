"use client"

import { cn } from "@/app/shared/utils";
import React, { useEffect, useRef } from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface TextInputProps {
  textAlignment?: "center" | "left";
  textSize?: TextSize;
  height?: string;
}

type TextSize = "base" | "md" | "lg" | "xl";

// Auto-growing Textarea replacing TextInput
export const DynamicHeightInput = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & TextInputProps
>(({ className, value, ...props }, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Sync forwarded ref with textareaRef
  React.useImperativeHandle(ref, () => textareaRef.current!);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [value]);

  return (
    <div className={cn("flex flex-col w-full group", className)}>
      <textarea
        {...props}
        ref={textareaRef}
        value={value ?? ""}
        rows={1}
        className={cn(
          "focus:outline-none font-medium grow w-full placeholder:font-normal placeholder:text-tertiary",
          "font-headline font-light leading-snug resize-none overflow-hidden",
          props.textAlignment === "left" ? "text-left" : "text-center"
        )}
        style={{ height: props.height }}
      />
    </div>
  );
});

DynamicHeightInput.displayName = "DynamicHeightInput";

type ControlledDynamicHeightInputProps<T extends FieldValues> = {
  fieldName: Path<T>;
  control: Control<T>;
  errorMessage?: string;
} & Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & TextInputProps,
  "name"
>;

export function ControlledDynamicHeightInput<T extends FieldValues>({
  fieldName,
  control,
  required,
  errorMessage,
  ...rest
}: ControlledDynamicHeightInputProps<T>) {
  return (
    <Controller
      name={fieldName}
      control={control}
      rules={required ? { required } : undefined}
      render={({ field, fieldState }) => (
        <div>
          <DynamicHeightInput
            {...field}
            {...rest}
            aria-invalid={!!fieldState.error}
          />
          {fieldState.error && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errorMessage ||
                fieldState.error?.message ||
                "This field is required"}
            </p>
          )}
        </div>
      )}
    />
  );
}
