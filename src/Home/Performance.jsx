import PropTypes from "prop-types";
import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  border-radius: 5px;
  background-color: var(--dark-grey);
  width: 30%;
  height: 250px;
`;

const Performance = ({ kind, performancesData }) => {
  const reversedPerformancesData = performancesData.reverse();
  let reversedKind = [];
  for (let i = Object.keys(kind).length; i > 0; i--) {
    reversedKind.push(kind[i]);
  }

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={70}
          data={reversedPerformancesData}
          legend={false}
        >
          <PolarGrid stroke="white" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickSize={8}
            tickFormatter={(index) => reversedKind[index - 1]}
          />
          <Radar dataKey="kind" fill="var(--primary)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

Performance.propTypes = {
  kind: PropTypes.object,
  performancesData: PropTypes.arrayOf(PropTypes.object),
};

export default Performance;
