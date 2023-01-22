import React, { useEffect, useState } from "react";
import styles from "./Activity.module.css";
import apple from "../assets/apple.png";
import cheeseburger from "../assets/cheeseburger.png";
import chicken from "../assets/chicken.png";
import energy from "../assets/energy.png";
import Count from "../components/Count";
import { fetchData } from "../utils";

const KeyData = ({}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData();
      setData(data);
    };
    fetch();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "39px" }}>
      <Count
        icon={energy}
        color="var(--red)"
        name="Calories"
        quantity={data.calorieCount}
        unit="kcal"
      />
      <Count
        icon={chicken}
        color="var(--blue)"
        name="Calories"
        quantity={data.calorieCount}
        unit="kcal"
      />
      <Count
        icon={apple}
        color="var(--yellow)"
        name="Calories"
        quantity={data.calorieCount}
        unit="kcal"
      />
      <Count
        icon={cheeseburger}
        color="var(--pink)"
        name="Calories"
        quantity={data.calorieCount}
        unit="kcal"
      />
    </div>
  );
};

export default KeyData;
