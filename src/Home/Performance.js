import React, { useEffect, useState } from "react";
import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { fetchPerformanceData } from "../utils";

const Performance = () => {
  const [kind, setKind] = useState([]);
  const [performancesData, setPerformancesData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchPerformanceData();
      setKind(data);
      setPerformancesData(data.data);
    };
    fetch();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "var(--dark-grey)",
          width: "fit-content",
          padding: "20px",
        }}
      >
        <RadarChart
          outerRadius={90}
          width={250}
          height={250}
          data={performancesData}
        >
          <PolarGrid stroke="white" />
          <PolarAngleAxis dataKey="kind" />
          <Radar
            name="Mike"
            dataKey="value"
            fill="var(--primary)"
            fillOpacity={0.6}
          />

          <Legend />
        </RadarChart>
      </div>
    </>
  );
};

export default Performance;
