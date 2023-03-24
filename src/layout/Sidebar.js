import React from "react";
import styled from "styled-components";
import icon1 from "../assets/sidebarIcon1.png";
import icon2 from "../assets/sidebarIcon2.png";
import icon3 from "../assets/sidebarIcon3.png";
import icon4 from "../assets/sidebarIcon4.png";
import Icon from "../components/Icon";

const Container = styled.div`
  width: 117px;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Text = styled.p`
  color: white;
  font-size: 12px;
  transform: rotate(-90deg);
  padding-right: 200px;
  width: 138px;
`;

const Sidebar = () => {
  const icons = [icon1, icon2, icon3, icon4];
  const text = "Copyright, SportSee 2020";
  return (
    <>
      <Container>
        <Icons>
          {icons.map((icon, index) => (
            <Icon img={icon} color="#fff" size="30px" key={index} />
          ))}
        </Icons>
        <Text>{text}</Text>
      </Container>
    </>
  );
};

export default Sidebar;
