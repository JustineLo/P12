import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Container = styled.div`
  display: flex;
  gap: 24px;
  background-color: var(--bg-light);
  padding: 32px 0 32px 32px;
  width: 258px;
  border-radius: 5px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Quantity = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

const Name = styled.p`
  color: rgba(116, 121, 140, 1);
  font-weight: 600;
  font-size: 14px;
`;

const Count = ({ icon, color, name, quantity, unit }) => {
  return (
    <Container>
      <Icon img={icon} color={color} size="16px" />
      <Infos>
        <Quantity>
          {quantity} {unit}
        </Quantity>
        <Name>{name}</Name>
      </Infos>
    </Container>
  );
};

export default Count;
