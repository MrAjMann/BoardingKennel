import Link from "next/link";
import { useState } from 'react'
import { trpc } from "../../utils/trpc";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaBars, FaTimes } from "react-icons/fa";
import styledNav from "./Nav.module.css";

const Nav = () => {

  return (
    <>
      <NavMobileNavBars />
      <NavDesktop />
    </>
  )


};

export default Nav;


const NavLoginButton = () => {
  
  // console.log('sessionNav: ', session);
  const { data: session, status } = useSession()


  if (!session) {
    return (
      <li className={styledNav.menuItem}><Link href="/auth/login">login</Link></li>
    )
  }
  return (
    <>
      {/* <div><p style={{color: 'blue'}}>{session?.user.firstName || undefined}</p></div> */}
      <div><p>{session.user?.email}</p></div>

      <li className={styledNav.menuItem}><Link href="/api/auth/signout">Logout </Link> </li>
    </>
  )


}


const NavMobileNavBars = () => {
  const { data: session, status } = useSession()

  const [open, setNavOpen] = useState<boolean>(false)
  const toggle = () => {
    setNavOpen(!open)
  }

  if (!open) {
    return (
      <nav className={styledNav.mobileNav}>
        <div className={styledNav.logo}>
          <Link href="/">KMS</Link>{" "}
        </div>
        <ul className={styledNav.mobileMenuItemsHidden}>

        </ul>
        <div className={styledNav.mobNavBars} onClick={toggle}>
          <FaBars />
        </div>
      </nav>

    )
  }
  return (

    <nav className={styledNav.mobileNavOpen} >
      <div className={styledNav.logo}>
        <Link href="/">KMS</Link>{" "}
      </div>
      <ul className={styledNav.mobileMenuItems}>
        <li className={styledNav.mobileMenuItem}><Link href='/services'>Services</Link></li>
        <li className={styledNav.mobileMenuItem}><Link href='/bookings'>Bookings</Link></li>
        <li className={styledNav.mobileMenuItem}><Link href='/contact'>Contact Us</Link></li>
      </ul>
      <NavLoginButton  session={session}/>

      <div className={styledNav.mobNavBars} onClick={toggle} >
        <FaTimes />
      </div>
    </nav>


  )
}




const NavDesktop = () => {
  const { data: session, status } = useSession()

  return (

    <nav className={styledNav.desktopNav}>
      <div className={styledNav.logo}>
        <Link href="/">KMS</Link>{" "}
      </div>
      <ul className={styledNav.menuItems}>
        <li className={styledNav.menuItem}><Link href='/services'>Services</Link></li>
        <li className={styledNav.menuItem}><Link href='/bookings'>Bookings</Link></li>
        <li className={styledNav.menuItem}><Link href='/contact'>Contact Us</Link></li>
        <NavLoginButton session={session} />
      </ul>
    </nav>
  )
}