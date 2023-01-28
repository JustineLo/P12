import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { fetchActivityData } from "../utils";
import styles from "./Activity.module.css";

const Activity = () => {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchActivityData();
      setActivity(data.sessions);
    };
    fetch();
  }, []);

  return (
    <div className={styles.activity}>
      <div className={styles.header}>
        <h3>Activité quotidienne</h3>
        <div className={styles.legend}>
          <div className={styles.legendContent}>
            <div className={styles.legendBlackDot} />
            <p>Poids (kg)</p>
          </div>
          <div className={styles.legendContent}>
            <div className={styles.legendRedDot} />
            <p>Calories (kCal)</p>
          </div>
        </div>
      </div>
      <BarChart width={730} height={250} data={activity}>
        <CartesianGrid
          strokeDasharray="2 2"
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey="index" tickLine={false} axisLine={false} />
        <YAxis orientation="right" tickLine={false} axisLine={false} />
        <Tooltip
          itemStyle={{ color: "white" }}
          wrapperStyle={{ border: "none", outline: "none" }}
          contentStyle={{
            backgroundColor: "red",
            color: "white",
          }}
        />

        <Bar
          dataKey="kilogram"
          fill="var(--dark-grey)"
          radius={[10, 10, 0, 0]}
          barSize={10}
        />
        <Bar
          dataKey="calories"
          fill="var(--primary)"
          radius={[10, 10, 0, 0]}
          barSize={10}
        />
      </BarChart>
    </div>
  );
};

export default Activity;
