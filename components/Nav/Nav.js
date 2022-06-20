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
    </nav>
  );
};

export default Nav;
