import React, { useEffect, useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { fetchPerformanceData } from "../utils";

const Performance = () => {
  const [kind, setKind] = useState([]);
  const [performancesData, setPerformancesData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchPerformanceData();
      setKind(data.kind);
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
          borderRadius: "5px",
        }}
      >
        <RadarChart
          outerRadius={90}
          width={250}
          height={250}
          data={performancesData}
          legend={false}
        >
          <PolarGrid stroke="white" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={(index) => kind[index]}
          />
          <Radar dataKey="kind" fill="var(--primary)" fillOpacity={0.6} />
        </RadarChart>
      </div>
    </>
  );
};

export default Performance;
