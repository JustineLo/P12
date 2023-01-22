import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fetchActivityData } from "../utils";
import styles from "./Activity.module.css";

const Activity = () => {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchActivityData();
      setActivity(data);
    };
    fetch();
  }, []);

  return (
    <>
      <BarChart width={730} height={250} data={activity}>
        <CartesianGrid
          strokeDasharray="2 2"
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey="name" tickLine={false} />
        <YAxis orientation="right" tickLine={false} axisLine={false} />
        <Tooltip />
        <Legend />s
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
    </>
  );
};

export default Activity;
