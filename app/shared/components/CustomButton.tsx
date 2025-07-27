interface PageButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   icon: React.ReactNode;
   iconPosition: "left" | "right";
   text: string;
}

export const PageButton = ({
   icon,
   iconPosition,
   text,
   ...buttonProps
}: PageButtonProps) => {
   return (
      <button
         className="flex items-center gap-2 cursor-pointer font-header font-medium text-[25px]"
         {...buttonProps}
      >
         {iconPosition === "left" && icon}
         <span>{text}</span>
         {iconPosition === "right" && icon}
      </button>
   );
};
