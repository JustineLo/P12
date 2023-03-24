import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-weight: 600;
    font-size: 48px;
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
  }

  span {
    color: var(--primary);
  }
`;

const Header = ({ name }) => {
  return (
    <HeaderContainer>
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </HeaderContainer>
  );
};

export default Header;
