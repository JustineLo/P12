import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
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
  const [kind, setKind] = useState({});
  const [performancesData, setPerformancesData] = useState([]);
  const [score, setScore] = useState(0);
  const { id } = useParams();
  const [errorId, setErrorId] = useState(false);

  useEffect(() => {
    (async () => {
      const SuperPromise = Promise.all([
        fetchUserData(id),
        fetchActivityData(id),
        fetchAverageSessionsData(id),
        fetchPerformanceData(id),
      ]);
      try {
        const [userData, activityData, sessionsData, performanceData] =
          await SuperPromise;
        setUser(userData);
        setScore(userData.score);
        setActivity(activityData.sessions);
        setSessions(sessionsData.sessions);
        setKind(performanceData.kind);
        setPerformancesData(performanceData.data);
      } catch (error) {
        setErrorId(true);
      }
    })();
  }, []);

  return (
    <Layout>
      {errorId ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Cet identifiant n'existe pas</p>
          <Link to="/">Retour à l'accueil</Link>
        </div>
      ) : (
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
      )}
    </Layout>
  );
};

export default Dashboard;
