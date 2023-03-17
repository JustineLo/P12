import PropTypes from "prop-types";
import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

const Performance = ({ kind, performancesData }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--dark-grey)",
          width: "fit-content",
          height: "fit-content",
          borderRadius: "5px",
        }}
      >
        <RadarChart
          outerRadius={90}
          width={250}
          height={250}
          data={performancesData}
          legend={false}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
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

Performance.propTypes = {
  kind: PropTypes.object,
  performancesData: PropTypes.array,
};

export default Performance;
