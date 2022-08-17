import NextAuth, { type NextAuthOptions } from "next-auth";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt",
	},

	callbacks: {
		async jwt({ token, user  }) {
			if (user) {
				token.id = user.id
			}
			return token
		},
		async session({ session, token }) {
			// console.log("in session callback,", { session, token });
			if (session) {
				session.user.id = token.id;
			}
			// console.log("sessionID: ", session.user.id);
			return session;
		},

		
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "email",
					type: "email",
					placeholder: "Enter Your name",
				},
				password: {
					label: "password",
					type: "password",
				},
			},

			async authorize(credentials, _req) {
				// console.log('REQ', _req)
				// console.log('CRED', credentials)
				const user =  await prisma?.user?.findFirst({
					where: {
						email: credentials?.email ,
						password: credentials?.password,
					},
					
				});
	
				if (user != null) {
					// console.log('AUTHORIZE USER HERE');
					// console.log('User om authorize',user);
					
					return user
				} else {
					// console.log('AUTHORIZE USER NOT HERE');
                    
					return null && 'Not authorised';
				}
			},
			
		}),
	],

	
	pages: {
		signIn: "/login",
		error: "/errorPage"
	},


	secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
