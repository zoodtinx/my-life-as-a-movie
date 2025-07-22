"use client";

import { MLAMLogo } from "@/app/shared/icons/Logo";
import { SlidersHorizontal } from "phosphor-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/app/shared/utils";
import Link from "next/link";

export const NavBar = () => {
   return (
      <nav className="w-full p-6 flex">
         <div className="w-1/3 flex items-center">
            <MLAMLogo className="text-primary pl-2" />
         </div>
         <div className="w-1/3 flex justify-center items-center">
            <MenuBar />
         </div>
         <div className="w-1/3 flex justify-end items-center">
         <SettingsMenu />
         </div>
      </nav>
   );
};

const MenuBar = () => {
   return (
      <ul className="flex gap-4 text-sm text-muted-foreground font-header font-medium">
         <MenuItem>Today</MenuItem>
         <div className="flex py-2">
            <div className="border-r-1 border-primary" />
         </div>
         <MenuItem>Timeline</MenuItem>
         <div className="flex py-2">
            <div className="border-r-1 border-primary" />
         </div>
         <MenuItem>Insights</MenuItem>
      </ul>
   );
};

const MenuItem = ({ children }: { children: string }) => {
   const router = useRouter();
   const searchParams = useSearchParams();
   const pathName = usePathname();
   const menuLowercase = children.toLowerCase();
   const isActive = pathName.includes(menuLowercase);
 
   const handleClick = (e: React.MouseEvent) => {
     e.preventDefault();
     router.push(`/home/${menuLowercase}?${searchParams.toString()}`);
   };
 
   return (
     <a
       href={`/${menuLowercase}?${searchParams.toString()}`}
       onClick={handleClick}
       className={cn(
         "cursor-pointer text-primary px-5 text-center rounded-md text-[22px]",
         isActive && "bg-primary text-white"
       )}
     >
       {children}
     </a>
   );
 };

 const SettingsMenu = () => {
   const router = useRouter();
   const searchParams = useSearchParams();
   const pathName = usePathname();
   const menuLowercase = 'settings'
   const isActive = pathName.includes(menuLowercase);
 
   const handleClick = (e: React.MouseEvent) => {
     e.preventDefault();
     router.push(`/home/${menuLowercase}?${searchParams.toString()}`);
   };
 
   return (
     <a
       href={`/${menuLowercase}?${searchParams.toString()}`}
       onClick={handleClick}
       className={cn(
         "cursor-pointer text-primary text-center rounded-md p-1",
         isActive && "bg-primary text-white"
       )}
     >
       <SlidersHorizontal className="size-8" />
     </a>
   );
 };