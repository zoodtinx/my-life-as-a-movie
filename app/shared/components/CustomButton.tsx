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
            "flex items-center gap-2 cursor-pointer font-header font-medium text-[18px] py-1 pl-2 pr-3 active:bg-primary/20 rounded-xl",
            "md:text-[20px]",
            "2xl:text-[25px]",
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
