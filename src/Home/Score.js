import React from "react";
import { RadialBar, RadialBarChart, Tooltip } from "recharts";
import styles from "./Score.module.css";

const Score = ({ score }) => {
  const dataScore = [{ score: score * 100 }];
  return (
    <div className={styles.container}>
      <h3>Score</h3>
      <div className={styles.score}>
        <p className={styles.percentage}>{dataScore[0].score}%</p>
        <p>de votre objectif</p>
      </div>
      <RadialBarChart
        width={330}
        height={250}
        innerRadius="65%"
        outerRadius="80%"
        data={dataScore}
        startAngle={90}
        endAngle={90 + (dataScore[0].score * 360) / 100}
      >
        <RadialBar
          minAngle={15}
          clockWise={true}
          fill="var(--primary)"
          dataKey="score"
          cornerRadius={100}
        />
        <Tooltip />
      </RadialBarChart>
    </div>
  );
};

export default Score;
