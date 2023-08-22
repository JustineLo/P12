import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Layout from "../layout/Layout";
import { API } from "../api";
import Activity from "./Activity";
import AverageSessions from "./AverageSessions";
import KeyData from "./KeyData";
import Performance from "./Performance";
import Score from "./Score";

const {
  fetchActivityData,
  fetchAverageSessionsData,
  fetchPerformanceData,
  fetchUserData,
} = API;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 40px 60px;
  gap: 40px;
  width: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
  width: 100%;

  @media (min-width: 1330px) {
    flex-direction: row;
  }
`;

const LeftCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;

  @media (min-width: 1330px) {
    width: 90%;
    max-width: 800px;
  }
`;
const RightCol = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 1330px) {
    width: 10%;
  }
`;
const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  }, [id]);

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
            <RightCol>
              <KeyData data={user} />
            </RightCol>
          </Body>
        </Container>
      )}
    </Layout>
  );
};

export default Dashboard;
