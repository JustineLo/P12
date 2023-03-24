import PropTypes from "prop-types";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

const TooltipContainer = styled.div`
   {
    background-color: white;
    padding: 5px;
    border: none;
    outline: none;
    color: black;
  }
`;

const ChartContainer = styled.div`
  border-radius: 5px;
  background-color: var(--primary);
  width: fit-content;
  height: 50vh;
  width: 33%;
`;

const AverageSessions = ({ sessions }) => {
  const dayOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

  const TooltipContent = (props) => {
    const { active, payload } = props;
    return (
      <>
        {active && payload && payload.length && (
          <TooltipContainer>
            <p>{payload[0].payload.sessionLength} min</p>
          </TooltipContainer>
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
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={sessions}
          margin={{ top: 30, bottom: 30, left: 0, right: 0 }}
        >
          <text y="50" fill="white">
            Durée moyenne des sessions
          </text>
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
      </ResponsiveContainer>
    </ChartContainer>
  );
};

AverageSessions.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.object),
};

export default AverageSessions;
