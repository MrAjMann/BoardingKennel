import Link from "next/link";

import { trpc } from "../../utils/trpc";

import { FaBars } from "react-icons/fa";
import styledNav from "./Nav.module.css";


const Nav = (props: any) => {
  const {data, isLoading} = trpc.useQuery(["getAllUsers"])

  if (isLoading || !data) return <div>Loading...</div>
  console.log(data)
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
          {/* Hide if logged in as user */}
          <li className={styledNav.menuItem}><Link href='/login'>Login</Link></li>
          {/* Hide if not logged in as user */}
          <li className={styledNav.menuItem}><p>{data[0]?.firstName}</p></li>
        </ul>
      
    </nav>
  );
};

export default Nav;
