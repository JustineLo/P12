import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
   {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 20px;
  }
`;

function Homepage() {
  return (
    <Container>
      <h2>Quel profil souhaitez-vous consulter ?</h2>
      <Link to="/dashboard/18">Cecilia</Link>
    </Container>
  );
}

export default Homepage;
