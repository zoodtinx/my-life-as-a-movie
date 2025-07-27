import { Background } from "@/app/home/components/Background";
import { NavBar } from "@/app/home/components/NavBar";
import React from "react";

const homeLayout = ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   return (
      <div className="min-w-screen flex min-h-screen text-lg">
         <Background />
         <div className="flex flex-col min-h-screen w-full z-10">
            <NavBar />
            <main className="text-primary grow">{children}</main>
         </div>
      </div>
   );
};

export default homeLayout;
