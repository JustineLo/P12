import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { fetchData } from "../utils";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData();
      setUser(data);
    };
    fetch();
  }, []);

  return <>{user.firstName}</>;
};

export default Home;
