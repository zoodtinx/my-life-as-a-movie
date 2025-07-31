"use client";

import {
   ArrowLeft, Export, TrashSimple
} from "phosphor-react";
import { useRouter, useSearchParams } from "next/navigation";
import { PageButton } from "@/app/shared/components/CustomButton";
import { deleteMovie } from "@/app/home/result/actions";
import { cn } from "@/app/shared/utils";

export const Footer = () => {
   const router = useRouter();
   const searchParams = useSearchParams();
   const id = searchParams.get("id");

   const handleQuit = () => {
      router.push("/home/today");
   };

   const handleDelete = async () => {
      if (!id) return;
      await deleteMovie(id);
      router.push("/home/today");
   };

   return (
      <div
         className={cn(
            "flex justify-between",
            "px-5 pb-5",
            "2xl:px-0 2xl:pb-0"
         )}
      >
         <div className="flex gap-5 2xl:gap-8">
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
               onClick={handleDelete}
            />
         </div>
         <div className="flex gap-8">
            <PageButton icon={<Export />} iconPosition="right" text="Share" />
         </div>
      </div>
   );
};