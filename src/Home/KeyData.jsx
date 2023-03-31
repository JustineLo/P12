import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import apple from "../assets/apple.png";
import cheeseburger from "../assets/cheeseburger.png";
import chicken from "../assets/chicken.png";
import energy from "../assets/energy.png";
import Count from "../components/Count";

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  @media (min-width: 1330px) {
    flex-direction: column;
    gap: 39px;
  }
`;

const KeyData = ({ data }) => {
  const counts = [
    {
      icon: energy,
      color: "var(--red)",
      name: "Calories",
      quantity: data.calorieCount,
      unit: "kcal",
    },
    {
      icon: chicken,
      color: "var(--blue)",
      name: "Protéines",
      quantity: data.proteinCount,
      unit: "g",
    },
    {
      icon: apple,
      color: "var(--yellow)",
      name: "Glucides",
      quantity: data.carbohydrateCount,
      unit: "g",
    },
    {
      icon: cheeseburger,
      color: "var(--pink)",
      name: "Lipides",
      quantity: data.lipidCount,
      unit: "g",
    },
  ];

  return (
    <Container>
      {counts.map((count, index) => {
        return (
          <Count
            key={index}
            icon={count.icon}
            color={count.color}
            name={count.name}
            quantity={count.quantity}
            unit={count.unit}
          />
        );
      })}
    </Container>
  );
};

KeyData.propTypes = {
  data: PropTypes.object,
};

export default KeyData;
