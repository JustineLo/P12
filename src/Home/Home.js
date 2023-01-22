import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { fetchData } from "../utils";
import Header from "../components/Header";
import KeyData from "./KeyData";
import apple from "../assets/apple.png";
import cheeseburger from "../assets/cheeseburger.png";
import chicken from "../assets/chicken.png";
import energy from "../assets/energy.png";
import Count from "../components/Count";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData();
      setUser(data);
    };
    fetch();
  }, []);

  return (
    <div className={styles.home}>
      <Header name={user.firstName} />
      <div className={styles.body}>
        <div className={styles.leftCol}>left</div>
        <div className={styles.rightCol}>
          <Count
            icon={energy}
            color="var(--red)"
            name="Calories"
            quantity={user.calorieCount}
            unit="kcal"
          />
          <Count
            icon={chicken}
            color="var(--blue)"
            name="Calories"
            quantity={user.calorieCount}
            unit="kcal"
          />
          <Count
            icon={apple}
            color="var(--yellow)"
            name="Calories"
            quantity={user.calorieCount}
            unit="kcal"
          />
          <Count
            icon={cheeseburger}
            color="var(--pink)"
            name="Calories"
            quantity={user.calorieCount}
            unit="kcal"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
