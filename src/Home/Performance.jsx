import PropTypes from "prop-types";
import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  border-radius: 5px;
  background-color: var(--dark-grey);
  width: fit-content;
  height: fit-content;
`;

const Performance = ({ kind, performancesData }) => {
  return (
    <ChartContainer>
      <RadarChart
        outerRadius={90}
        width={290}
        height={290}
        data={performancesData}
        legend={false}
      >
        <PolarGrid stroke="white" radialLines={false} width={100} />
        <PolarAngleAxis dataKey="kind" tickFormatter={(index) => kind[index]} />
        <Radar dataKey="kind" fill="var(--primary)" fillOpacity={0.6} />
      </RadarChart>
    </ChartContainer>
  );
};

Performance.propTypes = {
  kind: PropTypes.object,
  performancesData: PropTypes.arrayOf(PropTypes.object),
};

export default Performance;
