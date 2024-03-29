import PropTypes from "prop-types";
import React from "react";
import {
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--bg-light);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 250px;
`;

const Score = ({ score }) => {
  const dataScore = [{ score: score * 100 }];
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="65%"
          outerRadius="80%"
          data={dataScore}
          startAngle={90}
          endAngle={90 + (dataScore[0].score * 360) / 100}
        >
          <text y="35" x="24" fontWeight="bold">
            Score
          </text>
          <text y="45%" x="38%" fontWeight="bold" fontSize="26px">
            {dataScore[0].score}%
          </text>
          <text y="54%" x="36%">
            de votre
          </text>
          <text y="62%" x="37%">
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
      </ResponsiveContainer>
    </Container>
  );
};

Score.propTypes = {
  score: PropTypes.number,
};

export default Score;
