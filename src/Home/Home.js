import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { fetchUserData } from "../utils";
import Activity from "./Activity";
import AverageSessions from "./AverageSessions";
import styles from "./Home.module.css";
import KeyData from "./KeyData";
import Performance from "./Performance";
import Score from "./Score";

const Home = () => {
  const [user, setUser] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchUserData();
      setUser(data);
      setScore(data.score);
    };
    fetch();
  }, []);

  return (
    <div className={styles.home}>
      <Header name={user.firstName} />
      <div className={styles.body}>
        <div className={styles.leftCol}>
          <Activity />
          <div className={styles.stats}>
            <AverageSessions />
            <Performance />
            <Score score={score} />
          </div>
        </div>
        <KeyData />
      </div>
    </div>
  );
};

export default Home;
