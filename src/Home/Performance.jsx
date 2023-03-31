import PropTypes from "prop-types";
import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer
} from "recharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  border-radius: 5px;
  background-color: var(--dark-grey);
  width: 30%;
  height: 100%;
`;

const Performance = ({ kind, performancesData }) => {
  const reversedPerformancesData = performancesData.reverse();
  const data = reversedPerformancesData.map((obj) => ({
    ...obj,
    category: kind[obj.kind]
  }))

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={70}
          data={data}
          legend={false}
        >
          <PolarGrid stroke="white" radialLines={false} />
          <PolarAngleAxis
            dataKey="category"
            tickSize={8}
          />
          <Radar dataKey="value" fill="var(--primary)" fillOpacity={0.6} />
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
