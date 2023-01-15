import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
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
