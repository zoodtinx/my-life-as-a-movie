"use client";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/app/shared/components/DropdownMenu";
import { MLAMLogo } from "@/app/shared/icons/Logo";
import { List, SlidersHorizontal, Calendar, Sliders, FilmSlate, Flower } from "phosphor-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/app/shared/utils";
import { Suspense } from "react";

export const NavBar = () => {
   return (
      <>
         <nav
            className={cn(
               "w-full h-[45px] flex items-center justify-between pl-3 pr-4",
               "md:h-[65px] md:pl-5",
               "lg:hidden"
            )}
         >
            <MLAMLogo
               className={cn(
                  "text-primary w-[170px]",
                  "md:w-[210px]",
                  "h-auto"
               )}
            />
            <MobileMenu />
         </nav>

         <nav
            className={cn(
               "w-full xl:h-[80px] xl:px-5 hidden",
               "lg:flex lg:h-[60px] lg:px-3"
            )}
         >
            <div className="w-1/3 flex items-center">
               <MLAMLogo
                  className={cn(
                     "text-primary pl-2",
                     "lg:w-[220px]",
                     "xl:w-[280px]"
                  )}
               />
            </div>
            <div className="w-1/3 flex justify-center items-center">
               <Suspense>
                  <MenuBar />
               </Suspense>
            </div>
            <div className="w-1/3 flex justify-end items-center">
            <Suspense>

               <SettingsMenu />
            </Suspense>
            </div>
         </nav>
      </>
   );
};

const MobileMenu = () => {
   const router = useRouter();

   const handleClick = (page: string) => {
      router.push(`/home/${page}`);
   };

   return (
      <DropdownMenu>
         <DropdownMenuTrigger className="focus:outline-0 p-1 rounded-md active:bg-primary/15">
            <List className="size-5 md:size-7" />
         </DropdownMenuTrigger>
         <DropdownMenuContent className="bg-white border-transparent shadow-sm mr-3 font-medium rounded-[13px]">
            <DropdownMenuItem onClick={() => handleClick("today")} className="gap-1">
            <FilmSlate />
               <p>Today</p>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleClick("timeline")} className="gap-1">
            <Calendar />
               Timeline
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleClick("insights")} className="gap-1">
            <Flower />
               Insights
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleClick("settings")} className="gap-1">
            <SlidersHorizontal />
               Settings
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
};

const MenuBar = () => {
   const router = useRouter();
   const searchParams = useSearchParams();

   const handleClick = (menu: string) => {
      const newParams = new URLSearchParams(searchParams.toString());

      if (menu === "today") {
         router.push(`/home/${menu}`);
      } else {
         newParams.set("bg", "settings");
         router.push(`/home/${menu}?${newParams.toString()}`);
      }
   };

   return (
      <ul className="flex gap-4 text-sm text-muted-foreground font-header font-medium">
         <MenuItem menu="Today" onClick={handleClick} />
         <Divider />
         <MenuItem menu="Timeline" onClick={handleClick} />
         <Divider />
         <MenuItem menu="Insights" onClick={handleClick} />
      </ul>
   );
};

const MenuItem = ({
   menu,
   onClick,
}: {
   menu: string;
   onClick: (menu: string) => void;
}) => {
   const pathName = usePathname();
   const menuLowercase = menu.toLowerCase();
   const isActive = pathName.includes(menuLowercase);

   return (
      <button
         className={cn(
            "cursor-pointer text-primary px-5 text-center rounded-md",
            "md:text-[18px]",
            "xl:text-[22px]",
            isActive && "bg-primary text-white"
         )}
         onClick={() => onClick(menuLowercase)}
      >
         {menu}
      </button>
   );
};

const Divider = () => (
   <div className="flex py-1 xl:py-2">
      <div className="border-r border-primary" />
   </div>
);

const SettingsMenu = () => {
   const router = useRouter();
   const searchParams = useSearchParams();
   const pathName = usePathname();
   const menuLowercase = "settings";
   const isActive = pathName.includes(menuLowercase);

   const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("bg", "settings");
      router.push(`/home/${menuLowercase}`);
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
         <SlidersHorizontal className="lg:size-7 xl:size-8" />
      </a>
   );
};
