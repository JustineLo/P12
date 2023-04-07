import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Navbar />
        <Content>
          <Sidebar />
          {children}
        </Content>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
