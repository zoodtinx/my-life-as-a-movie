"use client";

import React from "react";
import {
   ArrowLeft,
   ArrowsCounterClockwise,
   Export,
   FilmSlate,
} from "phosphor-react";
import { useRouter } from "next/navigation";

export const Footer = () => {
   const router = useRouter();

   const handleQuit = () => {
      router.push("/home/today");
   };

   return (
      <div className="flex justify-between">
         <div className="flex gap-8">
            <PageButton
               onClick={handleQuit}
               icon={<ArrowLeft />}
               iconPosition="left"
               text="Quit"
            />
            <PageButton
               icon={<ArrowsCounterClockwise />}
               iconPosition="left"
               text="Retake"
            />
         </div>
         <div className="flex gap-8">
            <PageButton icon={<Export />} iconPosition="right" text="Share" />
         </div>
      </div>
   );
};

interface PageButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   icon: React.ReactNode;
   iconPosition: "left" | "right";
   text: string;
}

const PageButton = ({
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
