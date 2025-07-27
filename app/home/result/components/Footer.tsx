"use client";

import React from "react";
import {
   ArrowLeft,
   ArrowsCounterClockwise,
   Export,
   FilmSlate,
   TrashSimple,
} from "phosphor-react";
import { useRouter } from "next/navigation";
import { PageButton } from "@/app/shared/components/CustomButton";

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
               icon={<TrashSimple />}
               iconPosition="left"
               text="Delete"
            />
         </div>
         <div className="flex gap-8">
            <PageButton icon={<Export />} iconPosition="right" text="Share" />
         </div>
      </div>
   );
};