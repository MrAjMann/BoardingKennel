import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
const prisma = new PrismaClient();
console.log(prisma);

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // CredentialsProvider({
    //   async authorize(req: String){
    //     const user = await prisma.user.findFirst({
    //       where: {
    //         username: "john"
    //       },
    //     })
        
    //   }
    // })
  ],
  callbacks: {
    // async jwt({ token, user }) {
    //   if (user) {
    //     token.name = user.username
    //   }
    //   return token;
    // },
    // async session({ session, token }) {
    //   session.user = {
    //     username: token.name,
    //   };
    //   return session;
    // },
  },
  pages: {
    signIn: '/login',  // Displays signin buttons

  },
  secret:"test",
  debug: false,
})