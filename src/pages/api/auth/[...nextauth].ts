import NextAuth, { type NextAuthOptions } from "next-auth";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { useRouter } from "next/router";
import { prisma } from "../../../server/db/client";

import { userRouter } from "../../../server/router/user.router";
import { trpc } from "../../../utils/trpc";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async jwt({ token, user }) {

			const userData = await prisma.user.findFirst({
				where: {
					id: user?.id
				},
				include: {
					address: {
						select: {
							unitNumber: true,
							streetNumber: true,
							streetName: true,
							suburb: true,
							state: true,
							postcode: true
						}
					}
				},
			})
			// if (user && userData) {
			// token.id = user.id
			// console.log("USER",user);
			// }
			return { ...token, ...user }
		},
		async session({ session, token, user }) {

			// const userData = trpc.useQuery(['auth.getSession']) 

			if ({ session, token }) {
				// console.log("USer",userData);

				session?.user.id && token.id;

				return session
			}
			return session
			// console.log(userData);

			// return {
			// 	session: {
			// 		user: {
			// 			id: session?.user.id,
			// 			firstname: session?.user.firstName,
			// 			lastname: session?.user.lastName,
			// 			email: session?.user.email
			// 			// unitNumber: session?.user.address?.unitNumber,
			// 			// streetNumber: session?.user.address?.streetNumber,
			// 			// streetName: session?.user.address?.streetName,
			// 			// suburb: session?.user.address?.suburb,
			// 			// state: session?.user.address?.state,
			// 			// postcode: session?.user.address?.postcode,
			// 		},
			// 	},

			// }
		}
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
				// console.log("Credentials",credentials);

				const { email, password } = credentials as {
					email: string;
					password: string;
				};

				// console.log('REQ', email)

				const user = await prisma?.user?.findFirst({
					where: {
						email: email,
						password: password,

						// email: credentials?.email || "john@test.com",
						// password: credentials?.password || "testing",
					},
					// include: {
					// 	address: {
					// 		select: {
					// 			unitNumber: true,
					// 			streetNumber: true,
					// 			streetName: true,
					// 			suburb: true,
					// 			state: true,
					// 			postcode: true
					// 		}
					// 	}
					// },
				});

				// console.log("USER", user);

				if (user?.email && user?.password) {
					// console.log('AUTHORIZE USER HERE');
					// console.log('User om authorize',user);

					return user
				} else {

					// console.log('AUTHORIZE USER NOT HERE');

					return null;
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

}


export default NextAuth(authOptions)

