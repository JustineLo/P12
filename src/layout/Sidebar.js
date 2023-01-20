import React from "react";
import Icon from "../components/Icon";
import styles from "./Sidebar.module.css";
import icon1 from "../assets/sidebarIcon1.png";
import icon2 from "../assets/sidebarIcon2.png";
import icon3 from "../assets/sidebarIcon3.png";
import icon4 from "../assets/sidebarIcon4.png";

const Sidebar = () => {
  const icons = [icon1, icon2, icon3, icon4];
  const text = "Copyright, SportSee 2020";
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.icons}>
          {icons.map((icon, index) => (
            <Icon img={icon} color="#fff" size="30px" key={index} />
          ))}
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};

export default Sidebar;
