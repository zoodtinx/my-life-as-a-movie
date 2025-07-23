import { cn } from "@/app/shared/utils";
import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface TextInputProps {
   textAlignment?: "center" | "left";
   textSize?: TextSize;
   height?: string;
}

type TextSize = "base" | "md" | "lg" | "xl";


export const TextInput = React.forwardRef<
   HTMLInputElement,
   React.InputHTMLAttributes<HTMLInputElement> & TextInputProps
>(({ className, ...props }, ref) => {

   return (
      <div className={cn("flex flex-col w-full group h-[80px]",
         className
      )}>
         <div className="flex grow w-full items-end gap-2">
            <input
               {...props}
               ref={ref}
               value={props.value ?? ""}
               className={cn(
                  "focus:outline-none font-medium inline-block grow w-full placeholder:font-normal placeholder:text-tertiary text-center h-full",
                  "font-headline leading-0 font-light",
                  className
               )}
            />
         </div>
      </div>
   );
});

TextInput.displayName = "TextInput";

type ControlledInputProps<T extends FieldValues> = {
   fieldName: Path<T>;
   control: Control<T>;
   errorMessage?: string;
} & Omit<
   React.InputHTMLAttributes<HTMLInputElement> & TextInputProps,
   "name"
>;

export function ControlledInput<T extends FieldValues>({
   fieldName,
   control,
   required,
   errorMessage,
   ...rest
}: ControlledInputProps<T>) {
   return (
      <Controller
         name={fieldName}
         control={control}
         rules={required ? { required } : undefined}
         render={({ field, fieldState }) => (
            <div>
               <TextInput
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
