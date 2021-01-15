import logo from "../Images/logoOTRA.png";
import styled from "styled-components";
import MenuBurger from "./Burger/MenuBurger";
import { Container, Col, Row } from "reactstrap";
import LogOut from "./LogOut";

const Header = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <MenuBurger />
          </Col>
          <Col>
            <LogoHeader src={logo} alt="TravelR, your trip at a glence" />
          </Col>
          <Col>
            <LogOut />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const LogoHeader = styled.img`
  width: 100px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;
export default Header;
