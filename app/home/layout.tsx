import { Background } from "@/app/home/components/Background";
import { NavBar } from "@/app/home/components/NavBar";
import { MLAMLogo } from "@/app/shared/icons/Logo";
import React from "react";

const homeLayout = ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   return (
      <main className="w-full h-full flex">
         <Background />
         <div className="flex flex-col h-full w-full z-10">
            <NavBar />
            <div>{children}</div>
         </div>
      </main>
   );
};

export default homeLayout;
