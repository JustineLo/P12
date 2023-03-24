import PropTypes from "prop-types";
import React from "react";
import { RadialBar, RadialBarChart, Tooltip } from "recharts";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--bg-light);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Score = ({ score }) => {
  const dataScore = [{ score: score * 100 }];
  return (
    <Container>
      <RadialBarChart
        width={330}
        height={250}
        innerRadius="65%"
        outerRadius="80%"
        data={dataScore}
        startAngle={90}
        endAngle={90 + (dataScore[0].score * 360) / 100}
      >
        <text y="30" x="24">
          Score
        </text>
        <text y="110" x="150" fontWeight="bold" fontSize="26px">
          {dataScore[0].score}%
        </text>
        <text y="140" x="145">
          de votre
        </text>
        <text y="160" x="148">
          objectif
        </text>
        <RadialBar
          minAngle={15}
          clockWise={true}
          fill="var(--primary)"
          E
          dataKey="score"
          cornerRadius={100}
        />
        <Tooltip />
      </RadialBarChart>
    </Container>
  );
};

Score.propTypes = {
  score: PropTypes.number,
};

export default Score;
