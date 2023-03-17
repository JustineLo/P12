import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./AverageSessions.module.css";

const AverageSessions = ({ sessions }) => {
  const dayOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

  const TooltipContent = (props) => {
    const { active, payload } = props;
    return (
      <>
        {active && payload && payload.length && (
          <div className={styles.tooltip}>
            <p>{payload[0].payload.sessionLength} min</p>
          </div>
        )}
      </>
    );
  };

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
    <div className={styles.chartcontainer}>
      <h3>Durée moyenne des sessions</h3>
      <AreaChart
        width={250}
        height={250}
        margin={{ top: 60, right: 20, left: 20, bottom: 5 }}
        data={sessions}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          stroke="white"
          tickFormatter={(value) => dayOfWeek[value - 1]}
        />
        <YAxis hide />
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={false}
          vertical={false}
        />
        <Tooltip content={<TooltipContent />} />
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
  );
};

export default AverageSessions;
