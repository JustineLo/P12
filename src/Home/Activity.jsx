import PropTypes from "prop-types";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--bg-light);
  padding: 24px 26px 10px 26px;
  border-radius: 5px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Legend = styled.div`
  display: flex;
`;

const LegendContent = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background-color: ${(props) => props.color};
`;

const Activity = ({ activity }) => {
  return (
    <Container>
      <Header>
        <h3>Activité quotidienne</h3>
        <Legend>
          <LegendContent>
            <Dot color="black" />
            <p>Poids (kg)</p>
          </LegendContent>
          <LegendContent>
            <Dot color="var(--primary)" />
            <p>Calories (kCal)</p>
          </LegendContent>
        </Legend>
      </Header>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={activity} margin={{ right: 0 }}>
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="sessions"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value, index) => index + 1}
          />
          <YAxis orientation="right" tickLine={false} axisLine={false} />
          <Tooltip
            itemStyle={{ color: "white" }}
            wrapperStyle={{ border: "none", outline: "none" }}
            contentStyle={{
              backgroundColor: "red",
              color: "white",
            }}
          />

          <Bar
            dataKey="kilogram"
            fill="var(--dark-grey)"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey="calories"
            fill="var(--primary)"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

Activity.propTypes = {
  activity: PropTypes.arrayOf(PropTypes.object),
};

export default Activity;
