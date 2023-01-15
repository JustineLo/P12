import React from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = () => {
  const navlinks = ["Accueil", "Profil", "Réglages", "Communauté"];
  return (
    <>
      <nav className={styles.navbar}>
        <Logo alt="logo" />
        <div className={styles.navlinks}>
          {navlinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
