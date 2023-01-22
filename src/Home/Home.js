import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { fetchUserData } from "../utils";
import Header from "../components/Header";
import KeyData from "./KeyData";
import Activity from "./Activity";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchUserData();
      setUser(data);
    };
    fetch();
  }, []);

  return (
    <div className={styles.home}>
      <Header name={user.firstName} />
      <div className={styles.body}>
        <div className={styles.leftCol}>
          <Activity />
        </div>
        <KeyData />
      </div>
    </div>
  );
};

export default Home;
