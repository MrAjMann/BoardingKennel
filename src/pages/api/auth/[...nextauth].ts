import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { type NextAuthOptions } from "next-auth";
import { getToken } from "next-auth/jwt"
import { trpc } from "../../../utils/trpc";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../server/db/client";
import { getSession, signIn } from "next-auth/react";


export const authOptions: NextAuthOptions = {
    
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder:"Enter Your name",
                },
                password: {
                    label: "password",
                    type: "password",
                    
                },
                
                
                
            },
            
            async authorize(credentials, _req) {
                console.log('req', _req)
                console.log('cred', credentials)


                const user = await prisma?.user?.findFirst({
                    where: {
                        email:  credentials?.email,
                        password:  credentials?.password,
                    },
                    
                
                    
                })
                
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    console.log('user', user);
                    
                    return user
                  } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
            
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                  }
               
                
            },
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            // console.log("in session callback,", session, token, user)
            if (token) {
              session.id = token.id;
            }
            return session
      
          },
          async jwt({ token, user, account, profile, isNewUser }) {
            console.log("in jwt user =", user, account, profile, isNewUser)
            
            if (user) {
              token.id = user.id;
            }
      
            return token
          },

        async redirect() {
            return ("/")
        }
        
    },
    events: {
        async signIn(message) { " on successful sign in " },
        async session(message) { ' session is active  '},

    },
    pages: {
        signIn:'/login'
    },
    session: {
        strategy: "jwt"
    },

    secret: process.env.NEXTAUTH_SECRET,
};


export default NextAuth(authOptions);