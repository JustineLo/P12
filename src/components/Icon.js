import React from "react";
import styles from "./Icon.module.css";

const Icon = ({ img, color, size }) => {
  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundColor: color ? color : "white",
        }}
      >
        <img src={img} alt="icon" style={{ width: size }} />
      </div>
    </>
  );
};

export default Icon;
