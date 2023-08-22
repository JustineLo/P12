import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Container = styled.div`
  height: 90px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 87px 15px 28px;
  gap: 49px;
`;

const Navlinks = styled.div`
  display: flex;
  gap: 126px;

  button {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
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
            <button key={link}>{link}</button>
          ))}
        </Navlinks>
      </Container>
    </>
  );
};

export default Navbar;
