import { auth } from "@/app/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
   console.log("🔒 Middleware running for:", req.nextUrl.pathname);
   console.log("🔒 Is authenticated:", !!req.auth);

   if (!req.auth) {
      console.log("🔒 Redirecting unauthenticated user to /login");
      return NextResponse.redirect(new URL("/welcome?bg=base", req.url));
   }
});

export const config = {
   matcher: ["/home/:path*"],
};
