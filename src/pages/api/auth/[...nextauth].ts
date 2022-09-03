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
			type: "credentials",
			credentials: {
				// email: {
				// 	label: "email",
				// 	type: "email",
				// 	placeholder: "Enter Your name",
				// },
				// password: {
				// 	label: "password",
				// 	type: "password",
				// },
			},

			async authorize(credentials, req) { 
				console.log("Credentials",credentials);
				
				const { email, password } = credentials as {
					email: string;
					password: string;
				  };
				
				console.log('REQ', email)

				const user =  await prisma?.user?.findFirst({
					where: {
						email: email,
						password:  password,
						// email: credentials?.email || "john@test.com",
						// password: credentials?.password || "testing",
					},
					
				});

				console.log("USER", user);
				
				if (user?.email && user?.password) {
					// console.log('AUTHORIZE USER HERE');
					// console.log('User om authorize',user);
					
					return user
				} else {
					
					// console.log('AUTHORIZE USER NOT HERE');
                    
					return null ;
				}
				
				
			},
		}),
		
	],
	pages: {
		signIn: "/auth/login",
		error: "/errorPage"
	},
	debug: true,
	
	
	
	secret: process.env.NEXT_PUBLIC_SECRET,
	// The maximum age of the NextAuth.js issued JWT in seconds.
	// Defaults to `session.maxAge`.
	
	// You can define your own encode/decode functions for signing and encryption
	// if you want to override the default behavior.
	// async encode({ secret, token, maxAge }) {},
	// async decode({ secret, token }) {},
	
};

export default NextAuth(authOptions);


