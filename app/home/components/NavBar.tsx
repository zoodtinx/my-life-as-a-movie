"use client";

import { MLAMLogo } from "@/app/shared/icons/Logo";
import { SlidersHorizontal } from "phosphor-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/app/shared/utils";

export const NavBar = () => {
   return (
      <nav className="w-full px-5 h-[80px] flex">
         <div className="w-1/3 flex items-center">
            <MLAMLogo className="text-primary pl-2 w-[280px]" />
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
            "cursor-pointer text-primary px-5 text-center rounded-md text-[22px]",
            isActive && "bg-primary text-white"
         )}
         onClick={() => onClick(menuLowercase)}
      >
         {menu}
      </button>
   );
};

const Divider = () => (
   <div className="flex py-2">
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
         <SlidersHorizontal className="size-8" />
      </a>
   );
};
