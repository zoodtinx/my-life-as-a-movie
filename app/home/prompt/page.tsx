import { PromptDialog } from "@/app/home/today/components/PromptDialog";
import React from "react";
import { SessionProvider } from "next-auth/react";

const PromptPage = () => {
   return (
      <SessionProvider>
         <div className="flex flex-col justify-between items-center w-full h-full pb-9">
            <div></div>
            <PromptDialog />
            <div></div>
         </div>
      </SessionProvider>
   );
};

export default PromptPage;
