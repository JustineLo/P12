import React from "react";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <div className={styles.layout}>
        <Navbar />
        <div className={styles.content}>
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
