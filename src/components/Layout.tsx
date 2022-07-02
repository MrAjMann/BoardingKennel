import React, { FC } from "react";

import styles from "../styles/Layout.module.css";
import Footer from "./Footer/Footer";

interface Props {
  // any props that come into the component
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children })=> {
  return (
    <>
    
      <div className={styles.container}>
        <main className={styles.main} >{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
