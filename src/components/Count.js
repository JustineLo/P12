import React from "react";
import Icon from "./Icon";
import styles from "./Count.module.css";

const Count = ({ icon, color, name, quantity, unit }) => {
  return (
    <div className={styles.count}>
      <Icon img={icon} color={color} size="16px" />
      <div className={styles.infos}>
        <p className={styles.quantity}>
          {quantity} {unit}
        </p>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};

export default Count;
