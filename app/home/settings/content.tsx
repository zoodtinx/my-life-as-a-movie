"use client";

import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import {
   exportEntriesCsv,
   deleteAllEntries,
   editPersonalContext,
   deleteAccount,
} from "@/app/home/settings/actions";
import { Check, CircleNotch } from "phosphor-react";
import { cn } from "@/app/shared/utils";
import { User } from "@prisma/client";

const SettingsPageContent = ({ user }: { user: User }) => {
   const { data: session, status } = useSession();
   if (status === "loading")
      return (
         <div></div>
         // <div className="h-screen w-screen flex justify-center items-center">
         //    <CircleNotch className="animate-spin size-[40px] text-primary" />
         // </div>
      );
   if (!session || !session.user) return <p>Not signed in</p>;

   return (
      <div
         className={cn(
            "flex flex-col gap-10 px-5 pb-16 pt-5",
            "2xl:gap-5 2xl:px-0 2xl:pt-0"
         )}
      >
         <div className={cn("flex flex-col", "2xl:flex-row 2xl:gap-10")}>
            <p
               className={cn(
                  "h-fit font-header font-medium text-[25px] w-auto text-center",
                  "2xl:text-[30px] 2xl:w-[300px]"
               )}
            >
               Personal Context
            </p>
            <PersonalContext user={user} />
         </div>
         <div className={cn("flex flex-col", "2xl:flex-row 2xl:gap-10")}>
            <p
               className={cn(
                  "h-fit font-header font-medium text-[25px] w-auto text-center",
                  "2xl:text-[30px] 2xl:w-[300px]"
               )}
            >
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
               className="text-left flex items-center pt-2 text-base w-full 2xl:w-[450px] justify-center"
               onClick={() => setIsEditing(true)}
            >
               <p className="hidden 2xl:block">
                  {text ? text : "Add Personal Context"}
               </p>
               <p className="block 2xl:hidden text-center border font-header rounded-lg px-3">
                  Edit Personal Context
               </p>
            </button>
         ) : (
            <div>
               <textarea
                  value={tempText}
                  onChange={(e) => setTempText(e.target.value)}
                  className={cn(
                     "border outline-primary border-primary/20 resize-none rounded-[10px] px-3 py-2 text-base mt-2 w-full h-[350px]",
                     "2xl:w-[450px] 2xl:mt-0"
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
   const [loadingDeleteEntries, setLoadingDeleteEntries] = useState(false);
   const [successDeleteEntries, setSuccessDeleteEntries] = useState(false);

   const [loadingExport, setLoadingExport] = useState(false);
   const [successExport, setSuccessExport] = useState(false);

   const [loadingDeleteUser, setLoadingDeleteUser] = useState(false);
   const [loadingSignOut, setLoadingSignOut] = useState(false);

   const handleSignOut = async () => {
      setLoadingSignOut(true);
      await signOut();
      setLoadingSignOut(false);
   };

   const handleExport = async () => {
      setLoadingExport(true);
      const csvData = await exportEntriesCsv(user.id);
      setLoadingExport(false);

      if (!csvData) return;

      const blob = new Blob([csvData], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "export.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      setSuccessExport(true);
      setTimeout(() => setSuccessExport(false), 6000);
   };

   const handleDeleteAllEntries = async () => {
      setLoadingDeleteEntries(true);
      await deleteAllEntries(user.id);
      setLoadingDeleteEntries(false);
      setSuccessDeleteEntries(true);
      setTimeout(() => setSuccessDeleteEntries(false), 6000);
   };

   const handleDeleteUser = async () => {
      setLoadingDeleteUser(true);
      await deleteAccount(user.id);
      setLoadingDeleteUser(false);
      await signOut();
   };

   return (
      <div className="flex flex-col items-start font-header font-medium text-[20px] gap-2">
         <div className="flex justify-between w-full items-center">
            <button
               onClick={handleExport}
               className="cursor-pointer"
               disabled={loadingExport}
            >
               Export entries
            </button>
            {loadingExport && <CircleNotch className="animate-spin" />}
            {!loadingExport && successExport && (
               <Check />
            )}
         </div>
         <div className="w-full 2xl:w-[450px] border-b border-b-primary/20" />

         <div className="flex justify-between w-full items-center">
            <button
               onClick={handleDeleteAllEntries}
               className="cursor-pointer"
               disabled={loadingDeleteEntries}
            >
               Delete all entries
            </button>
            {loadingDeleteEntries && <CircleNotch className="animate-spin" />}
            {!loadingDeleteEntries && successDeleteEntries && (
               <Check />
            )}
         </div>
         <div className="w-full 2xl:w-[450px] border-b border-b-primary/20" />

         <div className="flex justify-between w-full items-center">
            <button
               onClick={handleDeleteUser}
               className="cursor-pointer"
               disabled={loadingDeleteUser}
            >
               Delete account
            </button>
            {loadingDeleteUser && <CircleNotch className="animate-spin ml-2" />}
         </div>
         <div className="w-full 2xl:w-[450px] border-b border-b-primary/20" />

         <div className="flex justify-between w-full items-center">
            <button
               onClick={handleSignOut}
               className="cursor-pointer"
               disabled={loadingSignOut}
            >
               Sign out
            </button>
            {loadingSignOut && <CircleNotch className="animate-spin ml-2" />}
         </div>
      </div>
   );
};

export default SettingsPageContent;
