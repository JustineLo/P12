import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { fetchUserData } from "../utils";
import Header from "../components/Header";
import KeyData from "./KeyData";
import Activity from "./Activity";
import AverageSessions from "./AverageSessions";
import Performance from "./Performance";
import Score from "./Score";

const Home = () => {
  const [user, setUser] = useState({});
  const [score, setScore] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchUserData();
      setUser(data);
      setScore([{ score: data.score }]);
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
