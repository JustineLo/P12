import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const IconContainer = styled.div`
  border-radius: 6px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "white"};

  img {
    width: ${(props) => props.imgWidth || "32px"};
  }
`;

const Icon = ({ img, color, size }) => {
  return (
    <>
      <IconContainer color={color} imgWidth={size}>
        <img src={img} alt="icon" style={{ width: size }} />
      </IconContainer>
    </>
  );
};

Icon.propTypes = {
  img: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
