import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
import KeyData from "./KeyData";
import Performance from "./Performance";
import Score from "./Score";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 40px 60px;
`;

const Body = styled.div`
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 3fr 1fr;
  width: 100%;
  height: 100%;
`;

const LeftCol = styled.div``;
const RightCol = styled.div``;
const Stats = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
        <Container>
          <Header name={user.firstName} />
          <Body>
            <LeftCol>
              <Activity activity={activity} />
              <Stats>
                <AverageSessions sessions={sessions} />
                <Performance kind={kind} performancesData={performancesData} />
                <Score score={score} />
              </Stats>
            </LeftCol>
            <KeyData data={user} />
          </Body>
        </Container>
      )}
    </Layout>
  );
};

export default Dashboard;
