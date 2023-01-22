import React, { useEffect, useState } from "react";
import styles from "./Activity.module.css";
import apple from "../assets/apple.png";
import cheeseburger from "../assets/cheeseburger.png";
import chicken from "../assets/chicken.png";
import energy from "../assets/energy.png";
import Count from "../components/Count";

const KeyData = ({ data }) => {
  return (
    <>
      <Count
        icon={apple}
        color="var(--red)"
        name="Calories"
        quantity={data}
        unit="kcal"
      />
    </>
  );
};

export default KeyData;
