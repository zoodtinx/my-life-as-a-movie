"use client";

import { signOut, useSession } from "next-auth/react";
import {
   exportEntriesCsv,
   deleteAllEntries,
} from "@/app/home/settings/actions";
import { CircleNotch } from "phosphor-react";

export const AccountSettings = () => {
   const { data: session, status } = useSession();
   if (status === "loading")
      return <CircleNotch className="animate-spin size-[40px] text-primary" />;
   if (!session) return <p>Not signed in</p>;

   const handleSignOut = () => {
      signOut();
   };

   const handleExport = async () => {
      const csvData = await exportEntriesCsv(session.user?.id);

      // Create and download the file
      const blob = new Blob([csvData], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "export.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
   };

   const handleDeleteAllEntries = () => {
      deleteAllEntries(session.user?.id);
   };

   return (
      <div className="flex flex-col items-start font-header font-medium text-[20px] gap-2">
         <button onClick={handleExport} className="cursor-pointer">
            Export entries
         </button>
         <div className="w-[450px] border-b border-b-primary/20" />
         <button onClick={handleDeleteAllEntries} className="cursor-pointer">
            Delete all entries
         </button>
         <div className="w-[450px] border-b border-b-primary/20" />
         <button className="cursor-pointer">Delete account</button>
         <div className="w-[450px] border-b border-b-primary/20" />
         <button className="cursor-pointer" onClick={handleSignOut}>
            Sign out
         </button>
      </div>
   );
};
