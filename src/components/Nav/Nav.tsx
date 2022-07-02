import Link from "next/link";

import { trpc } from "../../utils/trpc";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaBars } from "react-icons/fa";
import styledNav from "./Nav.module.css";


const Nav = (props: any) => {

  const {data, isLoading} = trpc.useQuery(["users.getUser"])

  if (isLoading || !data) return <div>Loading...</div>
  // console.log(...data)
 
  return (
    <nav className={styledNav.nav}>
      <div className={styledNav.logo}>
        <Link href="/">Boarding Kennels</Link>{" "}
      </div>
      <div className={styledNav.mobNavBars}>
        <FaBars />
      </div>
        <ul className={styledNav.menuItems}>
          {/* <li className={styledNav.menuItem}><Link href='/services'>Services</Link></li> */}
          {/* <li className={styledNav.menuItem}><Link href='/signOut'>Sign up</Link></li> */}
          {/* Hide if logged in as user */}
          {/* <NavLoginButton /> */}
          {/* Hide if not logged in as user */}
          <li className={styledNav.menuItem}><p>{data[0]?.username}</p></li>
        </ul>
      
    </nav>
  )
};

export default Nav;


//  const NavLoginButton = () => {
//   const { data: session, status } = useSession()
//   console.log(status)
//   if (!session) {
//     return (
//       <li className={styledNav.menuItem}><Link href="/api/auth/signin">login</Link></li>
//   )
//   } else {
//     return (
//       <li className={styledNav.menuItem}><Link href="/api/auth/signout">Logout </Link> </li>
//       )
//   }
//   }