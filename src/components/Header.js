import React from "react";
import styles from "./Header.module.css";

const Header = ({ name }) => {
  return (
    <header className={styles.header}>
      <h1>
        Bonjour <span className={styles.name}>{name}</span>{" "}
      </h1>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </header>
  );
};

export default Header;
