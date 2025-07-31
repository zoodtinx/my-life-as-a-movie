"use client";

import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import {
   exportEntriesCsv,
   deleteAllEntries,
   editPersonalContext,
   deleteAccount,
} from "@/app/home/settings/actions";
import { CircleNotch } from "phosphor-react";
import { cn } from "@/app/shared/utils";
import { User } from "@prisma/client";

const SettingsPageContent = ({ user }: { user: User }) => {
   const { data: session, status } = useSession();
   if (status === "loading")
      return <CircleNotch className="animate-spin size-[40px] text-primary" />;
   if (!session || !session.user) return <p>Not signed in</p>;

   return (
      <div className="flex flex-col gap-5">
         <div className="flex gap-10">
            <p className="h-fit bg- font-header font-medium text-[30px] w-[300px] text-right">
               Personal Context
            </p>
            <PersonalContext user={user} />
         </div>
         <div className="flex items-baseline gap-10">
            <p className="font-header font-medium text-[30px] w-[300px] text-right">
               Account Settings
            </p>
            <AccountSettings user={user} />
         </div>
      </div>
   );
};

export const PersonalContext = ({ user }: { user: User }) => {
   const [isEditing, setIsEditing] = useState(false);
   const [text, setText] = useState("");
   const [tempText, setTempText] = useState(text);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (user && user.personalContext !== undefined) {
         setText(user.personalContext || "");
         setTempText(user.personalContext || "");
      }
   }, [user]);

   const handleSubmit = async () => {
      setLoading(true);
      try {
         await editPersonalContext(user.id, tempText);
         setText(tempText);
         setIsEditing(false);
      } finally {
         setLoading(false);
      }
   };

   const handleDiscard = () => {
      setTempText(text);
      setIsEditing(false);
   };

   return (
      <div>
         {!isEditing ? (
            <button
               className="text-left flex items-center pt-2  text-base w-[450px]"
               onClick={() => setIsEditing(true)}
            >
               {text ? text : "Add Personal Context"}
            </button>
         ) : (
            <div>
               <textarea
                  value={tempText}
                  onChange={(e) => setTempText(e.target.value)}
                  className={cn(
                     "border outline-primary border-primary/20 resize-none rounded-[10px] px-3 py-2 text-base",
                     "w-[450px] h-[350px]"
                  )}
               />
               <div className="flex justify-between font-header font-medium mt-2">
                  <button
                     className="border px-2 rounded-[7px] hover:bg-primary/10 bg-transparent transition-colors"
                     onClick={handleDiscard}
                     disabled={loading}
                  >
                     Discard
                  </button>
                  <button
                     className="border px-2 rounded-[7px] hover:bg-primary/10 bg-transparent transition-colors flex items-center justify-center gap-2"
                     onClick={handleSubmit}
                     disabled={loading}
                  >
                     {loading ? (
                        <CircleNotch className="animate-spin" size={18} />
                     ) : (
                        "Submit"
                     )}
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export const AccountSettings = ({ user }: { user: User }) => {
   const handleSignOut = () => {
      signOut();
   };

   const handleExport = async () => {
      const csvData = await exportEntriesCsv(user.id);

      if (!csvData) {
         return
      }

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
      deleteAllEntries(user.id);
   };

   const handleDeleteUser = async () => {
      await deleteAccount(user.id);
      signOut();
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
         <button onClick={handleDeleteUser} className="cursor-pointer">
            Delete account
         </button>
         <div className="w-[450px] border-b border-b-primary/20" />
         <button className="cursor-pointer" onClick={handleSignOut}>
            Sign out
         </button>
      </div>
   );
};

export default SettingsPageContent;
