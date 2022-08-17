import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

 interface ModifiedDefaultUser extends Omit<DefaultUser, "name"> {
  firstName: string;
 }

interface Session {
    user: {
      id: string,
      image: string,
      email: string,
      firstName: string,
      lastName: string,
      pets: [],
    }

    
  }
}


import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

/** Example on how to extend the built-in session types */
// declare module "next-auth" {
//   interface Session {
//     /** This is an example. You can find me in types/next-auth.d.ts */
//     foo: string
//   }
// }

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
  interface JWT {
    /** This is an example. You can find me in types/next-auth.d.ts */
    bar: number,
    id: string
    

  }
}