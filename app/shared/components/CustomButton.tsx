import { cn } from "@/app/shared/utils";

interface PageButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   icon: React.ReactNode;
   iconPosition: "left" | "right";
   className?: string,
   text: string;
}

export const PageButton = ({
   icon,
   iconPosition,
   text,
   className,
   ...buttonProps
}: PageButtonProps) => {
   return (
      <button
         className={cn(
            "flex items-center gap-2 cursor-pointer font-header font-medium text-md py-1 pl-2 pr-3 active:bg-primary/20 rounded-lg leading-none",
            className
         )}
         {...buttonProps}
      >
         {iconPosition === "left" && icon}
         <span>{text}</span>
         {iconPosition === "right" && icon}
      </button>
   );
};
