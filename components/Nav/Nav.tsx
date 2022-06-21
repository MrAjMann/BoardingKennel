import Link from "next/link";

import { FaBars } from "react-icons/fa";
import styledNav from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={styledNav.nav}>
      <div className={styledNav.logo}>
        <Link href="/">Boarding Kennels</Link>{" "}
      </div>
      <div className={styledNav.mobNavBars}>
        <FaBars />
      </div>
      
        <ul className={styledNav.menuItems}>
          <li className={styledNav.menuItem}><Link href='/services'>Services</Link></li>
          <li className={styledNav.menuItem}><Link href='/signup'>Sign up</Link></li>
          <li className={styledNav.menuItem}><Link href='/login'>Login</Link></li>
        </ul>
      
    </nav>
  );
};

export default Nav;
