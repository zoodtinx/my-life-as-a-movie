"use client";

import { CircleNotch } from "phosphor-react";

// const GlobalLoading = () => {
//    return (
//       <div className="absolute w-full h-full">
//          <CircleNotch className="animate-spin" />
//       </div>
//    );
// };

// export default GlobalLoading;

export default function Loading() {
   return (
     <div className="flex justify-center items-center h-[calc(100vh-80px)]">
       <CircleNotch className="animate-spin size-[40px] text-primary" />
     </div>
   );
 }
 