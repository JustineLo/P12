import React from "react";
import styles from "./Icon.module.css";

const Icon = ({ img, color, size }) => {
  return (
    <>
      <div className={styles.container}>
        <img src={img} alt="icon" style={{ color: color, width: size }} />
      </div>
    </>
  );
};

export default Icon;
