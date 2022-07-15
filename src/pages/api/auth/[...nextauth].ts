import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { type NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
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
				// console.log('req', _req)
				// console.log('cred', credentials)

				const user = await prisma?.user?.findFirst({
					where: {
						email: credentials?.email,
						password: credentials?.password,
					},
				});

				console.log("user", user);
				if (user) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async session({ session, token, user, ...rest }) {
			console.log("in session callback,", { session, token, user, rest });

			if (token) {
				session.id = token.id;
			}
			console.log("sessionID: ", session.id);
			return session;
		},
		async jwt({ token, user, account, ...rest }) {
			console.log("in jwt user =", { token, user, account, rest });
			if (token.sub === user?.id) {
				console.log("token = id");
			}
			if (user) {
				token.id = user.id;
			}

			return token;
		},

		async redirect() {
			return "/";
		},
	},
	events: {
		async signIn(message) {
			" on successful sign in ";
		},
		async session(message) {
			" session is active  ";
		},
	},
	pages: {
		signIn: "/login",
	},
	session: {
		strategy: "jwt",
	},

	secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
