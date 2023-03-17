import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import Layout from "../layout/Layout";
import {
  fetchActivityData,
  fetchAverageSessionsData,
  fetchPerformanceData,
  fetchUserData,
} from "../utils";
import Activity from "./Activity";
import AverageSessions from "./AverageSessions";
import styles from "./Dashboard.module.css";
import KeyData from "./KeyData";
import Performance from "./Performance";
import Score from "./Score";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [activity, setActivity] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [kind, setKind] = useState([]);
  const [performancesData, setPerformancesData] = useState([]);
  const [score, setScore] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const userData = await fetchUserData(id);
      const activityData = await fetchActivityData(id);
      const sessionsData = await fetchAverageSessionsData(id);
      const performanceData = await fetchPerformanceData(id);
      setUser(userData);
      setScore(userData.score);
      setActivity(activityData.sessions);
      setSessions(sessionsData.sessions);
      setKind(performanceData.kind);
      setPerformancesData(performanceData.data);
    };
    fetch();
  }, []);

  return (
    <Layout>
      <div className={styles.home}>
        <Header name={user.firstName} />
        <div className={styles.body}>
          <div className={styles.leftCol}>
            <Activity activity={activity} />
            <div className={styles.stats}>
              <AverageSessions sessions={sessions} />
              <Performance kind={kind} performancesData={performancesData} />
              <Score score={score} />
            </div>
          </div>
          <KeyData data={user} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
