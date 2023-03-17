import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import Layout from "../layout/Layout";
import { fetchUserData } from "../utils";
import Activity from "./Activity";
import AverageSessions from "./AverageSessions";
import styles from "./Dashboard.module.css";
import KeyData from "./KeyData";
import Performance from "./Performance";
import Score from "./Score";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [score, setScore] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchUserData(id);
      setUser(data);
      setScore(data.score);
    };
    fetch();
  }, []);

  return (
    <Layout>
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
    </Layout>
  );
};

export default Dashboard;
