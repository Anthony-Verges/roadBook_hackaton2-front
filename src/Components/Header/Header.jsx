import logo from "../Images/logoOTRA.png";
import styled from "styled-components";
import MenuBurger from "./Burger/MenuBurger";
import { Container, Col, Row } from "reactstrap";
import LogOut from "./LogOut";

const Header = () => {
  return (
    <Container>
      <HeaderGrid>
        <Col>
          <MenuBurger />
        </Col>
        <Col>
          <LogoHeader src={logo} alt="TravelR, your trip at a glence" />
        </Col>
        <Col>
          <LogOut />
        </Col>
      </HeaderGrid>
    </Container>
  );
};

const HeaderGrid = styled(Row)`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

const LogoHeader = styled.img`
  width: 100px;
`;
export default Header;
