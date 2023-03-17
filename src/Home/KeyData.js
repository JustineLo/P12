import React from "react";
import apple from "../assets/apple.png";
import cheeseburger from "../assets/cheeseburger.png";
import chicken from "../assets/chicken.png";
import energy from "../assets/energy.png";
import Count from "../components/Count";

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
    <div style={{ display: "flex", flexDirection: "column", gap: "39px" }}>
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
    </div>
  );
};

export default KeyData;
