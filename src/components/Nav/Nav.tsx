import Link from "next/link";
import {useState } from 'react'
import { trpc } from "../../utils/trpc";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaBars, FaTimes } from "react-icons/fa";
import styledNav from "./Nav.module.css";






const Nav = () => {
const {data: session, status } = useSession()

  return (
    <nav className={styledNav.nav}>
      <div className={styledNav.logo}>
        <Link href="/">Boarding Kennels</Link>{" "}
      </div>
          <NavMobileNavMenu  />
        <ul className={styledNav.menuItems}>
          <li className={styledNav.menuItem}><Link href='/services'>Services</Link></li>
          {/* <li className={styledNav.menuItem}><Link href='/signOut'>Sign up</Link></li> */}
          {/* Hide if logged in as user */}
          <NavLoginButton />
          {/* Hide if not logged in as user */}
        
        <div><p>{session?.user.email}</p></div>
        
        </ul>
    </nav>
  )
  

};

export default Nav;


 const NavLoginButton = () => {
  const { data: session, status } = useSession()
 
  if (!session) {
    return (

      <li className={styledNav.menuItem}><Link href="/login">login</Link></li>
  )
  } 
    return (
      
      <li className={styledNav.menuItem}><Link href="/api/auth/signout">Logout </Link> </li>
      
    ) 
     
  
  }


  const NavMobileNavMenu = () => {
    
    // const [toggle, isToggled] = useState<boolean>(false)
  const [open, setNavOpen] = useState<boolean>(false)



    const toggle = () => {
      setNavOpen(!open)
    }
    // console.log(toggle);


  

    if (!open) {
      return (

        <div className={styledNav.mobNavBars} onClick={toggle}>
    <FaBars />
    </div>
        )
    }
     return (

      <div className={styledNav.mobNavBars} onClick={toggle}>
        <FaTimes />
      </div>
     )
  }