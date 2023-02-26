import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fetchAverageSessionsData } from "../utils";

const AverageSessions = () => {
  const [sessions, setSessions] = useState([]);
  const dayOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchAverageSessionsData();
      setSessions(data.sessions);
    };
    fetch();
  }, []);

  const ActiveDot = (props) => {
    const { cx } = props;

    return (
      <>
        <rect
          x={cx}
          y="0"
          width="25000"
          height="25000"
          fill="var(--primary-dark)"
        />
      </>
    );
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "var(--primary)",
          width: "fit-content",
          padding: "20px",
        }}
      >
        <AreaChart width={250} height={250} data={sessions}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value, index) => dayOfWeek[index]}
          />
          <YAxis hide />
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
            vertical={false}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            fillOpacity={1}
            fill="none"
            activeDot={<ActiveDot />}
          />
        </AreaChart>
      </div>
    </>
  );
};

export default AverageSessions;
