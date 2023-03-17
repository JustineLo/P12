import PropTypes from "prop-types";
import React from "react";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

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

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
