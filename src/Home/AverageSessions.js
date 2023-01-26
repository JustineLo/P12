import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fetchAverageSessionsData } from "../utils";

const AverageSessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchAverageSessionsData();
      setSessions(data.sessions);
    };
    fetch();
  }, []);

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
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis hide />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            fillOpacity={1}
            fill="none"
          />
        </AreaChart>
      </div>
    </>
  );
};

export default AverageSessions;
