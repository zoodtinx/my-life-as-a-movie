import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { createDemoSession } from "@/app/api/demo/create-demo-session";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
   providers: [
      Google(
         {
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
         }
      ),
      CredentialsProvider({
         name: "demo",
         credentials: {},
         async authorize() {
            const demoUser = await createDemoSession();

            if (demoUser) {
               console.log("demoUser", demoUser);
               return demoUser.user; // returned user goes into token & session
            }
            return null;
         },
      }),
   ],
   pages: {
      signIn: "/login",
   },
   session: {
      strategy: "jwt", // Use JWT instead of database sessions
   },
   callbacks: {
      async signIn({ user }) {
         console.log("user", user);
         if (!user.email) return false;

         const newUser = await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: {
               email: user.email,
               name: user.name ?? "",
            },
         });

         console.log("newUser", newUser);
         return true;
      },

      async jwt({ token, user }) {
         // Store user data in JWT token during sign-in
         if (user?.email) {
            const dbUser = await prisma.user.findUnique({
               where: { email: user.email },
            });

            if (dbUser) {
               token.id = dbUser.id;
               token.email = dbUser.email;
               token.name = dbUser.name;
            }
         }
         return token;
      },

      async session({ session, token }) {
         // Get user data from JWT token (no database query needed)
         if (token.id && session.user) {
            session.user.id = token.id as string;
            session.user.email = token.email as string;
            session.user.name = token.name as string;
         }
         return session;
      },

      async redirect({ url, baseUrl }) {
         console.log("url", url);
         if (url && url.includes("/login")) {
            return `${baseUrl}/dashboard`;
         }
         return url.startsWith(baseUrl) ? url : baseUrl;
      },
   },
});
