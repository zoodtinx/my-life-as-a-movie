import { PromptDialog } from "@/app/home/today/components/PromptDialog";
import React from "react";

const PromptPage = () => {
   return (
      <div className="flex flex-col justify-between items-center w-full h-full pb-9">
         <div></div>
         <PromptDialog />
         <div></div>
      </div>
   );
};

export default PromptPage;
