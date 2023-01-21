import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { fetchData } from "../utils";
import Header from "../components/Header";

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
    <>
      <Header name={user.firstName} />
    </>
  );
};

export default Home;
