"use client";

import { signOut } from "next-auth/react";

export const AccountSettings = () => {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="flex flex-col items-start font-header font-medium text-[20px]">
      <button className="cursor-pointer">Export entries</button>
      <button className="cursor-pointer">Delete all entries</button>
      <button className="cursor-pointer">Delete account</button>
      <button className="cursor-pointer" onClick={handleSignOut}>Sign out</button>
    </div>
  );
};
