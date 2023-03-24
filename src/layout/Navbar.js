import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Container = styled.div`
  height: 90px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 87px 0 28px;
  gap: 49px;
`;

const Navlinks = styled.div`
  display: flex;
  gap: 126px;

  a {
    color: white;
    text-decoration: none;
    font-size: 24px;
  }
`;

const Navbar = () => {
  const navlinks = ["Accueil", "Profil", "Réglages", "Communauté"];
  return (
    <>
      <Container>
        <Logo alt="logo" />
        <Navlinks>
          {navlinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </Navlinks>
      </Container>
    </>
  );
};

export default Navbar;
